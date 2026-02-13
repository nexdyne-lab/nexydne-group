import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function TelecomCustomerExperience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
        <span className="mx-2">/</span>
        <span>Telecom Provider Improves NPS by 23 Points Through Customer Intelligence</span>
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
            Telecom Provider Improves NPS by 23 Points Through Customer Intelligence
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unified customer data platform enables proactive service interventions and personalized engagement, reducing support costs by $32M while increasing customer satisfaction.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A national telecommunications provider serving 8.4 million subscribers faced a customer experience crisis that threatened market position in an increasingly competitive landscape. Net Promoter Score had declined for three consecutive years, reaching -12—well below industry averages—while customer service costs consumed 18% of revenue due to high contact volumes and inefficient issue resolution. The root cause: fragmented customer data across 14 legacy systems that prevented holistic visibility into customer needs and service quality.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Service representatives lacked unified customer profiles, forcing customers to repeat information across multiple interactions and creating frustration that compounded technical issues. Network operations teams couldn't correlate service degradation with customer impact, leading to reactive problem-solving that allowed issues to escalate before intervention. Marketing campaigns operated without behavioral insights, resulting in irrelevant offers that damaged rather than strengthened customer relationships.
            </p>
            <p className="text-lg leading-relaxed">
              The business impact was severe. Churn rates exceeded 22% annually, requiring aggressive acquisition spending to maintain subscriber counts. Customer lifetime value declined by 31% over three years as dissatisfied customers downgraded to lower-tier plans or switched to competitors. Regulatory pressure intensified as customer complaints to oversight agencies increased, threatening the provider's operating licenses in key markets. Leadership recognized that transforming customer experience required unified intelligence that connected network performance, service interactions, and individual customer context.
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
              NEXDYNE designed and implemented a comprehensive customer intelligence platform that unified data from all 14 legacy systems into real-time customer profiles accessible across every touchpoint. The solution integrated network performance telemetry, billing data, service interactions, device information, and behavioral analytics into a single source of truth that powered proactive customer engagement and predictive service interventions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The platform's core innovation was its predictive service quality engine—machine learning models that analyzed network performance data to identify customers experiencing degraded service before they called support. When the system detected issues like slow data speeds, dropped calls, or connectivity problems, it automatically triggered proactive outreach through customers' preferred channels (SMS, email, app notification) acknowledging the problem and providing estimated resolution times.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE built a 360-degree customer view that gave service representatives complete interaction history, device details, plan information, and predicted lifetime value—enabling personalized support that resolved issues faster and identified upsell opportunities for high-value customers. The platform included sentiment analysis of support interactions that flagged at-risk customers for retention interventions before they churned.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond reactive support, the solution enabled intelligent engagement campaigns based on customer behavior and lifecycle stage. New customers received onboarding content tailored to their device and usage patterns. High-value customers got priority support routing and exclusive offers. Customers approaching contract renewal received personalized upgrade recommendations based on actual usage data rather than generic marketing messages. The platform continuously learned from customer responses, optimizing engagement strategies to maximize satisfaction and revenue.
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
              <div className="text-5xl font-bold text-primary mb-2">+23</div>
              <div className="text-muted-foreground">NPS point improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$32M</div>
              <div className="text-muted-foreground">Support cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">38%</div>
              <div className="text-muted-foreground">Fewer support contacts</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The customer intelligence platform transformed the provider's customer experience metrics within 18 months of deployment. Net Promoter Score improved from -12 to +11—a 23-point increase that moved the company from bottom quartile to industry-leading performance. Customer satisfaction scores increased by 34% as proactive service interventions and personalized engagement demonstrated genuine commitment to customer success.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Support costs decreased by $32 million annually as proactive service notifications reduced inbound contact volume by 38%. Average handle time dropped by 42% as representatives accessed unified customer profiles that eliminated information gathering and enabled faster issue resolution. First-call resolution improved from 67% to 89%, reducing customer frustration and repeat contacts that drove up costs.
            </p>
            <p className="text-lg leading-relaxed">
              Churn rates decreased from 22% to 15.8%—a 28% reduction that saved approximately $180 million in annual revenue and reduced customer acquisition spending by $45 million. Customer lifetime value increased by 41% as improved experiences drove higher plan adoption and reduced price sensitivity. Regulatory complaints dropped by 62%, eliminating compliance risks and improving the provider's reputation with oversight agencies. The platform's predictive capabilities enabled network operations to prioritize infrastructure investments based on customer impact, optimizing capital allocation and improving service quality in high-value markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform customer experience?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build unified customer intelligence that drives satisfaction and reduces costs.
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
