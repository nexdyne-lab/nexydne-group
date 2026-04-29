import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";

export default function ManufacturingPredictiveMaintenance() {
  // ── At-a-glance fact strip (SLOT 2) ───────────────────────────────────────
  const facts = [
    {
      label: "Client",
      value: "Anonymous · Food Processing Plant",
    },
    {
      label: "Industry",
      value: "Manufacturing",
    },
    {
      label: "Engagement length",
      value: "9 months",
    },
    {
      label: "Capabilities deployed",
      value: "Predictive Analytics, Data Visualization, IoT Integration",
    },
  ];

  // ── Outcomes signal stats (SLOT 6) ────────────────────────────────────────
  const outcomes = [
    {
      number: "35%",
      label: "Downtime reduction across critical equipment",
    },
    {
      number: "85%",
      label: "Failure prediction accuracy on 30-day horizon",
    },
    {
      number: "$2.4M",
      label: "Annual operational savings",
    },
  ];

  // ── Related case studies (SLOT 8) ─────────────────────────────────────────
  const relatedCases = [
    {
      industry: "Financial Services",
      title:
        "Real-time fraud detection cuts false positives 62% on a 4M-transaction-per-day stream.",
      description:
        "A graph-ML scoring layer plus a streaming feature store rebuilt the bank's fraud workflow without a model retraining lag.",
      link: "/cases/FinancialFraudDetection",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
    },
    {
      industry: "Media & Entertainment",
      title:
        "Generative content pipeline cuts asset production cycle from 14 days to 36 hours.",
      description:
        "A multi-model orchestration layer for copy, image, and video assets routed through editorial review queues with auditable provenance.",
      link: "/cases/MediaContentGenAI",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    },
    {
      // TODO: confirm this slug exists once the related supply-chain case is migrated
      industry: "Industrial Operations",
      title:
        "Supply-chain optimization model recovers 11 days of working capital per quarter.",
      description:
        "A network-flow model layered on real demand signal exposed the safety-stock and lane choices that were quietly trapping cash on the balance sheet.",
      link: "/cases/SupplyChainOptimization",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    },
  ];

  // ── Capabilities deployed cross-link (SLOT 9) ─────────────────────────────
  const capabilities = [
    {
      label: "Predictive Analytics",
      link: "/capabilities/predictive-analytics",
    },
    {
      label: "Data Visualization",
      link: "/capabilities/data-visualization",
    },
    {
      label: "IoT Integration",
      link: "/capabilities/iot-integration",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Manufacturing Plant Cuts Downtime 35% with Predictive Maintenance Dashboard"
        description="A 24/7 food processing plant moved from reactive to condition-based maintenance — 35% downtime reduction, 85% failure prediction accuracy, $2.4M in annual savings."
        canonical="/cases/ManufacturingPredictiveMaintenance"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (Cat 6 downshift; case study, no CTAs) */}
      <SolutionHero
        eyebrow="CASE STUDY · ANONYMOUS · MANUFACTURING"
        title="Manufacturing Plant Cuts Downtime 35% with Predictive Maintenance Dashboard"
        subtitle="Equipment health dashboard predicted failures 2 weeks in advance, enabling scheduled maintenance instead of emergency repairs."
        backgroundImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80"
        h1ClassName="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
        containerClassName="h-[60vh] min-h-[440px] sm:min-h-[480px] lg:min-h-[540px]"
      />

      {/* SLOT 2 — At-a-glance fact strip (white) */}
      <section className="bg-white py-20 md:py-24 border-b border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              At a Glance
            </span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-6"
              >
                <span className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                  {fact.label}
                </span>
                <span className="text-base text-charcoal font-medium">
                  {fact.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 3 — The Challenge (white, single-column body) */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[64ch] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              The Challenge
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Unplanned downtime cost the plant $15K an hour. The team had no early warning.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                A food processing plant operating 24/7 with 150 pieces of critical equipment struggled with unplanned downtime that disrupted production schedules and increased maintenance costs. Equipment failures occurred without warning — a conveyor belt motor burned out during peak production, a refrigeration compressor failed overnight, a packaging line jammed due to worn components.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                Unplanned downtime averaged 12 hours per week, costing $15K per hour in lost production. Maintenance operated reactively — fixing equipment after it broke instead of preventing failures. The maintenance team lacked visibility into equipment health. Sensors captured vibration, temperature, and pressure data, but no one analyzed it until after failures occurred.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                The plant manager needed a predictive maintenance dashboard that surfaced early warning signs of equipment degradation, enabling scheduled maintenance during planned downtime instead of emergency repairs during production runs. The dashboard had to integrate sensor data from 150 assets and predict failures weeks in advance with sufficient accuracy to justify maintenance interventions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 4 — Our Approach (light grey, single-column body) */}
      <section className="bg-grey py-24 md:py-32">
        <div className="max-w-[64ch] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Approach
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              ML-augmented condition monitoring built on 18 months of operational data.
            </h3>
            <div className="space-y-6">
              {/* TODO: David — polish approach prose in copy pass; current text is structural placeholder distilled from existing solution narrative */}
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                Rather than retrofit a generic asset-management platform, NexDyne began with the data the plant already had. Eighteen months of historical sensor readings — vibration, temperature, pressure — were paired with the maintenance log of every recorded failure across the 150-asset fleet. That coupled dataset became the training base for failure-mode-specific models, not a single one-size-fits-all anomaly detector.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                We then segmented the fleet by failure signature — motors, compressors, conveyors, pumps each have distinct precursor patterns — and trained a model per class. Every model was validated against held-out historical failures before any live alerts were issued, so the maintenance team trusted the system on day one rather than spending months recalibrating false positives.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                The deployment was deliberately phased: shadow mode first, then advisory alerts to a single shift supervisor, then plant-wide work-order automation only after the prediction accuracy had been demonstrated against three full maintenance cycles. Operators were involved at every gate so the dashboard reflected their language, not data-science vocabulary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 5 — The Solution (white, single-column body) */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[64ch] mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              The Solution
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              A real-time health heatmap, failure prediction timeline, and operator-facing alert workflow.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                NexDyne built a predictive maintenance dashboard using IoT sensor data and machine learning models to forecast equipment failures. The dashboard integrated data from 150 assets — motors, compressors, conveyors, pumps — and displayed real-time health scores, failure predictions, and maintenance recommendations.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                An equipment health heatmap provided a visual overview of all 150 assets color-coded by health score (green: healthy, yellow: degrading, red: critical), enabling maintenance teams to prioritize inspections on red and yellow assets instead of following fixed schedules. A failure prediction timeline used ML models to predict equipment failures 2-4 weeks in advance based on sensor patterns — vibration anomalies, temperature spikes, pressure fluctuations — showing predicted failure date with confidence interval for proactive scheduling. Time-series charts displayed vibration, temperature, and pressure trends per asset so engineers could investigate anomalies; a motor showing gradual temperature increase over 3 weeks indicated bearing degradation requiring replacement.
              </p>
              <p className="text-base md:text-lg text-charcoal/85 leading-[1.65]">
                The dashboard automatically generated work orders for predicted failures, assigning them to maintenance technicians with recommended actions and mobile notifications carrying asset location and repair instructions. The ML model was trained on 18 months of historical sensor data and failure records, learning failure signatures — vibration patterns that preceded motor failures, temperature trends that indicated compressor issues.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — Outcomes signal section (bg-primary stat band) */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-12 text-center"
          >
            The Outcomes
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {outcomes.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-[-0.02em] leading-[1] text-center md:text-left"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  {stat.number}
                </div>
                <div className="text-[13px] uppercase tracking-[0.1em] text-white/85 mt-3 leading-[1.4] text-center md:text-left">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 7 — Pull quote (white) */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[68ch] mx-auto px-6 sm:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-charcoal leading-[1.2] mb-8"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Before the dashboard, we fixed equipment after it broke — always during production runs, always costing us $15K per hour in lost output. The predictive maintenance dashboard gave us 2-4 weeks warning before failures. We scheduled maintenance during planned downtime instead of emergency repairs during production. Unplanned downtime dropped 35%, saving $2.4M annually. The model predicted 85% of failures accurately — a conveyor motor, two compressors, and a packaging line all flagged weeks before they would have failed. We caught issues early and fixed them on our schedule, not the equipment's.
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60"
          >
            — James Rodriguez · Plant Manager · Food Processing Plant
          </motion.p>
        </div>
      </section>

      {/* SLOT 8 — Related case studies (light grey, 3-card row) */}
      <section className="bg-grey py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Related Case Studies
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              More work in industrial transformation.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {relatedCases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={c.link}>
                  <div className="group block bg-white p-8 lg:p-10 cursor-pointer h-full">
                    <div className="aspect-[16/9] overflow-hidden mb-6">
                      <img
                        src={c.image}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <span className="block text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                      {c.industry}
                    </span>
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] line-clamp-2">
                      {c.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 9 — Capabilities deployed cross-link (white) */}
      <section className="bg-white py-16 md:py-20 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-6">
              Capabilities Deployed on This Engagement
            </span>
            <div className="flex flex-wrap items-center mb-4">
              {capabilities.map((cap, i) => (
                <Link key={i} href={cap.link}>
                  <span className="text-base text-charcoal/85 font-medium hover:text-primary transition-colors mr-8 last:mr-0 cursor-pointer">
                    {cap.label}
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-[13px] text-charcoal/60">
              These are the NexDyne capability practices applied on this engagement. Click through to see how each works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SLOT 10 — Closing CTA (charcoal) */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              Work With Us
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Have a similar problem?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-12 max-w-[60ch]">
              Tell us what's breaking. We'll route you to the practice lead who can help.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/contact">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                  Talk to a partner →
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  See more case studies →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
