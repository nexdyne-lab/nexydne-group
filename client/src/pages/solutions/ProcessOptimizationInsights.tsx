import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ArrowLeft, Tag, BookOpen, FileText, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

type InsightType = "All" | "Article" | "Guide" | "Whitepaper";

interface InsightPost {
  id: string;
  title: string;
  description: string;
  type: Exclude<InsightType, "All">;
  readTime: string;
  date: string;
  url: string;
  image: string;
  tags: string[];
}

const insightPosts: InsightPost[] = [
  {
    id: "1",
    title: "Why Intelligent Automation Isn't Optional Anymore",
    description: "The conversation around intelligent automation has shifted dramatically. What was once positioned as a competitive advantage has become table stakes for survival in modern business.",
    type: "Article",
    readTime: "5 min read",
    date: "November 30, 2025",
    url: "/insights/why-intelligent-automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["Automation", "Strategy", "Digital Transformation"],
  },
  {
    id: "2",
    title: "How AI Agents Transform Enterprise Operations",
    description: "AI agents are revolutionizing how enterprises handle complex, multi-step processes. Learn how autonomous systems can orchestrate workflows across your organization.",
    type: "Article",
    readTime: "8 min read",
    date: "November 25, 2025",
    url: "/insights/ai-agents-transform-operations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["AI Agents", "Enterprise", "Workflow Automation"],
  },
  {
    id: "3",
    title: "The Complete Guide to Process Mining",
    description: "Process mining reveals the hidden inefficiencies in your operations. This comprehensive guide covers everything from data extraction to actionable optimization strategies.",
    type: "Guide",
    readTime: "15 min read",
    date: "November 20, 2025",
    url: "/insights/process-mining-guide",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Process Mining", "Analytics", "Operations"],
  },
  {
    id: "4",
    title: "RPA vs. Intelligent Automation: Understanding the Difference",
    description: "While RPA handles repetitive tasks, intelligent automation adds cognitive capabilities. Learn when to use each approach and how to combine them effectively.",
    type: "Article",
    readTime: "6 min read",
    date: "November 15, 2025",
    url: "/insights/ai-automation-reshaping-business",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["RPA", "Intelligent Automation", "Technology"],
  },
  {
    id: "5",
    title: "Building a Business Case for Process Automation",
    description: "A step-by-step framework for calculating ROI, identifying quick wins, and securing executive buy-in for your automation initiatives.",
    type: "Whitepaper",
    readTime: "20 min read",
    date: "November 10, 2025",
    url: "/insights/measuring-automation-roi",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["ROI", "Business Case", "Strategy"],
  },
  {
    id: "6",
    title: "Document Intelligence: From Chaos to Clarity",
    description: "Intelligent document processing transforms unstructured data into actionable insights. Discover how AI extracts, classifies, and validates information at scale.",
    type: "Article",
    readTime: "7 min read",
    date: "November 5, 2025",
    url: "/insights/digital-transformation-readiness",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    tags: ["IDP", "Document Processing", "AI"],
  },
  {
    id: "7",
    title: "The Human Side of Automation",
    description: "Successful automation isn't just about technology—it's about people. Learn how to manage change, upskill teams, and create a culture that embraces automation.",
    type: "Article",
    readTime: "6 min read",
    date: "October 30, 2025",
    url: "/insights/business-transformation-strategy",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tags: ["Change Management", "Culture", "People"],
  },
  {
    id: "8",
    title: "Integration Patterns for Modern Automation",
    description: "A technical deep-dive into iPaaS, API orchestration, and event-driven architectures that power seamless automation across enterprise systems.",
    type: "Guide",
    readTime: "12 min read",
    date: "October 25, 2025",
    url: "/insights/composable-architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tags: ["iPaaS", "Integration", "Architecture"],
  },
  {
    id: "9",
    title: "Measuring Automation Success: Beyond Cost Savings",
    description: "While cost reduction is important, the true value of automation extends to speed, accuracy, employee satisfaction, and customer experience. Here's how to measure it all.",
    type: "Article",
    readTime: "8 min read",
    date: "October 20, 2025",
    url: "/insights/performance-improvement-framework",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Metrics", "KPIs", "Value Measurement"],
  },
];

