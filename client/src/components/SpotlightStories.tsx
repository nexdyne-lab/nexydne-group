import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

/**
 * NexDyne Spotlight — EY-style tabbed insights showcase.
 * One short header, a quiet horizontal tab row (active = charcoal underline),
 * then a split per topic: summary + outlined CTA left, large clean photo
 * right. Four featured topics max — everything else lives on /insights.
 */

interface Story {
  /** short topic phrase for the tab row */
  tab: string;
  title: string;
  summary: string;
  cta: string;
  href: string;
  image: string;
}

const stories: Story[] = [
  {
    tab: "The agentic AI budget line",
    title: "Agentic AI just got a budget line. Most of it will be wasted.",
    summary:
      "Agents moved from demo to P&L in one planning cycle. What separates the funded-and-working deployments from the quietly cancelled ones is governance set before the spend — not after.",
    cta: "More on agentic AI",
    href: "/insights/agentic-ai-budget-line",
    image: "/images/ai-acceleration-abstract.jpg",
  },
  {
    tab: "EU AI Act enforcement",
    title: "The EU AI Act is enforcing in stages — August 2026 is the big one",
    summary:
      "You don't have to build AI to be covered; deploying it is enough. A 90-day compliance posture for mid-market firms that use AI in hiring, credit, or customer decisions.",
    cta: "More on AI regulation",
    href: "/insights/eu-ai-act-mid-market-playbook",
    image: "/images/business-strategy-abstract.jpg",
  },
  {
    tab: "Shadow AI & security",
    title: "Shadow AI is the new shadow IT — except this time it makes decisions",
    summary:
      "Unapproved tools are already drafting your proposals and answering your customers. Bans fail quietly; paved-road governance — sanctioned tools with guardrails — is what actually works.",
    cta: "More on AI risk",
    href: "/insights/shadow-ai-inside-your-firm",
    image: "/images/cyber-abstract.jpg",
  },
  {
    tab: "AI-first customer channels",
    title: "The channel flip: AI now answers first. Customers are deciding if they mind.",
    summary:
      "AI has become the first responder in customer channels. Resolution beats deflection — and the human tier is becoming the premium product your best customers pay for.",
    cta: "More on customer channels",
    href: "/insights/ai-answers-first-customer-channels",
    image: "/images/ai-team-collaboration.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpotlightStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className="w-full nx-surface-mist">
      <div className="nx-band pt-14 pb-14 lg:pt-16 lg:pb-20">
        {/* Header row — short title, view-all inline */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-8 lg:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                NexDyne Spotlight
              </span>
            </div>
            <h2 className="text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] font-bold tracking-[-0.02em] leading-[1.15] text-charcoal">
              What&apos;s moving in AI right now.
            </h2>
          </div>
          <Link href="/insights">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1 group whitespace-nowrap">
              See all insights
              <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>

        {/* Tab row — quiet text tabs, active gets a charcoal underline */}
        <div
          role="tablist"
          aria-label="Featured insights"
          className="flex gap-x-8 lg:gap-x-12 gap-y-2 overflow-x-auto border-b border-charcoal/12 mb-10 lg:mb-12 -mx-1 px-1"
        >
          {stories.map((s, i) => (
            <button
              key={s.href}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`relative shrink-0 pb-4 text-[13.5px] md:text-[15px] font-semibold tracking-[-0.01em] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-primary ${
                i === active
                  ? "text-charcoal"
                  : "text-charcoal/50 hover:text-charcoal/85"
              }`}
            >
              {s.tab}
              {i === active && (
                <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-charcoal" />
              )}
            </button>
          ))}
        </div>

        {/* Active story — summary left, large visual right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold leading-[1.22] tracking-[-0.02em] text-charcoal">
                {story.title}
              </h3>
              <p className="mt-5 text-[1rem] md:text-[1.05rem] leading-[1.7] text-muted-foreground max-w-[52ch]">
                {story.summary}
              </p>
              <div className="mt-8">
                <Link href={story.href}>
                  <span className="inline-block border border-charcoal/35 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-primary active:bg-[#171717] cursor-pointer">
                    {story.cta}
                  </span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Link href={story.href}>
                <div className="group overflow-hidden ring-1 ring-charcoal/10 cursor-pointer">
                  <img
                    src={story.image}
                    alt=""
                    className="w-full aspect-[16/9] object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
