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
      outcome: "Break-Even",
      outcomeLabel: "Inside the First Year",
      image: "/images/capabilities/cap-lightbulb-idea.jpg",
      icon: Truck,
      color: "text-primary",
      bgColor: "bg-charcoal/30"
    },
    {
      industry: "Retail & IoT",
      title: "SmartStock",
      slug: "smart-stock",
      description: "An IoT-enabled inventory management system for a growing retail chain, utilizing shelf sensors to automate replenishment and reduce stockouts.",
      timeline: "5 Months",
      timelineLabel: "Prototype to Rollout",
      outcome: "35%",
      outcomeLabel: "Reduction in Waste",
      image: "/images/capabilities/cap-venturing.jpg",
      icon: ShoppingBag,
      color: "text-purple",
      bgColor: "bg-purple/30"
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
      image: "/images/capabilities/cap-telescope.jpg",
      icon: Smartphone,
      color: "text-amber",
      bgColor: "bg-charcoal/30"
    },
    {
      industry: "Energy",
      title: "GridSense",
      description: "A B2B energy monitoring platform that helps industrial facilities optimize consumption and participate in demand response programs.",
      timeline: "5 Months",
      timelineLabel: "MVP Delivery",
      outcome: "15%",
      outcomeLabel: "Avg. Energy Savings",
      image: "/images/industries/team-strategy-board.jpg",
      icon: Zap,
      color: "text-amber",
      bgColor: "bg-amber/30"
    },
    {
      industry: "Healthcare",
      title: "CareFlow",
      description: "A telehealth coordination platform integrating patient scheduling, video consults, and EMR updates for a regional hospital network.",
      timeline: "4 Months",
      timelineLabel: "Rapid Deployment",
      outcome: "98%",
      outcomeLabel: "Patient Satisfaction",
      image: "/images/capabilities/cap-lightbulb-idea.jpg",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-charcoal/30"
    },
    {
      industry: "Real Estate",
      title: "PropTech One",
      description: "A tenant experience app for commercial real estate, combining access control, amenity booking, and maintenance requests.",
      timeline: "6 Months",
      timelineLabel: "Beta Launch",
      outcome: "2.5M",
      outcomeLabel: "Sq. Ft. Managed",
      image: "/images/capabilities/cap-venturing.jpg",
      icon: Building2,
      color: "text-amber",
      bgColor: "bg-charcoal/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-charcoal font-sans selection:bg-primary selection:text-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Strategy & Business Finance', href: '/capabilities/strategy-corporate-finance' },
        { label: 'Venture & Portfolio Management' }
      ]} />

      {/* Hero Section - Neutral-first */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col justify-center min-h-[52vh] py-24 lg:py-28">
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6"><span className="block h-[3px] w-9 bg-primary" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">VENTURE PORTFOLIO</span></div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">We don't just advise. We build and launch.</h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">Explore our track record of turning strategic concepts into fully operational, revenue-generating businesses across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 bg-background">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {ventures.map((venture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition duration-500 flex flex-col"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal/80 backdrop-blur-md">

                      <span className="text-xs font-bold uppercase tracking-wider text-amber">
                        {venture.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <Link href={venture.slug ? `/cases/${venture.slug}` : "#"}>
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors cursor-pointer">
                      {venture.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed flex-1">
                    {venture.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs uppercase tracking-wider">

                        {venture.timelineLabel}
                      </div>
                      <div className="text-xl font-bold text-charcoal">
                        {venture.timeline}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-muted-foreground text-xs uppercase tracking-wider">

                        {venture.outcomeLabel}
                      </div>
                      <div className="text-xl font-bold text-primary">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <h2 className="nx-h2 mb-6">
            Have a concept ready to scale?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's validate your idea and build your growth engine.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary-hover transition-colors shadow-lg">
              Start Building With Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
