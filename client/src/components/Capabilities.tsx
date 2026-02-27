import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const capabilities = [
  {
    title: "Artificial Intelligence",
    description: "Harness the power of generative AI and machine learning to automate complex workflows and create competitive advantages for your SME.",
    link: "/capabilities"
  },
  {
    title: "Business Building",
    description: "Launch new digital ventures and revenue streams with our proven playbook for rapid scaling and market validation.",
    link: "/capabilities"
  },
  {
    title: "Technology",
    description: "Modernize your legacy systems with cloud-native architectures that ensure security, scalability, and operational resilience.",
    link: "/capabilities"
  },
  {
    title: "Growth, Marketing & Sales",
    description: "Drive customer acquisition and retention through data-driven marketing strategies and precision sales enablement tools.",
    link: "/capabilities"
  },
  {
    title: "Strategy & Corporate Finance",
    description: "Align your financial resources with strategic goals to maximize ROI and secure sustainable long-term growth.",
    link: "/capabilities/strategy-corporate-finance"
  },
  {
    title: "Operations",
    description: "Streamline end-to-end operations to reduce waste, improve quality, and accelerate delivery times.",
    link: "/capabilities/operations"
  }
];

export function Capabilities() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-base text-white">
      <div className="container px-4 md:px-6">
        <div className="mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Capabilities</h2>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            We bring world-class expertise tailored to the unique challenges of US SMEs, helping you navigate complexity and unlock value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">{cap.title}</h3>
              <p className="text-muted-foreground/50 leading-relaxed mb-4">
                {cap.description}
              </p>
              <Link href={cap.link}>
                <span className="text-secondary hover:text-white transition-colors inline-flex items-center gap-2 font-semibold">
                  Learn more about {cap.title} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
