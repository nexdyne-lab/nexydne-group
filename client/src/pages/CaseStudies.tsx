import { useState } from 'react';
import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowRight, Bookmark } from 'lucide-react';
import { SEO } from "@/components/SEO";

type Category = 'all' | 'community' | 'client' | 'internal';

interface CaseStudy {
  id: string;
  category: Category;
  categoryLabel: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'global-retailer',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Scaling e-commerce revenue by 40% with AI personalization',
    subtitle: 'A global retailer transforms their digital experience.',
    tags: ['Analytics, Data, & Research', 'Digital Transformation'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '/case-studies/global-retailer-ai-personalization'
  },
  {
    id: 'financial-institution',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Automating 90% of loan processing workflows',
    subtitle: 'And reducing processing time from days to hours.',
    tags: ['Analytics, Data, & Research', 'Process Automation'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    link: '/case-studies/financial-institution-loan-automation'
  },
  {
    id: 'healthcare-provider',
    category: 'community',
    categoryLabel: 'Community Case Study',
    title: 'Reducing patient wait times by 35% with predictive analytics',
    subtitle: 'Improving healthcare access across the region.',
    tags: ['Healthcare', 'Predictive Analytics'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '/case-studies/healthcare-predictive-analytics'
  },
  {
    id: 'logistics',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Logistics shipment processing automation',
    subtitle: 'Regional provider achieves 92% reduction in shipment errors.',
    tags: ['Logistics', 'Process Automation'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    link: '/case-studies/logistics-shipment-automation'
  },
  {
    id: 'ecommerce',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'E-commerce order fulfillment automation',
    subtitle: 'Multi-channel retailer handles 12,000+ daily orders.',
    tags: ['E-commerce', 'Operations'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    link: '/case-studies/ecommerce-order-fulfillment'
  },
  {
    id: 'saas',
    category: 'internal',
    categoryLabel: 'Internal Case Study',
    title: 'Launching NexDyne\'s digital product arm',
    subtitle: 'And scaling from five employees to hundreds.',
    tags: ['Business Building', 'Technology'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    link: '/case-studies/saas-customer-onboarding'
  },
  {
    id: 'retail',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Retail inventory optimization',
    subtitle: 'Specialty retailer cuts carrying costs by 47%.',
    tags: ['Retail', 'Supply Chain'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    link: '/case-studies/retail-inventory-optimization'
  },
  {
    id: 'insurance',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Insurance claims automation',
    subtitle: 'Processing time reduced from 14 days to 3.8 days.',
    tags: ['Insurance', 'Claims Processing'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    link: '/case-studies/insurance-claims-automation'
  },
  {
    id: 'community-career',
    category: 'community',
    categoryLabel: 'Community Case Study',
    title: 'Helping Career Connect enroll and inspire 15,000 students',
    subtitle: 'And generate new programs across the country.',
    tags: ['Education', 'Social Impact'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    link: '/case-studies/career-connect-education'
  },
  {
    id: 'africa-food',
    category: 'community',
    categoryLabel: 'Community Case Study',
    title: 'Building resilient, inclusive, and sustainable local food systems',
    subtitle: 'An innovative public-private partnership.',
    tags: ['Agriculture', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    link: '/case-studies/sustainable-food-systems'
  },
  {
    id: 'technology',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'DevOps transformation',
    subtitle: 'Deployment cycles reduced from 2 weeks to 2.5 days.',
    tags: ['Technology', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    link: '/case-studies/technology-devops-transformation'
  },
  {
    id: 'manufacturing',
    category: 'client',
    categoryLabel: 'Client Case Study',
    title: 'Predictive maintenance for manufacturing excellence',
    subtitle: 'Reducing unplanned downtime by 67%.',
    tags: ['Manufacturing', 'IoT'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    link: '/case-studies/manufacturing-predictive-maintenance'
  }
];

const categories = [
  { value: 'all' as Category, label: 'All Stories' },
  { value: 'client' as Category, label: 'Client Case Studies' },
  { value: 'community' as Category, label: 'Community Case Studies' },
  { value: 'internal' as Category, label: 'Internal Case Studies' }
];

export function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Impact Stories" 
        description="Explore how NexDyne delivers measurable results across industries through intelligent automation and strategic consulting."
      />
      <Navigation />
      
      {/* Hero Section - Clean white background */}
      <section className="bg-white pt-32 pb-16 border-b border-border">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-normal text-charcoal mb-3">
              Impact Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore how we create lasting value for our clients, communities, and colleagues through strategic consulting and intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Awards/Recognition Bar */}
      <section className="bg-subtle py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Glassdoor</p>
                <p className="font-semibold text-charcoal">Best Places to Work</p>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Fortune</p>
                <p className="font-semibold text-charcoal">100 Best Companies</p>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden md:block" />
              <div className="text-center hidden md:block">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Vault</p>
                <p className="font-semibold text-charcoal">#1 in Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white py-6 border-b border-border sticky top-0 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-white text-charcoal/80 hover:bg-subtle border border-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Bain Style */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCaseStudies.map((caseStudy) => (
              <Link 
                key={caseStudy.id} 
                href={caseStudy.link}
                className="group block"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Category Label */}
                <p className="text-destructive text-sm font-medium mb-2">
                  {caseStudy.categoryLabel}
                </p>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-charcoal mb-2 leading-tight group-hover:underline decoration-2 underline-offset-4">
                  {caseStudy.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-muted-foreground text-sm mb-3">
                  {caseStudy.subtitle}
                </p>
                
                {/* Tags */}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    {caseStudy.tags.join(' | ')}
                  </p>
                  <button 
                    className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      // Bookmark functionality placeholder
                    }}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <p className="text-xl text-muted-foreground">
                No case studies found for this category.
              </p>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary hover:bg-red-700 text-white font-semibold rounded transition-colors">
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">
              Ready to create your own success story?
            </h2>
            <p className="text-xl text-muted-foreground/50 mb-8">
              Join the growing number of organizations transforming their operations with NexDyne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-red-700 text-white font-semibold rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded border border-white/30 transition-colors inline-block"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
