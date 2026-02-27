import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ECommerceStrategyLaunch() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const breadcrumbs = [
    { name: "Solutions", href: "/solutions" },
    { name: "Business Growth", href: "/solutions/business-growth" },
    { name: "E-Commerce Strategy & Launch", href: "/solutions/business-growth/ecommerce-strategy-launch" },
  ];

  const capabilities = [
    { title: "Marketplace Strategy", description: "Identify and validate the most lucrative online marketplaces for your products." },
    { title: "Platform Selection", description: "Choose the right e-commerce platform (e.g., Shopify, Magento, BigCommerce) that aligns with your business needs." },
    { title: "UX/UI Optimization", description: "Design a seamless and intuitive user experience to maximize conversions." },
    { title: "Payment Gateway Integration", description: "Implement secure and reliable payment solutions for a frictionless checkout process." },
    { title: "Omnichannel Retail Strategy", description: "Create a cohesive customer experience across all online and offline channels." },
    { title: "Launch & Growth Marketing", description: "Develop a go-to-market plan to drive traffic, acquire customers, and scale revenue." },
  ];

  return (
    <>
      <SEO
        title="E-Commerce Strategy & Launch | NexDyne"
        description="Helping organizations build and scale e-commerce platforms, from marketplace strategy to omnichannel retail execution."
      />
      <Navigation />
      <main>
        <section className="bg-base text-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24">
            <div className="space-y-6">
              <Breadcrumbs variant="light" />
              <h1 className="text-4xl md:text-5xl font-bold eb-garamond">E-Commerce Strategy & Launch</h1>
              <p className="text-lg text-muted-foreground/50">Help organizations build and scale e-commerce platforms, from marketplace strategy to omnichannel retail execution. Focus on platform selection, UX optimization, payment integration, and launch strategy.</p>
              <div className="flex space-x-4">
                <Button asChild size="lg" className="bg-primary hover:bg-base">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/case-studies">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/dhRhrKVvXtXpNvqO.jpg" alt="E-Commerce Strategy" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-charcoal">75%</p>
              <p className="text-muted-foreground">of consumers are more likely to buy from a retailer that recognizes them by name and recommends products based on past purchases.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-charcoal">$6.3 Trillion</p>
              <p className="text-muted-foreground">is the projected value of global e-commerce sales by 2024, highlighting the immense growth opportunity.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-charcoal">88%</p>
              <p className="text-muted-foreground">of online shoppers are less likely to return to a site after a bad user experience, making UX a critical factor for success.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-charcoal">From Clicks to Conversions</h2>
            <div className="text-left space-y-4 mt-6 text-charcoal/80">
              <p>The digital marketplace is more crowded than ever. Launching a successful e-commerce venture requires more than just a functional website; it demands a comprehensive strategy that encompasses user experience, technology, and marketing. Without a clear roadmap, businesses risk getting lost in the noise, facing low conversion rates, and ultimately failing to capture their share of the booming online market. A poorly executed launch can lead to wasted resources, brand damage, and missed revenue opportunities.</p>
              <p>NexDyne provides end-to-end support for your e-commerce journey. We help you navigate the complexities of platform selection, design intuitive user interfaces, and integrate secure payment systems. Our data-driven approach ensures your launch is not just a deployment, but a strategic market entry designed for sustained growth. We partner with you to build a scalable, high-performing e-commerce platform that not only meets customer expectations but also drives long-term profitability and brand loyalty.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {capabilities.map((cap, index) => (
                <motion.div key={index} className="group relative p-6 bg-subtle rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                  <div className="absolute left-0 top-0 h-full w-1 bg-transparent transition-all duration-300 group-hover:bg-destructive"></div>
                  <h3 className="text-xl font-bold text-charcoal transition-all duration-300 group-hover:text-base">{cap.title}</h3>
                  <p className="text-muted-foreground h-0 opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-base text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
              <div className="p-6">
                <p className="text-4xl font-bold text-secondary">1</p>
                <h3 className="text-xl font-semibold mt-4">Discovery & Strategy</h3>
                <p className="text-muted-foreground/50 mt-2">We begin by understanding your business goals, target audience, and competitive landscape to build a tailored e-commerce strategy.</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-secondary">2</p>
                <h3 className="text-xl font-semibold mt-4">Implementation & Launch</h3>
                <p className="text-muted-foreground/50 mt-2">Our team manages the end-to-end development process, from platform configuration to launch, ensuring a seamless and on-time delivery.</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-secondary">3</p>
                <h3 className="text-xl font-semibold mt-4">Optimization & Growth</h3>
                <p className="text-muted-foreground/50 mt-2">Post-launch, we continuously analyze performance, optimize for conversions, and implement growth marketing campaigns to scale your business.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-base text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-sm text-secondary">Retail Fashion</p>
                <h3 className="text-xl font-semibold mt-2">Global Fashion Brand Increases Online Sales by 300% with New E-Commerce Platform</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-sm text-secondary">Consumer Electronics</p>
                <h3 className="text-xl font-semibold mt-2">Electronics Retailer Achieves 40% Higher Conversion Rate with UX Overhaul</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-subtle">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-charcoal">Related Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
              <Link href="/solutions/business-growth/digital-product-development">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-charcoal">Digital Product Development</h3>
                  <p className="text-muted-foreground mt-2">Innovate and build digital products that captivate users and drive business outcomes.</p>
                  <div className="flex items-center text-primary font-semibold mt-4">Learn More <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/growth-marketing-acquisition">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-charcoal">Growth Marketing & Acquisition</h3>
                  <p className="text-muted-foreground mt-2">Acquire and retain high-value customers through data-driven marketing strategies.</p>
                  <div className="flex items-center text-primary font-semibold mt-4">Learn More <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
              <Link href="/solutions/business-growth/revenue-operations-analytics">
                <a className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-charcoal">Revenue Operations & Analytics</h3>
                  <p className="text-muted-foreground mt-2">Align your sales, marketing, and service operations to maximize revenue.</p>
                  <div className="flex items-center text-primary font-semibold mt-4">Learn More <ArrowRight className="ml-2 h-5 w-5" /></div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white">
          <div className="container mx-auto text-center py-16">
            <h2 className="text-3xl font-bold">Ready to Build Your E-Commerce Empire?</h2>
            <p className="mt-4 max-w-2xl mx-auto">Let's discuss how NexDyne can help you launch and scale a successful e-commerce business. Reach out to our experts today for a personalized consultation.</p>
            <Button asChild size="lg" variant="outline" className="mt-8 bg-white text-primary hover:bg-subtle">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
