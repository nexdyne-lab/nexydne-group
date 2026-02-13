// Related content recommendations for blog posts and case studies

export interface RelatedContentItem {
  type?: "Article" | "Video" | "Podcast" | "Case Study" | "Whitepaper";
  title: string;
  description: string;
  link: string;
  readTime?: string;
  category?: string;
  image: string;
}

// Blog post recommendations
export const blogRelatedContent: Record<string, RelatedContentItem[]> = {
  'ai-automation': [
    {
      title: 'Measuring ROI on digital transformation initiatives',
      description: 'A practical framework for quantifying the business impact of technology investments and building stakeholder confidence.',
      link: '/insights/measuring-roi-digital-transformation',
      readTime: '6 min read',
      category: 'Strategy',
      type: 'Article',
      image: '/blog-roi-measurement.1514df48.jpg'
    },
    {
      title: 'The complete guide to digital transformation for mid-market companies',
      description: 'Navigate the complexities of enterprise-wide change with proven strategies from successful transformations.',
      link: '/insights/digital-transformation-guide',
      readTime: '8 min read',
      category: 'Transformation',
      type: 'Article',
      image: '/blog-digital-transformation.a3f57989.jpg'
    },
    {
      title: 'Building predictive revenue models for B2B SaaS',
      description: 'Learn how leading companies use data-driven forecasting to improve decision-making and investor confidence.',
      link: '/case-studies/fractional-cfo/predictive-revenue',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-predictive-revenue.jpg'
    }
  ],
  'digital-transformation': [
    {
      title: 'How AI and automation are reshaping business operations',
      description: 'Explore the technologies driving operational excellence and the strategies companies use to implement them successfully.',
      link: '/insights/ai-automation-business-operations',
      readTime: '5 min read',
      category: 'Automation',
      type: 'Article',
      image: '/blog-team-collaboration.913d82ea.jpg'
    },
    {
      title: 'Measuring ROI on digital transformation initiatives',
      description: 'A practical framework for quantifying the business impact of technology investments and building stakeholder confidence.',
      link: '/insights/measuring-roi-digital-transformation',
      readTime: '6 min read',
      category: 'Strategy',
      type: 'Article',
      image: '/blog-roi-measurement.1514df48.jpg'
    },
    {
      title: 'Automating variance analysis workflows',
      description: 'See how we reduced close-to-report time from 15 days to 5 days for a regional logistics provider.',
      link: '/case-studies/fractional-cfo/variance-analysis',
      readTime: '8 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-variance-analysis.jpg'
    }
  ],
  'roi-measurement': [
    {
      title: 'How AI and automation are reshaping business operations',
      description: 'Explore the technologies driving operational excellence and the strategies companies use to implement them successfully.',
      link: '/insights/ai-automation-business-operations',
      readTime: '5 min read',
      category: 'Automation',
      type: 'Article',
      image: '/blog-team-collaboration.913d82ea.jpg'
    },
    {
      title: 'The complete guide to digital transformation for mid-market companies',
      description: 'Navigate the complexities of enterprise-wide change with proven strategies from successful transformations.',
      link: '/insights/digital-transformation-guide',
      readTime: '8 min read',
      category: 'Transformation',
      type: 'Article',
      image: '/blog-digital-transformation.a3f57989.jpg'
    },
    {
      title: 'Designing executive dashboards for clarity',
      description: 'How we improved board meeting efficiency by 60% for a professional services firm.',
      link: '/case-studies/fractional-cfo/executive-dashboards',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-executive-dashboards.jpg'
    }
  ]
};

// Case study recommendations
export const caseStudyRelatedContent: Record<string, RelatedContentItem[]> = {
  'predictive-revenue': [
    {
      title: 'Automating variance analysis workflows',
      description: 'How we reduced close-to-report time from 15 days to 5 days for a regional logistics provider.',
      link: '/case-studies/fractional-cfo/variance-analysis',
      readTime: '8 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-variance-analysis.jpg'
    },
    {
      title: 'Designing executive dashboards for clarity',
      description: 'How we improved board meeting efficiency by 60% for a professional services firm.',
      link: '/case-studies/fractional-cfo/executive-dashboards',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-executive-dashboards.jpg'
    },
    {
      title: 'How AI and automation are reshaping business operations',
      description: 'Explore the technologies driving operational excellence and the strategies companies use to implement them successfully.',
      link: '/insights/ai-automation-business-operations',
      readTime: '5 min read',
      category: 'Insights',
      type: 'Article',
      image: '/blog-team-collaboration.913d82ea.jpg'
    }
  ],
  'variance-analysis': [
    {
      title: 'Building predictive revenue models for B2B SaaS',
      description: 'Learn how leading companies use data-driven forecasting to improve decision-making and investor confidence.',
      link: '/case-studies/fractional-cfo/predictive-revenue',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-predictive-revenue.jpg'
    },
    {
      title: 'Designing executive dashboards for clarity',
      description: 'How we improved board meeting efficiency by 60% for a professional services firm.',
      link: '/case-studies/fractional-cfo/executive-dashboards',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-executive-dashboards.jpg'
    },
    {
      title: 'Measuring ROI on digital transformation initiatives',
      description: 'A practical framework for quantifying the business impact of technology investments and building stakeholder confidence.',
      link: '/insights/measuring-roi-digital-transformation',
      readTime: '6 min read',
      category: 'Insights',
      type: 'Article',
      image: '/blog-roi-measurement.1514df48.jpg'
    }
  ],
  'executive-dashboards': [
    {
      title: 'Building predictive revenue models for B2B SaaS',
      description: 'Learn how leading companies use data-driven forecasting to improve decision-making and investor confidence.',
      link: '/case-studies/fractional-cfo/predictive-revenue',
      readTime: '10 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-predictive-revenue.jpg'
    },
    {
      title: 'Automating variance analysis workflows',
      description: 'How we reduced close-to-report time from 15 days to 5 days for a regional logistics provider.',
      link: '/case-studies/fractional-cfo/variance-analysis',
      readTime: '8 min read',
      category: 'Case Study',
      type: 'Case Study',
      image: '/case-variance-analysis.jpg'
    },
    {
      title: 'The complete guide to digital transformation for mid-market companies',
      description: 'Navigate the complexities of enterprise-wide change with proven strategies from successful transformations.',
      link: '/insights/digital-transformation-guide',
      readTime: '8 min read',
      category: 'Insights',
      type: 'Article',
      image: '/blog-digital-transformation.a3f57989.jpg'
    }
  ]
};