const allTags = Array.from(new Set(insightPosts.flatMap(post => post.tags))).sort();

const getTypeIcon = (type: InsightPost["type"]) => {
  switch (type) {
    case "Article":
      return <FileText className="w-4 h-4" />;
    case "Guide":
      return <BookOpen className="w-4 h-4" />;
    case "Whitepaper":
      return <Lightbulb className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

export default function ProcessOptimizationInsights() {
  const [selectedType, setSelectedType] = useState<InsightType>("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = insightPosts.filter(post => {
    const typeMatch = selectedType === "All" || post.type === selectedType;
    const tagMatch = !selectedTag || post.tags.includes(selectedTag);
    return typeMatch && tagMatch;
  });

  const types: InsightType[] = ["All", "Article", "Guide", "Whitepaper"];

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Process Optimization Insights | NexDyne Technologies" 
        description="Expert perspectives on intelligent automation, process mining, and operational excellence. Practical strategies for transforming manual operations."
        canonical="/solutions/intelligent-process-optimization/insights"
      />
      <Navigation />
      
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/#services' },
        { label: 'Intelligent Process Optimization', href: '/solutions/intelligent-process-optimization' },
        { label: 'Insights' }
      ]} />

      {/* DZ10 Hero Section */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
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
              Process Optimization Insights
            </span>
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight leading-[1.05] mb-4">
              Expert perspectives on <br />
              <span className="text-primary">intelligent automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              Practical strategies, technical guides, and thought leadership on transforming manual operations into autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Filters Section */}
      <section className="py-8 bg-base border-b border-white/10">
        <div className="container px-4 md:px-12 space-y-6">
          {/* Type Filters */}
          <div>
            <h3 className="text-sm font-semibold text-white/60 mb-4">Filter by Type</h3>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedType === type
                      ? "bg-primary text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {type !== "All" && getTypeIcon(type as InsightPost["type"])}
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filters */}
          <div>
            <h3 className="text-sm font-semibold text-white/60 mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Filter by Topic
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTag === null
                    ? "bg-white text-charcoal"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                All Topics
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? "bg-white text-charcoal"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Featured Insight */}
      {selectedType === "All" && !selectedTag && (
        <section className="py-16 md:py-20 bg-base">
          <div className="container px-4 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={insightPosts[0].url}>
                <div className="group grid md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={insightPosts[0].image} 
                      alt={insightPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-0 md:pr-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Featured
                      </span>
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        {getTypeIcon(insightPosts[0].type)}
                        {insightPosts[0].type}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {insightPosts[0].title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6">
                      {insightPosts[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-6">
                      <span>{insightPosts[0].date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {insightPosts[0].readTime}
                      </span>
                    </div>
                    <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* DZ10 Insights Grid */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedType === "All" && !selectedTag ? 1 : 0).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={post.url}>
                  <div className="group cursor-pointer h-full">
                    <div className="bg-white border border-base/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-primary/30">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden bg-base/5">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Type Badge Overlay */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm flex items-center gap-1.5">
                            {getTypeIcon(post.type)}
                            {post.type}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              className="text-xs bg-base/5 text-charcoal/60 px-2 py-1 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-charcoal/70 mb-4 line-clamp-3 flex-grow">
                          {post.description}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-charcoal/50 pt-4 border-t border-base/10">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal/60 text-lg">
                No insights found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-24 bg-base/5">
        <div className="container px-4 md:px-12">
          <div className="max-w-2xl mx-auto">
            <NewsletterSubscribe />
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
              Ready to optimize your processes?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how intelligent automation can transform your operations and eliminate bottlenecks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] hover:shadow-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/solutions/intelligent-process-optimization/case-studies">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
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
