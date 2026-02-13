import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, TrendingUp, Globe, ShieldCheck, Truck, ShoppingBag, Smartphone, Zap, Activity, Building2, Rocket } from "lucide-react";
import { Link } from "wouter";
import Breadcrumb from '@/components/Breadcrumb';

export default function VenturePortfolio() {
  const ventures = [
    {
      industry: "Logistics & Supply Chain",
      title: "FreightConnect",
      slug: "freight-connect",
      description: "A digital freight marketplace that connects regional shippers directly with owner-operators, eliminating brokerage fees and optimizing route planning.",
      timeline: "4 Months",
      timelineLabel: "Concept to Launch",
      outcome: "$12M GMV",
      outcomeLabel: "First Year Run Rate",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      icon: Truck,
      color: "text-blue-400",
      bgColor: "bg-blue-900/30"
    },
    {
      industry: "Retail & IoT",
      title: "SmartStock",
      slug: "smart-stock",
      description: "An IoT-enabled inventory management system for a mid-market retail chain, utilizing shelf sensors to automate replenishment and reduce stockouts.",
      timeline: "5 Months",
      timelineLabel: "Prototype to Rollout",
      outcome: "35%",
      outcomeLabel: "Reduction in Waste",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80",
      icon: ShoppingBag,
      color: "text-purple-400",
      bgColor: "bg-purple-900/30"
    },
    {
      industry: "FinTech",
      title: "QuickLend",
      slug: "quick-lend",
      description: "An automated loan origination platform for a challenger bank, utilizing alternative data scoring to approve micro-loans in minutes.",
      timeline: "6 Months",
      timelineLabel: "Design to Scale",
      outcome: "50k+",
      outcomeLabel: "Loans Processed",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      icon: Smartphone,
      color: "text-green-400",
      bgColor: "bg-green-900/30"
    },
    {
      industry: "Energy",
      title: "GridSense",
      description: "A B2B energy monitoring platform that helps industrial facilities optimize consumption and participate in demand response programs.",
      timeline: "5 Months",
      timelineLabel: "MVP Delivery",
      outcome: "15%",
      outcomeLabel: "Avg. Energy Savings",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/30"
    },
    {
      industry: "Healthcare",
      title: "CareFlow",
      description: "A telehealth coordination platform integrating patient scheduling, video consults, and EMR updates for a regional hospital network.",
      timeline: "4 Months",
      timelineLabel: "Rapid Deployment",
      outcome: "98%",
      outcomeLabel: "Patient Satisfaction",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      icon: Activity,
      color: "text-red-400",
      bgColor: "bg-red-900/30"
    },
    {
      industry: "Real Estate",
      title: "PropTech One",
      description: "A tenant experience app for commercial real estate, combining access control, amenity booking, and maintenance requests.",
      timeline: "6 Months",
      timelineLabel: "Beta Launch",
      outcome: "2.5M",
      outcomeLabel: "Sq. Ft. Managed",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      icon: Building2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-900/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e3d] text-white font-sans selection:bg-[#00d4ff] selection:text-[#0a0e3d]">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Strategy & Business Finance', href: '/capabilities/strategy-corporate-finance' },
        { label: 'Venture & Portfolio Management' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d] via-[#0a0e3d]/95 to-[#050829]" />
        </div>

        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5 sm:mb-6 md:mb-8">

              <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider">Venture Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
              We don't just advise. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-blue-400">
                We build and launch.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore our track record of turning strategic concepts into fully operational, revenue-generating businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 bg-[#050829]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0e3d] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-500 flex flex-col"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] to-transparent z-10" />
                  <img 
                    src={venture.image} 
                    alt={venture.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${venture.bgColor} backdrop-blur-md border border-white/10`}>

                      <span className={`text-xs font-bold uppercase tracking-wider ${venture.color}`}>
                        {venture.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <Link href={venture.slug ? `/cases/${venture.slug}` : "#"}>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors cursor-pointer">
                      {venture.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 mb-5 sm:mb-6 md:mb-8 leading-relaxed flex-1">
                    {venture.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs uppercase tracking-wider">

                        {venture.timelineLabel}
                      </div>
                      <div className="text-xl font-bold text-white">
                        {venture.timeline}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs uppercase tracking-wider">

                        {venture.outcomeLabel}
                      </div>
                      <div className={`text-xl font-bold ${venture.color}`}>
                        {venture.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-[#0a0e3d] border-t border-white/5">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have a concept ready to scale?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's validate your idea and build your growth engine.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-[#00d4ff] text-[#0a0e3d] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-[#00d4ff]/20">
              Start Building With Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
