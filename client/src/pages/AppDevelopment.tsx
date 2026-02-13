import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function AppDevelopment() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'App Development' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Services</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              App Development
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              From concept to launch, we build enterprise-grade web and mobile applications that fit your organization like a glove.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-gray-900">
              Applications that work for you
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              We develop business applications that fit like a glove. If your systems need customization and you want to stand out from the competition, we're here to help. Rather than forcing your processes into standard applications, we ensure your app seamlessly integrates with your business processes and supports the nuances of your working methods.
            </p>
            <p>
              This is about making IT work for you—the way it should be. Whether you need a customer-facing mobile app, an internal operations platform, or a data-intensive web application, we deliver solutions that align with your strategic objectives and scale with your growth.
            </p>
            <p>
              At NexDyne, we combine technical excellence with business acumen. Our development teams don't just write code—they solve problems. We architect applications that are secure, performant, and maintainable, ensuring your investment delivers value for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Our Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive development solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/app-development/low-code" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Zap className="w-8 h-8 text-[#2D5BFF] mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    Low-Code Development
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Build unique applications that make you stand out in the market. Fast go-to-market, agile development, and flexible iteration—empowering business users and developers alike.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/custom-software" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Code className="w-8 h-8 text-[#2D5BFF] mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    Custom Software
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Need software that fits your needs perfectly? We offer flexible and scalable custom solutions, tailored precisely to your requirements and built to evolve with your business.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/service-portals" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Globe className="w-8 h-8 text-[#2D5BFF] mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    Service Portals
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Improve customer contact and employee satisfaction with self-service portals ready for your customers 24/7—reducing support burden while enhancing user experience.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/it-modernization" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Smartphone className="w-8 h-8 text-[#2D5BFF] mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    IT Modernization
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upgrade your IT infrastructure and accelerate your organization. Eliminate sluggish legacy systems and move full speed ahead with modern, cloud-native architectures.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Success Stories</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Applications that transform businesses
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <Link href="/cases/tkb-modernization" className="group">
              <div className="bg-white border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm font-semibold text-[#2D5BFF] mb-3">CASE STUDY</p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    TKB: Legacy system modernization
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Modernized legacy systems with Thinkwise and gained flexibility, innovation power, and speed—while preserving custom client solutions.
                  </p>
                  <div className="flex items-center text-[#2D5BFF] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/payter-platform" className="group">
              <div className="bg-white border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100"></div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm font-semibold text-[#2D5BFF] mb-3">CASE STUDY</p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    Payter: Future-ready platform
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Built a scalable platform with Camunda and Mendix that cut onboarding from days to seconds, enabling global growth and market expansion.
                  </p>
                  <div className="flex items-center text-[#2D5BFF] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/sanquin-digital" className="group">
              <div className="bg-white border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100"></div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm font-semibold text-[#2D5BFF] mb-3">CASE STUDY</p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    Sanquin: Digital transformation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Transformed blood donation scheduling from printed invitations to an online self-service platform where donors schedule their own appointments.
                  </p>
                  <div className="flex items-center text-[#2D5BFF] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/cases/rai-amsterdam" className="group">
              <div className="bg-white border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-violet-100"></div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm font-semibold text-[#2D5BFF] mb-3">CASE STUDY</p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                    RAI Amsterdam: Stand management
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Optimized stand management and enhanced exhibitor experience with a custom digital solution that streamlined operations and improved satisfaction.
                  </p>
                  <div className="flex items-center text-[#2D5BFF] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to build your application?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how custom application development can transform your operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#2D5BFF] hover:bg-[#1e40af] text-white">
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Schedule a meeting
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
