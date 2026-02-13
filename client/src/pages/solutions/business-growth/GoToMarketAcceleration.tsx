import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function GoToMarketAcceleration() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const pageTitle = "Go-to-Market Acceleration";
  const pageDescription = "Accelerate time-to-market for new products and services with NexDyne's structured GTM frameworks. We focus on market entry strategy, channel development, and launch execution to ensure your success.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title={`${pageTitle} | NexDyne`}
        description={pageDescription}
      />
      <Navigation />
      <main>
        <section className="bg-[#051C2C] text-white pt-24 pb-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <Breadcrumbs variant="light" />
              <h1 className="text-4xl md:text-5xl font-bold mt-4 eb-garamond">{pageTitle}</h1>
              <p className="text-lg mt-4 text-gray-300">{pageDescription}</p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="bg-[#0077B5] hover:bg-[#005f8a]">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#051C2C]">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/VEkhgaQiUnXXLFJE.jpg" alt="Go-to-Market Acceleration" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="border-l-4 border-[#0077B5] pl-6">
                <p className="text-4xl font-bold text-[#051C2C]">35%</p>
                <p className="text-lg text-gray-600">Faster Time-to-Market</p>
              </div>
              <div className="border-l-4 border-[#0077B5] pl-6">
                <p className="text-4xl font-bold text-[#051C2C]">50%</p>
                <p className="text-lg text-gray-600">Increase in Market Share within First Year</p>
              </div>
              <div className="border-l-4 border-[#0077B5] pl-6">
                <p className="text-4xl font-bold text-[#051C2C]">2X</p>
                <p className="text-lg text-gray-600">Higher ROI on Launch Campaigns</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#051C2C]">Launching with Precision and Impact</h2>
            <p className="text-lg text-gray-600 mt-6 text-center">
              A successful go-to-market (GTM) strategy is more than a checklist; it's a comprehensive plan that aligns your product, sales, and marketing efforts to capture a target market. In today's competitive landscape, a flawed launch can be costly, leading to missed revenue opportunities and brand damage. NexDyne provides the strategic guidance and operational support to ensure your new product or service makes a powerful market entrance.
            </p>
            <p className="text-lg text-gray-600 mt-4 text-center">
              We help you navigate the complexities of market entry, from identifying the right customer segments to building effective sales channels and crafting compelling messaging. Our data-driven approach minimizes risk and maximizes your chances of achieving rapid adoption and sustainable growth. We partner with you to create a GTM plan that is not only robust but also agile enough to adapt to market feedback.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#051C2C]">How We Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[ 
                { title: "Market Entry Strategy", description: "We analyze market landscapes, competitive pressures, and customer needs to define your optimal entry point and positioning." },
                { title: "Channel Development", description: "We design and implement a multi-channel strategy, including direct sales, partnerships, and digital platforms, to reach your target audience effectively." },
                { title: "Sales Enablement", description: "We equip your sales teams with the training, tools, and content they need to articulate your value proposition and close deals." },
                { title: "Partnership Ecosystems", description: "We identify and cultivate strategic partnerships that extend your market reach and create new revenue streams." },
                { title: "Launch Execution", description: "We manage the end-to-end launch process, from pre-launch buzz to post-launch optimization, ensuring a seamless and impactful rollout." },
                { title: "Product-Market Fit Validation", description: "We employ lean methodologies to test your offering with real customers, gathering feedback to refine your product and messaging before a full-scale launch." }
              ].map((item, index) => (
                <div key={index} className="group relative p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-[#CC0000] transition-colors duration-300"></div>
                  <h3 className="text-xl font-bold text-[#051C2C] group-hover:text-base transition-all duration-300">{item.title}</h3>
                  <p className="text-gray-600 mt-2 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#051C2C] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Our Approach to GTM Success</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <p className="text-5xl font-bold text-[#0077B5]">1</p>
                <h3 className="text-2xl font-bold mt-4">Discovery & Strategy</h3>
                <p className="mt-2 text-gray-300">We begin with a deep dive into your business, product, and market to build a bespoke GTM strategy aligned with your goals.</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#0077B5]">2</p>
                <h3 className="text-2xl font-bold mt-4">Activation & Execution</h3>
                <p className="mt-2 text-gray-300">We translate strategy into action, managing the cross-functional execution of your launch plan with precision and agility.</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#0077B5]">3</p>
                <h3 className="text-2xl font-bold mt-4">Optimization & Growth</h3>
                <p className="mt-2 text-gray-300">Post-launch, we continuously monitor performance, gather market feedback, and optimize your strategy to drive sustained growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-sm text-[#00d4ff]">SaaS</p>
                <h3 className="text-xl font-bold mt-2">Launching a B2B SaaS Platform into a Crowded Market</h3>
                <p className="mt-4 text-gray-300">NexDyne developed a phased GTM strategy that focused on a niche vertical, enabling a new SaaS client to secure 50+ enterprise customers in their first six months.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-sm text-[#00d4ff]">FinTech</p>
                <h3 className="text-xl font-bold mt-2">Accelerating International Expansion for a FinTech Innovator</h3>
                <p className="mt-4 text-gray-300">Our market entry framework and partnership strategy helped a FinTech client successfully launch in three new international markets in just one year, exceeding their revenue targets by 40%.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#051C2C]">Related Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Link href="/solutions/business-growth/growth-marketing-acquisition">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#051C2C]">Growth Marketing & Acquisition</h3>
                  <p className="mt-2 text-gray-600">Drive customer acquisition and revenue growth with our data-driven marketing strategies.</p>
                  <div className="flex items-center mt-4 text-[#0077B5] font-semibold">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/pricing-monetization-strategy">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#051C2C]">Pricing & Monetization Strategy</h3>
                  <p className="mt-2 text-gray-600">Optimize your pricing models to maximize profitability and customer value.</p>
                  <div className="flex items-center mt-4 text-[#0077B5] font-semibold">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/revenue-operations-analytics">
                <a className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#051C2C]">Revenue Operations & Analytics</h3>
                  <p className="mt-2 text-gray-600">Align your sales, marketing, and customer success operations to drive efficiency and growth.</p>
                  <div className="flex items-center mt-4 text-[#0077B5] font-semibold">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0077B5] text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg mt-4">
              Let's discuss how NexDyne's go-to-market expertise can help you launch your next product or service with confidence and achieve your business objectives. Reach out to our team of experts today.
            </p>
            <Button size="lg" variant="outline" className="mt-8 text-white border-white hover:bg-white hover:text-[#0077B5]">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
