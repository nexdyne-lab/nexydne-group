import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Zap, Crown, Wrench, Shield } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { digitalRelatedItems } from "@/data/related-content";

export default function EcommercePlatforms() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Launch features rapidly",
      description: "Deploy new capabilities and channels instantly. Modern platforms deliver the agility and flexibility needed to stay competitive and growth-ready."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Outpace the market",
      description: "Anticipate trends and outmaneuver rivals. Composable architecture with microservices and APIs provides unmatched adaptability and strategic advantage."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Purpose-built technology",
      description: "Unified toolset optimized for every workflow. Like a smartphone's curated app ecosystem, delivering maximum relevance and efficiency."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Deep platform expertise",
      description: "Leverage specialized knowledge in UX, backend systems, and API integration. NEXDYNE transforms your e-commerce vision into measurable results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white py-16 md:py-20 lg:py-24">
        <div className="container px-4">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-xs md:text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                E-commerce
              </Link>
              <span>/</span>
              <span className="text-white">E-commerce platforms</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 eb-garamond">E-commerce platforms</h1>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                Build new features in no time and grow faster with our e-commerce platform. Flexible, scalable and always one step ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The benefits Section */}
      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Person Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 border-[#00d4ff]/20">
                <div className="mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                      alt="Contact person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a0e3d] mb-4 text-center">Want to know more?</h3>
                <Button 
                  variant="outline" 
                  className="w-full border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10"
                >
                  Ask our expert
                </Button>
              </Card>
            </div>

            {/* Benefits Cards */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-8 md:mb-12">The benefits of e-commerce platforms</h2>
              
              <div className="space-y-6 md:space-y-8">
                {benefits.map((benefit, index) => (
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

      {/* About e-commerce platforms Section */}
      <AnimatedSection delay={0.1} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white">
        <div className="container max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">About e-commerce platforms</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-white/90">
            Modern e-commerce platforms serve as the foundation for sustainable growth. For established retailers and emerging brands alike, they provide unparalleled flexibility, seamless omnichannel expansion, and frictionless integration across your technology ecosystem. In fiercely competitive markets, leadership demands more than participation. Composable platforms built on microservices and API-first architecture deliver the strategic edge you need. NEXDYNE ensures your platform migration is seamless, establishing a robust foundation that positions you consistently ahead of the competition.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8">
            <blockquote className="text-xl md:text-2xl font-medium text-[#00d4ff] mb-4">
              "We ensure your platform isn't just built to perform, but engineered to lead the market."
            </blockquote>
            <p className="text-sm md:text-base text-white/70">Marcus Rivera, E-commerce Platform Architect</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our e-commerce solutions Section */}
      <AnimatedSection delay={0.2} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-6 md:mb-8 text-center">Our e-commerce solutions</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12 text-center">
            NEXDYNE delivers comprehensive platform solutions that align perfectly with your operational requirements and business goals. From premium user experience design to robust backend architecture and intelligent API integration, our expertise spans the full e-commerce technology stack. Whether you're an established enterprise or an ambitious omnichannel innovator, we optimize your platform for sustained success—from initial strategy through final deployment.
          </p>

          <Card className="p-6 md:p-10 lg:p-12 bg-gradient-to-br from-[#00d4ff]/10 via-[#0066ff]/10 to-[#1a1f71]/10 border-[#00d4ff]/20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                    alt="NEXDYNE Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a0e3d] mb-2">Want to know more?</h3>
                <p className="text-base md:text-lg text-gray-600 mb-2">Marcus Rivera</p>
                <p className="text-base md:text-lg text-gray-600 mb-6">E-commerce Director</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white w-full sm:w-auto">
                    Get in touch
                  </Button>
                  <Button variant="outline" className="border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10 w-full sm:w-auto">
                    Schedule a meeting
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection delay={0.3} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-[#00d4ff] font-semibold mb-2 uppercase tracking-wider">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-4">E-commerce platform partners</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Collaborating with industry-leading platforms to deliver exceptional results.</p>
            <Button variant="outline" className="border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10 w-full sm:w-auto">
              All partners
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              "Commercetools",
              "Shopware",
              "Intershop"
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

      {/* Why NEXDYNE Section */}
      <AnimatedSection delay={0.4} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
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
                Whether you're seeking a strategic partner, an accelerator for your digital transformation, or exceptional customer experiences, you're in the right place. Our next-generation digital solutions ensure you remain consistently ahead of market trends and competitive pressures.
              </p>
              <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white w-full sm:w-auto">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cases Section */}
      <AnimatedSection delay={0.5} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2]">
        <div className="container px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-[#00d4ff] font-semibold mb-2 uppercase tracking-wider">Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-4">Cases we love talking about</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              Transforming unique business challenges into exceptional outcomes. Explore our success stories.
            </p>
            <Button variant="outline" className="border-[#00d4ff] text-[#0a0e3d] hover:bg-[#00d4ff]/10 w-full sm:w-auto">
              All cases
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Case 1 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all group bg-white border-gray-200 hover:border-[#00d4ff]/30 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" 
                  alt="RAI Amsterdam" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div className="p-5 md:p-6 bg-white flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">Stand Management Optimisation at RAI Amsterdam</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  RAI Amsterdam optimises stand management and enhances exhibitor experience with a digital solution developed by NEXDYNE
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all group bg-white border-gray-200 hover:border-[#00d4ff]/30 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" 
                  alt="Webstore platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div className="p-5 md:p-6 bg-white flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">A cutting-edge webshop platform</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Global optics leader transformed their digital strategy with an innovative platform built on modern e-commerce technology
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all group bg-white border-gray-200 hover:border-[#00d4ff]/30 hover:-translate-y-1 rounded-xl">
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600" 
                  alt="B2B platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e3d] via-[#0a0e3d]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div className="p-5 md:p-6 bg-white flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">A webstore transforming indoor landscaping</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  Strategic digital partner to an indoor landscaping market leader, building a new B2B e-commerce platform
                </p>
                <Button variant="outline" className="rounded-full border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white transition-all w-fit" size="sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.6} className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Person Card */}
            <div className="lg:col-span-1">
              <p className="text-xs md:text-sm text-[#00d4ff] font-semibold mb-2 uppercase tracking-wider">E-commerce</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0e3d] mb-8">Services</h2>
              
              <Card className="p-6 md:p-8 bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 border-[#00d4ff]/20">
                <div className="mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                      alt="Contact person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0a0e3d] mb-4 text-center">Want to know more?</h3>
                <Button className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-white mb-3">
                  Get in touch
                </Button>
                <button className="block w-full text-sm text-[#00d4ff] hover:text-[#00b8e6] transition-colors font-medium text-center">
                  Schedule a meeting
                </button>
              </Card>
            </div>

            {/* Service Cards */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <Link href="/solutions/business-growth/chatbots" className="block group">
                <Card className="p-5 md:p-6 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#00d4ff] hover:shadow-xl transition-all relative overflow-hidden group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#00d4ff]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">Chatbots</h3>
                      <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                        Enhance customer interactions with custom chatbot technology. We help you create frictionless, smart communication that customers love.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/native-apps" className="block group">
                <Card className="p-5 md:p-6 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#00d4ff] hover:shadow-xl transition-all relative overflow-hidden group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#00d4ff]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">Native apps</h3>
                      <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                        Native apps: powerful and integrated mobile experiences for maximum engagement.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/business-growth/ecommerce-platforms" className="block group">
                <Card className="p-5 md:p-6 bg-white hover:bg-gray-50 border-2 border-[#00d4ff] hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#00d4ff]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">E-commerce platforms</h3>
                      <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                        Want to hit your growth targets with a new e-commerce platform? Enhance your e-commerce site with our optimization and replatforming tools.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>

              <Link href="/solutions/business-growth/conversion-optimization" className="block group">
                <Card className="p-5 md:p-6 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#00d4ff] hover:shadow-xl transition-all relative overflow-hidden group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/5 to-[#00d4ff]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a0e3d] group-hover:text-[#00d4ff] transition-colors">Conversion rate optimization</h3>
                      <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                        Want to convert visitors into customers? Turn your website into a profit-making machine with a proven CRO strategy for maximum impact.
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-[#00d4ff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f71] via-[#151a5f] to-[#0a0e3d] text-white py-16 md:py-20">
        <div className="container max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your e-commerce platform?</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's explore how modern platform technology can accelerate growth, enhance customer experience, and position you ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8">
            <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white text-base md:text-lg px-8 py-4 md:py-6 w-full sm:w-auto">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-4 md:py-6 w-full sm:w-auto">
              Schedule a meeting
            </Button>
          </div>
          <p className="text-sm md:text-base text-white/70">
            Or reach us directly: <a href="tel:+15551234567" className="text-[#00d4ff] hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>
      </section>

      <RelatedContent items={digitalRelatedItems} />
      <Footer />
    </div>
  );
}
