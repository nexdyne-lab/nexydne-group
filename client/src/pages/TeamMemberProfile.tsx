import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin, ArrowLeft, FileText, Briefcase } from 'lucide-react';

// Extended team data with publications and client work
const teamMembers = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    title: "Managing Partner",
    location: "New York",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
    specialization: "Leads digital transformation initiatives for Fortune 500 companies and high-growth SMEs across the Northeast",
    expertise: ["Digital Transformation", "Cloud & Infrastructure", "Enterprise Applications"],
    industries: ["Professional Services", "Financial Services", "Technology"],
    bio: "Leads digital transformation initiatives for Fortune 500 companies and high-growth SMEs across the Northeast",
    fullBio: "Sarah's work focuses on digital transformation strategies that bridge traditional business operations with emerging technologies. She specializes in helping organizations navigate complex technology adoption while maintaining operational excellence and driving measurable business outcomes.\n\nIn the digital transformation space, Sarah's recent projects include leading a comprehensive cloud migration program for a Fortune 500 financial services company that reduced infrastructure costs by 35 percent while improving system reliability, designing an enterprise-wide data governance framework for a major healthcare provider that ensured HIPAA compliance while enabling advanced analytics, and implementing an AI-powered customer experience platform for a retail chain that increased customer satisfaction scores by 28 percent across all channels.\n\nSarah's recent client work in the SME sector includes helping a regional manufacturing company modernize its legacy ERP system to enable real-time inventory management and predictive maintenance, as well as advising a professional services firm on implementing collaborative work platforms that improved team productivity by 40 percent during their transition to hybrid work.\n\nBefore joining NexDyne, Sarah was the director of technology strategy at a leading digital consultancy, where she built and led their enterprise transformation practice. She holds a master's degree in information systems from MIT and an MBA from Harvard Business School.",
    publications: [
      {
        title: "Building resilient digital infrastructure for growth",
        type: "Article",
        year: "2024",
        publication: "Harvard Business Review",
        description: "Exploring strategies for building scalable, resilient digital infrastructure that supports business growth."
      },
      {
        title: "The executive's guide to cloud migration strategy",
        type: "Whitepaper",
        year: "2024",
        publication: "NexDyne Insights",
        description: "Comprehensive guide to planning and executing successful cloud migration initiatives."
      }
    ],
    pastExperience: [
      {
        company: "Accenture",
        role: "Director of Technology Strategy",
        description: "Led enterprise transformation practice"
      },
      {
        company: "Deloitte Digital",
        role: "Senior Manager",
        description: "Managed digital innovation programs"
      }
    ],
    clientWork: [
      {
        client: "Mid-Market Law Firm",
        industry: "Legal Services",
        challenge: "Manual document review processes consuming 40% of billable hours",
        solution: "Implemented AI-powered document analysis and contract review automation",
        result: "Reduced document review time by 65%, increased billable hours by 28%"
      },
      {
        client: "Regional Investment Bank",
        industry: "Financial Services",
        challenge: "Compliance reporting requiring 200+ manual hours monthly",
        solution: "Deployed intelligent automation for regulatory reporting and data aggregation",
        result: "Automated 85% of compliance workflows, reduced reporting time to 30 hours"
      },
      {
        client: "Accounting Firm Network",
        industry: "Professional Services",
        challenge: "Client onboarding taking 3-4 weeks with high error rates",
        solution: "Created automated onboarding workflows with intelligent data validation",
        result: "Reduced onboarding time to 5 days, decreased errors by 92%"
      }
    ]
  },
  {
    id: "james-chen",
    name: "James Chen",
    title: "Senior Partner",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
    specialization: "Specializes in cloud migration strategies and infrastructure optimization for mid-market technology companies",
    expertise: ["Cloud & Infrastructure", "DevOps & Automation", "System Architecture"],
    industries: ["Technology", "Financial Services", "SaaS"],
    bio: "Specializes in cloud migration strategies and infrastructure optimization for mid-market technology companies",
    fullBio: "James's work focuses on cloud infrastructure transformations that enable scalability, reliability, and cost efficiency. He brings deep technical expertise combined with strategic business acumen to help organizations maximize their cloud investments and build modern, resilient technology foundations.\n\nIn the cloud infrastructure space, James's recent projects include architecting a multi-cloud strategy for a SaaS company that reduced hosting costs by 42 percent while improving global latency by 60 percent, designing a containerized microservices architecture for a fintech startup that enabled them to scale from 50,000 to 2 million users without infrastructure bottlenecks, and implementing a comprehensive disaster recovery and business continuity solution for a healthcare technology provider that achieved 99.99 percent uptime.\n\nJames's recent client work in infrastructure optimization includes helping a media streaming company redesign their content delivery network to handle 10x traffic spikes during peak events, as well as advising an e-commerce platform on implementing auto-scaling infrastructure that reduced server costs by 55 percent during off-peak periods.\n\nBefore joining NexDyne, James was a principal cloud architect at Google Cloud, where he worked with enterprise customers on large-scale cloud migrations. He holds a master's degree in computer science from Stanford University and is a certified solutions architect for AWS, Azure, and Google Cloud.",
    publications: [
      {
        title: "Multi-cloud strategies for enterprise resilience",
        type: "Research Paper",
        year: "2024",
        publication: "IEEE Cloud Computing",
        description: "Comprehensive research on building resilient multi-cloud architectures."
      }
    ],
    pastExperience: [
      {
        company: "Google Cloud",
        role: "Principal Cloud Architect",
        description: "Led enterprise cloud migration programs"
      },
      {
        company: "Amazon Web Services",
        role: "Senior Solutions Architect",
        description: "Designed cloud infrastructure for Fortune 500 clients"
      }
    ],
    clientWork: [
      {
        client: "SaaS Platform",
        industry: "Technology",
        challenge: "High cloud costs and performance bottlenecks limiting growth",
        solution: "Architected multi-cloud strategy with optimized resource allocation",
        result: "Reduced hosting costs by 42%, improved global latency by 60%"
      },
      {
        client: "Fintech Startup",
        industry: "Financial Services",
        challenge: "Infrastructure unable to scale with rapid user growth",
        solution: "Designed containerized microservices architecture with auto-scaling",
        result: "Scaled from 50K to 2M users without infrastructure issues"
      }
    ]
  },
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    title: "Managing Partner",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop",
    specialization: "Drives enterprise digital solutions for leading African businesses and multinational corporations",
    expertise: ["Enterprise Applications", "Digital Product Strategy", "Mobile Development"],
    industries: ["Financial Services", "Telecommunications", "Healthcare"],
    bio: "Drives enterprise digital solutions for leading African businesses and multinational corporations",
    fullBio: "Amara's work focuses on enterprise application development and digital product strategy that drives business transformation. She specializes in helping organizations build scalable, user-centric digital solutions that solve complex business challenges and create competitive advantages in rapidly evolving markets.\n\nIn the enterprise applications space, Amara's recent projects include leading the development of a custom supply chain management platform for a pan-African logistics company that improved delivery accuracy by 45 percent and reduced operational costs by 30 percent, designing and implementing a mobile-first banking application for a leading financial institution that onboarded 500,000 new customers in its first year, and building an integrated customer relationship management system for a telecommunications provider that unified data from 12 legacy systems and improved customer service response times by 60 percent.\n\nAmara's recent client work in digital product development includes helping a retail conglomerate launch an e-commerce platform that achieved $10 million in revenue within six months, as well as advising a healthcare provider on developing a telemedicine application that expanded their patient reach by 200 percent across underserved regions.\n\nBefore joining NexDyne, Amara was the head of digital products at a leading African technology company, where she built and scaled multiple successful digital platforms. She holds a master's degree in software engineering from the University of Oxford and an MBA from INSEAD.",
    publications: [
      {
        title: "Building digital products for emerging markets",
        type: "Case Study",
        year: "2024",
        publication: "MIT Sloan Management Review",
        description: "Exploring strategies for building successful digital products in emerging markets."
      },
      {
        title: "Mobile-first strategies for financial inclusion",
        type: "Article",
        year: "2024",
        publication: "TechCrunch",
        description: "How mobile technology is driving financial inclusion across Africa."
      }
    ],
    pastExperience: [
      {
        company: "Andela",
        role: "Head of Digital Products",
        description: "Built and scaled digital platforms across Africa"
      },
      {
        company: "Microsoft Africa",
        role: "Senior Product Manager",
        description: "Led enterprise software development initiatives"
      }
    ],
    clientWork: [
      {
        client: "Pan-African Logistics Company",
        industry: "Logistics",
        challenge: "Manual supply chain processes causing delays and errors",
        solution: "Developed custom supply chain management platform with real-time tracking",
        result: "Improved delivery accuracy by 45%, reduced operational costs by 30%"
      },
      {
        client: "Leading Financial Institution",
        industry: "Financial Services",
        challenge: "Traditional banking channels limiting customer acquisition",
        solution: "Designed and implemented mobile-first banking application",
        result: "Onboarded 500,000 new customers in first year"
      }
    ]
  },
  {
    id: "david-richardson",
    name: "David Richardson",
    title: "Senior Consultant",
    location: "New York",
    image: "/author-male-2.afcf176d.jpg",
    expertise: ["Digital Transformation", "Legal Tech", "Document Automation"],
    industries: ["Legal", "Professional Services", "Healthcare"],
    bio: "David specializes in digital transformation for professional services firms, with deep expertise in legal tech, document automation, and AI-powered knowledge management systems.",
    fullBio: "David Richardson is a recognized expert in legal technology and document automation. With a background in both law and technology, he uniquely understands the challenges facing modern professional services firms. David has led digital transformation initiatives for over 30 law firms and professional services organizations, helping them modernize operations while maintaining the highest standards of quality and compliance. He is a frequent speaker at legal technology conferences and holds a JD from NYU School of Law and a BS in Information Systems from Cornell University.",
    publications: [
      {
        title: "The Future of Legal Tech: AI and Automation",
        type: "Book Chapter",
        year: "2024",
        description: "Contributing author to 'Legal Innovation Handbook' published by Thomson Reuters."
      },
      {
        title: "Document Automation Best Practices for Law Firms",
        type: "Guide",
        year: "2023",
        description: "Comprehensive implementation guide downloaded by over 5,000 legal professionals."
      }
    ],
    clientWork: [
      {
        client: "National Law Firm",
        industry: "Legal Services",
        challenge: "Contract generation requiring 8-12 hours per document",
        solution: "Implemented intelligent contract automation with clause library and AI suggestions",
        result: "Reduced contract creation time to 45 minutes, improved consistency by 98%"
      },
      {
        client: "Healthcare Legal Department",
        industry: "Healthcare",
        challenge: "Managing 10,000+ contracts with manual tracking and renewal processes",
        solution: "Deployed contract lifecycle management system with automated alerts and analytics",
        result: "Prevented $2.3M in missed renewal opportunities, reduced contract risk by 75%"
      }
    ]
  },
  {
    id: "jennifer-park",
    name: "Jennifer Park",
    title: "AI & Machine Learning Lead",
    location: "San Francisco",
    image: "/author-female-2.55e29921.jpg",
    expertise: ["Natural Language Processing", "Machine Learning", "Intelligent Automation"],
    industries: ["Technology", "Financial Services", "Healthcare"],
    bio: "Jennifer leads NexDyne's AI and machine learning practice, helping organizations leverage natural language processing and intelligent automation to transform operations.",
    fullBio: "Jennifer Park is a leading AI researcher and practitioner with expertise in natural language processing, machine learning, and computer vision. Before joining NexDyne, she was a senior research scientist at a major tech company, where she developed production ML systems serving millions of users. Jennifer's work focuses on making advanced AI accessible and practical for mid-market companies. She holds a PhD in Computer Science from Stanford University, where her dissertation on transfer learning won the ACM SIGKDD Dissertation Award.",
    publications: [
      {
        title: "Practical NLP for Business Applications",
        type: "Technical Book",
        year: "2024",
        description: "Published by O'Reilly Media, a comprehensive guide to implementing NLP solutions."
      },
      {
        title: "Transfer Learning for Small Data Scenarios",
        type: "Research Paper",
        year: "2023",
        description: "Published in NeurIPS, demonstrating techniques for training ML models with limited data."
      },
      {
        title: "Ethical AI: From Principles to Practice",
        type: "Article Series",
        year: "2023",
        description: "Four-part series in MIT Technology Review on implementing responsible AI systems."
      }
    ],
    clientWork: [
      {
        client: "Financial Services Company",
        industry: "Financial Services",
        challenge: "Processing 50,000+ customer inquiries monthly with inconsistent responses",
        solution: "Built custom NLP model for intent classification and automated response generation",
        result: "Automated 72% of inquiries, improved response consistency, reduced handling time by 60%"
      },
      {
        client: "Healthcare Technology Firm",
        industry: "Healthcare",
        challenge: "Extracting clinical data from unstructured medical records",
        solution: "Developed specialized NLP pipeline for medical entity recognition and data extraction",
        result: "Achieved 94% accuracy in data extraction, reduced manual review time by 80%"
      },
      {
        client: "E-commerce Platform",
        industry: "Technology",
        challenge: "Product categorization and tagging requiring manual effort for 100K+ SKUs",
        solution: "Implemented ML-powered product classification and automated tagging system",
        result: "Automated 95% of product categorization, improved search relevance by 40%"
      }
    ]
  },
  {
    id: "michael-torres",
    name: "Michael Torres",
    title: "Digital Strategy Consultant",
    location: "Chicago",
    image: "/author-male-1.f0aef13a.jpg",
    expertise: ["Digital Transformation", "Change Management", "Process Optimization"],
    industries: ["Manufacturing", "Logistics", "Professional Services"],
    bio: "Michael specializes in helping mid-sized businesses navigate digital transformation journeys. With expertise in change management and process optimization, he ensures that technology implementations deliver lasting business value.",
    fullBio: "Michael Torres combines strategic thinking with hands-on implementation expertise to drive successful digital transformations. With a background in industrial engineering and organizational psychology, he understands both the technical and human dimensions of change. Michael has led transformation initiatives for over 40 mid-market companies, consistently delivering projects on time and achieving adoption rates above 90%. He is a certified Project Management Professional (PMP) and holds an MBA from the University of Chicago Booth School of Business.",
    publications: [
      {
        title: "Change Management in Digital Transformation",
        type: "Whitepaper",
        year: "2024",
        description: "Framework for managing organizational change during technology implementations."
      },
      {
        title: "The Mid-Market Advantage: Agility in Transformation",
        type: "Article",
        year: "2023",
        description: "Published in McKinsey Quarterly, exploring how mid-sized firms can outpace larger competitors."
      }
    ],
    clientWork: [
      {
        client: "Manufacturing Company",
        industry: "Manufacturing",
        challenge: "Legacy systems preventing real-time visibility into production processes",
        solution: "Led digital transformation initiative including IoT sensors, analytics platform, and process redesign",
        result: "Achieved 99% on-time delivery, reduced waste by 35%, improved OEE by 28%"
      },
      {
        client: "Logistics Provider",
        industry: "Logistics",
        challenge: "Manual route planning and dispatch causing delays and inefficiencies",
        solution: "Implemented AI-powered route optimization and automated dispatch system",
        result: "Reduced fuel costs by 22%, improved on-time delivery to 97%, increased daily deliveries by 30%"
      },
      {
        client: "Professional Services Firm",
        industry: "Professional Services",
        challenge: "Fragmented systems causing data silos and inefficient workflows",
        solution: "Designed and implemented integrated platform connecting CRM, project management, and billing",
        result: "Reduced administrative time by 40%, improved project visibility, increased client satisfaction scores by 25%"
      }
    ]
  },
  {
    id: "lisa-chen",
    name: "Lisa Chen",
    title: "ROI & Analytics Consultant",
    location: "Boston",
    image: "/author-female-1.d303b65c.jpg",
    expertise: ["ROI Measurement", "Business Analytics", "Performance Optimization"],
    industries: ["Financial Services", "Technology", "Professional Services"],
    bio: "Lisa focuses on measuring and optimizing the return on investment for automation and digital transformation projects. She develops custom analytics frameworks that help clients track performance and demonstrate value.",
    fullBio: "Lisa Chen is a data-driven strategist who specializes in quantifying the business impact of technology investments. With a background in finance and data science, she has developed proprietary frameworks for measuring ROI across various automation and AI initiatives. Lisa's analytical rigor and business acumen have helped clients secure executive buy-in and funding for transformation initiatives. She holds a Master's degree in Business Analytics from MIT Sloan and is a Certified Analytics Professional (CAP).",
    publications: [
      {
        title: "Measuring What Matters: Analytics for Automation ROI",
        type: "Research Report",
        year: "2024",
        description: "Comprehensive study of ROI measurement practices across 200+ automation projects."
      },
      {
        title: "Beyond Cost Savings: The Full Value of Automation",
        type: "Whitepaper",
        year: "2023",
        description: "Framework for capturing both tangible and intangible benefits of automation initiatives."
      },
      {
        title: "Predictive Analytics for Business Performance",
        type: "Article",
        year: "2023",
        description: "Published in Sloan Management Review, exploring advanced analytics techniques for business leaders."
      }
    ],
    clientWork: [
      {
        client: "Investment Management Firm",
        industry: "Financial Services",
        challenge: "Unable to quantify impact of automation investments for board reporting",
        solution: "Developed comprehensive ROI framework and executive dashboard tracking 15+ KPIs",
        result: "Demonstrated 340% ROI over 18 months, secured $5M additional funding for expansion"
      },
      {
        client: "SaaS Company",
        industry: "Technology",
        challenge: "Customer churn analysis limited to basic metrics, missing root causes",
        solution: "Built predictive churn model and implemented early warning system with intervention workflows",
        result: "Reduced churn by 32%, identified $2.8M in at-risk revenue, improved retention strategies"
      },
      {
        client: "Consulting Firm",
        industry: "Professional Services",
        challenge: "Project profitability analysis taking weeks, limiting strategic decision-making",
        solution: "Created real-time analytics platform with automated profitability tracking and forecasting",
        result: "Enabled daily profitability insights, improved project margins by 18%, reduced unprofitable projects by 65%"
      }
    ]
  },
  {
    id: "james-anderson",
    name: "James Anderson",
    title: "Healthcare Technology Consultant",
    location: "Atlanta",
    image: "/author-male-1.f0aef13a.jpg",
    expertise: ["Healthcare IT", "HIPAA Compliance", "Clinical Workflow Automation"],
    industries: ["Healthcare", "Life Sciences", "Medical Devices"],
    bio: "James specializes in healthcare technology solutions, helping hospitals, clinics, and healthcare organizations automate clinical and administrative workflows while maintaining strict compliance with HIPAA and other regulations.",
    fullBio: "James Anderson is a healthcare IT specialist with deep expertise in clinical workflows, regulatory compliance, and healthcare data security. With a clinical background as a registered nurse and subsequent technology training, James bridges the gap between healthcare providers and technology solutions. He has implemented automation and AI solutions for over 25 healthcare organizations, always prioritizing patient safety and data privacy. James holds a Master's degree in Health Informatics from Johns Hopkins University and maintains certifications in HIPAA compliance and healthcare IT security.",
    publications: [
      {
        title: "HIPAA-Compliant Automation in Healthcare",
        type: "Technical Guide",
        year: "2024",
        description: "Comprehensive guide to implementing automation while maintaining regulatory compliance."
      },
      {
        title: "Clinical Workflow Optimization: A Practical Approach",
        type: "Article",
        year: "2023",
        description: "Published in Healthcare IT News, exploring evidence-based approaches to workflow improvement."
      }
    ],
    clientWork: [
      {
        client: "Regional Hospital System",
        industry: "Healthcare",
        challenge: "Manual prior authorization process causing treatment delays and administrative burden",
        solution: "Implemented automated prior authorization system with intelligent routing and status tracking",
        result: "Reduced authorization time from 3 days to 4 hours, decreased denials by 45%, improved patient satisfaction"
      },
      {
        client: "Multi-Specialty Clinic",
        industry: "Healthcare",
        challenge: "Patient scheduling inefficiencies leading to 20% no-show rate and revenue loss",
        solution: "Deployed AI-powered scheduling optimization with automated reminders and waitlist management",
        result: "Reduced no-shows to 8%, increased appointment utilization by 35%, added $1.2M annual revenue"
      },
      {
        client: "Medical Device Company",
        industry: "Life Sciences",
        challenge: "Adverse event reporting requiring 40+ hours weekly with compliance risks",
        solution: "Automated adverse event intake, classification, and regulatory reporting workflows",
        result: "Reduced reporting time by 75%, improved compliance accuracy to 99.8%, eliminated late filings"
      }
    ]
  }
];

