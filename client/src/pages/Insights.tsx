// Insights.tsx — PR 2 rewrite
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

type Category = "All" | "Strategy" | "Technology" | "Operations" | "Growth" | "Sustainability";

interface Insight {
  id: string; title: string; description: string;
  category: Exclude<Category, "All">;
  readTime: string; date: string; url: string; image: string;
  author?: string; authorRole?: string;
}

const insights: Insight[] = [
  { id: "featured-1", title: "Why Intelligent Automation Isn\u0027t Optional Anymore", description: "Organizations that delay automation risk falling behind.", category: "Technology", readTime: "5 min read", date: "January 15, 2026", url: "/insights/why-intelligent-automation-isnt-optional-anymore", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", author: "Sarah Mitchell", authorRole: "Partner, Technology" },
  { id: "featured-2", title: "How AI Agents Transform Enterprise Operations", description: "Autonomous AI agents are reshaping workflows and driving unprecedented operational efficiency across industries.", category: "Technology", readTime: "7 min read", date: "January 10, 2026", url: "/insights/how-ai-agents-transform-enterprise-operations", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", author: "David Chen", authorRole: "Senior Partner" },
  { id: "featured-3", title: "The Complete Guide to Process Mining", description: "A comprehensive look at how process mining uncovers hidden inefficiencies.", category: "Operations", readTime: "10 min read", date: "January 5, 2026", url: "/insights/complete-guide-to-process-mining", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", author: "Marcus Thompson", authorRole: "Partner, Operations" },
  { id: "4", title: "The Corporate Venture Advantage", description: "Why established assets combined with startup speed create an unfair market advantage.", category: "Strategy", readTime: "6 min read", date: "December 15, 2025", url: "/insights/corporate-venture-advantage", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", author: "Jennifer Walsh", authorRole: "Partner, Strategy" },
  { id: "5", title: "From MVP to Scale: Navigating Growth", description: "Navigating the valley of death and operationalizing your new venture.", category: "Growth", readTime: "10 min read", date: "December 10, 2025", url: "/insights/from-mvp-to-scale", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", author: "Michael Roberts", authorRole: "Senior Partner" },
  { id: "6", title: "Building a Data-Driven Culture", description: "How to attract and retain entrepreneurial talent.", category: "Strategy", readTime: "5 min read", date: "December 5, 2025", url: "/insights/building-data-culture", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", author: "Lisa Park", authorRole: "Partner, Digital" },
  { id: "7", title: "The Green Growth Imperative", description: "How sustainability is becoming a core driver of competitive advantage.", category: "Sustainability", readTime: "8 min read", date: "November 28, 2025", url: "/insights/green-growth-imperative", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80", author: "Emma Richardson", authorRole: "Partner, Sustainability" },
  { id: "8", title: "Digital Transformation Readiness Assessment", description: "Key indicators that signal it is time to automate.", category: "Technology", readTime: "6 min read", date: "November 20, 2025", url: "/insights/digital-transformation-readiness", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", author: "James Anderson", authorRole: "Partner, Technology" },
  { id: "9", title: "Supply Chain Resilience in 2026", description: "Building adaptive supply chains that can withstand disruption.", category: "Operations", readTime: "7 min read", date: "November 15, 2025", url: "/insights/generative-supply-chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", author: "Robert Kim", authorRole: "Partner, Operations" },
  { id: "10", title: "The CEO Guide to Data Modernization", description: "A strategic framework for transforming data capabilities.", category: "Strategy", readTime: "12 min read", date: "November 10, 2025", url: "/insights/ceo-guide-data-modernization", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", author: "Catherine Moore", authorRole: "Senior Partner" },
  { id: "11", title: "Net Zero Transition: A Practical Roadmap", description: "How companies are successfully navigating the transition to net-zero.", category: "Sustainability", readTime: "9 min read", date: "November 5, 2025", url: "/insights/net-zero-transition", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80", author: "Thomas Green", authorRole: "Partner, Sustainability" },
  { id: "12", title: "Customer Intelligence: Beyond Segmentation", description: "Moving from traditional customer segments to predictive, personalized engagement.", category: "Growth", readTime: "8 min read", date: "October 28, 2025", url: "/insights/beyond-segmentation", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", author: "Amanda Foster", authorRole: "Partner, Marketing & Sales" }
];

const categories: Category[] = ["All", "Strategy", "Technology", "Operations", "Growth", "Sustainability"];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const filteredInsights = selectedCategory === "All" ? insights : insights.filter(insight => insight.category === selectedCategory);
  const featuredInsights = filteredInsights.slice(0, 3);
  const remainingInsights = filteredInsights.slice(3);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO title="Insights" description="Expert perspectives on strategy, technology, operations, and growth." canonical="/insights" />
      <Navigation />

      <section className="py-20 md:py-24 bg-white border-b border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">Insights</span>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>Insights</h1>
            <p className="text-base sm:text-lg text-charcoal/70 leading-[1.7] max-w-2xl">Expert perspectives on strategy, technology, operations, and growth from our consultants and partners around the world.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 border-b border-charcoal/10 sticky top-0 z-40">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-charcoal border border-charcoal/15 hover:bg-subtle"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredInsights.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="px-6 sm:px-8 md:px-12 lg:px-16">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-14">Featured Insights</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
              {featuredInsights.map((insight, i) => (
                <motion.div key={insight.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group">
                  <Link href={insight.url} className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <div className="cursor-pointer">
                      <div className="aspect-[16/10] overflow-hidden bg-subtle">
                        <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                      </div>
                      <div className="pt-6 md:pt-7">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{insight.category}</span>
                        <h3 className="mt-3 text-xl sm:text-[1.375rem] text-charcoal leading-[1.2] group-hover:text-primary transition-colors" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>{insight.title}</h3>
                        <p className="mt-3 text-[14px] text-charcoal/70 leading-[1.65]">{insight.description}</p>
                        <p className="mt-4 text-[13px] text-charcoal/60">{insight.date} · {insight.readTime}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {remainingInsights.length > 0 && (
        <section className="py-20 md:py-24 bg-subtle">
          <div className="px-6 sm:px-8 md:px-12 lg:px-16">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-14">All Insights</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {remainingInsights.map((insight, i) => (
                <motion.div key={insight.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group">
                  <Link href={insight.url} className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <div className="cursor-pointer">
                      <div className="aspect-[16/10] overflow-hidden bg-white">
                        <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                      </div>
                      <div className="pt-5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{insight.category}</span>
                        <h3 className="mt-2 text-base sm:text-lg text-charcoal leading-[1.25] group-hover:text-primary transition-colors" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>{insight.title}</h3>
                        <p className="mt-2 text-[13px] text-charcoal/70 leading-[1.65]">{insight.description}</p>
                        <p className="mt-3 text-[12px] text-charcoal/60">{insight.date} · {insight.readTime}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-14">
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">Load More</span>
            </div>
          </div>
        </section>
      )}

      {filteredInsights.length === 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="px-6 sm:px-8 md:px-12 lg:px-16 text-center">
            <p className="text-lg text-charcoal/60">No insights found for this category.</p>
          </div>
        </section>
      )}

      <section className="py-20 md:py-24 bg-white border-t border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">Stay Informed</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>Stay Informed</h2>
            <p className="text-base sm:text-lg text-charcoal/70 leading-[1.7] mb-10 max-w-2xl mx-auto">Subscribe to receive our latest insights and perspectives directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 border-b border-charcoal/30 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary transition-colors bg-transparent" />
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer whitespace-nowrap">Subscribe</span>
            </div>
            <p className="mt-5 text-[12px] text-charcoal/50">By subscribing, you agree to our privacy policy.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
