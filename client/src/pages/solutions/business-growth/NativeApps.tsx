import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Smartphone, Zap, Shield, Crown } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function NativeApps() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Blue Background */}
      <section className="relative bg-gradient-to-br from-base via-base to-base text-white py-16 md:py-20 lg:py-24">
        <div className="container">
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
              <span className="text-white">Native apps</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 eb-garamond">Native apps</h1>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                Unlock device-native capabilities and deliver seamless mobile experiences that drive lasting customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - White Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Person Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-30"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-secondary/30">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                        alt="Contact person"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-base">Do you want to know more?</h3>
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 w-full sm:w-auto transition-colors duration-200 ease-in-out">
                    Ask Sarah Chen
                  </Button>
                </div>
              </Card>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Offline-first architecture",
                  description: "Essential features work seamlessly without internet. Empower your users to stay productive anywhere, anytime."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Native-speed performance",
                  description: "Instant load times and buttery-smooth animations. Deliver experiences that feel natural and keep users coming back."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Bank-level security",
                  description: "End-to-end encryption and biometric authentication. Protect sensitive data with enterprise-grade security standards."
                },
                {
                  icon: <Crown className="w-8 h-8" />,
                  title: "Direct customer engagement",
                  description: "Push notifications, in-app messaging, and personalized experiences. Build lasting relationships that drive retention and loyalty."
                }
              ].map((benefit, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                  className="p-5 md:p-6 rounded-xl border-2 border-border hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 bg-white group"
                >
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-base group-hover:text-secondary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Native Apps Section - Blue Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-base via-base to-base">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
              What makes native apps different
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
              Native applications deliver unmatched mobile experiences through deep hardware integration. Full access to GPS, Bluetooth, background processes, and push notifications unlocks capabilities web apps can't match. While progressive web apps serve certain use cases, native development offers superior performance and richer functionality. Native apps provide seamless experiences and sophisticated features that mobile browsers simply cannot replicate.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Section - White Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-base mb-6 italic leading-relaxed">
              "We architect native apps that function fully offline—critical for field teams and international users operating beyond reliable connectivity."
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground">
              Marcus Rivera - Mobile Solutions Lead | NEXDYNE TECHNOLOGIES
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Native App Solutions Section - White Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-base">
              NEXDYNE's native app approach
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-8 md:mb-12">
              NEXDYNE engineers native applications precisely calibrated to organizational requirements and user expectations. Our focus on speed, security, and intuitive design creates meaningful brand interactions that drive measurable results. The outcome: heightened engagement and sustained customer loyalty. Native apps remain the optimal choice for enterprises seeking to harness full device capabilities and strengthen customer relationships.
            </p>

            {/* Large Contact Card */}
            <Card className="p-6 md:p-10 lg:p-12 bg-white border-2 border-secondary/20 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-30"></div>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-secondary/30">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Sarah Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-base">
                    Do you want to know more?
                  </h3>
                  <p className="text-lg md:text-xl mb-2 font-semibold text-base">Sarah Chen</p>
                  <p className="text-base md:text-lg text-muted-foreground mb-6">Mobile Solutions Director</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 w-full sm:w-auto transition-colors duration-200 ease-in-out">
                      Get in touch
                    </Button>
                    <Button variant="outline" className="border-2 border-primary text-charcoal hover:bg-primary hover:text-white rounded-full px-8 w-full sm:w-auto transition-colors duration-200 ease-in-out">
                      Schedule a meeting
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Why NEXDYNE Section - White Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="NEXDYNE office building"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base">
                Why choose NEXDYNE
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-6">
                Seeking a strategic technology partner to accelerate digital transformation? NEXDYNE delivers next-generation solutions that position you ahead of market competition.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-relaxed mb-8">
                Our mobile expertise creates exceptional customer experiences that drive business outcomes and sustainable competitive advantage.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 w-full sm:w-auto transition-colors duration-200 ease-in-out">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section - White Background */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container">
          <div className="text-center mb-8 md:mb-12 px-4">
            <p className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wide mb-2">PARTNERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-base">
              Technology partners for native app excellence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {["React Native", "Flutter", "Swift", "Kotlin"].map((partner, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 100}
              >
                <Card className="p-4 md:p-6 lg:p-8 h-32 md:h-40 flex items-center justify-center bg-white border-2 border-border hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 group">
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-base group-hover:text-secondary transition-colors text-center">
                    {partner}
                  </span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section - Blue Gradient */}
      <AnimatedSection className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-base via-base to-base text-white">
        <div className="container text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to build your native app?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a powerful mobile experience that drives engagement and loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 text-base md:text-lg w-full sm:w-auto transition-colors duration-200 ease-in-out">
              Get Started
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 text-base md:text-lg w-full sm:w-auto transition-colors duration-200 ease-in-out">
              View Our Work
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
