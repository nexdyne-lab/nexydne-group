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

export default function Contact() {
  // ── Form field state ────────────────────────────────────────────────────────
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  // ── Industry options (David approved — 8 verticals + Other) ─────────────────
  const industries = [
    "Education",
    "Government & Public Sector",
    "Agriculture & AgTech",
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing",
    "Retail & Consumer Goods",
    "Professional Services",
    "Other",
  ];

  // ── Topic options (Cat 5 cluster names + General + Other) ───────────────────
  const topics = [
    "Intelligent Process Optimization",
    "Customer Intelligence",
    "Data-Driven Customer Intelligence",
    "Enterprise Transformation",
    "Accelerating Business Growth",
    "General inquiry",
    "Other",
  ];

  // ── "What happens next" steps (SLOT 3) ──────────────────────────────────────
  const nextSteps = [
    {
      title: "Acknowledged within one business day.",
      description:
        "We confirm we've received your note and assign it to the right practice lead. No automated triage queue — a human reads every inquiry.",
    },
    {
      title: "A practice lead replies personally.",
      description:
        "The lead who responds is the partner who would actually run the engagement, not a salesperson. Their reply will reflect what we've understood and propose next steps.",
    },
    {
      title: "A 30-minute discovery call.",
      description:
        "If there's a fit, we propose a focused discovery call to understand the scope, the constraints, and how we'd help. No pitch deck, no sales pressure.",
    },
  ];

  // ── Direct contact paths (SLOT 4) ───────────────────────────────────────────
  const contactPaths = [
    {
      label: "General Inquiries",
      email: "hello@nexdynegroup.com",
      description: "For new business and partnership inquiries.",
    },
    {
      label: "Careers",
      email: "careers@nexdynegroup.com",
      description: "For roles, applications, and talent network.",
    },
    {
      label: "Press & Media",
      email: "press@nexdynegroup.com",
      description: "For interviews, comment requests, and press kits.",
    },
  ];

  // ── Submit handler stub ─────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: wire to real backend API
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, company, industry, topic, message }) });
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network

    setIsSubmitting(false);
    setSubmitStatus("success");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Contact"
        description="Talk to a NexDyne partner. Tell us what you're working on and we'll route you to the practice lead who can help — typically within one business day."
        canonical="/contact"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal compact hero (downshifted H1, ~25% shorter than Cat 5) */}
      <SolutionHero
        eyebrow="CONTACT · LET'S TALK"
        title="Talk to a NexDyne partner."
        subtitle="Tell us what you're working on. We'll route you to the practice lead who can help — typically within one business day."
        backgroundImage="/images/contact-hero.jpg"
        h1ClassName="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
        containerClassName="h-[60vh] min-h-[440px] sm:min-h-[480px] lg:min-h-[540px]"
      />

      {/* SLOT 2 — White contact form (the centerpiece) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {submitStatus === "success" ? (
              <div className="border border-charcoal/10 bg-white p-10 lg:p-14">
                <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  MESSAGE SENT
                </span>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-8"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Thanks — we've got it.
                </h3>
                <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                  Expect a reply from a practice lead within one business day. If your inquiry is time-sensitive, you can also reach us via the direct contact paths below.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-12 max-w-[60ch]">
                  <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                    START THE CONVERSATION
                  </span>
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
                    style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                  >
                    Send us a message.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label htmlFor="name" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Industry
                    </label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger
                        id="industry"
                        className="w-full bg-white border border-charcoal/20 rounded-none text-base text-charcoal px-4 py-3 h-auto focus:ring-0 focus:border-charcoal"
                      >
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="topic" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Topic of interest
                    </label>
                    <Select value={topic} onValueChange={setTopic}>
                      <SelectTrigger
                        id="topic"
                        className="w-full bg-white border border-charcoal/20 rounded-none text-base text-charcoal px-4 py-3 h-auto focus:ring-0 focus:border-charcoal"
                      >
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-2 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-charcoal/20 px-4 py-3 text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-y"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-block px-10 py-4 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending…" : "Send message"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light-grey "What happens next" reassurance band */}
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
              WHAT HAPPENS NEXT
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              What to expect after you hit send.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {nextSteps.map((step, i) => (
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
                  <h4 className="text-xl text-charcoal font-medium mb-4 leading-[1.25]">
                    {step.title}
                  </h4>
                  <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White direct contact paths (BCG-style escape hatches) */}
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
              DIRECT CONTACT PATHS
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Or reach us directly.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {contactPaths.map((path, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <div className="h-full p-8 lg:p-10 flex flex-col">
                  <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-5">
                    {path.label}
                  </span>
                  <a
                    href={`mailto:${path.email}`}
                    className="text-charcoal font-medium text-lg hover:text-primary transition-colors mb-4 break-words"
                  >
                    {path.email}
                  </a>
                  <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                    {path.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Light-grey "Where we work" — single Grand Rapids HQ */}
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
              OUR HEADQUARTERS
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-6"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Where we work.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
              Headquartered in Grand Rapids, Michigan, serving clients globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md"
          >
            <div className="border border-charcoal/10 bg-white p-8 lg:p-10">
              <h4 className="text-xl text-charcoal font-medium mb-5 leading-[1.25]">
                Grand Rapids
              </h4>
              <address className="not-italic text-base text-charcoal/75 leading-[1.65] space-y-1">
                <div>4595 Broadmoor Ave SE</div>
                <div>Suite 115</div>
                <div>Grand Rapids, MI 49512</div>
                <div>United States</div>
              </address>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — Charcoal closing CTA */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              PREFER A DIFFERENT CHANNEL?
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Not ready to fill a form?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10 max-w-[60ch]">
              Browse our latest thinking or look at how we've helped other organizations transform.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <Link href="/insights">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  View our insights →
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  See our case studies →
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
