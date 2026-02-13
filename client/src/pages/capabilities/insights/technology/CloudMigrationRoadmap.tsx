import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Share2, Bookmark, Linkedin, Twitter } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function CloudMigrationRoadmap() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Cloud Migration Roadmap for Mid-Size Companies" 
        description="A practical guide to planning and executing cloud migration without enterprise-level budgets or teams."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link href="/capabilities/technology/insights" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Technology Insights
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-[#00d4ff] uppercase tracking-wider">
              TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight eb-garamond">
            The Cloud Migration Roadmap for Mid-Size Companies
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A practical guide to planning and executing cloud migration without enterprise-level budgets or teams.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>January 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </div>
      </section>
      
      {/* Author Section */}
      <section className="border-b border-gray-200 py-8">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Kim</div>
                  <div className="text-sm text-gray-500">Partner, Technology Practice</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                  AT
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amanda Torres</div>
                  <div className="text-sm text-gray-500">Senior Architect, Cloud</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-serif">
              Cloud migration is no longer optional for mid-size companies. The question is not whether to migrate, but how to do it efficiently without the massive budgets and specialized teams that large enterprises deploy. This guide provides a practical roadmap based on our experience with 80+ mid-market cloud migrations.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">The Mid-Market Cloud Reality</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Mid-size companies face unique challenges in cloud migration. They typically have legacy systems that have grown organically over years, limited IT staff who must maintain operations while executing migration, and budgets that don't allow for the "lift and shift everything" approaches that enterprises use.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Yet they also have advantages. Smaller application portfolios mean faster assessment and planning. Fewer stakeholders enable quicker decision-making. And the business impact of successful migration—improved agility, reduced costs, better security—is proportionally larger.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">The Five-Phase Migration Framework</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 1: Assessment and Strategy (4-6 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Begin with a comprehensive inventory of your current technology landscape. Document every application, database, and integration. For each, assess: business criticality, technical complexity, cloud readiness, and dependencies.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Based on this assessment, categorize applications into migration strategies: Rehost (lift and shift), Replatform (lift and optimize), Refactor (rebuild for cloud), Replace (with SaaS), or Retire (decommission).
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 2: Foundation Building (6-8 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Before migrating applications, establish your cloud foundation. This includes: landing zone architecture with appropriate security controls, network connectivity between cloud and on-premises, identity and access management integration, monitoring and logging infrastructure, and cost management and governance frameworks.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Investing in a solid foundation pays dividends throughout the migration. It reduces security risks, simplifies compliance, and prevents the "cloud sprawl" that drives up costs.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 3: Pilot Migration (4-6 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Select 2-3 applications for initial migration. Choose applications that are important enough to matter but not so critical that failure would be catastrophic. Good pilot candidates are: moderately complex (not trivial, not mission-critical), representative of your broader portfolio, owned by teams willing to participate actively.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The pilot phase is as much about learning as delivery. Document everything: what worked, what didn't, how long things actually took versus estimates. These learnings will inform the broader migration.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 4: Wave Migration (3-12 Months)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Migrate remaining applications in planned waves, typically 3-5 applications per wave. Sequence waves to manage risk and dependencies: start with less critical applications, progress to more critical ones as your team gains experience.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Each wave follows a consistent pattern: detailed planning, environment preparation, migration execution, testing and validation, cutover and stabilization. Standardizing this process improves efficiency and reduces errors.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 5: Optimization (Ongoing)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Migration is not the end—it's the beginning of cloud optimization. Once applications are running in the cloud, focus on: right-sizing resources based on actual usage, implementing auto-scaling for variable workloads, optimizing data storage and transfer costs, and modernizing applications to leverage cloud-native services.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Cost Management Strategies</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cloud costs can spiral quickly without proper governance. Implement these strategies from day one:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Reserved Capacity:</strong> For predictable workloads, commit to 1-3 year reserved instances for 30-60% savings over on-demand pricing.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Spot Instances:</strong> For fault-tolerant workloads, use spot instances for up to 90% savings on compute costs.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Auto-Scaling:</strong> Configure applications to scale down during low-usage periods, particularly nights and weekends.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Storage Tiering:</strong> Move infrequently accessed data to lower-cost storage tiers automatically.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Security Considerations</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cloud migration changes your security model fundamentally. Key considerations include:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Shared Responsibility:</strong> Understand what the cloud provider secures versus what you must secure. This varies by service type.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Identity-Centric Security:</strong> In the cloud, identity is the new perimeter. Implement strong authentication, least-privilege access, and continuous monitoring.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Data Protection:</strong> Encrypt data at rest and in transit. Implement data loss prevention controls. Understand data residency requirements.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Compliance:</strong> Ensure your cloud configuration meets relevant compliance requirements (HIPAA, PCI, SOC 2, etc.). Use cloud-native compliance tools to automate verification.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Common Pitfalls to Avoid</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Lift and Shift Everything:</strong> Simply moving applications to the cloud without optimization often increases costs without improving capabilities. Be selective about what to rehost versus refactor.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Underestimating Data Migration:</strong> Moving large datasets takes longer than expected. Plan for data migration early and test thoroughly.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Ignoring Training:</strong> Cloud requires new skills. Invest in training your team before, during, and after migration.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Skipping the Foundation:</strong> Rushing to migrate applications without proper foundation leads to security gaps, compliance issues, and technical debt.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Insights */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 eb-garamond">Related Insights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/insights/cloud-native-architecture" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">ARCHITECTURE</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Cloud-Native Architecture Patterns
                </h3>
                <p className="text-sm text-gray-600">
                  Design patterns for building scalable, resilient cloud applications.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/ceo-guide-data-modernization" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">DATA</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  CEO's Guide to Data Modernization
                </h3>
                <p className="text-sm text-gray-600">
                  How to transform your data infrastructure for the cloud era.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/building-data-culture" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">CULTURE</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Building a Data-Driven Culture
                </h3>
                <p className="text-sm text-gray-600">
                  Organizational changes needed to maximize technology investments.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 eb-garamond">Ready to Plan Your Cloud Migration?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts can help you develop and execute a cloud strategy tailored to your business.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-[#0077B5] text-white font-semibold hover:bg-[#005885] transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
