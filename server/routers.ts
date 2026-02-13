import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { 
  insertLead, 
  getLeads, 
  getCaseStudyAnalytics, 
  getLeadStats,
  markLeadNotificationSent,
  getNotificationSettings,
  upsertNotificationSettings
} from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Leads router for capturing email addresses from PDF downloads
  leads: router({
    capture: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          firstName: z.string().optional(),
          lastName: z.string().optional(),
          company: z.string().optional(),
          jobTitle: z.string().optional(),
          caseStudyTitle: z.string(),
          caseStudyIndustry: z.string().optional(),
          marketingConsent: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await insertLead({
          email: input.email,
          firstName: input.firstName || null,
          lastName: input.lastName || null,
          company: input.company || null,
          jobTitle: input.jobTitle || null,
          caseStudyTitle: input.caseStudyTitle,
          caseStudyIndustry: input.caseStudyIndustry || null,
          source: "pdf_download",
          marketingConsent: input.marketingConsent ? 1 : 0,
        });
        
        if (!result.success) {
          throw new Error(result.error || "Failed to capture lead");
        }

        // Send notification to owner about new lead
        try {
          const leadScore = result.leadScore || 0;
          const scoreLabel = leadScore >= 70 ? "🔥 High-Intent" : leadScore >= 40 ? "⭐ Medium" : "📋 Standard";
          
          await notifyOwner({
            title: `New Lead Captured: ${input.email}`,
            content: `
**New Lead Details**

- **Email:** ${input.email}
- **Name:** ${input.firstName || ''} ${input.lastName || ''}
- **Company:** ${input.company || 'Not provided'}
- **Job Title:** ${input.jobTitle || 'Not provided'}
- **Lead Score:** ${leadScore}/100 (${scoreLabel})

**Source**
- **Case Study:** ${input.caseStudyTitle}
- **Industry:** ${input.caseStudyIndustry || 'Not specified'}
- **Marketing Consent:** ${input.marketingConsent ? 'Yes' : 'No'}

View all leads in the Admin Dashboard.
            `.trim(),
          });

          // Mark notification as sent
          if (result.id) {
            await markLeadNotificationSent(result.id);
          }
        } catch (notifyError) {
          console.warn("[Leads] Failed to send notification:", notifyError);
          // Don't fail the lead capture if notification fails
        }
        
        return { success: true, id: result.id, leadScore: result.leadScore };
      }),

    // Admin endpoints - require admin authentication
    list: adminProcedure
      .input(
        z.object({
          limit: z.number().min(1).max(100).optional().default(50),
          offset: z.number().min(0).optional().default(0),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          search: z.string().optional(),
          sortBy: z.enum(['createdAt', 'leadScore', 'email']).optional().default('createdAt'),
          sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
        })
      )
      .query(async ({ input }) => {
        const result = await getLeads({
          limit: input.limit,
          offset: input.offset,
          startDate: input.startDate ? new Date(input.startDate) : undefined,
          endDate: input.endDate ? new Date(input.endDate) : undefined,
          search: input.search,
          sortBy: input.sortBy,
          sortOrder: input.sortOrder,
        });

        return result;
      }),

    // Get lead statistics
    stats: adminProcedure.query(async () => {
      return await getLeadStats();
    }),

    // Export leads as CSV data
    export: adminProcedure
      .input(
        z.object({
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          search: z.string().optional(),
        })
      )
      .query(async ({ input }) => {

        // Get all leads matching filters (no pagination for export)
        const result = await getLeads({
          limit: 10000, // Max export limit
          offset: 0,
          startDate: input.startDate ? new Date(input.startDate) : undefined,
          endDate: input.endDate ? new Date(input.endDate) : undefined,
          search: input.search,
          sortBy: 'createdAt',
          sortOrder: 'desc',
        });

        // Convert to CSV format
        const headers = [
          'ID',
          'Email',
          'First Name',
          'Last Name',
          'Company',
          'Job Title',
          'Case Study',
          'Industry',
          'Lead Score',
          'Marketing Consent',
          'Created At'
        ];

        const rows = result.leads.map(lead => [
          lead.id,
          lead.email,
          lead.firstName || '',
          lead.lastName || '',
          lead.company || '',
          lead.jobTitle || '',
          lead.caseStudyTitle || '',
          lead.caseStudyIndustry || '',
          lead.leadScore || 0,
          lead.marketingConsent ? 'Yes' : 'No',
          lead.createdAt ? new Date(lead.createdAt).toISOString() : ''
        ]);

        const csvContent = [
          headers.join(','),
          ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        ].join('\n');

        return { csv: csvContent, count: result.leads.length };
      }),

    // Get case study analytics
    analytics: adminProcedure.query(async () => {
      return await getCaseStudyAnalytics();
    }),
  }),

  // Notification settings router
  notifications: router({
    getSettings: protectedProcedure.query(async ({ ctx }) => {
      if (!ctx.user?.id) {
        throw new Error("User not found");
      }
      return await getNotificationSettings(ctx.user.id);
    }),

    updateSettings: protectedProcedure
      .input(
        z.object({
          notificationEmail: z.string().email().optional(),
          instantNotifications: z.boolean().optional(),
          dailyDigest: z.boolean().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user?.id) {
          throw new Error("User not found");
        }

        await upsertNotificationSettings({
          userId: ctx.user.id,
          notificationEmail: input.notificationEmail || null,
          instantNotifications: input.instantNotifications ? 1 : 0,
          dailyDigest: input.dailyDigest ? 1 : 0,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
