import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function FinancialChurnPrediction() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
        <span className="mx-2">/</span>
        <span>Financial Services Firm Reduces Churn by 28% with Predictive Analytics</span>
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
            Financial Services Firm Reduces Churn by 28% with Predictive Analytics
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Machine learning models identify at-risk customers 90 days before defection and trigger automated retention campaigns that save $47M in annual revenue.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A regional financial services firm managing $12 billion in assets faced escalating customer attrition that threatened long-term profitability. Annual churn rates had climbed to 14.2%—significantly above industry benchmarks—costing the firm approximately $168 million in lost revenue and requiring aggressive customer acquisition spending to maintain growth targets. The core problem: reactive retention strategies that only engaged customers after they'd already decided to leave.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The firm's existing approach relied on lagging indicators like account closure requests and complaint escalations—signals that appeared only after customers had researched alternatives and made switching decisions. Relationship managers lacked visibility into early warning signs of dissatisfaction, and retention offers were generic rather than tailored to individual customer needs and value profiles. This reactive posture meant the firm was always fighting uphill battles to save relationships that had already deteriorated.
            </p>
            <p className="text-lg leading-relaxed">
              The business impact extended beyond direct revenue loss. High churn rates damaged the firm's reputation in competitive markets, increased customer acquisition costs as word-of-mouth referrals declined, and created operational inefficiencies as teams scrambled to backfill lost accounts. Leadership recognized that predictive churn management—identifying at-risk customers before they defected—was essential to stabilizing the customer base and improving unit economics.
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
              NEXDYNE built a comprehensive churn prediction platform that analyzed over 200 behavioral, transactional, and demographic signals to identify customers at risk of defection up to 90 days before they left. The solution combined gradient boosting machine learning models with deep learning techniques to detect subtle patterns in customer behavior—declining transaction frequency, reduced digital engagement, increased support contacts, and competitive product research signals.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The platform scored every customer daily on a 0-100 churn risk scale, segmenting the portfolio into risk tiers that triggered different retention interventions. High-value customers showing early warning signs received proactive outreach from relationship managers armed with personalized retention offers based on predicted reasons for dissatisfaction. Medium-risk customers entered automated nurture campaigns designed to re-engage through relevant content and product recommendations.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE integrated the churn prediction system with the firm's CRM, marketing automation, and customer service platforms—ensuring that every customer-facing team had real-time visibility into risk scores and recommended actions. The solution included a feedback loop that tracked retention campaign effectiveness, continuously improving model accuracy and intervention strategies based on actual outcomes.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond prediction, NEXDYNE delivered explainability tools that helped relationship managers understand why specific customers were flagged as high-risk. This transparency enabled more authentic conversations focused on addressing root causes rather than generic retention pitches. The platform also identified systemic issues—product gaps, service pain points, competitive threats—that drove churn across customer segments, informing strategic improvements beyond individual retention efforts.
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
              <div className="text-5xl font-bold text-primary mb-2">28%</div>
              <div className="text-muted-foreground">Churn reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$47M</div>
              <div className="text-muted-foreground">Revenue saved annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">87%</div>
              <div className="text-muted-foreground">Prediction accuracy</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The churn prediction platform transformed the firm's retention economics within the first year of deployment. Overall churn rates decreased from 14.2% to 10.2%—a 28% reduction that saved approximately $47 million in annual revenue. The platform achieved 87% accuracy in predicting customer defection 90 days in advance, giving relationship managers sufficient time to intervene with meaningful retention offers.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Retention campaign effectiveness improved dramatically. Customers contacted through predictive interventions showed a 62% save rate compared to just 23% for reactive retention efforts triggered after closure requests. High-value customer retention increased by 34%, protecting the firm's most profitable relationships and stabilizing revenue streams that funded growth investments.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond direct retention impact, the platform delivered strategic insights that improved the overall customer experience. Analysis of churn drivers led to product enhancements that addressed common pain points, reducing baseline churn risk across the portfolio. Customer acquisition costs decreased by 19% as improved retention rates reduced the volume of new accounts needed to hit growth targets. Net Promoter Score increased by 18 points as proactive engagement demonstrated the firm's commitment to customer success rather than transactional relationships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to reduce customer churn?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build predictive analytics that protect your most valuable customer relationships.
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
