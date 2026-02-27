import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function BankCoreModernization() {
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
        className="relative bg-gradient-to-br from-base to-base text-white py-24"
        style={{
          backgroundImage: "url('/legacy-case-banking.d2221bc4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-base/95 to-base/95" />
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
            <span>Regional Bank Modernizes Core Banking Platform</span>
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
              Regional Bank Modernizes Core Banking Platform
            </h1>
            <p className="text-xl leading-relaxed">
              Legacy mainframe migration to cloud-native architecture reduces processing time by 67%
              and cuts infrastructure costs by $3.8M annually.
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
              A regional bank serving 850,000 customers across seven states faced a critical
              inflection point. Their core banking platform—originally deployed in 1998 on IBM
              mainframe infrastructure—had become a strategic liability. The system processed 2.4
              million transactions daily but required 18 hours of overnight batch processing to
              reconcile accounts and update balances. Customers couldn't see real-time account
              activity, and the bank couldn't launch new products without months of COBOL
              development work.
            </p>
            <p>
              The technology debt had accumulated to crisis levels. The bank employed only three
              developers who understood the legacy COBOL codebase, with two approaching retirement.
              Annual mainframe licensing and maintenance costs exceeded $5.2 million, while
              competitors with modern cloud platforms operated at a fraction of that cost. Customer
              satisfaction scores had declined for three consecutive years, with mobile banking
              functionality lagging industry standards by at least five years.
            </p>
            <p>
              Leadership recognized that incremental improvements wouldn't suffice. The bank needed a
              complete platform transformation—migrating decades of business logic, customer data,
              and transaction history to a modern, cloud-native architecture. The stakes were
              existential: fail to modernize, and the bank would lose customers to digital-first
              competitors; execute poorly, and a failed migration could trigger regulatory
              intervention and catastrophic data loss.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              NEXDYNE partnered with the bank to design and execute a phased modernization strategy
              that balanced risk mitigation with speed to value. Rather than attempting a "big bang"
              migration, the team architected a strangler fig pattern—gradually replacing mainframe
              functionality with cloud-native microservices while maintaining system stability
              throughout the transition.
            </p>
            <p>
              The solution centered on a modern core banking platform built on AWS, leveraging
              containerized microservices, event-driven architecture, and real-time data streaming.
              NEXDYNE's team reverse-engineered 2.8 million lines of COBOL code, documenting
              business rules and data flows before translating them into modern Java and Python
              services. The new architecture separated core banking functions—account management,
              transaction processing, interest calculation—into independent services that could be
              deployed, scaled, and updated without system-wide downtime.
            </p>
            <p>
              The migration proceeded in carefully orchestrated waves over 14 months. NEXDYNE built
              a sophisticated data synchronization layer that kept mainframe and cloud systems in
              sync during the transition, allowing the bank to validate new functionality against
              legacy behavior before cutting over customer segments. The team conducted extensive
              parallel processing tests, comparing millions of transactions between old and new
              systems to ensure perfect accuracy before go-live.
            </p>
            <p>
              Beyond technical migration, NEXDYNE established modern DevOps practices, CI/CD
              pipelines, and comprehensive monitoring infrastructure. The bank's development team
              received intensive training in cloud-native development, microservices architecture,
              and agile methodologies—transforming from mainframe maintainers into modern software
              engineers capable of rapid innovation.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">67%</div>
              <div className="text-sm text-muted-foreground">Faster transaction processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$3.8M</div>
              <div className="text-sm text-muted-foreground">Annual cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-sm text-muted-foreground">System uptime achieved</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The modernized core banking platform transformed the bank's operational capabilities
              and competitive position. Transaction processing time dropped from 18 hours to 6
              hours—a 67% improvement—with a clear path to real-time processing as the final
              mainframe components are retired. Customers now see account updates within seconds
              rather than waiting until the next business day, dramatically improving the mobile
              banking experience.
            </p>
            <p>
              Infrastructure costs decreased by $3.8 million annually, with cloud-based architecture
              eliminating expensive mainframe licensing fees and reducing data center footprint by
              40%. The bank reinvested these savings into customer-facing innovation, launching three
              new digital products in the first year post-migration—more than the previous five
              years combined.
            </p>
            <p>
              System reliability exceeded expectations, with the new platform achieving 99.94%
              uptime during the first 12 months—surpassing the mainframe's 99.87% historical
              average. The bank experienced zero data loss incidents during migration, and customer
              complaints related to system performance dropped by 58%. Customer satisfaction scores
              reversed their three-year decline, improving by 12 points as mobile banking
              functionality reached parity with digital-native competitors.
            </p>
            <p>
              Perhaps most significantly, the bank's technology team transformed from a maintenance
              organization into an innovation engine. Development velocity increased by 340%, with
              new features moving from concept to production in weeks rather than months. The bank
              can now respond rapidly to regulatory changes, competitive threats, and customer
              demands—turning technology from a constraint into a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize your legacy systems?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's transform your IT infrastructure and unlock new possibilities for growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-charcoal hover:bg-charcoal/90">
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
