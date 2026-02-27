import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, DollarSign, Puzzle, Cloud, CheckCircle, Target, GitBranch, Shield, Terminal, Server } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import InteractiveTechStack from '@/components/InteractiveTechStack';
import ReadinessAssessment from '@/components/ReadinessAssessment';

export default function CustomSoftwareDev() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Custom Software Development' }
  ];

  const caseStudies = [
    {
      title: "Payment Processing Automation",
      category: "Fintech",
      description: "Scaling transaction volume by 10x with automated reconciliation.",
      image: "/images/fintech-payment.jpg",
      link: "/cases/fintech-payment-automation"
    },
    {
      title: "Claims Processing AI",
      category: "Insurance",
      description: "Reducing claims processing time by 85% with intelligent automation.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
      link: "/cases/insurance-claims-processing"
    },
    {
      title: "Telehealth Scaling",
      category: "Healthcare",
      description: "Scaling telehealth infrastructure for 10x patient load.",
      image: "/images/telehealth.jpg",
      link: "/cases/telehealth-platform"
    }
  ];

  const techCategories = [
    {
      title: "DevOps & CI/CD",
      description: "Automating build, test, and deployment pipelines.",
      items: [
        { name: "GitHub Actions", category: "CI/CD", icon: <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Jenkins", category: "Automation Server", icon: <Terminal className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Docker", category: "Containerization", icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Terraform", category: "IaC", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Ensuring code quality and infrastructure security.",
      items: [
        { name: "SonarQube", category: "Code Quality", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Vault", category: "Secrets Management", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "OAuth 2.0", category: "Authentication", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Snyk", category: "Vulnerability Scanning", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "Development Frameworks",
      description: "Modern tools for rapid application development.",
      items: [
        { name: "React", category: "Frontend", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Node.js", category: "Backend", icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Python", category: "Backend/AI", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: ".NET Core", category: "Enterprise", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    }
  ];

  const assessmentQuestions = [
    {
      id: "q1",
      text: "How often do you deploy code to production?",
      options: [
        { value: 1, label: "Quarterly or less" },
        { value: 2, label: "Bi-weekly sprints" },
        { value: 3, label: "On-demand / Multiple times a day" }
      ]
    },
    {
      id: "q2",
      text: "What is your automated test coverage?",
      options: [
        { value: 1, label: "Minimal or manual testing only" },
        { value: 2, label: "Unit tests for critical paths" },
        { value: 3, label: "Comprehensive unit, integration, and E2E tests" }
      ]
    },
    {
      id: "q3",
      text: "How do you handle infrastructure provisioning?",
      options: [
        { value: 1, label: "Manual configuration" },
        { value: 2, label: "Scripts and documentation" },
        { value: 3, label: "Infrastructure as Code (Terraform/CloudFormation)" }
      ]
    },
    {
      id: "q4",
      text: "How is security integrated into your development lifecycle?",
      options: [
        { value: 1, label: "Security audit before release" },
        { value: 2, label: "Regular scans during development" },
        { value: 3, label: "Automated security gates in CI/CD pipeline" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              Custom Software Development
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Each business and IT landscape is unique. When off-the-shelf solutions don't fit, we build flexible and scalable custom software tailored precisely to your requirements—and it's easier than you think.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">More cost-effective</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Avoid expensive per-user licenses for bloated software you only partially use. Custom solutions often cost less long-term than enterprise SaaS subscriptions.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Perfect fit</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Skip complex workarounds and forced processes. Software built for your unique requirements delivers exactly what you need, nothing more, nothing less.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Seamless integration</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                No IT landscape overhaul required. We build software that integrates naturally with your existing systems and workflows.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Hybrid compatibility</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Whether your IT is on-premise, in the cloud, or hybrid, custom software ensures your entire landscape works together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Custom Software Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding Custom Software</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Built for you, not the masses
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              A common misconception about custom software is that it's only suitable for large enterprises—supposedly expensive, complex, and requiring massive IT departments to maintain. The reality is quite different. Small and mid-sized businesses often benefit most from tailored solutions because they can't afford to waste resources on bloated enterprise software that requires extensive customization, training, and ongoing license fees for features they'll never use.
            </p>
            <p>
              Consider the true cost of commercial software: $50-150 per user per month adds up quickly. A 50-person company spending $100/user/month on a CRM pays $60,000 annually—$300,000 over five years—for software that probably doesn't match their sales process and requires painful workarounds. Custom software built specifically for that company's workflow might cost $150,000 upfront with minimal ongoing costs, delivering better functionality at half the total cost of ownership.
            </p>
            <p>
              The best part about custom software? It's designed with your business's specific needs as the foundation—not as an afterthought. Your processes drive the design. Your data structures determine the architecture. Your team's workflows shape the user experience. The result is software that feels natural to use because it was built for exactly how you work, not how a vendor thinks you should work.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-primary pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "We were paying $8,000/month for enterprise software that didn't fit our manufacturing process. Custom software cost us $120K to build and saves us $96K annually in license fees—plus it actually works the way we need it to."
            </p>
            <p className="text-lg font-semibold text-charcoal">COO, Mid-Size Manufacturer</p>
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <InteractiveTechStack 
        title="Development & DevOps Stack" 
        categories={techCategories} 
      />

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-start max-w-7xl mx-auto">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
                Iterative development, continuous value
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                Custom software doesn't mean waterfall development and year-long projects. We build iteratively—delivering working software in weeks, gathering feedback, and refining continuously. You see progress constantly, provide input throughout, and can adjust direction as you learn what works.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We start by deeply understanding your business—the processes, pain points, and desired outcomes. Together we identify the core functionality that delivers the most value, then we build that first. You get a working system quickly, start using it, and discover what additional features would create the most impact. We iterate based on real-world usage, not theoretical requirements documents.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                This approach dramatically reduces risk. Instead of spending a year building software based on upfront requirements that inevitably change, you get working software in months and evolve it based on actual experience. The result: software that truly fits your needs because it was refined through real-world use, not guesswork.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Discovery & Planning</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Understand your business processes, technical landscape, and success criteria. Define core features and integration requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Iterative Development</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Build in sprints, delivering working software every 2-3 weeks. Gather feedback, refine features, and adjust priorities based on learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Launch & Support</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Deploy to production, train users, and provide ongoing support. Continue enhancing based on usage patterns and evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Readiness Assessment */}
      <ReadinessAssessment 
        title="Is Your Development Process Ready for Scale?"
        description="Assess your software delivery maturity and identify opportunities for automation and improvement."
        questions={assessmentQuestions}
        ctaText="Get Your DevOps Assessment"
      />

      {/* Related Case Studies */}
      <RelatedCaseStudies 
        cases={caseStudies}
        title="Software Success Stories"
        subtitle="See how custom software has transformed other businesses."
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-primary text-white">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to build software that fits?
          </h2>
          <p className="text-xl opacity-90 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Stop struggling with off-the-shelf limitations. Let's build a solution designed for your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:p-5 md:p-6">
            <Button className="bg-white text-primary hover:bg-subtle text-lg px-10 py-6 rounded-full font-bold shadow-lg transition-all hover:scale-105">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6 rounded-full font-bold">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
