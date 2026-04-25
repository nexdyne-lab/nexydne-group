import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function IntelligentProcessOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Intelligent Process Optimization"
        description="Transform manual operations into autonomous systems. Eliminate bottlenecks and accelerate execution with intelligent automation."
        canonical="/solutions/intelligent-process-optimization"
      />
      <Navigation />

      <SolutionHero
        eyebrow="SOLUTION · INTELLIGENT PROCESS OPTIMIZATION"
        title="Intelligent Process Optimization"
        subtitle="Automate complexity. Accelerate execution. We help mid-market companies break through operational ceilings with intelligent, adaptive systems built for how work actually gets done."
        backgroundImage="/images/solution-process.a945b529.webp"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
      />

      {/* Experience & Impact — editorial stat band */}
      <section className="py-20 md:py-28 bg-white border-b border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Our Experience &amp; Impact
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal max-w-[32ch]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Measurable outcomes from real transformation programs.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {[
              {
                stat: "150+",
                label:
                  "process optimization programs delivered in the last five years",
              },
              {
                stat: "4.2x",
                label: "faster end-to-end cycle times for our clients",
              },
              {
                stat: "1.5–3x",
                label: "ROI achieved within the first 12 months",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${
                  i > 0 ? "md:border-l md:border-charcoal/10 md:pl-10" : ""
                }`}
              >
                <div
                  className="text-5xl md:text-6xl text-charcoal mb-4"
                  style={{ fontWeight: 500, letterSpacing: "-0.03em" }}
                >
                  {item.stat}
                </div>
                <div className="text-base text-charcoal/70 leading-[1.65] max-w-[30ch]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[72ch]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p
                className="text-2xl md:text-3xl text-charcoal leading-[1.3]"
                style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
              >
                The operational reality for mid-market companies is stark:
                growth creates complexity, and complexity creates friction.
                What worked at $10M in revenue becomes a bottleneck at $50M.
                We&rsquo;ve spent years helping companies break through these
                operational ceilings.
              </p>

              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65]">
                While the promise of automation has existed for decades, the
                ability to deliver intelligent, adaptive systems has only
                recently become practical for mid-market budgets. The
                convergence of AI, low-code platforms, and cloud infrastructure
                has fundamentally changed what&rsquo;s possible. Our{" "}
                <Link
                  href="/insights/process-mining-guide"
                  className="text-primary underline hover:no-underline"
                >
                  process optimization consultants
                </Link>{" "}
                collaborate with you to consider every growth opportunity and
                customize a personalized program based on your strategic and
                organizational context.
              </p>

              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65]">
                Working with us will feel different&mdash;we team with you to
                define your goals, change your organization, and deliver more
                than you thought possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Think About Process Optimization */}
      <section className="py-20 md:py-28 bg-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              How We Think About It
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Full Potential Optimization
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mt-6">
              Alter your organization&rsquo;s trajectory in pursuit of
              extraordinary results&mdash;through five integrated lenses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-charcoal/10">
            {[
              {
                title: "Accelerated Performance Transformation",
                description:
                  "Expedite firm-wide performance with a focus on capability building, sustainable change, and value delivery within 12–18 months.",
                link: "/solutions/intelligent-process-optimization",
              },
              {
                title: "Digital Process Transformation",
                description:
                  "Amplify the cutting-edge technical capabilities you need to compete in a rapidly evolving market.",
                link: "/capabilities/digital-transformation",
              },
              {
                title: "People and Organization",
                description:
                  "Accelerate your organization&rsquo;s results through your people and teams.",
                link: "/about/team",
              },
              {
                title: "Earned Growth Optimization",
                description:
                  "Spur profitable growth by delivering a customer-centric strategy.",
                link: "/solutions/customer-intelligence",
              },
              {
                title: "Sustainability Integration",
                description:
                  "Connect sustainability with your purpose and your strategy.",
                link: "/solutions/enterprise-transformation",
              },
            ].map((service, i) => (
              <motion.a
                key={i}
                href={service.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`bg-charcoal p-8 group hover:bg-charcoal/90 transition-colors ${
                  i < 4 ? "lg:border-r border-white/10" : ""
                }`}
              >
                <h3 className="text-base text-white mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-[1.6]">
                  {service.description}
                </p>
                <span className="mt-6 block text-[11px] uppercase tracking-[0.2em] text-white/60 group-hover:text-primary transition-colors">
                  Explore
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Clients — six sub-capabilities */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              How We Help Clients
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six ways we turn friction into flow.
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mt-6">
              We combine deep operational expertise with cutting-edge
              technology to transform how you work&mdash;eliminating friction,
              accelerating execution, and building sustainable competitive
              advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Process Discovery & Mining",
                description:
                  "Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation.",
                link: "/solutions/process-optimization/process-discovery-mining",
              },
              {
                title: "Intelligent Automation Design",
                description:
                  "Design and implement automation solutions that combine RPA, AI, and workflow orchestration for maximum impact.",
                link: "/solutions/process-optimization/intelligent-automation-design",
              },
              {
                title: "Workflow Optimization",
                description:
                  "Streamline end-to-end workflows to eliminate handoffs, reduce cycle times, and improve quality at every step.",
                link: "/solutions/process-optimization/workflow-optimization",
              },
              {
                title: "AI-Powered Decision Support",
                description:
                  "Deploy machine learning models that augment human decision-making with predictive insights and recommendations.",
                link: "/solutions/process-optimization/ai-powered-decision-support",
              },
              {
                title: "Change Management & Training",
                description:
                  "Ensure successful adoption through comprehensive change management, training programs, and ongoing support.",
                link: "/solutions/process-optimization/change-management-training",
              },
              {
                title: "Continuous Improvement Programs",
                description:
                  "Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains.",
                link: "/solutions/process-optimization/continuous-improvement-programs",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={service.link} className="block h-full group">
                  <div className="h-full bg-white p-8 border border-charcoal/10 hover:border-charcoal/30 transition-colors flex flex-col">
                    <h3
                      className="text-xl text-charcoal mb-4 leading-[1.25] group-hover:text-primary transition-colors"
                      style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-[1.65] flex-1">
                      {service.description}
                    </p>
                    <span className="mt-6 pt-6 border-t border-charcoal/10 text-[11px] uppercase tracking-[0.2em] text-charcoal/60 group-hover:text-primary transition-colors">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Transformations That Work — feature card */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="border border-charcoal/10">
            <div className="grid lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-10 md:p-14 lg:p-16 flex flex-col justify-center"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
                  Featured Perspective
                </span>
                <h3
                  className="text-3xl md:text-4xl text-charcoal mb-6 leading-[1.15]"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Process Transformations That Work
                </h3>
                <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-10 max-w-[52ch]">
                  Process transformations are about continuously reshaping an
                  organization. When they work, they enhance performance,
                  increase efficiency, and create a competitive advantage.
                </p>
                <Link href="/insights/automation-imperative">
                  <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer w-fit">
                    Read the Perspective
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-charcoal relative min-h-[300px] lg:min-h-[420px] overflow-hidden"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {[...Array(18)].map((_, i) => (
                    <line
                      key={i}
                      x1={40 + (i * 7) % 90}
                      y1={20 + i * 15}
                      x2={260 + (i * 11) % 90}
                      y2={20 + i * 15}
                      stroke="white"
                      strokeWidth="1.5"
                      opacity={0.25 + (i % 5) * 0.12}
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation with AI */}
      <section className="py-20 md:py-28 bg-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
                Transformation With AI
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal mb-8"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                AI-driven transformation requires both old discipline and new
                thinking.
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-8 max-w-[60ch]">
                AI-driven transformation presents a dual challenge: It requires
                companies to apply time-tested change principles <em>and</em>{" "}
                wrestle with unfamiliar questions about trust, experimentation,
                and scaling. We can help you:
              </p>
              <ul className="space-y-5 text-charcoal/80 mb-10">
                <li className="flex items-start gap-4">
                  <span
                    className="mt-2 h-px w-6 flex-shrink-0 bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-[1.65]">
                    Ensure your leadership team is fluent enough in AI to serve
                    as credible sponsors of transformation and aligned on both
                    the vision and the behaviors needed to achieve it.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className="mt-2 h-px w-6 flex-shrink-0 bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-[1.65]">
                    Understand the specific friction points and fears of each
                    function and business unit, and deploy the appropriate
                    training and tools, in the proper sequence, for each group.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className="mt-2 h-px w-6 flex-shrink-0 bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-[1.65]">
                    Create safe spaces for experimentation to build trust and
                    ownership, and balance innovation with risk management and
                    ethical use.
                  </span>
                </li>
              </ul>
              <Link href="/insights/ai-agents-transform-operations">
                <span className="inline-block text-[13px] uppercase tracking-[0.1em] font-semibold text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Leading Change in the AI Era
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/hero-ai-enterprise.jpg"
                alt="AI Transformation"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-20 pt-16 border-t border-charcoal/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-xl text-charcoal mb-4"
                style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                Real Outcomes
              </h3>
              <p className="text-base text-charcoal/80 leading-[1.65] mb-6 max-w-[52ch]">
                We&rsquo;ve worked with leading retailers, manufacturers,
                professional services firms, and even yacht racers to
                effectively test and scale AI. Our clients have achieved
                double-digit improvements in customer retention, productivity,
                time to market, and many other critical performance metrics.
              </p>
              <Link href="/cases">
                <span className="inline-block text-[13px] uppercase tracking-[0.1em] font-semibold text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  See How We Help Leaders Win With AI
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3
                className="text-xl text-charcoal mb-4"
                style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                How We Help
              </h3>
              <p className="text-base text-charcoal/80 leading-[1.65] mb-6 max-w-[52ch]">
                Employees are 3.5 times more likely to perceive transformation
                programs positively when leaders demonstrate alignment and
                support for the change. We work closely with senior leaders to
                address the many technical and cultural issues involved in
                AI-driven transformation.
              </p>
              <Link href="/capabilities/generative-ai">
                <span className="inline-block text-[13px] uppercase tracking-[0.1em] font-semibold text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Learn About Our AI Approach
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 md:py-28 bg-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Client Results
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Transformation, proved in outcomes.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                industry: "Manufacturing & Services",
                title:
                  "Regional Manufacturer Cuts Order Processing Time by 78%",
                description:
                  "CEO discusses how a multifaceted transformation culminated in a stunning operational turnaround.",
                image: "/images/case-logistics.jpg",
                link: "/cases/logistics-shipment-automation",
              },
              {
                industry: "Professional Services",
                title:
                  "A Bold New Strategy Restores a Firm to a Leadership Position",
                description:
                  "Its holistic approach to simplification, execution discipline, and digitalization has proved transformational.",
                image: "/images/case-saas.jpg",
                link: "/cases/saas-customer-onboarding",
              },
            ].map((result, i) => (
              <motion.a
                key={i}
                href={result.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] overflow-hidden border border-charcoal/10">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-3 block">
                        {result.industry}
                      </span>
                      <h3
                        className="text-xl text-charcoal mb-3 leading-[1.25] group-hover:text-primary transition-colors"
                        style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                      >
                        {result.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-[1.65]">
                        {result.description}
                      </p>
                    </div>
                    <span className="mt-6 text-[11px] uppercase tracking-[0.2em] text-charcoal/60 group-hover:text-primary transition-colors">
                      Read Case
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/cases">
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Our Process Optimization Insights
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Perspectives on making change stick.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Operations",
                title:
                  "Rethinking Transformation: Leading Change at Mid-Market Companies",
                description:
                  "A regional manufacturer CEO on organizational transformation and sustaining change through a people-led approach.",
                source: "Executives on Transformations",
                image: "/images/insight-process-1.jpg",
              },
              {
                category: "Technology",
                title:
                  "Shift to Vertical: David Haines, Group CEO, Flora Food Group",
                description:
                  "What does it take to stay connected to your customers when scale and complexity threaten to pull you away?",
                source: "Founder&rsquo;s Mentality: The CEO Sessions",
                image: "/images/insight-process-2.jpg",
              },
              {
                category: "Strategy",
                title: "Get Off the Transformation Treadmill",
                description:
                  "Too much change can traumatize your organization. The remedy is to minimize the need.",
                source: "Harvard Business Review",
                image: "/images/hero-ai-economy.jpg",
              },
              {
                category: "Manufacturing",
                title:
                  "Automotive Profitability: How OEM and Supplier Margins Are Faring",
                description:
                  "The post-pandemic profit surge has reversed, as OEM margins have fallen more than 50% since 2023.",
                source: "Interactive",
                image: "/images/insight-process-3.jpg",
              },
            ].map((insight, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group block bg-white border border-charcoal/10 hover:border-charcoal/30 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-3 block">
                    {insight.category}
                  </span>
                  <h3
                    className="text-base text-charcoal mb-3 leading-[1.3] group-hover:text-primary transition-colors"
                    style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                  >
                    {insight.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-[1.6] mb-4">
                    {insight.description}
                  </p>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50">
                    {insight.source}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/insights">
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                Explore All Insights
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Offerings */}
      <section className="py-20 md:py-28 bg-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Related Offerings
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Adjacent capabilities for a complete transformation.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Change Management and Implementation",
                link: "/solutions/enterprise-transformation",
              },
              {
                title: "Chief Transformation Officer Advisory",
                link: "/services/fractional-cfo",
              },
              {
                title: "NexDyne Accelerator",
                link: "/capabilities/generative-ai",
              },
              {
                title: "NexDyne Academy",
                link: "/about/team",
              },
              {
                title: "Accelerated Performance Transformation",
                link: "/solutions/intelligent-process-optimization",
              },
            ].map((offering, i) => (
              <motion.a
                key={i}
                href={offering.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-off-white p-8 border border-charcoal/10 hover:border-charcoal/30 transition-colors group"
              >
                <h3
                  className="text-lg text-charcoal mb-8 leading-[1.25] min-h-[56px] group-hover:text-primary transition-colors"
                  style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {offering.title}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 group-hover:text-primary transition-colors">
                  Read More
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk? */}
      <section className="py-20 md:py-28 bg-off-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
                  Ready to Talk?
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal mb-10"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Bring our experts into your next operating-model
                  conversation.
                </h2>
                <p className="text-base text-charcoal/80 leading-[1.65] mb-6">
                  I want to talk to your experts in:
                </p>
                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full border-0 border-b border-charcoal rounded-none text-base py-6 focus:ring-0">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="professional-services">
                      Professional Services
                    </SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="retail">Retail &amp; Consumer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-base text-charcoal/80 leading-[1.65] mb-8 max-w-[52ch]">
                  We work with ambitious leaders who want to define the future,
                  not hide from it. Together, we achieve extraordinary outcomes.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-charcoal/20 rounded px-4 py-4 text-base focus:outline-none focus:border-charcoal transition-colors"
                  />
                  <Link href="/contact">
                    <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                      Contact Us
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
