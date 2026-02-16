import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function IntelligentAdoption() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Intelligent Adoption & Change Management | NexDyne Technologies"
        description="The human element determines transformation success. Our dedicated service line ensures your workforce is trained, culturally aligned, and equipped to embrace automation for sustainable results."
      />
      <Navigation />
      
      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['EB Garamond',serif] font-bold tracking-tight text-white leading-[1.05] mb-4">
                Intelligent Adoption & Change Management
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                The human element determines transformation success. Our dedicated service line ensures your workforce is trained, culturally aligned, and equipped to embrace automation for sustainable results.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/images/change-management-abstract.jpg" 
                alt="Change Management Visualization" 
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
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">92%</p>
              <p className="text-slate-600">Technology adoption rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">4.2x</p>
              <p className="text-slate-600">Faster time-to-value</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">78%</p>
              <p className="text-slate-600">Reduction in resistance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">95%</p>
              <p className="text-slate-600">Employee satisfaction post-change</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-8">
              Technology fails when people aren't ready
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The statistics are sobering: 70% of digital transformation initiatives fail to achieve 
                their objectives. The culprit isn't usually the technology—it's the human response to 
                change. Employees who feel threatened by automation resist it. Teams that don't understand 
                new systems work around them. Leaders who can't articulate the vision fail to inspire adoption.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For mid-market organizations, these challenges are amplified. You don't have the luxury 
                of dedicated change management teams or months of runway to prepare your workforce. 
                Every day of delayed adoption costs money and erodes the competitive advantage your 
                technology investment was meant to create.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The solution isn't to slow down transformation—it's to approach change management with 
                the same rigor and intentionality you bring to technology implementation. This is what 
                sets successful transformations apart from expensive failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              Change management that accelerates transformation
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-violet-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Readiness Assessment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Before any technology deployment, we assess your organization's readiness for change. 
                  We identify potential resistance points, evaluate leadership alignment, and understand 
                  the cultural factors that will influence adoption. This diagnostic shapes a change 
                  strategy tailored to your organization's specific dynamics.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Leadership Alignment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Successful change starts at the top. We work with your leadership team to build a 
                  compelling vision for transformation, develop consistent messaging, and equip leaders 
                  to champion change throughout the organization. When leaders are aligned and visible, 
                  adoption accelerates dramatically.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Workforce Enablement</h3>
                <p className="text-slate-600 leading-relaxed">
                  We design and deliver training programs that go beyond button-clicking tutorials. 
                  Our approach helps employees understand not just how to use new systems, but why 
                  these changes matter and how they'll benefit from them. We create internal champions 
                  who accelerate peer-to-peer adoption.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Adoption Monitoring</h3>
                <p className="text-slate-600 leading-relaxed">
                  Change doesn't end at go-live. We implement adoption analytics that track how 
                  employees are actually using new systems, identify struggling teams, and surface 
                  opportunities for additional support. This data-driven approach ensures you achieve 
                  the full value of your technology investment.
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
            <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              What we deliver
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <BainHoverCard
                title="AI Literacy Programs"
                description="Comprehensive training that demystifies AI for your workforce. We help employees understand what AI can and cannot do, reducing fear and building confidence in working alongside intelligent systems."
                link="/capabilities/artificial-intelligence"
              />
              <BainHoverCard
                title="Cultural Alignment Workshops"
                description="Interactive sessions that address the mindset shifts required for digital transformation. We help teams embrace continuous improvement, data-driven decision-making, and collaborative problem-solving."
                link="/solutions/process-optimization/change-management-training"
              />
              <BainHoverCard
                title="Change Communication Strategy"
                description="Strategic communication plans that keep employees informed and engaged throughout transformation. We develop messaging frameworks, communication calendars, and feedback mechanisms that maintain momentum."
                link="/solutions/process-optimization/change-management-training"
              />
              <BainHoverCard
                title="Adoption Analytics Dashboard"
                description="Real-time visibility into how your workforce is adopting new technologies. Our dashboards track usage patterns, identify adoption barriers, and measure the business impact of behavioral change."
                link="/solutions/enterprise-transformation/platform-engineering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-20 bg-violet-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-violet-300 text-sm font-medium tracking-widest uppercase mb-4">
              The Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-12">
              Why change management matters for AI
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-violet-400 pl-8">
                <h3 className="text-xl font-bold mb-4">AI creates unique adoption challenges</h3>
                <p className="text-violet-100 leading-relaxed">
                  Unlike traditional software implementations, AI systems often change how work is 
                  fundamentally done—not just the tools used to do it. Employees may fear job 
                  displacement, struggle to trust AI recommendations, or resist ceding decision-making 
                  to algorithms. Our approach addresses these AI-specific concerns directly.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-400 pl-8">
                <h3 className="text-xl font-bold mb-4">Adoption determines ROI</h3>
                <p className="text-violet-100 leading-relaxed">
                  An AI system used at 50% of its potential delivers 50% of its value. The difference 
                  between mediocre and exceptional transformation outcomes often comes down to adoption 
                  rates. Our clients consistently achieve adoption rates above 90%, ensuring they 
                  capture the full value of their technology investments.
                </p>
              </div>
              
              <div className="border-l-4 border-violet-400 pl-8">
                <h3 className="text-xl font-bold mb-4">Change capability compounds</h3>
                <p className="text-violet-100 leading-relaxed">
                  Organizations that develop strong change management capabilities don't just succeed 
                  at one transformation—they become better at all future transformations. We help you 
                  build internal change leadership that will serve your organization for years to come.
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
              <BainHoverCard
                title="Agentic AI & Generative AI"
                description="Design and deploy autonomous AI systems that redefine operations."
                link="/capabilities/ai-technology-consulting/services/agentic-ai"
              />
              <BainHoverCard
                title="Cyber Resilience & Data Privacy"
                description="Security-by-Design integrated into every transformation."
                link="/capabilities/ai-technology-consulting/services/cyber-resilience"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-6">
              Ready to ensure your transformation succeeds?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Let's discuss how change management can accelerate your technology adoption and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#4ade80] text-slate-900 font-semibold rounded-full hover:bg-[#22c55e] transition-colors">
                Schedule a Consultation
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
