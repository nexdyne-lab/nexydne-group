import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function HealthcareEhrModernization() {
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
          backgroundImage: "url('/legacy-case-healthcare.7db06424.jpg')",
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
            <span>Healthcare Provider Replaces 15-Year-Old EHR System</span>
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
              Healthcare Provider Replaces 15-Year-Old EHR System
            </h1>
            <p className="text-xl leading-relaxed">
              Modern electronic health records platform improves clinician satisfaction by 41% and
              enables real-time patient data access across 28 facilities.
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
              A regional healthcare system operating 28 facilities—including four hospitals, 18
              outpatient clinics, and six urgent care centers—faced mounting pressure from its
              outdated electronic health records (EHR) system. The platform, originally implemented
              in 2008, had become a significant barrier to quality patient care and operational
              efficiency. Clinicians spent an average of 4.2 hours per day navigating the system's
              clunky interface, with 68% reporting that EHR documentation time detracted from
              patient interaction.
            </p>
            <p>
              The legacy system lacked interoperability with modern healthcare technologies.
              Integration with lab systems, imaging platforms, and pharmacy networks required manual
              data entry and reconciliation, creating dangerous opportunities for medication errors
              and duplicate testing. When patients moved between facilities, their records didn't
              follow seamlessly—forcing clinicians to piece together medical histories from
              incomplete data, phone calls, and faxed documents.
            </p>
            <p>
              Physician burnout had reached crisis levels, with annual turnover exceeding 22%—nearly
              double the national average. Exit interviews consistently cited the EHR system as a
              primary frustration. The healthcare system's ability to recruit top clinical talent
              suffered as word spread that competitors offered modern, user-friendly technology. The
              organization faced a stark choice: modernize the EHR infrastructure or risk losing
              both patients and providers to better-equipped competitors.
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
              NEXDYNE partnered with the healthcare system to implement a comprehensive EHR
              modernization program centered on a cloud-based, FHIR-compliant platform. The solution
              prioritized clinician experience, interoperability, and patient safety while
              maintaining strict HIPAA compliance and minimizing disruption to patient care during
              the transition.
            </p>
            <p>
              The team conducted extensive workflow analysis across all 28 facilities, shadowing
              physicians, nurses, and administrative staff to understand how the legacy system
              impacted daily operations. NEXDYNE designed custom workflows tailored to different
              specialties—emergency medicine, primary care, surgery, behavioral health—ensuring the
              new platform supported rather than hindered clinical practice patterns.
            </p>
            <p>
              The new EHR platform integrated seamlessly with the healthcare system's existing
              technology ecosystem. Real-time interfaces connected lab systems, radiology PACS,
              pharmacy management, and billing platforms, eliminating manual data entry and reducing
              error rates. The solution included mobile applications that allowed clinicians to
              access patient records, review test results, and enter orders from anywhere within
              hospital facilities—freeing them from desktop workstations and enabling more time at
              the bedside.
            </p>
            <p>
              NEXDYNE orchestrated a carefully phased rollout over 18 months, beginning with pilot
              implementations at two smaller clinics before expanding to larger facilities. The team
              provided intensive training for 1,847 clinical and administrative staff members,
              combining classroom instruction, hands-on practice environments, and at-the-elbow
              support during go-live periods. Physician champions from each specialty served as
              super-users, providing peer support and feedback to continuously refine workflows.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">41%</div>
              <div className="text-sm text-muted-foreground">
                Improvement in clinician satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2.8hrs</div>
              <div className="text-sm text-muted-foreground">Daily time savings per clinician</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Staff adoption rate</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The modernized EHR platform transformed clinical operations and staff satisfaction
              across the healthcare system. Clinician satisfaction scores improved by 41% within six
              months of full deployment, with physicians reporting that the new system felt
              intuitive and supportive rather than obstructive. Average daily EHR documentation time
              dropped from 4.2 hours to 1.4 hours—a 67% reduction—giving clinicians an additional
              2.8 hours per day for patient care and professional development.
            </p>
            <p>
              Patient safety metrics showed measurable improvement. Medication error rates decreased
              by 34% as automated drug interaction checking and allergy alerts prevented dangerous
              prescribing mistakes. Duplicate lab test orders dropped by 52%, saving the
              organization approximately $1.6 million annually while reducing unnecessary patient
              discomfort. Care coordination between facilities improved dramatically, with complete
              patient records now accessible in real-time across all 28 locations.
            </p>
            <p>
              The healthcare system achieved 89% staff adoption within the first year—exceeding
              industry benchmarks for EHR implementations. Physician turnover declined from 22% to
              14%, with exit interview data showing EHR frustration no longer ranking among top
              departure reasons. Recruitment efforts benefited from the modern technology platform,
              with 73% of newly hired physicians citing the EHR system as a positive factor in their
              decision to join the organization.
            </p>
            <p>
              Beyond operational improvements, the new platform enabled advanced analytics and
              population health management capabilities. The healthcare system can now identify
              at-risk patients, track quality metrics in real-time, and participate in value-based
              care programs that were previously inaccessible with the legacy system. The EHR
              transformation evolved from a technology upgrade into a strategic enabler of
              better patient outcomes and organizational growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize your healthcare IT?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build technology that empowers clinicians and improves patient care.
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
