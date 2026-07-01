import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// Founding partners. (Titles are editable — adjust to taste.)
const leaders = [
  {
    name: "David Seyaker",
    role: "Co-Founder & Chief Executive",
    focus: "Sets the firm's direction and its governing doctrine, HIG™—leading strategy and enterprise-wide transformation for our clients.",
  },
  {
    name: "Raphaelyn CN Bomosy-Forkpa",
    role: "Co-Founder & Managing Partner",
    focus: "Leads client delivery and the standards behind every engagement—turning strategy into governed, durable outcomes.",
  },
];

function initials(name: string) {
  const parts = name.replace(/[^A-Za-z\s-]/g, "").trim().split(/[\s-]+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function LeadershipTeam() {
  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO
        title="Leadership Team | NexDyne Consulting Group"
        description="Meet the leaders guiding NexDyne—the people behind our work helping businesses transform with AI and agentic systems, governed by Human Intelligence Governance (HIG™)."
        canonical="/about/team"
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-16">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Leadership team</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">The people behind the partnership.</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              Our leaders combine deep industry experience with the discipline to deploy AI and agentic
              systems responsibly. They set the standard for how we serve clients—and how we govern the
              change we create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">How we lead</span>
              <h2 className="nx-h2 text-charcoal mt-4">Accountable at the top.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-6">
                We hold ourselves to the same doctrine we bring to clients: design the human system
                first, then deploy, govern, and scale the technology inside it.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                That means our leaders stay close to the work—accountable for outcomes, not just
                oversight. They build capability in our teams and our clients alike, and they own the
                governance that keeps every transformation controlled, auditable, and durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="nx-eyebrow text-charcoal/55">Our founders</span>
              <h2 className="nx-h2 text-charcoal mt-4">Meet the founders</h2>
            </div>
            <div className="border-l-2 border-primary pl-5">
              <div className="text-[2.5rem] leading-none font-semibold text-charcoal">62+</div>
              <p className="text-[13px] text-muted-foreground mt-1 max-w-[16rem]">Projects delivered across our combined experience</p>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group bg-white border border-border overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(36,36,36,0.28)]"
              >
                {/* monogram portrait — swap for a real photo when available */}
                <div className="relative aspect-[3/2] bg-charcoal overflow-hidden flex items-center justify-center">
                  <span className="text-[3.5rem] font-medium text-white/85 tracking-[-0.02em]">{initials(leader.name)}</span>
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                </div>
                <div className="p-7 lg:p-8">
                  <h3 className="text-xl font-medium text-charcoal group-hover:text-primary transition-colors">{leader.name}</h3>
                  <p className="text-[13px] font-semibold text-primary tracking-[0.02em] mt-1 mb-4">{leader.role}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{leader.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Want to work alongside them?</h2>
            <p className="nx-lead text-muted-foreground mb-10 max-w-2xl">
              We're always looking for exceptional people who want to do the best work of their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/careers">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Explore careers
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-block px-8 py-4 border border-border text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-charcoal hover:bg-subtle transition-colors cursor-pointer">
                  Contact us
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
