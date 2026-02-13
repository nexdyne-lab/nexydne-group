import { eq, desc, sql, and, gte, lte, like } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, users, 
  InsertLead, leads, Lead,
  caseStudyAnalytics, InsertCaseStudyAnalytic,
  notificationSettings, InsertNotificationSetting
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Calculate lead score based on engagement signals
 * Score factors:
 * - Has company name: +20
 * - Has job title: +15
 * - Has first and last name: +10
 * - Marketing consent given: +15
 * - Case study from high-value industry: +20
 * - Base score: 20
 */
function calculateLeadScore(lead: InsertLead): number {
  let score = 20; // Base score
  
  if (lead.company) score += 20;
  if (lead.jobTitle) score += 15;
  if (lead.firstName && lead.lastName) score += 10;
  if (lead.marketingConsent === 1) score += 15;
  
  // High-value industries
  const highValueIndustries = ['financial', 'healthcare', 'technology', 'manufacturing', 'enterprise'];
  const industry = (lead.caseStudyIndustry || '').toLowerCase();
  if (highValueIndustries.some(hv => industry.includes(hv))) {
    score += 20;
  }
  
  return Math.min(score, 100); // Cap at 100
}

/**
 * Insert a new lead from case study PDF download
 */
export async function insertLead(lead: InsertLead): Promise<{ success: boolean; id?: number; error?: string; leadScore?: number }> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot insert lead: database not available");
    return { success: false, error: "Database not available" };
  }

  try {
    const leadScore = calculateLeadScore(lead);
    const result = await db.insert(leads).values({
      ...lead,
      leadScore,
    });
    
    // Update case study analytics
    if (lead.caseStudyTitle) {
      await updateCaseStudyAnalytics(lead.caseStudyTitle, lead.caseStudyIndustry || null, leadScore);
    }
    
    return { success: true, id: Number(result[0].insertId), leadScore };
  } catch (error) {
    console.error("[Database] Failed to insert lead:", error);
    return { success: false, error: "Failed to save lead" };
  }
}

/**
 * Update case study analytics when a new lead downloads
 */
async function updateCaseStudyAnalytics(caseStudyTitle: string, caseStudyIndustry: string | null, leadScore: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    // Check if analytics record exists
    const existing = await db.select()
      .from(caseStudyAnalytics)
      .where(eq(caseStudyAnalytics.caseStudyTitle, caseStudyTitle))
      .limit(1);

    if (existing.length > 0) {
      // Update existing record
      const record = existing[0];
      const newDownloadCount = record.downloadCount + 1;
      const newAvgScore = Math.round(
        ((record.avgLeadScore || 0) * record.downloadCount + leadScore) / newDownloadCount
      );
      
      await db.update(caseStudyAnalytics)
        .set({
          downloadCount: newDownloadCount,
          uniqueLeads: sql`${caseStudyAnalytics.uniqueLeads} + 1`,
          avgLeadScore: newAvgScore,
        })
        .where(eq(caseStudyAnalytics.id, record.id));
    } else {
      // Create new record
      await db.insert(caseStudyAnalytics).values({
        caseStudyTitle,
        caseStudyIndustry,
        downloadCount: 1,
        uniqueLeads: 1,
        avgLeadScore: leadScore,
      });
    }
  } catch (error) {
    console.error("[Database] Failed to update case study analytics:", error);
  }
}

/**
 * Get all leads with optional filtering
 */
