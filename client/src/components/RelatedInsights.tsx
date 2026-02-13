import React from "react";
import { ArrowRight, FileText, Video, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Insight {
  type: "Article" | "Video" | "Podcast";
  title: string;
  description: string;
  readTime: string;
  image: string;
}

const insights: (Insight & { href: string })[] = [
  {
    type: "Article",
    title: "The CEO's Guide to Data Modernization",
    description: "Why 70% of transformations fail and how to be in the 30% that succeed.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    href: "/insights/ceo-guide-data-modernization"
  },
  {
    type: "Video",
    title: "Building a Data-First Culture",
    description: "NewCo's Chief Data Officer discusses the human side of digital change.",
    readTime: "12 min watch",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    href: "/insights/building-data-culture"
  },
  {
    type: "Article",
    title: "From Data Lake to Value Stream",
    description: "A technical deep dive into modern data mesh architectures.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    href: "/insights/data-lake-to-value-stream"
  }
];

export default function RelatedInsights() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-[#050829] border-t border-white/5">
      <div className="container px-6 md:px-12">
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Thinking</h2>
            <p className="text-slate-400 max-w-xl">
              Latest perspectives from our engineering and strategy teams.
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#00d4ff] hover:text-white transition-colors duration-300 font-medium">
            View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
          {insights.map((item, i) => (
            <a key={i} href={item.href} className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg sm:rounded-lg sm:rounded-xl mb-6 aspect-video">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-2">
                    {item.type === "Article" && <FileText className="w-3 h-3" />}
                    {item.type === "Video" && <Video className="w-3 h-3" />}
                    {item.type === "Podcast" && <Mic className="w-3 h-3" />}
                    {item.type}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center text-xs text-slate-500 font-medium">
                <span>{item.readTime}</span>
                <span className="mx-2">•</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center text-[#00d4ff]">
                  Read now <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <button className="inline-flex items-center text-[#00d4ff] hover:text-white transition-colors duration-300 font-medium">
            View all insights <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
