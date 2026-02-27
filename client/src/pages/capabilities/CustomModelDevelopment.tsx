import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";

export default function CustomModelDevelopment() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Predictive Analytics",
      description: "Transform historical data into forward-looking insights and forecasts.",
      link: "/capabilities/artificial-intelligence/predictive-analytics"
    },
    {
      title: "Data Transformation",
      description: "Build the data foundation required for training custom models.",
      link: "/capabilities/artificial-intelligence/data-transformation"
    },
    {
      title: "AI Strategy & Roadmap",
      description: "Define your AI vision and create a prioritized implementation plan.",
      link: "/capabilities/artificial-intelligence/ai-strategy-roadmap"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Custom Model Development" 
        description="Build proprietary AI models tailored to your unique business challenges. From fine-tuning foundation models to training custom architectures, we deliver AI that fits your specific needs."
        canonical="/capabilities/artificial-intelligence/custom-model-development"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-3 sm:mb-4 eb-garamond">
              Custom Model Development
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-3 sm:mb-5">
              Build proprietary AI models tailored to your unique business challenges. From fine-tuning foundation models to training custom architectures, we deliver AI that fits your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="/images/custom-model-abstract.jpg" 
              alt="Custom Model Development Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-charcoal eb-garamond">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "300+", label: "Custom models deployed to production" },
              { metric: "95%", label: "Model accuracy improvement over baselines" },
              { metric: "60%", label: "Reduction in inference costs through optimization" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Off-the-shelf AI models are powerful, but they're trained on generic data for generic use cases. When your competitive advantage depends on domain expertise, proprietary data, or specialized workflows, custom models deliver performance that general-purpose AI simply cannot match.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The decision to build custom isn't always straightforward. Sometimes fine-tuning a foundation model is enough. Sometimes you need to train from scratch. Sometimes the right answer is a hybrid approach. We help you navigate these trade-offs based on your specific requirements, data assets, and constraints.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Building a model is just the beginning. Production deployment requires MLOps infrastructure, monitoring systems, and continuous improvement processes. We build models that are designed for the real world—not just impressive benchmarks.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Custom Model Capabilities */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our Custom Model Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              End-to-end services from model design to deployment and continuous optimization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Foundation Model Fine-Tuning",
                description: "Adapt GPT, Claude, Llama, or other foundation models to your domain using your proprietary data. Achieve specialized performance without training from scratch."
              },
              {
                title: "Custom Architecture Design",
                description: "Design and train neural network architectures optimized for your specific use case—whether computer vision, NLP, time series, or multimodal applications."
              },
              {
                title: "Data Pipeline Engineering",
                description: "Build robust data pipelines for model training. We handle data collection, cleaning, labeling, augmentation, and version control at scale."
              },
              {
                title: "Model Optimization",
                description: "Reduce inference costs and latency through quantization, pruning, distillation, and architecture optimization. Deploy efficient models at scale."
              },
              {
                title: "MLOps & Deployment",
                description: "Build production-grade ML infrastructure with automated training pipelines, model versioning, A/B testing, and monitoring for drift and degradation."
              },
              {
                title: "Responsible AI & Governance",
                description: "Implement bias detection, explainability frameworks, and compliance controls. Build AI systems that are fair, transparent, and auditable."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link="#" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white eb-garamond">
              Build AI that's uniquely yours
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Understand the problem deeply",
                description: "We start by understanding your business problem, not jumping to model architectures. What decisions need to be made? What data is available? What accuracy is required? These answers shape everything."
              },
              {
                title: "Iterate rapidly",
                description: "We use agile ML practices to deliver working models quickly. Start with simple baselines, measure performance, and iterate. This approach reduces risk and ensures we're solving the right problem."
              },
              {
                title: "Build for production",
                description: "From day one, we design for deployment. That means thinking about latency, cost, monitoring, and maintenance—not just accuracy. A model that can't be deployed is worthless."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-white leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Case Studies (F100) */}
      <section className="py-24 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white eb-garamond">
                See how custom models drive competitive advantage.
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom NLP Model for Legal Document Analysis",
                category: "Legal Services",
                description: "Building a domain-specific language model that extracts key clauses and risks from contracts with 95% accuracy.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/frGlTdFZkpRnsLsN.png",
                link: "/cases/legal-nlp-model"
              },
              {
                title: "Computer Vision for Quality Inspection",
                category: "Manufacturing",
                description: "Training custom vision models that detect defects with superhuman accuracy, reducing quality costs by 40%.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/ebUxoQLOcbiHJnmu.png",
                link: "/cases/manufacturing-vision-model"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal eb-garamond">
              Explore more AI capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BainHoverCard
                  title={cap.title}
                  description={cap.description}
                  link={cap.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section (F100 - Blue Background) */}
      <section className="py-24 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to build custom AI models?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how proprietary AI can give you a competitive advantage that off-the-shelf solutions can't match.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-primary px-10 py-6 text-lg font-semibold">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
