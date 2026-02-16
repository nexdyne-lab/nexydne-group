import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Clean Gradient */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0a0e3d] via-[#151a5f] to-[#1a1f71] overflow-hidden">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-xs md:text-sm mb-6 md:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Services</Link>
              <span className="text-white/40">/</span>
              <span className="text-white">E-commerce</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['EB Garamond',serif] font-bold mb-3 text-white">
              E-commerce Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Build a future-proof online store with our advanced e-commerce solutions: from platforms to chatbots and native apps. Everything you need, all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#00d4ff] text-[#0a0e3d] hover:bg-[#00e5ff] rounded-full px-8 shadow-lg shadow-[#00d4ff]/30 font-semibold w-full sm:w-auto">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0a0e3d] px-8 w-full sm:w-auto">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - White Background */}
      <AnimatedSection animation="fade-up" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <img 
                src="/e-commerce.e65b1c7f.jpg" 
                alt="E-commerce solutions" 
                className="rounded-2xl shadow-xl w-full h-64 md:h-80 lg:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs md:text-sm font-semibold text-[#00d4ff] uppercase tracking-wider mb-4">E-commerce</p>
              <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-6 md:mb-8 text-[#0a0e3d]">What we do</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                At NEXDYNE, we give you everything you need to create an incredible e-commerce experience. Whether you're looking for a solid platform, a flexible headless CMS, smart chatbots or advanced native apps – we have the tools and expertise to make it happen.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our solutions are designed to power your online store growth, improve the customer experience and consistently increase conversions. All tailored to you, ready to take on the future.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section - Deep Blue Background */}
      <AnimatedSection animation="fade-up" delay={100} className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0a0e3d] to-[#151a5f]">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left: Contact Person */}
            <div>
              <h2 className="text-2xl md:text-3xl font-['EB Garamond',serif] font-bold mb-6 md:mb-8 text-white">Services</h2>
              <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-[#00d4ff]/30 shadow-xl hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-[#00d4ff] rounded-full blur-md opacity-50"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" 
                      alt="Contact person" 
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-[#00d4ff]"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <p className="text-base md:text-lg font-semibold mb-4 text-white">Want to know more?</p>
                    <Button className="bg-[#00d4ff] text-[#0a0e3d] hover:bg-[#00e5ff] rounded-full px-8 shadow-lg shadow-[#00d4ff]/30 font-semibold mb-3 w-full sm:w-auto">
                      Get in touch
                    </Button>
                    <button className="block text-sm text-[#00d4ff] hover:text-[#00e5ff] transition-colors font-medium">
                      Schedule a meeting
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Service Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <BainHoverCard
                title="Chatbots"
                description="Enhance customer interactions with custom chatbot technology. We help you create frictionless, smart communication that customers love."
                link="/solutions/business-growth/chatbots"
              />
              <BainHoverCard
                title="Native apps"
                description="Native apps: powerful and integrated mobile experiences for maximum engagement."
                link="/solutions/native-apps"
              />
              <BainHoverCard
                title="E-commerce platforms"
                description="Want to hit your growth targets with a new e-commerce platform? Enhance your e-commerce site with our optimization and replatforming tools."
                link="/solutions/business-growth/ecommerce-platforms"
              />
              <BainHoverCard
                title="Conversion rate optimization"
                description="Want to convert visitors into customers? Turn your website into a profit-making machine with a proven CRO strategy for maximum impact."
                link="/solutions/business-growth/conversion-optimization"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why NEXDYNE Section - White Background */}
      <AnimatedSection animation="fade-up" delay={200} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" 
                alt="NEXDYNE office" 
                className="rounded-2xl shadow-xl w-full h-64 md:h-80 lg:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-6 md:mb-8 text-[#0a0e3d]">Why NEXDYNE</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <Button size="lg" className="bg-[#00d4ff] text-[#0a0e3d] hover:bg-[#00e5ff] rounded-full px-8 shadow-lg shadow-[#00d4ff]/30 font-semibold w-full sm:w-auto">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cases Section - Blue Background */}
      <AnimatedSection animation="fade-up" delay={300} className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0a0e3d] to-[#151a5f]">
        <div className="container px-4">
          <div className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-semibold text-[#00d4ff] uppercase tracking-wider mb-4">Cases</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 md:mb-8 gap-4">
              <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold text-white">Cases we love talking about</h2>
            </div>
            <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-3xl">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
            <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e3d] transition-all w-full sm:w-auto">
              All cases
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Case 1 */}
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all group bg-white/10 backdrop-blur-sm border-[#00d4ff]/20 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56 -m-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
                  alt="RAI Amsterdam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/10 transition-colors"></div>
              </div>
              <div className="p-5 md:p-6 bg-white/10 backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">Stand Management Optimisation at RAI Amsterdam</h3>
                <p className="text-sm text-white/70 mb-4 flex-grow">
                  RAI Amsterdam optimises stand management and enhances the experience of its exhibitors with a digital solution developed by NEXDYNE
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e3d] transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all group bg-white/10 backdrop-blur-sm border-[#00d4ff]/20 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56 -m-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                  alt="Webstore" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/10 transition-colors"></div>
              </div>
              <div className="p-5 md:p-6 bg-white/10 backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">A webstore that makes your mouth water</h3>
                <p className="text-sm text-white/70 mb-4 flex-grow">
                  As a strategic digital partner to Nieuwkoop-Europe BV, a leader in the indoor landscaping market, we helped build a new e-commerce platform for B2B...
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e3d] transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all group bg-white/10 backdrop-blur-sm border-[#00d4ff]/20 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56 -m-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" 
                  alt="B2B Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/10 transition-colors"></div>
              </div>
              <div className="p-5 md:p-6 bg-white/10 backdrop-blur-sm flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">Development of a webshop with B2B and B2C in the Benelux region</h3>
                <p className="text-sm text-white/70 mb-4 flex-grow">
                  Discover how we developed a seamless e-commerce solution for Kluwer products in accounting and tax
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e3d] transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section - White Background */}
      <AnimatedSection animation="fade-up" delay={400} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-semibold text-[#00d4ff] uppercase tracking-wider mb-4">Partners</p>
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-6 text-[#0a0e3d]">Awesome partners turn dreams into reality</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              With these partners we realize outstanding ecommerce solutions.
            </p>
            <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white transition-all w-full sm:w-auto">
              All partners
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

      {/* CTA Section - Blue Gradient */}
      <AnimatedSection animation="fade-up" delay={500} className="py-16 md:py-20 bg-gradient-to-br from-[#0a0e3d] via-[#151a5f] to-[#1a1f71]">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-['EB Garamond',serif] font-bold mb-6 text-white">Ready to transform your e-commerce?</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8">
              Let's discuss how we can help you build a future-proof online store that drives growth and delights customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-[#00d4ff] text-[#0a0e3d] hover:bg-[#00e5ff] rounded-full px-8 shadow-lg shadow-[#00d4ff]/30 font-semibold w-full sm:w-auto">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0a0e3d] px-8 w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>
            <p className="text-sm md:text-base text-white/60">
              Or call us directly: <a href="tel:+15551234567" className="text-[#00d4ff] hover:text-[#00e5ff] transition-colors font-medium">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
