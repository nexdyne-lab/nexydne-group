import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building, Users, Handshake, MapPin, BarChart3, BookOpen, ChevronDown, FileText, Rocket, HeartHandshake, Award } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

// FAQ Component for Regional Partnerships
function RegionalPartnershipsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What does it cost for a chamber to partner with NexDyne?",
      answer: "Partnership pricing is structured based on chamber size and scope of services. We offer tiered models that make partnership accessible for chambers of all sizes. Many chambers fund the partnership through member dues increases, sponsorship revenue, or economic development grants. Contact us for a customized proposal."
    },
    {
      question: "How long does it take to launch a partnership?",
      answer: "Typical partnerships launch within 60-90 days from agreement signing. This includes platform configuration, staff training, member communication planning, and initial onboarding. We work with your timeline and can accelerate for chambers ready to move quickly."
    },
    {
      question: "What support does NexDyne provide after launch?",
      answer: "Ongoing support includes dedicated success management, regular platform updates and new features, quarterly business reviews, member engagement analytics, and continuous training resources. We're invested in long-term partnership success, not just initial launch."
    },
    {
      question: "Can we white-label the platform with our chamber's branding?",
      answer: "Yes. The intelligence platform is fully white-labeled with your chamber's branding, colors, and messaging. Members experience it as a chamber-provided service, strengthening your brand and member relationships."
    },
    {
      question: "What if our members aren't tech-savvy?",
      answer: "The platform is designed for accessibility across all technology comfort levels. We provide multiple engagement options including web portal, email digests, and printable reports. Training resources are available for members who need additional support, and our success team helps optimize engagement strategies for your specific member base."
    },
    {
      question: "How do you measure partnership success?",
      answer: "We track multiple success metrics including member engagement rates, platform utilization, member satisfaction scores, retention impact, and business outcomes reported by members. Quarterly reviews analyze these metrics and identify optimization opportunities."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-subtle text-charcoal">
      <div className="container px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Questions about partnerships
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-base/10 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-subtle transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RegionalPartnerships() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Regional Business Intelligence Partnerships | NexDyne Initiatives" 
        description="Partnering with local chambers to build data-driven growth ecosystems. NexDyne collaborates with chambers of commerce and economic development organizations."
        canonical="/initiatives/regional-partnerships"
      />
      <Navigation />
      
      {/* Hero Section - McKinsey Style with Image */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <img 
            src="/images/initiatives/business-collaboration.jpg" 
            alt="Business Collaboration" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-24 right-24 w-72 h-72 border border-white/20 rounded-full" />
            <div className="absolute bottom-24 left-32 w-56 h-56 border border-white/20 rounded-full" />
            <div className="absolute top-1/3 left-1/4 w-40 h-40 border border-white/20 rounded-full" />
          </div>
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/#initiatives">
              <span className="inline-flex items-center text-sm text-white/50 hover:text-white/80 transition-colors mb-8 cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                NexDyne Initiatives
              </span>
            </Link>
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Regional Business Intelligence Partnerships
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Partnering with local chambers to build data-driven growth ecosystems
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
              NexDyne collaborates with chambers of commerce, economic development organizations, and industry associations to deliver structured intelligence, analytics, and operational playbooks for businesses at every growth stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Is - With Side Image */}
      <section className="py-20 md:py-28 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
                What It Is
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                Infrastructure-building for local economies
              </h2>
              
              <div className="prose prose-lg max-w-none text-charcoal/70">
                <p className="text-lg leading-relaxed mb-6">
                  Chambers of commerce and economic development organizations are the backbone of local business ecosystems. They convene businesses, advocate for growth-friendly policies, and connect members with resources. But in an increasingly data-driven economy, many lack the tools to deliver the intelligence their members need.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  NexDyne's Regional Business Intelligence Partnerships transform chambers from networking organizations into strategic growth enablers. We provide the technology, data, and expertise—chambers provide the local relationships, trust, and community knowledge.
                </p>
                <p className="text-lg leading-relaxed">
                  Together, we're building data-driven growth ecosystems that strengthen local economies and help businesses at every stage access the intelligence they need to compete.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/initiatives/networking-event.png" 
                  alt="Business networking event"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 md:py-28 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Who We Partner With
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
              Organizations that anchor local economies
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We collaborate with organizations that have deep roots in their communities and a mission to support business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                icon: Building,
                title: "Chambers of Commerce",
                description: "Local, regional, and state chambers serving businesses of all sizes in their communities."
              },
              {
                icon: MapPin,
                title: "Economic Development Organizations",
                description: "EDOs focused on attracting investment, supporting business growth, and building regional competitiveness."
              },
              {
                icon: Users,
                title: "Industry Associations",
                description: "Trade groups and professional associations serving specific industries and sectors."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters to Chambers - With Full Width Image */}
      <section className="py-20 md:py-28 bg-base">
        <div className="container px-4 md:px-12">
          {/* Full width image banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-6xl"
          >
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img 
                src="/images/initiatives/main-street-business.jpg" 
                alt="Main street businesses in America"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block">
              Why It Matters to Chambers
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Moving beyond networking to strategic growth enablement
            </h2>
            
            <div className="prose prose-lg max-w-none text-white/70 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Traditional chamber value propositions—networking events, advocacy, and member directories—remain important but are no longer sufficient. Businesses increasingly expect data-driven insights, actionable intelligence, and strategic guidance from their professional associations.
              </p>
              <p className="text-lg leading-relaxed">
                Chambers that can deliver this value become indispensable partners in their members' growth journeys. Those that can't risk becoming irrelevant as businesses seek intelligence elsewhere.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Beyond Networking",
                  description: "Deliver data-driven insights and actionable intelligence that members can't get elsewhere."
                },
                {
                  icon: Handshake,
                  title: "Strategic Growth Partners",
                  description: "Position chambers as essential partners in members' business growth and success."
                },
                {
                  icon: BookOpen,
                  title: "Tangible Member Value",
                  description: "Create measurable value that justifies membership and drives retention."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 p-6 rounded-lg"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Partners Receive */}
      <section className="py-20 md:py-28 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              What Partners Receive
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
              Everything needed to deliver intelligence to members
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Our partnership model provides technology, training, and ongoing support to transform chamber member services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: "Intelligence Platform",
                description: "Branded intelligence portal for members with market data, benchmarking, and growth tools."
              },
              {
                title: "Training & Certification",
                description: "Comprehensive training program to help chamber staff deliver intelligence services effectively."
              },
              {
                title: "Operational Playbooks",
                description: "Ready-to-use frameworks and guides for businesses at every growth stage."
              },
              {
                title: "Ongoing Support",
                description: "Dedicated success team to ensure partnership delivers value for chambers and their members."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-subtle p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Framing - With US Economic Map */}
      <section className="py-20 md:py-28 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
                Strategic Framing
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                This is infrastructure-building for local economies
              </h2>
              
              <div className="prose prose-lg max-w-none text-charcoal/70 mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  This initiative is not about selling to chambers. It's about building the intelligence infrastructure that local economies need to thrive in a data-driven world.
                </p>
                <p className="text-lg leading-relaxed">
                  When chambers can deliver meaningful intelligence to their members, they become more valuable to their communities. When businesses have access to better information, they make better decisions. When better decisions lead to stronger companies, entire regions benefit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-serif font-bold mb-6">The ecosystem impact</h3>
                <div className="grid gap-4">
                  {[
                    "Chambers positioned as strategic growth enablers",
                    "Members gain access to enterprise-grade intelligence",
                    "Local economies strengthened through better decisions",
                    "Regional competitiveness enhanced",
                    "Business growth supported at every stage",
                    "Community prosperity through stronger businesses"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* US Economic Map Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:sticky lg:top-32"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-white p-4">
                <img 
                  src="/images/initiatives/us-economic-map.png" 
                  alt="US economic growth by region"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-charcoal/50 mt-3 text-center">Regional GDP growth across the United States</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 md:py-28 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block">
              Partnership Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
              How partnerships work
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              A structured process to ensure successful partnership launch and ongoing value delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl">
            {[
              {
                icon: FileText,
                step: "01",
                title: "Discovery",
                description: "We assess your chamber's current capabilities, member needs, and strategic goals to design a tailored partnership."
              },
              {
                icon: Rocket,
                step: "02",
                title: "Launch Preparation",
                description: "Platform configuration, staff training, and member communication planning to ensure successful rollout."
              },
              {
                icon: HeartHandshake,
                step: "03",
                title: "Member Onboarding",
                description: "Guided member activation with training resources and support to drive adoption and engagement."
              },
              {
                icon: Award,
                step: "04",
                title: "Ongoing Success",
                description: "Continuous optimization, new feature rollouts, and strategic reviews to maximize partnership value."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary text-sm font-bold mb-2 block">{item.step}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-white/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <RegionalPartnershipsFAQ />

      {/* Related Initiatives - With Images */}
      <section className="py-20 md:py-28 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Explore other NexDyne initiatives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Link href="/initiatives/mid-market-ai">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-subtle rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Card Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/images/initiatives/ai-neural-network.jpg" 
                    alt="Mid-Market AI Access"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">
                    Mid-Market AI Access Program
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    Expanding Access to Enterprise-Grade AI for America's Mid-Market
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">
                    A national effort to make advanced AI, analytics, and automation accessible to mid-market companies.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-charcoal/70 group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>

            <Link href="/initiatives/intelligence-commons">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group bg-subtle rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Card Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/images/initiatives/corporate-skyline.jpg" 
                    alt="Intelligence Commons"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">
                    NexDyne Intelligence Commons
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    Democratizing Business Intelligence for Growing Companies
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">
                    A free-to-start AI-powered intelligence platform for market signals, competitive benchmarking, and growth scenario modeling.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-charcoal/70 group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
