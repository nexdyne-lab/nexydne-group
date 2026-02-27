import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function InternetOfThings() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'AI Capabilities', href: '/capabilities/artificial-intelligence' },
    { label: 'Internet of Things' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO 
        title="Internet of Things" 
        description="Turn IoT into real business value with improved operations, connected products and services, and entirely new business models."
        canonical="/capabilities/artificial-intelligence/internet-of-things"
      />
      <Navbar />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-charcoal">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                Internet of<br />Things
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Turn IoT into real business value with improved operations, connected products and services, and entirely new business models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/iot-abstract.jpg" 
                alt="IoT Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="py-16 bg-white border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "75B", label: "connected devices by 2025" },
              { value: "35%", label: "reduction in equipment downtime" },
              { value: "25%", label: "decrease in operational costs" },
              { value: "$1.6T", label: "IoT market value by 2025" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8">
                The Internet of Things has the power to transform how we live and do business. By digitizing the physical world into seamless connectivity—and leveraging data—organizations can boost efficiency, launch innovative services, and create lasting value.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We've helped organizations across industries implement IoT solutions that deliver measurable ROI. Our approach focuses on business outcomes first, technology second. Consider that:
              </p>
              
              <div className="space-y-6 text-charcoal/80">
                <p>
                  <strong className="text-charcoal">Visibility drives value:</strong> Real-time data from connected devices enables proactive decision-making. A logistics company used our tracking solution to monitor temperature-sensitive cargo, reducing spoilage by 35%.
                </p>
                <p>
                  <strong className="text-charcoal">Prediction prevents problems:</strong> IoT sensors combined with AI can predict equipment failures before they happen. A manufacturing client reduced unplanned downtime by 50% with our predictive maintenance solution.
                </p>
                <p>
                  <strong className="text-charcoal">New models create growth:</strong> Connected products enable service-based business models. An industrial equipment manufacturer used our platform to launch a "pay-per-use" model, growing recurring revenue by 20%.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 eb-garamond">
              We provide end-to-end IoT solutions, from strategy to implementation.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "IoT Strategy & Roadmap",
                description: "We help you identify the most promising IoT use cases for your business. Whether it's predictive maintenance, asset tracking, or smart environments, we quantify the potential ROI and define a clear roadmap."
              },
              {
                title: "Architecture & Platform",
                description: "We design robust IoT architectures that can handle massive scale. This includes selecting the right sensors, defining connectivity protocols (LoRaWAN, 5G, NB-IoT), and building secure cloud platforms."
              },
              {
                title: "Implementation & Integration",
                description: "We bring your IoT vision to life. Our engineers build custom firmware, develop scalable data pipelines, and create intuitive applications—all with end-to-end security built in."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Solutions Deep Dive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 eb-garamond">
              Three paths to IoT value
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Next-Gen Operations",
                description: "Transform your operations with real-time visibility and predictive intelligence. Monitor equipment health, optimize resource utilization, and prevent costly downtime.",
                link: "/capabilities/artificial-intelligence/internet-of-things/next-gen-operations",
                metric: "50% less downtime"
              },
              {
                title: "Connected Products",
                description: "Turn your products into intelligent, connected devices. Enable remote monitoring, over-the-air updates, and new service-based revenue streams.",
                link: "/capabilities/artificial-intelligence/internet-of-things/connected-products",
                metric: "20% new revenue"
              },
              {
                title: "IoT Business Building",
                description: "Launch entirely new IoT-enabled businesses. From ideation to market launch, we help you build and scale innovative IoT ventures.",
                link: "/capabilities/artificial-intelligence/internet-of-things/iot-business-building",
                metric: "New market entry"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.link}>
                  <div className="p-8 bg-subtle border-l-4 border-primary hover:bg-subtle transition-colors cursor-pointer h-full">
                    <div className="text-sm font-bold text-primary mb-2">{item.metric}</div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Banner */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Featured Insight</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The IoT Maturity Model</h3>
              <p className="text-white/80">Assess your organization's readiness for IoT transformation.</p>
            </div>
            <Link href="/insights/iot-maturity-model">
              <Button className="bg-white text-primary hover:bg-subtle px-8 py-4 font-semibold whitespace-nowrap">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-base">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white eb-garamond">
                IoT transformation in action
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Reducing equipment downtime by 50% for a manufacturer",
                category: "Manufacturing",
                result: "50% less downtime"
              },
              {
                title: "Launching a connected product line for an appliance company",
                category: "Consumer Products",
                result: "15% service revenue"
              },
              {
                title: "Optimizing fleet operations for a logistics provider",
                category: "Transportation",
                result: "20% fuel savings"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-white/5 p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <div className="text-white/60 text-sm mb-4">{study.result}</div>
                <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Edge Computing: The Next Frontier",
            category: "Technology",
            link: "/insights/edge-computing-frontier",
            image: "/images/insight-edge-computing.jpg"
          },
          {
            title: "IoT Security Best Practices",
            category: "Security",
            link: "/insights/iot-security-best-practices",
            image: "/images/insight-iot-security.jpg"
          },
          {
            title: "Building IoT-Enabled Business Models",
            category: "Strategy",
            link: "/insights/iot-business-models",
            image: "/images/insight-iot-business.jpg"
          }
        ]}
      />

      {/* Ready to Talk CTA */}
      <section className="py-20 bg-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 eb-garamond">
              Ready to connect your business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our IoT expertise can help you digitize operations and unlock new value streams.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
