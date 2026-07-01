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
    <section className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 nx-section">
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
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #E04C2C 0%, #FF7A2F 50%, #FFB41D 100%)" }}
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
                <article className="group relative overflow-hidden rounded-xl min-h-[340px] lg:min-h-[380px] flex cursor-pointer ring-1 ring-charcoal/10">
                  {/* Image */}
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                  />
                  {/* Charcoal authority overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/65 to-charcoal/30 transition-opacity duration-500 group-hover:from-charcoal/95" />

                  {/* Content */}
                  <div className="relative z-10 mt-auto p-8 lg:p-9 w-full">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber">
                      {s.category}
                    </span>
                    <h3 className="mt-3 text-white font-semibold leading-[1.18] tracking-[-0.015em] text-[1.45rem] lg:text-[1.6rem]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.55] text-white/75 max-w-[44ch]">
                      {s.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white">
                      Explore
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
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
