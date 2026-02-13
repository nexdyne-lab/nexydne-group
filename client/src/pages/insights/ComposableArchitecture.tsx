import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ComposableArchitecture() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/solutions/martech-stack" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to MarTech & Stack Architecture
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              Architecture
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              April 14, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The End of the Monolith: Why Composable Architecture Wins
          </h1>
          
          <p className="text-xl text-slate-300">
            The shift from all-in-one suites to best-of-breed stacks is accelerating. Here's why "composable" is the future of enterprise tech.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              For decades, the safe bet for CIOs was to buy a massive, all-in-one suite (think Oracle, SAP, Salesforce). "Nobody gets fired for buying IBM," the saying went. These monoliths promised seamless integration, but often delivered vendor lock-in, bloated features, and slow innovation cycles.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Today, the paradigm has flipped. <strong>Composable Architecture</strong>—building a stack from modular, best-of-breed components connected via APIs—is the new standard for agility.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              MACH Architecture Explained
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The foundation of composable business is MACH:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-slate-700 mb-8">
              <li><strong>Microservices:</strong> Individual pieces of business functionality that are independently developed, deployed, and managed.</li>
              <li><strong>API-first:</strong> All functionality is exposed through APIs, making it possible to tie together two or more applications or services.</li>
              <li><strong>Cloud-native:</strong> SaaS that leverages the full capabilities of the cloud, beyond storage and hosting, including elastic scaling and automatic updating.</li>
              <li><strong>Headless:</strong> Front-end presentation is decoupled from back-end logic, allowing for omnichannel delivery.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Agility Over Stability?
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Critics argue that composable stacks are complex to manage. While true that integration becomes a primary responsibility, the trade-off is massive agility. In a monolith, upgrading a single feature might require a full system overhaul. In a composable stack, you can swap out your search engine or recommendation algorithm without touching the rest of the system.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This allows businesses to adapt to market changes instantly. New social commerce channel? Plug in a module. New privacy regulation? Update the consent management microservice.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg text-slate-900 font-semibold">
                "Composable business means every part of the organization is pluggable, scalable, and replaceable."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Role of the Orchestrator
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In a composable world, the "glue" becomes the most critical component. Middleware and orchestration layers (like iPaaS or Service Mesh) ensure data flows reliably between services. This is where engineering discipline is non-negotiable. Without robust error handling, retries, and monitoring, a distributed system can become a distributed nightmare.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The future isn't about buying the best software; it's about building the best <strong>system</strong>. Composable architecture gives you the building blocks to design a stack that is uniquely fitted to your business strategy.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Design your composable stack</h3>
            <p className="text-slate-300 mb-6">
              Our Solution Architects help you audit your legacy monoliths and design a roadmap to a modern, flexible MACH architecture.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
