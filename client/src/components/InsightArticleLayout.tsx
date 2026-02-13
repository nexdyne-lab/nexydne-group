import React from 'react';
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import { Clock, Calendar, ArrowRight, Linkedin, Twitter, Facebook, Link2 } from 'lucide-react';
import { Link } from 'wouter';

interface InsightArticleLayoutProps {
  category: string;
  categoryIcon?: string;
  title: string;
  subtitle: string;
  readTime: string;
  publishDate: string;
  heroImage: string;
  heroImageAlt: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  children: React.ReactNode;
  relatedInsights?: {
    category: string;
    categoryIcon?: string;
    title: string;
    description: string;
    readTime: string;
    image: string;
    link: string;
  }[];
}

export default function InsightArticleLayout({
  category,
  categoryIcon,
  title,
  subtitle,
  readTime,
  publishDate,
  heroImage,
  heroImageAlt,
  authorName,
  authorRole,
  authorImage,
  children,
  relatedInsights = []
}: InsightArticleLayoutProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = title;
    
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

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <ReadingProgress />
      <Navigation />

      {/* Hero Section - DZ10 Design: Deep Navy background with large image */}
      <section className="relative min-h-[70vh] flex items-end pt-20 overflow-hidden bg-[#051C2C]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt={heroImageAlt} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/80 to-[#051C2C]/40" />
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
              <span className="text-white/80">{title.length > 40 ? title.substring(0, 40) + '...' : title}</span>
            </div>

            {/* Category Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {categoryIcon && <span>{categoryIcon}</span>}
                {category}
              </span>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{publishDate}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.15] mb-6 text-white">
              {title}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content Section - DZ10: White bg, two-column layout */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 sm:gap-12 lg:gap-8 sm:gap-12 lg:gap-16">
            
            {/* Main Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none 
                prose-headings:font-serif prose-headings:text-[#1A1A1A] prose-headings:font-bold
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[#1A1A1A]/70 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-[#1A1A1A]/70 prose-li:leading-relaxed
                prose-strong:text-[#1A1A1A] prose-strong:font-semibold
                prose-em:text-[#1A1A1A]/80
                prose-ul:my-6 prose-ol:my-6
                prose-a:text-[#0077B5] prose-a:no-underline hover:prose-a:underline
              ">
                {children}
              </div>

              {/* Author Bio - DZ10 Style */}
              <div className="border-t border-[#1A1A1A]/10 mt-16 pt-12">
                <div className="flex items-center gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                    {authorImage ? (
                      <img src={authorImage} alt={authorName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#1A1A1A]/30 text-2xl font-serif font-bold">
                        {authorName.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">{authorName}</h3>
                    <p className="text-[#1A1A1A]/50 text-sm">{authorRole}</p>
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
                {/* Table of Contents */}
                <TableOfContents />
                
                {/* Share Card */}
                <div className="bg-[#F5F5F5] rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/50 mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#4267B2] hover:bg-[#4267B2]/10 transition-all"
                    >
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all"
                    >
                      <Link2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-[#051C2C] rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 text-white">
                  <h3 className="text-lg font-serif font-bold mb-2">Stay ahead of the curve</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Get the latest strategic insights delivered directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your work email" 
                      className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5]/50 text-sm"
                    />
                    <button className="w-full px-4 py-3 bg-[#0077B5] hover:bg-[#005a8c] text-white font-semibold rounded transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Quick Navigation */}
                <div className="border border-[#1A1A1A]/10 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/50 mb-4">Explore More</h3>
                  <div className="space-y-3">
                    <Link href="/insights" className="flex items-center justify-between text-[#1A1A1A] hover:text-[#0077B5] transition-colors group">
                      <span className="text-sm font-medium">All Insights</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/capabilities" className="flex items-center justify-between text-[#1A1A1A] hover:text-[#0077B5] transition-colors group">
                      <span className="text-sm font-medium">Our Capabilities</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/cases" className="flex items-center justify-between text-[#1A1A1A] hover:text-[#0077B5] transition-colors group">
                      <span className="text-sm font-medium">Case Studies</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Insights Section - DZ10 Style */}
      {relatedInsights.length > 0 && (
        <section className="py-10 sm:py-14 md:py-16 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-[#F5F5F5]">
          <div className="container px-4 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic font-bold mb-4 text-[#1A1A1A]">
                  Related Thinking
                </h2>
                <p className="text-[#1A1A1A]/60">Continue exploring our latest perspectives.</p>
              </motion.div>
              <Link href="/insights">
                <button className="hidden md:flex items-center text-[#0077B5] hover:text-[#005a8c] transition-colors font-semibold group">
                  View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8 lg:gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
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
                        {article.categoryIcon && <span className="text-sm">{article.categoryIcon}</span>}
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">{article.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#1A1A1A] group-hover:text-[#0077B5] transition-colors">{article.title}</h3>
                    <p className="text-[#1A1A1A]/60 text-sm mb-4 leading-relaxed">{article.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/50">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span className="text-[#0077B5] font-semibold inline-flex items-center group-hover:gap-1 transition-all">Read now <ArrowRight className="w-3.5 h-3.5 ml-1" /></span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

// Reusable Callout component for insight articles
export function InsightCallout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#F5F5F5] p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-[#0077B5] my-12">
      <h3 className="text-[#1A1A1A] font-serif font-bold text-lg mb-3">{title}</h3>
      <div className="text-[#1A1A1A]/70 m-0">{children}</div>
    </div>
  );
}
