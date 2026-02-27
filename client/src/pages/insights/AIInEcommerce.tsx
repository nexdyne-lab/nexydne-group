import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Tag,
  MessageSquare,
  Share2,
  Calendar,
  User
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export function AIInEcommerce() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-base">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/80 to-base" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-8" />
            <div className="flex items-center gap-4 text-sm text-secondary font-semibold mb-6">
              <span className="uppercase tracking-wider">Artificial Intelligence</span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-4 leading-tight">
              AI-Driven Merchandising: <br/>
              <span className="text-secondary">Beyond Recommendations</span>
            </h1>
            <p className="text-xl text-muted-foreground/50 mb-8 max-w-2xl leading-relaxed">
              How machine learning is transforming inventory management, dynamic pricing, and personalized search results to drive profitability.
            </p>
            
            <div className="flex items-center gap-6 text-muted-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Data Science Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 3, 2025</span>
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
                <h4 className="font-bold text-charcoal mb-4">Table of Contents</h4>
                <ul className="space-y-3 text-sm text-muted-foreground border-l border-slate-200 pl-4">
                  <li className="hover:text-blue-600 cursor-pointer">The New Standard</li>
                  <li className="hover:text-blue-600 cursor-pointer">Intelligent Search</li>
                  <li className="hover:text-blue-600 cursor-pointer">Dynamic Pricing</li>
                  <li className="hover:text-blue-600 cursor-pointer">Predictive Inventory</li>
                  <li className="hover:text-blue-600 cursor-pointer">Implementation</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-charcoal mb-4">Share this insight</h4>
                  <SocialShare 
                    title="AI-Driven Merchandising: Beyond Recommendations" 
                    url="https://newco.com/insights/ai-in-ecommerce" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  "Customers who bought this also bought..." is old news. Today's AI in e-commerce goes far deeper, influencing the entire supply chain and customer journey in real-time. It's no longer just about suggesting products; it's about predicting intent and optimizing margins.
                </p>
                
                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">1. Intelligent Search (Vector Search)</h2>
                <p>
                  Traditional keyword search fails when users don't know the exact product name. AI-powered vector search understands semantic meaning.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                  <div className="flex gap-4">
                    <Search className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">The Difference</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Keyword Search:</strong> "Red dress summer" -&gt; Looks for exact matches of these words.<br/>
                        <strong>Vector Search:</strong> "Something light and airy for a beach wedding" -&gt; Understands context, fabric, and occasion, returning relevant results even without keyword matches.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">2. Dynamic Pricing Algorithms</h2>
                <p>
                  Airlines have done it for years; now retailers are catching up. AI models analyze competitor pricing, demand surges, inventory levels, and even time of day to adjust prices dynamically.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li><strong>Margin Protection:</strong> Automatically raise prices when stock is low to maximize profit.</li>
                  <li><strong>Inventory Clearance:</strong> Lower prices incrementally to clear stagnant stock before it becomes a liability.</li>
                  <li><strong>Competitor Matching:</strong> React instantly to competitor flash sales.</li>
                </ul>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">3. Predictive Inventory Management</h2>
                <p>
                  Overstocking ties up capital; understocking loses sales. AI forecasts demand with hyper-local precision.
                </p>
                <p>
                  By analyzing historical sales, weather patterns, local events, and social media trends, ML models can predict that <em>Store A</em> needs more umbrellas next Tuesday, while <em>Store B</em> needs more sunscreen. This reduces carrying costs by up to 30%.
                </p>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">4. Generative AI for Content</h2>
                <p>
                  Creating unique product descriptions for thousands of SKUs is tedious. LLMs can generate SEO-optimized, on-brand descriptions, meta tags, and even alt text for images at scale.
                </p>

                <div className="bg-blue-50 p-8 rounded-2xl mt-12">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Start Your AI Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Implementing AI doesn't mean replacing your team. It means giving them superpowers. We help you identify high-impact use cases and integrate the right models into your stack.
                  </p>
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                      Explore AI Solutions
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
