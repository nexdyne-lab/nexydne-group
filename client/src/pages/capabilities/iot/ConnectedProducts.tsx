import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Smartphone, 
  Wifi, 
  Cpu, 
  ArrowRight, 
  Zap, 
  Layers, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ConnectedProducts() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
            alt="Connected Products" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Breadcrumbs />
          <div className="max-w-4xl mt-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Reimagine Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Product Portfolio
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/50 max-w-2xl leading-relaxed font-light">
              Transform standalone devices into intelligent, connected ecosystems. We help you design, build, and launch smart products that deliver continuous value and deepen customer relationships.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-secondary hover:bg-secondary text-base rounded-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg font-bold transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                Start Your Innovation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">
                From Hardware to <br/>
                <span className="text-secondary">Experience</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground/70 leading-relaxed">
                <p>
                  In the age of IoT, the product is just the beginning. The real value lies in the data it generates and the services it enables. We help you shift from a "sell-and-forget" model to a continuous engagement model.
                </p>
                <p>
                  By embedding intelligence into your products, you can predict maintenance needs, personalize user experiences, and unlock entirely new revenue streams through subscription-based services.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:p-5 md:p-6">
              {[
                { label: "Recurring Revenue", value: "30%", desc: "Increase in customer lifetime value" },
                { label: "Time to Market", value: "2x", desc: "Faster product iteration cycles" },
                { label: "Customer Satisfaction", value: "45%", desc: "Improvement in NPS scores" },
                { label: "Data Insights", value: "100%", desc: "Real-time usage visibility" }
              ].map((stat, i) => (
                <div key={i} className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-base transition-colors">{stat.value}</div>
                  <div className="font-bold text-muted-foreground/50 mb-1 group-hover:text-base transition-colors">{stat.label}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-base border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3 eb-garamond">Our Capabilities</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">End-to-End Product Innovation</h3>
            <p className="text-muted-foreground/70 text-lg">
              We guide you through every stage of the connected product lifecycle, from concept to scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Smart Product Strategy",
                desc: "Define the value proposition, business model, and feature set for your connected product portfolio.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Embedded Engineering",
                desc: "Develop robust firmware and hardware architectures that ensure reliability, security, and power efficiency.",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "Cloud Platform Development",
                desc: "Build scalable backend infrastructure to ingest, process, and analyze data from millions of devices.",
                icon: <Wifi className="w-8 h-8" />
              },
              {
                title: "Mobile App Experience",
                desc: "Design intuitive mobile interfaces that allow users to control, monitor, and interact with their devices.",
                icon: <Smartphone className="w-8 h-8" />
              },
              {
                title: "Data Analytics & AI",
                desc: "Turn raw sensor data into actionable insights, predictive maintenance alerts, and personalized recommendations.",
                icon: <Layers className="w-8 h-8" />
              },
              {
                title: "Security & Compliance",
                desc: "Implement end-to-end encryption, secure boot, and OTA update mechanisms to protect your ecosystem.",
                icon: <ShieldCheck className="w-8 h-8" />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-base border border-white/10 hover:bg-white hover:border-white transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-lg sm:rounded-xl text-secondary group-hover:text-base group-hover:bg-secondary/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-base transition-colors duration-300">{item.title}</h4>
                <p className="text-muted-foreground/70 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8 eb-garamond">
            Ready to launch your next big thing?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Let's build products that define the future of your industry.
          </p>
          <Button className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 py-8 text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-xl sm:shadow-2xl hover:-translate-y-1">
            Schedule a Product Discovery
          </Button>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
