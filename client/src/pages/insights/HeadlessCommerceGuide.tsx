import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Code2,
  Cpu,
  Share2,
  Calendar,
  User
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export function HeadlessCommerceGuide() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0e3d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d]/90 via-[#0a0e3d]/80 to-[#0a0e3d]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-8" />
            <div className="flex items-center gap-4 text-sm text-[#00d4ff] font-semibold mb-6">
              <span className="uppercase tracking-wider">Architecture</span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Engineering Case for <br/>
              <span className="text-[#00d4ff]">Headless Commerce</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Why decoupling your frontend from your backend is the key to agility, speed, and unlimited UX flexibility in the modern digital economy.
            </p>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Technical Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 12, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-3 hidden md:block">
              <div className="sticky top-32">
                <h4 className="font-bold text-slate-900 mb-4">Table of Contents</h4>
                <ul className="space-y-3 text-sm text-slate-600 border-l border-slate-200 pl-4">
                  <li className="hover:text-blue-600 cursor-pointer">The Monolith Problem</li>
                  <li className="hover:text-blue-600 cursor-pointer">What is Headless?</li>
                  <li className="hover:text-blue-600 cursor-pointer">Key Benefits</li>
                  <li className="hover:text-blue-600 cursor-pointer">Migration Strategy</li>
                  <li className="hover:text-blue-600 cursor-pointer">The Tech Stack</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-slate-900 mb-4">Share this insight</h4>
                  <SocialShare 
                    title="The Engineering Case for Headless Commerce" 
                    url="https://newco.com/insights/headless-commerce-guide" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                  For over a decade, the "all-in-one" commerce suite was the gold standard. Platforms like Magento, Salesforce Commerce Cloud, and Shopify provided a tightly coupled backend and frontend. While convenient, this monolithic architecture has become a bottleneck for innovation.
                </p>
                
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Monolith Problem</h2>
                <p>
                  In a monolithic architecture, the frontend (the "head") is inextricably linked to the backend logic. This means:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li><strong>Slow Iteration:</strong> A simple UI change often requires a full system deployment.</li>
                  <li><strong>Limited UX:</strong> You're constrained by the platform's templating engine and themes.</li>
                  <li><strong>Performance Issues:</strong> Bloated codebases slow down page loads, hurting SEO and conversion.</li>
                  <li><strong>Channel Silos:</strong> It's difficult to push content to mobile apps, smartwatches, or kiosks from a web-centric CMS.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Enter Headless Commerce</h2>
                <p>
                  Headless commerce separates the frontend presentation layer from the backend commerce functionality. The two communicate via APIs. This decoupling allows you to:
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    The Headless Architecture
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="font-bold text-slate-900 mb-2">Frontend (Head)</div>
                      <div className="text-slate-500">React, Vue, Next.js, Mobile App</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-slate-400" />
                      <span className="mx-2 font-mono text-xs bg-slate-200 px-2 py-1 rounded">API</span>
                      <ArrowRight className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="font-bold text-slate-900 mb-2">Backend (Body)</div>
                      <div className="text-slate-500">PIM, OMS, Checkout, Payment</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why Engineering Teams Love It</h2>
                <p>
                  For developers, headless is a dream. It allows for:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span><strong>Tech Stack Freedom:</strong> Build the frontend in React, Vue, or Svelte without worrying about backend compatibility.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span><strong>Faster Performance:</strong> Use static site generation (SSG) and edge caching to deliver sub-second page loads.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span><strong>Omnichannel Ready:</strong> One backend can serve data to a website, mobile app, POS, and voice assistant simultaneously.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Is Headless Right for You?</h2>
                <p>
                  Headless isn't for everyone. It requires a higher level of technical maturity and development resources. However, if you are a mid-market or enterprise brand facing these challenges, it's time to consider the switch:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>You have a complex, content-rich customer journey.</li>
                  <li>You need to sell across multiple unique channels (web, mobile, IoT).</li>
                  <li>Your current site speed is hurting your conversion rates.</li>
                  <li>Your design team feels limited by your current platform's templates.</li>
                </ul>

                <div className="bg-blue-50 p-8 rounded-2xl mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Decouple?</h3>
                  <p className="text-slate-600 mb-6">
                    Migrating to headless is a significant engineering undertaking. Our team specializes in these complex transitions, ensuring zero downtime and data integrity.
                  </p>
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                      Schedule a Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
