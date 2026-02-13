import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Target, Users, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function CustomerIntelligence() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span>Data-Driven Customer Intelligence</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white overflow-hidden">
        <div className="container px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 opacity-90">SERVICES / DATA-DRIVEN CUSTOMER INTELLIGENCE</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 eb-garamond">Data-Driven Customer Intelligence</h1>
              <p className="text-xl leading-relaxed opacity-95">
                Unlock deep customer insights through advanced analytics. We build intelligent systems that predict behavior, personalize experiences, and drive loyalty at scale.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/customer-intelligence-hero.57680a35.jpg" 
                alt="Customer Intelligence Analytics" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className="p-4 sm:p-6 lg:p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Predict customer behavior</h3>
              <p className="text-muted-foreground leading-relaxed">
                Machine learning models forecast churn risk, lifetime value, and next-best actions—enabling proactive engagement before customers disengage or defect to competitors.
              </p>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Personalize at scale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time recommendation engines deliver individualized content, offers, and experiences across every touchpoint—driving conversion rates and customer satisfaction simultaneously.
              </p>
            </Card>

            <Card className="p-4 sm:p-6 lg:p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Segment with precision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced clustering algorithms identify micro-segments based on behavior, preferences, and value—enabling targeted campaigns that resonate with specific customer cohorts.
              </p>
            </Card>
          </div>

          <Card className="p-4 sm:p-6 lg:p-8 bg-muted/30">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary-foreground">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
                <p className="text-muted-foreground mb-4">Ask Sarah Chen</p>
                <Button>Contact Expert</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">About customer intelligence</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Most organizations collect vast amounts of customer data but struggle to extract actionable insights. Siloed systems, fragmented analytics, and reactive reporting create blind spots that competitors exploit. Customer intelligence transforms raw data into strategic advantage—predicting needs, personalizing interactions, and optimizing lifetime value through advanced analytics and machine learning.
            </p>
            <p className="text-lg leading-relaxed">
              NEXDYNE builds end-to-end customer intelligence platforms that unify data from every touchpoint—CRM, e-commerce, support, marketing automation, and behavioral analytics. Our solutions combine predictive modeling, real-time segmentation, and automated personalization to deliver insights that drive measurable business outcomes. Whether you're reducing churn, increasing cross-sell, or optimizing customer acquisition costs, we architect intelligence systems that turn data into competitive differentiation.
            </p>
          </div>
        </div>
      </section>

      {/* How we help you Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">Maximizing Customer Centricity</p>
              <h2 className="text-3xl font-bold mb-8">How we help you</h2>
              <Card className="p-8 bg-muted/30">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">?</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
                    <Button>Get in touch</Button>
                    <p className="text-sm text-muted-foreground mt-4">Schedule a meeting</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <Link href="/solutions/digital-engagement" className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Digital engagement</h3>
                      <p className="text-muted-foreground">
                        Build meaningful customer relationships through intelligent, omnichannel engagement strategies that deliver personalized experiences at every touchpoint.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/personalization" className="block group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Personalization</h3>
                      <p className="text-muted-foreground">
                        Deliver hyper-relevant content, offers, and experiences to each customer using advanced segmentation, predictive analytics, and real-time decisioning engines.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <blockquote className="border-l-4 border-primary pl-4 sm:pl-8 py-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 leading-relaxed">
              "In today's market, customer intelligence isn't optional—it's existential. Organizations that leverage predictive analytics and personalization at scale capture disproportionate market share. Those that rely on intuition and lagging indicators become footnotes in case studies about disruption."
            </p>
            <footer className="text-muted-foreground">
              <strong>Dr. Michael Torres</strong>, Chief Data Officer at Insight Analytics Group
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Our customer intelligence solutions</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE's customer intelligence methodology starts with data foundation—consolidating customer interactions across systems into unified profiles that enable 360-degree visibility. We implement modern data platforms (Snowflake, Databricks, BigQuery) with real-time streaming pipelines that capture behavioral signals as they happen. This infrastructure supports advanced analytics workloads without compromising operational system performance.
            </p>
            <p className="text-lg leading-relaxed">
              Our data science teams build custom machine learning models tailored to your business context—churn prediction, lifetime value forecasting, propensity scoring, recommendation engines, and sentiment analysis. We deploy these models into production environments with automated retraining pipelines, A/B testing frameworks, and explainability tools that build stakeholder confidence. The result: intelligence platforms that continuously improve and deliver measurable ROI through increased retention, higher conversion, and optimized marketing spend.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Want to know more?</h2>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary-foreground">SC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-muted-foreground mb-4">Chief Analytics Officer</p>
                <div className="flex gap-4">
                  <Button size="lg">Get in touch</Button>
                  <Button size="lg" variant="outline">Schedule a meeting</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">Partners</p>
            <h2 className="text-3xl font-bold mb-4">Awesome partners turn dreams into reality</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With these technologies we build customer intelligence platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Snowflake</h3>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Databricks</h3>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Tableau</h3>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">All partners</Button>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/customer-intelligence-why-nexdyne.a8d6f7a6.jpg" 
                alt="NEXDYNE Customer Intelligence Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg leading-relaxed mb-6">
                Whether you're seeking a strategic analytics partner, acceleration for your data transformation, or predictive intelligence that drives competitive advantage, you've found the right team. NEXDYNE combines deep data science expertise with practical business acumen—we don't just build models, we deliver measurable outcomes that impact revenue, retention, and customer lifetime value.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our customer intelligence solutions leverage cutting-edge machine learning, real-time analytics, and proven personalization frameworks to keep you ahead of market shifts and customer expectations. With NEXDYNE, data becomes your most powerful competitive weapon.
              </p>
              <Button size="lg">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">Cases</p>
            <h2 className="text-3xl font-bold mb-4">Cases we love talkin' about</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Heard of a business that transforms customer data into competitive advantage? That'd be us. Check out these inspiring cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/cases/retail-personalization">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <img 
                  src="/customer-intelligence-case-retail.bd23da2a.jpg" 
                  alt="Retail Personalization" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">National Retailer Drives 34% Revenue Lift with AI Personalization</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time recommendation engine increases conversion and average order value across digital channels.
                  </p>
                  <Button variant="outline" className="w-full">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/financial-churn-prediction">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <img 
                  src="/customer-intelligence-case-financial.20a2ae21.jpg" 
                  alt="Financial Churn Prediction" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Financial Services Firm Reduces Churn by 28% with Predictive Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Machine learning models identify at-risk customers and trigger automated retention campaigns.
                  </p>
                  <Button variant="outline" className="w-full">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/telecom-customer-experience">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <img 
                  src="/customer-intelligence-case-telecom.2fa277ef.jpg" 
                  alt="Telecom Customer Experience" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Telecom Provider Improves NPS by 23 Points Through Customer Intelligence</h3>
                  <p className="text-muted-foreground mb-4">
                    Unified customer data platform enables proactive service and personalized engagement.
                  </p>
                  <Button variant="outline" className="w-full">Read case study</Button>
                </div>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">All cases</Button>
          </div>
        </div>
      </section>

      {/* Services Footer Navigation */}
      <section className="py-12 bg-background border-t">
        <div className="container">
          <h3 className="text-sm font-semibold text-muted-foreground mb-6">SERVICES</h3>
          <div className="grid md:grid-cols-6 gap-4">
            <Link href="/solutions/process-automation" className="text-sm hover:text-primary transition-colors">
              Process Automation
            </Link>
            <Link href="/solutions/app-development" className="text-sm hover:text-primary transition-colors">
              App Development
            </Link>
            <Link href="/solutions/customer-intelligence" className="text-sm font-semibold">
              Data-Driven Customer Intelligence
            </Link>
            <Link href="/solutions/digital-engagement" className="text-sm hover:text-primary transition-colors">
              Digital Engagement
            </Link>
            <Link href="/solutions/ecommerce" className="text-sm hover:text-primary transition-colors">
              E-commerce
            </Link>
            <Link href="/solutions/agentic-ai" className="text-sm hover:text-primary transition-colors">
              Agentic AI
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
