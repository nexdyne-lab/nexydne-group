import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Bookmark, Database, Layers, Zap, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";

export default function ScalableDataArchitecture() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Building Scalable Data Architectures" 
        description="The architectural patterns and technology choices that enable enterprises to scale data operations from millions to billions of events."
        canonical="/insights/scalable-data-architecture"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/insights">
              <span className="inline-flex items-center text-sm text-charcoal/60 hover:text-primary mb-8 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </span>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Article
              </span>
              <span className="text-sm text-charcoal/60 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              Building scalable data architectures
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-8">
              The architectural patterns and technology choices that enable enterprises to scale data operations from millions to billions of events.
            </p>
            
            <div className="flex items-center justify-between border-t border-b border-base/10 py-6">
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-serif font-bold">NEXDYNE Engineering</p>
                  <p className="text-sm text-charcoal/60 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    September 14, 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-base/5 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-charcoal/60" />
                </button>
                <button className="p-2 hover:bg-base/5 rounded-full transition-colors">
                  <Bookmark className="w-5 h-5 text-charcoal/60" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" 
                alt="Data Center Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Data architecture decisions made today will determine your organization's ability to leverage AI, deliver real-time experiences, and compete in increasingly data-driven markets. Yet many mid-market companies are still operating on data infrastructure designed for a different era—batch processing, siloed warehouses, and manual ETL pipelines that can't keep pace with modern demands.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">The evolution of data architecture</h2>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Data architecture has evolved through distinct generations, each responding to new business requirements and technological capabilities:
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Generation 1: Data Warehouses</strong> — Centralized repositories optimized for structured data and batch analytics. Still valuable for certain use cases, but limited by rigid schemas and slow data ingestion.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Generation 2: Data Lakes</strong> — Flexible storage for structured and unstructured data at any scale. Solved the schema problem but often became "data swamps" without proper governance.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Generation 3: Data Lakehouse</strong> — Combines the flexibility of data lakes with the performance and governance of data warehouses. Enables both analytics and AI workloads on a unified platform.
              </p>

              <div className="bg-subtle p-8 rounded-xl my-12">
                <h3 className="text-xl font-serif font-bold mb-4">Key Insight</h3>
                <p className="text-charcoal/70 leading-relaxed mb-0">
                  Organizations with modern lakehouse architectures process data 10x faster and reduce storage costs by 50% compared to traditional warehouse approaches.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Architectural patterns for scale</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Scaling data operations from millions to billions of events requires deliberate architectural choices. Here are the patterns we've seen succeed across 200+ implementations:
              </p>
            </motion.div>

            {/* Patterns Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 my-12"
            >
              {[
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "Medallion Architecture",
                  description: "Organize data into Bronze (raw), Silver (cleaned), and Gold (business-ready) layers for progressive refinement."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Event Streaming",
                  description: "Use Kafka or similar platforms for real-time data ingestion and processing at scale."
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Separation of Storage & Compute",
                  description: "Decouple storage from compute to scale each independently and optimize costs."
                },
                {
                  icon: <GitBranch className="w-6 h-6" />,
                  title: "Data Mesh Principles",
                  description: "Distribute data ownership to domain teams while maintaining federated governance."
                }
              ].map((pattern, index) => (
                <div key={index} className="bg-base p-6 rounded-xl text-white">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {pattern.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{pattern.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pattern.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Technology selection framework</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Choosing the right technologies for your data platform requires balancing multiple factors: scale requirements, team capabilities, cost constraints, and integration needs. Here's our framework for making these decisions:
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Storage Layer</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                For most mid-market companies, cloud object storage (S3, Azure Blob, GCS) provides the best balance of cost, durability, and scalability. Use open table formats like Delta Lake or Apache Iceberg to add ACID transactions and time travel capabilities.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Processing Layer</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Apache Spark remains the workhorse for batch processing at scale. For streaming, choose between Kafka Streams (simpler, tightly integrated with Kafka) or Apache Flink (more powerful, steeper learning curve) based on your complexity requirements.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Query Layer</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Modern query engines like Databricks SQL, Snowflake, or Trino provide interactive query performance on lakehouse data. Choose based on your existing ecosystem and whether you need a fully managed service or prefer more control.
              </p>

              <div className="bg-primary/10 p-8 rounded-xl my-12 border-l-4 border-primary">
                <p className="text-charcoal/80 leading-relaxed mb-0 italic">
                  "The best data architecture is the one your team can actually operate. Don't optimize for theoretical perfection—optimize for sustainable execution."
                </p>
                <p className="text-charcoal/60 mt-4 mb-0">— NEXDYNE Engineering Team</p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Data governance at scale</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Governance becomes exponentially more important as data volumes grow. Without proper controls, you risk compliance violations, security breaches, and the "data swamp" problem where data becomes unusable due to poor quality and discoverability.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Key governance capabilities to implement:
              </p>

              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li><strong>Data Catalog:</strong> Centralized metadata management that makes data discoverable and understandable.</li>
                <li><strong>Lineage Tracking:</strong> Automated tracking of data flow from source to consumption for debugging and compliance.</li>
                <li><strong>Access Control:</strong> Fine-grained permissions that enforce least-privilege access across all data assets.</li>
                <li><strong>Quality Monitoring:</strong> Automated data quality checks that catch issues before they propagate downstream.</li>
                <li><strong>Privacy Controls:</strong> Masking, tokenization, and anonymization capabilities for sensitive data.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Implementation roadmap</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Modernizing data architecture is a multi-phase journey. We recommend a pragmatic approach that delivers value incrementally:
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 1 (Months 1-3):</strong> Establish cloud data platform foundation. Migrate 2-3 high-value datasets to validate architecture. Implement basic governance controls.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 2 (Months 4-6):</strong> Expand data migration scope. Build self-service analytics capabilities. Implement streaming ingestion for real-time use cases.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                <strong>Phase 3 (Months 7-12):</strong> Enable AI/ML workloads on the platform. Mature governance and quality processes. Decommission legacy systems.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Conclusion</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Building scalable data architecture is no longer optional—it's a prerequisite for competing in data-driven markets. The good news is that modern tools and patterns make it achievable for mid-market companies, not just tech giants. The key is starting with clear business objectives, choosing technologies that match your team's capabilities, and building incrementally rather than attempting a big-bang transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Related Insights"
        items={[
          {
            type: "Article",
            title: "Enterprise transformation in the AI era",
            description: "How leading enterprises are reimagining their operating models to harness AI.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            link: "/insights/enterprise-transformation-ai"
          },
          {
            type: "Whitepaper",
            title: "The modern enterprise integration playbook",
            description: "A comprehensive guide to connecting legacy systems with modern cloud platforms.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
            link: "/insights/enterprise-integration-playbook"
          },
          {
            type: "Case Study",
            title: "Payment processor scales to 50M transactions/day",
            description: "How microservices architecture enabled exponential growth.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            link: "/cases/fintech-microservices"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to modernize your data architecture?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how to build a scalable data platform for your organization.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
