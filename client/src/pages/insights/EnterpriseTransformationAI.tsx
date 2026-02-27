import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Bookmark, Cpu, Cloud, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";

export default function EnterpriseTransformationAI() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Enterprise Transformation in the AI Era" 
        description="How leading enterprises are reimagining their operating models to harness AI and achieve sustainable competitive advantage."
        canonical="/insights/enterprise-transformation-ai"
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
                Report
              </span>
              <span className="text-sm text-charcoal/60 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              Enterprise transformation in the AI era
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-8">
              How leading enterprises are reimagining their operating models to harness AI and achieve sustainable competitive advantage.
            </p>
            
            <div className="flex items-center justify-between border-t border-b border-base/10 py-6">
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-serif font-bold">NEXDYNE Research</p>
                  <p className="text-sm text-charcoal/60 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    October 28, 2025
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
                alt="Enterprise AI Transformation" 
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
                The convergence of artificial intelligence, cloud computing, and modern software architectures is fundamentally reshaping how enterprises operate. Organizations that successfully navigate this transformation are achieving 3-5x improvements in operational efficiency while creating entirely new sources of competitive advantage.
              </p>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">The imperative for AI-native architecture</h2>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Traditional enterprise architectures were designed for a world of predictable workloads, batch processing, and human-in-the-loop decision-making. AI changes all of these assumptions. Machine learning models require elastic compute resources that scale with training and inference demands. Real-time AI applications need sub-millisecond latency that legacy architectures cannot deliver. And the volume of data required to train and operate AI systems exceeds what traditional data warehouses can handle.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Our research across 250+ mid-market enterprises reveals that companies attempting to bolt AI onto legacy infrastructure achieve only 15-20% of the potential value. Those that modernize their core architecture first capture 70-80% of AI's potential impact within 18 months.
              </p>

              <div className="bg-subtle p-8 rounded-xl my-12">
                <h3 className="text-xl font-serif font-bold mb-4">Key Finding</h3>
                <p className="text-charcoal/70 leading-relaxed mb-0">
                  Companies with modern cloud-native architectures are 5x more likely to successfully deploy AI at scale compared to those with legacy infrastructure.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Four pillars of AI-ready infrastructure</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Based on our analysis of successful transformations, we've identified four architectural pillars that distinguish AI-ready enterprises:
              </p>
            </motion.div>

            {/* Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 my-12"
            >
              {[
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: "Cloud-Native Foundation",
                  description: "Elastic infrastructure that scales with AI workloads, from model training to real-time inference."
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Unified Data Platform",
                  description: "Modern data architecture that provides consistent, high-quality data for AI training and operations."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "MLOps Maturity",
                  description: "Automated pipelines for model development, deployment, monitoring, and continuous improvement."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "API-First Design",
                  description: "Modular architecture that enables AI capabilities to be embedded across all business processes."
                }
              ].map((pillar, index) => (
                <div key={index} className="bg-base p-6 rounded-xl text-white">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{pillar.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
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
              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">The transformation roadmap</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Successful AI-era transformations follow a deliberate sequence that balances quick wins with foundational investments. Based on our experience guiding 200+ transformations, we recommend a phased approach:
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Phase 1: Foundation (Months 1-6)</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Establish cloud landing zone with security and governance controls. Migrate initial workloads to validate architecture and build team capabilities. Implement data platform foundations that will support AI initiatives.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Phase 2: Modernization (Months 7-12)</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Decompose monolithic applications into microservices. Build CI/CD pipelines and DevOps practices. Establish MLOps infrastructure for model development and deployment.
              </p>

              <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Phase 3: AI Enablement (Months 13-18)</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Deploy AI capabilities across prioritized use cases. Scale successful pilots to production. Build feedback loops for continuous model improvement.
              </p>

              <div className="bg-primary/10 p-8 rounded-xl my-12 border-l-4 border-primary">
                <p className="text-charcoal/80 leading-relaxed mb-0 italic">
                  "The companies winning in the AI era aren't those with the most advanced algorithms—they're the ones with the most adaptable infrastructure. AI is only as good as the foundation it runs on."
                </p>
                <p className="text-charcoal/60 mt-4 mb-0">— NEXDYNE Research Team</p>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Measuring transformation success</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                Effective transformation requires clear metrics that connect technical progress to business outcomes. We recommend tracking:
              </p>

              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li><strong>Deployment frequency:</strong> How often can you ship changes? Leaders deploy 10-50x daily.</li>
                <li><strong>Lead time for changes:</strong> How quickly can you go from idea to production? Leaders achieve under 1 day.</li>
                <li><strong>Mean time to recovery:</strong> How fast can you recover from failures? Leaders recover in under 1 hour.</li>
                <li><strong>AI model deployment time:</strong> How quickly can you deploy new models? Leaders achieve under 1 week.</li>
                <li><strong>Infrastructure cost efficiency:</strong> What's your cost per transaction/user? Leaders reduce costs 40-60%.</li>
              </ul>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">Getting started</h2>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                The journey to AI-ready infrastructure begins with honest assessment of your current state. Most organizations overestimate their readiness and underestimate the foundational work required. A structured assessment that evaluates architecture, data, talent, and processes provides the clarity needed to build an effective transformation roadmap.
              </p>

              <p className="text-charcoal/70 leading-relaxed mb-6">
                The enterprises that will thrive in the AI era are those that treat infrastructure transformation not as a one-time project, but as a continuous capability. Technology will continue to evolve, and the organizations with adaptable foundations will be best positioned to capture value from each new wave of innovation.
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
            title: "Building scalable data architectures",
            description: "The architectural patterns and technology choices that enable enterprises to scale data operations.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            link: "/insights/scalable-data-architecture"
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
            title: "How a logistics company scaled 10x in 18 months",
            description: "The technology decisions and organizational changes that enabled rapid growth.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            link: "/cases/logistics-scale"
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
              Ready to transform your enterprise?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's discuss how to build AI-ready infrastructure for your organization.
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
