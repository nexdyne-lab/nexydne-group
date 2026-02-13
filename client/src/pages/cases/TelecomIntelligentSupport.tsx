import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function TelecomIntelligentSupport() {
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
        <Link href="/solutions/conversational-ai" className="hover:text-foreground">Conversational AI</Link>
        <span className="mx-2">/</span>
        <span>Telecom Provider Improves CSAT by 38 Points</span>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container">
          <h1 className="text-5xl font-bold mb-3">Telecom Provider Improves CSAT by 38 Points Through Intelligent Support</h1>
          <p className="text-2xl opacity-90 max-w-4xl">
            AI-powered virtual assistant resolves technical issues 4x faster while maintaining context across multiple interaction channels, transforming customer experience in a highly competitive market.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground mb-6">
            A regional telecommunications provider serving 4.2 million subscribers faced a customer experience crisis that threatened market position. The company's Net Promoter Score (NPS) lagged competitors by 28 points, and customer churn rates exceeded industry averages by 34%. Post-interaction surveys revealed that technical support frustration—long wait times, repetitive troubleshooting, and inconsistent service quality—drove 62% of customer defections.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The core issue: customers contacted support through multiple channels (phone, web chat, mobile app, social media) but experienced fragmented, inconsistent service. A customer who started troubleshooting via web chat had to repeat their entire issue when escalating to phone support. Technical support agents lacked unified visibility into customer interaction histories, network diagnostics, and account details—forcing customers through redundant authentication and information gathering that wasted time and eroded trust.
          </p>
          <p className="text-lg text-muted-foreground">
            The company's existing IVR system and basic chatbot created more frustration than resolution. Customers navigated confusing menu trees only to reach agents who couldn't access conversation context. Technical troubleshooting required multiple interactions across days as agents manually escalated issues through siloed systems. Leadership recognized that without intelligent, omnichannel support that maintained context and delivered proactive resolutions, the company would continue losing customers to competitors offering superior digital experiences.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground mb-6">
            NEXDYNE designed and implemented an omnichannel conversational AI platform that unified customer interactions across phone (voice AI), web chat, mobile app, SMS, and social media. The solution centered on an intelligent virtual assistant that understood natural language, maintained context across channels, and integrated with network diagnostics, billing systems, and CRM to provide personalized, proactive support.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The AI assistant handled common technical issues autonomously—connectivity troubleshooting, device configuration, plan changes, billing inquiries, and service outage updates. NEXDYNE implemented real-time integrations with network monitoring systems that allowed the bot to proactively detect and resolve issues before customers even reported problems. When customers contacted support about slow internet speeds, the AI assistant automatically ran diagnostics, identified the issue (router firmware outdated), and guided customers through resolution steps with visual aids and real-time feedback.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            For complex technical issues requiring human expertise, the platform used intelligent routing that matched customers with specialized agents based on issue type, customer value, and agent skill sets. When escalating, the system provided agents with full conversation transcripts, diagnostic results, and recommended next steps—eliminating redundant information gathering. NEXDYNE built AI copilot capabilities that suggested troubleshooting steps and knowledge base articles to human agents in real-time, accelerating resolution even for escalated cases.
          </p>
          <p className="text-lg text-muted-foreground">
            The solution maintained conversation context across channels and time. A customer who started troubleshooting via mobile app could seamlessly continue the conversation via phone without repeating information. The platform remembered previous interactions, preferences, and technical configurations—delivering experiences that felt continuous and personalized rather than fragmented and transactional. NEXDYNE implemented continuous learning pipelines that analyzed resolution patterns, identified knowledge gaps, and expanded the AI assistant's capabilities based on real customer interactions.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">38</div>
              <div className="text-lg text-muted-foreground">Point CSAT increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4x</div>
              <div className="text-lg text-muted-foreground">Faster resolution</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">71%</div>
              <div className="text-lg text-muted-foreground">Autonomous handling</div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            The conversational AI platform transformed customer experience within four months of deployment. Customer satisfaction scores increased by 38 points as instant, contextual support replaced fragmented, repetitive interactions. The AI assistant autonomously resolved 71% of technical support inquiries—handling 340,000 monthly interactions without human intervention. Average resolution time dropped from 18 minutes to 4.3 minutes as intelligent diagnostics and guided troubleshooting eliminated trial-and-error approaches.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            First-contact resolution rates improved from 54% to 87% as the AI assistant accessed real-time network data and customer histories to diagnose issues accurately on first interaction. Customers no longer needed to repeat information when escalating to human agents—conversation context transferred seamlessly, reducing handle time by 42% for escalated cases. The platform's proactive outage notifications reached 98% of affected customers before they contacted support, preventing 120,000 monthly inquiries and improving perception of service reliability.
          </p>
          <p className="text-lg text-muted-foreground">
            The business impact extended beyond customer satisfaction metrics. Churn rates decreased by 29% as improved support experiences strengthened customer loyalty. Support costs dropped by $6.8 million annually through automation and efficiency gains. The telecom provider's NPS improved by 31 points, surpassing regional competitors for the first time in five years. Human agents, freed from repetitive troubleshooting, focused on complex technical issues and customer retention—activities that generated measurable revenue impact. The conversational AI platform now handles 4.1 million annual interactions, delivering $14.2 million in combined cost savings and churn reduction value while establishing customer experience as a competitive differentiator in a commoditized market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform technical support with AI?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build an intelligent support platform that drives customer satisfaction and operational efficiency.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get in touch</Button>
            <Link href="/solutions/conversational-ai">
              <Button size="lg" variant="outline">Learn more about Conversational AI</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
