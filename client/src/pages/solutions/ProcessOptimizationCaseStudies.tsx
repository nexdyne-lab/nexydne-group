import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp, Clock, Users, DollarSign, Zap, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
    icon: React.ReactNode;
  }[];
  image: string;
  url: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "logistics-shipment-automation",
    title: "Regional logistics firm cuts shipment processing time by 78%",
    client: "Mid-Market Logistics Provider",
    industry: "Logistics & Distribution",
    challenge: "A 180-employee logistics company was drowning in manual shipment coordination, with teams spending 6+ hours daily on data entry, carrier communication, and exception handling.",
    solution: "NexDyne deployed an intelligent automation platform combining RPA for data extraction, AI for carrier selection optimization, and workflow orchestration for exception management.",
    results: [
      { metric: "78%", label: "Faster processing", icon: <Zap className="w-5 h-5" /> },
      { metric: "$420K", label: "Annual savings", icon: <DollarSign className="w-5 h-5" /> },
      { metric: "99.2%", label: "Accuracy rate", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    url: "/cases/logistics-tracking-app",
    featured: true,
  },
  {
    id: "manufacturing-invoice-automation",
    title: "Manufacturing company automates invoice processing, saves $285K annually",
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    challenge: "A 250-employee manufacturer processed 3,000+ invoices monthly with a 5-person AP team. Manual data entry led to 4% error rates and delayed payments.",
    solution: "Implemented intelligent document processing with AI-powered extraction, automated three-way matching, and exception routing workflows.",
    results: [
      { metric: "92%", label: "Time reduction", icon: <Clock className="w-5 h-5" /> },
      { metric: "$285K", label: "Cost savings", icon: <DollarSign className="w-5 h-5" /> },
      { metric: "0.3%", label: "Error rate", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    url: "/cases/manufacturing-predictive-maintenance",
  },
  {
    id: "consulting-onboarding-automation",
    title: "Consulting firm scales client onboarding 3x without hiring",
    client: "Management Consulting Firm",
    industry: "Professional Services",
    challenge: "A 95-employee consulting firm struggled to onboard new clients efficiently. Manual intake, contract generation, and compliance checks created bottlenecks.",
    solution: "NexDyne built an end-to-end client onboarding automation platform with intelligent forms, automated contract generation, and compliance workflow orchestration.",
    results: [
      { metric: "3x", label: "Capacity increase", icon: <Users className="w-5 h-5" /> },
      { metric: "68%", label: "Faster onboarding", icon: <Zap className="w-5 h-5" /> },
      { metric: "100%", label: "Compliance rate", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    url: "/cases/consulting-knowledge-management",
  },
  {
    id: "healthcare-claims-processing",
    title: "Healthcare provider reduces claims processing from 14 days to 2",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "A multi-location healthcare provider processed insurance claims manually, leading to 14-day average turnaround times and frequent denials due to errors.",
    solution: "Deployed AI-powered claims automation with intelligent document extraction, automated coding validation, and real-time eligibility verification.",
    results: [
      { metric: "85%", label: "Faster processing", icon: <Clock className="w-5 h-5" /> },
      { metric: "45%", label: "Fewer denials", icon: <TrendingUp className="w-5 h-5" /> },
      { metric: "$1.2M", label: "Revenue recovered", icon: <DollarSign className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    url: "/cases/healthcare-patient-portal",
  },
  {
    id: "financial-services-kyc",
    title: "Financial services firm automates KYC, cuts compliance costs 60%",
    client: "Wealth Management Firm",
    industry: "Financial Services",
    challenge: "A 120-employee wealth management firm spent excessive time on KYC processes, with compliance officers manually verifying documents and running background checks.",
    solution: "Implemented intelligent KYC automation with AI document verification, automated sanctions screening, and risk-based workflow routing.",
    results: [
      { metric: "60%", label: "Cost reduction", icon: <DollarSign className="w-5 h-5" /> },
      { metric: "4hrs→20min", label: "Processing time", icon: <Clock className="w-5 h-5" /> },
      { metric: "99.9%", label: "Compliance accuracy", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    url: "/cases/financial-institution",
  },
  {
    id: "retail-inventory-automation",
    title: "Retail chain optimizes inventory management, reduces stockouts 70%",
    client: "Multi-Location Retailer",
    industry: "Retail",
    challenge: "A 200-employee retail chain with 25 locations struggled with manual inventory tracking, leading to frequent stockouts and overstock situations.",
    solution: "NexDyne deployed an intelligent inventory automation system with demand forecasting, automated reorder triggers, and cross-location optimization.",
    results: [
      { metric: "70%", label: "Fewer stockouts", icon: <TrendingUp className="w-5 h-5" /> },
      { metric: "25%", label: "Inventory reduction", icon: <DollarSign className="w-5 h-5" /> },
      { metric: "15%", label: "Sales increase", icon: <Zap className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    url: "/cases/retail-inventory-app",
  },
  {
    id: "insurance-underwriting",
    title: "Insurance company accelerates underwriting decisions by 5x",
    client: "Commercial Insurance Provider",
    industry: "Insurance",
    challenge: "A commercial insurance provider took 5-7 days to process underwriting applications, losing business to faster competitors.",
    solution: "Implemented AI-powered underwriting automation with intelligent risk assessment, automated document analysis, and decision support workflows.",
    results: [
      { metric: "5x", label: "Faster decisions", icon: <Zap className="w-5 h-5" /> },
      { metric: "40%", label: "More applications", icon: <Users className="w-5 h-5" /> },
      { metric: "30%", label: "Better loss ratios", icon: <TrendingUp className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    url: "/cases/insurance-claims-portal",
  },
  {
    id: "tech-company-hr-automation",
    title: "Tech company automates HR operations, improves employee experience",
    client: "Software Development Company",
    industry: "Technology",
    challenge: "A 300-employee tech company's HR team was overwhelmed with manual processes for onboarding, time-off requests, and benefits administration.",
    solution: "NexDyne built an integrated HR automation platform with self-service portals, automated workflows, and intelligent case routing.",
    results: [
      { metric: "80%", label: "Less admin time", icon: <Clock className="w-5 h-5" /> },
      { metric: "95%", label: "Employee satisfaction", icon: <Users className="w-5 h-5" /> },
      { metric: "2 FTEs", label: "Capacity freed", icon: <Building2 className="w-5 h-5" /> },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    url: "/cases/saas-product-analytics",
  },
];

const industries = ["All", "Logistics & Distribution", "Manufacturing", "Professional Services", "Healthcare", "Financial Services", "Retail", "Insurance", "Technology"];

export default function ProcessOptimizationCaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const filteredCases = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  const featuredCase = caseStudies.find(c => c.featured);

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Process Optimization Case Studies | NexDyne Technologies" 
        description="Real results from intelligent automation implementations. See how mid-market companies have transformed their operations with NexDyne."
        canonical="/solutions/intelligent-process-optimization/case-studies"
      />
      <Navigation />
      
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/#services' },
        { label: 'Intelligent Process Optimization', href: '/solutions/intelligent-process-optimization' },
        { label: 'Case Studies' }
      ]} />

      {/* DZ10 Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Link href="/solutions/intelligent-process-optimization" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Intelligent Process Optimization
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Process Optimization Case Studies
            </span>
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight leading-[1.05] mb-4">
              Real results from <br />
              <span className="text-primary">intelligent automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              See how mid-market companies have transformed manual operations into autonomous systems, achieving measurable improvements in speed, accuracy, and cost efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Filter Section */}
      <section className="py-8 bg-base border-b border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedIndustry === industry
                    ? "bg-primary text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Featured Case Study */}
      {selectedIndustry === "All" && featuredCase && (
        <section className="py-16 md:py-20 bg-base">
          <div className="container px-4 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={featuredCase.url}>
                <div className="group grid md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={featuredCase.image} 
                      alt={featuredCase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-0 md:pr-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Featured
                      </span>
                      <span className="text-white/60 text-sm">
                        {featuredCase.industry}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {featuredCase.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      {featuredCase.challenge}
                    </p>
                    
                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {featuredCase.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-primary">{result.metric}</div>
                          <div className="text-xs text-white/50 mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read full case study <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* DZ10 Case Studies Grid */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.filter(c => selectedIndustry !== "All" || !c.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={study.url}>
                  <div className="group cursor-pointer h-full">
                    <div className="bg-white border border-base/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-primary/30">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-base/5">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Industry Badge Overlay */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Client */}
                        <span className="text-xs text-charcoal/50 mb-2">{study.client}</span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-tight">
                          {study.title}
                        </h3>
                        
                        {/* Challenge */}
                        <p className="text-charcoal/70 mb-4 line-clamp-3 flex-grow text-sm">
                          {study.challenge}
                        </p>
                        
                        {/* Results */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-base/10">
                          {study.results.map((result, i) => (
                            <div key={i} className="text-center">
                              <div className="text-lg font-bold text-primary">{result.metric}</div>
                              <div className="text-[10px] text-charcoal/50 leading-tight">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal/60 text-lg">
                No case studies found for this industry. Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-20 md:py-24 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Aggregate Impact
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white">
              Results across all engagements
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: "60-80%", label: "Average process time reduction" },
              { metric: "$15M+", label: "Total client savings" },
              { metric: "99%+", label: "Accuracy improvement" },
              { metric: "50+", label: "Successful implementations" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 CTA Section */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to achieve similar results?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how intelligent automation can transform your operations and deliver measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] hover:shadow-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/solutions/intelligent-process-optimization/insights">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Read Our Insights
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
