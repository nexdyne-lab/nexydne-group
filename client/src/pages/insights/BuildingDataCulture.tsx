import React from 'react';
import { motion } from "framer-motion";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Calendar, ArrowRight, Linkedin, Twitter, Facebook, Link2, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function BuildingDataCulture() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Building a Data-First Culture";
    
    const shareUrls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      return;
    }
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const relatedInsights = [
    {
      category: "Strategy",
      categoryIcon: "📊",
      title: "The CEO's Guide to Data Modernization",
      description: "Why 70% of transformations fail and how to be in the 30% that succeed.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      link: "/insights/ceo-guide-data-modernization"
    },
    {
      category: "Technology",
      categoryIcon: "📄",
      title: "From Data Lake to Value Stream",
      description: "A technical deep dive into modern data mesh architectures.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "/insights/data-lake-to-value-stream"
    },
    {
      category: "Article",
      categoryIcon: "📄",
      title: "The Corporate Venture Advantage",
      description: "Why established assets combined with startup speed create an unfair market advantage.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
      link: "/insights/corporate-venture-advantage"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <ReadingProgress />
      <Navigation />

      {/* Hero Section - DZ10 Design: Deep Navy background with large image */}
      <section className="relative min-h-[70vh] flex items-end pt-20 overflow-hidden bg-base">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Building a Data-First Culture" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/80 to-base/40" />
        </div>

        <div className="container px-4 md:px-8 lg:px-12 relative z-10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-white/80">Building a Data-First Culture</span>
            </div>

            {/* Category Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                <span>🎬</span>
                Culture
              </span>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>12 min watch</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                <span>November 05, 2025</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-3 text-white">
              Building a Data-First Culture
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
              NexDyne's Chief Data Officer discusses the human side of digital change and why culture eats strategy for breakfast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Content Section - DZ10: White bg, two-column layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-base rounded-lg overflow-hidden shadow-xl mb-12 group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 rounded bg-charcoal/60 text-white text-sm font-medium">
                    12:45
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none prose-headings: prose-headings:text-charcoal prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-charcoal/70 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-charcoal/70 prose-li:leading-relaxed prose-strong:text-charcoal prose-strong:font-semibold">
                <h2>Key Takeaways</h2>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Democratization vs. Governance:</strong> How to balance broad access to data with the necessary controls to ensure quality and security.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>The Role of Leadership:</strong> Why C-suite visibility and active participation are non-negotiable for cultural transformation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Upskilling the Workforce:</strong> Practical strategies for raising the data literacy baseline across all departments, not just IT.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Celebrating Small Wins:</strong> How to build momentum by identifying and publicizing early success stories.</span>
                  </li>
                </ul>

                <h2>Transcript Excerpt</h2>
                <div className="bg-subtle p-8 rounded-lg border-l-4 border-primary my-8">
                  <p className="italic m-0">
                    "We often talk about data as the new oil, but that analogy is flawed. Oil is a finite resource that gets used up. Data is an infinite asset that grows in value the more it's used, shared, and combined. But that value can only be unlocked if you have a culture that encourages curiosity and experimentation. If your people are afraid to ask questions or challenge assumptions with data, your platform investment is wasted."
                  </p>
                </div>
                <p>
                  In this fireside chat, Sarah Jenkins, NexDyne's CDO, sits down with industry analyst Mark Roberts to dismantle the myths surrounding data culture. They explore why "gut feeling" is still the dominant decision-making mode in many boardrooms and how to shift the needle toward evidence-based leadership.
                </p>
              </div>

              {/* Speaker Bio - DZ10 Style */}
              <div className="border-t border-charcoal/10 mt-16 pt-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-subtle flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Sarah Jenkins</h3>
                    <p className="text-charcoal/50 text-sm">Chief Data Officer, NexDyne</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32 space-y-8">
                {/* Share Card */}
                <div className="bg-subtle rounded-lg p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal/50 mb-4">Share this video</h3>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal/60 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal/60 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal/60 hover:text-[#4267B2] hover:bg-[#4267B2]/10 transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal/60 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Related Resources */}
                <div className="border border-charcoal/10 rounded-lg p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal/50 mb-4">Related Resources</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="group block">
                        <h4 className="text-charcoal font-medium group-hover:text-primary transition-colors mb-1">Data Maturity Assessment</h4>
                        <p className="text-xs text-charcoal/50">Interactive Tool</p>
                      </a>
                    </li>
                    <li className="border-t border-charcoal/10 pt-4">
                      <a href="#" className="group block">
                        <h4 className="text-charcoal font-medium group-hover:text-primary transition-colors mb-1">The Cultural Framework PDF</h4>
                        <p className="text-xs text-charcoal/50">Downloadable Guide</p>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-base rounded-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Stay ahead of the curve</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Get the latest strategic insights delivered directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your work email" 
                      className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5]/50 text-sm"
                    />
                    <button className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Insights Section - DZ10 Style */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                Related Thinking
              </h2>
              <p className="text-charcoal/60">Continue exploring our latest perspectives.</p>
            </motion.div>
            <Link href="/insights">
              <button className="hidden md:flex items-center text-primary hover:text-primary/90 transition-colors font-semibold group">
                View all insights <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedInsights.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={article.link} className="group cursor-pointer block">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Category Badge Overlay */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                      <span className="text-sm">{article.categoryIcon}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal">{article.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">{article.description}</p>
                  <div className="flex items-center gap-2 text-sm text-charcoal/50">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span className="text-primary font-semibold inline-flex items-center group-hover:gap-1 transition-all">Read now <ArrowRight className="w-3.5 h-3.5 ml-1" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
