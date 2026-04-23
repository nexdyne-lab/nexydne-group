import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedInsights from "@/components/RelatedInsights";
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Cpu, 
  Database, 
  GitBranch, 
  Lock, 
  Zap, 
  Sliders,
  Code,
  Layers,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomModelTuning() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'AI Capabilities', href: '/capabilities/artificial-intelligence' },
    { label: 'Custom Model Tuning' }
  ];

  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      {/* DZ10 Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop" 
            alt="AI Model Tuning" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Custom Model Tuning
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 sm:mb-3 md:mb-4 leading-[1.05] eb-garamond">
              Custom Model <br />
              <span className="text-primary">Tuning</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10">
              Fine-tune open-source models on your proprietary data, ensuring you own the intelligence and maintain a competitive edge while keeping your data secure.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Start Tuning
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                See Benchmarks
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 What We Do Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 eb-garamond">What we do</h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed">
              We specialize in adapting state-of-the-art open-source models to your specific business domain, creating highly specialized tools that outperform generic alternatives.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Model Tuning Strategy",
                description: "We help you determine when to fine-tune versus when to use off-the-shelf models. We analyze your use cases, data availability, and performance requirements to define a tuning strategy that maximizes ROI. We also help you select the right base model (e.g., Llama, Mistral, Falcon) for your specific needs."
              },
              {
                title: "Technical Pipeline Planning",
                description: "We design the data preparation and training pipelines required for successful fine-tuning. This involves cleaning and formatting your proprietary data, selecting the appropriate tuning technique (e.g., LoRA, QLoRA, full fine-tuning), and setting up the necessary compute infrastructure."
              },
              {
                title: "Implementation & Training",
                description: "Our ML engineers execute the fine-tuning process, rigorously monitoring loss curves and validation metrics. We then evaluate the tuned model against custom benchmarks to ensure it meets your quality standards. Finally, we deploy the model to your private environment, optimized for inference speed and cost."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Why Tune Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              The Value
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Why tune your own models?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              Custom model tuning offers a strategic advantage by combining the power of large language models with the specificity of your unique data and requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Domain Expertise",
                description: "Generic models often struggle with specialized jargon or complex internal processes. Fine-tuning teaches the model your specific language. A legal tech firm improved contract analysis accuracy by 40 percent by tuning a model on their repository of legal documents."
              },
              {
                title: "Data Privacy",
                description: "Using public APIs sends your data to third-party servers. Custom models can be deployed entirely within your private cloud or on-premise, ensuring sensitive data never leaves your control. This is critical for industries like healthcare, finance, and defense."
              },
              {
                title: "Cost Efficiency",
                description: "Smaller, fine-tuned models can often match or exceed the performance of massive general-purpose models for specific tasks, while being significantly cheaper and faster to run. One client reduced inference costs by 70 percent by switching from GPT-4 to a fine-tuned 7B parameter model."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Value Proposition Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 eb-garamond">
                Your Data, <br/>
                <span className="text-primary">Your Intelligence</span>
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Generic AI models are powerful, but they lack the specific context of your business. By fine-tuning open-source foundation models on your proprietary data, we create bespoke AI solutions that understand your unique terminology, processes, and customers.
                </p>
                <p>
                  This approach not only delivers superior performance but also ensures data sovereignty. You retain full ownership of the model weights and the intelligence they contain, eliminating vendor lock-in and privacy concerns.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-base/5">
                  <div className="text-4xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-charcoal/60">Performance Boost</div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-base/5">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-charcoal/60">Data Ownership</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop" 
                alt="Neural Network Tuning" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Case Studies
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">How Custom Model Tuning is changing industries</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Financial firm automates complex compliance checks",
                description: "A global investment bank needed to automate the review of complex financial instruments against changing regulations. We fine-tuned a language model on their historical compliance reports and regulatory documents.",
                result: "The custom model achieved 99 percent accuracy in flagging potential violations, surpassing human performance and reducing review time by 80 percent.",
                link: "/case-studies/financial-compliance-automation"
              },
              {
                title: "Healthcare startup personalizes patient communication",
                description: "A digital health platform wanted to provide personalized health advice based on patient records. We tuned a model on anonymized medical transcripts and clinical guidelines.",
                result: "The resulting model could generate empathetic, clinically accurate responses tailored to each patient's history, improving patient engagement scores by 35 percent.",
                link: "/cases/healthcare-patient-engagement"
              },
              {
                title: "Software company builds specialized coding assistant",
                description: "A company with a proprietary programming language needed a coding assistant. Generic models failed to understand their syntax. We fine-tuned a code-generation model on their internal codebase.",
                result: "Developers saw a 50 percent increase in productivity, as the model could accurately autocomplete code and suggest optimizations in their proprietary language.",
                link: "/case-studies/software-specialized-coding"
              },
              {
                title: "E-commerce platform optimizes product descriptions",
                description: "An online marketplace wanted to standardize millions of product descriptions. We tuned a model to generate SEO-optimized descriptions from raw product data, adhering to their specific brand voice.",
                result: "This automated the content creation process, resulting in a 20 percent increase in organic search traffic and a significant reduction in content team workload.",
                link: "/cases/retail-product-content"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.link} className="block">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                </Link>
                <p className="text-white/60 leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {item.result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Key Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 eb-garamond">Precision Engineering for AI</h2>
            <p className="text-charcoal/70 text-lg">
              We leverage state-of-the-art techniques to adapt powerful foundation models to your specific needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Domain Adaptation",
                desc: "Teach models the specific language, jargon, and concepts of your industry, from legal to healthcare.",
                icon: <Database className="w-8 h-8" />
              },
              {
                title: "Instruction Tuning",
                desc: "Optimize models to follow complex, multi-step instructions specific to your internal workflows.",
                icon: <GitBranch className="w-8 h-8" />
              },
              {
                title: "Parameter Efficiency",
                desc: "Use techniques like LoRA and QLoRA to fine-tune models efficiently without massive compute costs.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Secure Deployment",
                desc: "Deploy tuned models in your own private cloud or on-premise infrastructure for maximum security.",
                icon: <Lock className="w-8 h-8" />
              },
              {
                title: "Model Evaluation",
                desc: "Rigorous benchmarking against custom test sets to ensure the model meets your quality standards.",
                icon: <Sliders className="w-8 h-8" />
              },
              {
                title: "Continuous Learning",
                desc: "Set up pipelines to retrain models periodically as new data becomes available, keeping them fresh.",
                icon: <Layers className="w-8 h-8" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-base/5 w-fit rounded-lg sm:rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 How We Work Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Methodology
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 sm:mb-6 md:mb-8 eb-garamond">
                The Tuning Process
              </h2>
              <p className="text-white/60 text-lg mb-6 sm:mb-8 md:mb-12">
                We follow a rigorous, scientific approach to model tuning, ensuring reproducible results and measurable improvements.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Data Curation",
                    desc: "We help you select, clean, and format your high-quality proprietary data for optimal training."
                  },
                  {
                    title: "Base Model Selection",
                    desc: "We choose the best open-source foundation model (e.g., Llama 3, Mistral) for your specific use case."
                  },
                  {
                    title: "Fine-Tuning",
                    desc: "Our ML engineers run training jobs using advanced techniques to adapt the model weights."
                  },
                  {
                    title: "Validation & Deployment",
                    desc: "We rigorously test the model against safety and performance metrics before deploying it to production."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 sm:p-5 md:p-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-full min-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" 
                alt="Code Interface" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="text-white font-bold text-lg mb-2">Open Source Power</h4>
                  <p className="text-white/80 text-sm mb-4">
                    We build on top of the world's best open models, giving you state-of-the-art performance without the licensing fees.
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Llama, Mistral, Falcon & More</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <RelatedInsights />

      {/* DZ10 CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8 eb-garamond">
              Own your intelligence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Stop renting intelligence from big tech. Start building your own asset today.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-bold transition-all">
                Consult an ML Engineer
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
