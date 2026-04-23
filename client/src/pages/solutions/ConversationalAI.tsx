import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Clock, Zap, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ConversationalAI() {
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
        <span>Conversational AI</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-white overflow-hidden">
        <div className="container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase mb-4 opacity-90">SERVICES / DIGITAL ENGAGEMENT / CONVERSATIONAL AI</p>
              <h1 className="text-5xl font-bold mb-3 eb-garamond">Conversational AI</h1>
              <p className="text-xl leading-relaxed opacity-95">
                Provide 24/7 customer support and smart interactions that understand customer needs. Conversational AI takes your customer experience to the next level.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/conversational-ai-hero.ca5e5e03.jpg" 
                alt="Conversational AI Technology" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">The benefits of Conversational AI</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent search refinement</h3>
              <p className="text-muted-foreground">
                Natural language understanding interprets customer intent—not just keywords—delivering precise answers that resolve queries faster and reduce support escalations.
              </p>
            </Card>

            <Card className="p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Context-aware personalization</h3>
              <p className="text-muted-foreground">
                Conversational AI maintains context across interactions—remembering preferences, purchase history, and previous conversations to deliver experiences that feel genuinely personalized.
              </p>
            </Card>

            <Card className="p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Multimodal cognitive integration</h3>
              <p className="text-muted-foreground">
                Advanced AI services—image recognition, speech-to-text, sentiment analysis—create interactions that feel natural and intuitive, not robotic or scripted.
              </p>
            </Card>

            <Card className="p-8 border-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous engagement optimization</h3>
              <p className="text-muted-foreground">
                Machine learning analyzes conversation patterns to surface insights that improve response accuracy, identify knowledge gaps, and optimize customer journeys over time.
              </p>
            </Card>

            <Card className="p-8 border-2 lg:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Do you want to know more?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Ask Michael Rodriguez</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Contact Expert</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Conversational AI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional chatbots follow rigid decision trees that frustrate customers with irrelevant responses and dead-end conversations. Conversational AI transforms customer interactions through natural language processing and self-learning algorithms that understand intent, context, and nuance—delivering support that feels human, not scripted.
              </p>
              <p className="text-lg text-muted-foreground">
                NEXDYNE architects enterprise conversational AI platforms that integrate seamlessly with existing systems—CRM, knowledge bases, e-commerce platforms, and support ticketing. Our solutions leverage large language models, sentiment analysis, and continuous learning to provide intelligent, proactive support that scales infinitely without sacrificing quality. Whether you're automating tier-1 support, enabling self-service, or augmenting human agents with AI copilots, we build conversational experiences that drive measurable improvements in customer satisfaction, resolution rates, and operational efficiency.
              </p>
            </div>
            <div>
              <img 
                src="/conversational-ai-hero.ca5e5e03.jpg" 
                alt="Conversational AI Platform" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <blockquote className="text-2xl text-center mb-8 text-base">
            "Conversational AI doesn't just answer questions—it anticipates needs, resolves issues proactively, and turns support interactions into opportunities for engagement. Organizations that deploy intelligent conversational systems reduce costs while simultaneously improving customer satisfaction. It's rare to find technology that delivers both efficiency and experience gains."
          </blockquote>
          <p className="text-center text-muted-foreground">
            Michael Rodriguez - Head of AI Solutions | NEXDYNE Technologies
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Our Conversational AI solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                NEXDYNE's conversational AI methodology starts with intent mapping—analyzing customer support data to identify common queries, pain points, and conversation flows that inform bot design. We don't deploy generic chatbots; we build custom conversational experiences tailored to your business context, terminology, and customer expectations.
              </p>
              <p className="text-lg text-muted-foreground">
                Our AI engineering teams implement hybrid architectures that combine rule-based logic for deterministic workflows with machine learning models for complex, ambiguous queries. We integrate conversational AI into existing platforms—web, mobile, messaging apps, voice assistants—ensuring customers can engage through their preferred channels without friction.
              </p>
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                The platform includes human-in-the-loop escalation workflows that seamlessly transfer complex issues to live agents with full conversation context. We implement continuous improvement pipelines that analyze conversation logs, identify failure patterns, and retrain models to improve accuracy over time.
              </p>
              <p className="text-lg text-muted-foreground">
                NEXDYNE's conversational AI solutions deliver measurable ROI through reduced support costs, faster resolution times, and higher customer satisfaction—while freeing human agents to focus on high-value interactions that require empathy, creativity, and strategic problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-blue-100 flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
              <p className="text-lg text-muted-foreground mb-2">Michael Rodriguez</p>
              <p className="text-muted-foreground mb-6">Head of AI Solutions</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Get in touch</Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors duration-200 ease-in-out">Schedule a meeting</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Awesome partners turn dreams into reality</h2>
          <p className="text-lg text-muted-foreground mb-12">
            With these technologies we build conversational AI platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Dialogflow</h3>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Azure Bot</h3>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">Rasa</h3>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold">OpenAI</h3>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">All partners</Button>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/conversational-ai-why-nexdyne.4a0aa97b.jpg" 
                alt="Why NEXDYNE for Conversational AI" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're seeking a strategic AI partner, acceleration for your digital transformation, or intelligent customer experiences that drive competitive advantage, you've found the right team. NEXDYNE combines deep expertise in conversational AI with practical implementation methodologies that minimize risk and accelerate time-to-value.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our conversational AI solutions leverage cutting-edge natural language processing, machine learning, and continuous improvement frameworks—while maintaining the flexibility to evolve as customer expectations and AI capabilities advance. With NEXDYNE, conversational AI becomes your competitive advantage.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white transition-colors duration-200 ease-in-out">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Cases we love talkin' about</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Heard of a business that transforms customer support into competitive advantage? That'd be us. Check out these inspiring cases.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/cases/ecommerce-ai-chatbot" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/conversational-ai-case-ecommerce.a19a00c4.jpg" 
                  alt="E-commerce Conversational AI Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">E-commerce Leader Reduces Support Costs by 64% with AI Chatbot</h3>
                  <p className="text-muted-foreground mb-4">
                    Conversational AI handles 78% of customer inquiries autonomously, delivering instant resolutions and freeing human agents for complex issues.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/telecom-intelligent-support" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/conversational-ai-case-telecom.0defa3d4.jpg" 
                  alt="Telecom Conversational AI Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Telecom Provider Improves CSAT by 38 Points Through Intelligent Support</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered virtual assistant resolves technical issues 4x faster while maintaining context across multiple interaction channels.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/healthcare-patient-engagement" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/conversational-ai-case-healthcare.044c685b.jpg" 
                  alt="Healthcare Conversational AI Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Healthcare System Automates 52% of Patient Inquiries with AI Assistant</h3>
                  <p className="text-muted-foreground mb-4">
                    HIPAA-compliant conversational AI handles appointment scheduling, prescription refills, and basic health queries 24/7.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>
          </div>

          <div className="flex gap-4">
            <Button variant="outline">All cases</Button>
            <Button>All cases</Button>
          </div>
        </div>
      </section>

      {/* Services Footer */}
      <section className="py-16 bg-background border-t">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8">SERVICES</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div>
              <Link href="/solutions/process-automation" className="text-sm hover:text-primary transition-colors font-medium">
                Process Automation
              </Link>
            </div>
            <div>
              <Link href="/solutions/app-development" className="text-sm hover:text-primary transition-colors font-medium">
                App Development
              </Link>
            </div>
            <div>
              <Link href="/solutions/data-solutions" className="text-sm hover:text-primary transition-colors font-medium">
                Data Solutions
              </Link>
            </div>
            <div>
              <Link href="/solutions/digital-engagement" className="text-sm hover:text-primary transition-colors font-medium">
                Digital Engagement
              </Link>
            </div>
            <div>
              <Link href="/solutions/ecommerce" className="text-sm hover:text-primary transition-colors font-medium">
                E-commerce
              </Link>
            </div>
            <div>
              <Link href="/solutions/agentic-ai" className="text-sm hover:text-primary transition-colors font-medium">
                Agentic AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
