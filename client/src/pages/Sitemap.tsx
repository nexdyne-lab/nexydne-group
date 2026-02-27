import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Briefcase, BookOpen, Building2, Lightbulb, DollarSign } from "lucide-react";

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: { label: string; href: string; description?: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Solutions",
    icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "Intelligent Process Optimization", 
        href: "/solutions/intelligent-process-optimization",
        description: "AI-powered automation and process improvement"
      },
      { 
        label: "Data-Driven Customer Intelligence", 
        href: "/solutions/data-solutions",
        description: "Advanced analytics and customer insights"
      },
      { 
        label: "Scalable Enterprise Transformation", 
        href: "/solutions/process-orchestration",
        description: "End-to-end digital transformation"
      },
    ]
  },
  {
    title: "Capabilities",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "Generative AI", 
        href: "/capabilities/generative-ai",
        description: "Harness the power of generative AI"
      },
      { 
        label: "Data Transformation", 
        href: "/capabilities/data-transformation",
        description: "Transform raw data into strategic insights"
      },
      { 
        label: "Internet of Things", 
        href: "/capabilities/internet-of-things",
        description: "Connect and optimize physical operations"
      },
      { 
        label: "Digital Twins", 
        href: "/capabilities/digital-twins",
        description: "Virtual replicas of physical systems"
      },
      { 
        label: "Risk & Resilience", 
        href: "/capabilities/risk-resilience",
        description: "Build resilient operations"
      },
      { 
        label: "Custom Model Tuning", 
        href: "/capabilities/custom-model-tuning",
        description: "Fine-tune AI models for your needs"
      },
      { 
        label: "Growth, Marketing & Sales", 
        href: "/capabilities/growth-marketing-sales",
        description: "Accelerate revenue growth"
      },
    ]
  },
  {
    title: "Financial Services",
    icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "Fractional CFO Services", 
        href: "/services/fractional-cfo",
        description: "Strategic financial leadership"
      },
      { 
        label: "Financial Planning & Analysis (FP&A)", 
        href: "/services/fpa",
        description: "Data-driven financial planning"
      },
      { 
        label: "Capital Raising & Investment Readiness", 
        href: "/services/capital-raising",
        description: "Prepare for successful fundraising"
      },
      { 
        label: "M&A & Strategic Partnerships", 
        href: "/services/ma-partnerships",
        description: "Navigate mergers and acquisitions"
      },
    ]
  },
  {
    title: "Case Studies",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "Logistics Shipment Processing Automation", 
        href: "/case-studies/logistics-shipment-automation",
        description: "73% reduction in processing time"
      },
      { 
        label: "E-commerce Order Fulfillment Automation", 
        href: "/case-studies/ecommerce-order-fulfillment",
        description: "89% reduction in order errors"
      },
      { 
        label: "SaaS Customer Onboarding Automation", 
        href: "/case-studies/saas-customer-onboarding",
        description: "4x increase in onboarding capacity"
      },
      { 
        label: "Building Predictive Revenue Models", 
        href: "/case-studies/fractional-cfo/predictive-revenue-models",
        description: "40% improvement in forecasting accuracy"
      },
      { 
        label: "Automating Variance Analysis Workflows", 
        href: "/case-studies/fractional-cfo/variance-analysis",
        description: "60% reduction in month-end close time"
      },
      { 
        label: "Designing Executive Dashboards for Clarity", 
        href: "/case-studies/fractional-cfo/executive-dashboards",
        description: "Enhanced decision-making speed"
      },
      { 
        label: "FP&A Scenario Planning Implementation", 
        href: "/case-studies/fpa/scenario-planning",
        description: "Strategic planning capabilities"
      },
    ]
  },
  {
    title: "Insights & Resources",
    icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "All Insights", 
        href: "/insights",
        description: "Browse all articles and whitepapers"
      },
      { 
        label: "Why Intelligent Automation Isn't Optional Anymore", 
        href: "/insights/intelligent-automation-imperative",
        description: "The competitive imperative"
      },
      { 
        label: "How AI Agents Transform Enterprise Operations", 
        href: "/insights/ai-agents-enterprise-operations",
        description: "Understanding autonomous AI agents"
      },
      { 
        label: "The Complete Guide to Process Mining and Optimization", 
        href: "/insights/process-mining-optimization-guide",
        description: "Comprehensive whitepaper"
      },
      { 
        label: "Building Financial Models That Drive Decisions", 
        href: "/insights/fpa/financial-modeling-best-practices",
        description: "Best practices for FP&A"
      },
      { 
        label: "Preparing for Series A: A CFO's Perspective", 
        href: "/insights/capital-raising/series-a-preparation",
        description: "Fundraising readiness"
      },
      { 
        label: "The Art of M&A Due Diligence", 
        href: "/insights/ma/due-diligence-guide",
        description: "Navigating M&A processes"
      },
    ]
  },
  {
    title: "Company",
    icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    links: [
      { 
        label: "About Us", 
        href: "/#about",
        description: "Learn about NexDyne Technologies"
      },
      { 
        label: "Contact", 
        href: "/#contact",
        description: "Get in touch with our team"
      },
    ]
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-cyan-400 font-semibold uppercase tracking-wide text-sm">
              SITE MAP
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-3">
              Explore NexDyne Technologies
            </h1>
            <p className="text-xl text-muted-foreground/50">
              A comprehensive overview of all our services, capabilities, case studies, and insights. Find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {sitemapData.map((section, index) => (
              <div key={index} className="space-y-6">
                {/* Section Header */}
                <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-200">
                  <div className="text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal">
                    {section.title}
                  </h2>
                </div>

                {/* Section Links */}
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <div className="group cursor-pointer p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                        <h3 className="font-semibold text-charcoal group-hover:text-primary transition-colors mb-1">
                          {link.label}
                        </h3>
                        {link.description && (
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Search CTA */}
          <div className="mt-16 p-4 sm:p-6 md:p-8 bg-slate-50 rounded-lg sm:rounded-xl border border-slate-200 text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-3">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use our search feature to quickly find specific services, case studies, or insights across the entire site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary transition-colors">
                  Go to Homepage
                </button>
              </Link>
              <Link href="/insights">
                <button className="px-6 py-3 bg-white text-charcoal rounded-lg font-semibold border border-slate-300 hover:bg-slate-50 transition-colors">
                  Browse Insights
                </button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Press <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-mono">⌘K</kbd> or{' '}
              <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-mono">Ctrl+K</kbd> to open search from anywhere
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
