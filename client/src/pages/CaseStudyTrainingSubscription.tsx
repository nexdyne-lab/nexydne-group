import { motion } from "framer-motion";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function CaseStudyTrainingSubscription() {
  return (
    <div className="min-h-screen bg-white font-sans text-white selection:bg-primary selection:text-white">
      <SEO
        title="Case Study: Training Company Subscription Platform"
        description="How a professional services training company launched a subscription platform and grew to 2,400 active members with $1.8M annual recurring revenue."
        canonical="/cases/training-subscription-platform"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80"
            alt="Professional Training Session"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" />
          <div className="absolute inset-0" />
        </div>

        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/accelerating-business-growth">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-primary transition-colors mb-6 cursor-pointer">

                Back to Accelerating Business Growth
              </span>
            </Link>

            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-violet-400 mb-4 sm:mb-6 block">
              Professional Services • Subscription
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-5 sm:mb-3 md:mb-4">
              Training company launches subscription platform with 2,400 members
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Professional services training company transformed from one-time workshops to recurring revenue with an online learning platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violet-400">2,400</p>
                <p className="text-white/60 text-sm">Active Members</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violet-400">$1.8M</p>
                <p className="text-white/60 text-sm">Annual MRR</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violet-400">92%</p>
                <p className="text-white/60 text-sm">Retention Rate</p>
              </div>
            </div>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Training company launches subscription platform with 2,400 members"
              industry="Professional Services"
              capability="Subscription Platform"
              summary="Professional services training company transformed from one-time workshops to recurring revenue with an online learning platform."
              challenge="Traditional workshop-based revenue model was unpredictable and difficult to scale."
              solution="Built a comprehensive subscription platform with on-demand content, live sessions, and community features to create recurring revenue."
              results={[
                "2,400 active members",
                "$1.8M annual recurring revenue",
                "92% retention rate"
              ]}
              metrics={[
                { value: "2,400", label: "Active Members" },
                { value: "$1.8M", label: "Annual MRR" },
                { value: "92%", label: "Retention Rate" }
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 lg:gap-8 sm:gap-6 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 sm:mb-6 md:mb-8">
                A training company seeking sustainable growth
              </h2>

              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  This professional services training company had built a strong reputation over 15 years, delivering in-person workshops to accounting, legal, and consulting firms. With 45 employees and $6M in annual revenue, they were the go-to provider for continuing professional education in their niche.
                </p>
                <p>
                  However, the business model had fundamental limitations. Revenue was unpredictable—dependent on booking enough workshops each quarter. Scaling required hiring more trainers and traveling to more cities. And the pandemic had exposed the fragility of an entirely in-person model.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg sm:"
            >
              <h3 className="text-xl mb-6">Company Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Industry</span>
                  <span className="font-semibold">Professional Training</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Employees</span>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Annual Revenue</span>
                  <span className="font-semibold">$6M (pre-project)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-base/10">
                  <span className="text-charcoal/60">Business Model</span>
                  <span className="font-semibold">In-person workshops</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-charcoal/60">Project Duration</span>
                  <span className="font-semibold">12 months</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-8">
              Breaking free from the workshop treadmill
            </h2>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              <p>
                The CEO described their situation as a "workshop treadmill"—constantly selling the next engagement to maintain revenue. Growth required proportionally more trainers, more travel, and more sales effort. Margins were thin, and there was no leverage in the model.
              </p>
              <p>
                They had experimented with recording workshops and selling them as on-demand courses, but the results were disappointing. Without a proper platform, engagement was low, completion rates were poor, and there was no community or ongoing value to justify recurring payments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Unpredictable revenue dependent on workshop bookings",
                "Linear growth model requiring more trainers and travel",
                "No recurring revenue or customer lifetime value",
                "Previous on-demand experiments failed to gain traction",
                "High customer acquisition costs for one-time sales",
                "Vulnerable to disruption (pandemic exposed this)"
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-violet-400 mt-2 flex-shrink-0" />
                  <span className="text-white/80">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              A comprehensive learning membership platform
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
              NEXDYNE designed and built a subscription-based learning platform that combined on-demand content, live sessions, and community features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: null,
                title: "On-Demand Learning Library",
                description: "200+ hours of professionally produced video courses with quizzes, certificates, and progress tracking for CPE credits.",
                color: "from-violet-500 to-purple-600"
              },
              {
                icon: null,
                title: "Live Virtual Sessions",
                description: "Weekly live workshops, Q&A sessions, and expert panels that create ongoing engagement and justify subscription value.",
                color: "from-[#0077B5] to-secondary"
              },
              {
                icon: null,
                title: "Professional Community",
                description: "Discussion forums, peer networking, and study groups that create stickiness and reduce churn through social connections.",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: null,
                title: "Certification Programs",
                description: "Structured learning paths with assessments and credentials that professionals can add to their LinkedIn profiles.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: null,
                title: "Subscription Management",
                description: "Stripe-powered billing with monthly and annual plans, team accounts, and enterprise licensing options.",
                color: "from-rose-500 to-pink-600"
              },
              {
                icon: null,
                title: "Retention Automation",
                description: "Engagement scoring, at-risk member identification, and automated re-engagement campaigns to maximize retention.",
                color: "from-base to-[#0077B5]"
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
                <div className="h-full bg-subtle p-4 sm:p-6 md:p-8 rounded-lg sm: hover: transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-subtle text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Implementation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              Building a subscription business in 12 months
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                phase: "Month 1-2",
                title: "Strategy & Design",
                items: ["Subscription model design", "Content audit & planning", "Platform architecture", "Pricing strategy"]
              },
              {
                phase: "Month 3-5",
                title: "Platform Development",
                items: ["LMS platform build", "Video hosting setup", "Payment integration", "Community features"]
              },
              {
                phase: "Month 6-8",
                title: "Content Production",
                items: ["Course recording & editing", "Assessment creation", "Certification programs", "Launch content library"]
              },
              {
                phase: "Month 9-12",
                title: "Launch & Scale",
                items: ["Beta launch (500 members)", "Marketing campaigns", "Retention optimization", "Enterprise sales"]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm: shadow-sm"
              >
                <span className="text-xs uppercase tracking-wider text-primary mb-2 block">{phase.phase}</span>
                <h3 className="text-lg mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-charcoal/70">

                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              From workshops to recurring revenue
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Within 12 months, the subscription platform became the company's primary growth engine and transformed their business model.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
            {[
              { stat: "2,400", label: "Active members", description: "Paying subscribers on the platform" },
              { stat: "$1.8M", label: "Annual MRR", description: "Predictable recurring revenue" },
              { stat: "92%", label: "Retention rate", description: "Annual subscription renewal rate" },
              { stat: "3.2x", label: "LTV increase", description: "Customer lifetime value vs. workshops" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-violet-400 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg sm:"
          >
            <div className="text-violet-400 mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-5 sm:mb-6 md:mb-8 italic">
              "The subscription model NEXDYNE designed transformed our business from one-time sales to recurring revenue. We now have predictable cash flow, higher customer lifetime value, and a business that investors actually want to fund."
            </p>
            <div>
              <p className="text-white text-lg">James Mitchell</p>
              <p className="text-white/60">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-subtle text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              More digital growth success stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                category: "Specialty Retail",
                title: "Outdoor gear retailer grows online revenue 180% in 18 months",
                stats: [{ value: "180%", label: "Revenue growth" }, { value: "$3.2M", label: "New revenue" }],
                color: "from-amber-500 to-orange-600",
                link: "/cases/retail-ecommerce-growth"
              },
              {
                category: "B2B Manufacturing",
                title: "Industrial supplier adds $4.5M revenue through digital ordering",
                stats: [{ value: "$4.5M", label: "New revenue" }, { value: "58%", label: "Self-service orders" }],
                color: "from-[#0077B5] to-secondary",
                link: "/cases/b2b-digital-ordering"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={caseStudy.link}>
                  <div className="bg-white rounded-lg sm: overflow-hidden shadow-sm hover: transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className={`h-40 bg-gradient-to-br ${caseStudy.color}`} />
                    <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-primary mb-2">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                        {caseStudy.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-2xl text-primary">{stat.value}</p>
                            <p className="text-xs text-charcoal/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                        Read case study
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to build recurring revenue?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how we can help you transform your business model with subscription-based offerings.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
