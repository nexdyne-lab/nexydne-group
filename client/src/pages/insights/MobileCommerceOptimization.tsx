import React from 'react';
import ReadingProgress from '@/components/ReadingProgress';
import InlineTableOfContents from '@/components/InlineTableOfContents';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  MousePointerClick,
  CreditCard,
  Share2,
  Calendar,
  User
} from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SocialShare from '@/components/SocialShare';

export function MobileCommerceOptimization() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0e3d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ce7d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e3d]/90 via-[#0a0e3d]/80 to-[#0a0e3d]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumbs className="mb-8" />
            <div className="flex items-center gap-4 text-sm text-[#00d4ff] font-semibold mb-6">
              <span className="uppercase tracking-wider">Mobile Strategy</span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Optimizing for the <br/>
              <span className="text-[#00d4ff]">Mobile-First Shopper</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Mobile traffic has overtaken desktop, but conversion rates still lag. Here are the technical strategies to close the gap and capture revenue on the small screen.
            </p>
            
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By UX Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 28, 2025</span>
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
                  <li className="hover:text-blue-600 cursor-pointer">The Mobile Gap</li>
                  <li className="hover:text-blue-600 cursor-pointer">Speed is Feature #1</li>
                  <li className="hover:text-blue-600 cursor-pointer">Thumb-Friendly UX</li>
                  <li className="hover:text-blue-600 cursor-pointer">Frictionless Checkout</li>
                  <li className="hover:text-blue-600 cursor-pointer">PWA vs Native</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-slate-900 mb-4">Share this insight</h4>
                  <SocialShare 
                    title="Optimizing for the Mobile-First Shopper" 
                    url="https://newco.com/insights/mobile-commerce-optimization" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                  It's a common story: 70% of your traffic is mobile, but it only accounts for 40% of your revenue. The "Mobile Gap" is real, and it's usually caused by friction. Mobile users are impatient, distracted, and dealing with smaller screens and spotty connections.
                </p>
                
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Speed is Feature #1</h2>
                <p>
                  On mobile, every second of load time reduces conversion by 20%. You cannot afford bloat.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li><strong>Image Optimization:</strong> Serve Next-Gen formats (WebP, AVIF) sized specifically for mobile viewports.</li>
                  <li><strong>Code Splitting:</strong> Only load the JavaScript needed for the current view.</li>
                  <li><strong>Lazy Loading:</strong> Defer off-screen images and heavy scripts until the user scrolls.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Thumb-Friendly UX</h2>
                <p>
                  The "Thumb Zone" is the area of the screen a user can easily reach with one hand.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                  <div className="flex gap-4">
                    <MousePointerClick className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Design Rules</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Place primary CTAs (Add to Cart, Checkout) at the bottom of the screen.</li>
                        <li>• Ensure touch targets are at least 44x44 pixels to prevent "fat finger" errors.</li>
                        <li>• Avoid hover states; they don't exist on touch screens.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Frictionless Checkout</h2>
                <p>
                  Typing on a phone is a pain. Minimize it.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li><strong>Digital Wallets:</strong> Apple Pay and Google Pay are mandatory. They reduce checkout to a fingerprint scan.</li>
                  <li><strong>Guest Checkout:</strong> Don't force account creation before purchase.</li>
                  <li><strong>Address Auto-Complete:</strong> Use Google Places API to fill addresses with a few keystrokes.</li>
                  <li><strong>Numeric Keypads:</strong> Trigger the right keyboard for phone and credit card fields.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. PWA vs. Native App</h2>
                <p>
                  Do you need an app? Maybe not. Progressive Web Apps (PWAs) offer an app-like experience (offline mode, push notifications, home screen icon) directly in the browser, without the friction of an app store download. For many retailers, a high-performance PWA yields better ROI than a native app.
                </p>

                <div className="bg-blue-50 p-8 rounded-2xl mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Audit Your Mobile Experience</h3>
                  <p className="text-slate-600 mb-6">
                    We can perform a comprehensive mobile audit, identifying performance bottlenecks and UX friction points that are costing you sales.
                  </p>
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
                      Request Mobile Audit
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
