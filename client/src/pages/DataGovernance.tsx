import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileCheck, Lock, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataGovernance() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Governance' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Data Governance
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Work efficiently and securely with maximum control over access, compliance, and version control. Ensure the right information reaches the right people at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <FileCheck className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">One version of truth</h3>
              <p className="text-gray-700 leading-relaxed">
                No more fragmentation of data across different systems. Everyone works with the same data and reaches the same conclusions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compliance assured</h3>
              <p className="text-gray-700 leading-relaxed">
                GDPR? Other data regulations? Check. Data governance ensures you're compliant with all relevant laws—and stay that way.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Lock className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Controlled access</h3>
              <p className="text-gray-700 leading-relaxed">
                Who has access to what? You record that. Prevent sensitive data from ending up in the wrong hands and know exactly who's responsible.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable & flexible</h3>
              <p className="text-gray-700 leading-relaxed">
                New colleagues and systems? Operational in no time. Data governance makes your organization flexible and ready for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding Data Governance</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The foundation for data maturity
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              Data governance goes beyond just setting rules about who can view and use which data. It's about insight into your entire business: what do you have, where is it, who uses it, and is it all correct? Because without that foundation you get nowhere. You can build the most beautiful AI models, but if your data isn't in order, it remains a house of cards ready to collapse.
            </p>
            <p>
              Is your data governance not in order? Then you're dealing with teams doing double work, unreliable data, or even data breaches because the wrong person had access to sensitive data. Data governance is forgotten by many companies, but it prevents you from playing catch-up and ensures your data maturity goes up. Strong governance creates trust in data—when users know data is accurate, secure, and properly managed, they're more likely to use it for decision-making.
            </p>
            <p>
              Data governance is not a standalone project, but is interwoven in getting your data in order. First we make sure your data is findable, understandable, and accessible, often through a data platform. Only then do we look at data governance: who is responsible for what, which agreements do we make, and how do we secure that? We guide this entire process—from technology to change management, from policy to adoption in the organization. This means we bring the right people together, deploy tooling smartly, and ensure it doesn't just exist on paper, but actually lands.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#2D5BFF] p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-gray-700 mb-4">
              "We had data quality issues that were costing us real money—incorrect inventory counts, duplicate customer records, compliance violations. NexDyne helped us implement data governance that fixed these problems at the source. Now we have clear ownership, quality standards, and automated validation. Our data is finally trustworthy, and our teams actually use it."
            </p>
            <p className="font-semibold text-gray-900">VP of Operations, Retail Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8">
              Governance that works
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Data governance fails when it's just policies and documentation. We design governance frameworks that balance control with usability—protecting data while enabling teams to work effectively.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Assess & Design Framework</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding your data landscape, regulatory requirements, and business risks. What data do you have? Where is it stored? Who needs access? What regulations apply? We inventory data assets, assess current governance practices, and identify gaps. Then we design a governance framework tailored to your organization—defining roles and responsibilities, data ownership, quality standards, access policies, and compliance procedures. The framework balances security and control with usability and flexibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Implement Controls & Tools</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement technical controls that enforce governance policies—role-based access controls, data classification, encryption, audit logging, and data lineage tracking. Metadata management tools make data findable and understandable. Data quality rules automatically validate incoming data. Master data management ensures consistency across systems. We configure these tools to align with your governance framework, automating enforcement wherever possible to reduce manual overhead and human error.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enable & Sustain</h3>
                <p className="text-gray-700 leading-relaxed">
                  Governance only works if people follow it. We train data stewards, data owners, and end users on their responsibilities and the tools they'll use. We establish governance processes—how data quality issues are reported and resolved, how access requests are approved, how changes to data structures are managed. Regular audits ensure compliance. Metrics track governance effectiveness. We help you establish a data governance council that oversees policies and resolves issues. The goal is sustainable governance that becomes part of how your organization operates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Pillars Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Governance Pillars</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive data governance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Quality Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Define quality standards and implement validation rules. Monitor data quality metrics and establish processes for issue resolution. Ensure data is accurate, complete, and consistent.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Security & Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                Implement access controls, encryption, and audit logging. Ensure compliance with GDPR, CCPA, and industry regulations. Protect sensitive data from unauthorized access.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Ownership & Stewardship</h3>
              <p className="text-gray-700 leading-relaxed">
                Assign clear ownership for data assets. Define responsibilities for data quality, documentation, and access management. Establish accountability for data governance.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Metadata & Data Catalog</h3>
              <p className="text-gray-700 leading-relaxed">
                Document data assets, definitions, and lineage. Make data discoverable through searchable catalogs. Help users understand what data means and where it comes from.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Lifecycle Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Define policies for data retention, archival, and deletion. Ensure compliance with legal requirements. Manage data from creation through retirement.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Change Management & Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Build data governance culture through training and communication. Establish processes for policy updates and tool changes. Ensure governance evolves with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Complete data solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-platform" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Platform
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Governance requires a solid platform foundation. Build the infrastructure that makes data governance policies enforceable and sustainable.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-strategy" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Governance should align with strategy. Define your data vision and roadmap before implementing governance frameworks.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to establish data governance?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how data governance can ensure your data is reliable, secure, and compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#2D5BFF] hover:bg-[#1e40af] text-white">
                Schedule consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
