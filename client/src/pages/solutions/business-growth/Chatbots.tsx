import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Zap, Sparkles, MessageCircle, TrendingUp } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function Chatbots() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base via-base to-base text-white py-24">
        <div className="container">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                E-commerce
              </Link>
              <span>/</span>
              <span className="text-white">Chatbots</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-3 eb-garamond">Chatbots</h1>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Transform customer engagement with intelligent chatbot solutions. We build seamless, conversational experiences that drive satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The benefits of Chatbots Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Person Card */}
            <div className="lg:col-span-1">
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                      alt="Contact person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-base mb-2">Want to learn more?</h3>
                <Button 
                  variant="outline" 
                  className="w-full border-secondary text-base hover:bg-secondary/10"
                >
                  Contact our expert
                </Button>
              </Card>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-base mb-12">The benefits of Chatbots</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Efficiency 3.0",
                    description: "Streamline repetitive workflows and optimize resource deployment. Empower your team to focus on high-value interactions."
                  },
                  {
                    icon: <Sparkles className="w-8 h-8" />,
                    title: "Reduce costs",
                    description: "Minimize support overhead while maximizing impact. Intelligent automation delivers more with less."
                  },
                  {
                    icon: <MessageCircle className="w-8 h-8" />,
                    title: "Instant customer satisfaction",
                    description: "Speed wins loyalty: immediate responses create exceptional experiences. Real-time answers equal real-time delight."
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Data-based insights",
                    description: "Capture actionable intelligence from every interaction. Transform conversations into strategic advantage and continuous improvement."
                  }
                ].map((benefit, index) => (
                  <Card 
                    key={index}
                    className="p-8 hover:shadow-xl transition-all border-border hover:border-secondary/30 group cursor-pointer bg-white relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300" />
                    <div className="flex gap-6 relative z-10">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-base mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About chatbots Section */}
      <AnimatedSection delay={0.1} className="py-20 bg-gradient-to-br from-base via-base to-base text-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About chatbots</h2>
          <p className="text-lg leading-relaxed mb-12 text-white/90">
            Intelligent chatbots serve as the foundation of contemporary digital support, resolving common inquiries and routine requests instantly. This approach minimizes response delays, cuts operational expenses, and enables your staff to address sophisticated challenges. Beyond answering questions, chatbots collect behavioral insights and preference patterns—a critical resource for informed business strategy. Serving as your initial touchpoint, chatbots elevate the customer journey through reliable, intelligent engagement across all platforms.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <blockquote className="text-2xl font-medium text-secondary mb-4">
              "Artificial intelligence is revolutionizing chatbots—making them faster, more intuitive, and remarkably customer-centric."
            </blockquote>
            <p className="text-white/70">NEXDYNE Conversational AI Expert</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our chatbot solutions Section */}
      <AnimatedSection delay={0.2} className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-base mb-8 text-center">Our chatbot solutions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            NEXDYNE engineers bespoke chatbot platforms that integrate flawlessly with your operational ecosystem and business objectives. Powered by advanced AI, our solutions employ sophisticated dialogue patterns and evolve through continuous data analysis. Built-in intelligence and adaptive learning capabilities enhance real-time customer interactions while generating strategic insights that optimize your go-to-market approach.
          </p>

          <Card className="p-12 bg-gradient-to-br from-secondary/10 via-primary/10 to-base/10 border-secondary/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                    alt="NEXDYNE Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-base mb-2">Want to learn more?</h3>
                <p className="text-muted-foreground mb-2">NEXDYNE Conversational AI Expert</p>
                <p className="text-muted-foreground mb-6">Director of Digital Solutions</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-secondary hover:bg-secondary text-white">
                    Start a conversation
                  </Button>
                  <Button variant="outline" className="border-secondary text-base hover:bg-secondary/10">
                    Book a consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Why NEXDYNE Section */}
      <AnimatedSection delay={0.3} className="py-20 bg-gradient-to-br from-subtle to-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                alt="NEXDYNE office building"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-base mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Seeking a trusted technology partner, an accelerator for your digital evolution, or exceptional experiences that wow your customers? You're in the right place. Our cutting-edge solutions position you ahead of market trends and competitive pressures.
              </p>
              <Button className="bg-secondary hover:bg-secondary text-white">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection delay={0.4} className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm text-secondary font-semibold mb-2 uppercase tracking-wider">Partners</p>
            <h2 className="text-4xl font-bold text-base mb-4">Awesome partners turn dreams into reality</h2>
            <p className="text-lg text-muted-foreground mb-8">Together with these technology leaders, we deliver world-class e-commerce experiences.</p>
            <Button variant="outline" className="border-secondary text-base hover:bg-secondary/10">
              View all partners
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {[
              "Bloomreach",
              "Commercetools",
              "Intershop",
              "Shopware"
            ].map((partner) => (
              <Card key={partner} className="p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all border-border hover:border-secondary/30 group cursor-pointer bg-white relative overflow-hidden h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/10 transition-all duration-300" />
                <h3 className="text-2xl font-bold text-base group-hover:text-secondary transition-all duration-300 relative z-10">
                  {partner}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-base via-base to-base text-white py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to revolutionize customer service?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's explore how intelligent chatbot technology can elevate customer satisfaction, streamline operations, and unlock new growth opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button className="bg-secondary hover:bg-secondary text-white text-lg px-8 py-6">
              Start a conversation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Book a consultation
            </Button>
          </div>
          <p className="text-white/70">
            Or reach us directly: <a href="tel:+15551234567" className="text-secondary hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
