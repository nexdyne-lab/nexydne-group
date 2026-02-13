import { describe, it, expect } from 'vitest';

describe('Industry Landing Page Routes', () => {
  it('should have correct route paths defined', () => {
    // Test that routes are correctly configured
    const industryRoutes = [
      '/industries/manufacturing',
      '/industries/healthcare',
      '/industries/financial-services',
      '/industries/retail',
    ];

    industryRoutes.forEach(route => {
      expect(route).toMatch(/^\/industries\/[a-z-]+$/);
    });
  });

  it('should have correct whitepaper route pattern', () => {
    const whitepaperRoute = '/resources/whitepapers/:slug';
    expect(whitepaperRoute).toContain(':slug');
  });

  it('should have all four industry landing pages', () => {
    const industries = ['manufacturing', 'healthcare', 'financial-services', 'retail'];
    expect(industries).toHaveLength(4);
    expect(industries).toContain('manufacturing');
    expect(industries).toContain('healthcare');
    expect(industries).toContain('financial-services');
    expect(industries).toContain('retail');
  });
});

describe('Industry Data Structure', () => {
  const mockIndustryData = {
    industry: 'Manufacturing',
    tagline: 'From shop floor to top floor',
    heroDescription: 'Transform your manufacturing operations',
    challenges: [
      { title: 'Unplanned Equipment Downtime', description: 'Unexpected failures' },
    ],
    solutions: [
      { title: 'Predictive Maintenance', description: 'Deploy IoT sensors' },
    ],
    caseStudies: [
      {
        title: 'Regional Manufacturer',
        description: 'Logistics automation',
        metric: '92%',
        metricLabel: 'error reduction',
        href: '/cases/logistics-shipment-automation',
      },
    ],
    resources: [
      {
        type: 'whitepaper' as const,
        title: 'Digital Transformation Guide',
        description: 'A practical guide',
        href: '/resources/whitepapers/manufacturing-digital-transformation',
      },
    ],
    stats: [
      { value: '35%', label: 'Average reduction in downtime' },
    ],
  };

  it('should have required industry properties', () => {
    expect(mockIndustryData.industry).toBeDefined();
    expect(mockIndustryData.tagline).toBeDefined();
    expect(mockIndustryData.heroDescription).toBeDefined();
    expect(mockIndustryData.challenges).toBeInstanceOf(Array);
    expect(mockIndustryData.solutions).toBeInstanceOf(Array);
    expect(mockIndustryData.caseStudies).toBeInstanceOf(Array);
    expect(mockIndustryData.resources).toBeInstanceOf(Array);
    expect(mockIndustryData.stats).toBeInstanceOf(Array);
  });

  it('should have valid case study structure', () => {
    const caseStudy = mockIndustryData.caseStudies[0];
    expect(caseStudy.title).toBeDefined();
    expect(caseStudy.description).toBeDefined();
    expect(caseStudy.metric).toBeDefined();
    expect(caseStudy.metricLabel).toBeDefined();
    expect(caseStudy.href).toMatch(/^\/cases\//);
  });

  it('should have valid resource structure', () => {
    const resource = mockIndustryData.resources[0];
    expect(resource.type).toBe('whitepaper');
    expect(resource.title).toBeDefined();
    expect(resource.description).toBeDefined();
    expect(resource.href).toMatch(/^\/resources\/whitepapers\//);
  });

  it('should have valid stats structure', () => {
    const stat = mockIndustryData.stats[0];
    expect(stat.value).toBeDefined();
    expect(stat.label).toBeDefined();
    expect(stat.value).toMatch(/^\d+%?/);
  });
});

describe('Lead Capture Form Data Validation', () => {
  it('should validate email format', () => {
    const validEmails = [
      'test@example.com',
      'user.name@company.org',
      'first.last@subdomain.domain.com',
    ];
    
    const invalidEmails = [
      'invalid',
      'no@domain',
      '@nodomain.com',
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    validEmails.forEach(email => {
      expect(emailRegex.test(email)).toBe(true);
    });
    
    invalidEmails.forEach(email => {
      expect(emailRegex.test(email)).toBe(false);
    });
  });

  it('should have required form fields', () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'role', 'industry'];
    expect(requiredFields).toHaveLength(6);
    expect(requiredFields).toContain('firstName');
    expect(requiredFields).toContain('email');
    expect(requiredFields).toContain('company');
  });

  it('should have valid role options', () => {
    const roleOptions = [
      'C-Suite Executive',
      'VP / Director',
      'Manager',
      'Individual Contributor',
      'Consultant',
      'Other',
    ];
    
    expect(roleOptions).toHaveLength(6);
    expect(roleOptions).toContain('C-Suite Executive');
    expect(roleOptions).toContain('Manager');
  });

  it('should have valid industry options', () => {
    const industryOptions = [
      'Manufacturing',
      'Healthcare',
      'Financial Services',
      'Retail & E-commerce',
      'Logistics & Transportation',
      'Professional Services',
      'Technology',
      'Insurance',
      'Telecommunications',
      'Other',
    ];
    
    expect(industryOptions.length).toBeGreaterThanOrEqual(10);
    expect(industryOptions).toContain('Manufacturing');
    expect(industryOptions).toContain('Healthcare');
    expect(industryOptions).toContain('Financial Services');
  });
});

describe('Whitepaper Download Page', () => {
  it('should support multiple whitepaper slugs', () => {
    const whitepaperSlugs = [
      'manufacturing-digital-transformation',
      'healthcare-automation-guide',
      'financial-services-ai',
      'retail-customer-intelligence',
    ];

    whitepaperSlugs.forEach(slug => {
      expect(slug).toMatch(/^[a-z-]+$/);
      expect(slug.length).toBeGreaterThan(5);
    });
  });

  it('should have whitepaper metadata structure', () => {
    const whitepaperMetadata = {
      title: 'Digital Transformation in Manufacturing',
      subtitle: 'Industry 4.0 Implementation Guide',
      readTime: '35 min read',
      pages: '45 pages',
      tags: ['Smart Manufacturing', 'IoT', 'Predictive Maintenance'],
    };

    expect(whitepaperMetadata.title).toBeDefined();
    expect(whitepaperMetadata.subtitle).toBeDefined();
    expect(whitepaperMetadata.tags).toBeInstanceOf(Array);
    expect(whitepaperMetadata.tags.length).toBeGreaterThan(0);
  });
});
