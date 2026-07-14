import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease },
};

// Founder — sits above the managing partners.
const founder = {
  name: "David Seyaker",
  initials: "DS",
  role: "Co-Founder & Chief Executive",
  focus: "Sets the firm's direction and its governing doctrine, HIG™ — leading strategy and enterprise-wide transformation for clients.",
};

// Managing partners — each accountable for outcomes in one practice area.
const partners = [
  { name: "Amara Okonkwo", initials: "AO", area: "Artificial Intelligence", bio: "Leads the AI and agentic-systems practice, from strategy to production." },
  { name: "Daniel Reyes", initials: "DR", area: "Operations", bio: "Re-engineers supply chain, quality, and performance for durable gains." },
  { name: "Priya Nair", initials: "PN", area: "Technology", bio: "Modernizes cloud, data, and platform architecture built to scale." },
  { name: "Marcus Halloran", initials: "MH", area: "Strategy & Corporate Finance", bio: "Advises on strategy, planning, and the capital decisions that compound value." },
  { name: "Sofia Moretti", initials: "SM", area: "Business Building", bio: "Builds and launches new digital ventures from inside the core." },
  { name: "Jayden Cole", initials: "JC", area: "Growth, Marketing & Sales", bio: "Turns capability into demand, pricing power, and commercial growth." },
];

export default function LeadershipTeam() {
  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <SEO
        title="Leadership Team | NexDyne Consulting Group"
        description="Meet the managing partners leading NexDyne across AI, operations, technology, strategy, business building, and growth — governed by Human Intelligence Governance (HIG™)."
        canonical="/about/team"
      />
      <Navigation />

      {/* ── Hero — simple ─────────────────────────────────────────────────── */}
      <section className="bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12 pt-28 md:pt-32 lg:pt-36 pb-10 md:pb-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-primary" />
              <span className="nx-eyebrow text-charcoal/55">Leadership</span>
            </div>
            <h1 className="nx-h1 text-charcoal">Our managing partners.</h1>
            <p className="nx-lead text-muted-foreground mt-6 max-w-2xl">
              The partners leading our work — each accountable for outcomes in their practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Founder — featured card above the partners ────────────────────── */}
      <section className="pt-4 pb-14 md:pb-16 bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-6">
            <span className="nx-eyebrow text-charcoal/55">Founder</span>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="max-w-2xl">
            <div className="group bg-white border border-border p-7 lg:p-9 transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
              <div className="flex items-start gap-6">
                <div className="shrink-0 h-24 w-24 rounded-full bg-charcoal text-white flex items-center justify-center text-[1.5rem] font-semibold tracking-[0.02em] ring-4 ring-off-white">
                  {founder.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.4rem] lg:text-[1.55rem] font-semibold text-charcoal leading-tight tracking-[-0.015em]">{founder.name}</h3>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-charcoal/70 mt-2">{founder.role}</p>
                  <span aria-hidden className="block h-[2px] w-9 bg-primary mt-3" />
                  <p className="text-[15px] text-muted-foreground leading-[1.7] mt-4">{founder.focus}</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Link href="/contact">
                      <span aria-label={`Contact ${founder.name}`} className="h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <Mail className="w-[18px] h-[18px]" />
                      </span>
                    </Link>
                    <a
                      href="https://www.linkedin.com/company/nexdyne"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} — firm LinkedIn`}
                      className="h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-[18px] h-[18px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Partners grid — McKinsey 'Our People' format ──────────────────── */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-8">
            <span className="nx-eyebrow text-charcoal/55">Managing partners</span>
          </motion.div>
        </div>
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}>
                <div className="group bg-white border border-border p-8 h-full flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
                  <div className="h-28 w-28 rounded-full bg-charcoal text-white flex items-center justify-center text-[1.6rem] font-semibold tracking-[0.02em] mb-6">
                    {p.initials}
                  </div>
                  <h3 className="text-[1.3rem] font-semibold text-charcoal leading-tight tracking-[-0.01em]">{p.name}</h3>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.07em] text-charcoal/70 mt-2">
                    Managing Partner · {p.area}
                  </p>
                  <span aria-hidden className="block h-[2px] w-8 bg-primary mt-3 mb-4" />
                  <p className="text-[14px] text-muted-foreground leading-[1.6] max-w-[26ch]">{p.bio}</p>
                  <Link href="/contact">
                    <span
                      aria-label={`Contact ${p.name}`}
                      className="mt-6 h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                    >
                      <Mail className="w-[18px] h-[18px]" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA — simple ──────────────────────────────────────────── */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Work with our partners.</h2>
            <p className="nx-lead text-muted-foreground mb-9 max-w-2xl">
              Tell us what you're trying to achieve — we'll bring the right partner and team to the table.
            </p>
            <Link href="/contact">
              <span className="inline-block px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                Start a conversation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
