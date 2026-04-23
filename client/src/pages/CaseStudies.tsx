// CaseStudies.tsx — PR 2 rewrite
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

type Category = "all" | "community" | "client" | "internal";

interface CaseStudy {
  id: string; category: Category; categoryLabel: string;
  title: string; subtitle: string; tags: string[]; image: string; link: string;
}

const caseStudies: CaseStudy[] = [
  { id: "global-retailer", category: "client", categoryLabel: "Client Case Study", title: "Scaling e-commerce revenue by 40% with AI personalization", subtitle: "A global retailer transforms their digital experience.", tags: ["Analytics, Data, & Research", "Digital Transformation"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", link: "/case-studies/global-retailer-ai-personalization" },
  { id: "financial-institution", category: "client", categoryLabel: "Client Case Study", title: "Automating 90% of loan processing workflows", subtitle: "And reducing processing time from days to hours.", tags: ["Analytics, Data, & Research", "Process Automation"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80", link: "/case-studies/financial-institution-loan-automation" },
  { id: "healthcare-provider", category: "community", categoryLabel: "Community Case Study", title: "Reducing patient wait times by 35% with predictive analytics", subtitle: "Improving healthcare access across the region.", tags: ["Healthcare", "Predictive Analytics"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", link: "/case-studies/healthcare-predictive-analytics" },
  { id: "logistics", category: "client", categoryLabel: "Client Case Study", title: "Logistics shipment processing automation", subtitle: "Regional provider achieves 92% reduction in shipment errors.", tags: ["Logistics", "Process Automation"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", link: "/case-studies/logistics-shipment-automation" },
  { id: "ecommerce", category: "client", categoryLabel: "Client Case Study", title: "E-commerce order fulfillment automation", subtitle: "Multi-channel retailer handles 12,000+ daily orders.", tags: ["E-commerce", "Operations"], image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", link: "/case-studies/ecommerce-order-fulfillment" },
  { id: "saas", category: "internal", categoryLabel: "Internal Case Study", title: "Launching NexDyne digital product arm", subtitle: "And scaling from five employees to hundreds.", tags: ["Business Building", "Technology"], image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", link: "/case-studies/saas-customer-onboarding" },
  { id: "retail", category: "client", categoryLabel: "Client Case Study", title: "Retail inventory optimization", subtitle: "Specialty retailer cuts carrying costs by 47%.", tags: ["Retail", "Supply Chain"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", link: "/case-studies/retail-inventory-optimization" },
  { id: "insurance", category: "client", categoryLabel: "Client Case Study", title: "Insurance claims automation", subtitle: "Processing time reduced from 14 days to 3.8 days.", tags: ["Insurance", "Claims Processing"], image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", link: "/case-studies/insurance-claims-automation" },
  { id: "community-career", category: "community", categoryLabel: "Community Case Study", title: "Helping Career Connect enroll and inspire 15,000 students", subtitle: "And generate new programs across the country.", tags: ["Education", "Social Impact"], image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", link: "/case-studies/career-connect-education" },
  { id: "africa-food", category: "community", categoryLabel: "Community Case Study", title: "Building resilient, inclusive, and sustainable local food systems", subtitle: "An innovative public-private partnership.", tags: ["Agriculture", "Sustainability"], image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80", link: "/case-studies/sustainable-food-systems" },
  { id: "technology", category: "client", categoryLabel: "Client Case Study", title: "DevOps transformation", subtitle: "Deployment cycles reduced from 2 weeks to 2.5 days.", tags: ["Technology", "DevOps"], image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", link: "/case-studies/technology-devops-transformation" },
  { id: "manufacturing", category: "client", categoryLabel: "Client Case Study", title: "Predictive maintenance for manufacturing excellence", subtitle: "Reducing unplanned downtime by 67%.", tags: ["Manufacturing", "IoT"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", link: "/case-studies/manufacturing-predictive-maintenance" }
];

const categories = [
  { value: "all" as Category, label: "All Stories" },
  { value: "client" as Category, label: "Client Case Studies" },
  { value: "community" as Category, label: "Community Case Studies" },
  { value: "internal" as Category, label: "Internal Case Studies" }
];

export function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const filteredCaseStudies = selectedCategory === "all" ? caseStudies : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO title="Impact Stories" description="Explore how NexDyne delivers measurable results across industries." />
      <Navigation />

      <section className="py-20 md:py-24 bg-white border-b border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">Case Studies</span>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>Impact Stories</h1>
            <p className="text-base sm:text-lg text-charcoal/70 leading-[1.7] max-w-2xl">Explore how we create lasting value for our clients, communities, and colleagues through strategic consulting and intelligent automation.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 border-b border-charcoal/10 sticky top-0 z-40">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  selectedCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-charcoal border border-charcoal/15 hover:bg-subtle"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          {filteredCaseStudies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {filteredCaseStudies.map((caseStudy, i) => (
                  <motion.div key={caseStudy.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group">
                    <Link href={caseStudy.link} className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                      <div className="cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden bg-subtle">
                          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                        </div>
                        <div className="pt-5">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{caseStudy.categoryLabel}</span>
                          <h3 className="mt-2 text-base sm:text-lg text-charcoal leading-[1.25] group-hover:text-primary transition-colors" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>{caseStudy.title}</h3>
                          <p className="mt-2 text-[13px] text-charcoal/60 leading-[1.6]">{caseStudy.subtitle}</p>
                          <p className="mt-3 text-[12px] text-charcoal/50">{caseStudy.tags.join(" · ")}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-14">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">Load More</span>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-charcoal/60">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-subtle border-t border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">Get Started</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>Ready to Create Your Own Success Story?</h2>
            <p className="text-base sm:text-lg text-charcoal/70 leading-[1.7] mb-10 max-w-2xl mx-auto">Join the growing number of organizations transforming their operations with NexDyne.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">Contact Us</span></Link>
              <Link href="/about"><span className="inline-block px-8 py-3 bg-white text-charcoal font-semibold text-[13px] tracking-[0.1em] uppercase border border-charcoal/20 hover:border-charcoal/40 transition-colors cursor-pointer">Learn About Us</span></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
