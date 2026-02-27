import { Link } from "wouter";
import { ArrowRight, Award, UserCheck, TrendingUp, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function ConversionOptimization() {
  const benefits = [
    {
      icon: Award,
      title: "Immediate revenue lift",
      description: "Boost sales, capture more leads, and drive customer action with precision optimizations that deliver measurable results fast."
    },
    {
      icon: UserCheck,
      title: "Maximize customer lifetime value",
      description: "Increase average order values and long-term customer worth through strategic CRO focused on building lasting relationships."
    },
    {
      icon: TrendingUp,
      title: "Lower customer acquisition costs",
      description: "Keep customers coming back by understanding their needs deeply and delivering optimized experiences that build loyalty."
    },
    {
      icon: Maximize2,
      title: "Data-driven growth strategy",
      description: "Make informed decisions about your business direction with deep insights into customer behavior, pricing effectiveness, and product performance."
    }
  ];

  const partners = [
    { name: "Bloomreach", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Commercetools", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Tweakwise", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Sitecore", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section - Deep Blue Gradient */}
      <AnimatedSection animation="fade" className="relative bg-gradient-to-br from-base via-base to-base text-white py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 md:mb-12 text-white/70">
            <Link href="/services/ecommerce" className="hover:text-secondary transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/ecommerce" className="hover:text-secondary transition-colors">E-commerce</Link>
            <span>/</span>
            <span className="text-white">Conversion rate optimization</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight eb-garamond">
                Conversion rate optimization
              </h1>
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                Transform browsers into buyers and turn your digital presence into a revenue-generating powerhouse with data-driven CRO strategies that deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section - White Background */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-subtle to-muted border-none shadow-lg sticky top-24">
                <div className="text-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary rounded-full animate-pulse"></div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="Marcus Rivera"
                      className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-base mb-2">Want to know more?</h3>
                  <Button className="w-full bg-base hover:bg-base text-white rounded-full mt-4">
                    Ask our expert
                  </Button>
                </div>
              </Card>
            </div>

            {/* Benefits Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-base mb-8 md:mb-12">
                The benefits of Conversion Rate Optimization
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-none bg-white shadow-md group">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-secondary/20 transition-colors">
                        <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-base mb-3 md:mb-4">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">{benefit.description}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About CRO Section - Deep Blue Gradient */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-base via-base to-base text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Understanding conversion rate optimization</h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
              <p>
                Conversion rate optimization represents your most powerful lever for revenue growth from existing traffic. While many businesses obsess over attracting more visitors, the real opportunity lies in maximizing the value of every person already on your site.
              </p>
              <p>
                Our CRO approach transforms each interaction into a potential conversion opportunity. As your SEO, paid advertising, and social media efforts drive traffic, we ensure that traffic converts at the highest possible rate. The result? Steadily climbing conversion percentages that create sustainable, profitable growth for your business.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Section - White Background */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-base mb-8 md:mb-12 leading-relaxed">
              "Ready to discover the proven principles, methodologies, and strategies that will elevate your conversion performance to new heights?"
            </blockquote>
            <Button className="bg-base hover:bg-base text-white rounded-full px-8 py-6 text-lg">
              Download our CRO guide
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach Section - Deep Blue Gradient */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-base via-base to-base">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">NEXDYNE's conversion optimization methodology</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
                <p>
                  We bring deep expertise and proven frameworks to supercharge your marketing team's performance. Our conversion specialists understand exactly what makes a sales funnel convert consistently. They embed that knowledge directly into your team—no intermediaries, no dilution.
                </p>
                <p>
                  We start by evaluating your current conversion maturity and crafting a comprehensive roadmap for sustainable growth. Instead of quick fixes that fade, we deliver strategic frameworks that address your customers' core motivations and solve your biggest conversion challenges.
                </p>
                <p>
                  Our growth philosophy centers on four pillars: establishing a unified vision, developing deep customer understanding, implementing systematic processes, and assembling the right expertise.
                </p>
              </div>
            </div>

            {/* Large Contact Card */}
            <div>
              <Card className="p-8 md:p-10 lg:p-12 bg-white border-none shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary rounded-full animate-pulse"></div>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="Marcus Rivera"
                      className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-base mb-2">Do you want to know more?</h3>
                  <p className="text-base md:text-lg text-charcoal/80 mb-2">Marcus Rivera</p>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">CRO Director</p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Button className="flex-1 bg-base hover:bg-base text-white rounded-full">
                      Get in touch
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-full border-2 border-base text-base hover:bg-base hover:text-white">
                      Schedule a meeting
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why NEXDYNE Section - White Background */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="NEXDYNE office"
                className="rounded-2xl shadow-xl w-full h-64 md:h-80 lg:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-base mb-6 md:mb-8">Why NEXDYNE</h2>
              <p className="text-base md:text-lg text-charcoal/80 mb-6 md:mb-8 leading-relaxed">
                Whether you need a strategic growth partner, a catalyst for digital transformation, or exceptional customer experiences that set you apart, NEXDYNE delivers. Our next-generation digital solutions ensure you're always ahead of the competition, never playing catch-up.
              </p>
              <Button className="bg-secondary hover:bg-secondary text-base rounded-full px-8 py-6 text-lg shadow-lg shadow-secondary/30 font-semibold">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section - Deep Blue Gradient */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-base via-base to-base">
        <div className="container px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-secondary text-sm md:text-base font-semibold mb-3 md:mb-4 uppercase tracking-wider">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Exceptional partners drive exceptional results</h2>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry-leading technology partners to deliver world-class conversion optimization solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {partners.map((partner, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 md:p-8 bg-white hover:shadow-2xl transition-all duration-300 flex items-center justify-center h-32 md:h-40 group border-none">
                  <h3 className="text-base md:text-lg font-bold text-base group-hover:text-secondary transition-colors">
                    {partner.name}
                  </h3>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-base px-8 py-6 text-lg">
              View all partners
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section - White Background */}
      <AnimatedSection animation="fade-up" delay={100} className="relative bg-white text-base py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready to unlock your conversion potential?</h2>
          <p className="text-base md:text-lg lg:text-xl text-charcoal/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's explore how conversion rate optimization can accelerate your growth, enhance customer experiences, and position you ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary text-base transition-all rounded-full px-8 py-6 text-lg w-full sm:w-auto shadow-lg shadow-secondary/30 font-semibold">
              Get in touch
            </Button>
            <Button variant="outline" className="rounded-full border-2 border-base text-base hover:bg-base hover:text-white transition-all px-8 py-6 text-lg w-full sm:w-auto">
              Schedule a meeting
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground text-sm md:text-base">
            Or reach us directly: <a href="tel:+15551234567" className="text-secondary hover:underline font-semibold">+1 (555) 123-4567</a>
          </p>
        </div>
      </AnimatedSection>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
