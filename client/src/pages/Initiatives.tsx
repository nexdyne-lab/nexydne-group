import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const initiatives = [
  {
    id: "mid-market-ai",
    label: "MID-MARKET AI ACCESS PROGRAM",
    title: "Expanding Access to Enterprise-Grade AI for America's Mid-Market",
    description: "NexDyne is leading a national effort to make advanced AI, analytics, and automation accessible to mid-market companies traditionally excluded from enterprise technology.",
    image: "/images/initiatives/mid-market-ai-program.png",
    link: "/initiatives/mid-market-ai-access"
  },
  {
    id: "intelligence-commons",
    label: "NEXDYNE INTELLIGENCE COMMONS",
    title: "Democratizing Business Intelligence for Growing Companies",
    description: "A free-to-start AI-powered intelligence platform designed to give mid-market leaders access to market signals, competitive benchmarking, and growth scenario modeling.",
    image: "/images/initiatives/analytics-dashboard.jpg",
    link: "/initiatives/intelligence-commons"
  },
  {
    id: "regional-partnerships",
    label: "REGIONAL BUSINESS INTELLIGENCE PARTNERSHIPS",
    title: "Partnering With Local Chambers to Build Data-Driven Growth Ecosystems",
    description: "NexDyne collaborates with chambers of commerce, economic development organizations, and industry associations to deliver structured intelligence and analytics.",
    image: "/images/initiatives/regional-partnerships.png",
    link: "/initiatives/regional-partnerships"
  }
];

export default function Initiatives() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Initiatives" 
        description="NexDyne initiatives building intelligent, competitive, and resilient mid-market businesses across the United States."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-secondary uppercase mb-4 block">
              NEXDYNE INITIATIVES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-3 eb-garamond">
              Building intelligent, competitive, and resilient mid-market businesses across the United States
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-3xl">
              Programs that advance entrepreneurship, operational excellence, and regional economic competitiveness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 sm:py-20 md:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={initiative.link}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center cursor-pointer ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${initiative.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase mb-3 block">
                        {initiative.label}
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                        {initiative.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-charcoal/70 leading-relaxed mb-6">
                        {initiative.description}
                      </p>
                      <span className="inline-flex items-center text-charcoal font-semibold text-sm sm:text-base group-hover:text-secondary transition-colors">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6">
                Ready to join our initiatives?
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-8">
                Partner with NexDyne to bring enterprise-grade intelligence and technology to your organization or community.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-charcoal font-semibold rounded-full hover:bg-secondary transition-colors">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
