import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Leads table for capturing email addresses from case study PDF downloads.
 * Used for lead generation and marketing follow-up.
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  firstName: varchar("firstName", { length: 100 }),
  lastName: varchar("lastName", { length: 100 }),
  company: varchar("company", { length: 200 }),
  jobTitle: varchar("jobTitle", { length: 200 }),
  caseStudyTitle: varchar("caseStudyTitle", { length: 500 }),
  caseStudyIndustry: varchar("caseStudyIndustry", { length: 200 }),
  source: varchar("source", { length: 100 }).default("pdf_download"),
  marketingConsent: int("marketingConsent").default(0),
  /** Lead score calculated based on engagement signals (0-100) */
  leadScore: int("leadScore").default(0),
  /** Whether email notification was sent for this lead */
  notificationSent: int("notificationSent").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

/**
 * Case study analytics for tracking downloads and engagement.
 * Used for lead scoring and identifying high-performing content.
 */
export const caseStudyAnalytics = mysqlTable("caseStudyAnalytics", {
  id: int("id").autoincrement().primaryKey(),
  caseStudyTitle: varchar("caseStudyTitle", { length: 500 }).notNull(),
  caseStudyIndustry: varchar("caseStudyIndustry", { length: 200 }),
  /** Total number of downloads */
  downloadCount: int("downloadCount").default(0).notNull(),
  /** Number of unique email addresses that downloaded */
  uniqueLeads: int("uniqueLeads").default(0).notNull(),
  /** Average lead score for leads from this case study */
  avgLeadScore: int("avgLeadScore").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CaseStudyAnalytic = typeof caseStudyAnalytics.$inferSelect;
export type InsertCaseStudyAnalytic = typeof caseStudyAnalytics.$inferInsert;

/**
 * Notification settings for admin users.
 */
export const notificationSettings = mysqlTable("notificationSettings", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  /** Email address to receive lead notifications */
  notificationEmail: varchar("notificationEmail", { length: 320 }),
  /** Whether to receive instant notifications for new leads */
  instantNotifications: int("instantNotifications").default(1),
  /** Whether to receive daily digest of new leads */
  dailyDigest: int("dailyDigest").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type NotificationSetting = typeof notificationSettings.$inferSelect;
export type InsertNotificationSetting = typeof notificationSettings.$inferInsert;
