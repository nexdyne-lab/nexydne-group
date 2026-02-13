export type SearchItemType = "Solution" | "Capability" | "Industry" | "Insight" | "Company" | "Case Study";

export interface SearchItem {
  title: string;
  type: SearchItemType;
  href: string;
  description?: string;
  keywords?: string[];
}

export const SEARCH_INDEX: SearchItem[] = [
  // Solutions
  { 
    title: "Intelligent Process Optimization", 
    type: "Solution", 
    href: "/solutions/intelligent-process-optimization",
    description: "Streamline operations with AI-driven process optimization.",
    keywords: ["process", "optimization", "ai", "automation", "efficiency"]
  },
  { 
    title: "Data-Driven Customer Intelligence", 
    type: "Solution", 
    href: "/solutions/data-solutions",
    description: "Unlock customer insights with advanced data analytics.",
    keywords: ["customer", "data", "analytics", "intelligence", "insights"]
  },
  { 
    title: "Scalable Enterprise Transformation", 
    type: "Solution", 
    href: "/solutions/process-orchestration",
    description: "Transform your enterprise with scalable process orchestration.",
    keywords: ["enterprise", "transformation", "scale", "orchestration"]
  },
  { 
    title: "Process Automation", 
    type: "Solution", 
    href: "/solutions/process-automation",
    description: "Automate repetitive tasks to improve productivity.",
    keywords: ["automation", "rpa", "tasks", "productivity"]
  },
  { 
    title: "Robotic Process Automation (RPA)", 
    type: "Solution", 
    href: "/solutions/rpa",
    description: "Implement software robots to automate business processes.",
    keywords: ["rpa", "robots", "automation", "bots"]
  },
  { 
    title: "Integration Platform as a Service (iPaaS)", 
    type: "Solution", 
    href: "/solutions/ipaas",
    description: "Connect your applications and data with cloud-based integration.",
    keywords: ["integration", "cloud", "ipaas", "api", "connect"]
  },
  { 
    title: "Process Orchestration", 
    type: "Solution", 
    href: "/solutions/process-orchestration",
    description: "Coordinate complex workflows across people, systems, and devices.",
    keywords: ["orchestration", "workflow", "bpm", "coordination"]
  },
  { 
    title: "Data Solutions", 
    type: "Solution", 
    href: "/solutions/data-solutions",
    description: "Comprehensive data services from strategy to implementation.",
    keywords: ["data", "solutions", "analytics", "big data"]
  },
  { 
    title: "Data Strategy", 
    type: "Solution", 
    href: "/solutions/data-strategy",
    description: "Develop a roadmap for data maturity and value creation.",
    keywords: ["strategy", "roadmap", "maturity", "value"]
  },
  { 
    title: "Data Platform", 
    type: "Solution", 
    href: "/solutions/data-platform",
    description: "Build a modern data foundation for your enterprise.",
    keywords: ["platform", "infrastructure", "architecture", "cloud"]
  },
  { 
    title: "Data Visualization", 
    type: "Solution", 
    href: "/solutions/data-visualization",
    description: "Turn complex data into clear, actionable insights.",
    keywords: ["visualization", "dashboard", "reporting", "bi"]
  },
  { 
    title: "Data Training", 
    type: "Solution", 
    href: "/solutions/data-training",
    description: "Upskill your team in data literacy and technical skills.",
    keywords: ["training", "education", "upskilling", "literacy"]
  },
  { 
    title: "Machine Learning", 
    type: "Solution", 
    href: "/solutions/machine-learning",
    description: "Leverage predictive models to drive business outcomes.",
    keywords: ["ml", "ai", "predictive", "models"]
  },
  { 
    title: "Data Governance", 
    type: "Solution", 
    href: "/solutions/data-governance",
    description: "Ensure data quality, security, and compliance.",
    keywords: ["governance", "compliance", "security", "quality"]
  },
  { 
    title: "Content Services Platform", 
    type: "Solution", 
    href: "/solutions/content-service-platform",
    description: "Manage enterprise content with intelligent platforms.",
    keywords: ["content", "management", "ecm", "documents"]
  },
  { 
    title: "Data Engineering", 
    type: "Solution", 
    href: "/solutions/data-engineering",
    description: "Build robust data pipelines and infrastructure.",
    keywords: ["engineering", "pipelines", "etl", "infrastructure"]
  },
  { 
    title: "App Development", 
    type: "Solution", 
    href: "/solutions/app-development",
    description: "Custom application development for web and mobile.",
    keywords: ["app", "development", "web", "mobile", "software"]
  },
  { 
    title: "Low-Code Development", 
    type: "Solution", 
    href: "/solutions/low-code-development",
    description: "Accelerate delivery with low-code platforms.",
    keywords: ["low-code", "rapid", "development", "platform"]
  },
  { 
    title: "Custom Software", 
    type: "Solution", 
    href: "/solutions/custom-software",
    description: "Tailored software solutions for unique business needs.",
    keywords: ["custom", "software", "bespoke", "development"]
  },
  { 
    title: "Customer Portal", 
    type: "Solution", 
    href: "/solutions/customer-portal",
    description: "Self-service portals to enhance customer experience.",
    keywords: ["portal", "customer", "experience", "self-service"]
  },

  // Capabilities
  { 
    title: "Artificial Intelligence", 
    type: "Capability", 
    href: "/capabilities/artificial-intelligence",
    description: "Harness the power of AI to transform your business.",
    keywords: ["ai", "artificial intelligence", "ml", "cognitive"]
  },
  { 
    title: "Internet of Things (IoT)", 
    type: "Capability", 
    href: "/capabilities/internet-of-things",
    description: "Connect physical assets to digital systems.",
    keywords: ["iot", "sensors", "connected", "devices"]
  },
  { 
    title: "Digital Twins", 
    type: "Capability", 
    href: "/capabilities/digital-twins",
    description: "Create virtual replicas of physical systems for simulation.",
    keywords: ["digital twin", "simulation", "replica", "virtual"]
  },
  { 
    title: "Risk & Resilience", 
    type: "Capability", 
    href: "/capabilities/risk-resilience",
    description: "Build resilient operations to withstand disruptions.",
    keywords: ["risk", "resilience", "security", "continuity"]
  },
  { 
    title: "Custom Model Tuning", 
    type: "Capability", 
    href: "/capabilities/custom-model-tuning",
    description: "Fine-tune AI models for your specific use cases.",
    keywords: ["tuning", "models", "ai", "customization"]
  },
  { 
    title: "Data Transformation", 
    type: "Capability", 
    href: "/capabilities/data-transformation",
    description: "Modernize your data architecture and culture.",
    keywords: ["transformation", "modernization", "architecture", "culture"]
  },
  { 
    title: "Generative AI", 
    type: "Capability", 
    href: "/capabilities/generative-ai",
    description: "Create new content and solutions with Generative AI.",
    keywords: ["genai", "generative", "llm", "content"]
  },
  { 
    title: "Growth, Marketing & Sales", 
    type: "Capability", 
    href: "/capabilities/growth-marketing-sales",
    description: "Accelerate revenue growth with data-driven strategies.",
    keywords: ["growth", "marketing", "sales", "revenue"]
  },
  { 
    title: "Marketing Operations", 
    type: "Capability", 
    href: "/capabilities/growth-marketing-sales/marketing-operations",
    description: "Optimize marketing processes and technology.",
    keywords: ["marketing", "operations", "martech", "efficiency"]
  },
  { 
    title: "MarTech Stack", 
    type: "Capability", 
    href: "/capabilities/growth-marketing-sales/martech-stack",
    description: "Build an integrated marketing technology stack.",
    keywords: ["stack", "technology", "integration", "tools"]
  },

  // Industries / Cases
  { 
    title: "Financial Services", 
    type: "Industry", 
    href: "/cases",
    description: "Solutions for banking, insurance, and fintech.",
    keywords: ["finance", "banking", "insurance", "fintech"]
  },
  { 
    title: "Retail & E-commerce", 
    type: "Industry", 
    href: "/cases",
    description: "Transform retail experiences and supply chains.",
    keywords: ["retail", "ecommerce", "shopping", "supply chain"]
  },
  { 
    title: "Healthcare", 
    type: "Industry", 
    href: "/cases",
    description: "Improve patient outcomes with digital health solutions.",
    keywords: ["healthcare", "medical", "patient", "hospital"]
  },
  { 
    title: "Manufacturing", 
    type: "Industry", 
    href: "/cases",
    description: "Smart manufacturing and Industry 4.0 solutions.",
    keywords: ["manufacturing", "industry 4.0", "factory", "production"]
  },
  { 
    title: "Technology", 
    type: "Industry", 
    href: "/cases",
    description: "Accelerate innovation for technology companies.",
    keywords: ["tech", "software", "innovation", "saas"]
  },

  // Insights
  { 
    title: "Why Intelligent Automation Isn't Optional Anymore", 
    type: "Insight", 
    href: "/insights/why-intelligent-automation",
    description: "The strategic imperative of automation in modern business.",
    keywords: ["automation", "strategy", "future", "business"]
  },
  { 
    title: "How AI Agents Transform Enterprise Operations", 
    type: "Insight", 
    href: "/insights/ai-agents-transform-operations",
    description: "Leveraging autonomous agents for operational excellence.",
    keywords: ["agents", "ai", "operations", "autonomous"]
  },
  { 
    title: "The Complete Guide to Process Mining", 
    type: "Insight", 
    href: "/insights/process-mining-guide",
    description: "Everything you need to know about process mining.",
    keywords: ["process mining", "guide", "analysis", "discovery"]
  },
  { 
    title: "CEO's Guide to Data Modernization", 
    type: "Insight", 
    href: "/insights/ceo-guide-data-modernization",
    description: "A strategic overview for executives.",
    keywords: ["ceo", "executive", "modernization", "strategy"]
  },
  { 
    title: "Building a Data Culture", 
    type: "Insight", 
    href: "/insights/building-data-culture",
    description: "Fostering a data-driven mindset across the organization.",
    keywords: ["culture", "people", "mindset", "organization"]
  },
  { 
    title: "From Data Lake to Value Stream", 
    type: "Insight", 
    href: "/insights/data-lake-to-value-stream",
    description: "Monetizing data assets effectively.",
    keywords: ["monetization", "value", "assets", "lake"]
  },
  { 
    title: "Corporate Venture Advantage", 
    type: "Insight", 
    href: "/insights/corporate-venture-advantage",
    description: "Innovating through corporate venturing.",
    keywords: ["venture", "innovation", "corporate", "startup"]
  },
  { 
    title: "From MVP to Scale", 
    type: "Insight", 
    href: "/insights/from-mvp-to-scale",
    description: "Scaling digital products successfully.",
    keywords: ["scale", "growth", "product", "mvp"]
  },
  { 
    title: "Hiring for Builders", 
    type: "Insight", 
    href: "/insights/hiring-for-builders",
    description: "Recruiting top technical talent.",
    keywords: ["hiring", "recruiting", "talent", "team"]
  },
  { 
    title: "Generative Supply Chain", 
    type: "Insight", 
    href: "/insights/generative-supply-chain",
    description: "Applying GenAI to supply chain management.",
    keywords: ["supply chain", "genai", "logistics", "management"]
  },
  { 
    title: "Digital Twin in Manufacturing", 
    type: "Insight", 
    href: "/insights/digital-twin-manufacturing",
    description: "Optimizing production with digital twins.",
    keywords: ["manufacturing", "digital twin", "production", "optimization"]
  },
  { 
    title: "IoT Resilient Supply Chain", 
    type: "Insight", 
    href: "/insights/iot-resilient-supply-chain",
    description: "Enhancing resilience with IoT connectivity.",
    keywords: ["iot", "resilience", "supply chain", "connectivity"]
  },
  { 
    title: "Beyond Segmentation", 
    type: "Insight", 
    href: "/insights/beyond-segmentation",
    description: "Hyper-personalization in marketing.",
    keywords: ["marketing", "personalization", "segmentation", "customer"]
  },
  { 
    title: "Privacy by Design", 
    type: "Insight", 
    href: "/insights/privacy-by-design",
    description: "Embedding privacy into product development.",
    keywords: ["privacy", "security", "gdpr", "compliance"]
  },
  { 
    title: "Real-Time Decision Architectures", 
    type: "Insight", 
    href: "/insights/real-time-decision-architectures",
    description: "Building systems for instant decision making.",
    keywords: ["real-time", "decision", "architecture", "speed"]
  },
  { 
    title: "Green Growth Imperative", 
    type: "Insight", 
    href: "/insights/green-growth-imperative",
    description: "Sustainable business strategies for growth.",
    keywords: ["sustainability", "green", "growth", "esg"]
  },
  { 
    title: "Net Zero Transition", 
    type: "Insight", 
    href: "/insights/net-zero-transition",
    description: "Navigating the path to net zero emissions.",
    keywords: ["net zero", "carbon", "emissions", "sustainability"]
  },
  { 
    title: "Carbon Markets", 
    type: "Insight", 
    href: "/insights/carbon-markets",
    description: "Understanding voluntary and compliance carbon markets.",
    keywords: ["carbon", "markets", "trading", "credits"]
  },
  { 
    title: "Green Materials", 
    type: "Insight", 
    href: "/insights/green-materials",
    description: "Innovations in sustainable materials.",
    keywords: ["materials", "sustainable", "innovation", "green"]
  },
  { 
    title: "Market Entry Architecture", 
    type: "Insight", 
    href: "/insights/market-entry-architecture",
    description: "Frameworks for entering new markets.",
    keywords: ["market entry", "strategy", "expansion", "global"]
  },
  { 
    title: "Commercial Due Diligence", 
    type: "Insight", 
    href: "/insights/commercial-due-diligence",
    description: "Assessing commercial viability of investments.",
    keywords: ["due diligence", "investment", "ma", "finance"]
  },
  { 
    title: "Value Proposition Design", 
    type: "Insight", 
    href: "/insights/value-proposition-design",
    description: "Crafting compelling value propositions.",
    keywords: ["value proposition", "design", "product", "marketing"]
  },
  { 
    title: "Future of Marketing Ops", 
    type: "Insight", 
    href: "/insights/future-of-marketing-ops",
    description: "Trends shaping the future of marketing operations.",
    keywords: ["marketing", "operations", "future", "trends"]
  },
  { 
    title: "No-Code Marketing Automation", 
    type: "Insight", 
    href: "/insights/no-code-marketing-automation",
    description: "Empowering marketers with no-code tools.",
    keywords: ["no-code", "automation", "marketing", "tools"]
  },
  { 
    title: "Marketing Data ROI", 
    type: "Insight", 
    href: "/insights/marketing-data-roi",
    description: "Measuring the return on marketing data investments.",
    keywords: ["roi", "data", "marketing", "measurement"]
  },
  { 
    title: "Composable Architecture", 
    type: "Insight", 
    href: "/insights/composable-architecture",
    description: "Building flexible systems with composable components.",
    keywords: ["architecture", "composable", "flexible", "systems"]
  },
  { 
    title: "Middleware Patterns", 
    type: "Insight", 
    href: "/insights/middleware-patterns",
    description: "Common patterns for effective middleware integration.",
    keywords: ["middleware", "integration", "patterns", "architecture"]
  },
  { 
    title: "Vendor Selection", 
    type: "Insight", 
    href: "/insights/vendor-selection",
    description: "Best practices for selecting technology vendors.",
    keywords: ["vendor", "selection", "procurement", "technology"]
  },

  // Company
  { 
    title: "About Us", 
    type: "Company", 
    href: "/team",
    description: "Learn about our mission, vision, and team.",
    keywords: ["about", "mission", "vision", "team"]
  },
  { 
    title: "Careers", 
    type: "Company", 
    href: "/team",
    description: "Join our team of innovators and builders.",
    keywords: ["careers", "jobs", "hiring", "culture"]
  },
  { 
    title: "Contact", 
    type: "Company", 
    href: "/team",
    description: "Get in touch with us.",
    keywords: ["contact", "email", "phone", "address"]
  },
  
  // Case Studies (Selected)
  { 
    title: "Global Retailer Transformation", 
    type: "Case Study", 
    href: "/cases/global-retailer",
    description: "Digital transformation for a leading global retailer.",
    keywords: ["retail", "transformation", "global", "case study"]
  },
  { 
    title: "Financial Institution Modernization", 
    type: "Case Study", 
    href: "/cases/financial-institution",
    description: "Modernizing legacy systems for a major bank.",
    keywords: ["finance", "banking", "modernization", "legacy"]
  },
  { 
    title: "Healthcare Provider Analytics", 
    type: "Case Study", 
    href: "/cases/healthcare-provider",
    description: "Advanced analytics for better patient care.",
    keywords: ["healthcare", "analytics", "patient", "data"]
  },
  { 
    title: "Law Firm Document Intelligence", 
    type: "Case Study", 
    href: "/cases/law-firm-doc-intel",
    description: "Automating document review with AI.",
    keywords: ["legal", "law", "document", "ai", "automation"]
  },
  { 
    title: "Telehealth Scaling", 
    type: "Case Study", 
    href: "/cases/telehealth-scaling",
    description: "Scaling telehealth services during high demand.",
    keywords: ["telehealth", "healthcare", "scaling", "remote"]
  }
];
