import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { ArrowLeft, FileText, Clock, CheckCircle2 } from "lucide-react";

// Whitepaper data - in production this would come from an API
const whitepapers: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  readTime: string;
  pages: number;
  topics: string[];
  keyInsights: string[];
  industry?: string;
  downloadUrl: string;
}> = {
  "intelligent-automation-guide": {
    id: "intelligent-automation-guide",
    title: "The Executive Guide to Intelligent Automation",
    subtitle: "Transform Operations, Reduce Costs, Scale Efficiently",
    description: "A comprehensive guide for business leaders evaluating intelligent automation solutions. Learn how to identify high-impact automation opportunities, build a compelling business case, and execute a successful implementation strategy.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    readTime: "25 min",
    pages: 32,
    topics: ["Process Automation", "AI Implementation", "ROI Analysis", "Change Management"],
    keyInsights: [
      "Framework for identifying automation-ready processes",
      "ROI calculation methodology with real-world benchmarks",
      "Common implementation pitfalls and how to avoid them",
      "Case studies from manufacturing, healthcare, and financial services"
    ],
    downloadUrl: "#"
  },
  "data-modernization-playbook": {
    id: "data-modernization-playbook",
    title: "The CEO's Playbook for Data Modernization",
    subtitle: "From Data Chaos to Competitive Advantage",
    description: "Strategic guidance for executives leading data transformation initiatives. This playbook covers architecture decisions, governance frameworks, and organizational change required to become a truly data-driven enterprise.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    readTime: "30 min",
    pages: 40,
    topics: ["Data Strategy", "Cloud Migration", "Analytics", "Data Governance"],
    keyInsights: [
      "Modern data architecture patterns and when to use them",
      "Building a data-literate organization",
      "Governance frameworks that enable rather than restrict",
      "Measuring the business impact of data investments"
    ],
    downloadUrl: "#"
  },
  "manufacturing-digital-transformation": {
    id: "manufacturing-digital-transformation",
    title: "Digital Transformation in Manufacturing",
    subtitle: "Industry 4.0 Implementation Guide",
    description: "A practical guide for manufacturing executives navigating digital transformation. Covers IoT implementation, predictive maintenance, supply chain optimization, and workforce development strategies.",
    coverImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    readTime: "35 min",
    pages: 45,
    topics: ["Smart Manufacturing", "IoT", "Predictive Maintenance", "Supply Chain"],
    keyInsights: [
      "Phased approach to Industry 4.0 adoption",
      "IoT sensor strategy and data integration",
      "Predictive maintenance ROI case studies",
      "Workforce upskilling best practices"
    ],
    industry: "Manufacturing",
    downloadUrl: "#"
  },
  "healthcare-automation-guide": {
    id: "healthcare-automation-guide",
    title: "Healthcare Process Automation",
    subtitle: "Improving Patient Outcomes Through Intelligent Systems",
    description: "A comprehensive guide for healthcare administrators seeking to improve operational efficiency while maintaining compliance. Covers patient intake, claims processing, clinical workflows, and data security.",
    coverImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    readTime: "28 min",
    pages: 36,
    topics: ["Healthcare IT", "HIPAA Compliance", "Patient Experience", "Revenue Cycle"],
    keyInsights: [
      "Automating patient intake and registration",
      "Claims processing optimization strategies",
      "Maintaining HIPAA compliance in automated workflows",
      "Measuring patient satisfaction improvements"
    ],
    industry: "Healthcare",
    downloadUrl: "#"
  },
  "financial-services-ai": {
    id: "financial-services-ai",
    title: "AI in Financial Services",
    subtitle: "Risk, Compliance, and Customer Experience",
    description: "Strategic guidance for financial services executives implementing AI solutions. Covers fraud detection, regulatory compliance, customer personalization, and risk management applications.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    readTime: "32 min",
    pages: 42,
    topics: ["Fraud Detection", "RegTech", "Customer Analytics", "Risk Management"],
    keyInsights: [
      "AI-powered fraud detection implementation",
      "Regulatory compliance automation",
      "Personalization at scale strategies",
      "Model governance and explainability"
    ],
    industry: "Financial Services",
    downloadUrl: "#"
  },
  "retail-customer-intelligence": {
    id: "retail-customer-intelligence",
    title: "Customer Intelligence for Retail",
    subtitle: "Data-Driven Personalization and Loyalty",
    description: "A practical guide for retail executives building customer intelligence capabilities. Covers customer data platforms, personalization engines, loyalty program optimization, and omnichannel analytics.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    readTime: "26 min",
    pages: 34,
    topics: ["Customer Data", "Personalization", "Loyalty Programs", "Omnichannel"],
    keyInsights: [
      "Building a unified customer data platform",
      "Real-time personalization implementation",
      "Loyalty program ROI optimization",
      "Cross-channel attribution modeling"
    ],
    industry: "Retail & E-commerce",
    downloadUrl: "#"
  }
};

export default function WhitepaperDownload() {
  const params = useParams();
  const whitepaperSlug = params.slug || "intelligent-automation-guide";
  const whitepaper = whitepapers[whitepaperSlug] || whitepapers["intelligent-automation-guide"];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-base via-base to-base text-white py-16">
        <div className="container">
          <Link href="/insights" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Insights
          </Link>
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Whitepaper</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{whitepaper.title}</h1>
          <p className="text-xl text-white/80">{whitepaper.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_400px] gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Whitepaper Details */}
            <div>
              {/* Cover Image */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-5 sm:mb-6 md:mb-8">
                <img
                  src={whitepaper.coverImage}
                  alt={whitepaper.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 sm:p-5 md:p-6 text-white">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{whitepaper.readTime} read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{whitepaper.pages} pages</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm mb-5 sm:mb-6 md:mb-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">About This Whitepaper</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{whitepaper.description}</p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6 md:mb-8">
                  {whitepaper.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-slate-100 text-charcoal/80 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Key Insights */}
                <h3 className="text-xl font-bold text-charcoal mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {whitepaper.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-6">Related Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/insights/why-intelligent-automation"
                    className="group p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Article</p>
                    <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                      Why Intelligent Automation Isn't Optional Anymore
                    </h4>
                  </Link>
                  <Link
                    href="/insights/process-mining-guide"
                    className="group p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Guide</p>
                    <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                      Process Mining: The Complete Guide
                    </h4>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="group p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Case Studies</p>
                    <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                      See How We've Helped Others
                    </h4>
                  </Link>
                  <Link
                    href="/contact"
                    className="group p-4 border border-slate-200 rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Contact</p>
                    <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                      Speak With an Expert
                    </h4>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Capture Form */}
            <div className="lg:sticky lg:top-4 sm:p-6 md:p-8 lg:self-start">
              <LeadCaptureForm
                whitepaperTitle={`Download: ${whitepaper.title}`}
                whitepaperDescription="Fill out the form below to receive your free copy."
                downloadUrl={whitepaper.downloadUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Whitepapers Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8">More Whitepapers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {Object.values(whitepapers)
              .filter((wp) => wp.id !== whitepaper.id)
              .slice(0, 3)
              .map((wp) => (
                <Link
                  key={wp.id}
                  href={`/resources/whitepapers/${wp.id}`}
                  className="group"
                >
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={wp.coverImage}
                      alt={wp.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-white/80 uppercase tracking-wider">
                        Whitepaper
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-2">
                    {wp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{wp.subtitle}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Export whitepapers data for use in other components
export { whitepapers };
