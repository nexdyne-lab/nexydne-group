import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function EcommerceAIChatbot() {
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
        <span>E-commerce Leader Reduces Support Costs by 64%</span>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container">
          <h1 className="text-5xl font-bold mb-3">E-commerce Leader Reduces Support Costs by 64% with AI Chatbot</h1>
          <p className="text-2xl opacity-90 max-w-4xl">
            Conversational AI handles 78% of customer inquiries autonomously, delivering instant resolutions while improving customer satisfaction and freeing human agents for complex issues.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground mb-6">
            A leading online retailer with $2.8 billion in annual revenue and 12 million active customers faced escalating customer support costs that threatened profitability. The company operated a 450-person contact center handling 85,000 monthly inquiries—order tracking, returns, product questions, and account issues. Average handle time exceeded 8 minutes, and customer satisfaction scores lagged industry benchmarks by 18 points as wait times stretched beyond acceptable limits during peak periods.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The core issue: 70% of support inquiries involved routine, repetitive questions that didn't require human judgment—"Where's my order?" "How do I return this?" "What's your shipping policy?" Yet every inquiry consumed agent time and drove up operational costs. The company had deployed a basic chatbot two years prior, but its rigid decision-tree logic frustrated customers with irrelevant responses and frequent dead-ends. Customers actively avoided the bot, preferring to wait for human agents even for simple queries.
          </p>
          <p className="text-lg text-muted-foreground">
            Beyond cost pressures, the support burden limited strategic initiatives. Leadership recognized that customer service should be a competitive differentiator, not a cost center. But without intelligent automation that actually worked, the contact center remained trapped in a cycle of reactive firefighting rather than proactive customer experience optimization.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground mb-6">
            NEXDYNE designed and implemented an enterprise conversational AI platform powered by large language models and integrated with the retailer's e-commerce, order management, and CRM systems. The solution centered on an intelligent virtual assistant deployed across web, mobile app, and messaging channels (WhatsApp, Facebook Messenger) that understood natural language queries and maintained context across multi-turn conversations.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The AI assistant handled common support scenarios autonomously—order tracking, return initiation, shipping policy questions, account updates, and product recommendations. NEXDYNE implemented real-time integrations that allowed the bot to access customer order histories, inventory data, and shipping status to provide accurate, personalized responses. For order tracking, customers simply asked "Where's my order?" and received instant updates with tracking links, no authentication friction required.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            For complex or ambiguous queries, the platform used sentiment analysis and confidence scoring to determine when human escalation was appropriate. When transferring to live agents, the system provided full conversation context—eliminating the need for customers to repeat information. NEXDYNE built a hybrid architecture where the AI assistant suggested responses to human agents in real-time, accelerating resolution even for escalated cases.
          </p>
          <p className="text-lg text-muted-foreground">
            The solution included continuous improvement pipelines that analyzed conversation logs to identify failure patterns, knowledge gaps, and opportunities for automation expansion. NEXDYNE implemented A/B testing frameworks that optimized conversation flows, response phrasing, and escalation triggers based on customer satisfaction and resolution metrics. The platform learned from every interaction, improving accuracy and expanding capabilities without manual retraining.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">64%</div>
              <div className="text-lg text-muted-foreground">Support cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">78%</div>
              <div className="text-lg text-muted-foreground">Autonomous resolution</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">42%</div>
              <div className="text-lg text-muted-foreground">CSAT improvement</div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            The conversational AI platform transformed customer support economics within three months of launch. The AI assistant autonomously resolved 78% of customer inquiries—66,300 monthly interactions—without human intervention. Support costs decreased by 64% as the company reduced contact center headcount through natural attrition while handling 22% more inquiries. Average cost per interaction dropped from $8.50 to $3.10, delivering $4.2 million in annual savings.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Customer satisfaction improved dramatically as instant, accurate responses replaced long wait times and repetitive authentication. CSAT scores for bot-handled inquiries reached 87%—exceeding human agent scores by 9 points for routine queries. Average resolution time for automated interactions dropped to 47 seconds compared to 8+ minutes for human-handled cases. First-contact resolution rates increased from 68% to 91% as the AI assistant provided accurate answers without escalation loops.
          </p>
          <p className="text-lg text-muted-foreground">
            The business impact extended beyond cost savings. Human agents, freed from repetitive inquiries, focused on high-value interactions—complex returns, product recommendations, and relationship building. Agent satisfaction improved by 34% as work became more engaging and less monotonous. The retailer expanded the AI assistant's capabilities to proactive engagement—abandoned cart recovery, personalized product suggestions, and post-purchase follow-ups—transforming customer service from cost center to revenue driver. The conversational AI platform now handles 2.1 million annual interactions, generating $8.7 million in incremental revenue through AI-driven recommendations while maintaining industry-leading customer satisfaction scores.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform customer support with AI?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build a conversational AI platform that drives measurable business outcomes.
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
