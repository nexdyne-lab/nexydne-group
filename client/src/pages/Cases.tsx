import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";

export default function Cases() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Professional Services", "Healthcare", "Financial Services"];

  const caseStudies = [
    {
      id: "law-firm-contract-automation",
      title: "How contract automation transformed a leading law firm's operations",
      date: "December 15, 2024",
      description: "A top-tier law firm partnered with NexDyne to automate contract review and analysis, reducing turnaround time by 65% while maintaining 99% accuracy.",
      image: "/case-law-firm-meeting.401c96db.jpg",
      industry: "Professional Services",
      metric: "65%",
      metricLabel: "Faster turnaround"
    },
    {
      id: "healthcare-patient-engagement",
      title: "Building an AI-powered patient engagement platform for better outcomes",
      date: "November 28, 2024",
      description: "A regional healthcare provider deployed intelligent automation to streamline patient communications, improving satisfaction scores by 40% and reducing wait times by 50%.",
      image: "/case-patient-care.b97e3209.jpeg",
      industry: "Healthcare",
      metric: "40%",
      metricLabel: "Higher satisfaction"
    },
    {
      id: "bank-process-automation",
      title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
      date: "November 12, 2024",
      description: "A financial institution automated KYC processing and regulatory reporting, achieving 80% reduction in manual compliance work while improving accuracy to 99.9%.",
      image: "/case-banker-meeting.c53f3999.jpg",
      industry: "Financial Services",
      metric: "10K+",
      metricLabel: "Hours saved"
    },
    {
      id: "consulting-knowledge-management",
      title: "Transforming knowledge management for a global consulting firm",
      date: "October 30, 2024",
      description: "NexDyne helped a consulting firm build an AI-powered knowledge platform, enabling consultants to find relevant insights 3x faster and improving proposal quality.",
      image: "/case-strategy-consulting.dfdd1294.jpg",
      industry: "Professional Services",
      metric: "3x",
      metricLabel: "Faster insights"
    },
    {
      id: "hospital-clinical-workflow",
      title: "Optimizing clinical workflows to save 15 hours per physician weekly",
      date: "October 18, 2024",
      description: "A hospital network automated clinical documentation and scheduling, freeing physicians to focus on patient care while reducing administrative burden by 60%.",
      image: "/case-medical-collaboration.9602cc8c.jpg",
      industry: "Healthcare",
      metric: "15hrs",
      metricLabel: "Saved weekly"
    },
    {
      id: "insurance-claims-processing",
      title: "Accelerating insurance claims processing with intelligent automation",
      date: "October 5, 2024",
      description: "An insurance provider deployed AI-powered claims automation, reducing processing time from 14 days to 2 days while improving customer satisfaction by 35%.",
      image: "/case-insurance-office.f039a4a1.jpg",
      industry: "Financial Services",
      metric: "85%",
      metricLabel: "Faster processing"
    },
    {
      id: "accounting-audit-automation",
      title: "How audit automation helped an accounting firm scale 2x without hiring",
      date: "September 22, 2024",
      description: "A mid-sized accounting firm automated audit procedures and data validation, doubling client capacity while maintaining quality standards and reducing errors by 75%.",
      image: "/case-accountants-audit.1c87a151.jpg",
      industry: "Professional Services",
      metric: "2x",
      metricLabel: "Client capacity"
    },
    {
      id: "healthcare-data-analytics",
      title: "Unlocking healthcare insights with real-time data analytics",
      date: "September 8, 2024",
      description: "NexDyne built a unified data platform for a healthcare system, enabling real-time analytics that improved resource allocation and reduced readmission rates by 25%.",
      image: "/case-healthcare-team.5797392b.jpg",
      industry: "Healthcare",
      metric: "25%",
      metricLabel: "Lower readmissions"
    },
    {
      id: "fintech-payment-automation",
      title: "Building a scalable payment processing system for a fintech startup",
      date: "August 25, 2024",
      description: "A fintech company partnered with NexDyne to automate payment reconciliation and fraud detection, processing 100K+ transactions daily with 99.99% accuracy.",
      image: "/case-financial-advisor.7bb94f0c.jpg",
      industry: "Financial Services",
      metric: "100K+",
      metricLabel: "Daily transactions"
    },
    {
      id: "legal-document-intelligence",
      title: "Transforming legal research with AI-powered document intelligence",
      date: "August 10, 2024",
      description: "A corporate legal team deployed NexDyne's AI platform to analyze contracts and precedents, reducing research time by 70% and improving case preparation quality.",
      image: "/case-legal-team.2f84fc95.jpg",
      industry: "Professional Services",
      metric: "70%",
      metricLabel: "Faster research"
    },
    {
      id: "telehealth-platform",
      title: "Scaling telehealth services to reach 50,000+ patients monthly",
      date: "July 28, 2024",
      description: "A healthcare provider built a comprehensive telehealth platform with NexDyne, enabling virtual consultations that improved access to care in rural communities.",
      image: "/case-doctor-consultation.799c1562.jpg",
      industry: "Healthcare",
      metric: "50K+",
      metricLabel: "Patients monthly"
    },
    {
      id: "wealth-management-automation",
      title: "Automating wealth management operations for better client experiences",
      date: "July 15, 2024",
      description: "A wealth management firm automated portfolio reporting and client communications, reducing operational costs by 45% while improving client engagement scores.",
      image: "/case-advisor-client.eb15e04e.jpg",
      industry: "Financial Services",
      metric: "45%",
      metricLabel: "Cost reduction"
    },
  ];

  const filteredCases = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Case Studies | NexDyne Technologies" 
        description="Explore how NexDyne helps organizations achieve enduring change through technology-led transformation."
        canonical="/cases"
      />
      <Navigation />
      
      {/* Hero Section - Neutral-first */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="pt-8"><Breadcrumbs /></div>
          <div className="flex flex-col justify-center min-h-[46vh] py-20 lg:py-24">
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6"><span className="block h-[3px] w-9 bg-primary" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">CASE STUDIES</span></div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">Case Studies</h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">Our clients are achieving enduring change in their capabilities and performance. Leading with technology, we partner with them to eliminate manual work, accelerate execution, and build capabilities across their entire organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex justify-center">
            <div className="inline-flex gap-4 sm:p-6 md:p-8">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`pb-3 font-medium transition border-b-2 ${
                    selectedIndustry === industry
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-charcoal hover:border-border"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {filteredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/cases/${study.id}`}>
                  <div className="group cursor-pointer h-full">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-charcoal/90 px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-primary">{study.metric}</span>
                        <span className="text-xs text-white/70 ml-1">{study.metricLabel}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{study.industry}</span>
                      <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 italic">{study.date}</p>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {study.description}
                      </p>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                        Read case study <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              NexDyne Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Latest thinking</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
            {[
              {
                title: "How AI and automation are reshaping business operations",
                date: "December 1, 2024",
                readTime: "6 min read",
                description: "Exploring the rapid adoption of intelligent automation across mid-sized US businesses and what it means for competitive advantage.",
                image: "/blog-ai-automation.3be6f720.jpg",
                link: "/insights/ai-automation-reshaping-business"
              },
              {
                title: "5 signs your business is ready for digital transformation",
                date: "November 18, 2024",
                readTime: "5 min read",
                description: "Key indicators that signal it's time to automate manual processes, from growing operational costs to scaling challenges and compliance pressures.",
                image: "/blog-digital-transformation.a3f57989.jpg",
                link: "/insights/digital-transformation-readiness"
              },
              {
                title: "Measuring ROI: What to expect in your first year of automation",
                date: "November 5, 2024",
                readTime: "7 min read",
                description: "Real metrics from our clients showing typical time savings, cost reductions, and accuracy improvements in the first 12 months of deployment.",
                image: "/blog-roi-measurement.1514df48.jpg",
                link: "/insights/measuring-automation-roi"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={post.link} className="group block h-full">
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-3">{post.date} · {post.readTime}</p>
                  <p className="text-white/60 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/insights">
              <span className="inline-flex items-center text-base font-medium text-white hover:text-primary transition-colors cursor-pointer">
                See all stories
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
