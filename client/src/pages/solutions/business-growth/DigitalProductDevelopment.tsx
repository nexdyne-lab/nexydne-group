import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DigitalProductDevelopment() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const page_title = "Digital Product Development";
  const page_description = "We guide organizations through the full product lifecycle—from ideation and prototyping to MVP launch and scaling, ensuring product-market fit and continuous growth.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SEO
        title={`NexDyne - ${page_title}`}
        description={page_description}
      />
      <Navigation />
      <main>
        <section className="bg-base text-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center py-24 px-4">
            <div className="space-y-6">
              <Breadcrumbs variant="light" />
              <h1 className="text-5xl font-bold tracking-tight eb-garamond">{page_title}</h1>
              <p className="text-lg text-muted-foreground/50">{page_description}</p>
              <div className="flex space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">
                  <Link href="/solutions">Explore Our Solutions</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/jDxQFaaeQKsGDSZT.jpg" alt={page_title} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-subtle rounded-lg">
                <p className="text-4xl font-bold text-charcoal">2.5x</p>
                <p className="mt-2 text-muted-foreground">Faster Time-to-Market for New Products</p>
              </div>
              <div className="p-6 bg-subtle rounded-lg">
                <p className="text-4xl font-bold text-charcoal">45%</p>
                <p className="mt-2 text-muted-foreground">Increase in User Adoption Rates Post-Launch</p>
              </div>
              <div className="p-6 bg-subtle rounded-lg">
                <p className="text-4xl font-bold text-charcoal">30%</p>
                <p className="mt-2 text-muted-foreground">Reduction in Development Costs via Agile Methods</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-4">From Concept to Code</h2>
            <div className="max-w-3xl mx-auto text-left text-muted-foreground space-y-6">
              <p>In today's competitive landscape, a successful digital product does more than just function—it solves a real-world problem and delivers an exceptional user experience. Many organizations struggle to bridge the gap between a brilliant idea and a market-ready product. This often results from a disconnect between user needs, business goals, and technical execution. Without a structured, user-centric approach, even the most promising concepts can fail to gain traction, leading to wasted resources and missed opportunities.</p>
              <p>NexDyne provides the strategic and technical expertise to navigate the complexities of the product development lifecycle. We embed with your team to instill a culture of innovation grounded in agile principles and continuous user feedback. By focusing on rapid prototyping, Minimum Viable Product (MVP) development, and data-driven iteration, we help you validate assumptions early, mitigate risk, and build products that users genuinely love and that drive tangible business outcomes.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-charcoal mb-12">How We Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8 group">
              {[ 
                { title: "Product Strategy & Roadmapping", description: "Define a clear vision, identify target users, and create a prioritized roadmap that aligns with your business objectives." },
                { title: "User Research & Validation", description: "Conduct in-depth user interviews, surveys, and usability testing to uncover critical insights and validate product-market fit." },
                { title: "UI/UX & Prototyping", description: "Design intuitive interfaces and create interactive prototypes to visualize the user journey and gather early feedback." },
                { title: "Agile Development & MVP Launch", description: "Implement agile methodologies to build, test, and launch a high-quality MVP efficiently, focusing on core functionalities." },
                { title: "Product Scaling & Optimization", description: "Analyze user data and market trends to iteratively improve features, enhance performance, and scale your product for growth." },
                { title: "Lifecycle Management", description: "Provide ongoing support and strategic guidance to manage your product's evolution, from feature enhancements to end-of-life planning." }
              ].map((item, index) => (
                <div key={index} className="relative p-6 bg-subtle rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-l-4 hover:border-destructive">
                  <h3 className="text-xl font-bold text-charcoal transition-all duration-300 group-hover:text-lg">{item.title}</h3>
                  <p className="text-muted-foreground opacity-0 max-h-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-base text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Approach to Product Innovation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-base rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-4">1. Discover & Define</h3>
                <p className="text-muted-foreground/50">We begin with a deep-dive discovery phase to understand your vision, business goals, and target audience. Through market research and competitive analysis, we define the core problem and outline a strategic product roadmap.</p>
              </div>
              <div className="p-8 bg-base rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-4">2. Design & Develop</h3>
                <p className="text-muted-foreground/50">Our team translates strategy into tangible designs and functional prototypes. Following agile principles, we develop an MVP, focusing on delivering value quickly and incorporating feedback throughout the development sprints.</p>
              </div>
              <div className="p-8 bg-base rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-4">3. Deploy & Iterate</h3>
                <p className="text-muted-foreground/50">Post-launch, we monitor key performance indicators and user behavior. We use this data to drive continuous improvement, prioritize new features, and ensure your product evolves to meet changing market demands.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-base text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-700 rounded-lg">
                <p className="text-sm text-secondary font-semibold mb-2">FINTECH SAAS</p>
                <h3 className="text-2xl font-bold mb-4">Launching a Disruptive Investment Platform</h3>
                <p className="text-muted-foreground/70">Partnered with a startup to build and launch an AI-powered investment analytics platform from the ground up, achieving 10,000 active users within six months of MVP launch.</p>
              </div>
              <div className="p-8 border border-gray-700 rounded-lg">
                <p className="text-sm text-secondary font-semibold mb-2">HEALTH-TECH</p>
                <h3 className="text-2xl font-bold mb-4">Modernizing Patient Engagement</h3>
                <p className="text-muted-foreground/70">Guided a healthcare provider in developing a mobile application for patient management, resulting in a 40% reduction in administrative overhead and improved patient satisfaction scores.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-charcoal mb-12">Related Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { title: "Go-to-Market Acceleration", href: "/solutions/business-growth/go-to-market-acceleration" },
                { title: "E-Commerce Strategy & Launch", href: "/solutions/business-growth/ecommerce-strategy-launch" },
                { title: "Pricing & Monetization Strategy", href: "/solutions/business-growth/pricing-monetization-strategy" }
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <a className="block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                    <div className="flex items-center text-primary font-semibold">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white">
          <div className="container mx-auto text-center py-20 px-4">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Next-Gen Product?</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">Let's talk about how NexDyne can help you turn your vision into a successful digital product that captivates users and drives growth.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-muted">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}
