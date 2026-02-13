import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RetailModernizationPersonalization() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-[#4169FF] to-[#4169FF] text-white py-20">
        <div className="container">
          <div className="mb-6">
            <Link href="/solutions/personalization">
              <a className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Personalization
              </a>
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-6">
              Case Study / Personalization
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              National Retailer Modernizes Legacy Systems and Unlocks 34% Revenue Growth with AI-Powered Personalization
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              How a home goods retailer deployed Bloomreach CDP to deliver individualized product recommendations and personalized email campaigns—driving $18M in incremental annual revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">34%</div>
              <div className="text-slate-600">Revenue Increase</div>
            </Card>
            
            <Card className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">$18M</div>
              <div className="text-slate-600">Incremental Revenue</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">2.8x</div>
              <div className="text-slate-600">Email CTR Improvement</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">47%</div>
              <div className="text-slate-600">Conversion Rate Lift</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            A national home goods retailer with 150+ stores and a growing e-commerce presence faced mounting pressure from digital-native competitors offering personalized shopping experiences. Their legacy technology stack—built on monolithic systems and batch processing—prevented them from delivering real-time personalization across channels.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Customer data lived in siloed systems (e-commerce platform, POS, email service provider, loyalty program), making it impossible to build unified customer profiles or orchestrate personalized experiences. Generic product recommendations and one-size-fits-all email campaigns resulted in declining conversion rates and stagnant customer lifetime value.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The retailer's existing technology infrastructure created several critical barriers to personalization:
          </p>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fragmented Customer Data</h3>
              <p className="text-slate-600">
                Customer interactions across web, mobile, email, and in-store lived in separate systems with no unified view. Marketing teams couldn't identify high-value customers or understand cross-channel behavior patterns.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Batch Processing Limitations</h3>
              <p className="text-slate-600">
                Legacy systems processed customer data overnight, making real-time personalization impossible. Product recommendations reflected yesterday's behavior, not current intent signals.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Generic Marketing Campaigns</h3>
              <p className="text-slate-600">
                Email campaigns sent identical messages to all subscribers regardless of preferences, purchase history, or browsing behavior—resulting in low engagement and high unsubscribe rates.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Debt and Scalability</h3>
              <p className="text-slate-600">
                Monolithic architecture made it expensive and time-consuming to add new personalization capabilities. Marketing teams depended on IT for every campaign modification, creating bottlenecks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            NEXDYNE architected and implemented a comprehensive personalization platform built on Bloomreach CDP, consolidating customer data from all touchpoints into unified, real-time profiles. The solution enabled individualized experiences across web, mobile, and email while empowering marketing teams with self-service tools.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Customer Data Platform Foundation</h3>
              <p className="text-slate-600 mb-4">
                We deployed Bloomreach CDP to unify customer data from e-commerce, POS, email, loyalty program, and customer service systems. Real-time streaming pipelines captured behavioral signals (page views, product interactions, cart events, purchases) as they happened, building comprehensive customer profiles that updated instantly.
              </p>
              <p className="text-slate-600">
                Identity resolution logic matched anonymous visitors to known customers across devices and sessions, enabling persistent personalization even before login. The CDP consolidated demographic data, transaction history, browsing behavior, email engagement, and in-store purchases into a single 360-degree view.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: AI-Powered Product Recommendations</h3>
              <p className="text-slate-600 mb-4">
                We implemented Bloomreach's machine learning recommendation engine across the website and mobile app. Collaborative filtering algorithms analyzed purchase patterns across millions of customers to surface "customers who bought this also bought" recommendations. Content-based filtering matched product attributes to individual preferences.
              </p>
              <p className="text-slate-600">
                Real-time personalization adapted recommendations based on current session behavior—if a customer browsed bedroom furniture, the homepage dynamically featured complementary items. A/B testing frameworks continuously optimized recommendation algorithms, placements, and presentation formats.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 3: Personalized Email Orchestration</h3>
              <p className="text-slate-600 mb-4">
                We rebuilt the email program using Bloomreach Engagement, replacing batch-and-blast campaigns with triggered, personalized messages. Abandoned cart emails featured the exact products left behind with personalized subject lines and send-time optimization. Browse abandonment campaigns reminded customers of recently viewed items with dynamic pricing and inventory updates.
              </p>
              <p className="text-slate-600">
                Predictive segmentation identified customers at risk of churn and delivered targeted win-back offers. Post-purchase campaigns recommended complementary products based on purchase history. All email content—product recommendations, hero images, subject lines—personalized dynamically for each recipient.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 4: Self-Service Marketing Tools</h3>
              <p className="text-slate-600">
                We trained marketing teams on Bloomreach's visual campaign builder, enabling them to create and launch personalized campaigns without IT support. Drag-and-drop interfaces made it easy to define audience segments, design customer journeys, and configure personalization rules. Real-time analytics dashboards tracked campaign performance and recommendation effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core Platform</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Bloomreach CDP (Customer Data Platform)</li>
                <li>• Bloomreach Engagement (Email Orchestration)</li>
                <li>• Bloomreach Discovery (Product Recommendations)</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrations</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Shopify Plus (E-commerce)</li>
                <li>• Square POS (In-store Transactions)</li>
                <li>• Salesforce Service Cloud (Customer Support)</li>
                <li>• Google Analytics 4 (Web Analytics)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Results and Business Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">34% Revenue Increase</h3>
              <p className="text-lg text-slate-600">
                Personalized product recommendations drove $18M in incremental annual revenue. Customers who engaged with recommendations had 2.3x higher average order values and purchased 40% more frequently than those who didn't.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">2.8x Email Engagement Improvement</h3>
              <p className="text-lg text-slate-600">
                Personalized email campaigns achieved 42% open rates (vs. 15% for generic campaigns) and 12% click-through rates (vs. 4% previously). Abandoned cart recovery rate increased from 8% to 23%, recovering $4.2M in otherwise lost revenue.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">47% Conversion Rate Lift</h3>
              <p className="text-lg text-slate-600">
                Website conversion rates improved from 2.1% to 3.1% across all traffic sources. Mobile conversion rates—historically lagging desktop—increased 61% as personalized recommendations adapted to smaller screens and touch interactions.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Operational Efficiency Gains</h3>
              <p className="text-lg text-slate-600">
                Marketing teams launched personalized campaigns 5x faster without IT bottlenecks. Self-service tools enabled rapid experimentation—the team ran 120+ A/B tests in the first year, continuously optimizing personalization strategies. Customer service teams gained unified customer views, reducing average handle time by 18%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-[#4169FF] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your customer experience with personalization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how NEXDYNE can help you unlock revenue growth through AI-powered personalization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a consultation
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View more case studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
