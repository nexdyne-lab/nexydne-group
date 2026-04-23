import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function EcommercePlatforms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Maroon Background */}
      <section className="relative bg-gradient-to-br from-red-900 via-primary to-primary text-white py-20 md:py-28">
        <div className="container">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Link href="/"><a className="hover:underline">Services</a></Link>
              <span>/</span>
              <Link href="/solutions/business-growth"><a className="hover:underline">Accelerating Business Growth</a></Link>
              <span>/</span>
              <span>E-commerce platforms</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 eb-garamond">
                E-commerce platforms
              </h1>
            </div>
            
            <div>
              <p className="text-2xl md:text-3xl leading-relaxed">
                Build new features in no time and grow faster with our e-commerce platform. Flexible, scalable and always one step ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Profile Photo and CTA */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-300 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Want to know more?</h3>
              <button className="border-2 border-slate-900 text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors">
                Ask James Wilson
              </button>
            </div>
            
            {/* Benefits Grid */}
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-12">The benefits of e-commerce platforms</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Add new features faster</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An awesome e-commerce platform lets you launch new channels and features instantly. The key to flexibility and staying growth-ready is composable architecture that adapts to your business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Leap ahead of the competition</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Predict market shifts and leave your competitors in the dust. A MACH platform gives you ultimate flexibility. Get ready to be unstoppable with headless commerce and API-first architecture.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">The right tool for the right job</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The best tools in a single platform, optimizing relevance for every user. Just like a smartphone's unique set of apps, your e-commerce stack should be tailored to your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">Our e-commerce expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our knowledge of user experience, backend and APIs makes your e-commerce vision happen. Long story short? NEXDYNE gives you the very best results with proven platform expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-6">About e-commerce platforms</h2>
          <div className="max-w-4xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A new e-commerce platform is your secret ingredient for growth. For clicks and bricks retailers, it means ultimate flexibility, the ability to launch new channels and seamless integration with your stores. In a fiercely competitive market, you need to lead the pack. No prizes for second best.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A MACH platform with microservices and APIs gives you that much-needed edge. We make sure your transition is frictionless, giving you a solid basis that keeps you one step ahead of the competition.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border-l-4 border-red-900">
            <p className="text-2xl font-bold text-red-900 italic">
              "We make sure your platform isn't just built to perform, but to lead the way."
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-4">How we build e-commerce platforms</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Our proven methodology combines MACH principles with composable commerce to deliver flexible, scalable platforms that grow with your business.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold text-sm mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Analyze current platform, customer journeys, and business goals. Define platform requirements, technology stack, and migration roadmap aligned with growth objectives.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold text-sm mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Platform Design</h3>
              <p className="text-muted-foreground">
                Design composable architecture with headless commerce, API-first integrations, and microservices. Create UX/UI designs optimized for conversion and mobile experience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold text-sm mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Build & Integrate</h3>
              <p className="text-muted-foreground">
                Implement platform with payment gateways, inventory management, CRM, and marketing tools. Conduct thorough testing including performance, security, and user acceptance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-primary font-bold text-sm mb-2">STEP 4</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Launch & Optimize</h3>
              <p className="text-muted-foreground">
                Execute phased launch with data migration and traffic cutover. Continuously optimize conversion rates, performance, and add new features based on analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Partners Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-4">E-commerce platform expertise</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            We partner with leading e-commerce platforms to deliver best-in-class solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Commercetools */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Commercetools</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                API-first, headless commerce platform built on MACH principles. Enables ultimate flexibility with microservices architecture and cloud-native infrastructure.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Headless & API-first architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Composable commerce modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-channel & omnichannel ready</span>
                </li>
              </ul>
            </div>

            {/* Shopware */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Shopware</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Open-source e-commerce platform with powerful features for B2C and B2B. Combines flexibility with enterprise-grade capabilities for mid-market retailers.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Open-source & extensible</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>B2B & B2C capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experience management tools</span>
                </li>
              </ul>
            </div>

            {/* Intershop */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Intershop</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Enterprise B2B e-commerce platform with complex pricing, quoting, and procurement workflows. Ideal for manufacturers and distributors with sophisticated requirements.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise B2B commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complex pricing & quoting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Procurement & approval workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Success stories</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            See how we've built cutting-edge e-commerce platforms that drive growth and exceed expectations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <Link href="/cases/fashion-retailer-headless-commerce">
              <a className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" 
                    alt="Fashion Retailer Headless Commerce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">FASHION RETAIL</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    Fashion Retailer Achieves 200% Mobile Conversion Growth
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implemented headless commerce with Commercetools enabling omnichannel experiences that increased mobile conversion by 200% and reduced time-to-market for new features by 75%.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary">200%</div>
                      <div className="text-muted-foreground">Mobile Conv.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">75%</div>
                      <div className="text-muted-foreground">Faster Launch</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-muted-foreground">More Orders</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Case Study 2 */}
            <Link href="/cases/optics-retailer-webshop-platform">
              <a className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=600" 
                    alt="Optics Retailer Webshop Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">OPTICS RETAIL</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    A Cutting-Edge Webshop Platform for Global Leader
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built innovative e-commerce platform with virtual try-on, prescription management, and seamless store integration enabling 150% online revenue growth for global optics retailer.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary">150%</div>
                      <div className="text-muted-foreground">Revenue</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">3x</div>
                      <div className="text-muted-foreground">Traffic</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">60%</div>
                      <div className="text-muted-foreground">Mobile Sales</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Case Study 3 */}
            <Link href="/cases/b2b-manufacturer-commerce-platform">
              <a className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                    alt="B2B Manufacturer Commerce Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">B2B MANUFACTURING</div>
                  <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    B2B Platform Automates 80% of Order Processing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Implemented Intershop B2B commerce with custom pricing, approval workflows, and ERP integration automating 80% of orders and reducing processing time from days to minutes.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-muted-foreground">Automated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">90%</div>
                      <div className="text-muted-foreground">Faster Orders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">$2M</div>
                      <div className="text-muted-foreground">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* E-commerce Capabilities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-4">E-commerce capabilities & services</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Our e-commerce expertise spans modern platforms and best practices.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Headless Commerce</h3>
              <p className="text-muted-foreground mb-3">
                Decouple frontend from backend with headless architecture. Enable omnichannel experiences, faster innovation, and ultimate flexibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Vue.js</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Payment Integration</h3>
              <p className="text-muted-foreground mb-3">
                Integrate multiple payment gateways with Stripe, Adyen, or PayPal. Support local payment methods, subscriptions, and fraud prevention.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Stripe</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Adyen</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">PayPal</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Search & Merchandising</h3>
              <p className="text-muted-foreground mb-3">
                Implement AI-powered search with Algolia or Elasticsearch. Enable faceted navigation, personalized recommendations, and visual search.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Algolia</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Elasticsearch</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Bloomreach</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Order Management</h3>
              <p className="text-muted-foreground mb-3">
                Centralize order processing across channels with OMS. Manage inventory, fulfillment, returns, and customer service from single platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Fluent Commerce</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Manhattan</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Brightpearl</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Marketing Automation</h3>
              <p className="text-muted-foreground mb-3">
                Integrate marketing tools for email campaigns, abandoned cart recovery, and customer segmentation. Automate personalized communications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Klaviyo</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Braze</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Mailchimp</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Analytics & Optimization</h3>
              <p className="text-muted-foreground mb-3">
                Track customer behavior, conversion funnels, and revenue metrics. Implement A/B testing and continuous optimization programs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Google Analytics</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Optimizely</span>
                <span className="px-3 py-1 bg-slate-100 text-charcoal/80 text-sm rounded-full">Hotjar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Our e-commerce solutions</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            NEXDYNE has all the tools to take your e-commerce platform to new heights. Want a top-notch user experience design, solid backend, smart APIs? No sweat. Whether you're a pure player or omnichannel pro, we prime your platform for success from the first design to the last integration. Ready for more? Our experts are ready to help you take the next big step.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">James Wilson</h3>
              </div>
              <p className="text-charcoal/80 mb-4">Ecommerce Director</p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 ease-in-out">
                  Get in touch
                </button>
                <button className="border-2 border-primary text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out">
                  Schedule a meeting
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Why Incentro</h3>
              <p className="text-muted-foreground">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-primary text-white overflow-hidden">
        {/* Curved Top Divider */}
        <div className="absolute top-0 left-0 right-0 -mt-1">
          <svg className="w-full h-16 text-white" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 48h1440V0C1440 0 1140 48 720 48S0 0 0 0v48z" fill="currentColor"/>
          </svg>
        </div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build your platform?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an e-commerce platform that's flexible, scalable, and always one step ahead. Our experts are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors duration-200 ease-in-out">
                Schedule a consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-200 ease-in-out">
                Download platform guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
