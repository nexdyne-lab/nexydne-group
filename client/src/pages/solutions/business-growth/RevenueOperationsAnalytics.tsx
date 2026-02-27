import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function RevenueOperationsAnalytics() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const pageTitle = "Revenue Operations & Analytics";
  const pageDescription = "Align sales, marketing, and customer success operations to drive predictable revenue growth. Focus on CRM optimization, pipeline analytics, forecasting models, and operational efficiency.";
  const slug = "revenue-operations-analytics";

  const capabilities = [
    { title: "CRM & Martech Optimization", description: "We audit and enhance your CRM and marketing technology stack to ensure data integrity and seamless workflow automation." },
    { title: "Sales Pipeline Analytics", description: "Gain deep visibility into your sales funnel. We identify bottlenecks, improve conversion rates, and optimize sales cycle length." },
    { title: "Predictive Revenue Forecasting", description: "Leverage historical data and market trends to build accurate, data-driven revenue forecasting models for strategic planning." },
    { title: "Go-to-Market Process Alignment", description: "We unify your sales, marketing, and success teams around a single, efficient GTM process to eliminate friction and accelerate growth." },
    { title: "Customer Lifecycle Intelligence", description: "Map and analyze the entire customer journey to identify opportunities for upselling, cross-selling, and improving retention." },
    { title: "Operational Efficiency Audits", description: "Our team identifies and rectifies operational inefficiencies, implementing streamlined processes that save time and reduce costs." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title={`NexDyne - ${pageTitle}`}
        description={pageDescription}
      />
      <Navigation />
      <main>
        <div className="bg-base">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24 px-4">
            <div className="text-white">
              <Breadcrumbs variant="light" />
              <h1 className="text-4xl md:text-5xl font-bold mt-4 eb-garamond">{pageTitle}</h1>
              <p className="text-lg md:text-xl mt-4 text-muted-foreground/50">{pageDescription}</p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-base text-white">Schedule a Consultation</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">Learn More</Button>
              </div>
            </div>
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/MzXQViScCklCTDsW.jpg" alt={`${pageTitle} Hero Image`} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            <div>
              <h3 className="text-4xl font-bold text-charcoal">45%</h3>
              <p className="text-lg text-muted-foreground mt-2">Increase in Sales Pipeline Velocity</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-charcoal">90%</h3>
              <p className="text-lg text-muted-foreground mt-2">Forecast Accuracy within First Two Quarters</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-charcoal">30%</h3>
              <p className="text-lg text-muted-foreground mt-2">Reduction in Customer Acquisition Cost</p>
            </div>
          </div>
        </div>

        <div className="bg-subtle py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-charcoal/80">
                <h2 className="text-3xl font-bold text-center text-charcoal">The Engine of Predictable Growth</h2>
                <p className="text-lg mt-6">In today's competitive landscape, sustainable growth is not a matter of chance—it's a science. Revenue Operations (RevOps) provides the framework, processes, and data-driven insights to transform your revenue engine from a reactive function into a predictable, high-performance machine. It breaks down the traditional silos between sales, marketing, and customer service, creating a single, unified team focused on a common goal: maximizing customer lifetime value and driving efficient, scalable revenue.</p>
                <p className="text-lg mt-4">By aligning people, processes, and technology, RevOps delivers a holistic view of your business, enabling strategic decision-making based on real-time analytics, not guesswork. This alignment ensures a seamless customer experience from the first touchpoint to long-term loyalty, directly impacting your bottom line. Companies that successfully implement a RevOps framework see significantly faster growth, improved profitability, and a formidable competitive advantage in the market.</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-charcoal">How We Can Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="group relative p-6 border-t-4 border-border hover:border-destructive transition-all duration-300 bg-subtle shadow-lg rounded-lg overflow-hidden">
                            <h3 className="text-xl font-bold text-charcoal transition-all duration-300 group-hover:text-base">{cap.title}</h3>
                            <div className="absolute inset-0 p-6 bg-subtle translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center">
                                <p className="text-charcoal/80">{cap.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-base text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Our Approach to RevOps Transformation</h2>
            <div className="grid md:grid-cols-3 gap-12 mt-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary">1</div>
                <h3 className="text-2xl font-semibold mt-4">Diagnose & Benchmark</h3>
                <p className="mt-2 text-muted-foreground/50">We conduct a comprehensive audit of your current people, processes, and technology stack, benchmarking your performance against industry best practices to identify key areas for improvement.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary">2</div>
                <h3 className="text-2xl font-semibold mt-4">Design & Align</h3>
                <p className="mt-2 text-muted-foreground/50">Based on the diagnosis, we design a unified RevOps strategy and roadmap, aligning your sales, marketing, and service teams with shared goals, metrics, and a cohesive customer journey.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary">3</div>
                <h3 className="text-2xl font-semibold mt-4">Implement & Optimize</h3>
                <p className="mt-2 text-muted-foreground/50">We manage the implementation of new processes and technologies, providing ongoing support and optimization to ensure your revenue engine is continuously learning and improving.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base pt-4 pb-16 md:pb-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <p className="text-sm text-secondary font-semibold">SaaS Unicorn</p>
                        <h4 className="text-xl font-bold text-white mt-2">Unified GTM motion leads to 200% increase in enterprise pipeline.</h4>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <p className="text-sm text-secondary font-semibold">Fintech Scale-Up</p>
                        <h4 className="text-xl font-bold text-white mt-2">CRM overhaul and pipeline analytics cut sales cycle by 35%.</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-subtle py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-charcoal">Related Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Link href="/solutions/business-growth/go-to-market-acceleration">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                  <h3 className="text-xl font-bold text-charcoal">Go-to-Market Acceleration</h3>
                  <p className="mt-2 text-muted-foreground">Launch and scale with a powerful, data-driven GTM strategy that outpaces the competition.</p>
                  <div className="flex items-center mt-4 text-primary font-semibold group-hover:underline">Explore <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/growth-marketing-acquisition">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                  <h3 className="text-xl font-bold text-charcoal">Growth Marketing & Acquisition</h3>
                  <p className="mt-2 text-muted-foreground">Acquire high-value customers through scalable, multi-channel marketing campaigns.</p>
                  <div className="flex items-center mt-4 text-primary font-semibold group-hover:underline">Explore <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/pricing-monetization-strategy">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                  <h3 className="text-xl font-bold text-charcoal">Pricing & Monetization Strategy</h3>
                  <p className="mt-2 text-muted-foreground">Optimize your pricing models to maximize revenue and align value with customer outcomes.</p>
                  <div className="flex items-center mt-4 text-primary font-semibold group-hover:underline">Explore <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Build a Predictable Revenue Engine?</h2>
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Let's connect. Our experts can help you align your teams, optimize your processes, and unlock the data-driven insights needed to fuel sustainable growth.</p>
            <Button size="lg" variant="outline" className="mt-8 text-white border-white hover:bg-white hover:text-primary">Contact Us Today</Button>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
