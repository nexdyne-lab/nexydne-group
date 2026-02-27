import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ContentServicePlatform() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-blue-600">Services</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data solutions</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Content Service Platform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Maroon background with split layout */}
      <section className="bg-gradient-to-br from-rose-900 to-rose-800 text-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">
                Content Service Platform
              </h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Streamline how your organization creates, manages, and distributes digital content. Centralized governance meets federated access—your teams get what they need without sacrificing security or compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Contact Person */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Left: Contact Person */}
            <div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-200 rounded-full transform -rotate-12 w-48 h-48"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <div className="w-32 h-32 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-charcoal mb-4">Want to learn more?</p>
              <Button variant="outline" className="w-full border-slate-300">
                Ask Martijn Voorveld
              </Button>
            </div>

            {/* Right: Benefits */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-12">The benefits</h2>
              
              <div className="space-y-12">
                {/* Benefit 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      Instant knowledge access
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Employees find the documents, media, and data they need in seconds—no more hunting through shared drives or outdated folders.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      Built-in compliance safeguards
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Automated audit logging and role-based permissions keep sensitive information protected while meeting GDPR, HIPAA, and SOC 2 requirements.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      Single-source-of-truth versioning
                    </h3>
                    <p className="text-lg text-charcoal/80">
                      Everyone works from the latest approved version. No more email attachments labeled "final_v3_FINAL_revised.docx" causing costly mistakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Explanation Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            Content Service Platform = unified content control
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-charcoal/80">
              Your organization produces thousands of unstructured files every week: contracts, presentations, videos, design assets, email threads, and more. When this content lives in disconnected silos—local drives, SharePoint sites, Dropbox folders, email inboxes—teams waste hours searching for information and compliance risks multiply.
            </p>

            <p className="text-lg text-charcoal/80">
              Unlike legacy document management systems that force you to migrate everything into one monolithic repository, modern Content Service Platforms connect to content wherever it lives. We implement a federated architecture that indexes and governs distributed content without disrupting existing workflows or requiring expensive data migrations.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl font-bold text-rose-900 mb-6">
            "Deliver the right content, to the right people, at the right moment."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            Martijn Voorveld - Commercial Lead - NEXDYNE TECHNOLOGIES
          </p>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            NEXDYNE & Alfresco
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              As an Alfresco certified implementation partner, NEXDYNE brings deep expertise in enterprise content management to US organizations. Our methodology starts with content discovery workshops—we map your existing repositories, understand approval workflows, and identify compliance gaps. Then we configure Alfresco's intelligent content services layer to sit on top of your current systems, adding AI-powered search, automated classification, and granular access controls without forcing migration. We integrate with Microsoft 365, Google Workspace, Salesforce, and your line-of-business applications so content flows seamlessly across your tech stack. Our US-based team provides white-glove implementation, user training, and ongoing managed services—you get a single point of contact for licensing, hosting, and support instead of juggling multiple vendors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Person */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-subtle)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Person Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300 rounded-full transform rotate-12 w-64 h-64 left-1/4"></div>
              <div className="relative w-full max-w-md">
                <div className="w-full h-96 bg-slate-200 flex items-center justify-center">
                  <div className="w-48 h-48 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right: CTA Content */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Want to learn more?
              </h2>
              <p className="text-xl text-charcoal mb-2">Martijn Voorveld</p>
              <p className="text-lg text-charcoal/80 mb-8">Commercial Lead</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  Get in touch
                </Button>
                <Button variant="outline" className="border-slate-900 text-charcoal hover:bg-slate-100">
                  Schedule a meeting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Agentic AI */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Partners</p>
            <h2 className="text-4xl font-bold text-charcoal">Agentic AI</h2>
          </div>

          <div className="mb-8">
            <Button variant="outline" className="border-slate-300">
              All partners
            </Button>
          </div>

          {/* Partner Logos Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 hover:bg-slate-100 rounded-full">
                <svg className="w-6 h-6 text-muted-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-full">
                <svg className="w-6 h-6 text-muted-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-slate-200 rounded-lg p-12 flex items-center justify-center bg-white hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2">Glean</h3>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-12 flex items-center justify-center bg-white hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2">Weaviate</h3>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg p-12 flex items-center justify-center bg-white hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-rose-900 mb-2">LangChain</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="/content-platform-hero.cce565e4.jpg" 
                alt="NEXDYNE Office" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why NEXDYNE
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Need a strategic partner who understands both technology and business transformation? NEXDYNE delivers enterprise-grade digital solutions that keep you ahead of competitors. Our US-based teams combine deep technical expertise with practical implementation experience—we don't just architect systems, we ensure they drive measurable business outcomes.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Cases</p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl">
              Real organizations solving real challenges with measurable results. These case studies show how content platforms transform operations and drive ROI.
            </p>
          </div>

          <div className="mb-8">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              All cases
            </Button>
          </div>

          {/* Case Cards Carousel */}
          <div className="relative">
            <div className="flex items-center justify-end gap-4 mb-8">
              <button className="p-2 hover:bg-slate-200 rounded-full">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 hover:bg-slate-200 rounded-full">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Case 1 */}
              <Link href="/cases/media-company-dam">
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="/media-company-dam.37682232.jpg" 
                      alt="Media Company DAM" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Media Company Centralizes 2M Assets with DAM Platform
                    </h3>
                    <p className="text-charcoal/80 mb-4">
                      Unified digital asset library for video, audio, and image content across 12 production teams and 40 distribution channels.
                    </p>
                    <div className="flex items-center text-blue-500 font-semibold">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Case 2 */}
              <Link href="/cases/retail-product-content">
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="/retail-product-content.ea3f1144.jpg" 
                      alt="Retail Product Content" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Retailer Launches Products 60% Faster with Content Platform
                    </h3>
                    <p className="text-charcoal/80 mb-4">
                      Automated product content workflows across 15,000 SKUs, 8 regional websites, and print catalogs.
                    </p>
                    <div className="flex items-center text-blue-500 font-semibold">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Case 3 */}
              <Link href="/cases/healthcare-content-compliance">
                <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="/healthcare-content-compliance.fa997d8d.jpg" 
                      alt="Healthcare Content Compliance" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-blue-500 transition-colors">
                      Healthcare System Ensures Compliance with Content Workflows
                    </h3>
                    <p className="text-charcoal/80 mb-4">
                      Automated approval workflows for patient education materials across 18 languages and 25 facilities.
                    </p>
                    <div className="flex items-center text-blue-500 font-semibold">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation Footer */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container max-w-4xl">
          <h3 className="text-2xl font-bold text-charcoal mb-8">Services</h3>
          
          <div className="space-y-4">
            <Link href="/solutions/data-strategy">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal group-hover:text-blue-500 transition-colors">Data Strategy</h4>
                  <p className="text-muted-foreground">Define what data matters and how to monetize it. We map your data landscape and build roadmaps that align analytics with business priorities.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <Link href="/solutions/data-platform">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal group-hover:text-blue-500 transition-colors">Data Platform</h4>
                  <p className="text-muted-foreground">Modern data warehouses and lakes built on cloud infrastructure. Scalable architectures that ingest, transform, and serve data at enterprise scale.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <Link href="/solutions/data-visualization">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal group-hover:text-blue-500 transition-colors">Data visualization</h4>
                  <p className="text-muted-foreground">Real-time dashboards and analytics interfaces that surface insights when decisions get made. Executive scorecards and operational metrics that drive action.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <Link href="/solutions/data-training">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal group-hover:text-blue-500 transition-colors">Data Training</h4>
                  <p className="text-muted-foreground">Give your employees the knowledge and skills they need to get data under control, from newbie to boss level.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <h4 className="text-lg font-semibold text-charcoal">Content Service Platform</h4>
                <p className="text-muted-foreground">Streamline how your organization creates, manages, and distributes digital content. Centralized governance meets federated access.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-500" />
            </div>

            <Link href="/solutions/data-governance">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal group-hover:text-blue-500 transition-colors">Data Governance</h4>
                  <p className="text-muted-foreground">Access controls, compliance frameworks, and data quality monitoring. Ensure teams get the data they need while maintaining security and compliance.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
