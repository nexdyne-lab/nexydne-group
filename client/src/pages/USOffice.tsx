import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const office = {
  city: "Grand Rapids",
  country: "United States",
  address: ["4595 Broadmoor Ave SE, Suite 115", "Grand Rapids, MI 49512", "USA"],
  email: "contact@nexdynegroup.com",
  website: "nexdynegroup.com",
  image: "/images/office-grand-rapids.jpg",
};

export default function USOffice() {
  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO title="US Office | NexDyne Consulting Group" description="Visit or reach NexDyne's US office. Local presence, global standards—serving clients across the Americas." canonical="/about/us-office" />
      <Navigation />

      {/* Hero */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-16">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Head office</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">Our head office</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              You'll find NexDyne at our head office in Grand Rapids, Michigan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office detail */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="overflow-hidden border border-border">
              <div className="aspect-[16/10] overflow-hidden bg-charcoal">
                <img
                  src={office.image}
                  alt={`NexDyne office — ${office.city}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              <span className="nx-eyebrow text-charcoal/55">{office.country}</span>
              <h2 className="nx-h2 text-charcoal mt-3 mb-8">{office.city}</h2>
              <dl className="divide-y divide-border border-y border-border">
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Address</dt>
                  <dd className="col-span-2 text-[15px] text-charcoal/85 leading-relaxed">{office.address.map((l, i) => <div key={i}>{l}</div>)}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Email</dt>
                  <dd className="col-span-2 text-[15px]"><a href={`mailto:${office.email}`} className="text-charcoal/85 hover:text-primary transition-colors">{office.email}</a></dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Web</dt>
                  <dd className="col-span-2 text-[15px]"><a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-charcoal/85 hover:text-primary transition-colors">{office.website}</a></dd>
                </div>
              </dl>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.address.join(", "))}`}
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-charcoal mt-8"
              >
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">Get directions</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-white mb-5">Let's talk.</h2>
            <p className="nx-lead text-white/70 mb-10 max-w-2xl">
              Reach out to the team directly, or see where else we work.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">Contact us</span>
              </Link>
              <Link href="/offices">
                <span className="inline-block px-8 py-4 border border-white/25 text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-white/10 transition-colors cursor-pointer">All offices</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
