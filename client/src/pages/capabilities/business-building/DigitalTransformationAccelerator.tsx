import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function DigitalTransformationAccelerator() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <SEO 
        title="Digital Transformation Accelerator" 
        description="Transform your technology foundation with right-sized enterprise architecture, cloud migration strategies, data platforms, and API integration frameworks."
        canonical="/capabilities/business-building/digital-transformation-accelerator"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'Digital Transformation Accelerator' }
      ]} />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                Digital Transformation<br />Accelerator
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Transform your technology foundation with right-sized enterprise architecture, cloud migration strategies, data platforms, and API integration frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/digital-transformation-abstract.jpg" 
                alt="Digital Transformation Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thesis Statement - DZ10: Subtle gray bg */}
      <section className="dz-section bg-[#F5F5F5]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
              "Technology transformation isn't about adopting the latest tools—it's about building the right architecture to support sustainable growth at scale."
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
              We architect technology foundations that evolve with your business, not against it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Context */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-32">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-6">The Architecture Gap</h3>
                <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Most mid-market companies inherit technology stacks that were never designed for scale. Legacy systems accumulate through organic growth, acquisitions, and tactical decisions, creating fragmented architectures that slow innovation and increase operational risk.
                </p>
                <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Enterprise-grade architecture requires specialized expertise that most mid-market companies cannot afford to maintain in-house. Without proper architecture, technology investments fail to deliver expected returns, integration projects spiral out of control, and technical debt compounds exponentially.
                </p>
                <div className="h-1 w-20 bg-[#0077B5]"></div>
              </div>
            </motion.div>

            {/* Right Column: Solution */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl leading-relaxed text-[#1A1A1A] font-medium mb-6">
                  NexDyne delivers <strong>enterprise architecture frameworks</strong> specifically calibrated for mid-market scale. We don't impose Fortune 500 complexity—we design right-sized architectures that provide enterprise capabilities without enterprise overhead.
                </p>
                <p className="text-lg leading-relaxed text-[#1A1A1A]/70">
                  Our Digital Transformation Accelerator combines strategic architecture planning, cloud migration execution, data platform design, and API integration frameworks into a comprehensive modernization program. We transform fragmented technology landscapes into cohesive, scalable platforms that support rapid business evolution.
                </p>
              </motion.div>

              <div className="h-px bg-[#E5E5E5]" />

              {/* Core Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="capabilities"
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] eb-garamond">Core Capabilities</h2>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Enterprise Architecture Design</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      We design enterprise architecture frameworks that balance standardization with flexibility. Our approach maps business capabilities to technology components, identifies integration patterns, and establishes governance structures that prevent architectural drift. The result is a coherent technology blueprint that guides investment decisions and ensures new systems integrate seamlessly with existing infrastructure.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Cloud Migration Strategy</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      Our cloud migration methodology prioritizes business continuity while maximizing cloud benefits. We assess workload suitability, design hybrid architectures, and execute phased migrations that minimize disruption. Whether moving to AWS, Azure, or Google Cloud, we implement cloud-native patterns that reduce infrastructure costs while improving scalability, reliability, and security.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Data Platform Engineering</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      We build modern data platforms that unify fragmented data sources into cohesive analytics infrastructure. Our platforms combine data warehousing, real-time streaming, and machine learning pipelines to support both operational reporting and advanced analytics. We implement data governance frameworks that ensure quality, security, and compliance while enabling self-service analytics for business teams.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">API Integration Frameworks</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      Our API integration frameworks transform brittle point-to-point integrations into scalable, maintainable architectures. We design RESTful and event-driven APIs that enable seamless data flow between systems, implement API gateways for security and monitoring, and establish integration patterns that accelerate future system additions. This foundation supports rapid business process automation and partner ecosystem development.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-[#E5E5E5]" />

              {/* Implementation Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] eb-garamond">Implementation Framework</h2>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 1: Architecture Assessment (Weeks 1-3)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We conduct comprehensive architecture assessments to understand current state, identify gaps, and define target architecture. This phase establishes the transformation roadmap and prioritizes initiatives based on business impact and technical dependencies.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Current state architecture documentation and gap analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Target architecture design and technology selection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Transformation roadmap development and prioritization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 2: Foundation Build (Weeks 4-12)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We establish core architecture components including cloud infrastructure, data platforms, and integration frameworks. This phase focuses on building stable foundations that support subsequent business capability migrations.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Cloud infrastructure provisioning and security configuration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Data platform deployment and pipeline development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>API gateway implementation and integration patterns</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 3: Capability Migration (Weeks 13-24)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We execute phased migrations of business capabilities to the new architecture. Each migration follows proven patterns that minimize disruption while delivering immediate value through improved performance, reliability, and functionality.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Workload migration execution with rollback capabilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>System integration and data synchronization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Performance optimization and monitoring implementation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 4: Optimization & Governance (Ongoing)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We establish continuous improvement processes and governance frameworks that maintain architectural integrity as your business evolves. This includes architecture review boards, technology standards, and ongoing optimization programs.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Architecture governance framework and review processes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Cost optimization and performance tuning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Technology radar and continuous modernization planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes - DZ10: Subtle gray bg */}
      <section className="dz-section bg-[#F5F5F5]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 md:mb-12 eb-garamond">Expected Outcomes</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-4">40-60%</div>
                <div className="text-lg font-semibold text-[#1A1A1A] mb-2">Infrastructure Cost Reduction</div>
                <p className="text-[#1A1A1A]/70">
                  Through cloud optimization, workload right-sizing, and automated scaling
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-4">70%</div>
                <div className="text-lg font-semibold text-[#1A1A1A] mb-2">Faster Integration Delivery</div>
                <p className="text-[#1A1A1A]/70">
                  Standardized API frameworks accelerate new system integrations
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-4">99.9%</div>
                <div className="text-lg font-semibold text-[#1A1A1A] mb-2">System Availability</div>
                <p className="text-[#1A1A1A]/70">
                  Enterprise-grade reliability through redundancy and automated failover
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Ecosystem - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 md:mb-12 eb-garamond">Technology Ecosystem</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 group-hover:text-[#0077B5] transition-colors">Cloud Platforms</h3>
                <div className="space-y-3 text-[#1A1A1A]/70">
                  <p>• AWS (Amazon Web Services)</p>
                  <p>• Microsoft Azure</p>
                  <p>• Google Cloud Platform</p>
                  <p>• Hybrid & Multi-cloud Architectures</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 group-hover:text-[#0077B5] transition-colors">Data Platforms</h3>
                <div className="space-y-3 text-[#1A1A1A]/70">
                  <p>• Snowflake, Databricks, BigQuery</p>
                  <p>• Apache Kafka, Kinesis</p>
                  <p>• dbt, Airflow, Prefect</p>
                  <p>• Looker, Tableau, Power BI</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 group-hover:text-[#0077B5] transition-colors">Integration Technologies</h3>
                <div className="space-y-3 text-[#1A1A1A]/70">
                  <p>• Kong, Apigee, AWS API Gateway</p>
                  <p>• MuleSoft, Dell Boomi</p>
                  <p>• GraphQL, REST, gRPC</p>
                  <p>• Event-driven architectures</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6 group-hover:text-[#0077B5] transition-colors">DevOps & Monitoring</h3>
                <div className="space-y-3 text-[#1A1A1A]/70">
                  <p>• Terraform, CloudFormation</p>
                  <p>• Kubernetes, Docker</p>
                  <p>• Datadog, New Relic, Splunk</p>
                  <p>• GitHub Actions, GitLab CI/CD</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - DZ10: Deep Navy bg */}
      <section className="dz-section bg-[#051C2C]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">
              Ready to Modernize Your Technology Foundation?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how our Digital Transformation Accelerator can eliminate technical debt and build the architecture your business needs to scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="dz-btn-primary bg-[#0077B5] hover:bg-[#005a8c] group">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/capabilities/business-building">
                <button className="px-7 py-3.5 border border-white/20 rounded text-white font-semibold hover:bg-white/10 transition-all">
                  View All Capabilities
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
