import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function BusinessBuilding() {
  // Capabilities data - preserved from original
  const capabilities = [
    {
      title: "Digital Venture Launch",
      description: "From ideation to market launch, we help you build and scale new digital businesses with our proven venture methodology.",
      link: "/capabilities/business-building/digital-venture-launch"
    },
    {
      title: "Product Strategy & Design",
      description: "Define winning product strategies and design experiences that capture market share and drive sustainable growth.",
      link: "/capabilities/business-building/product-strategy-design"
    },
    {
      title: "Growth & Scaling",
      description: "Accelerate your venture's growth with data-driven strategies and operational excellence frameworks.",
      link: "/capabilities/business-building/growth-scaling"
    },
    {
      title: "AI-Powered Acceleration",
      description: "Leverage AI and automation to compress timelines, reduce costs, and gain competitive advantage in new markets.",
      link: "/capabilities/business-building/ai-powered-acceleration"
    },
    {
      title: "Distinctive Expertise",
      description: "Access our deep domain expertise across industries to build ventures that solve real market problems.",
      link: "/capabilities/business-building/distinctive-expertise"
    },
    {
      title: "Go-to-Market at Scale",
      description: "Launch with confidence using our proven go-to-market frameworks and growth playbooks.",
      link: "/capabilities/business-building/go-to-market-scale"
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Strategy & Corporate Finance",
      description: "Align financial resources with strategic vision to unlock sustainable growth and maximize shareholder value.",
      link: "/capabilities/strategy-corporate-finance"
    },
    {
      title: "Growth, Marketing & Sales",
      description: "Drive sustainable revenue growth through data-driven commercial strategies and customer acquisition.",
      link: "/capabilities/growth-marketing-sales"
    },
    {
      title: "AI & Technology Consulting",
      description: "Transform your technology landscape with AI-powered solutions and modern architecture.",
      link: "/capabilities/ai-technology-consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Business Building" 
        description="Launch new digital ventures and revenue streams with NexDyne's proven playbook for rapid scaling and market validation."
        canonical="/capabilities/business-building"
      />
      <Navigation />
      
      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
              ← Capabilities
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4 eb-garamond">
              Business Building
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Your core business runs well. Now you need new revenue streams. We help mid-market companies design, build, and launch new digital products and services that actually make money.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
              alt="Business Building Strategy" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-charcoal eb-garamond">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "40+", label: "Ventures launched with clients across industries" },
              { metric: "78%", label: "Reach profitability within 18 months" },
              { metric: "4-6 Mo", label: "Typical time from concept to market launch" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Your competitors are launching new products. Are you? Most mid-market companies know they need to diversify their revenue. The problem is execution. Internal teams are stretched thin running the core business. Hiring a product team takes months. And consultants who only deliver PowerPoints don't help you ship anything.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We work differently. Our team embeds with yours to actually build the thing—from validating the idea to writing the code to acquiring the first customers. You get a working product, not a strategy deck. The difference isn't luck. It's process. We've refined our approach over 40+ launches, learning what works for companies your size.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We know how to validate ideas quickly, build MVPs that actually test hypotheses, and scale what works. More importantly, we know when to kill ideas that aren't working—before you've spent a fortune on them. 78% of corporate ventures fail. Ours don't.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We handle the entire journey—market research, product design, development, launch, and initial growth. Our team works alongside yours, transferring knowledge so you can run the business independently once it's established. From idea to revenue in months, not years.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator Section - "78% of corporate ventures fail" */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image with accent block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Team celebrating success" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Accent block */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-primary rounded-lg" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-8 eb-garamond">
                We've learned what works—and what doesn't.
              </h2>
              
              <p className="text-xl text-charcoal/70 leading-relaxed mb-6">
                The difference isn't luck. It's process. We've refined our approach over 40+ launches, learning what works for companies your size. We know how to validate ideas quickly, build MVPs that actually test hypotheses, and scale what works.
              </p>
              
              <p className="text-xl text-charcoal/70 leading-relaxed">
                More importantly, we know when to kill ideas that aren't working—before you've spent a fortune on them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach (F100 - Dark Navy Background) */}
      <section className="py-24 bg-base text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              From idea to revenue in months, not years
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {[
              {
                title: "Validate the opportunity",
                description: "We conduct rapid market research and customer discovery to validate your idea before investing significant resources. We identify target segments, test value propositions, and build conviction around the opportunity."
              },
              {
                title: "Build and launch fast",
                description: "Our engineers, designers, and product managers work in your codebase, with your team. We build MVPs that test real hypotheses, iterate based on user feedback, and get to market in weeks, not months."
              },
              {
                title: "Scale what works",
                description: "Once the product is working, we help you build the team and processes to grow it. We're not done until you can run it without us. We transfer knowledge and establish the foundation for sustainable growth."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-all">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: How We Can Help - Capability Cards with H100 Hover Effect */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our Business Building Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We bring expertise across the entire venture lifecycle to help you launch, scale, and sustain new digital businesses.
            </p>
          </motion.div>

          {/* BainHoverCard with peach wash */}
          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How AI is Transforming Business Building */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-[1.1] mb-8 eb-garamond">
                How AI is Transforming Business Building
              </h2>
              
              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                We're helping mid-market companies move quickly from experimentation to scale and generate real value from AI. Working closely with leadership teams, we can help you:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-charcoal/40 mt-1">•</span>
                  <span className="text-charcoal/70">Identify where AI can accelerate your venture development and reduce time-to-market</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-charcoal/40 mt-1">•</span>
                  <span className="text-charcoal/70">Develop a clear roadmap for AI's impact on your product development, customer experience, and operational efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-charcoal/40 mt-1">•</span>
                  <span className="text-charcoal/70">Approach AI as a business accelerator, not just a technology deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-charcoal/40 mt-1">•</span>
                  <span className="text-charcoal/70">Build AI-native products that create sustainable competitive advantage</span>
                </li>
              </ul>
              
              <Link href="/insights" className="inline-flex items-center text-destructive font-semibold hover:underline group">
                Five key questions for business leaders <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
                alt="AI technology visualization" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          
          {/* Two Cards Below */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Real Outcomes Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-border pt-8"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-4">Real Outcomes</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                From fintech startups to established distributors, we've helped companies across industries achieve breakthrough results with AI-powered ventures. As one example, we worked with a regional bank to transform their loan origination process from 14 days to just 4 hours using AI.
              </p>
              <Link href="/case-studies" className="inline-flex items-center text-destructive font-semibold hover:underline group">
                How we helped a bank 10x their loan processing speed <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="mt-4">
                <Link href="/case-studies" className="inline-flex items-center text-destructive font-semibold hover:underline group">
                  See how we're helping mid-market companies win with AI <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            {/* How We Help Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-border pt-8"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-4">How We Help</h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Harness the full power of generative and agentic AI by envisioning and deploying a comprehensive strategy that addresses governance, talent, vendor selection, and technology infrastructure. Our AI-first approach to business building means we're not just adding AI to existing processes—we're reimagining what's possible.
              </p>
              <Link href="/capabilities/ai-technology-consulting" className="inline-flex items-center text-destructive font-semibold hover:underline group">
                Learn more about our AI capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="mt-4">
                <Link href="/about" className="inline-flex items-center text-destructive font-semibold hover:underline group">
                  Learn more about our approach <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Client Results (F100) */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Client Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
                Recent work
              </h2>
            </motion.div>
            <Link href="/case-studies">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Digital lending product generates $28M in new loans",
                category: "Financial Services",
                description: "Partnered with a regional credit union to launch a digital lending product for small business owners, reducing approval time from weeks to hours and generating $28M in new loans within 14 months.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
              },
              {
                title: "B2B e-commerce platform drives 47% order volume increase",
                category: "Distribution",
                description: "Created a B2B e-commerce platform for a regional food distributor, enabling their restaurant clients to order online 24/7 and increasing order volume by 47% in the first year.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {study.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-charcoal/60 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Latest Insights (F100) */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
                Latest Insights
              </h2>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Venture Building",
                readTime: "8 min read",
                title: "What separates ventures that scale from those that stall",
                description: "After working with dozens of mid-market companies on new ventures, we've identified the three factors that consistently predict whether a new business line will reach profitability."
              },
              {
                category: "Strategy",
                readTime: "6 min read",
                title: "The hidden advantage of building during uncertainty",
                description: "When markets get choppy, most companies pull back on new initiatives. But the data shows that companies who build through downturns emerge stronger."
              },
              {
                category: "Product",
                readTime: "5 min read",
                title: "MVP myths: What mid-market companies get wrong",
                description: "The startup playbook doesn't always translate to corporate innovation. Here's how to adapt lean principles for mid-market venture building."
              }
            ].map((insight, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                  <span className="text-charcoal/40">•</span>
                  <span className="text-charcoal/40 text-xs">{insight.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                  {insight.title}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Related Capabilities with H100 Hover Effect */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
              Explore related capabilities
            </h2>
          </motion.div>
          
          {/* BainHoverCard with peach wash */}
          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Section (F100 - Cyan Background) */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Have an idea? Let's talk.
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              We'll give you an honest assessment of whether it's worth pursuing—and what it would take to build it.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-charcoal px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
