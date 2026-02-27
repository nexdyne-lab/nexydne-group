import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Cpu, Users, Layers, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";

export default function BrandStorytelling() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Brand & Storytelling | NexDyne Technologies" 
        description="Translating complex innovation into clear market authority. We help digital leaders build brands that scale as fast as their technology."
        canonical="/capabilities/growth-marketing-sales/brand-storytelling"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/growth-marketing-sales">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block hover:text-white transition-colors cursor-pointer">
                Growth, Marketing & Sales
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3 md:mb-4 eb-garamond">
              Brand & <br />
              <span className="text-primary">Storytelling</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Translating complex innovation into clear market authority. We help digital leaders build brands that scale as fast as their technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Request a Brand Architecture Audit
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
                Bridging the gap between <br />
                <span className="text-primary">technical capability and market understanding.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  In the digital economy, complexity is the enemy of adoption. As platforms scale and algorithms evolve, the gap between technical capability and market understanding widens. For high-growth tech companies, the challenge isn't just building the product—it's <strong className="text-charcoal font-semibold">articulating the value</strong> in a way that resonates with human decision-makers.
                </p>
                <p>
                  NexDyne bridges this gap. We combine deep technical literacy with narrative strategy to turn abstract features into compelling market positions. We don't just design logos; we engineer the <strong className="text-charcoal font-semibold">semantic infrastructure</strong> that allows complex businesses to command premium positioning in crowded digital ecosystems.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop" 
                  alt="Brand & Storytelling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 What We Do Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">What we do</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              NexDyne's brand practice integrates data science with design thinking to build brands that are resilient, scalable, and human-centric.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                icon: <Cpu className="w-7 h-7" />,
                title: "Positioning for the API Economy",
                description: "We help platforms define their role in the modern tech stack. By clarifying the interoperability and unique value of your technology, we move the conversation from \"features\" to \"strategic advantage,\" enabling you to compete on value rather than price."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Humanizing Complex Architectures",
                description: "B2B buyers are still people. We translate dense technical documentation into intuitive narratives and visual systems that reduce cognitive load, accelerating the sales cycle for enterprise software and complex SaaS solutions."
              },
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Brand Scalability Systems",
                description: "Hyper-growth breaks rigid brands. We build modular design systems and messaging frameworks that evolve with your product roadmap. This ensures consistency across rapid deployments, new market entries, and product expansions without accruing design debt."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Data-Driven Brand Performance",
                description: "We move branding beyond intuition. By implementing rigorous sentiment analysis and digital share-of-voice tracking, we quantify brand equity and correlate narrative adjustments directly with customer acquisition costs (CAC) and lifetime value (LTV)."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Examples of Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">Examples of our work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Fintech Brand Architecture",
                description: "For a Series B Fintech scale-up, we restructured the brand architecture to unify three disparate product lines, resulting in a 40% increase in cross-sell revenue within two quarters.",
                metric: "40%",
                metricLabel: "Cross-sell revenue increase",
                link: "/cases/fintech-brand-architecture"
              },
              {
                title: "Enterprise AI Messaging Pivot",
                description: "We partnered with an Enterprise AI platform to pivot their messaging from \"automation\" to \"augmented intelligence,\" helping them secure pilot contracts with three Fortune 500 financial institutions.",
                metric: "3",
                metricLabel: "Fortune 500 pilots secured",
                link: "/cases/enterprise-ai-messaging"
              },
              {
                title: "Logistics SaaS Design System",
                description: "We developed a modular design system for a global logistics SaaS, reducing their frontend development time by 30% while ensuring consistent brand application across web, mobile, and IoT interfaces.",
                metric: "30%",
                metricLabel: "Faster development",
                link: "/cases/logistics-design-system"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.link} className="block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-base/5 hover:bg-base transition-all duration-500 hover:scale-[1.02]">
                    <div className="text-4xl font-serif font-bold text-primary mb-2 group-hover:text-white transition-colors">
                      {item.metric}
                    </div>
                    <div className="text-sm text-charcoal/60 mb-6 group-hover:text-white/60 transition-colors">
                      {item.metricLabel}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:text-white group-hover:translate-x-2 transition-all">
                      Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Featured Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Featured capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Narrative Engineering",
                description: "A structured methodology for extracting the core technical truth of a product and reconstructing it as a compelling market narrative. We align product truth with market need to create defensible positioning.",
                link: "/capabilities/growth-marketing-sales/brand-storytelling/narrative-engineering"
              },
              {
                title: "Digital Experience Design",
                description: "We design digital interfaces that embody the brand promise. From intuitive dashboards to immersive marketing sites, we ensure every pixel reinforces your strategic position.",
                link: "/capabilities/growth-marketing-sales/brand-storytelling/digital-experience"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Insights Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Insights
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal eb-garamond">
                Latest from Brand & Storytelling
              </h2>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/10 transition-all duration-300 hover:scale-[1.02]">
                View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "The API as a Brand Asset",
                description: "Why developer experience (DX) is the new customer experience (CX) for platform companies.",
                category: "Brand Strategy",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/api-brand-asset"
              },
              {
                title: "Scaling Brand Without Scaling Debt",
                description: "How to build modular design systems that grow with your product roadmap.",
                category: "Design Systems",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/scaling-brand"
              },
              {
                title: "Measuring Brand Equity in the Digital Age",
                description: "Moving beyond intuition to data-driven brand performance metrics.",
                category: "Analytics",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/measuring-brand-equity"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg sm:rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 mb-4">
                    {item.description}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
              Is your brand scaling as fast as your code?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10">
              Don't let complexity dilute your market authority. Our strategic audit identifies the gaps between your technical value and your market perception.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg">
                Request a Brand Architecture Audit
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "The CEO's Guide to Data Modernization",
            category: "Strategy",
            link: "/insights/ceo-guide-data-modernization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "Building a Data-First Culture",
            category: "Culture",
            link: "/insights/building-data-first-culture",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          },
          {
            title: "From Data Lake to Value Stream",
            category: "Technology",
            link: "/insights/data-lake-value-stream",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
