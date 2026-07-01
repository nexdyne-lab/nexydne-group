import React from "react";
import { ArrowRight, Target, TrendingUp, DollarSign, PieChart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ValueFocused() {
  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        
        <div className="container relative z-10 px-6 md:px-12">
          <Breadcrumbs />
          <div className="max-w-4xl">
            
            <h1 className="nx-h1 mb-4">
              Strategic Value <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber">
                Creation.
              </span>
            </h1>
            <p className="nx-lead text-charcoal/70 max-w-2xl mb-10">
              We don't just build data systems; we build business value. Our approach prioritizes high-impact opportunities to deliver measurable returns from day one.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
              Identify your opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Context Section */}
      <section className="nx-section border-t border-border bg-background">
        <div className="container px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="nx-h2 mb-6">
                Stop building data lakes. <br />
                <span className="text-muted-foreground/70">Start building value streams.</span>
              </h2>
              <p className="text-lg text-muted-foreground/70 font-light leading-relaxed mb-5 sm:mb-6 md:mb-8">
                Many data initiatives fail because they focus on technology first and value second. We flip the script. By identifying the specific business decisions that drive profit, we reverse-engineer the data architecture needed to support them.
              </p>
              <div className="space-y-4">
                {[
                  "Prioritize use cases by P&L impact",
                  "Rapid prototyping for quick wins",
                  "Align technical KPIs with business goals",
                  "Eliminate data waste and redundancy"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span className="text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl sm:rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative bg-white/5 border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <div className="text-sm text-muted-foreground/70 mb-1">Typical ROI Timeline</div>
                      <div className="text-2xl font-bold text-charcoal">3-6 Months</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <div className="text-sm text-muted-foreground/70 mb-1">Cost Reduction</div>
                      <div className="text-2xl font-bold text-charcoal">15-25%</div>
                    </div>
                    <DollarSign className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground/70 mb-1">Revenue Uplift</div>
                      <div className="text-2xl font-bold text-charcoal">10-30%</div>
                    </div>
                    <PieChart className="w-8 h-8 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Journey Section */}
      <section className="nx-section bg-background">
        <div className="container px-6 md:px-12">
          <div className="mb-8 sm:mb-12 md:mb-16 max-w-2xl">
            <h2 className="nx-h2 mb-6">The Value Framework</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/70 font-light">
              Our proven methodology ensures that every dollar spent on data transformation yields a tangible return for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 md:p-6">
            {[
              {
                title: "1. Opportunity Mapping",
                desc: "We scan your entire value chain to identify high-potential areas where better data can directly improve margins or revenue."
              },
              {
                title: "2. Agile Delivery",
                desc: "Instead of multi-year waterfall projects, we deliver functional data products in 6-week sprints, realizing value incrementally."
              },
              {
                title: "3. Performance Tracking",
                desc: "We implement rigorous tracking mechanisms to measure the actual business impact of every data initiative we launch."
              }
            ].map((card, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <Card className="h-full bg-background border-border group-hover:bg-white transition-all duration-300 relative overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-subtle transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-secondary group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="nx-h3 text-charcoal mb-4 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground/70 group-hover:text-muted-foreground leading-relaxed transition-colors duration-300">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Impact / CTA Section */}
      <section className="nx-section bg-background">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="nx-h2 text-charcoal mb-8">
            Ready to unlock value?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 font-light">
            Let's identify your highest-ROI data opportunities together.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
            Start the assessment
          </Button>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
