import { useState } from "react";
import { Link } from "wouter";
import { Clock, ArrowRight, Bookmark } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

type Category = "All" | "Strategy" | "Technology" | "Operations" | "Growth" | "Sustainability";

interface Insight {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  readTime: string;
  date: string;
  url: string;
  image: string;
  author?: string;
  authorRole?: string;
}

const insights: Insight[] = [
  {
    id: "featured-1",
    title: "Why Intelligent Automation Isn't Optional Anymore",
    description: "Organizations that delay automation risk falling behind in an increasingly competitive landscape. Here's what leaders need to know.",
    category: "Technology",
    readTime: "5 min read",
    date: "January 15, 2026",
    url: "/insights/why-intelligent-automation-isnt-optional-anymore",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    author: "Sarah Mitchell",
    authorRole: "Partner, Technology"
  },
  {
    id: "featured-2",
    title: "How AI Agents Transform Enterprise Operations",
    description: "Autonomous AI agents are reshaping workflows and driving unprecedented operational efficiency across industries.",
    category: "Technology",
    readTime: "7 min read",
    date: "January 10, 2026",
    url: "/insights/how-ai-agents-transform-enterprise-operations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "David Chen",
    authorRole: "Senior Partner"
  },
  {
    id: "featured-3",
    title: "The Complete Guide to Process Mining",
    description: "A comprehensive look at how process mining uncovers hidden inefficiencies and optimizes business workflows.",
    category: "Operations",
    readTime: "10 min read",
    date: "January 5, 2026",
    url: "/insights/complete-guide-to-process-mining",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Marcus Thompson",
    authorRole: "Partner, Operations"
  },
  {
    id: "4",
    title: "The Corporate Venture Advantage",
    description: "Why established assets combined with startup speed create an unfair market advantage.",
    category: "Strategy",
    readTime: "6 min read",
    date: "December 15, 2025",
    url: "/insights/corporate-venture-advantage",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    author: "Jennifer Walsh",
    authorRole: "Partner, Strategy"
  },
  {
    id: "5",
    title: "From MVP to Scale: Navigating Growth",
    description: "Navigating the 'valley of death' and operationalizing your new venture for sustainable growth.",
    category: "Growth",
    readTime: "10 min read",
    date: "December 10, 2025",
    url: "/insights/from-mvp-to-scale",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    author: "Michael Roberts",
    authorRole: "Senior Partner"
  },
  {
    id: "6",
    title: "Building a Data-Driven Culture",
    description: "How to attract and retain entrepreneurial talent within a corporate structure.",
    category: "Strategy",
    readTime: "5 min read",
    date: "December 5, 2025",
    url: "/insights/building-data-culture",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    author: "Lisa Park",
    authorRole: "Partner, Digital"
  },
  {
    id: "7",
    title: "The Green Growth Imperative",
    description: "How sustainability is becoming a core driver of competitive advantage and long-term value creation.",
    category: "Sustainability",
    readTime: "8 min read",
    date: "November 28, 2025",
    url: "/insights/green-growth-imperative",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    author: "Emma Richardson",
    authorRole: "Partner, Sustainability"
  },
  {
    id: "8",
    title: "Digital Transformation Readiness Assessment",
    description: "Key indicators that signal it's time to automate manual processes and embrace digital transformation.",
    category: "Technology",
    readTime: "6 min read",
    date: "November 20, 2025",
    url: "/insights/digital-transformation-readiness",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    author: "James Anderson",
    authorRole: "Partner, Technology"
  },
  {
    id: "9",
    title: "Supply Chain Resilience in 2026",
    description: "Building adaptive supply chains that can withstand disruption and drive competitive advantage.",
    category: "Operations",
    readTime: "7 min read",
    date: "November 15, 2025",
    url: "/insights/generative-supply-chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    author: "Robert Kim",
    authorRole: "Partner, Operations"
  },
  {
    id: "10",
    title: "The CEO's Guide to Data Modernization",
    description: "A strategic framework for transforming your organization's data capabilities and unlocking new value.",
    category: "Strategy",
    readTime: "12 min read",
    date: "November 10, 2025",
    url: "/insights/ceo-guide-data-modernization",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    author: "Catherine Moore",
    authorRole: "Senior Partner"
  },
  {
    id: "11",
    title: "Net Zero Transition: A Practical Roadmap",
    description: "How companies are successfully navigating the transition to net-zero emissions while maintaining profitability.",
    category: "Sustainability",
    readTime: "9 min read",
    date: "November 5, 2025",
    url: "/insights/net-zero-transition",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
    author: "Thomas Green",
    authorRole: "Partner, Sustainability"
  },
  {
    id: "12",
    title: "Customer Intelligence: Beyond Segmentation",
    description: "Moving from traditional customer segments to predictive, personalized engagement at scale.",
    category: "Growth",
    readTime: "8 min read",
    date: "October 28, 2025",
    url: "/insights/beyond-segmentation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    author: "Amanda Foster",
    authorRole: "Partner, Marketing & Sales"
  }
];

const categories: Category[] = ["All", "Strategy", "Technology", "Operations", "Growth", "Sustainability"];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredInsights = selectedCategory === "All" 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  // Featured insights (first 3)
  const featuredInsights = filteredInsights.slice(0, 3);
  // Rest of insights
  const remainingInsights = filteredInsights.slice(3);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Insights" 
        description="Expert perspectives on strategy, technology, operations, and growth from NexDyne's consultants and partners."
        canonical="/insights"
      />
      <Navigation />
      
      {/* Hero Section - Clean white background */}
      <section className="bg-white pt-32 pb-16 border-b border-border">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-charcoal mb-3">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Expert perspectives on strategy, technology, operations, and growth from our consultants and partners around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white py-6 border-b border-border sticky top-0 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-charcoal/80 hover:bg-subtle border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights - Large Cards */}
      {featuredInsights.length > 0 && (
        <section className="py-10 sm:py-12 lg:py-10 sm:py-12 lg:py-16 bg-white">
          <div className="container">
            <h2 className="text-sm font-bold text-destructive uppercase tracking-wider mb-8">
              Featured Insights
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredInsights.map((insight) => (
                <Link 
                  key={insight.id} 
                  href={insight.url}
                  className="group block"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden rounded-lg mb-5">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Category */}
                  <p className="text-destructive text-sm font-medium mb-2">
                    {insight.category}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-charcoal mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {insight.description}
                  </p>
                  
                  {/* Author & Meta */}
                  <div className="flex items-center justify-between">
                    <div>
                      {insight.author && (
                        <p className="text-sm font-medium text-charcoal">{insight.author}</p>
                      )}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{insight.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {insight.readTime}
                        </span>
                      </div>
                    </div>
                    <button 
                      className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        // Bookmark functionality placeholder
                      }}
                    >
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Insights - Grid */}
      {remainingInsights.length > 0 && (
        <section className="py-10 sm:py-12 lg:py-10 sm:py-12 lg:py-16 bg-subtle">
          <div className="container">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-8">
              All Insights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {remainingInsights.map((insight) => (
                <Link 
                  key={insight.id} 
                  href={insight.url}
                  className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="text-destructive text-xs font-medium mb-2">
                      {insight.category}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-charcoal mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {insight.description}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{insight.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {insight.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors">
                LOAD MORE
              </button>
            </div>
          </div>
        </section>
      )}

      {filteredInsights.length === 0 && (
        <section className="py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container text-center">
            <p className="text-xl text-muted-foreground">
              No insights found for this category.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6">
              Stay informed
            </h2>
            <p className="text-xl text-muted-foreground/50 mb-8">
              Subscribe to receive our latest insights and perspectives directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors inline-flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
