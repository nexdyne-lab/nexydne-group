import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ConversionOptimization() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 text-rose-100">
            <Link href="/solutions" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href="/solutions/business-growth" className="hover:text-white transition-colors">
              Accelerating Business Growth
            </Link>
            <span>/</span>
            <span className="text-white">Conversion rate optimization</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-3 eb-garamond">
                Conversion rate optimization
              </h1>
            </div>
            <div>
              <p className="text-xl text-rose-50">
                Want to convert visitors into customers? Turn your website into a profit-making machine with a proven CRO strategy for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop"
                alt="Robert Martinez - CRO Director"
                className="rounded-full w-64 h-64 object-cover mx-auto lg:mx-0"
              />
              <div className="text-center lg:text-left mt-6">
                <p className="text-lg font-semibold">Do you want to know more?</p>
                <Button variant="outline" className="mt-4">
                  Ask Robert Martinez
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-12">The benefits of Conversion Rate Optimization</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick conversion wins</h3>
                    <p className="text-muted-foreground">
                      Increase sales, leads and customer engagement with targeted optimizations that deliver immediate results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Higher customer value</h3>
                    <p className="text-muted-foreground">
                      Raise order values and customer lifetime value (CLV) with a CRO strategy focused on long-term relationships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduce customer churn</h3>
                    <p className="text-muted-foreground">
                      Retain customers by leveraging insights into their needs and boost loyalty with an optimized offer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic growth</h3>
                    <p className="text-muted-foreground">
                      Get strategic about your long-term growth with insights into customer behavior, pricing and product tests, and refined market data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CRO Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">About conversion rate optimization</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Conversion rate optimization: your key to increasing sales from existing visitors. Many companies focus on generating more traffic. But the secret to generating serious profit is right under your nose: optimizing for your current visitors.
            </p>
            <p>
              Conversion rate optimization raises the value of every tap or click. While SEO, SEA and social media stimulate growth, we convert traffic into sales faster. Watch your conversion percentage gradually increase. Focus on performance and create sustainable growth.
            </p>
          </div>

          <div className="mt-12 p-8 bg-rose-50 rounded-2xl border-l-4 border-rose-600">
            <blockquote className="text-2xl font-medium text-rose-900 italic">
              "Want to find out more about these core principles, our way of working and how you can level up your lead generation?"
            </blockquote>
            <p className="mt-4 text-charcoal/80 font-semibold">— Robert Martinez</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Our approach to conversion rate optimization</h2>
            <p className="text-xl text-muted-foreground">
              We combine our experience and expertise to enhance the performance of marketing teams. Our consultants know exactly what drives smooth sales funnels. They share that knowledge and their unique Incentronaut flair directly with your team. No filters here.
            </p>
            <p className="text-xl text-muted-foreground mt-4">
              We assess the maturity of conversion processes and produce a targeted plan for sustainable growth. Rather than quick fixes, we give you an iron-clad strategy that understands your customers' deepest drives and tackles your major challenges.
            </p>
            <p className="text-xl text-muted-foreground mt-4">
              Our core principles for growth? Create a shared vision, truly get to know your customer, develop a structured process and get the right experts on board.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-sm font-bold text-primary mb-3">STEP 1</div>
              <h3 className="text-xl font-bold mb-4">Audit & Analysis</h3>
              <p className="text-muted-foreground">
                Analyze user behavior, identify friction points, and benchmark against industry standards. Map customer journey and define conversion goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-sm font-bold text-primary mb-3">STEP 2</div>
              <h3 className="text-xl font-bold mb-4">Hypothesis & Testing</h3>
              <p className="text-muted-foreground">
                Develop data-driven hypotheses, design A/B tests, and implement multivariate experiments. Prioritize tests by impact and effort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-sm font-bold text-primary mb-3">STEP 3</div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-muted-foreground">
                Deploy winning variations, optimize page speed, improve UX/UI, and implement personalization. Ensure mobile-first experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="text-sm font-bold text-primary mb-3">STEP 4</div>
              <h3 className="text-xl font-bold mb-4">Monitor & Iterate</h3>
              <p className="text-muted-foreground">
                Track KPIs, analyze results, and continuously refine strategy. Build experimentation culture and scale successful tactics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Solutions Section */}
      <section className="py-20 bg-rose-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="CRO Analytics Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Do you want to know more?</h2>
              <div className="mb-8">
                <p className="text-lg font-semibold mb-2">Robert Martinez</p>
                <p className="text-muted-foreground">CRO Director</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Get in touch
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a meeting <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"
                alt="NEXDYNE Office"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Partners</p>
            <h2 className="text-4xl font-bold mb-6">Awesome partners turn dreams into reality</h2>
            <p className="text-xl text-muted-foreground">
              With these partners we realize outstanding CRO solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">Bloomreach</h3>
            </div>
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">Commercetools</h3>
            </div>
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">Tweakwise</h3>
            </div>
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">Sitecore</h3>
            </div>
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">Optimizely</h3>
            </div>
            <div className="bg-white p-12 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-charcoal">VWO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Success stories</h2>
            <p className="text-xl text-muted-foreground">
              See how we've optimized conversion rates and transformed digital experiences for leading brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="SaaS Platform CRO"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                SaaS Platform Doubles Trial Conversions
              </h3>
              <p className="text-muted-foreground mb-4">
                Redesigned onboarding flow and implemented progressive profiling to reduce friction and increase trial-to-paid conversion by 112%.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-primary">+112% conversions</span>
                <span className="text-muted-foreground/70">|</span>
                <span className="text-muted-foreground">B2B SaaS</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop"
                  alt="E-commerce Checkout Optimization"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                E-commerce Reduces Cart Abandonment 43%
              </h3>
              <p className="text-muted-foreground mb-4">
                Optimized checkout process with one-click payment, trust signals, and exit-intent offers to dramatically reduce abandonment.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-primary">-43% abandonment</span>
                <span className="text-muted-foreground/70">|</span>
                <span className="text-muted-foreground">Retail</span>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&h=400&fit=crop"
                  alt="Lead Generation Optimization"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Financial Services Increases Leads 89%
              </h3>
              <p className="text-muted-foreground mb-4">
                A/B tested landing pages, forms, and CTAs with personalized messaging to nearly double qualified lead generation.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-bold text-primary">+89% leads</span>
                <span className="text-muted-foreground/70">|</span>
                <span className="text-muted-foreground">Financial Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Capabilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold mb-6">CRO capabilities & services</h2>
            <p className="text-xl text-muted-foreground">
              Our conversion optimization expertise spans analytics, testing, and experimentation best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Analytics & Research</h3>
              <p className="text-muted-foreground mb-6">
                Deep-dive analytics with heatmaps, session recordings, and user surveys to understand behavior and identify opportunities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Google Analytics</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Hotjar</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Mixpanel</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">A/B Testing</h3>
              <p className="text-muted-foreground mb-6">
                Design and execute statistically significant A/B tests on landing pages, CTAs, forms, and checkout flows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Optimizely</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">VWO</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Google Optimize</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Landing Page Optimization</h3>
              <p className="text-muted-foreground mb-6">
                Optimize landing pages with compelling copy, clear value propositions, and friction-reducing design patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Unbounce</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Instapage</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Webflow</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Personalization</h3>
              <p className="text-muted-foreground mb-6">
                Deliver personalized experiences based on user behavior, demographics, and traffic source to increase relevance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Dynamic Yield</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Bloomreach</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Segment</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Form Optimization</h3>
              <p className="text-muted-foreground mb-6">
                Reduce form abandonment with progressive profiling, smart defaults, and inline validation that guides users.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Typeform</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Formstack</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Jotform</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Mobile Optimization</h3>
              <p className="text-muted-foreground mb-6">
                Optimize for mobile-first experiences with responsive design, fast loading, and thumb-friendly interactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">PageSpeed</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AMP</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">PWA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-blue-500 to-rose-600 text-white overflow-hidden">
        {/* Curved Divider Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to optimize conversions?</h2>
          <p className="text-2xl mb-12 text-blue-50 max-w-3xl mx-auto">
            Let's turn your website into a profit-making machine with data-driven CRO strategies. Our experts are ready to maximize your conversion rates.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-50">
              Schedule a consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download CRO guide
            </Button>
          </div>
        </div>
      </section>
          <RelatedContent items={dataRelatedItems} />
      <Footer />

    </div>
  );
}
