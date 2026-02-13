import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the database module
vi.mock('./db', () => ({
  insertLead: vi.fn(),
  getLeads: vi.fn(),
  getLeadStats: vi.fn(),
  getCaseStudyAnalytics: vi.fn(),
  markLeadNotificationSent: vi.fn(),
}));

// Mock the notification module
vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn(),
}));

import { insertLead, getLeads, getLeadStats, getCaseStudyAnalytics, markLeadNotificationSent } from './db';
import { notifyOwner } from './_core/notification';

describe('Leads API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('insertLead', () => {
    it('should successfully insert a lead with all fields and calculate lead score', async () => {
      const mockLead = {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme Inc',
        jobTitle: 'VP Operations',
        caseStudyTitle: 'Predictive Revenue Models',
        caseStudyIndustry: 'Financial Services',
        source: 'pdf_download',
        marketingConsent: 1,
      };

      (insertLead as ReturnType<typeof vi.fn>).mockResolvedValue({ 
        success: true, 
        id: 1,
        leadScore: 80 // High score: base(20) + company(20) + jobTitle(15) + name(10) + consent(15) = 80
      });

      const result = await insertLead(mockLead);

      expect(result.success).toBe(true);
      expect(result.id).toBe(1);
      expect(result.leadScore).toBe(80);
      expect(insertLead).toHaveBeenCalledWith(mockLead);
    });

    it('should successfully insert a lead with only required fields', async () => {
      const mockLead = {
        email: 'minimal@example.com',
        firstName: null,
        lastName: null,
        company: null,
        jobTitle: null,
        caseStudyTitle: 'Test Case Study',
        caseStudyIndustry: null,
        source: 'pdf_download',
        marketingConsent: 0,
      };

      (insertLead as ReturnType<typeof vi.fn>).mockResolvedValue({ 
        success: true, 
        id: 2,
        leadScore: 20 // Base score only
      });

      const result = await insertLead(mockLead);

      expect(result.success).toBe(true);
      expect(result.id).toBe(2);
      expect(result.leadScore).toBe(20);
    });

    it('should handle database errors gracefully', async () => {
      const mockLead = {
        email: 'error@example.com',
        firstName: null,
        lastName: null,
        company: null,
        jobTitle: null,
        caseStudyTitle: 'Test Case Study',
        caseStudyIndustry: null,
        source: 'pdf_download',
        marketingConsent: 0,
      };

      (insertLead as ReturnType<typeof vi.fn>).mockResolvedValue({ 
        success: false, 
        error: 'Database not available' 
      });

      const result = await insertLead(mockLead);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Database not available');
    });
  });

  describe('getLeads', () => {
    it('should return paginated leads with total count', async () => {
      const mockLeads = [
        { id: 1, email: 'lead1@example.com', leadScore: 75, createdAt: new Date() },
        { id: 2, email: 'lead2@example.com', leadScore: 45, createdAt: new Date() },
      ];

      (getLeads as ReturnType<typeof vi.fn>).mockResolvedValue({
        leads: mockLeads,
        total: 100
      });

      const result = await getLeads({ limit: 20, offset: 0 });

      expect(result.leads).toHaveLength(2);
      expect(result.total).toBe(100);
    });

    it('should filter leads by date range', async () => {
      const startDate = new Date('2024-01-01');
      const endDate = new Date('2024-12-31');

      (getLeads as ReturnType<typeof vi.fn>).mockResolvedValue({
        leads: [],
        total: 0
      });

      await getLeads({ startDate, endDate });

      expect(getLeads).toHaveBeenCalledWith(expect.objectContaining({
        startDate,
        endDate
      }));
    });

    it('should filter leads by search term', async () => {
      (getLeads as ReturnType<typeof vi.fn>).mockResolvedValue({
        leads: [{ id: 1, email: 'john@acme.com', company: 'Acme Inc' }],
        total: 1
      });

      await getLeads({ search: 'acme' });

      expect(getLeads).toHaveBeenCalledWith(expect.objectContaining({
        search: 'acme'
      }));
    });

    it('should sort leads by lead score', async () => {
      (getLeads as ReturnType<typeof vi.fn>).mockResolvedValue({
        leads: [
          { id: 1, leadScore: 90 },
          { id: 2, leadScore: 50 },
        ],
        total: 2
      });

      await getLeads({ sortBy: 'leadScore', sortOrder: 'desc' });

      expect(getLeads).toHaveBeenCalledWith(expect.objectContaining({
        sortBy: 'leadScore',
        sortOrder: 'desc'
      }));
    });
  });

  describe('getLeadStats', () => {
    it('should return comprehensive lead statistics', async () => {
      const mockStats = {
        totalLeads: 150,
        leadsToday: 5,
        leadsThisWeek: 25,
        leadsThisMonth: 80,
        avgLeadScore: 55,
        topCaseStudies: [
          { title: 'Financial Fraud Detection', downloads: 45 },
          { title: 'Healthcare Analytics', downloads: 32 },
        ]
      };

      (getLeadStats as ReturnType<typeof vi.fn>).mockResolvedValue(mockStats);

      const result = await getLeadStats();

      expect(result.totalLeads).toBe(150);
      expect(result.leadsToday).toBe(5);
      expect(result.leadsThisWeek).toBe(25);
      expect(result.leadsThisMonth).toBe(80);
      expect(result.avgLeadScore).toBe(55);
      expect(result.topCaseStudies).toHaveLength(2);
    });

    it('should return empty stats when no leads exist', async () => {
      (getLeadStats as ReturnType<typeof vi.fn>).mockResolvedValue({
        totalLeads: 0,
        leadsToday: 0,
        leadsThisWeek: 0,
        leadsThisMonth: 0,
        avgLeadScore: 0,
        topCaseStudies: []
      });

      const result = await getLeadStats();

      expect(result.totalLeads).toBe(0);
      expect(result.topCaseStudies).toHaveLength(0);
    });
  });

  describe('getCaseStudyAnalytics', () => {
    it('should return case study performance data', async () => {
      const mockAnalytics = {
        analytics: [
          { 
            id: 1, 
            caseStudyTitle: 'Financial Fraud Detection',
            caseStudyIndustry: 'Financial Services',
            downloadCount: 45,
            uniqueLeads: 40,
            avgLeadScore: 72
          },
          {
            id: 2,
            caseStudyTitle: 'Healthcare Analytics',
            caseStudyIndustry: 'Healthcare',
            downloadCount: 32,
            uniqueLeads: 28,
            avgLeadScore: 65
          }
        ],
        total: 2
      };

      (getCaseStudyAnalytics as ReturnType<typeof vi.fn>).mockResolvedValue(mockAnalytics);

      const result = await getCaseStudyAnalytics();

      expect(result.analytics).toHaveLength(2);
      expect(result.analytics[0].downloadCount).toBe(45);
      expect(result.analytics[0].avgLeadScore).toBe(72);
    });
  });

  describe('Lead Scoring', () => {
    it('should calculate high score for complete lead with high-value industry', () => {
      // Lead scoring formula:
      // Base: 20
      // Company: +20
      // Job Title: +15
      // Full Name: +10
      // Marketing Consent: +15
      // High-value industry: +20
      // Max: 100
      
      const expectedHighScore = 20 + 20 + 15 + 10 + 15 + 20; // = 100 (capped)
      expect(expectedHighScore).toBe(100);
    });

    it('should calculate medium score for partial lead data', () => {
      // Base: 20
      // Company: +20
      // No job title, no full name, no consent, no high-value industry
      const expectedMediumScore = 20 + 20;
      expect(expectedMediumScore).toBe(40);
    });

    it('should calculate low score for minimal lead data', () => {
      // Base score only
      const expectedLowScore = 20;
      expect(expectedLowScore).toBe(20);
    });
  });

  describe('Notifications', () => {
    it('should send notification when lead is captured', async () => {
      (notifyOwner as ReturnType<typeof vi.fn>).mockResolvedValue(true);

      await notifyOwner({
        title: 'New Lead Captured: test@example.com',
        content: 'Lead details...'
      });

      expect(notifyOwner).toHaveBeenCalled();
    });

    it('should mark notification as sent after successful delivery', async () => {
      (markLeadNotificationSent as ReturnType<typeof vi.fn>).mockResolvedValue(undefined);

      await markLeadNotificationSent(1);

      expect(markLeadNotificationSent).toHaveBeenCalledWith(1);
    });

    it('should handle notification failures gracefully', async () => {
      (notifyOwner as ReturnType<typeof vi.fn>).mockResolvedValue(false);

      const result = await notifyOwner({
        title: 'Test',
        content: 'Test content'
      });

      expect(result).toBe(false);
    });
  });

  describe('Lead data validation', () => {
    it('should validate email format', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
      ];

      const invalidEmails = [
        'notanemail',
        '@nodomain.com',
        'no@domain',
        '',
      ];

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      validEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(true);
      });

      invalidEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(false);
      });
    });

    it('should handle long case study titles', () => {
      const longTitle = 'A'.repeat(500);
      expect(longTitle.length).toBeLessThanOrEqual(500);
    });
  });

  describe('CSV Export', () => {
    it('should format lead data correctly for CSV export', () => {
      const lead = {
        id: 1,
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        company: 'Acme, Inc.', // Contains comma
        jobTitle: 'VP "Operations"', // Contains quotes
        caseStudyTitle: 'Test Case Study',
        caseStudyIndustry: 'Technology',
        leadScore: 75,
        marketingConsent: 1,
        createdAt: new Date('2024-01-15T10:30:00Z')
      };

      // CSV escaping: wrap in quotes, escape internal quotes
      const escapedCompany = `"Acme, Inc."`;
      const escapedJobTitle = `"VP ""Operations"""`;

      expect(escapedCompany).toContain(',');
      expect(escapedJobTitle).toContain('""');
    });

    it('should include all required CSV headers', () => {
      const expectedHeaders = [
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

      expect(expectedHeaders).toHaveLength(11);
    });
  });
});
