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
    image: "/images/intelligent-process.jpg",
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
    image: "/images/enterprise-architecture.jpg",
  },
  {
    category: "Growth",
    title: "Accelerating Business Growth",
    description:
      "We launch the digital products, platforms, and channels that turn capability into revenue.",
    link: "/solutions/accelerating-business-growth",
    image: "/images/growth-motion.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function OperationalExcellence() {
  return (
    <section className="bg-[#FEFEFE]">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 nx-section">
        {/* Header — single-line heading (EY style) */}
        <div className="mb-12 lg:mb-16">
          <h2 className="nx-h2 text-charcoal">
            Operational excellence, engineered for scale.
          </h2>
        </div>

        {/* Image card grid — four across on one row (EY pattern), within nx-band margins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.link}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.07 }}
            >
              <Link href={s.link}>
                {/* Image card — clean photo + short caption below (no overlay) */}
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
                    <h3 className="text-charcoal font-semibold leading-[1.25] tracking-[-0.015em] text-[1.2rem] lg:text-[1.35rem]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.6] text-muted-foreground line-clamp-2">
                      {s.description}
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
