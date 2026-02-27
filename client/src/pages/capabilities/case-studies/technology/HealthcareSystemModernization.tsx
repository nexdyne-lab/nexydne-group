import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function HealthcareSystemModernization() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Regional Healthcare System Modernizes Core Technology | Case Study" 
        description="How a 12-hospital healthcare system modernized legacy infrastructure while maintaining 24/7 operations."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-charcoal text-white pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link href="/capabilities/technology/case-studies" className="inline-flex items-center text-sm text-muted-foreground/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Technology Case Studies
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              CASE STUDY
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight eb-garamond">
            Regional Healthcare System Modernizes Core Technology
          </h1>
          
          <p className="text-xl text-muted-foreground/50 mb-8 leading-relaxed">
            How a 12-hospital healthcare system modernized legacy infrastructure while maintaining 24/7 operations.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground/70">
            <span>Healthcare</span>
            <span>•</span>
            <span>$1.8B Revenue</span>
            <span>•</span>
            <span>24-Month Engagement</span>
          </div>
        </div>
      </section>
      
      {/* Key Results Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-sm opacity-80">Infrastructure Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-sm opacity-80">System Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm opacity-80">Faster Deployment Cycles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-sm opacity-80">Unplanned Downtime</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-charcoal mt-8 mb-6 eb-garamond">The Challenge</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              A regional healthcare system operating 12 hospitals and 85 outpatient facilities faced a technology crisis. Their core clinical and administrative systems ran on aging infrastructure that was increasingly difficult and expensive to maintain. System outages were becoming more frequent, threatening patient care and regulatory compliance.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The organization needed to modernize their technology foundation while maintaining 24/7 operations across all facilities. Any significant downtime could impact patient care, violate HIPAA requirements, and damage the organization's reputation in a competitive market.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Previous modernization attempts had stalled due to the complexity of healthcare IT environments, resistance from clinical staff, and concerns about disrupting patient care. Leadership needed a new approach that could deliver results without unacceptable risk.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">Our Approach</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We designed a phased modernization program that prioritized stability and safety while progressively transforming the technology landscape.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 1: Assessment and Stabilization (Months 1-4)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Before any modernization, we focused on stabilizing the existing environment. We conducted a comprehensive assessment of all systems, identifying critical vulnerabilities and single points of failure. We implemented immediate fixes for the highest-risk issues while planning longer-term solutions.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              This phase also established the governance framework for the program, including clinical advisory committees, change management processes, and communication protocols. Getting clinical leadership engaged early was essential for success.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 2: Foundation Modernization (Months 5-12)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We built a modern hybrid cloud foundation that could support both existing applications and future cloud-native development. This included: private cloud infrastructure for sensitive clinical data, public cloud integration for less sensitive workloads, modern networking with software-defined capabilities, enhanced security controls meeting healthcare compliance requirements.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The foundation was built in parallel with existing systems, allowing thorough testing before any migration. We established automated testing and deployment pipelines that would accelerate future changes while reducing risk.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 3: Application Migration (Months 13-20)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              With the foundation in place, we migrated applications in carefully planned waves. Each wave followed a rigorous process: detailed planning with clinical stakeholders, environment preparation and testing, migration execution during low-usage windows, intensive monitoring and support post-migration.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              We prioritized applications based on business impact and technical readiness. Less critical systems moved first, allowing the team to refine processes before tackling mission-critical clinical applications.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-10 mb-4">Phase 4: Optimization and Enablement (Months 21-24)</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The final phase focused on optimizing the new environment and enabling the organization to maintain and evolve it independently. We implemented advanced monitoring and automation, trained IT staff on new technologies and processes, and established ongoing optimization programs for cost and performance.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">The Results</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              The modernization program delivered transformative results across multiple dimensions:
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Reliability:</strong> System availability improved to 99.99%, with zero unplanned downtime affecting patient care during or after the migration. The new infrastructure provides automatic failover and disaster recovery capabilities that the legacy environment lacked.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Cost Efficiency:</strong> Infrastructure costs decreased 40% through consolidation, cloud optimization, and elimination of expensive legacy maintenance contracts. These savings fund ongoing innovation investments.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Agility:</strong> New application deployments that previously took weeks now complete in hours. This enables rapid response to clinical needs and regulatory requirements.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Security:</strong> The modernized environment provides stronger security controls, better visibility into threats, and improved compliance posture. The organization passed their most recent HIPAA audit with zero findings.
            </p>
            
            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 eb-garamond">Key Success Factors</h2>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Clinical Partnership:</strong> We treated clinical leaders as partners, not stakeholders to be managed. Their input shaped every major decision, and their support was essential for organizational adoption.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Risk-Based Prioritization:</strong> We focused first on reducing risk, then on delivering benefits. This approach built confidence and created a foundation for more ambitious changes.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Rigorous Change Management:</strong> Every change followed documented processes with appropriate approvals, testing, and rollback plans. This discipline prevented the disruptions that had derailed previous efforts.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              <strong>Knowledge Transfer:</strong> We invested heavily in training and documentation, ensuring the organization could maintain and evolve the new environment independently.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-charcoal mb-8 eb-garamond">Related Case Studies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cases/healthcare-cloud-migration" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">HEALTHCARE</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  Healthcare Cloud Migration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Multi-hospital system's journey to cloud infrastructure.
                </p>
              </div>
            </Link>
            
            <Link href="/cases/bank-core-modernization" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">FINANCIAL SERVICES</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  Bank Core Modernization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regional bank modernizes core banking platform.
                </p>
              </div>
            </Link>
            
            <Link href="/cases/manufacturing-erp-modernization" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">MANUFACTURING</span>
                <h3 className="text-lg font-bold text-charcoal mt-3 mb-2 group-hover:text-primary transition-colors">
                  Manufacturing ERP Modernization
                </h3>
                <p className="text-sm text-muted-foreground">
                  Industrial manufacturer upgrades enterprise systems.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4 eb-garamond">Ready to Modernize Your Technology?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experts can help you plan and execute technology transformation with minimal risk.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-primary text-white font-semibold hover:bg-base transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
