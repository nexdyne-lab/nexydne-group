import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function ManufacturingErpModernization() {
  const relatedServices = [
    { name: "Process Automation", link: "/solutions/process-automation" },
    { name: "App Development", link: "/solutions/app-development" },
    { name: "Data Solutions", link: "/solutions/data-solutions" },
    { name: "Digital Engagement", link: "/solutions/digital-engagement" },
    { name: "E-commerce", link: "/solutions/e-commerce" },
    { name: "Agentic AI", link: "/solutions/agentic-ai" },
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Cases", link: "/cases" },
    { name: "Insights", link: "/insights" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const partners = [
    { name: "Salesforce", link: "/partners/salesforce" },
    { name: "Microsoft", link: "/partners/microsoft" },
    { name: "AWS", link: "/partners/aws" },
    { name: "Google Cloud", link: "/partners/google-cloud" },
    { name: "Adobe", link: "/partners/adobe" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#7d1e3f] to-[#4a1225] text-white py-24"
        style={{
          backgroundImage: "url('/legacy-case-manufacturing.71a439ad.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#7d1e3f]/95 to-[#4a1225]/95" />
        <div className="container relative">
          <div className="mb-6 text-sm opacity-90">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/solutions/intelligent-process" className="hover:underline">
              Intelligent Process Optimization
            </Link>
            <span className="mx-2">/</span>
            <Link href="/solutions/app-development" className="hover:underline">
              App Development
            </Link>
            <span className="mx-2">/</span>
            <Link href="/solutions/legacy-modernization" className="hover:underline">
              Legacy Modernization
            </Link>
            <span className="mx-2">/</span>
            <span>Manufacturer Transforms Legacy ERP to Cloud Platform</span>
          </div>
          <div className="max-w-3xl">
            <Button
              variant="link"
              className="text-white hover:text-white/80 p-0 mb-6 h-auto"
              onClick={() => window.history.back()}
            >
              ← Back to Legacy Modernization
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Manufacturer Transforms Legacy ERP to Cloud Platform
            </h1>
            <p className="text-xl leading-relaxed">
              Cloud ERP migration delivers 52% faster order processing and real-time supply chain
              visibility across 14 global manufacturing sites.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A global manufacturer of industrial equipment operating 14 production facilities
              across North America, Europe, and Asia struggled with a fragmented ERP landscape that
              had evolved through decades of acquisitions and organic growth. Each facility ran a
              different version of legacy ERP software—some on-premises installations dating back to
              the early 2000s, others on heavily customized platforms that required specialized
              consultants to maintain. The lack of standardization created operational chaos and
              strategic blindness.
            </p>
            <p>
              Supply chain visibility was virtually nonexistent. When a customer placed an order,
              production planners couldn't see real-time inventory levels across facilities, leading
              to frequent stockouts of critical components while other locations held excess
              inventory. Order fulfillment averaged 18 days from placement to shipment, with 32% of
              orders experiencing delays due to material shortages that could have been avoided with
              better visibility. Customer satisfaction scores declined as competitors with modern
              systems delivered faster and more reliably.
            </p>
            <p>
              The financial impact was severe. The company employed 47 full-time IT staff just to
              maintain the disparate ERP systems, with annual maintenance costs exceeding $8.4
              million. Each system upgrade required custom development work, and integrating newly
              acquired facilities took 12-18 months of painful data migration and process
              harmonization. Leadership recognized that the fragmented ERP landscape had become a
              strategic liability—limiting growth, increasing costs, and preventing the operational
              excellence required to compete in global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              NEXDYNE partnered with the manufacturer to design and implement a unified cloud ERP
              platform that would standardize operations across all 14 facilities while maintaining
              flexibility for regional requirements. The solution centered on a modern, cloud-native
              ERP system with integrated modules for manufacturing, supply chain, finance, and
              customer relationship management—replacing the patchwork of legacy systems with a
              single source of truth.
            </p>
            <p>
              The team began with extensive process discovery and harmonization workshops involving
              stakeholders from every facility. Rather than simply replicating existing workflows in
              the new system, NEXDYNE facilitated the design of standardized best practices that
              incorporated lessons learned from the company's highest-performing sites. The new ERP
              configuration balanced global standardization with local flexibility, allowing
              facilities to adapt workflows for regional regulations and market conditions while
              maintaining data consistency.
            </p>
            <p>
              The migration strategy prioritized business continuity and risk mitigation. NEXDYNE
              built sophisticated data migration tools that cleansed, normalized, and consolidated
              decades of transactional data from disparate systems. The team conducted parallel
              processing for three months at each facility, running both legacy and new systems
              simultaneously to validate accuracy before cutover. This approach ensured zero data
              loss and maintained uninterrupted operations throughout the 22-month implementation.
            </p>
            <p>
              Beyond technical implementation, NEXDYNE established a global business process owner
              model, training leaders from each region to champion standardization and continuous
              improvement. The team developed comprehensive training programs delivered in six
              languages, ensuring that 2,340 employees across all facilities could effectively use
              the new platform. Change management initiatives addressed cultural resistance and
              helped teams embrace new ways of working.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">52%</div>
              <div className="text-sm text-muted-foreground">Faster order processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$6.2M</div>
              <div className="text-sm text-muted-foreground">Annual cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-sm text-muted-foreground">On-time delivery rate</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The unified cloud ERP platform transformed the manufacturer's operational capabilities
              and competitive position. Order processing time dropped from 18 days to 8.6 days—a 52%
              improvement—as real-time inventory visibility eliminated material shortages and
              enabled more efficient production scheduling. On-time delivery rates improved from 68%
              to 96%, with customer satisfaction scores increasing by 28 points as the company
              consistently met delivery commitments.
            </p>
            <p>
              Supply chain optimization delivered immediate financial benefits. Inventory carrying
              costs decreased by $4.7 million annually as the company could now balance stock levels
              across facilities and reduce safety stock requirements. The unified platform enabled
              centralized procurement, leveraging the company's global scale to negotiate better
              supplier terms and saving an additional $3.2 million annually. Combined with reduced
              IT maintenance costs, the total annual savings exceeded $6.2 million.
            </p>
            <p>
              Operational efficiency gains extended beyond cost savings. Production planning cycles
              that previously required two weeks of manual data gathering and spreadsheet analysis
              now completed in hours with automated reporting and analytics. The company could
              respond rapidly to demand fluctuations, shifting production between facilities based
              on capacity and proximity to customers. This flexibility proved invaluable during
              supply chain disruptions, allowing the manufacturer to maintain operations while
              competitors struggled.
            </p>
            <p>
              Perhaps most significantly, the unified ERP platform accelerated the company's growth
              strategy. Integration of newly acquired facilities—previously a 12-18 month
              ordeal—now completed in 8-12 weeks using standardized migration playbooks. The
              manufacturer completed three acquisitions in the two years following ERP
              modernization, growing revenue by 34% while maintaining operational excellence. The
              ERP transformation evolved from a technology project into a strategic enabler of
              profitable growth and market leadership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your manufacturing operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build an ERP platform that drives efficiency and enables growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-black hover:bg-black/90">
              Get in touch
            </Button>
            <Link href="/solutions/legacy-modernization">
              <Button size="lg" variant="outline" className="rounded-full">
                Learn more about Legacy Modernization
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-white border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full" />
                <span className="font-bold text-xl">NEXDYNE TECHNOLOGIES</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Digital solutions that set you apart. Your strategic partner for digital
                transformation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {relatedServices.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link}>
                      <a className="text-sm text-muted-foreground hover:text-foreground">
                        {service.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.link}>
                      <a className="text-sm text-muted-foreground hover:text-foreground">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Partners</h3>
              <ul className="space-y-2">
                {partners.map((partner, index) => (
                  <li key={index}>
                    <Link href={partner.link}>
                      <a className="text-sm text-muted-foreground hover:text-foreground">
                        {partner.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 NEXDYNE TECHNOLOGIES. All rights reserved. Crafting next-gen IT solutions that
            exceed expectations.
          </div>
        </div>
      </footer>
    </div>
  );
}
