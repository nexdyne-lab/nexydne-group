import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function RetailPersonalization() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
        <span className="mx-2">/</span>
        <span>National Retailer Drives 34% Revenue Lift with AI Personalization</span>
      </div>

      {/* Back Link */}
      <div className="container py-4">
        <Link href="/solutions/customer-intelligence">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Data-Driven Customer Intelligence
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">
            National Retailer Drives 34% Revenue Lift with AI Personalization
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-time recommendation engine increases conversion rates by 42% and average order value by 27% across digital channels through machine learning-powered product suggestions.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A national specialty retailer with 450 stores and $2.8 billion in annual revenue faced a critical digital commerce challenge. Despite investing heavily in e-commerce infrastructure, their online conversion rate lagged industry benchmarks by 35%, and average order value remained stubbornly flat year-over-year. The core problem: a one-size-fits-all digital experience that failed to recognize individual customer preferences, purchase history, or browsing behavior.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The retailer's existing recommendation system relied on basic collaborative filtering—showing customers "products others bought" without considering individual context, seasonality, or real-time signals. This generic approach produced irrelevant suggestions that customers ignored, leading to abandoned carts and missed cross-sell opportunities. Meanwhile, competitors with sophisticated personalization engines were capturing market share by delivering tailored experiences that drove engagement and revenue.
            </p>
            <p className="text-lg leading-relaxed">
              The business impact extended beyond lost sales. Marketing teams struggled to optimize campaigns without granular customer insights, inventory planners couldn't predict demand patterns accurately, and customer service faced increasing complaints about irrelevant email promotions. Leadership recognized that personalization wasn't just a nice-to-have feature—it was essential for competitive survival in an increasingly digital retail landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE designed and implemented an enterprise-grade AI personalization platform that unified customer data from all touchpoints—e-commerce, point-of-sale, mobile app, email, and customer service interactions. The solution centered on a real-time recommendation engine built using advanced machine learning techniques including collaborative filtering, content-based filtering, and deep learning models trained on 18 months of historical transaction data.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The platform processed over 500 customer attributes and behavioral signals to generate personalized product recommendations within 50 milliseconds—fast enough to support real-time website personalization without degrading page performance. NEXDYNE implemented multiple recommendation strategies optimized for different customer journey stages: homepage discovery, category browsing, product detail pages, cart optimization, and post-purchase cross-sell.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beyond product recommendations, the solution enabled dynamic content personalization—adjusting hero banners, promotional messaging, and email campaigns based on individual customer segments and predicted lifetime value. NEXDYNE built a comprehensive A/B testing framework that allowed merchandising teams to experiment with recommendation strategies and measure impact on key metrics without requiring engineering resources.
            </p>
            <p className="text-lg leading-relaxed">
              The implementation included automated model retraining pipelines that continuously improved recommendation accuracy as new customer data arrived. NEXDYNE also delivered explainability tools that helped merchandisers understand why specific products were recommended, building confidence in the AI system and enabling manual overrides when business context required human judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">34%</div>
              <div className="text-muted-foreground">Revenue increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">42%</div>
              <div className="text-muted-foreground">Higher conversion rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">27%</div>
              <div className="text-muted-foreground">Larger average order value</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The AI personalization platform transformed the retailer's digital performance within six months of launch. Online revenue increased by 34% year-over-year, driven by a 42% improvement in conversion rate and a 27% increase in average order value. Customers who engaged with personalized recommendations showed 3.2x higher lifetime value compared to those who didn't, validating the long-term strategic value of the investment.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Email marketing performance improved dramatically, with click-through rates increasing by 58% and unsubscribe rates dropping by 31% as customers received more relevant product suggestions aligned with their preferences. Cart abandonment decreased by 23% as the recommendation engine surfaced complementary products that increased perceived value and reduced price sensitivity.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond revenue metrics, the platform delivered operational benefits across the organization. Inventory turnover improved by 18% as predictive models helped planners anticipate demand more accurately. Marketing teams reduced customer acquisition costs by 22% through better targeting based on lookalike modeling. Customer satisfaction scores increased by 15 points as shoppers appreciated the tailored experience that made discovery easier and more enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to unlock customer intelligence?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build AI-powered personalization that drives measurable revenue growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get in touch</Button>
            <Link href="/solutions/customer-intelligence">
              <Button size="lg" variant="outline">Learn more about Data-Driven Customer Intelligence</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
