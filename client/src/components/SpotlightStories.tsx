import { Link } from "wouter";
import { motion } from "framer-motion";

/**
 * NexDyne Spotlight — what's moving in AI right now.
 * Compact editorial news row: one-line header with inline "view all" link,
 * then a 2x2 grid of wide horizontal cards (thumb left, copy right) so the
 * section reads like a live briefing, not a gallery. Orange-red only on the
 * category label + arrows.
 */

interface Story {
  category: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
}

const stories: Story[] = [
  {
    category: "The AI Agenda",
    title: "Agentic AI just got a budget line. Most of it will be wasted.",
    blurb: "Agents moved from demo to P&L in one planning cycle — what separates funded-and-working from cancelled.",
    href: "/insights/agentic-ai-budget-line",
    image: "/images/ai-acceleration-abstract.jpg",
  },
  {
    category: "Regulation & Governance",
    title: "The EU AI Act is enforcing in stages — August 2026 is the big one",
    blurb: "You don't have to build AI to be covered. A 90-day posture for mid-market deployers.",
    href: "/insights/eu-ai-act-mid-market-playbook",
    image: "/images/business-strategy-abstract.jpg",
  },
  {
    category: "Security & Risk",
    title: "Shadow AI is the new shadow IT — except this time it makes decisions",
    blurb: "Unapproved tools are already drafting your proposals. Bans fail; paved-road governance works.",
    href: "/insights/shadow-ai-inside-your-firm",
    image: "/images/cyber-abstract.jpg",
  },
  {
    category: "Customer Channels",
    title: "The channel flip: AI now answers first. Customers are deciding if they mind.",
    blurb: "Resolution beats deflection — and the human tier becomes your premium product.",
    href: "/insights/ai-answers-first-customer-channels",
    image: "/images/ai-team-collaboration.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpotlightStories() {
  return (
    <section className="w-full nx-surface-mist">
      <div className="nx-band pt-14 pb-14 lg:pt-16 lg:pb-16">
        {/* Compact header row — single line, view-all inline */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-8 lg:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                NexDyne Spotlight
              </span>
            </div>
            <h2 className="text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] font-bold tracking-[-0.02em] leading-[1.15] text-charcoal">
              What&apos;s moving in AI — and what it means for your business.
            </h2>
          </div>
          <Link href="/insights">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1 group whitespace-nowrap">
              See all insights
              <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>

        {/* Wide horizontal cards — 2x2, news-briefing register */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: (i % 2) * 0.08 }}
            >
              <Link href={s.href}>
                <article className="group h-full flex bg-card border border-border overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_44px_-26px_rgba(36,36,36,0.45)]">
                  {/* Thumb — fixed column, never squashes */}
                  <div className="relative w-[124px] sm:w-[190px] shrink-0 overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6 min-h-[136px]">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {s.category}
                    </span>
                    <h3 className="mt-2 text-[1.02rem] sm:text-[1.12rem] font-semibold leading-[1.3] tracking-[-0.01em] text-charcoal group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-[1.5] text-muted-foreground hidden sm:block">
                      {s.blurb}
                      <span className="ml-2 inline-block text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
