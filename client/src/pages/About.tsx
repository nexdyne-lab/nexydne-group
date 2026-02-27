import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Target, Lightbulb, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Our People",
      description: "We are defined by our people and are deeply committed to creating a diverse and inclusive culture where talent thrives.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/MbxrEclukchkLvUS.jpg",
    },
    {
      icon: Target,
      title: "Client Impact",
      description: "We measure our success by the lasting capabilities we build and the meaningful change we create for our clients.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/wYdRBkMEsCQRoPVq.jpg",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries, combining cutting-edge technology with strategic thinking to solve complex challenges.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BIQnDrWsBdvixBFG.jpg",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring diverse viewpoints and deep local expertise to help organizations navigate an interconnected world.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/GYKPIYnDUKpuKnlv.webp",
    },
  ];

  const aboutLinks = [
    {
      title: "Purpose, Mission & Values",
      description: "What drives us and the principles that guide our work",
      href: "/about/purpose",
    },
    {
      title: "Our Impact",
      description: "How we create lasting value for clients and communities",
      href: "/about/impact",
    },
    {
      title: "Leadership Team",
      description: "Meet the people leading our firm",
      href: "/about/team",
    },
    {
      title: "Our Offices",
      description: "Where we work across the globe",
      href: "/about/offices",
    },
    {
      title: "Case Studies",
      description: "Real results from our client partnerships",
      href: "/case-studies",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO 
        title="About Us | NexDyne Consulting Group" 
        description="We accelerate intelligent and sustainable growth. Learn about our mission, values, and the team driving business transformation across Africa and beyond."
        canonical="/about"
      />
      <Navigation />
      
      {/* Hero Section - Clean McKinsey Style */}
      <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden bg-base">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaboration" 
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-3 font-['EB_Garamond']">
              About NexDyne
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              We accelerate intelligent and sustainable growth, partnering with bold leaders 
              to transform businesses and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Navigation */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aboutLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={link.href}>
                  <a className="group block p-4 hover:bg-subtle transition-colors rounded-lg h-full">
                    <h3 className="font-semibold text-charcoal mb-1 group-hover:text-primary-hover transition-colors text-sm">
                      {link.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-5 gap-12 items-start"
            >
              <div className="lg:col-span-3">
                <p className="text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed mb-8">
                  Businesses are pushing forward. Testing. Challenging. Striving for the change 
                  that transforms everything.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We partner with bold leaders every step of the way. Pinpointing the strategy 
                  that will reshape tomorrow. Harnessing AI and data intelligence to unlock new 
                  possibilities. Transforming through technology. Building capabilities that drive 
                  lasting competitive advantage.
                </p>
              </div>
              <div className="lg:col-span-2 bg-primary-hover p-8 text-white">
                <p className="text-xl md:text-2xl leading-relaxed">
                  Together we're accelerating toward a more intelligent future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                    alt="Team working together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Label */}
                <div className="absolute -bottom-6 -right-6 bg-base text-white px-6 py-4 shadow-lg">
                  <div className="text-xs font-medium text-secondary mb-1">Our Foundation</div>
                  <div className="text-xl font-bold">Built for Impact</div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary-hover/10 text-primary-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Who We Are
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-['EB_Garamond'] text-charcoal mb-6 leading-tight">
                  One unified partnership
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  NexDyne is designed to operate as one—a unified partnership united by a strong 
                  commitment to business transformation. We are equally dedicated to both sides 
                  of our mission: attracting and developing exceptional talent while helping our 
                  clients create meaningful and lasting change.
                </p>
                <Link href="/about/team">
                  <Button className="bg-primary-hover hover:bg-base text-white px-6 py-4 text-base font-medium rounded-none">
                    Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-hover/10 text-primary-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['EB_Garamond'] text-charcoal mb-6">
              What defines us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars that guide everything we do and every partnership we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-border h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-destructive text-xs font-bold uppercase tracking-wider mb-3">
                      Core Value
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary-hover transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-20 md:py-28 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['EB_Garamond'] mb-6">
                NexDyne by the numbers
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our impact across industries and geographies.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2">150+</div>
                <p className="text-white/60">Clients served</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2">12</div>
                <p className="text-white/60">Countries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2">85%</div>
                <p className="text-white/60">Efficiency improvement</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2">94%</div>
                <p className="text-white/60">Client satisfaction</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-hover/10 text-primary-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['EB_Garamond'] text-charcoal mb-8 leading-tight">
                Founded on a simple belief
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  NexDyne was founded with a clear vision: to democratize access to world-class 
                  consulting and technology capabilities for growth-stage and mid-market organizations 
                  across Africa and emerging markets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We saw that sophisticated AI, data analytics, and strategic consulting were 
                  traditionally reserved for Fortune 500 companies with massive budgets. We believed 
                  that ambitious organizations everywhere deserve the same caliber of expertise and 
                  technology to compete on a global stage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to push boundaries—combining deep industry expertise with 
                  cutting-edge technology to help our clients not just survive, but thrive in an 
                  increasingly complex world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['EB_Garamond'] text-charcoal mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your goals and create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary-hover hover:bg-base text-white px-8 py-4 text-base font-medium rounded-none">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button variant="outline" className="border-border text-charcoal hover:bg-subtle px-8 py-4 text-base font-medium rounded-none">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
