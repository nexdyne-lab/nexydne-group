import { useState, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, FileText, Briefcase, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface SearchResult {
  type: 'service' | 'case-study' | 'blog';
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

// Comprehensive search data
const searchData: SearchResult[] = [
  // Services
  {
    type: 'service',
    title: 'Fractional CFO Services',
    description: 'Strategic financial leadership for mid-market companies',
    url: '/services/fractional-cfo',
    tags: ['finance', 'cfo', 'strategy', 'leadership']
  },
  {
    type: 'service',
    title: 'Financial Planning & Analysis (FP&A)',
    description: 'Data-driven financial planning and forecasting',
    url: '/services/fpa',
    tags: ['finance', 'planning', 'analysis', 'forecasting']
  },
  {
    type: 'service',
    title: 'Capital Raising & Investment Readiness',
    description: 'Prepare your business for successful fundraising',
    url: '/services/capital-raising',
    tags: ['capital', 'fundraising', 'investment', 'growth']
  },
  {
    type: 'service',
    title: 'M&A & Strategic Partnerships',
    description: 'Navigate mergers, acquisitions, and strategic alliances',
    url: '/services/ma-partnerships',
    tags: ['ma', 'mergers', 'acquisitions', 'partnerships', 'strategy']
  },
  {
    type: 'service',
    title: 'Intelligent Process Optimization',
    description: 'AI-powered automation and process improvement',
    url: '/solutions/intelligent-process-optimization',
    tags: ['automation', 'ai', 'process', 'optimization', 'efficiency']
  },
  {
    type: 'service',
    title: 'Generative AI',
    description: 'Harness the power of generative AI for business transformation',
    url: '/capabilities/generative-ai',
    tags: ['ai', 'generative', 'innovation', 'automation']
  },
  {
    type: 'service',
    title: 'Data Transformation',
    description: 'Transform raw data into strategic business insights',
    url: '/capabilities/data-transformation',
    tags: ['data', 'analytics', 'transformation', 'insights']
  },
  {
    type: 'service',
    title: 'Internet of Things',
    description: 'Connect and optimize your physical operations',
    url: '/capabilities/internet-of-things',
    tags: ['iot', 'sensors', 'connectivity', 'operations']
  },
  {
    type: 'service',
    title: 'Digital Twins',
    description: 'Create virtual replicas of physical systems',
    url: '/capabilities/digital-twins',
    tags: ['digital twins', 'simulation', 'modeling', 'optimization']
  },
  {
    type: 'service',
    title: 'Risk & Resilience',
    description: 'Build resilient operations with predictive risk management',
    url: '/capabilities/risk-resilience',
    tags: ['risk', 'resilience', 'compliance', 'security']
  },
  {
    type: 'service',
    title: 'Custom Model Tuning',
    description: 'Fine-tune AI models for your specific business needs',
    url: '/capabilities/custom-model-tuning',
    tags: ['ai', 'machine learning', 'custom', 'models']
  },
  // Case Studies
  {
    type: 'case-study',
    title: 'Logistics Shipment Processing Automation',
    description: 'Reduced processing time by 73% for mid-market logistics company',
    url: '/case-studies/logistics-shipment-automation',
    tags: ['logistics', 'automation', 'efficiency', 'process optimization']
  },
  {
    type: 'case-study',
    title: 'E-commerce Order Fulfillment Automation',
    description: 'Achieved 89% reduction in order errors for growing e-commerce business',
    url: '/case-studies/ecommerce-order-fulfillment',
    tags: ['ecommerce', 'automation', 'fulfillment', 'accuracy']
  },
  {
    type: 'case-study',
    title: 'SaaS Customer Onboarding Automation',
    description: 'Scaled onboarding capacity by 4x without additional headcount',
    url: '/case-studies/saas-customer-onboarding',
    tags: ['saas', 'automation', 'onboarding', 'scalability']
  },
  {
    type: 'case-study',
    title: 'Building Predictive Revenue Models',
    description: 'B2B SaaS company improved forecasting accuracy by 40%',
    url: '/case-studies/fractional-cfo/predictive-revenue-models',
    tags: ['finance', 'forecasting', 'saas', 'cfo']
  },
  {
    type: 'case-study',
    title: 'Automating Variance Analysis Workflows',
    description: 'Logistics firm reduced month-end close time by 60%',
    url: '/case-studies/fractional-cfo/variance-analysis',
    tags: ['finance', 'automation', 'logistics', 'analysis']
  },
  {
    type: 'case-study',
    title: 'Designing Executive Dashboards for Clarity',
    description: 'Professional services firm improved decision-making speed',
    url: '/case-studies/fractional-cfo/executive-dashboards',
    tags: ['finance', 'dashboards', 'analytics', 'reporting']
  },
  {
    type: 'case-study',
    title: 'FP&A Scenario Planning Implementation',
    description: 'Manufacturing company enhanced strategic planning capabilities',
    url: '/case-studies/fpa/scenario-planning',
    tags: ['fpa', 'planning', 'scenario analysis', 'strategy']
  },
  // Blog Posts
  {
    type: 'blog',
    title: 'Why Intelligent Automation Isn\'t Optional Anymore',
    description: 'The competitive imperative driving mid-market automation adoption',
    url: '/insights/intelligent-automation-imperative',
    tags: ['automation', 'strategy', 'competitive advantage', 'digital transformation']
  },
  {
    type: 'blog',
    title: 'How AI Agents Transform Enterprise Operations',
    description: 'Understanding the impact of autonomous AI agents on business processes',
    url: '/insights/ai-agents-enterprise-operations',
    tags: ['ai', 'automation', 'agents', 'operations']
  },
  {
    type: 'blog',
    title: 'The Complete Guide to Process Mining and Optimization',
    description: 'A comprehensive whitepaper on process mining methodologies',
    url: '/insights/process-mining-optimization-guide',
    tags: ['process mining', 'optimization', 'methodology', 'whitepaper']
  },
  {
    type: 'blog',
    title: 'Building Financial Models That Drive Decisions',
    description: 'Best practices for creating actionable financial models',
    url: '/insights/fpa/financial-modeling-best-practices',
    tags: ['fpa', 'financial modeling', 'planning', 'best practices']
  },
  {
    type: 'blog',
    title: 'Preparing for Series A: A CFO\'s Perspective',
    description: 'What investors look for in Series A financial readiness',
    url: '/insights/capital-raising/series-a-preparation',
    tags: ['capital raising', 'fundraising', 'series a', 'investment']
  },
  {
    type: 'blog',
    title: 'The Art of M&A Due Diligence',
    description: 'Navigating the complexities of merger and acquisition processes',
    url: '/insights/ma/due-diligence-guide',
    tags: ['ma', 'due diligence', 'mergers', 'acquisitions']
  }
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter results based on query
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const descMatch = item.description.toLowerCase().includes(lowerQuery);
      const tagMatch = item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
      return titleMatch || descMatch || tagMatch;
    }).slice(0, 8); // Limit to 8 results
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        window.location.href = results[selectedIndex].url;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, results, selectedIndex]);

  // Reset query when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'case-study':
        return <FileText className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'blog':
        return <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return 'Service';
      case 'case-study':
        return 'Case Study';
      case 'blog':
        return 'Insight';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <Input
              placeholder="Search services, case studies, insights..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base border-0 focus-visible:ring-0 shadow-none"
              autoFocus
            />
          </div>
        </DialogHeader>

        <div className="max-h-[400px] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="px-6 py-12 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p className="text-sm">Start typing to search across services, case studies, and insights</p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-6 py-12 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-2">Try different keywords or browse our <Link href="/sitemap" className="text-primary hover:underline">sitemap</Link></p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={result.url}
                  href={result.url}
                  onClick={() => onOpenChange(false)}
                >
                  <div
                    className={`px-6 py-3 flex items-start gap-3 hover:bg-accent transition-colors cursor-pointer ${
                      index === selectedIndex ? 'bg-accent' : ''
                    }`}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="mt-1 text-muted-foreground">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <h4 className="font-medium text-sm mb-1 line-clamp-1">{result.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{result.description}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="px-6 py-3 border-t bg-muted/30 text-xs text-muted-foreground">
            Use <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">↑</kbd>{' '}
            <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">↓</kbd> to navigate,{' '}
            <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">Enter</kbd> to select
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
