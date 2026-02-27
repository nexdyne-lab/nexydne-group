import React from "react";
import { CheckCircle2 } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

interface InteractiveTechStackProps {
  title?: string;
  categories: TechCategory[];
}

export default function InteractiveTechStack({ 
  title = "Technology Stack", 
  categories 
}: InteractiveTechStackProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-base">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12 text-center">{title}</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
          {categories.map((category, index) => (
            <div key={index} className="p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center hover:border-secondary/50 transition-all group">
              <div className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{category.title}</div>
              <p className="text-muted-foreground/70 text-sm mb-6">{category.description}</p>
              
              <div className="space-y-3 text-left">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex-shrink-0 text-secondary">
                      {item.icon || <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                    <div>
                      <div className="text-slate-200 font-medium text-sm">{item.name}</div>
                      {item.category && <div className="text-muted-foreground text-xs">{item.category}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
