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

const founders = [
  { name: "David Seyaker", role: "Founder & Chief Executive Officer", focus: "Leads strategy, vision, and the firm's governing doctrine, HIG™." },
  { name: "Raphaelyn CN Bomosy-Forkpa", role: "Co-Founder & Managing Partner", focus: "Leads client delivery and the standards behind every engagement." },
];

const promises = [
  { title: "Senior by default", body: "The people you meet are the people who do the work. No hand-off to a junior team after the pitch." },
  { title: "Deep, not broad", body: "We take on fewer engagements so each one gets the attention—and the accountability—it deserves." },
  { title: "Capability that stays", body: "We build skills into your team as we go, so the value compounds long after we've gone." },
];

function initials(name: string) {
  const parts = name.replace(/[^A-Za-z\s-]/g, "").trim().split(/[\s-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export default function OurPeople() {
  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO
        title="Our People | NexDyne Consulting Group"
        description="A senior, hands-on team. At NexDyne the people who win your trust are the people who do the work—led by founders with 62+ projects of combined experience."
        canonical="/team"
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-16">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Our people</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">Small team. Senior attention.</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              We're a founder-led firm by design. The people who earn your trust are the people who do
              the work—bringing 62+ projects of combined experience to every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The promise */}
      <section className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Why it matters</span>
            <h2 className="nx-h2 text-charcoal mt-4">The advantage of a focused team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {promises.map((p, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group bg-white p-8 lg:p-10 hover:bg-subtle transition-colors">
                <div className="text-primary text-sm font-semibold tracking-[0.1em] mb-5">0{i + 1}</div>
                <h3 className="nx-h3 text-charcoal mb-3">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-12">
            <span className="nx-eyebrow text-charcoal/55">The founders</span>
            <h2 className="nx-h2 text-charcoal mt-4">Who you'll work with</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {founders.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="group bg-white border border-border overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(36,36,36,0.28)]">
                <div className="relative aspect-[3/2] bg-charcoal overflow-hidden flex items-center justify-center">
                  <span className="text-[3.5rem] font-medium text-white/85 tracking-[-0.02em]">{initials(f.name)}</span>
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                </div>
                <div className="p-7 lg:p-8">
                  <h3 className="text-xl font-medium text-charcoal group-hover:text-primary transition-colors">{f.name}</h3>
                  <p className="text-[13px] font-semibold text-primary tracking-[0.02em] mt-1 mb-4">{f.role}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{f.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-10">
            <Link href="/about/team">
              <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">More about our leadership</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="nx-eyebrow text-white/45">Join us</span>
            <h2 className="nx-h2 text-white mt-4 mb-5">We're growing—carefully.</h2>
            <p className="nx-lead text-white/70 mb-10 max-w-2xl">
              As we grow, we're looking for exceptional people who want senior-level ownership from day
              one and care as much about how the work is governed as what it delivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/careers">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">Explore careers</span>
              </Link>
              <Link href="/contact">
                <span className="inline-block px-8 py-4 border border-white/25 text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-white/10 transition-colors cursor-pointer">Get in touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
