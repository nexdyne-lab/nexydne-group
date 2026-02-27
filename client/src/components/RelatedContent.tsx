import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Video, Mic } from "lucide-react";
import { Link } from "wouter";

export interface RelatedItem {
  type?: "Article" | "Video" | "Podcast" | "Case Study" | "Whitepaper";
  title: string;
  description?: string;
  readTime?: string;
  image: string;
  link: string;
  category?: string;
}

interface RelatedContentProps {
  title?: string;
  subtitle?: string;
  items: RelatedItem[];
  className?: string;
}

export function RelatedContent({ 
  title = "Featured Thinking", 
  subtitle = "Latest perspectives from our engineering and strategy teams.",
  items,
  className = ""
}: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={`py-12 sm:py-16 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32 bg-white text-charcoal ${className}`}>
      <div className="container px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-4 sm:mb-6 block">
              Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">{title}</h2>
            {subtitle && (
              <p className="text-charcoal/60 max-w-xl text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
          <Link href="/insights">
            <button className="hidden md:flex items-center text-primary hover:text-primary/90 transition-colors duration-300 font-semibold group">
              View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8 lg:gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={item.link} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-lg sm:rounded-lg sm:rounded-xl mb-6 aspect-[4/3]">
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-2">
                      {item.type === "Article" && <FileText className="w-3 h-3" />}
                      {item.type === "Video" && <Video className="w-3 h-3" />}
                      {item.type === "Podcast" && <Mic className="w-3 h-3" />}
                      {!["Article", "Video", "Podcast"].includes(item.type || "") && <FileText className="w-3 h-3" />}
                      {item.category || item.type || "Insight"}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center text-sm text-charcoal/50 font-medium">
                  {item.readTime && (
                    <>
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  <span className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Read now <ArrowRight className="ml-1 w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <Link href="/insights">
            <button className="inline-flex items-center text-primary hover:text-primary/90 transition-colors duration-300 font-semibold">
              View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
