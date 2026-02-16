import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

const pageData = {
  title: "Growth Marketing & Acquisition",
  subtitle: "Design and execute data-driven marketing strategies that drive customer acquisition at scale. We focus on performance marketing, SEO/SEM, content strategy, conversion optimization, and marketing automation to fuel sustainable growth.",
  slug: "growth-marketing-acquisition",
  description: "Accelerate customer acquisition and revenue growth with NexDyne's data-driven growth marketing and acquisition services.",
  keywords: ["Growth Marketing", "Customer Acquisition", "Performance Marketing", "SEO", "SEM", "Conversion Rate Optimization"],
};

const stats = [
  { metric: "150%", label: "Average Increase in Qualified Leads within 6 months" },
  { metric: "40%", label: "Typical Reduction in Customer Acquisition Cost (CAC)" },
  { metric: "3x", label: "Higher Conversion Rates from optimized marketing funnels" },
];

const capabilities = [
  { title: "Performance Marketing", description: "Maximize ROI with targeted, data-driven paid advertising campaigns across all major platforms." },
  { title: "SEO & SEM Strategy", description: "Dominate search engine results through comprehensive organic and paid search strategies." },
  { title: "Content & Inbound Marketing", description: "Attract and convert your target audience with high-value content that builds authority and trust." },
  { title: "Conversion Rate Optimization (CRO)", description: "Systematically improve your website and landing pages to convert more visitors into customers." },
  { title: "Marketing Automation & CRM", description: "Implement and optimize marketing automation platforms to nurture leads and personalize customer journeys." },
  { title: "Analytics & Attribution", description: "Gain a clear understanding of marketing performance with advanced analytics and multi-touch attribution models." },
];

const approach = [
  { step: "1. Immersion & Audit", title: "Deep Dive Analysis", description: "We begin by auditing your current marketing channels, analytics, and customer data to identify key growth levers and opportunities." },
  { step: "2. Strategy & Roadmap", title: "Growth Blueprint Design", description: "We develop a comprehensive, multi-channel growth marketing strategy and a prioritized roadmap of initiatives designed for maximum impact." },
  { step: "3. Execution & Optimization", title: "Iterative Growth Engine", description: "Our team executes the plan with agile sprints, continuously testing, learning, and optimizing campaigns to accelerate results and maximize ROI." },
];

const caseStudies = [
  { industry: "SaaS", headline: "How a B2B SaaS Client Achieved a 200% Increase in Demo Requests Through a Revamped Inbound Strategy" },
  { industry: "E-Commerce", headline: "Scaling an E-commerce Brand from $1M to $10M in 18 Months with a Performance-Focused Media Mix" },
];

const relatedCapabilities = [
    {
        title: "E-Commerce Strategy & Launch",
        link: "/solutions/business-growth/ecommerce-strategy-launch",
    },
    {
        title: "Digital Product Development",
        link: "/solutions/business-growth/digital-product-development",
    },
    {
        title: "Go-to-Market Acceleration",
        link: "/solutions/business-growth/go-to-market-acceleration",
    },
];

export default function GrowthMarketingAcquisition() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title={`NexDyne | Solutions | ${pageData.title}`}
        description={pageData.description}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <div className="bg-[#051C2C] text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center py-16 md:py-24">
            <div className="flex flex-col gap-4 items-start">
              <Breadcrumbs variant="light" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight eb-garamond">{pageData.title}</h1>
              <p className="text-lg md:text-xl text-gray-300">{pageData.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button asChild size="lg" className="bg-[#0077B5] hover:bg-[#005f8f] text-white">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#051C2C]">
                   <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="h-64 md:h-auto rounded-lg overflow-hidden">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/PoSsruKMtNSxfkOB.jpg" alt={pageData.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl md:text-5xl font-bold text-[#051C2C]">{stat.metric}</p>
                            <p className="text-base text-gray-600 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Thought Leadership */}
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-[#051C2C] mb-8">Fueling Your Growth Engine</h2>
                <div className="prose lg:prose-xl mx-auto text-gray-700 space-y-6">
                    <p>In today's hyper-competitive digital landscape, acquiring new customers is both an art and a science. Sustainable growth is not about chasing vanity metrics; it's about building a predictable, scalable, and profitable acquisition engine. This requires a holistic approach that integrates data, technology, and creativity to attract, engage, and convert your ideal customers. At NexDyne, we move beyond siloed tactics to architect comprehensive growth strategies that deliver measurable business outcomes.</p>
                    <p>Our philosophy is rooted in a deep understanding of the entire customer lifecycle. We combine rigorous data analysis with a relentless focus on the customer experience to identify and capitalize on growth opportunities. From top-of-funnel brand awareness to bottom-of-funnel conversion optimization, we orchestrate multi-channel campaigns that work in concert to drive momentum. We believe in a test-and-learn methodology, constantly iterating and refining our approach to ensure your marketing investment yields the highest possible return.</p>
                </div>
            </div>
        </div>

        {/* How We Can Help */}
        <div className="py-16 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#051C2C] mb-12">Our Growth Marketing Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="group relative p-6 border rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="absolute top-0 left-0 h-full w-1 bg-gray-200 group-hover:bg-[#CC0000] transition-colors duration-300"></div>
                            <h3 className="text-xl font-bold text-[#051C2C] transition-all duration-300 group-hover:text-base">{cap.title}</h3>
                            <p className="text-gray-600 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300">{cap.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Our Approach */}
        <div className="py-16 bg-[#051C2C] text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Strategic Approach to Acquisition</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 hidden md:block"></div>
                     {approach.map((item, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[#0077B5] flex items-center justify-center text-2xl font-bold mb-4 border-4 border-[#051C2C]">{item.step}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Case Studies */}
        <div className="py-16 bg-[#0A283E] text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Proven Success in Growth Marketing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-[#051C2C] p-6 rounded-lg flex flex-col">
                            <p className="text-sm font-semibold text-[#00d4ff] mb-2">{study.industry}</p>
                            <h3 className="text-xl font-bold flex-grow">{study.headline}</h3>
                            <Link href="/case-studies" className="flex items-center gap-2 text-[#00d4ff] hover:underline mt-4">
                                Read Case Study <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Related Capabilities */}
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#051C2C] mb-12">Explore Related Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedCapabilities.map((rel, index) => (
                        <Link key={index} href={rel.link} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-[#051C2C]">{rel.title}</h3>
                            <div className="flex items-center gap-2 text-[#0077B5] hover:underline mt-4">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0077B5] text-white">
            <div className="container mx-auto text-center py-16">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Accelerate Your Growth?</h2>
                <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">Let's build a powerful acquisition engine that delivers scalable, sustainable results for your business. Contact us today to start the conversation.</p>
                <Button asChild size="lg" className="mt-8 bg-white text-[#0077B5] hover:bg-gray-200">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
