import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PricingMonetizationStrategy() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const page_title = "Pricing & Monetization Strategy";
  const page_description = "Develop pricing frameworks that maximize revenue and market penetration. Focus on value-based pricing, subscription models, dynamic pricing, competitive analysis, and monetization optimization.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <Navigation />
      <SEO
        title={`NexDyne - ${page_title}`}
        description={page_description}
      />

      {/* Hero */}
      <div className="bg-base text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
          <div className="flex flex-col gap-6 items-start">
            <Breadcrumbs variant="light" />
            <h1 className="text-5xl md:text-6xl font-bold leading-tight eb-garamond">{page_title}</h1>
            <p className="text-lg text-muted-foreground/50">{page_description}</p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-colors duration-200 ease-in-out">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BdRGexSEbbdCulVf.jpg" alt={page_title} className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="px-6 py-4">
            <h3 className="text-4xl font-bold text-charcoal">35%</h3>
            <p className="text-muted-foreground">Average Revenue Uplift</p>
          </div>
          <div className="px-6 py-4">
            <h3 className="text-4xl font-bold text-charcoal">20%</h3>
            <p className="text-muted-foreground">Increase in Customer Lifetime Value</p>
          </div>
          <div className="px-6 py-4">
            <h3 className="text-4xl font-bold text-charcoal">50%</h3>
            <p className="text-muted-foreground">Faster Time-to-Market for New Pricing Models</p>
          </div>
        </div>
      </div>

      {/* Thought Leadership */}
      <div className="py-20 bg-subtle">
        <div className="container mx-auto max-w-4xl text-lg">
            <h2 className="text-4xl font-bold text-center text-charcoal mb-12">Mastering Modern Monetization</h2>
            <p className="mb-6 text-charcoal/80">In today's dynamic market, pricing is more than just a number; it's a strategic lever for growth. Effective pricing and monetization strategies align your product's value with customer willingness to pay, creating a sustainable competitive advantage. Moving beyond traditional cost-plus models to embrace value-based and dynamic pricing is critical. This shift requires a deep understanding of customer segments, competitive landscapes, and the perceived value of your offerings. By doing so, businesses can unlock new revenue streams and foster long-term customer loyalty.</p>
            <p className="text-charcoal/80">The rise of the subscription economy has further complicated the monetization puzzle. Companies must now design flexible, scalable subscription models that cater to diverse user needs while ensuring predictable revenue. This involves careful consideration of feature tiering, usage-based components, and hybrid models. Optimizing these frameworks requires continuous analysis of customer behavior and market trends, turning pricing from a static decision into an agile, data-driven process that fuels growth and profitability.</p>
        </div>
      </div>

      {/* How We Can Help */}
      <div className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">Our Pricing & Monetization Services</h2>
          <div className="grid md:grid-cols-3 gap-8 group">
            {[ 
              { title: "Value-Based Pricing Frameworks", description: "We help you define and quantify the economic value your solution provides to customers, creating pricing tiers that capture this value effectively." },
              { title: "Subscription & Recurring Revenue Models", description: "Design and optimize subscription packages, from feature allocation to billing cycles, to maximize recurring revenue and customer retention." },
              { title: "Dynamic Pricing & Real-Time Optimization", description: "Implement algorithms and systems that adjust prices in real-time based on demand, inventory, competitor pricing, and customer behavior." },
              { title: "Competitive Pricing Analysis", description: "Gain a comprehensive understanding of how your competitors are pricing their products, and identify opportunities to differentiate and win." },
              { title: "Monetization Strategy for Digital Products", description: "Develop innovative monetization models for SaaS, mobile apps, and digital platforms, including freemium, pay-per-use, and ad-supported models." },
              { title: "Promotional & Discounting Strategy", description: "Structure effective promotional campaigns and discount strategies that drive acquisition without devaluing your core offering or eroding margins." },
            ].map((item, i) => (
              <div key={i} className="relative p-6 bg-subtle hover:bg-white hover:shadow-2xl transition-all duration-300 group-hover:opacity-70 hover:!opacity-100">
                <h3 className="text-xl font-bold text-charcoal transition-all duration-300 group-hover:text-lg">{item.title}</h3>
                <p className="text-muted-foreground opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-20 bg-base text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Strategic Pricing Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-secondary mb-4">1</div>
              <h3 className="text-2xl font-bold mb-2">Market & Value Discovery</h3>
              <p className="text-muted-foreground/50">We conduct deep market research, customer segmentation, and value driver analysis to understand the economic impact of your solution and how customers perceive it.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-secondary mb-4">2</div>
              <h3 className="text-2xl font-bold mb-2">Monetization Model Design</h3>
              <p className="text-muted-foreground/50">Based on discovery insights, we design and model various pricing structures, from feature-based tiers to complex usage-based algorithms, to find the optimal fit for your business.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-secondary mb-4">3</div>
              <h3 className="text-2xl font-bold mb-2">Implementation & Optimization</h3>
              <p className="text-muted-foreground/50">We support the implementation of the new pricing strategy and establish a data-driven process for continuous monitoring, testing, and optimization to adapt to market changes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-base text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories in Monetization</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-sm text-secondary mb-2">SaaS Platform</p>
              <h3 className="text-2xl font-bold">Revamping a B2B SaaS pricing model to increase ARPU by 40% while reducing churn.</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-sm text-secondary mb-2">E-Commerce Marketplace</p>
              <h3 className="text-2xl font-bold">Implementing a dynamic pricing engine that led to a 15% increase in gross merchandise value.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Related Capabilities */}
      <div className="py-20 bg-subtle">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-12">Related Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: "Go-to-Market Acceleration", href: "/solutions/business-growth/go-to-market-acceleration" },
              { title: "Revenue Operations & Analytics", href: "/solutions/business-growth/revenue-operations-analytics" },
              { title: "Digital Product Development", href: "/solutions/business-growth/digital-product-development" },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <a className="block bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                  <div className="flex items-center text-primary font-semibold">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white">
        <div className="container mx-auto text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Pricing?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">Let's work together to build a monetization strategy that drives sustainable growth and profitability. Contact us today to speak with a pricing expert.</p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-colors duration-200 ease-in-out">
            Contact Us
          </Button>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
