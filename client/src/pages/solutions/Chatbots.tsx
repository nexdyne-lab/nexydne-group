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
      <section className="relative bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white py-16 md:py-20 lg:py-24">
        <div className="container px-4">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/70">
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
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 eb-garamond">Chatbots</h1>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                Transform customer engagement with intelligent chatbot solutions. We build seamless, conversational experiences that drive satisfaction and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The benefits of Chatbots Section */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Person Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 border-[#00d4ff]/20">
                <div className="mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                      alt="Contact person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a0e3d] mb-4 text-center">Want to learn more?</h3>
                <Button 
                  variant="outline" 
                  className="w-full border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10"
                >
                  Contact our expert
                </Button>
              </Card>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-8 md:mb-12">The benefits of Chatbots</h2>
              
              <div className="space-y-6 md:space-y-8">
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
                    className="p-5 md:p-6 lg:p-8 hover:shadow-xl transition-all border-gray-200 hover:border-[#00d4ff]/30 group cursor-pointer bg-white relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-[#00d4ff]/10 transition-all duration-300" />
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 relative z-10">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#0a0e3d] mb-2 md:mb-3">{benefit.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
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
      <AnimatedSection delay={0.1} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white">
        <div className="container max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">About chatbots</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-white/90">
            Intelligent chatbots serve as the foundation of contemporary digital support, resolving common inquiries and routine requests instantly. This approach minimizes response delays, cuts operational expenses, and enables your staff to address sophisticated challenges. Beyond answering questions, chatbots collect behavioral insights and preference patterns—a critical resource for informed business strategy. Serving as your initial touchpoint, chatbots elevate the customer journey through reliable, intelligent engagement across all platforms.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8">
            <blockquote className="text-xl md:text-2xl font-medium text-[#00d4ff] mb-4">
              "Artificial intelligence is revolutionizing chatbots—making them faster, more intuitive, and remarkably customer-centric."
            </blockquote>
            <p className="text-sm md:text-base text-white/70">NEXDYNE Conversational AI Expert</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our chatbot solutions Section */}
      <AnimatedSection delay={0.2} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-6 md:mb-8 text-center">Our chatbot solutions</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12 text-center">
            NEXDYNE engineers bespoke chatbot platforms that integrate flawlessly with your operational ecosystem and business objectives. Powered by advanced AI, our solutions employ sophisticated dialogue patterns and evolve through continuous data analysis. Built-in intelligence and adaptive learning capabilities enhance real-time customer interactions while generating strategic insights that optimize your go-to-market approach.
          </p>

          <Card className="p-6 md:p-10 lg:p-12 bg-gradient-to-br from-[#00d4ff]/10 via-[#0066ff]/10 to-[#1a1f71]/10 border-[#00d4ff]/20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                    alt="NEXDYNE Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a0e3d] mb-2">Want to learn more?</h3>
                <p className="text-base md:text-lg text-gray-600 mb-2">NEXDYNE Conversational AI Expert</p>
                <p className="text-base md:text-lg text-gray-600 mb-6">Director of Digital Solutions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white w-full sm:w-auto">
                    Start a conversation
                  </Button>
                  <Button variant="outline" className="border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10 w-full sm:w-auto">
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
      <AnimatedSection delay={0.3} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                alt="NEXDYNE office building"
                className="rounded-lg shadow-2xl w-full h-64 md:h-80 lg:h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-6">Why NEXDYNE</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Seeking a trusted technology partner, an accelerator for your digital evolution, or exceptional experiences that wow your customers? You're in the right place. Our cutting-edge solutions position you ahead of market trends and competitive pressures.
              </p>
              <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white w-full sm:w-auto">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection delay={0.4} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-[#00d4ff] font-semibold mb-2 uppercase tracking-wider">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-4">Awesome partners turn dreams into reality</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Together with these technology leaders, we deliver world-class e-commerce experiences.</p>
            <Button variant="outline" className="border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10 w-full sm:w-auto">
              View all partners
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              "Bloomreach",
              "Commercetools",
              "Intershop",
              "Shopware"
            ].map((partner) => (
              <Card key={partner} className="p-6 md:p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all border-gray-200 hover:border-[#00d4ff]/30 group cursor-pointer bg-white relative overflow-hidden h-32 md:h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/5 group-hover:to-[#00d4ff]/10 transition-all duration-300" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0a0e3d] group-hover:text-[#00d4ff] transition-all duration-300 relative z-10 text-center">
                  {partner}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white py-16 md:py-20">
        <div className="container max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to revolutionize customer service?</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's explore how intelligent chatbot technology can elevate customer satisfaction, streamline operations, and unlock new growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8">
            <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white text-base md:text-lg px-8 py-4 md:py-6 w-full sm:w-auto">
              Start a conversation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-4 md:py-6 w-full sm:w-auto">
              Book a consultation
            </Button>
          </div>
          <p className="text-sm md:text-base text-white/70">
            Or reach us directly: <a href="tel:+15551234567" className="text-[#00d4ff] hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
