import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const reasons = [
  { title: "Senior ownership from day one", body: "No junior bench to sit on. You own real work, in front of real clients, from your first engagement." },
  { title: "Work that matters", body: "Enterprise-wide transformation with AI and agentic systems—not slideware that gathers dust." },
  { title: "Learn from the founders", body: "You'll work directly alongside us. Direct mentorship means you grow faster than you would anywhere else." },
  { title: "Responsible by design", body: "Everything we build is governed by HIG™—so you learn to deploy technology the right way, not just the fast way." },
];

const hiring = [
  { no: "01", title: "Say hello", body: "Send us your CV and a short note on what you're looking for—or apply to a role directly." },
  { no: "02", title: "Intro conversation", body: "A relaxed call to understand your goals, your strengths, and whether there's a genuine fit." },
  { no: "03", title: "Working session", body: "A real problem, worked through together. No gotchas—just a look at how we'd actually collaborate." },
  { no: "04", title: "Meet the founders", body: "Because you'll work directly with us, you'll spend real time with us before any decision is made." },
  { no: "05", title: "Offer", body: "Clear, fair, and fast. We respect your time as much as we'll value your work." },
];

const areas = [
  { title: "Strategy & Advisory", body: "Shape the direction of a transformation from first principles." },
  { title: "Data & Artificial Intelligence", body: "Build the AI and agentic systems at the core of our work." },
  { title: "Delivery & Transformation", body: "Turn strategy into governed, durable outcomes on the ground." },
  { title: "Governance & Responsible AI", body: "Own the discipline that keeps every deployment accountable." },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-subtle text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Careers | NexDyne Consulting Group"
        description="Build your career at a founder-led firm where you own real work from day one—helping businesses transform with AI and agentic systems, governed by HIG™."
        canonical="/careers"
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Careers</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">Do the best work of your career.</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              We're a founder-led firm, growing carefully. That means senior-level ownership from day
              one, real transformation work, and the chance to help shape what NexDyne becomes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Introduce yourself
                </span>
              </Link>
              <a href="#how-we-hire" className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">See how we hire</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* full-bleed image band */}
        <motion.div {...fadeUp} className="w-full">
          <div className="relative h-[300px] md:h-[420px] lg:h-[460px] overflow-hidden">
            <img src="/images/hero-team.jpg" alt="The NexDyne team at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/15" />
          </div>
        </motion.div>
      </section>

      {/* Why NexDyne */}
      <section id="why-nexdyne" className="nx-section bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Why NexDyne</span>
            <h2 className="nx-h2 text-charcoal mt-4">A different kind of firm to grow in</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {reasons.map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }} className="group bg-white p-8 lg:p-10 hover:bg-subtle transition-colors">
                <div className="h-[3px] w-8 bg-primary mb-5 transition-all duration-300 group-hover:w-12" />
                <h3 className="nx-h3 text-charcoal mb-3">{r.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at NexDyne — editorial */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Life at NexDyne</span>
              <h2 className="nx-h2 text-charcoal mt-4">High trust. High standards.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-6">
                We keep the team small on purpose. It means every person matters, every voice is heard,
                and the quality of the work is never diluted by scale.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                Based in Grand Rapids and working with clients wherever they are, we value autonomy,
                curiosity, and craft. The pace is real and the expectations are high—but so is the
                support, and so is the reward: you'll build rare skills, work on problems that matter,
                and see the impact of your work first-hand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we hire */}
      <section id="how-we-hire" className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">How we hire</span>
            <h2 className="nx-h2 text-charcoal mt-4">A fair, transparent process</h2>
            <p className="nx-lead text-muted-foreground mt-5">No black boxes—here's exactly what to expect from first hello to offer.</p>
          </motion.div>
          <div className="border-t border-border">
            {hiring.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 2) * 0.06 }} className="group grid lg:grid-cols-12 gap-4 lg:gap-16 py-8 border-b border-border">
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="text-[13px] font-semibold text-primary tracking-[0.1em]">{step.no}</span>
                  <h3 className="text-xl md:text-2xl font-medium text-charcoal group-hover:text-primary transition-colors">{step.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we hire — areas */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Where we hire</span>
            <h2 className="nx-h2 text-charcoal mt-4">The kind of work you'd own</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {areas.map((a, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group bg-white p-8 hover:bg-subtle transition-colors">
                <div className="text-primary text-sm font-semibold tracking-[0.1em] mb-5">0{i + 1}</div>
                <h3 className="nx-h3 text-charcoal mb-3">{a.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles — honest */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="nx-eyebrow text-white/45">Open roles</span>
            <h2 className="nx-h2 text-white mt-4 mb-6">We hire selectively—and we're always glad to meet people.</h2>
            <p className="nx-lead text-white/70 mb-4 max-w-2xl">
              We don't always have a formal opening posted, but the right person can shape the firm—so
              we're happy to talk whenever there's a genuine fit.
            </p>
            <p className="text-[15px] text-white/55 leading-relaxed mb-10 max-w-2xl">
              Send your CV and a short note to <a href="mailto:contact@nexdynegroup.com" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-primary transition-colors">contact@nexdynegroup.com</a>, and tell us how you'd help our clients transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">Introduce yourself</span>
              </Link>
              <Link href="/about/team">
                <span className="inline-block px-8 py-4 border border-white/25 text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-white/10 transition-colors cursor-pointer">Meet the founders</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
