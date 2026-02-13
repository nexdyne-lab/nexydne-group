import { Link } from "wouter";
import { ArrowLeft, Zap, TrendingUp, Search, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LogisticsProductAccess() {
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
              Logistics Company Enables 3.2x Faster Product Access with Personalized Search and Merchandising
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              How an industrial supply distributor implemented Tweakwise search and personalization to help customers find the right products faster—driving conversion rates and order values through intelligent recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">3.2x</div>
              <div className="text-slate-600">Faster Product Discovery</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">68%</div>
              <div className="text-slate-600">Search Conversion Increase</div>
            </Card>
            
            <Card className="p-6 text-center">
              <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">41%</div>
              <div className="text-slate-600">Average Order Value Lift</div>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">$12M</div>
              <div className="text-slate-600">Incremental Revenue</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            A national industrial supply distributor with 180,000+ SKUs serving construction, manufacturing, and facilities management customers faced a critical e-commerce challenge: their vast product catalog overwhelmed customers and made it difficult to find the right products quickly. Generic keyword search returned hundreds of irrelevant results, forcing customers to manually filter through pages of products or call sales representatives for guidance.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            The company's B2B customers—procurement managers, maintenance supervisors, and contractors—needed to find specific products fast during time-sensitive projects. Poor search relevance and lack of personalized recommendations meant customers either abandoned searches in frustration or spent excessive time navigating the catalog, reducing productivity and increasing the likelihood they'd purchase from competitors with better product discovery.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The distributor's product discovery experience created multiple barriers to purchase:
          </p>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Poor Search Relevance</h3>
              <p className="text-slate-600">
                Basic keyword matching returned irrelevant results that didn't account for synonyms, industry terminology, or product relationships. A search for "safety glasses" returned 2,400 results with no intelligent ranking—forcing customers to manually filter by attributes like lens type, frame style, and compliance certifications.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lack of Personalization</h3>
              <p className="text-slate-600">
                All customers saw identical search results and product listings regardless of industry, purchase history, or role. A construction contractor and a manufacturing plant manager searching for "work gloves" received the same generic results, despite needing very different product specifications.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missed Cross-Sell Opportunities</h3>
              <p className="text-slate-600">
                Product pages lacked intelligent recommendations for complementary items. Customers purchasing power tools didn't see relevant accessories, safety equipment, or consumables—forcing them to search separately for items they needed, or worse, purchasing incomplete solutions.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Dependency on Sales Support</h3>
              <p className="text-slate-600">
                42% of orders required sales representative assistance because customers couldn't find products through self-service. This created operational inefficiency and delayed order fulfillment, particularly for after-hours or weekend purchases when sales support wasn't available.
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
            NEXDYNE implemented Tweakwise's AI-powered search, merchandising, and personalization platform to transform product discovery. The solution combined intelligent search algorithms, behavioral personalization, and automated merchandising rules to help each customer find the right products faster—whether they searched by part number, generic description, or industry-specific terminology.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Intelligent Search Implementation</h3>
              <p className="text-slate-600 mb-4">
                We deployed Tweakwise's semantic search engine that understood natural language queries, synonyms, and industry-specific terminology. The system learned from customer behavior—tracking which products customers clicked, added to cart, and purchased for each search term—continuously improving relevance rankings.
              </p>
              <p className="text-slate-600">
                Autocomplete suggestions guided customers to relevant products as they typed, reducing search effort and preventing zero-result searches. Faceted navigation let customers refine results by brand, specifications, certifications, and price range. Search analytics identified gaps in the product catalog and opportunities to improve product data quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: Behavioral Personalization</h3>
              <p className="text-slate-600 mb-4">
                We configured Tweakwise's personalization engine to adapt search results and product listings based on customer characteristics and behavior. The system identified customer segments (construction, manufacturing, facilities management) and personalized results to prioritize products relevant to each segment.
              </p>
              <p className="text-slate-600">
                Purchase history influenced search rankings—if a customer previously bought Milwaukee power tools, Milwaukee products ranked higher in future searches. Browsing behavior personalized category pages in real-time—if a customer viewed heavy-duty gloves, the system prioritized industrial-grade products over light-duty alternatives. Role-based personalization ensured procurement managers saw bulk pricing and contract terms while maintenance supervisors saw technical specifications and compatibility information.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 3: Intelligent Product Recommendations</h3>
              <p className="text-slate-600 mb-4">
                We implemented Tweakwise's recommendation engine across product pages, cart, and checkout. "Frequently bought together" recommendations surfaced complementary products based on actual purchase patterns—customers buying power drills saw relevant drill bits, safety glasses, and carrying cases.
              </p>
              <p className="text-slate-600">
                "Customers also viewed" recommendations helped customers discover alternative products and compare specifications. Cart recommendations identified missing items for complete solutions—a customer purchasing paint saw recommendations for brushes, rollers, and drop cloths. Post-purchase email recommendations drove repeat orders by suggesting consumables and accessories based on previous purchases.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 4: Merchandising Automation</h3>
              <p className="text-slate-600">
                We configured automated merchandising rules that promoted high-margin products, cleared excess inventory, and featured new arrivals—all while maintaining relevance. Business rules ensured compliance products (safety equipment, certified materials) appeared prominently for regulated industries.
              </p>
              <p className="text-slate-600">
                Seasonal merchandising automatically adjusted product visibility based on calendar periods—winter safety gear promoted in Q4, outdoor equipment featured in spring. A/B testing frameworks continuously optimized merchandising strategies, search algorithms, and recommendation placements.
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
                <li>• Tweakwise Search (Semantic Search Engine)</li>
                <li>• Tweakwise Merchandising (Automated Rules)</li>
                <li>• Tweakwise Recommendations (ML Engine)</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrations</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Magento Commerce (E-commerce Platform)</li>
                <li>• Salesforce B2B Commerce (Account Management)</li>
                <li>• Google Analytics 4 (Behavioral Tracking)</li>
                <li>• Algolia (Backup Search Infrastructure)</li>
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
              <h3 className="text-2xl font-bold text-blue-600 mb-3">3.2x Faster Product Discovery</h3>
              <p className="text-lg text-slate-600">
                Average time from search to add-to-cart decreased from 8.4 minutes to 2.6 minutes. Intelligent search relevance and personalized results helped customers find the right products on the first try, eliminating frustrating trial-and-error searches. Zero-result searches dropped from 18% to 2%.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">68% Increase in Search Conversion</h3>
              <p className="text-lg text-slate-600">
                Customers who used search converted at 24% (vs. 14% previously). Personalized search results matched customer intent more accurately, reducing search abandonment and increasing purchase confidence. Search-driven revenue grew from 31% to 52% of total e-commerce sales.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">41% Average Order Value Lift</h3>
              <p className="text-lg text-slate-600">
                Intelligent product recommendations drove cross-sell and upsell revenue. Average order value increased from $342 to $482 as customers discovered complementary products and complete solutions. Recommendation click-through rates reached 34%, with 62% of customers adding at least one recommended item to their cart.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">$12M Incremental Annual Revenue</h3>
              <p className="text-lg text-slate-600">
                Improved product discovery and personalized recommendations generated $12M in incremental revenue in the first year. Self-service orders increased from 58% to 87% of total orders, reducing sales support costs by $1.8M annually. Customer satisfaction scores improved from 3.2/5 to 4.6/5, with customers praising the "Amazon-like" experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-[#4169FF] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform product discovery with intelligent search and personalization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how NEXDYNE can help you increase conversion and order values through better product discovery.
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
