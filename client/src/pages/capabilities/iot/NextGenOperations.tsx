import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Activity, 
  Factory, 
  BarChart3, 
  ArrowRight, 
  Settings, 
  RefreshCw, 
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function NextGenOperations() {
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
            alt="Smart Factory" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Breadcrumbs />
          <div className="max-w-4xl mt-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              The Factory of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                The Future
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/50 max-w-2xl leading-relaxed font-light">
              Digitize your operations to achieve step-change improvements in quality, productivity, and safety. We help you build intelligent supply chains and manufacturing systems that adapt in real-time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-secondary hover:bg-secondary text-base rounded-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg font-bold transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
                Optimize Your Operations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">
                Visibility is <br/>
                <span className="text-secondary">Control</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground/70 leading-relaxed">
                <p>
                  Traditional operations are often reactive, relying on historical data and manual checks. This leads to unplanned downtime, quality issues, and inefficient resource allocation.
                </p>
                <p>
                  Next-Gen Operations leverage IoT sensors, edge computing, and AI to provide real-time visibility into every aspect of your production line. This enables predictive maintenance, automated quality control, and dynamic scheduling.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl">
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1565514020176-db792f4b6d96?q=80&w=2670&auto=format&fit=crop" 
                alt="Industrial Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-base border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3 eb-garamond">Our Solutions</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Operational Excellence 4.0</h3>
            <p className="text-muted-foreground/70 text-lg">
              Deploy targeted solutions that solve your most critical operational challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Predictive Maintenance",
                desc: "Monitor equipment health in real-time to predict failures before they happen, reducing unplanned downtime by up to 50%.",
                icon: <Activity className="w-8 h-8" />
              },
              {
                title: "Digital Twin",
                desc: "Create a virtual replica of your production line to simulate changes, optimize workflows, and train operators safely.",
                icon: <RefreshCw className="w-8 h-8" />
              },
              {
                title: "Automated Quality Control",
                desc: "Use computer vision and IoT sensors to detect defects instantly, ensuring 100% quality compliance.",
                icon: <AlertTriangle className="w-8 h-8" />
              },
              {
                title: "Asset Tracking",
                desc: "Gain real-time visibility into the location and status of inventory, tools, and vehicles across your supply chain.",
                icon: <Factory className="w-8 h-8" />
              },
              {
                title: "Energy Management",
                desc: "Monitor energy consumption at the machine level to identify waste and reduce your carbon footprint.",
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: "Connected Worker",
                desc: "Equip frontline workers with AR glasses and wearables to provide real-time guidance and improve safety.",
                icon: <Settings className="w-8 h-8" />
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
            Ready to modernize your operations?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Discover how much efficiency is hiding in your data.
          </p>
          <Button className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 py-8 text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-xl sm:shadow-2xl hover:-translate-y-1">
            Book an Operations Audit
          </Button>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
