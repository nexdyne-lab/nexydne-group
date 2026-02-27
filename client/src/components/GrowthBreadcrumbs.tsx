import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export default function GrowthBreadcrumbs() {
  const [location] = useLocation();
  
  // Only show on growth-marketing-sales pages
  if (!location.includes('/growth-marketing-sales')) return null;

  const pathSegments = location.split('/').filter(Boolean);
  
  // Map path segments to readable names
  const segmentNameMap: Record<string, string> = {
    'capabilities': 'Capabilities',
    'growth-marketing-sales': 'Growth, Marketing & Sales',
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
    // Sub-pages
    'crm-implementation': 'CRM Implementation',
    'marketing-automation': 'Marketing Automation',
    'data-integration-dashboards': 'Data Integration',
    'marketing-roi': 'Marketing ROI',
    'stack-orchestration': 'Stack Orchestration',
    'semantic-infrastructure': 'Semantic Infrastructure',
    'middleware-strategy': 'Middleware Strategy',
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
    'energy-materials': 'Energy & Materials'
  };

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segmentNameMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const isLast = index === pathSegments.length - 1;
    
    return { name, path, isLast };
  });

  return (
    <nav className="flex items-center text-sm text-muted-foreground/70 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link href="/">
        <a className="hover:text-blue-400 transition-colors flex items-center">
          <Home className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </Link>
      
      {breadcrumbs.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-2 text-muted-foreground" />
          {item.isLast ? (
            <span className="text-blue-400 font-medium">{item.name}</span>
          ) : (
            <Link href={item.path}>
              <a className="hover:text-blue-400 transition-colors">
                {item.name}
              </a>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
