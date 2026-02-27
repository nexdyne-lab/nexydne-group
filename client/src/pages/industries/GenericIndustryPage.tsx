import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Cpu, LineChart, Shield, Users, Zap } from "lucide-react";

interface GenericIndustryPageProps {
  industry: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

// Industry configurations
export const industryConfigs: Record<string, GenericIndustryPageProps> = {
  "aerospace-defense": {
    industry: "Aerospace & Defense",
    slug: "aerospace-defense",
    tagline: "Mission-Critical Innovation for a Complex World",
    description: "Navigate regulatory complexity, optimize supply chains, and accelerate innovation with AI-powered solutions designed for the unique demands of aerospace and defense organizations.",
    heroImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&q=80",
    challenges: [
      "Complex regulatory compliance and security requirements",
      "Supply chain visibility and risk management",
      "Legacy system modernization",
      "Talent acquisition and retention in specialized fields",
      "Program cost overruns and schedule delays",
      "Data integration across classified and unclassified systems"
    ],
    solutions: [
      { title: "Predictive Maintenance & Asset Optimization", description: "Reduce downtime and extend asset life with AI-driven maintenance scheduling and performance monitoring." },
      { title: "Supply Chain Intelligence", description: "End-to-end visibility and risk analytics across complex, multi-tier supplier networks." },
      { title: "Secure Data Integration", description: "Connect disparate systems while maintaining strict security and compliance standards." },
      { title: "Program Analytics & Cost Control", description: "Real-time insights into program performance, cost drivers, and schedule risks." }
    ],
    stats: [
      { value: "35%", label: "Reduction in maintenance costs" },
      { value: "50%", label: "Faster compliance reporting" },
      { value: "25%", label: "Supply chain risk reduction" },
      { value: "40%", label: "Improvement in program visibility" }
    ]
  },
  "automotive": {
    industry: "Automotive",
    slug: "automotive",
    tagline: "Driving the Future of Mobility",
    description: "Transform your automotive operations with intelligent manufacturing, connected vehicle platforms, and data-driven customer experiences that define the next era of mobility.",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    challenges: [
      "Electric vehicle transition and new technology integration",
      "Supply chain disruptions and semiconductor shortages",
      "Connected vehicle data monetization",
      "Dealer network transformation",
      "Sustainability and emissions compliance",
      "Customer experience across digital and physical touchpoints"
    ],
    solutions: [
      { title: "Smart Manufacturing", description: "AI-powered production optimization, quality control, and predictive maintenance for modern automotive plants." },
      { title: "Connected Vehicle Platforms", description: "Scalable data infrastructure for vehicle telemetry, OTA updates, and connected services." },
      { title: "Dealer Experience Transformation", description: "Unified customer data platforms and digital tools that enhance the dealer-customer relationship." },
      { title: "Supply Chain Resilience", description: "Real-time visibility and predictive analytics to navigate supply chain complexity." }
    ],
    stats: [
      { value: "30%", label: "Production efficiency gains" },
      { value: "45%", label: "Faster time-to-market" },
      { value: "60%", label: "Customer data utilization" },
      { value: "25%", label: "Supply chain cost reduction" }
    ]
  },
  "consumer-products": {
    industry: "Consumer Products",
    slug: "consumer-products",
    tagline: "Winning in the Age of the Empowered Consumer",
    description: "Build direct consumer relationships, optimize your supply chain, and create personalized experiences that drive brand loyalty and sustainable growth.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    challenges: [
      "Direct-to-consumer channel development",
      "Demand forecasting accuracy",
      "Sustainability and ESG requirements",
      "Brand differentiation in crowded markets",
      "Omnichannel inventory optimization",
      "Consumer data privacy and personalization balance"
    ],
    solutions: [
      { title: "D2C Platform Development", description: "Build and scale direct consumer channels with integrated commerce, marketing, and fulfillment." },
      { title: "Demand Sensing & Planning", description: "AI-powered forecasting that improves accuracy and reduces inventory costs." },
      { title: "Consumer Intelligence", description: "Unified customer data platforms that enable personalization while respecting privacy." },
      { title: "Sustainable Operations", description: "Track, measure, and optimize sustainability metrics across your value chain." }
    ],
    stats: [
      { value: "40%", label: "D2C revenue growth" },
      { value: "35%", label: "Forecast accuracy improvement" },
      { value: "50%", label: "Customer engagement increase" },
      { value: "30%", label: "Inventory cost reduction" }
    ]
  },
  "education": {
    industry: "Education",
    slug: "education",
    tagline: "Transforming Learning for the Digital Age",
    description: "Empower educational institutions with personalized learning platforms, administrative automation, and data-driven insights that improve student outcomes and operational efficiency.",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    challenges: [
      "Student engagement and retention",
      "Personalized learning at scale",
      "Administrative efficiency and cost management",
      "Data-driven decision making",
      "Technology integration and adoption",
      "Accessibility and equity in education"
    ],
    solutions: [
      { title: "Learning Management Optimization", description: "Enhance LMS platforms with AI-powered recommendations and adaptive learning paths." },
      { title: "Student Success Analytics", description: "Early warning systems and intervention tools to improve retention and outcomes." },
      { title: "Administrative Automation", description: "Streamline enrollment, scheduling, and back-office operations with intelligent automation." },
      { title: "Institutional Analytics", description: "Comprehensive dashboards and insights for data-driven institutional decision making." }
    ],
    stats: [
      { value: "25%", label: "Improvement in student retention" },
      { value: "40%", label: "Administrative cost reduction" },
      { value: "35%", label: "Increase in student engagement" },
      { value: "50%", label: "Faster reporting cycles" }
    ]
  },
  "energy-utilities": {
    industry: "Energy & Utilities",
    slug: "energy-utilities",
    tagline: "Powering the Transition to a Sustainable Future",
    description: "Navigate the energy transition with intelligent grid management, renewable integration, and customer engagement solutions that balance reliability, sustainability, and profitability.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    challenges: [
      "Renewable energy integration and grid stability",
      "Aging infrastructure modernization",
      "Regulatory compliance and rate case management",
      "Customer experience and engagement",
      "Workforce transformation and safety",
      "Decarbonization and ESG commitments"
    ],
    solutions: [
      { title: "Smart Grid Analytics", description: "Real-time monitoring, predictive maintenance, and optimization for grid reliability and efficiency." },
      { title: "Renewable Integration", description: "Forecasting, storage optimization, and grid balancing for renewable energy assets." },
      { title: "Customer Engagement Platforms", description: "Digital tools for customer self-service, energy management, and program enrollment." },
      { title: "Asset Performance Management", description: "AI-driven maintenance and lifecycle optimization for critical infrastructure." }
    ],
    stats: [
      { value: "30%", label: "Reduction in outage duration" },
      { value: "25%", label: "Improvement in renewable utilization" },
      { value: "40%", label: "Customer satisfaction increase" },
      { value: "35%", label: "Maintenance cost reduction" }
    ]
  },
  "insurance": {
    industry: "Insurance",
    slug: "insurance",
    tagline: "Reimagining Risk in a Digital World",
    description: "Transform underwriting, claims, and customer experience with AI-powered solutions that improve accuracy, speed, and profitability while managing emerging risks.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    challenges: [
      "Legacy system modernization",
      "Claims processing efficiency",
      "Underwriting accuracy and speed",
      "Customer experience and digital engagement",
      "Fraud detection and prevention",
      "Emerging risk assessment (climate, cyber)"
    ],
    solutions: [
      { title: "Intelligent Underwriting", description: "AI-powered risk assessment and pricing that improves accuracy and reduces cycle time." },
      { title: "Claims Automation", description: "Straight-through processing and intelligent triage that accelerates resolution and reduces costs." },
      { title: "Customer Experience Platforms", description: "Digital-first engagement across policy lifecycle from quote to claim." },
      { title: "Fraud Analytics", description: "Advanced detection models that identify suspicious patterns while minimizing false positives." }
    ],
    stats: [
      { value: "50%", label: "Faster claims processing" },
      { value: "35%", label: "Improvement in loss ratio" },
      { value: "40%", label: "Reduction in fraud losses" },
      { value: "60%", label: "Digital adoption rate" }
    ]
  },
  "private-equity": {
    industry: "Private Equity & Investments",
    slug: "private-equity",
    tagline: "Accelerating Value Creation Across the Portfolio",
    description: "Enhance deal sourcing, due diligence, and portfolio value creation with data-driven insights and operational excellence capabilities that drive superior returns.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    challenges: [
      "Deal sourcing and competitive differentiation",
      "Due diligence speed and accuracy",
      "Portfolio company performance improvement",
      "Exit timing and value maximization",
      "ESG integration and reporting",
      "Talent and operating partner leverage"
    ],
    solutions: [
      { title: "Deal Intelligence Platform", description: "AI-powered deal sourcing, screening, and market intelligence for competitive advantage." },
      { title: "Commercial Due Diligence", description: "Rapid, data-driven assessment of market position, growth potential, and risks." },
      { title: "Portfolio Value Creation", description: "Operational playbooks and hands-on support to accelerate EBITDA growth." },
      { title: "Exit Preparation", description: "Strategic positioning, data room preparation, and narrative development for optimal exits." }
    ],
    stats: [
      { value: "2.5x", label: "Average portfolio EBITDA growth" },
      { value: "40%", label: "Faster due diligence cycles" },
      { value: "30%", label: "Improvement in deal win rate" },
      { value: "25%", label: "Higher exit multiples" }
    ]
  },
  "public-sector": {
    industry: "Public Sector",
    slug: "public-sector",
    tagline: "Modernizing Government for the Digital Era",
    description: "Help government agencies deliver better citizen services, improve operational efficiency, and make data-driven decisions while maintaining security and compliance.",
    heroImage: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1200&q=80",
    challenges: [
      "Legacy system modernization",
      "Citizen service delivery improvement",
      "Data sharing and interoperability",
      "Cybersecurity and compliance",
      "Workforce modernization",
      "Budget constraints and efficiency mandates"
    ],
    solutions: [
      { title: "Citizen Experience Platforms", description: "Digital services that make government interactions simple, accessible, and efficient." },
      { title: "Data Integration & Analytics", description: "Break down silos and enable data-driven decision making across agencies." },
      { title: "Process Automation", description: "Intelligent automation that improves efficiency while maintaining compliance." },
      { title: "Secure Cloud Migration", description: "Modernize infrastructure while meeting FedRAMP and other security requirements." }
    ],
    stats: [
      { value: "60%", label: "Reduction in processing time" },
      { value: "45%", label: "Improvement in citizen satisfaction" },
      { value: "35%", label: "Cost savings achieved" },
      { value: "50%", label: "Faster service delivery" }
    ]
  },
  "technology-media-telecom": {
    industry: "Technology, Media & Telecom",
    slug: "technology-media-telecom",
    tagline: "Innovating at the Speed of Digital",
    description: "Stay ahead of disruption with strategies for growth, operational excellence, and customer experience that leverage the latest in AI, cloud, and data technologies.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    challenges: [
      "Rapid technology evolution and disruption",
      "Customer acquisition and retention costs",
      "Content monetization and distribution",
      "5G and network infrastructure investment",
      "Data privacy and regulatory compliance",
      "Talent competition and retention"
    ],
    solutions: [
      { title: "Growth Strategy & GTM", description: "Market entry, product strategy, and go-to-market optimization for technology companies." },
      { title: "Customer Lifecycle Management", description: "Reduce churn and increase lifetime value with predictive analytics and personalization." },
      { title: "Network & Infrastructure Optimization", description: "Maximize ROI on network investments with AI-driven planning and operations." },
      { title: "Content Intelligence", description: "Data-driven content strategy, recommendation engines, and monetization optimization." }
    ],
    stats: [
      { value: "35%", label: "Reduction in customer churn" },
      { value: "40%", label: "Improvement in ARPU" },
      { value: "50%", label: "Faster product launches" },
      { value: "30%", label: "Network cost optimization" }
    ]
  },
  "transportation-logistics": {
    industry: "Transportation & Logistics",
    slug: "transportation-logistics",
    tagline: "Moving the World Smarter",
    description: "Optimize your supply chain with intelligent routing, real-time visibility, and predictive analytics that improve efficiency, reduce costs, and enhance customer satisfaction.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    challenges: [
      "Last-mile delivery optimization",
      "Fleet management and utilization",
      "Supply chain visibility and resilience",
      "Driver shortage and retention",
      "Sustainability and emissions reduction",
      "Customer experience and real-time tracking"
    ],
    solutions: [
      { title: "Route Optimization", description: "AI-powered routing that reduces miles, fuel costs, and delivery times." },
      { title: "Fleet Intelligence", description: "Predictive maintenance, utilization optimization, and driver performance analytics." },
      { title: "Supply Chain Visibility", description: "End-to-end tracking and exception management across your logistics network." },
      { title: "Customer Experience Platform", description: "Real-time tracking, proactive communication, and self-service capabilities." }
    ],
    stats: [
      { value: "25%", label: "Reduction in delivery costs" },
      { value: "30%", label: "Improvement in on-time delivery" },
      { value: "40%", label: "Fleet utilization increase" },
      { value: "35%", label: "Customer satisfaction improvement" }
    ]
  },
  "travel-hospitality": {
    industry: "Travel & Hospitality",
    slug: "travel-hospitality",
    tagline: "Creating Memorable Experiences at Scale",
    description: "Deliver personalized guest experiences, optimize revenue management, and streamline operations with AI-powered solutions designed for the hospitality industry.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    challenges: [
      "Demand volatility and revenue optimization",
      "Guest personalization and loyalty",
      "Labor management and scheduling",
      "Distribution channel management",
      "Sustainability initiatives",
      "Technology integration across properties"
    ],
    solutions: [
      { title: "Revenue Management", description: "Dynamic pricing and demand forecasting that maximizes RevPAR and profitability." },
      { title: "Guest Experience Platform", description: "Unified guest profiles and personalization across all touchpoints." },
      { title: "Operations Optimization", description: "Labor scheduling, housekeeping optimization, and maintenance management." },
      { title: "Distribution Strategy", description: "Channel optimization and direct booking strategies that reduce acquisition costs." }
    ],
    stats: [
      { value: "15%", label: "RevPAR improvement" },
      { value: "40%", label: "Increase in direct bookings" },
      { value: "25%", label: "Labor cost optimization" },
      { value: "35%", label: "Guest satisfaction increase" }
    ]
  },
  "urban-development": {
    industry: "Urban Development",
    slug: "urban-development",
    tagline: "Building Smarter, More Sustainable Cities",
    description: "Transform urban planning and real estate development with data-driven insights, smart city technologies, and sustainable design principles.",
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    challenges: [
      "Sustainable development requirements",
      "Smart city technology integration",
      "Community engagement and planning",
      "Infrastructure financing and ROI",
      "Regulatory compliance and approvals",
      "Mixed-use development complexity"
    ],
    solutions: [
      { title: "Smart City Platforms", description: "Integrated IoT and data platforms for traffic, energy, and public services management." },
      { title: "Development Analytics", description: "Market analysis, feasibility studies, and scenario planning for development projects." },
      { title: "Sustainability Optimization", description: "LEED certification support, energy modeling, and ESG reporting." },
      { title: "Community Engagement", description: "Digital platforms for stakeholder communication and participatory planning." }
    ],
    stats: [
      { value: "30%", label: "Reduction in energy consumption" },
      { value: "40%", label: "Faster approval cycles" },
      { value: "25%", label: "Improvement in project ROI" },
      { value: "50%", label: "Community engagement increase" }
    ]
  }
};

export default function GenericIndustryPage({ config }: { config: GenericIndustryPageProps }) {
  const icons = [Cpu, LineChart, Shield, Users, Zap, Building2];
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base via-base to-base text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={config.heroImage}
            alt={config.industry}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link href="/industries" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors text-sm">
              ← All Industries
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold mb-3">
              {config.industry}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4 font-serif italic">
              {config.tagline}
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {config.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
              Industry Challenges We Address
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique pressures facing {config.industry.toLowerCase()} organizations today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-base rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-charcoal/80 font-medium">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
              Our Solutions for {config.industry}
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored approaches that deliver measurable results for your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {config.solutions.map((solution, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-base rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
              Ready to Transform Your {config.industry} Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help you overcome your specific challenges and achieve measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
