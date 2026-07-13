import { Link } from "wouter";
import { motion } from "framer-motion";

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
    image: "/images/spotlight-agentic-ai.jpg",
  },
  {
    tab: "EU AI Act enforcement",
    title: "The EU AI Act is enforcing in stages — August 2026 is the big one",
    summary:
      "You don't have to build AI to be covered; deploying it is enough. A 90-day compliance posture for mid-market firms that use AI in hiring, credit, or customer decisions.",
    cta: "More on AI regulation",
    href: "/insights/eu-ai-act-mid-market-playbook",
    image: "/images/spotlight-eu-ai-act.jpg",
  },
  {
    tab: "Shadow AI & security",
    title: "Shadow AI is the new shadow IT — except this time it makes decisions",
    summary:
      "Unapproved tools are already drafting your proposals and answering your customers. Bans fail quietly; paved-road governance — sanctioned tools with guardrails — is what actually works.",
    cta: "More on AI risk",
    href: "/insights/shadow-ai-inside-your-firm",
    image: "/images/spotlight-shadow-ai.jpg",
  },
  {
    tab: "AI-first customer channels",
    title: "The channel flip: AI now answers first. Customers are deciding if they mind.",
    summary:
      "AI has become the first responder in customer channels. Resolution beats deflection — and the human tier is becoming the premium product your best customers pay for.",
    cta: "More on customer channels",
    href: "/insights/ai-answers-first-customer-channels",
    image: "/images/spotlight-customer-channels.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpotlightStories() {
  return (
    <section className="w-full nx-surface-mist">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 pt-14 pb-16 lg:pt-16 lg:pb-20">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
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

        {/* Four-card row — clean image + title/description below (no overlay) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.07 }}
            >
              <Link href={s.href}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={s.image}
                      alt=""
                      aria-hidden
                      className="w-full aspect-[5/4] object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="text-charcoal font-semibold leading-[1.25] tracking-[-0.015em] text-[1.2rem] lg:text-[1.35rem] line-clamp-2">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.6] text-muted-foreground line-clamp-2">
                      {s.summary}
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Show more */}
        <div className="mt-12 lg:mt-14 flex justify-center">
          <Link href="/insights">
            <span className="inline-block border border-charcoal/35 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-primary cursor-pointer">
              See all insights
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
