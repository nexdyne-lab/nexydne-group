import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

// The 16 industries we serve — titles, slugs, and images mirror the detail
// pages (client/src/pages/industries/*) so links and imagery stay in sync.
const industries = [
  {
    title: "Aerospace & Defense",
    description: "Digital engineering, AI-powered operations, and resilient supply chains that compress cycle times without compromising security or compliance.",
    image: "/hero-bg-aerial.1d9ee9e9.jpg",
    href: "/industries/aerospace-defense",
  },
  {
    title: "Automotive",
    description: "Navigating the CASE shift — software-defined vehicles, EV programs, and smart factories — without losing operational discipline.",
    image: "/case-study-manufacturing.8d72bf05.jpg",
    href: "/industries/automotive",
  },
  {
    title: "Consumer Products",
    description: "Turning data, AI, and a more direct customer relationship into growth and margin that move in the same direction.",
    image: "/case-strategy-consulting.dfdd1294.jpg",
    href: "/industries/consumer-products",
  },
  {
    title: "Education",
    description: "AI-powered personalization and modern student-success infrastructure that improve learning outcomes while respecting the mission.",
    image: "/blog-team-collaboration.913d82ea.jpg",
    href: "/industries/education",
  },
  {
    title: "Energy & Utilities",
    description: "Running the energy transition as a transformation program — AI-powered asset performance and smart-grid technologies.",
    image: "/hero-cityscape.b7c4f9e2.png",
    href: "/industries/energy-utilities",
  },
  {
    title: "Financial Services",
    description: "Proving how data, AI, and digital channels create value before scaling them across the operating model.",
    image: "/case-banker-meeting.c53f3999.jpg",
    href: "/industries/financial-services",
  },
  {
    title: "Healthcare",
    description: "Pairing clinical insight with AI-powered operations to improve outcomes and lift the care experience.",
    image: "/case-medical-collaboration.9602cc8c.jpg",
    href: "/industries/healthcare",
  },
  {
    title: "Insurance",
    description: "AI-powered underwriting, automated claims, and embedded distribution — all auditable and explainable.",
    image: "/case-insurance-office.f039a4a1.jpg",
    href: "/industries/insurance",
  },
  {
    title: "Manufacturing",
    description: "Digital twins, predictive maintenance, and AI-powered planning that turn factories into a source of advantage.",
    image: "/case-study-manufacturing.8d72bf05.jpg",
    href: "/industries/manufacturing",
  },
  {
    title: "Private Equity",
    description: "Operational value across diligence, hold, and exit — rigorous tech diligence and value-creation playbooks.",
    image: "/case-strategy-consulting.dfdd1294.jpg",
    href: "/industries/private-equity",
  },
  {
    title: "Public Sector",
    description: "Digital service design, back-office automation, and AI tuned to the realities of public-sector accountability.",
    image: "/case-study-government.03f0e049.png",
    href: "/industries/public-sector",
  },
  {
    title: "Retail",
    description: "AI-powered personalization, intelligent supply chains, and modern merchandising that protect margin and lift conversion.",
    image: "/case-study-retail.webp",
    href: "/industries/retail",
  },
  {
    title: "Technology, Media & Telecommunications",
    description: "Accelerating product velocity, modernizing networks, and building the data and AI capabilities the next cycle demands.",
    image: "/hero-ai-brain.738a6c59.jpg",
    href: "/industries/technology-media-telecom",
  },
  {
    title: "Transportation & Logistics",
    description: "AI-powered visibility, route optimization, and modern operating models that deliver both service and margin.",
    image: "/process-orchestration-workflow.a6bc5b2e.jpg",
    href: "/industries/transportation-logistics",
  },
  {
    title: "Travel & Hospitality",
    description: "AI-powered revenue management and modern guest data that protect unit economics while lifting the experience.",
    image: "/hero-cityscape.b7c4f9e2.png",
    href: "/industries/travel-hospitality",
  },
  {
    title: "Urban Development",
    description: "Smart-city platforms, sustainable design, and modern citizen engagement with real operating discipline.",
    image: "/cityscape-hero.2b50986e.png",
    href: "/industries/urban-development",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="INDUSTRIES"
        title="Industries We Serve"
        subtitle="Deep expertise across sectors, delivering tailored solutions that address your industry's unique challenges and opportunities."
        heroImage="/images/industries/mfg-robotics.jpg"
      />

      {/* Overview */}
      <section className="nx-section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="nx-h2 text-charcoal mb-6">Cross-Industry Excellence</h2>
            <p className="nx-lead text-muted-foreground">
              Our team brings decades of combined experience across diverse industries, enabling us to apply best practices and innovative approaches regardless of sector. We understand that while each industry has unique requirements, the fundamentals of intelligent automation, data-driven decision making, and operational excellence remain universal.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="nx-section bg-subtle border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {industries.map((industry) => (
              <Link key={industry.title} href={industry.href}>
                <article className="group relative h-full flex flex-col bg-card border border-border overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(224,76,44,0.4)]">
                  {/* brand-gradient accent bar — grows on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, #DE2F23 0%, #FFB41D 100%)" }}
                  />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                      style={{ backgroundImage: "linear-gradient(to top, rgba(224,76,44,0.55) 0%, transparent 60%)" }}
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="nx-h3 text-charcoal group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.55] text-muted-foreground">
                      {industry.description}
                    </p>
                    <span className="mt-5 pt-4 border-t border-border inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="nx-h2 text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="nx-lead text-white/80 mb-8 mx-auto">
              Let's discuss how our industry-specific expertise can help you achieve your business objectives.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-primary-hover transition-colors cursor-pointer">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
