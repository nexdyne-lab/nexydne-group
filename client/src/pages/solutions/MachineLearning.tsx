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

export default function MachineLearning() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "Model Development",
      description:
        "From feature engineering to model selection. We build supervised, unsupervised, and deep-learning models that hold up against the test set that matters: production.",
      link: "/solutions/machine-learning/model-development",
    },
    {
      title: "MLOps &amp; Deployment",
      description:
        "Versioning, CI/CD for models, monitoring, retraining. We treat ML systems as software systems&mdash;with the operational discipline production demands.",
      link: "/solutions/machine-learning/mlops-deployment",
    },
    {
      title: "Recommendation Systems",
      description:
        "Collaborative, content-based, and hybrid recommenders that lift conversion measurably. Built for cold-start, scale, and explainability.",
      link: "/solutions/machine-learning/recommendation-systems",
    },
    {
      title: "Fraud &amp; Anomaly Detection",
      description:
        "Real-time fraud, abuse, and anomaly detection with low false-positive rates. We balance precision, recall, and reviewer workload deliberately.",
      link: "/solutions/machine-learning/fraud-anomaly-detection",
    },
    {
      title: "Demand Forecasting",
      description:
        "Hierarchical demand forecasts at SKU, store, and region level. We unify external signals, seasonality, and causal events into one model that drives planning.",
      link: "/solutions/machine-learning/demand-forecasting",
    },
    {
      title: "Computer Vision",
      description:
        "Object detection, defect inspection, document understanding, and visual search. We build vision systems that hold accuracy under real-world variance.",
      link: "/solutions/machine-learning/computer-vision",
    },
  ];

  const outcomes = [
    {
      stat: "180+",
      label: "ML models shipped to production across regulated and consumer industries",
    },
    {
      stat: "53%",
      label: "median lift in target metric versus the heuristic baseline replaced",
    },
    {
      stat: "3.1x",
      label: "average return on incremental ML platform investment within 24 months",
    },
  ];

  const approach = [
    {
      title: "Start with the Decision",
      description:
        "Before the model, the decision. We map the business decision the model must improve&mdash;and the cost of being wrong in either direction.",
      link: "/solutions/machine-learning/model-development",
    },
    {
      title: "Build the Right Baseline",
      description:
        "Heuristic, rule, or simple model. The baseline forces honest measurement of whether ML is actually adding value&mdash;or just adding complexity.",
      link: "/solutions/machine-learning/fraud-anomaly-detection",
    },
    {
      title: "Engineer for Production",
      description:
        "Versioning, monitoring, retraining, drift detection. The model that wins the notebook contest rarely wins the production contest&mdash;until it&rsquo;s engineered for it.",
      link: "/solutions/machine-learning/mlops-deployment",
    },
    {
      title: "Measure Impact in P&amp;L",
      description:
        "Lift, AUC, and F1 are inputs. Revenue, margin, and cost are outputs. We close the loop on the metric the business actually buys.",
      link: "/solutions/machine-learning/demand-forecasting",
    },
  ];

  const cases = [
    {
      industry: "Retail",
      title: "National Retailer Lifts Recommendation Revenue 31% with Hybrid Model",
      description:
        "Cold-start-aware hybrid recommender replaced legacy collaborative filtering and shifted measurable share of basket toward longer-tail SKUs.",
      image: "/images/case-ml-retail.jpg",
      link: "/cases/retail-recommendations",
    },
    {
      industry: "Financial Services",
      title: "Card Issuer Cuts Fraud Losses 44% While Reducing False Positives",
      description:
        "Gradient-boosted ensemble plus reviewer-in-the-loop tuning shifted the precision-recall curve in both dimensions at once.",
      image: "/images/case-ml-fraud.jpg",
      link: "/cases/fraud-detection",
    },
  ];

  const relatedOfferings = [
    {
      title: "Data Solutions",
      link: "/solutions/data-solutions",
    },
    {
      title: "Conversational AI",
      link: "/solutions/conversational-ai",
    },
    {
      title: "Customer Intelligence",
      link: "/solutions/customer-intelligence",
    },
    {
      title: "Data Strategy",
      link: "/solutions/data-strategy",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Machine Learning"
        description="ML model development, MLOps, and deployment for predictive analytics, recommendation, fraud detection, and demand forecasting."
        canonical="/solutions/machine-learning"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero */}
      <SolutionHero
        eyebrow="SOLUTION · MACHINE LEARNING"
        title="Machine Learning"
        subtitle="ML model development, MLOps, and production deployment&mdash;measured in lift over baseline and dollars at the bottom line, not notebook accuracy."
        backgroundImage="/images/solution-machine-learning.jpg"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
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
              Most ML programs win the notebook and lose production. The gap
              is engineering, not modeling.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                The story repeats. The data scientist demos a 0.94 AUC. The
                executive funds the program. Twelve months later the model
                isn&rsquo;t in production, the data has drifted, and nobody
                can explain why the rollout stalled. The deficit is rarely in
                modeling&mdash;it&rsquo;s in the engineering, governance, and
                operating model around the model.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                NexDyne&rsquo;s{" "}
                <Link
                  href="/insights/ml-production-gap"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  machine learning consultants
                </Link>{" "}
                start with the decision the model must improve, build the
                right baseline, engineer for production from day one, and
                measure impact in P&amp;L&mdash;not just lift.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light grey service grid (six sub-offerings) */}
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
              How We Help Clients
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six ways we ship ML that survives production.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              We combine modeling depth with disciplined MLOps to deliver
              systems that hold their accuracy in the wild and stay tied to
              the decisions that matter to the business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={service.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col">
                    <h3 className="text-xl text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                      {service.description}
                    </p>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White Outcome / Real Results stat cluster */}
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
              Our Experience &amp; Impact
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Measurable outcomes from ML in production.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {outcomes.map((item, i) => (
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
                  className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-5"
                  style={{ fontWeight: 500, letterSpacing: "-0.03em" }}
                >
                  {item.stat}
                </div>
                <div className="text-base text-charcoal/75 leading-[1.55] max-w-[30ch]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Light grey Approach / Methodology framework */}
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
              How We Think About It
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              The Production-First ML Framework
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Four integrated phases that bridge the gap between notebook lift
              and bottom-line impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={step.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 flex flex-col">
                    <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 leading-[1.55] flex-1">
                      {step.description}
                    </p>
                    <span className="mt-6 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Explore
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 6 — ORANGE-RED SIGNAL SECTION (the single bg-primary moment) */}
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Models that hold up in the wild. NexDyne clients have lifted
              target metrics by a median of 53% over baseline&mdash;and kept
              the lift through retraining, drift, and scale.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              We&rsquo;ve shipped recommendation, fraud, forecasting, and
              vision models across retail, financial services, healthcare,
              and industrial&mdash;each engineered for production from the
              first commit.
            </p>
            <Link href="/cases">
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                See How We Help Leaders Win
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 7 — White Case studies / proof */}
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
              Machine learning, proved in outcomes.
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
                  <div className="border border-charcoal/10 bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                        {result.industry}
                      </span>
                      <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-base text-charcoal/75 leading-[1.55] mb-6">
                        {result.description}
                      </p>
                      <span className="text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                        Read Case
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/cases">
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SLOT 8 — White Related capabilities / cross-sell */}
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
              Related Offerings
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Adjacent capabilities for a complete ML program.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {relatedOfferings.map((offering, i) => (
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

      {/* SLOT 9 — Charcoal closing CTA "Ready to Talk?" */}
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
                  Stop demoing in the notebook. Start shipping in production.
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
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="retail">Retail &amp; E-commerce</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="logistics">
                      Logistics &amp; Supply Chain
                    </SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
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
                  We work with leaders ready to operationalize machine
                  learning&mdash;modeled rigorously, engineered for
                  production, and tied to the P&amp;L the executive committee
                  reads.
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
