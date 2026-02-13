import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function RetailOmnichannel() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/digital-engagement" className="hover:text-foreground">Digital Engagement</Link>
        <span className="mx-2">/</span>
        <span>Retailer Increases Customer Engagement by 156%</span>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Retailer Increases Customer Engagement by 156% with Omnichannel Platform</h1>
          <p className="text-2xl opacity-95">
            Mobile-first engagement strategy drives 43% increase in app usage and 31% boost in customer lifetime value through personalized experiences across all touchpoints.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A national specialty retailer with 380 stores and $1.9 billion in annual revenue faced a critical customer engagement problem. Despite having a mobile app, email marketing platform, and loyalty program, these channels operated in silos—creating disjointed experiences that frustrated customers and limited marketing effectiveness. App engagement rates lagged industry benchmarks by 45%, email open rates had declined 22% year-over-year, and loyalty program participation stagnated at just 28% of the customer base.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The core issue: customers received generic, untargeted communications that ignored their preferences, purchase history, and real-time context. A customer browsing winter coats online would receive an email promoting summer dresses the next day. In-store shoppers had no way to access their loyalty points or personalized offers via mobile. The fragmented experience drove customers to competitors who delivered seamless, personalized engagement across every touchpoint.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond lost sales, the siloed approach created operational inefficiencies. Marketing teams spent excessive time manually coordinating campaigns across channels. Customer service struggled to resolve issues without unified customer histories. Store associates couldn't access digital engagement data to personalize in-store interactions. Leadership recognized that omnichannel engagement wasn't just a marketing initiative—it was essential for competitive survival in retail's digital-first future.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE designed and implemented an enterprise omnichannel engagement platform that unified customer data and orchestrated personalized interactions across mobile app, email, SMS, push notifications, and in-store touchpoints. The solution centered on a customer data platform (CDP) that consolidated behavioral data, purchase history, loyalty status, and real-time context into unified customer profiles accessible across all channels.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The mobile app became the engagement hub, rebuilt with React Native to deliver native iOS and Android experiences. NEXDYNE implemented intelligent push notifications triggered by behavioral signals—cart abandonment, price drops on saved items, back-in-stock alerts, and location-based offers when customers entered store proximity. The app integrated loyalty program functionality, allowing customers to track points, redeem rewards, and access personalized offers seamlessly during shopping journeys.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Email and SMS campaigns leveraged predictive analytics to optimize send times, content, and offers for individual customers. NEXDYNE built dynamic content templates that automatically personalized product recommendations, imagery, and messaging based on customer segments, browsing behavior, and purchase patterns. The platform included A/B testing capabilities that continuously optimized engagement strategies based on performance data.
            </p>
            <p className="text-lg leading-relaxed">
              For in-store experiences, NEXDYNE equipped associates with tablet apps that surfaced customer engagement histories, preferences, and personalized recommendations during interactions. The solution included geofencing capabilities that triggered welcome messages and exclusive in-store offers when loyalty members entered stores. All engagement touchpoints fed data back into the CDP, creating a continuous learning loop that improved personalization over time.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">156%</div>
              <div className="text-lg text-muted-foreground">Engagement increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">43%</div>
              <div className="text-lg text-muted-foreground">Higher app usage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">31%</div>
              <div className="text-lg text-muted-foreground">Increased lifetime value</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The omnichannel engagement platform transformed customer relationships within four months of launch. Overall customer engagement—measured by interactions across all touchpoints—increased by 156% as personalized, contextually relevant communications replaced generic mass messaging. Mobile app usage surged 43%, with daily active users growing from 12% to 34% of the loyalty member base as customers discovered value in personalized recommendations and seamless shopping experiences.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Email marketing performance improved dramatically, with open rates increasing by 38% and click-through rates doubling as dynamic content personalization delivered more relevant product suggestions. SMS campaigns achieved 62% open rates and 18% conversion rates—far exceeding industry benchmarks—by leveraging behavioral triggers and optimal send-time predictions. Push notification opt-in rates reached 67%, with 24% of recipients taking action within 30 minutes of receiving location-based offers.
            </p>
            <p className="text-lg leading-relaxed">
              The business impact extended beyond engagement metrics. Customer lifetime value increased by 31% as personalized experiences drove higher purchase frequency and average order values. Loyalty program participation grew from 28% to 58% of customers as the mobile app made enrollment and reward redemption frictionless. Store associates reported 25% faster checkout times and higher customer satisfaction as tablet apps enabled personalized service. Marketing team productivity improved by 40% through automated campaign orchestration, freeing resources for strategic initiatives rather than manual coordination.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFE5D9]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform customer engagement?</h2>
          <p className="text-lg mb-8">Let's build an omnichannel platform that drives measurable business outcomes.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get in touch</Button>
            <Link href="/solutions/digital-engagement">
              <Button size="lg" variant="outline">Learn more about Digital Engagement</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
