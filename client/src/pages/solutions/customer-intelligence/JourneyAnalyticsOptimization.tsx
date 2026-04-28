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

export default function JourneyAnalyticsOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Methodology phases (SLOT 3) ──────────────────────────────────────────────
  const phases = [
    {
      name: "Journey mapping (multi-channel)",
      description:
        "Most journey maps we inherit are workshop output — sticky notes turned into Visio, accurate to the channel that ran the workshop, blind to the rest. We rebuild the map from the data: web, app, email, paid, contact-center, retail, and product-usage events stitched at customer level into the actual sequence of interactions, not the one the deck described.",
    },
    {
      name: "Friction analysis and quantification",
      description:
        "Every journey leaks revenue at specific moments. We instrument each step on conversion, drop-off, time-to-next, repeat-contact, and downstream value, then quantify the cost of friction — in lost revenue, increased contact-center load, and expansion suppression. The friction inventory is ranked, not described, because the optimization conversation needs dollars.",
    },
    {
      name: "Opportunity prioritization",
      description:
        "From the friction inventory we build a portfolio of optimization candidates — UX changes, content rewrites, automation moves, channel re-routing, policy adjustments — each scored on revenue impact, implementation complexity, and feasibility against the existing tech estate. The output is a defensible backlog the product, marketing, and operations teams can fund together.",
    },
    {
      name: "A/B testing and implementation",
      description:
        "We design the test framework that turns the backlog into evidence: hypothesis, primary and guardrail metrics, sample-size logic, holdout management, and the reporting cadence the steering committee will read. Wins are operationalized into the journey, losses are documented so the team learns, and the framework outlives the engagement.",
    },
    {
      name: "Continuous journey monitoring",
      description:
        "Customer journeys are not static. New channels launch, legacy steps drift, competitors raise the bar, and what was friction-free six months ago suddenly leaks. We stand up the live journey-performance dashboard and the governance cadence — quarterly review, drift alerts, re-prioritization triggers — that keeps the program optimizing instead of expiring.",
    },
  ];

  // ── Deliverables (SLOT 4) ────────────────────────────────────────────────────
  const deliverables = [
    {
      name: "Complete journey map (multi-channel)",
      description:
        "Data-driven, customer-level journey map stitched across web, app, email, paid, contact-center, retail, and product-usage events — replacing the workshop artifact.",
    },
    {
      name: "Friction quantification report",
      description:
        "Step-by-step inventory of journey friction with revenue cost, contact-center load, and downstream value impact — ranked, sourced, and defensible.",
    },
    {
      name: "Prioritized optimization backlog",
      description:
        "Portfolio of UX, content, automation, and policy candidates scored on revenue impact, implementation complexity, and tech-estate feasibility.",
    },
    {
      name: "A/B test framework",
      description:
        "Test design playbook covering hypothesis structure, primary and guardrail metrics, sample sizing, holdout logic, and the reporting cadence the steering committee reads.",
    },
    {
      name: "Journey performance dashboard",
      description:
        "Live, role-specific dashboard showing journey-level KPIs, friction drift, and test-program throughput — the surface product, marketing, and operations meet on.",
    },
    {
      name: "Governance and cadence model",
      description:
        "Operating model covering quarterly review, drift alerts, re-prioritization triggers, and the cross-functional roles that keep the program compounding.",
    },
  ];

  // ── Sibling sub-offerings (SLOT 7) ───────────────────────────────────────────
  const siblings = [
    {
      title: "Customer Journey Map",
      link: "/solutions/customer-intelligence/customer-journey-map",
    },
    {
      title: "Personalization Strategy",
      link: "/solutions/customer-intelligence/personalization-strategy",
    },
    {
      title: "Voice of Customer",
      link: "/solutions/customer-intelligence/voice-of-customer",
    },
    {
      title: "Behavioral Segmentation",
      link: "/solutions/customer-intelligence/behavioral-segmentation",
    },
    {
      title: "Customer Insights",
      link: "/solutions/customer-intelligence/customer-insights",
    },
  ];

  // ── Case studies (SLOT 6) ────────────────────────────────────────────────────
  const cases = [
    {
      industry: "Travel and Hospitality",
      // TODO: replace with real stat
      title:
        "Booking-journey optimization recovers 18 percent of cart abandonment within two quarters",
      description:
        "A global hotel brand's booking funnel was leaking at three specific moments — none of which the existing journey deck identified. We rebuilt the journey from event data, quantified each friction point in lost revenue, and ran a six-test program against the top three. Cart abandonment recovery moved 18 percent on flat traffic, with the test framework continuing to ship two wins per quarter after handover.",
      link: "/cases/hospitality-booking-journey-optimization",
    },
    {
      industry: "Telecommunications",
      // TODO: replace with real stat
      title:
        "Service-activation friction redesign cuts repeat contact-center calls by 27 percent",
      description:
        "A national telecom carrier's new-customer activation journey was generating an avoidable 1.4 calls per activation to the contact center. Journey analytics traced 73 percent of those calls to two specific friction points in the digital flow. The redesign and a four-test program cut repeat calls 27 percent within two quarters and is the primary contributor to the digital-channel cost-to-serve target for the year.",
      link: "/cases/telecom-activation-journey-redesign",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Journey Analytics & Optimization"
        description="Map and optimize end-to-end customer journeys — quantify friction, prioritize fixes by revenue impact, and run the A/B test program that compounds the gain."
        canonical="/solutions/customer-intelligence/journey-analytics-optimization"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (downshifted H1, ~25% shorter container per Cat 6 entry) */}
      <SolutionHero
        eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · JOURNEY ANALYTICS & OPTIMIZATION"
        title="Journey Analytics & Optimization"
        subtitle="Most journey maps describe the journey the brand intends. We rebuild the journey from the event data, quantify the friction in revenue terms, and run the test program that turns the backlog into compounding wins."
        backgroundImage="/customer-intelligence-hero.57680a35.jpg"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
        h1ClassName="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
        containerClassName="h-[70vh] min-h-[500px] sm:min-h-[560px] lg:min-h-[640px]"
      />

      {/* SLOT 2 — White lead / editorial intro */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[72ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Perspective
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Map the journey that runs — not the one the workshop drew.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Most journey maps we are handed describe the journey leadership intended. They are clean, they are defensible in a steering committee, and they are quietly disconnected from the journey customers are actually running. The conversion data, the call-volume data, and the support-ticket data tell a different story — one with three failure points the workshop never named.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Journey analytics rebuilds the map from the event stream and quantifies the friction in dollars, not in adjectives. From there the optimization conversation has fuel: a prioritized backlog, an A/B test framework, and a governance cadence that turns one-off wins into a continuous improvement program. The teams that get this right do not redesign journeys every two years — they optimize them every quarter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light-grey methodology / phased approach (5 numbered phase cards) */}
      <section className="bg-grey py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              How We Deliver
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              A five-phase approach from journey map to continuous optimization.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to eighteen weeks from mapping to the first wave of test wins, with monitoring and cadence extending into a quarterly operating rhythm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <div className="h-full p-8 lg:p-10 flex flex-col">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl text-charcoal font-medium mb-4 leading-[1.25]">
                    {phase.name}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White deliverables / what you get (flat hairline-bordered list) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              What You Get
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six concrete artifacts every engagement leaves behind.
            </h3>
          </motion.div>

          <div className="border-t border-charcoal/10">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-charcoal/10 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                <div className="lg:col-span-1">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-xl text-charcoal font-medium leading-[1.25]">
                    {item.name}
                  </h4>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-charcoal/75 leading-[1.55]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — ORANGE-RED SIGNAL SECTION (the single bg-primary moment, Pattern 2) */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              The Outcome
            </span>
            {/* TODO: replace with real stat */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Programs that move from one-off journey redesigns to a quarterly optimization cadence typically compound 15 to 25 percent revenue gain on the priority journey within twelve months.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              The economics work because the discipline survives the engagement. We do not hand off a journey deck and walk away — we leave a test framework, a dashboard, and the operating cadence that keeps the gains compounding instead of decaying.
            </p>
            <Link href="/cases">
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                See How We Help Leaders Win
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — White case studies / proof (1-2 cards, narrower than Cat 5) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Client Results
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              When the friction is quantified, the backlog gets funded.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={result.link} className="group block cursor-pointer">
                  <div className="border border-charcoal/10 bg-white p-8 lg:p-10 h-full flex flex-col">
                    <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                      {result.industry}
                    </span>
                    {/* TODO: replace with real stat */}
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] mb-6 flex-1">
                      {result.description}
                    </p>
                    <span className="text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read Case
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 7 — White intra-cluster sibling sub-offerings (5 links inside Customer Intelligence) */}
      <section className="bg-white py-24 md:py-32 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Other Ways We Help in Customer Intelligence
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Sibling offerings inside this cluster.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {siblings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={offering.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col justify-between min-h-[200px]">
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read More
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 8 — Charcoal closing CTA "Ready to Talk?" */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                  Ready to Talk?
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-10"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Bring our journey-analytics team into your next experience-strategy conversation.
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-6 max-w-[52ch]">
                  I want to talk to your experts in:
                </p>
                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/40 rounded-none text-base text-white py-6 focus:ring-0 focus:border-white">
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
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
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
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-8 max-w-[52ch]">
                  We work with leaders who want their journey backlog funded on evidence, not anecdote. Quantified friction is how that conversation starts.
                </p>
                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-white/30 px-4 py-4 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                  />
                  <Link href="/contact">
                    <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                      Contact us
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
