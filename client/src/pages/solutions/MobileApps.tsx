import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Crown, Smartphone, Rocket, Bell } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function MobileApps() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/">
            <a className="hover:text-foreground transition-colors">Home</a>
          </Link>
          <span>/</span>
          <Link href="/solutions/customer-intelligence">
            <a className="hover:text-foreground transition-colors">Data-Driven Customer Intelligence</a>
          </Link>
          <span>/</span>
          <Link href="/solutions/digital-engagement">
            <a className="hover:text-foreground transition-colors">Digital Engagement</a>
          </Link>
          <span>/</span>
          <span className="text-foreground">Mobile Apps</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/90 to-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-3 eb-garamond">Mobile apps</h1>
            </div>
            <div>
              <p className="text-xl text-white/95 leading-relaxed">
                Bring your mobile app idea to life with NEXDYNE's iOS and Android services that deliver seamless, engaging experiences customers love. From concept to App Store launch—we build mobile apps that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Benefits of mobile apps</h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Contact Card */}
            <Card className="p-8 bg-blue-50 border-0">
              <div className="w-32 h-32 rounded-full bg-blue-200 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-center">Want to know more?</h3>
              <Button variant="outline" className="w-full">Ask Sarah Chen</Button>
            </Card>

            {/* Benefit 1 */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">High customer loyalty</h3>
              <p className="text-muted-foreground">
                A smart, accessible app gives customers exactly what they need and keeps them loyal. Direct access drives habitual engagement.
              </p>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">PWA technology for cost efficiency</h3>
              <p className="text-muted-foreground">
                Save on development and maintenance costs and create a seamless experience with Progressive Web Apps (PWA). One codebase, multiple platforms.
              </p>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Higher conversion rates</h3>
              <p className="text-muted-foreground">
                Compared to other channels, an app delivers four times more conversions on average. Mobile-first experiences eliminate friction.
              </p>
            </Card>
          </div>

          {/* Benefit 4 - Full Width */}
          <div className="mt-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Tactical tech</h3>
                  <p className="text-muted-foreground">
                    An app offers features like camera access and push notifications, boosting engagement and interaction. Native capabilities unlock competitive advantages.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">About mobile apps</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A mobile app establishes a direct link with customers—ideal for frequently used services. This raises customer loyalty and simplifies recurring tasks. Apps offer more features than websites, such as camera access and location sharing. Different apps for Android and iOS users are a thing of the past. Smart web technologies let us build for any platform without breaking a sweat. This removes complexity, saving you time and costs, and putting you in control. Ready for launch?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NEXDYNE combines native mobile expertise with cross-platform efficiency. We leverage React Native, Flutter, and PWA technologies to deliver apps that feel native while maximizing code reuse. Our mobile development process emphasizes user research, iterative prototyping, and continuous deployment—ensuring your app launches fast and evolves with user feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-semibold text-primary mb-6">
              "Mobile apps are no longer optional—they're the primary interface for customer engagement. Companies that delay mobile-first strategies risk irrelevance."
            </blockquote>
            <p className="text-muted-foreground">— Sarah Chen, Head of Mobile Engineering at NEXDYNE</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Mobile apps: our philosophy</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At NEXDYNE, we work together with our customers to develop mobile apps that increase customer retention and simplify tasks. We harness advanced technologies to build platform-independent apps that are faster, bring down your costs and put you in the driver's seat. Features such as camera and location integration provide added value, raising customer loyalty.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We often start in a basecamp phase to set out your wishes and requirements. Following that, we create a clickable prototype and test it with real users. Once validated, we select the best technologies for the final product. In the post-delivery hypercare phase, we make sure everything goes to plan. You can always call our support and development team for assistance and help with optimizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Discovery & Strategy</h3>
              <p className="text-muted-foreground mb-4">
                User research, competitive analysis, and technical architecture planning ensure we build the right app for your business goals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User journey mapping</li>
                <li>• Platform selection (native vs. cross-platform)</li>
                <li>• Feature prioritization</li>
                <li>• Technical feasibility assessment</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Design & Prototyping</h3>
              <p className="text-muted-foreground mb-4">
                Interactive prototypes validated with real users before writing production code. Design systems ensure consistency across platforms.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• iOS and Android design guidelines</li>
                <li>• Clickable prototypes</li>
                <li>• Usability testing</li>
                <li>• Animation and micro-interactions</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Development & Launch</h3>
              <p className="text-muted-foreground mb-4">
                Agile development with continuous integration, automated testing, and App Store optimization for successful launches.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cross-platform development</li>
                <li>• API integration</li>
                <li>• App Store submission</li>
                <li>• Post-launch support and optimization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-32 h-32 rounded-full bg-blue-200"></div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
              <p className="text-lg mb-2 font-semibold">Sarah Chen</p>
              <p className="text-muted-foreground mb-6">Head of Mobile Engineering</p>
              <div className="flex gap-4">
                <Button size="lg">Get in touch</Button>
                <Button size="lg" variant="outline">Schedule a meeting</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-4">Partners</p>
          <h2 className="text-3xl font-bold mb-12">Awesome partners turn dreams into reality</h2>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">React Native</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">Flutter</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">Expo</div>
            </div>
          </div>

          <Button variant="outline" className="mt-8">All partners</Button>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-96 bg-blue-100 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're seeking a strategic mobile partner, acceleration for your app development, or user experiences that drive competitive advantage, you've found the right team. NEXDYNE combines deep expertise in iOS and Android development with practical implementation methodologies that minimize risk and accelerate time-to-market.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mobile app solutions leverage cutting-edge frameworks, performance optimization, and continuous deployment pipelines—while maintaining the flexibility to evolve as user expectations and mobile capabilities advance. With NEXDYNE, mobile becomes your competitive advantage.
              </p>
              <Button size="lg">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Cases we love talkin' about</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Heard of a business that transforms mobile app ideas into market-leading experiences? That'd be us. Check out these inspiring cases.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Link href="/cases/fitness-app-engagement" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/mobile-apps-case-fitness.ff78d1c6.jpg" 
                  alt="Fitness Mobile App Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Fitness Startup Achieves 4.8★ Rating with Gamified Workout App</h3>
                  <p className="text-muted-foreground mb-4">
                    Cross-platform mobile app drives 89% 30-day retention through personalized training plans and social challenges.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/fintech-mobile-banking" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/mobile-apps-case-fintech.fb9a5819.jpg" 
                  alt="Fintech Mobile Banking Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Digital Bank Onboards 250K Users in 6 Months with Mobile-First Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Secure iOS and Android banking app achieves 94% mobile transaction rate while maintaining bank-grade security.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>

            <Link href="/cases/delivery-app-optimization" className="block group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="/mobile-apps-case-delivery.e1b7b191.jpg" 
                  alt="Delivery App Case Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Food Delivery Platform Scales to 50K Daily Orders with Optimized Mobile App</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time tracking and push notifications reduce customer support inquiries by 67% while improving delivery accuracy.
                  </p>
                  <Button variant="outline">Read case study</Button>
                </div>
              </Card>
            </Link>
          </div>

          <div className="flex gap-4">
            <Button variant="outline">All cases</Button>
            <Button variant="outline">All cases</Button>
          </div>
        </div>
      </section>

      {/* Services Footer Navigation */}
      <section className="py-12 border-t">
        <div className="container">
          <h3 className="text-sm font-semibold mb-6 text-muted-foreground">SERVICES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/solutions/process-automation">
              <a className="text-sm hover:text-primary transition-colors">Process Automation</a>
            </Link>
            <Link href="/solutions/app-development">
              <a className="text-sm hover:text-primary transition-colors">App Development</a>
            </Link>
            <Link href="/solutions/data-solutions">
              <a className="text-sm hover:text-primary transition-colors">Data Solutions</a>
            </Link>
            <Link href="/solutions/digital-engagement">
              <a className="text-sm hover:text-primary transition-colors">Digital Engagement</a>
            </Link>
            <Link href="/solutions/ecommerce">
              <a className="text-sm hover:text-primary transition-colors">E-commerce</a>
            </Link>
            <Link href="/solutions/agentic-ai">
              <a className="text-sm hover:text-primary transition-colors">Agentic AI</a>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
