import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Breadcrumbs({ className, variant = "light" }: BreadcrumbsProps) {
  const [location] = useLocation();
  
  // Skip breadcrumbs on home page
  if (location === '/') return null;

  const pathSegments = location.split('/').filter(Boolean);
  
  // Map path segments to readable names
  const segmentNameMap: Record<string, string> = {
    // Main Sections
    'capabilities': 'Capabilities',
    'solutions': 'Solutions',
    'cases': 'Case Studies',
    'case-studies': 'Case Studies',
    'insights': 'Insights',
    'team': 'Team',
    'about': 'About',
    'industries': 'Industries',
    'careers': 'Careers',
    'contact': 'Contact',
    'accelerators': 'Accelerators',
    
    // Capabilities - Main 6
    'artificial-intelligence': 'Artificial Intelligence',
    'business-building': 'Business Building',
    'growth-marketing-sales': 'Growth, Marketing & Sales',
    'strategy-corporate-finance': 'Strategy & Corporate Finance',
    'operations': 'Operations',
    'technology': 'Technology',
    
    // AI & Technology Consulting (separate from AI capability)
    'ai-technology-consulting': 'AI & Technology Consulting',
    'processflow-ai': 'ProcessFlow AI',
    'cloud-modernization': 'Cloud Modernization',
    'intelligent-adoption': 'Intelligent Adoption',
    
    // AI Capability sub-pages
    'generative-ai': 'Generative AI',
    'agentic-ai': 'Agentic AI',
    'data-transformation': 'Data Transformation',
    'predictive-analytics': 'Predictive Analytics',
    'internet-of-things': 'Internet of Things',
    'iot': 'Internet of Things',
    'digital-twins': 'Digital Twins',
    'risk-resilience': 'Risk & Resilience',
    'custom-model-tuning': 'Custom Model Tuning',
    'automate-workflows': 'Automate Workflows',
    'customer-experiences': 'Customer Experiences',
    'data-insights': 'Data Insights',
    'responsible-ai': 'Responsible AI',
    'modernize-legacy': 'Modernize Legacy',
    'scale-ai': 'Scale AI',
    'ai-strategy-roadmap': 'AI Strategy & Roadmap',
    'custom-model-development': 'Custom Model Development',
    
    // Growth, Marketing & Sales Sub-pages
    'marketing-operations': 'Marketing Operations',
    'martech-stack': 'MarTech & Stack Architecture',
    'growth-strategy': 'Growth Strategy',
    'digital-marketing': 'Digital Marketing',
    'sales-excellence': 'Sales Excellence',
    'customer-experience': 'Customer Experience',
    'pricing-monetization': 'Pricing & Monetization',
    'green-growth': 'Green Growth',
    'brand-storytelling': 'Brand Storytelling',
    'personalization-at-scale': 'Personalization at Scale',
    'service-design': 'Service Design',
    'commercial-architecture': 'Commercial Architecture',
    'portfolio-optimization': 'Portfolio Optimization',
    
    // Marketing Operations Sub-pages
    'crm-implementation': 'CRM Implementation',
    'marketing-automation': 'Marketing Automation',
    'data-integration-dashboards': 'Data Integration',
    'marketing-roi': 'Marketing ROI',
    
    // MarTech Sub-pages
    'stack-orchestration': 'Stack Orchestration',
    'semantic-infrastructure': 'Semantic Infrastructure',
    'middleware-strategy': 'Middleware Strategy',
    
    // Other Sub-pages
    'analytics-attribution': 'Analytics & Attribution',
    'brand-strategy': 'Brand Strategy',
    'performance-marketing': 'Performance Marketing',
    'channel-partners': 'Channel Partners',
    'go-to-market': 'Go-to-Market',
    'sales-operations': 'Sales Operations',
    'discount-optimization': 'Discount Optimization',
    'dynamic-pricing': 'Dynamic Pricing',
    'packaging-bundling': 'Packaging & Bundling',
    'advanced-manufacturing': 'Advanced Manufacturing',
    'consumer-goods': 'Consumer Goods',
    'energy-materials': 'Energy & Materials',
    
    // Solutions
    'process-automation': 'Process Automation',
    'app-development': 'App Development',
    'data-solutions': 'Data Solutions',
    'digital-engagement': 'Digital Engagement',
    'ecommerce': 'E-commerce',
    'intelligent-process-optimization': 'Intelligent Process Optimization',
    'process-optimization': 'Process Optimization',
    
    // IPO Sub-pages
    'process-discovery-mining': 'Process Discovery & Mining',
    'intelligent-automation-design': 'Intelligent Automation Design',
    'workflow-optimization': 'Workflow Optimization',
    'ai-powered-decision-support': 'AI-Powered Decision Support',
    'change-management-training': 'Change Management & Training',
    'continuous-improvement-programs': 'Continuous Improvement Programs',
    
    // Customer Intelligence Sub-pages
    'customer-intelligence': 'Customer Intelligence',
    'predictive-analytics-modeling': 'Predictive Analytics & Modeling',
    'behavioral-segmentation': 'Behavioral Segmentation',
    'journey-analytics-optimization': 'Journey Analytics & Optimization',
    'personalization-strategy': 'Personalization Strategy & Execution',
    'voice-of-customer': 'Voice of Customer Programs',
    'ai-powered-recommendations': 'AI-Powered Recommendations',
    
    // Solution Sub-pages
    'rpa': 'RPA',
    'ipaas': 'iPaaS',
    'process-orchestration': 'Process Orchestration',
    'low-code-development': 'Low-code Development',
    'custom-software': 'Custom Software',
    'service-portals': 'Service Portals',
    'it-modernization': 'IT Modernization',
    'data-strategy': 'Data Strategy',
    'data-platform': 'Data Platform',
    'data-analytics': 'Data Analytics',
    'data-training': 'Data Training',
    'data-governance': 'Data Governance',
    'data-consultancy': 'Data Consultancy',
    'machine-learning': 'Machine Learning',
    'content-service-platform': 'Content Service Platform',
    'data-engineering': 'Data Engineering',
    'customer-portal': 'Customer Portal',
    'legacy-modernization': 'Legacy Modernization',
    'customer-data-platform': 'Customer Data Platform',
    'customer-insights': 'Customer Insights',
    'customer-journey-map': 'Customer Journey Map',
    'digital-experience-platform': 'Digital Experience Platform',
    'cloud-infrastructure': 'Cloud Infrastructure',
    'system-integration': 'System Integration',
    'devops-security': 'DevOps & Security',
    'ecommerce-platforms': 'E-commerce Platforms',
    'chatbots': 'Chatbots',
    'conversion-optimization': 'Conversion Optimization',
    'native-apps': 'Native Apps',
    'headless-cms': 'Headless CMS',
    'mobile-apps': 'Mobile Apps',
    'conversational-ai': 'Conversational AI',
    
    // IoT Sub-pages
    'connected-products': 'Connected Products',
    'next-gen-operations': 'Next-Gen Operations',
    'iot-business-building': 'IoT Business Building',
    
    // Data Transformation Sub-pages
    'value-focused': 'Value Focused',
    'accelerated-impact': 'Accelerated Impact',
    'lasting-capabilities': 'Lasting Capabilities',
    
    // Business Building Sub-pages
    'digital-venture-launch': 'Digital Venture Launch',
    'product-strategy-design': 'Product Strategy & Design',
    'growth-scaling': 'Growth & Scaling',
    'venture-portfolio': 'Venture Portfolio',
    'growth-simulator': 'Growth Simulator',
    'ai-powered-acceleration': 'AI-Powered Acceleration',
    'distinctive-expertise': 'Distinctive Expertise',
    'go-to-market-scale': 'Go-to-Market at Scale',
    'rapid-innovation-testing': 'Rapid Innovation Testing',
    'performance-intelligence-benchmarking': 'Performance Intelligence',
    'digital-transformation-accelerator': 'Digital Transformation Accelerator',
    
    // Strategy & Corporate Finance Sub-pages
    'business-strategy': 'Business Strategy',
    'mergers-acquisitions': 'Mergers & Acquisitions',
    'capital-raising': 'Capital Raising',
    'financial-planning-analysis': 'Financial Planning & Analysis',
    'fpa': 'FP&A',
    'cfo-services': 'CFO Services',
    'performance-improvement': 'Performance Improvement',
    'ai-powered-finance': 'AI-Powered Finance',
    'ma-partnerships': 'M&A Partnerships',
    
    // Operations Sub-pages
    'supply-chain': 'Supply Chain',
    'production-optimization': 'Production Optimization',
    'quality-management': 'Quality Management',
    'workforce-optimization': 'Workforce Optimization',
    'service-operations': 'Service Operations',
    'strategic-procurement': 'Strategic Procurement',
    'performance-analytics': 'Performance Analytics',
    'product-development': 'Product Development',
    
    // Industries
    'financial-services': 'Financial Services',
    'healthcare': 'Healthcare',
    'manufacturing': 'Manufacturing',
    'retail': 'Retail',
    'professional-services': 'Professional Services',
    'technology-media-telecom': 'Technology, Media & Telecom',
    'energy-utilities': 'Energy & Utilities',
    'transportation-logistics': 'Transportation & Logistics',
    'consumer-products': 'Consumer Products',
    'private-equity': 'Private Equity',
    'insurance': 'Insurance',
    'automotive': 'Automotive',
    'aerospace-defense': 'Aerospace & Defense',
    'public-sector': 'Public Sector',
    'education': 'Education',
    'travel-hospitality': 'Travel & Hospitality',
    'urban-development': 'Urban Development',
    
    // About section
    'our-people': 'Our People',
    'leadership': 'Leadership',
    'our-impact': 'Our Impact',
    'purpose-mission-values': 'Purpose, Mission & Values',
    'us-office': 'Our Offices',
    'offices': 'Our Offices',
    'follow-us': 'Follow Us',
    'initiatives': 'Initiatives',
    
    // Solutions - Main
    'enterprise-transformation': 'Enterprise Transformation',
    'cloud-migration-architecture': 'Cloud Migration & Architecture',
    'infrastructure-modernization': 'Infrastructure Modernization',
    'platform-engineering': 'Platform Engineering',
    'devops-cicd': 'DevOps & CI/CD',
    'security-and-compliance': 'Security & Compliance',
    'data-platform-engineering': 'Data Platform Engineering',
    'cloud-cost-optimization': 'Cloud Cost Optimization',
    'technology-due-diligence': 'Technology Due Diligence',
    'accelerating-business-growth': 'Accelerating Business Growth',
    'ecommerce-strategy-launch': 'E-Commerce Strategy & Launch',
    'digital-product-development': 'Digital Product Development',
    'growth-marketing-acquisition': 'Growth Marketing & Acquisition',
    'pricing-monetization-strategy': 'Pricing & Monetization Strategy',
    'go-to-market-acceleration': 'Go-to-Market Acceleration',
    'revenue-operations-analytics': 'Revenue Operations & Analytics',
    
    // Retention & Loyalty sub-pages
    'retention-loyalty': 'Retention & Loyalty',
    'churn-prediction': 'Churn Prediction',
    'customer-health': 'Customer Health',
    'loyalty-program': 'Loyalty Program',
    
    // E-commerce sub-pages
    'platform-strategy': 'Platform Strategy',
    'cro': 'Conversion Rate Optimization',
    'marketplace-management': 'Marketplace Management',
    
    // Consumer Insights sub-pages
    'consumer-shopper-insights': 'Consumer & Shopper Insights',
    'insights-analytics': 'Insights & Analytics'
  };

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segmentNameMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const isLast = index === pathSegments.length - 1;
    
    return { name, path, isLast };
  });

  const textColor = variant === "light" ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-charcoal";
  const activeColor = variant === "light" ? "text-white" : "text-primary";
  const separatorColor = variant === "light" ? "text-white/40" : "text-muted-foreground/70";
  const homeIconColor = variant === "light" ? "text-white/70 hover:text-white" : "text-muted-foreground/70 hover:text-primary";

  return (
    <nav className={cn("flex items-center text-sm mb-6 overflow-x-auto whitespace-nowrap pb-2", className)}>
      <Link href="/">
        <a className={cn("transition-colors flex items-center", homeIconColor)}>
          <Home className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </Link>
      
      {breadcrumbs.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <ChevronRight className={cn("w-3 h-3 sm:w-4 sm:h-4 mx-2", separatorColor)} />
          {item.isLast ? (
            <span className={cn("font-medium", activeColor)}>{item.name}</span>
          ) : (
            <Link href={item.path}>
              <a className={cn("transition-colors", textColor)}>
                {item.name}
              </a>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
