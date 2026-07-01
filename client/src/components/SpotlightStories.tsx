import { Link } from "wouter";
import { motion } from "framer-motion";

/**
 * NexDyne Spotlight — featured perspectives.
 * BCG "Beyond Strategy. Real Impact." section pattern, neutral-first:
 * white cards on off-white, structural-grey borders, orange-red only on the
 * category label + read-more arrow. Re-homes the 4 former hero-carousel insights.
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
    category: "AI in Enterprise",
    title: "How AI Agents Are Reshaping Enterprise Operations",
    blurb: "Where autonomous agents create leverage — and where human judgment must stay in the loop.",
    href: "/insights/ai-agents-transform-operations",
    image: "/images/ai-in-enterprises.jpg",
  },
  {
    category: "Economic Impact",
    title: "The $15 Trillion Question: How AI Will Reshape the Global Economy",
    blurb: "The macro shift underway, and what it means for leaders allocating capital today.",
    href: "/insights/ai-economic-impact",
    image: "/images/hero-ai-2.jpg",
  },
  {
    category: "Technology Strategy",
    title: "The Complete Guide to Process Mining",
    blurb: "Turning operational data into a governed map of how work actually flows.",
    href: "/insights/process-mining-guide",
    image: "/images/ai-tech-hero.jpg",
  },
  {
    category: "AI Executive Guide",
    title: "The Pragmatic CEO's Guide to AI",
    blurb: "A governance-first playbook for adopting AI without outsourcing accountability.",
    href: "/insights/ceo-guide-data-modernization",
    image: "/images/ai-team-consulting.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpotlightStories() {
  return (
    <section className="w-full bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-20 pb-12 lg:pt-28 lg:pb-14">
        {/* Section header */}
        <div className="max-w-[640px]">
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-[3px] w-9 bg-primary" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              NexDyne Spotlight
            </span>
          </div>
          <h2 className="nx-h2 text-charcoal">
            Beyond the hype.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #E04C2C 0%, #FF7A2F 50%, #FFB41D 100%)" }}
            >
              Real perspective.
            </span>
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.6] text-muted-foreground max-w-[52ch]">
            Practical intelligence for leaders governing the shift to AI-enabled
            operating models — judgment first, then scale.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {stories.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            >
              <Link href={s.href}>
                <article className="group relative h-full flex flex-col bg-card border border-border overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(224,76,44,0.4)]">
                  {/* brand-gradient accent bar — grows on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, #E04C2C 0%, #FFB41D 100%)" }}
                  />
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                      style={{ backgroundImage: "linear-gradient(to top, rgba(224,76,44,0.55) 0%, transparent 60%)" }}
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {s.category}
                    </span>
                    <h3 className="mt-3 text-[1.15rem] font-semibold leading-[1.28] tracking-[-0.01em] text-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.92rem] leading-[1.55] text-muted-foreground">
                      {s.blurb}
                    </p>
                    <span className="mt-5 pt-4 border-t border-border inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal">
                      Read more
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <div className="mt-12">
          <Link href="/insights">
            <span className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 hover:bg-primary-hover transition-colors cursor-pointer group">
              See all insights
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
