import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AgenticAI() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Agentic AI & Generative AI | NexDyne Technologies"
        description="Design and deploy autonomous AI systems that redefine business operations. Our specialized AI practice focuses on cutting-edge solutions that deliver measurable competitive advantage."
      />
      <Navigation />
      
      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['EB Garamond',serif] font-bold tracking-tight text-white leading-[1.05] mb-4">
                Agentic AI & Generative AI
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Design and deploy autonomous AI systems that redefine business operations. Our specialized AI practice focuses on cutting-edge solutions that deliver measurable competitive advantage.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/images/agentic-ai-abstract.jpg" 
                alt="Agentic AI Visualization" 
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">85%</p>
              <p className="text-slate-600">Task automation rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">10x</p>
              <p className="text-slate-600">Content generation speed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">60%</p>
              <p className="text-slate-600">Cost reduction in operations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">8</p>
              <p className="text-slate-600">Weeks to production deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-8">
              AI that works alongside your team
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                We're at an inflection point in artificial intelligence. The emergence of large language 
                models and agentic AI systems has created capabilities that seemed impossible just two 
                years ago. AI can now understand context, generate content, make decisions, and take 
                actions with minimal human oversight.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For mid-market organizations, this represents both opportunity and challenge. The 
                technology is powerful, but implementation requires expertise that most organizations 
                don't have in-house. The gap between AI potential and AI reality is where value is 
                either captured or lost.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our AI practice bridges this gap. We help organizations identify high-impact AI use 
                cases, design solutions that integrate with existing workflows, and deploy systems 
                that deliver measurable business outcomes—not just impressive demos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              From experimentation to enterprise value
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Use Case Discovery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Not every process benefits equally from AI. We work with your teams to identify 
                  use cases where AI can deliver the greatest impact—considering factors like data 
                  availability, process complexity, and potential ROI. Our discovery process ensures 
                  you invest in AI where it matters most.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Solution Architecture</h3>
                <p className="text-slate-600 leading-relaxed">
                  We design AI solutions that fit your technical environment and business constraints. 
                  This includes selecting appropriate models (build vs. buy), designing integration 
                  points, establishing data pipelines, and creating governance frameworks. Our 
                  architectures balance capability with practicality.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Rapid Prototyping</h3>
                <p className="text-slate-600 leading-relaxed">
                  We believe in proving value before scaling investment. Our rapid prototyping 
                  approach delivers working AI solutions in weeks, not months. These prototypes 
                  validate assumptions, demonstrate ROI, and build organizational confidence in 
                  AI capabilities.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Production Deployment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Moving from prototype to production requires attention to reliability, security, 
                  and scale. We deploy AI systems with proper monitoring, failover mechanisms, and 
                  human oversight. Our production deployments are enterprise-grade, not science projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              What we deliver
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Agentic AI Systems</h3>
                <p className="text-slate-600">
                  Autonomous AI agents that can plan, execute, and adapt to complete complex tasks. 
                  These systems handle multi-step workflows, make decisions based on context, and 
                  escalate to humans when appropriate.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Generative AI Applications</h3>
                <p className="text-slate-600">
                  Custom applications leveraging large language models for content generation, 
                  summarization, analysis, and customer interaction. We build solutions that 
                  understand your domain and speak your language.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Intelligent Document Processing</h3>
                <p className="text-slate-600">
                  AI systems that extract, classify, and process information from unstructured 
                  documents. We automate the document-heavy workflows that consume your team's 
                  time and introduce errors.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">AI-Powered Decision Support</h3>
                <p className="text-slate-600">
                  Systems that analyze data, identify patterns, and provide recommendations to 
                  human decision-makers. We build AI that augments human judgment rather than 
                  replacing it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-12">
              AI in action across industries
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-xl font-bold mb-3">Professional Services</h3>
                <p className="text-slate-300 leading-relaxed">
                  AI agents that automate document review, extract key terms from contracts, 
                  generate first drafts of reports, and manage client communications. Our 
                  solutions help professional services firms deliver more value with existing 
                  headcount.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-xl font-bold mb-3">Financial Services</h3>
                <p className="text-slate-300 leading-relaxed">
                  Intelligent systems for loan document processing, customer service automation, 
                  fraud detection, and regulatory compliance. We help financial institutions 
                  serve customers faster while managing risk effectively.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-xl font-bold mb-3">Healthcare</h3>
                <p className="text-slate-300 leading-relaxed">
                  AI applications for clinical documentation, patient communication, appointment 
                  scheduling optimization, and administrative workflow automation. Our healthcare 
                  AI solutions are designed with privacy and compliance as foundational requirements.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-xl font-bold mb-3">Manufacturing & Distribution</h3>
                <p className="text-slate-300 leading-relaxed">
                  Predictive maintenance systems, demand forecasting, quality inspection automation, 
                  and supply chain optimization. We help manufacturers and distributors reduce 
                  costs and improve reliability through intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-['EB Garamond',serif] font-bold text-slate-900 mb-8">Related Services</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/capabilities/ai-technology-consulting/services/cloud-architecture" className="group block p-6 border border-slate-200 rounded-lg hover:border-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                  Cloud & Data Architecture Modernization
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Build the data foundation your AI initiatives require.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link href="/capabilities/ai-technology-consulting/services/intelligent-adoption" className="group block p-6 border border-slate-200 rounded-lg hover:border-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                  Intelligent Adoption & Change Management
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Ensure your workforce embraces AI transformation.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-6">
              Ready to explore AI for your business?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Let's discuss how agentic and generative AI can transform your operations and create competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#4ade80] text-slate-900 font-semibold rounded-full hover:bg-[#22c55e] transition-colors">
                Schedule an AI Discovery Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/capabilities/ai-technology-consulting" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-100 transition-colors">
                Explore AI & Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