export async function getLeads(options: {
  limit?: number;
  offset?: number;
  startDate?: Date;
  endDate?: Date;
  search?: string;
  sortBy?: 'createdAt' | 'leadScore' | 'email';
  sortOrder?: 'asc' | 'desc';
}): Promise<{ leads: Lead[]; total: number }> {
  const db = await getDb();
  if (!db) {
    return { leads: [], total: 0 };
  }

  try {
    const conditions = [];
    
    if (options.startDate) {
      conditions.push(gte(leads.createdAt, options.startDate));
    }
    if (options.endDate) {
      conditions.push(lte(leads.createdAt, options.endDate));
    }
    if (options.search) {
      conditions.push(
        sql`(${leads.email} LIKE ${`%${options.search}%`} OR ${leads.company} LIKE ${`%${options.search}%`} OR ${leads.firstName} LIKE ${`%${options.search}%`} OR ${leads.lastName} LIKE ${`%${options.search}%`})`
      );
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    // Get total count
    const countResult = await db.select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(whereClause);
    const total = Number(countResult[0]?.count || 0);

    // Get leads with sorting
    let query = db.select().from(leads);
    
    if (whereClause) {
      query = query.where(whereClause) as typeof query;
    }

    const sortColumn = options.sortBy === 'leadScore' ? leads.leadScore 
      : options.sortBy === 'email' ? leads.email 
      : leads.createdAt;
    
    const result = await query
      .orderBy(options.sortOrder === 'asc' ? sortColumn : desc(sortColumn))
      .limit(options.limit || 50)
      .offset(options.offset || 0);

    return { leads: result, total };
  } catch (error) {
    console.error("[Database] Failed to get leads:", error);
    return { leads: [], total: 0 };
  }
}

/**
 * Get case study analytics
 */
export async function getCaseStudyAnalytics(): Promise<{ analytics: any[]; total: number }> {
  const db = await getDb();
  if (!db) {
    return { analytics: [], total: 0 };
  }

  try {
    const result = await db.select()
      .from(caseStudyAnalytics)
      .orderBy(desc(caseStudyAnalytics.downloadCount));

    return { analytics: result, total: result.length };
  } catch (error) {
    console.error("[Database] Failed to get case study analytics:", error);
    return { analytics: [], total: 0 };
  }
}

/**
 * Mark lead notification as sent
 */
export async function markLeadNotificationSent(leadId: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    await db.update(leads)
      .set({ notificationSent: 1 })
      .where(eq(leads.id, leadId));
  } catch (error) {
    console.error("[Database] Failed to mark notification sent:", error);
  }
}

/**
 * Get notification settings for a user
 */
export async function getNotificationSettings(userId: number) {
  const db = await getDb();
  if (!db) return null;

  try {
    const result = await db.select()
      .from(notificationSettings)
      .where(eq(notificationSettings.userId, userId))
      .limit(1);
    
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get notification settings:", error);
    return null;
  }
}

/**
 * Upsert notification settings
 */
export async function upsertNotificationSettings(settings: InsertNotificationSetting): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    await db.insert(notificationSettings)
      .values(settings)
      .onDuplicateKeyUpdate({
        set: {
          notificationEmail: settings.notificationEmail,
          instantNotifications: settings.instantNotifications,
          dailyDigest: settings.dailyDigest,
        },
      });
  } catch (error) {
    console.error("[Database] Failed to upsert notification settings:", error);
    throw error;
  }
}

/**
 * Get lead statistics summary
 */
export async function getLeadStats(): Promise<{
  totalLeads: number;
  leadsToday: number;
  leadsThisWeek: number;
  leadsThisMonth: number;
  avgLeadScore: number;
  topCaseStudies: { title: string; downloads: number }[];
}> {
  const db = await getDb();
  if (!db) {
    return {
      totalLeads: 0,
      leadsToday: 0,
      leadsThisWeek: 0,
      leadsThisMonth: 0,
      avgLeadScore: 0,
      topCaseStudies: [],
    };
  }

  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Total leads
    const totalResult = await db.select({ count: sql<number>`count(*)` }).from(leads);
    const totalLeads = Number(totalResult[0]?.count || 0);

    // Leads today
    const todayResult = await db.select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(gte(leads.createdAt, startOfDay));
    const leadsToday = Number(todayResult[0]?.count || 0);

    // Leads this week
    const weekResult = await db.select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(gte(leads.createdAt, startOfWeek));
    const leadsThisWeek = Number(weekResult[0]?.count || 0);

    // Leads this month
    const monthResult = await db.select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(gte(leads.createdAt, startOfMonth));
    const leadsThisMonth = Number(monthResult[0]?.count || 0);

    // Average lead score
    const avgResult = await db.select({ avg: sql<number>`AVG(leadScore)` }).from(leads);
    const avgLeadScore = Math.round(Number(avgResult[0]?.avg || 0));

    // Top case studies
    const topCaseStudiesResult = await db.select()
      .from(caseStudyAnalytics)
      .orderBy(desc(caseStudyAnalytics.downloadCount))
      .limit(5);
    
    const topCaseStudies = topCaseStudiesResult.map(cs => ({
      title: cs.caseStudyTitle,
      downloads: cs.downloadCount,
    }));

    return {
      totalLeads,
      leadsToday,
      leadsThisWeek,
      leadsThisMonth,
      avgLeadScore,
      topCaseStudies,
    };
  } catch (error) {
    console.error("[Database] Failed to get lead stats:", error);
    return {
      totalLeads: 0,
      leadsToday: 0,
      leadsThisWeek: 0,
      leadsThisMonth: 0,
      avgLeadScore: 0,
      topCaseStudies: [],
    };
  }
}
