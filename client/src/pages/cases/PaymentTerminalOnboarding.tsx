import { Link } from "wouter";
import { ArrowLeft, Clock, TrendingUp, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PaymentTerminalOnboarding() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-primary to-primary text-white py-20">
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
              Fintech Speeds Up Terminal Onboarding 52% with Personalized Merchant Workflows
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              How a payment processor implemented Sitecore DXP and journey mapping to deliver personalized merchant onboarding experiences—reducing time-to-activation and increasing satisfaction scores.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-charcoal mb-2">52%</div>
              <div className="text-muted-foreground">Faster Onboarding</div>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-charcoal mb-2">38%</div>
              <div className="text-muted-foreground">Support Ticket Reduction</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-charcoal mb-2">4.7/5</div>
              <div className="text-muted-foreground">Merchant Satisfaction</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-charcoal mb-2">89%</div>
              <div className="text-muted-foreground">First-Time Completion Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            A rapidly growing payment processor serving 45,000+ merchants across retail, restaurants, and professional services faced a critical challenge: their terminal onboarding process created friction that delayed merchant activation and drove support costs. New merchants received generic setup instructions regardless of business type, technical sophistication, or hardware configuration—resulting in confusion, errors, and abandoned onboarding.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The company's one-size-fits-all approach meant a tech-savvy restaurant owner received the same documentation as a first-time retailer with no payment processing experience. Complex PDF manuals and static help articles couldn't adapt to individual merchant contexts, forcing merchants to search through irrelevant content to find answers specific to their situation.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The payment processor's generic onboarding experience created multiple pain points:
          </p>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Lengthy Time-to-Activation</h3>
              <p className="text-muted-foreground">
                Merchants took an average of 14 days from terminal delivery to first transaction. Generic setup guides forced merchants to wade through irrelevant instructions, delaying activation and creating revenue loss for both merchant and processor.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">High Support Costs</h3>
              <p className="text-muted-foreground">
                78% of new merchants contacted support during onboarding, overwhelming the support team with repetitive questions. Support agents spent time answering basic setup questions instead of resolving complex technical issues.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Poor Merchant Experience</h3>
              <p className="text-muted-foreground">
                Merchant satisfaction scores during onboarding averaged 2.9/5. Frustrated merchants complained about confusing documentation, irrelevant content, and lack of guidance tailored to their specific business type and terminal model.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Abandoned Onboarding</h3>
              <p className="text-muted-foreground">
                12% of merchants who received terminals never completed activation, representing lost revenue and wasted hardware investment. The company had no visibility into where merchants got stuck or why they abandoned the process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NEXDYNE designed and implemented a personalized onboarding platform built on Sitecore DXP that adapted content, workflows, and guidance based on merchant characteristics—business type, terminal model, technical experience, and real-time progress. The solution transformed generic documentation into intelligent, contextual experiences that guided each merchant through their unique activation journey.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Phase 1: Merchant Journey Mapping</h3>
              <p className="text-muted-foreground mb-4">
                We conducted in-depth research with merchants across segments (retail, restaurant, professional services) and technical sophistication levels. Journey mapping revealed distinct onboarding patterns and pain points for each merchant type. Restaurant owners needed fast setup during slow periods; retailers required inventory integration guidance; professional services focused on recurring billing configuration.
              </p>
              <p className="text-muted-foreground">
                We identified critical friction points where merchants abandoned onboarding: network configuration, receipt printer setup, and test transaction completion. Analytics showed merchants spent 40% of onboarding time searching for information specific to their terminal model—content that should have been surfaced automatically.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Phase 2: Personalization Rules Engine</h3>
              <p className="text-muted-foreground mb-4">
                We implemented Sitecore's personalization engine to dynamically adapt onboarding content based on merchant profile data (business type, terminal model, integration requirements) and behavioral signals (pages viewed, time spent, completion status). Rules logic determined which content, workflows, and support resources to surface for each merchant.
              </p>
              <p className="text-muted-foreground">
                A restaurant owner with a countertop terminal saw a streamlined workflow focused on quick setup, tip configuration, and receipt customization. A retail merchant with an integrated POS system received detailed inventory sync instructions and barcode scanner setup. Content personalized in real-time as merchants progressed—if they spent excessive time on network configuration, the system surfaced troubleshooting guides and offered proactive chat support.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Phase 3: Interactive Onboarding Workflows</h3>
              <p className="text-muted-foreground mb-4">
                We replaced static PDF manuals with interactive, step-by-step workflows that guided merchants through setup tasks in logical sequence. Progress tracking showed merchants exactly where they were in the onboarding journey and what remained. Conditional logic skipped irrelevant steps—merchants without receipt printers never saw printer setup instructions.
              </p>
              <p className="text-muted-foreground">
                Video tutorials, animated GIFs, and contextual tooltips provided visual guidance for complex tasks. Embedded test transaction tools let merchants validate setup without leaving the onboarding portal. Success confirmations and celebration moments reinforced progress and maintained momentum.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Phase 4: Proactive Support Integration</h3>
              <p className="text-muted-foreground">
                We integrated behavioral analytics with the support platform to trigger proactive interventions. If a merchant spent more than 10 minutes on a single step, the system offered contextual help articles or initiated a chat session with a support agent who had full visibility into the merchant's progress and configuration.
              </p>
              <p className="text-muted-foreground">
                Automated email sequences kept merchants engaged between sessions, reminding them of incomplete tasks and offering encouragement. Support agents gained a dashboard showing all in-progress onboarding sessions, enabling them to reach out proactively to merchants showing signs of struggle or abandonment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Core Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sitecore Experience Platform (DXP)</li>
                <li>• Sitecore Personalization Engine</li>
                <li>• Sitecore Forms (Interactive Workflows)</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Integrations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Salesforce CRM (Merchant Data)</li>
                <li>• Zendesk (Support Platform)</li>
                <li>• Segment (Behavioral Analytics)</li>
                <li>• Intercom (Proactive Chat)</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Results and Business Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">52% Reduction in Time-to-Activation</h3>
              <p className="text-lg text-muted-foreground">
                Average time from terminal delivery to first transaction dropped from 14 days to 6.7 days. Merchants completed onboarding 2x faster, enabling them to start processing payments and generating revenue sooner. The company activated 3,200 additional merchants per quarter compared to the previous year.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">38% Decrease in Support Tickets</h3>
              <p className="text-lg text-muted-foreground">
                Personalized, contextual guidance reduced support contacts during onboarding from 78% to 48% of merchants. Support team capacity freed up to handle complex technical issues and revenue-generating activities like upselling value-added services. Support cost per onboarded merchant decreased by $42.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">4.7/5 Merchant Satisfaction Score</h3>
              <p className="text-lg text-muted-foreground">
                Post-onboarding satisfaction scores increased from 2.9/5 to 4.7/5. Merchants praised the intuitive, personalized experience: "It felt like the system knew exactly what I needed at each step." Net Promoter Score (NPS) for onboarding improved from -12 to +58.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">89% First-Time Completion Rate</h3>
              <p className="text-lg text-muted-foreground">
                Onboarding abandonment dropped from 12% to 3%, recovering $2.4M in annual processing revenue from merchants who would have previously abandoned. Proactive interventions rescued 67% of at-risk onboarding sessions, preventing abandonment before it occurred.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your onboarding experience with personalization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how NEXDYNE can help you reduce friction and accelerate customer activation.
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
