import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Leaf, Heart, GraduationCap, Building2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function OurImpact() {
  const impactAreas = [
    {
      icon: Users,
      title: "People & Talent",
      description: "Developing capabilities that last beyond our engagements",
    },
    {
      icon: Globe,
      title: "Community",
      description: "Creating ripple effects across organizations and societies",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building responsible AI and sustainable business practices",
    },
    {
      icon: Heart,
      title: "Social Good",
      description: "Dedicating resources to mission-driven organizations",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Our Impact | NexDyne Consulting Group" 
        description="Discover how NexDyne creates lasting impact through talent development, community engagement, sustainability initiatives, and social responsibility."
        canonical="/about/impact"
      />
      <Navigation />
      
      {/* Hero Section - Clean McKinsey Style */}
      <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden bg-base">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Diverse team collaborating" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 sm:px-6 md:px-12 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-3">
              Our Impact
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              We measure success not just by business outcomes, but by the lasting capabilities we build, 
              the communities we strengthen, and the positive change we create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas Navigation */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <motion.a
                key={index}
                href={`#${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 hover:bg-subtle transition-colors rounded-lg cursor-pointer"
              >
                <area.icon className="w-8 h-8 text-primary-hover mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-charcoal mb-1">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* People & Talent Impact */}
      <section id="people-&-talent" className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary-hover/10 text-primary-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  People & Talent
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-tight">
                  Building capabilities, not dependencies
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our engagements are designed to make ourselves obsolete. We succeed when client teams 
                  can independently maintain the systems we build, apply the methodologies we introduce, 
                  and extend the insights we uncover.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary-hover pl-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-hover">2,400+</div>
                    <p className="text-muted-foreground mt-1">Professionals trained across client organizations</p>
                  </div>
                  <div className="border-l-4 border-primary-hover pl-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-hover">91%</div>
                    <p className="text-muted-foreground mt-1">Employee retention reflecting our commitment</p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-subtle p-8 md:p-10"
              >
                <GraduationCap className="w-10 h-10 text-primary-hover mb-6" />
                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-serif italic">
                  "Before working with NexDyne, our finance team was intimidated by predictive modeling. 
                  Now they're building their own forecasts and challenging assumptions we'd held for years."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-hover rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">CFO</p>
                    <p className="text-muted-foreground text-sm">Mid-Market SaaS Company</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section id="community" className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary-hover/10 text-primary-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Community Impact
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
                Democratizing advanced analytics
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Historically, sophisticated AI and data analytics capabilities have been accessible only to 
                Fortune 500 companies. We're changing that equation by bringing enterprise-grade intelligence 
                to growth-stage and mid-market organizations.
              </p>
            </motion.div>

            {/* Impact Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 shadow-sm"
              >
                <div className="w-14 h-14 bg-primary-hover/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-primary-hover" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Leveling the Playing Field</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enabling smaller organizations to compete with industry giants through data-driven decision making.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 shadow-sm"
              >
                <div className="w-14 h-14 bg-primary-hover/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary-hover" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Job Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients have collectively created thousands of new jobs within 24 months of our engagements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 shadow-sm"
              >
                <div className="w-14 h-14 bg-primary-hover/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-primary-hover" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Market Expansion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Helping organizations enter new markets with data-driven confidence and strategic clarity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section id="sustainability" className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Image/Visual */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80" 
                    alt="Sustainable practices" 
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                </div>
                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -right-6 bg-white shadow-lg p-6 max-w-[200px]">
                  <div className="text-4xl font-bold text-primary-hover mb-2">43%</div>
                  <p className="text-sm text-muted-foreground">Reduction in carbon footprint of our deployed models</p>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" />
                  Sustainability
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-tight">
                  Responsible AI, sustainable growth
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  AI models can be computationally expensive and energy-intensive. We prioritize model efficiency, 
                  cloud optimization, and carbon-aware deployment to minimize environmental impact.
                </p>
                
                {/* Sustainability Practices */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-hover rounded-full mt-2 flex-shrink-0" />
                    <p className="text-charcoal/80">Supply chain optimization reducing transportation emissions</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-hover rounded-full mt-2 flex-shrink-0" />
                    <p className="text-charcoal/80">Demand forecasting minimizing overproduction and waste</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-hover rounded-full mt-2 flex-shrink-0" />
                    <p className="text-charcoal/80">Energy consumption modeling identifying efficiency opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Good Impact */}
      <section id="social-good" className="py-20 md:py-28 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Social Good
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Giving back to our communities
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                We dedicate 5% of our consulting capacity to mission-driven organizations working on 
                education access, healthcare equity, and environmental sustainability.
              </p>
            </motion.div>

            {/* Pro Bono Stats */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <Lightbulb className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ethical AI Development</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  We believe AI systems should be transparent, fair, and accountable. We've developed 
                  internal frameworks for bias detection, explainability, and privacy protection.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-secondary">12,000+</span>
                  <span className="text-white/60">downloads of our open-source AI audit tools</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <Heart className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Pro Bono Consulting</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our team members volunteer their expertise to help nonprofits and social enterprises 
                  maximize their impact through better data and technology.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-secondary">1,200</span>
                  <span className="text-white/60">pro bono hours delivered annually</span>
                </div>
              </motion.div>
            </div>

            {/* Recent Pro Bono Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10"
            >
              <h3 className="text-xl font-semibold mb-6">Recent Pro Bono Impact</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Helped a nonprofit optimize scholarship allocation, enabling <strong className="text-white">200 additional students</strong> to access higher education.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Built predictive model for community health clinic to identify patients at risk of <strong className="text-white">chronic disease progression</strong>.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Developed supply chain tool for food bank, reducing waste by 28% and serving <strong className="text-white">1,500 more families</strong> monthly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
                Our ongoing commitment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Impact isn't a one-time achievement—it's a continuous commitment. We challenge ourselves 
                to expand access to advanced analytics, deepen capabilities we transfer to client teams, 
                increase transparency in AI systems, and amplify voices of underrepresented practitioners.
              </p>
              <Button className="bg-primary-hover hover:bg-base text-white px-8 py-4 text-base font-medium rounded-none">
                Learn About Our Values <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