export default function TeamMemberProfile() {
  const params = useParams();
  const memberId = params.id;
  
  const member = teamMembers.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Team Member Not Found</h1>
            <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8">The team member you're looking for doesn't exist.</p>
            <Link href="/team">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                Back to Team
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 pt-32 pb-16">
        <div className="container">
          <Link href="/team">
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors mb-5 sm:mb-6 md:mb-8">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Back to Team
            </a>
          </Link>

          <div className="grid lg:grid-cols-[300px_1fr] gap-6 sm:gap-8 lg:gap-12 items-start max-w-6xl">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contact Buttons */}
              <div className="flex gap-3 mt-6">
                <button 
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                  onClick={() => alert('Feature coming soon')}
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  Email
                </button>
                <button 
                  className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => alert('Feature coming soon')}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                {member.name}
              </h1>
              <p className="text-xl font-bold text-blue-600 mb-3 tracking-wide uppercase">
                {member.title}
              </p>
              <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                {member.location}
              </p>

              {/* Expertise Tags */}
              <div className="mb-5 sm:mb-6 md:mb-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 text-sm font-semibold bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Industries</p>
                <div className="flex flex-wrap gap-2">
                  {member.industries.map((industry, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 text-sm font-semibold bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                {member.fullBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-slate-50 border-b border-slate-100">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 md:mb-8">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Publications & Research</h2>
            </div>
            
            <div className="space-y-6">
              {member.publications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {pub.title}
                    </h3>
                    <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    {pub.type}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 md:mb-8">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Client Work Examples</h2>
            </div>
            
            <div className="space-y-8">
              {member.clientWork.map((work, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {work.client}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {work.industry}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-slate-700 leading-relaxed">
                        {work.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-slate-700 leading-relaxed">
                        {work.solution}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Result</p>
                      <p className="text-slate-900 font-semibold leading-relaxed">
                        {work.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[300px] sm:h-[400px] md:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] lg:h-[300px] sm:h-[400px] md:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] lg:h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] sm:h-[400px] md:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] lg:h-[300px] sm:h-[400px] md:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] lg:h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight tracking-tight">
              Work with {member.name.split(' ')[0]}
            </h2>
            <p className="text-xl mb-10 text-slate-300 leading-relaxed font-light">
              Interested in learning how {member.name.split(' ')[0]} can help your organization? 
              Schedule a consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg sm:rounded-xl hover:bg-slate-100 transition-all hover:shadow-xl sm:shadow-xl sm:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <Link href="/team">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm">
                  View All Team Members
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
