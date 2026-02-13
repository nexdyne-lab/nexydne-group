import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CyberResilience() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cyber Resilience & Data Privacy | NexDyne Technologies"
        description="Security-by-Design integrated into every transformation. We ensure your systems meet regulatory requirements while protecting against evolving threats."
      />
      <Navigation />
      
      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['EB Garamond',serif] font-bold tracking-tight text-white leading-[1.05] mb-4">
                Cyber Resilience & Data Privacy
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Security-by-Design integrated into every transformation. We ensure your systems meet regulatory requirements while protecting against evolving threats—essential for Financial Services and Healthcare clients.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img 
                src="/images/cyber-abstract.jpg" 
                alt="Cyber Resilience Visualization" 
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
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</p>
              <p className="text-slate-600">Compliance audit pass rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">85%</p>
              <p className="text-slate-600">Reduction in security incidents</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</p>
              <p className="text-slate-600">Threat monitoring capability</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">0</p>
              <p className="text-slate-600">Data breaches across clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-emerald-600 text-sm font-medium tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-8">
              Security as an enabler, not a barrier
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                For mid-market organizations, cybersecurity presents a paradox. The same digital transformation 
                initiatives that drive competitive advantage also expand the attack surface. Every new cloud 
                service, every AI integration, every connected device creates potential vulnerabilities that 
                sophisticated threat actors are eager to exploit.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Meanwhile, regulatory requirements continue to multiply. HIPAA, SOC 2, GDPR, state privacy 
                laws—compliance has become a full-time job. Many organizations find themselves caught between 
                the need to innovate and the fear of security failures that could devastate their business 
                and reputation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The traditional approach—bolting security onto systems after they're built—no longer works. 
                Modern threats require security to be woven into the fabric of your technology architecture 
                from the beginning. This is what we mean by Security-by-Design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-emerald-600 text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              Security that enables transformation
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-emerald-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Risk Assessment & Strategy</h3>
                <p className="text-slate-600 leading-relaxed">
                  We begin with a comprehensive assessment of your security posture, identifying vulnerabilities, 
                  mapping data flows, and evaluating your exposure to industry-specific threats. Our risk-based 
                  approach prioritizes investments where they'll have the greatest impact on protecting your 
                  business.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Security Architecture Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  We design security architectures that protect without impeding. Zero-trust principles, 
                  defense-in-depth strategies, and modern identity management create robust protection while 
                  maintaining the agility your business requires. Every architecture decision considers both 
                  security implications and operational efficiency.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance Framework Implementation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We implement compliance frameworks that satisfy regulatory requirements while minimizing 
                  operational burden. Our approach automates compliance monitoring and reporting wherever 
                  possible, freeing your team to focus on strategic initiatives rather than audit preparation.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-600 pl-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Continuous Monitoring & Response</h3>
                <p className="text-slate-600 leading-relaxed">
                  Security isn't a one-time project—it's an ongoing discipline. We establish monitoring 
                  capabilities that detect threats in real-time and response procedures that minimize 
                  impact when incidents occur. Our clients gain the security operations capabilities of 
                  much larger organizations.
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
            <p className="text-emerald-600 text-sm font-medium tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-slate-900 mb-12">
              What we deliver
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Data Privacy & Protection</h3>
                <p className="text-slate-600">
                  Comprehensive data protection strategies including encryption, access controls, and 
                  data loss prevention. We ensure sensitive information remains secure throughout its 
                  lifecycle, from creation to deletion.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Regulatory Compliance</h3>
                <p className="text-slate-600">
                  Expert guidance on HIPAA, SOC 2, GDPR, CCPA, and industry-specific regulations. 
                  We help you achieve and maintain compliance with automated monitoring and 
                  streamlined audit processes.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Identity & Access Management</h3>
                <p className="text-slate-600">
                  Modern IAM solutions that balance security with user experience. We implement 
                  single sign-on, multi-factor authentication, and role-based access controls 
                  that protect resources without frustrating users.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Incident Response Planning</h3>
                <p className="text-slate-600">
                  Comprehensive incident response plans and playbooks that prepare your organization 
                  to respond effectively when security events occur. We conduct tabletop exercises 
                  and simulations to ensure readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-emerald-300 text-sm font-medium tracking-widest uppercase mb-4">
              Industry Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-12">
              Deep expertise where it matters most
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Financial Services</h3>
                <p className="text-emerald-100 leading-relaxed mb-4">
                  We understand the unique security challenges facing credit unions, regional banks, 
                  and financial advisors. Our solutions address PCI-DSS requirements, protect against 
                  fraud, and secure the sensitive financial data your clients entrust to you.
                </p>
                <ul className="space-y-2 text-emerald-200">
                  <li>• PCI-DSS compliance and certification</li>
                  <li>• Fraud detection and prevention</li>
                  <li>• Secure payment processing</li>
                  <li>• Third-party risk management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Healthcare</h3>
                <p className="text-emerald-100 leading-relaxed mb-4">
                  Healthcare organizations face some of the most stringent regulatory requirements 
                  and highest-value targets for cybercriminals. We help medical practices, clinics, 
                  and healthcare networks protect patient data while enabling the digital tools that 
                  improve care delivery.
                </p>
                <ul className="space-y-2 text-emerald-200">
                  <li>• HIPAA compliance and security</li>
                  <li>• Electronic health record protection</li>
                  <li>• Medical device security</li>
                  <li>• Telehealth security frameworks</li>
                </ul>
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
              <Link href="/capabilities/ai-technology-consulting/services/cloud-architecture" className="group block p-6 border border-slate-200 rounded-lg hover:border-emerald-600 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 mb-2">
                  Cloud & Data Architecture Modernization
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Build the future-proof foundation your AI initiatives require.
                </p>
                <span className="inline-flex items-center text-emerald-600 text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              
              <Link href="/capabilities/ai-technology-consulting/services/intelligent-adoption" className="group block p-6 border border-slate-200 rounded-lg hover:border-emerald-600 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 mb-2">
                  Intelligent Adoption & Change Management
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  The human element determines transformation success.
                </p>
                <span className="inline-flex items-center text-emerald-600 text-sm font-medium">
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
              Ready to strengthen your security posture?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Let's discuss how we can help you build resilient, compliant systems that protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#4ade80] text-slate-900 font-semibold rounded-full hover:bg-[#22c55e] transition-colors">
                Schedule a Security Assessment
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
