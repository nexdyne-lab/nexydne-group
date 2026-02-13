import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface RelatedInsight {
  title: string;
  category: string;
  link: string;
  image: string;
}

interface InsightArticleProps {
  category: string;
  categoryHref?: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  readTime: string;
  publishDate?: string;
  date?: string;
  children: React.ReactNode;
  relatedInsights?: RelatedInsight[];
  relatedContent?: { title: string; href: string; category: string }[];
  authors?: { name: string; role: string }[];
}

export default function InsightArticle({
  category,
  categoryHref = "/insights",
  title,
  subtitle,
  heroImage,
  readTime,
  publishDate,
  date,
  children,
  relatedInsights = [],
  relatedContent = [],
  authors = []
}: InsightArticleProps) {
  // Support both old and new date prop names
  const displayDate = publishDate || date || "";
  
  // Convert relatedContent to relatedInsights format if needed
  const allRelatedInsights = relatedInsights.length > 0 ? relatedInsights : 
    relatedContent.map(item => ({
      title: item.title,
      category: item.category,
      link: item.href,
      image: "/images/insight-placeholder.jpg"
    }));
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SEO title={title} description={subtitle} />
      <Navigation />
      
      {/* Hero Section - Standardized for all insights */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#f8f8f8]">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Back Link */}
          <Link href="/insights">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[#1a3d2e] font-medium mb-8 hover:gap-3 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </motion.span>
          </Link>
          
          {/* Category */}
          <Link href={categoryHref}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-xs font-semibold text-[#1a3d2e] uppercase tracking-wider mb-4 hover:underline cursor-pointer"
            >
              {category}
            </motion.span>
          </Link>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-tight max-w-4xl mb-3"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-[#1A1A1A]/70 max-w-3xl mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
          
          {/* Meta Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-sm text-[#1A1A1A]/60"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {displayDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {readTime} read
            </span>
          </motion.div>
        </div>
      </section>
      
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="container px-6 sm:px-8 md:px-12 lg:px-16 -mt-4"
      >
        <div className="aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      {/* Article Content */}
      <article className="py-12 md:py-16 lg:py-12 sm:py-16 lg:py-20">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg max-w-none
                prose-headings:font-normal prose-headings:text-[#1A1A1A]
                prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[#1A1A1A]/80 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-[#1A1A1A]/80
                prose-strong:text-[#1A1A1A] prose-strong:font-semibold
                prose-a:text-[#1a3d2e] prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#1a3d2e] prose-blockquote:bg-[#f8f8f8] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-[#1A1A1A]/80"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </article>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#1a3d2e] text-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Ready to Apply These Insights?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our experts can help you implement these strategies for your business.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-[#1a3d2e] font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
      
      {/* Related Insights */}
      {allRelatedInsights.length > 0 && (
        <section className="py-12 md:py-16 bg-[#f8f8f8]">
          <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
            <h2 className="text-2xl sm:text-3xl text-[#1A1A1A] mb-8" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allRelatedInsights.map((insight, i) => (
                <Link key={i} href={insight.link}>
                  <div className="group bg-white overflow-hidden cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#1a3d2e] uppercase tracking-wider">{insight.category}</span>
                      <h3 className="text-lg text-[#1A1A1A] leading-tight mt-2 group-hover:text-[#1a3d2e] transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}
