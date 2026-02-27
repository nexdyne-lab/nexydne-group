import React, { useEffect } from "react";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Database, Shield, Activity, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HealthcareDataPlatform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/90 to-base z-10" />
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" 
            alt="Healthcare Data" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <Link href="/solutions/enterprise-transformation/legacy-modernization">
            <Button variant="ghost" className="text-muted-foreground/70 hover:text-white mb-8 pl-0 hover:bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Data Modernization
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-md border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-secondary tracking-widest uppercase">Healthcare Case Study</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3 leading-tight">
              Unifying Patient Records for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-hover">
                Better Care Outcomes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground/50 max-w-2xl leading-relaxed font-light">
              Creating a 360-degree patient view by integrating 15+ legacy systems into a secure, HIPAA-compliant data lake for a regional hospital network.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-base">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-muted-foreground/70 leading-relaxed mb-6">
                The hospital network had grown through acquisitions, resulting in fragmented patient data across incompatible EMR systems. Clinicians had to log into multiple portals to get a complete history, leading to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-muted-foreground/50">Incomplete patient history at the point of care.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-muted-foreground/50">High administrative burden for data reconciliation.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-muted-foreground/50">Inability to perform population health analytics.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
              <p className="text-muted-foreground/70 leading-relaxed mb-6">
                We implemented a modern Data Lakehouse architecture on Azure, using FHIR standards to ingest and normalize data from all legacy EMRs into a single longitudinal patient record.
              </p>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Database className="w-6 h-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold text-white">Unified Data Lake</h3>
                  </div>
                  <p className="text-muted-foreground/70 text-sm">
                    Centralized repository storing structured (clinical) and unstructured (notes, images) data.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold text-white">Automated Governance</h3>
                  </div>
                  <p className="text-muted-foreground/70 text-sm">
                    Role-based access controls and audit logs to ensure full HIPAA compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-20 bg-base border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-secondary mb-4">15+</div>
              <div className="text-white font-medium text-lg mb-2">Systems Integrated</div>
              <p className="text-muted-foreground/70 text-sm">Legacy EMRs, labs, and billing systems.</p>
            </div>
            <div className="text-center p-8 border-x border-white/5">
              <div className="text-5xl font-bold text-secondary mb-4">360°</div>
              <div className="text-white font-medium text-lg mb-2">Patient View</div>
              <p className="text-muted-foreground/70 text-sm">Complete history available in &lt; 1 second.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-secondary mb-4">20%</div>
              <div className="text-white font-medium text-lg mb-2">Readmission Drop</div>
              <p className="text-muted-foreground/70 text-sm">Due to better predictive risk modeling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-base">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to unlock your healthcare data?
          </h2>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary text-base rounded-full px-8 py-6 text-lg font-bold">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
