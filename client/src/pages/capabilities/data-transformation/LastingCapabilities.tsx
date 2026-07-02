import React from "react";
import { ArrowRight, Users, GraduationCap, BookOpen, Share2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function LastingCapabilities() {
  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">        <div className="absolute inset-0 bg-[url('/images/capabilities/cap-data-bars.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        
        <div className="container relative z-10 px-6 md:px-12">
          <Breadcrumbs />
          <div className="max-w-4xl">
            
            <h1 className="nx-h1 mb-4">
              Sustainable <br />
              <span className="text-charcoal">
                Enablement.
              </span>
            </h1>
            <p className="nx-lead text-charcoal/70 max-w-2xl mb-10">
              Technology is easy. People are hard. We build the skills, culture, and operating models your team needs to sustain innovation long after we leave.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
              Upskill your team
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
                Build a data-driven DNA. <br />
                <span className="text-muted-foreground/70">Not just a data platform.</span>
              </h2>
              <p className="text-lg text-muted-foreground/70 font-light leading-relaxed mb-5 sm:mb-6 md:mb-8">
                The most successful transformations aren't about the tools; they're about the talent. We partner with you to design the organizational structures, career paths, and learning programs that attract and retain top data talent.
              </p>
              <div className="space-y-4">
                {[
                  "Executive data literacy workshops",
                  "Role-based training academies",
                  "Agile operating model design",
                  "Data community building"
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
                      <div className="text-sm text-muted-foreground/70 mb-1">Adoption Rate</div>
                      <div className="text-2xl font-bold text-charcoal">90%+</div>
                      <div className="text-xs text-muted-foreground">vs. Industry Avg: 30%</div>
                    </div>
                    <Share2 className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <div className="text-sm text-muted-foreground/70 mb-1">Retention Improvement</div>
                      <div className="text-2xl font-bold text-charcoal">40%</div>
                    </div>
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground/70 mb-1">Certifications Earned</div>
                      <div className="text-2xl font-bold text-charcoal">500+</div>
                    </div>
                    <Award className="w-8 h-8 text-secondary" />
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
            <h2 className="nx-h2 mb-6">The Capability Builder</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/70 font-light">
              We leave you stronger than we found you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-5 md:p-6">
            {[
              {
                title: "NexDyne Academy",
                desc: "Customized learning paths for Data Engineers, Scientists, and Analysts, blending theory with hands-on project work."
              },
              {
                title: "Shadow Engineering",
                desc: "Your team pairs with our experts daily. They don't just watch; they code, deploy, and troubleshoot alongside us."
              },
              {
                title: "Center of Excellence",
                desc: "We help you establish a CoE to set standards, govern data, and evangelize best practices across the enterprise."
              }
            ].map((card, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <Card className="h-full bg-background border-border group-hover:bg-white transition duration-300 relative overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-subtle transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-secondary group-hover:text-primary transition-colors duration-300" />
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
            Build for the future.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 font-light">
            Partner with us to create a data-driven culture that lasts.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors">
            Schedule a workshop
          </Button>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
