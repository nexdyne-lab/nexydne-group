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
  bg: string;
  tone: "light" | "dark";
}

const services: Service[] = [
  {
    category: "Operations",
    title: "Intelligent Process Optimization",
    description:
      "We turn manual operations into governed, autonomous systems — removing bottlenecks and accelerating execution without losing oversight.",
    link: "/solutions/intelligent-process-optimization",
    bg: "#DE2F23",
    tone: "light",
  },
  {
    category: "Intelligence",
    title: "Data-Driven Customer Intelligence",
    description:
      "We turn data into governed customer insight — predicting behavior and compounding loyalty at scale.",
    link: "/solutions/data-driven-customer-intelligence",
    bg: "#FFB41D",
    tone: "dark",
  },
  {
    category: "Technology",
    title: "Scalable Enterprise Transformation",
    description:
      "We modernize the core — cloud-native infrastructure and operating models built to scale with ambition.",
    link: "/solutions/scalable-enterprise-transformation",
    bg: "#6F44A3",
    tone: "light",
  },
  {
    category: "Growth",
    title: "Accelerating Business Growth",
    description:
      "We launch the digital products, platforms, and channels that turn capability into revenue.",
    link: "/solutions/accelerating-business-growth",
    bg: "#242424",
    tone: "light",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function OperationalExcellence() {
  return (
    <section className="bg-[#FEFEFE]">
      <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 nx-section">
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
                {/* Solid-colour card + abstract line art (no photo). Category +
                    title always visible; description + Explore reveal on hover. */}
                <article
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer ring-1 ring-charcoal/10 focus-within:ring-2 focus-within:ring-primary"
                  style={{ backgroundColor: s.bg }}
                >
                  {/* Abstract line art — thin, tone-aware strokes; mirrored for variety */}
                  <svg
                    aria-hidden
                    viewBox="0 0 400 320"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    style={{ transform: i % 2 === 1 ? "scaleX(-1)" : undefined }}
                  >
                    <g
                      stroke={
                        s.tone === "dark"
                          ? "rgba(0,0,0,0.16)"
                          : "rgba(255,255,255,0.17)"
                      }
                      strokeWidth="1"
                    >
                      <circle cx="300" cy="86" r="128" />
                      <circle cx="104" cy="250" r="66" />
                      <line x1="0" y1="150" x2="400" y2="54" />
                      <line x1="196" y1="0" x2="150" y2="320" />
                      <path d="M0 214 Q 210 128 400 236" />
                    </g>
                  </svg>

                  {/* Base content — category + title bottom-left */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-8">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                      style={{
                        color:
                          s.tone === "dark"
                            ? "rgba(0,0,0,0.65)"
                            : "rgba(255,255,255,0.82)",
                      }}
                    >
                      {s.category}
                    </span>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <h3
                        className="font-semibold leading-[1.18] tracking-[-0.015em] text-[1.3rem] lg:text-[1.5rem]"
                        style={{ color: s.tone === "dark" ? "#1A1A1A" : "#FFFFFF" }}
                      >
                        {s.title}
                      </h3>
                      <span
                        aria-hidden
                        className="mb-1 shrink-0 text-xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: s.tone === "dark" ? "#1A1A1A" : "#FFFFFF" }}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Hover / focus reveal — near-black panel with full description */}
                  <div className="absolute inset-0 bg-[#161616] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 flex">
                    <div className="m-auto w-full p-7 lg:p-9">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber">
                        {s.category}
                      </span>
                      <h3 className="mt-3 text-white font-semibold leading-[1.18] tracking-[-0.015em] text-[1.4rem] lg:text-[1.55rem]">
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
