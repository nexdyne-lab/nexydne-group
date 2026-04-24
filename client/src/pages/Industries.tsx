import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const industries = [
  {
    title: "Retail & E-commerce",
    description: "Transform your retail operations with intelligent automation, personalized customer experiences, and data-driven inventory management. From point-of-sale optimization to omnichannel fulfillment, we help retailers compete in the digital age.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    href: "/industries/retail",
    solutions: [
      "Inventory optimization & demand forecasting",
      "Customer behavior analytics & personalization",
      "Omnichannel order fulfillment automation",
      "Dynamic pricing & promotion optimization"
    ]
  },
  {
    title: "Healthcare",
    description: "Enhance patient care and operational efficiency with AI-powered solutions that streamline administrative workflows, improve diagnostic accuracy, and enable predictive health analytics while maintaining strict compliance standards.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    href: "/industries/healthcare",
    solutions: [
      "Patient data management & EHR integration",
      "Appointment scheduling & resource optimization",
      "Claims processing automation",
      "Predictive analytics for patient outcomes"
    ]
  },
  {
    title: "Financial Services",
    description: "Navigate complex regulatory environments while delivering superior customer experiences. Our solutions enable real-time risk assessment, fraud detection, and intelligent process automation for banks, insurers, and fintech companies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "/industries/financial-services",
    solutions: [
      "Fraud detection & risk management",
      "Regulatory compliance automation",
      "Customer onboarding & KYC optimization",
      "Portfolio analytics & investment insights"
    ]
  },
  {
    title: "Manufacturing",
    description: "Optimize production efficiency and supply chain resilience with IoT-enabled monitoring, predictive maintenance, and intelligent quality control. We help manufacturers reduce downtime, minimize waste, and accelerate time-to-market.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    href: "/industries/manufacturing",
    solutions: [
      "Predictive maintenance & asset optimization",
      "Supply chain visibility & demand planning",
      "Quality control automation",
      "Production scheduling optimization"
    ]
  },
  {
    title: "Agriculture",
    description: "Modernize agricultural operations with precision farming technologies, crop yield prediction, and supply chain optimization. Our solutions help agribusinesses increase productivity while promoting sustainable practices.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    solutions: [
      "Crop yield prediction & optimization",
      "IoT-enabled farm monitoring",
      "Supply chain & distribution optimization",
      "Weather analytics & risk management"
    ]
  },
  {
    title: "Education",
    description: "Empower educational institutions with personalized learning platforms, administrative automation, and data-driven insights that improve student outcomes. From K-12 to higher education, we help educators focus on what matters most.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    solutions: [
      "Learning management system optimization",
      "Student performance analytics",
      "Administrative workflow automation",
      "Personalized learning pathways"
    ]
  },
  {
    title: "Professional Services & Consulting",
    description: "Elevate your professional services firm with intelligent knowledge management, client engagement analytics, and automated workflows. From consulting firms to law practices and accounting services, we help you deliver exceptional client value while optimizing operations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    solutions: [
      "Knowledge management & document intelligence",
      "Client engagement analytics",
      "Project resource optimization",
      "Billing & time tracking automation"
    ]
  },
  {
    title: "Logistics & Transportation",
    description: "Optimize your supply chain operations with IoT-enabled tracking, predictive analytics, and intelligent route optimization. We help logistics companies, freight forwarders, and transportation networks reduce costs, improve delivery times, and enhance operational visibility.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    solutions: [
      "Route optimization & fleet management",
      "Real-time shipment tracking",
      "Warehouse automation & inventory control",
      "Predictive maintenance for vehicles"
    ]
  },
  {
    title: "Insurance",
    description: "Transform insurance operations with AI-powered claims processing, risk assessment, and fraud detection. Our solutions help insurers accelerate claims adjudication, improve underwriting accuracy, and deliver superior customer experiences while reducing operational costs.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    solutions: [
      "Automated claims processing & adjudication",
      "Risk modeling & underwriting optimization",
      "Fraud detection & prevention",
      "Policy administration automation"
    ]
  },
  {
    title: "Telecommunications",
    description: "Modernize telecom operations with network optimization, customer intelligence, and service automation. We help telecommunications providers improve network performance, reduce customer churn, and accelerate service delivery through intelligent automation and data-driven insights.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    solutions: [
      "Network performance optimization",
      "Customer churn prediction & retention",
      "Billing system modernization",
      "Service provisioning automation"
    ]
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="INDUSTRIES"
        title="Industries We Serve"
        subtitle="Deep expertise across sectors, delivering tailored solutions that address your industry's unique challenges and opportunities."
        heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      />

      {/* Overview Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl mb-6">Cross-Industry Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team brings decades of combined experience across diverse industries, enabling us to apply best practices and innovative approaches regardless of sector. We understand that while each industry has unique requirements, the fundamentals of intelligent automation, data-driven decision making, and operational excellence remain universal.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.title}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:p-6 md:p-8 items-center bg-white overflow-hidden transition-shadow`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 h-80 lg:h-96 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 sm:p-6 sm:p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-3xl">{industry.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-3 mb-5 sm:mb-6 md:mb-8">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Key Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-2">
                            <span className="text-charcoal/80">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {industry.href && (
                      <Link href={industry.href} className="inline-flex items-center gap-2 bg-white text-white px-6 py-3 font-semibold hover:bg-primary transition-colors">
                        Explore {industry.title}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Let's discuss how our industry-specific expertise can help you achieve your business objectives.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
