import { Link } from "wouter";
import { motion } from "framer-motion";

/**
 * Operational Excellence — feature card grid (BCG "Our Client Impact / AI at Scale"
 * gradient-card pattern), neutral-first. Charcoal "dark authority" image tiles with
 * white type and a single orange-red signal accent on the Explore link.
 */

interface Service {
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const services: Service[] = [
  {
    category: "Operations",
    title: "Intelligent Process Optimization",
    description:
      "We turn manual operations into governed, autonomous systems — removing bottlenecks and accelerating execution without losing oversight.",
    link: "/solutions/intelligent-process-optimization",
    image: "/images/processflow-abstract.jpg",
  },
  {
    category: "Intelligence",
    title: "Data-Driven Customer Intelligence",
    description:
      "We turn data into governed customer insight — predicting behavior and compounding loyalty at scale.",
    link: "/solutions/data-driven-customer-intelligence",
    image: "/images/solution-customer-intelligence.jpg",
  },
  {
    category: "Technology",
    title: "Scalable Enterprise Transformation",
    description:
      "We modernize the core — cloud-native infrastructure and operating models built to scale with ambition.",
    link: "/solutions/scalable-enterprise-transformation",
    image: "/images/digital-transformation-abstract.jpg",
  },
  {
    category: "Growth",
    title: "Accelerating Business Growth",
    description:
      "We launch the digital products, platforms, and channels that turn capability into revenue.",
    link: "/solutions/accelerating-business-growth",
    image: "/images/solution-business-growth.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function OperationalExcellence() {
  return (
    <section className="nx-surface-mist">
      <div className="nx-band nx-section">
        {/* Header — eyebrow + H2 left, intro right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Our Solutions
              </span>
            </div>
            <h2 className="nx-h2 text-charcoal">
              Operational excellence,{" "}
              <span
                className="text-charcoal"
                
              >
                engineered for scale.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[1.05rem] leading-[1.65] text-muted-foreground max-w-[50ch]">
              The services and tools below are a glimpse of the rigor our operational
              excellence experts bring to every engagement — judgment first, then scale.
            </p>
          </div>
        </div>

        {/* Image card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.link}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
            >
              <Link href={s.link}>
                {/* BCG-style card: clear photo + solid title footer; description
                    reveals on hover/focus as a solid panel — no gradient on the image */}
                <article className="group relative overflow-hidden rounded-xl flex flex-col cursor-pointer ring-1 ring-charcoal/10 bg-white focus-within:ring-2 focus-within:ring-primary">
                  {/* Image — true colour, untouched */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Title footer band — arrow signals clickability before hover */}
                  <div className="px-6 py-6 lg:px-7 lg:py-7 bg-white flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {s.category}
                      </span>
                      <h3 className="mt-2 text-charcoal font-semibold leading-[1.2] tracking-[-0.015em] text-[1.3rem] lg:text-[1.45rem]">
                        {s.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="mb-1 shrink-0 text-primary text-xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>

                  {/* Hover/focus reveal — solid charcoal panel, opacity-only */}
                  <div className="absolute inset-0 bg-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 flex">
                    <div className="m-auto w-full p-8 lg:p-10">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber">
                        {s.category}
                      </span>
                      <h3 className="mt-3 text-white font-semibold leading-[1.18] tracking-[-0.015em] text-[1.45rem] lg:text-[1.6rem]">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-[0.95rem] leading-[1.6] text-white/80 max-w-[46ch]">
                        {s.description}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white">
                        Explore
                        <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
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
