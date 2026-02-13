import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Shield, Layers, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataPlatform() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Platform' }
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
              Data Platform
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              A data-driven organization needs a solid foundation. We build the platform that fits your data ambitions—scalable, secure, and future-proof.
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
                <Database className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Single source of truth</h3>
              <p className="text-gray-700 leading-relaxed">
                Bring all your data together in one place. This creates a reliable foundation that your entire organization can trust and depend on.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Layers className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable & flexible</h3>
              <p className="text-gray-700 leading-relaxed">
                As your ambitions grow, so does your platform. From initial insights to advanced AI applications, you have a foundation that scales.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Technology-agnostic</h3>
              <p className="text-gray-700 leading-relaxed">
                We choose the technology that best matches your needs, budget, and existing infrastructure—without vendor lock-in or limitations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Built for independence</h3>
              <p className="text-gray-700 leading-relaxed">
                We build platforms and equip your team with knowledge to manage them. You stay in control, but we're here if you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding Data Platforms</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Your command center for data
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              A modern data platform is about much more than storage. It's your command center, where data comes together and can be put to good use. A bedrock for all the data and AI initiatives in your organization. A reliable technical ecosystem that can serve as a data warehouse, data lake, or data mesh—whatever your organization needs.
            </p>
            <p>
              We set up the technical infrastructure and data architecture, integrate applications, handle data migration, and build automated data pipelines. Data quality, governance, and security are at the heart of the process. Because without high-quality data, your data solution will never deliver value. The platform handles the heavy lifting—database management, user authentication, API integration, security protocols, and deployment infrastructure—so your teams can focus on extracting insights and driving business value.
            </p>
            <p>
              Multiple specialists work on implementation: data architects design the overarching structure, infrastructure professionals assemble the technical foundation, and data engineers build the pipelines and monitor data quality. The platform is set up after the strategy phase, providing a springboard to further data-driven solutions. A solid data platform helps you get started effectively with dashboards, analytics, and AI.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#2D5BFF] p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-gray-700 mb-4">
              "Our data was scattered across dozens of systems—sales in Salesforce, operations in ERP, customer behavior in Google Analytics. NexDyne built a unified data platform that brings everything together. Now our teams can answer questions in minutes that used to take weeks of manual data gathering and reconciliation."
            </p>
            <p className="font-semibold text-gray-900">IT Manager, Manufacturing Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8">
              Building your data foundation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Data platforms aren't one-size-fits-all. We design and build platforms that align with your specific business requirements, data landscape, and technical capabilities—creating a foundation that supports your current needs while enabling future growth.
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
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Architect & Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding your data sources, use cases, and technical constraints. Our architects design a platform architecture that balances performance, cost, and maintainability. We select the optimal technology stack—cloud platforms (AWS, Azure, GCP), data storage solutions (data warehouses, lakes, lakehouses), and integration tools—based on your specific requirements rather than vendor preferences. The design includes data modeling, security architecture, and scalability planning.
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
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Build & Integrate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our engineers implement the infrastructure, configure security and access controls, and build automated data pipelines that ingest data from your source systems. We handle data transformation, quality validation, and error handling—ensuring data arrives in the platform clean, consistent, and ready for analysis. Integration with existing applications happens through APIs, batch processes, or real-time streaming depending on your requirements. We migrate historical data carefully, validating accuracy at every step.
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
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enable & Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  We train your teams to use and manage the platform effectively. This includes technical training for data engineers and IT staff, as well as end-user training for business analysts and data consumers. We document the architecture, data models, and operational procedures. Monitoring and alerting systems ensure you're aware of issues before they impact users. We provide ongoing support during the initial months, gradually transitioning full ownership to your team while remaining available for guidance and enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Platform Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive data infrastructure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Ingestion & Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Automated pipelines that connect to databases, APIs, file systems, and SaaS applications. Real-time streaming or batch processing depending on your needs. Built-in error handling and data validation.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Storage & Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Scalable storage solutions optimized for your data types and access patterns. Support for structured, semi-structured, and unstructured data. Efficient data organization and partitioning for performance.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Transformation & Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                ETL/ELT processes that clean, standardize, and enrich data. Data quality monitoring and validation rules. Master data management and deduplication capabilities.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Security & Governance</h3>
              <p className="text-gray-700 leading-relaxed">
                Role-based access controls and data encryption. Audit logging and compliance reporting. Data lineage tracking and metadata management for transparency and trust.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Analytics & BI Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless connectivity to analytics tools, dashboards, and reporting platforms. Optimized data models for fast query performance. Support for self-service analytics.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Monitoring & Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                Real-time monitoring of pipeline health and data freshness. Automated alerting for failures or anomalies. Performance optimization and cost management tools.
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
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-strategy" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Define your data vision and roadmap before building the platform—ensuring technology investments align with business objectives.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-governance" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Governance
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Establish policies, processes, and controls that ensure your data platform delivers reliable, secure, and compliant data.
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
            Ready to build your data platform?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how a modern data platform can unify your data and accelerate insights across your organization.
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
