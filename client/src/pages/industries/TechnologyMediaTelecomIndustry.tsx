import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wifi, Play, Smartphone, BarChart3, ChevronRight, Globe, Cloud, Radio, Tv } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TechnologyMediaTelecomIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Technology, Media & Telecom" 
        description="Digital transformation for TMT. NexDyne helps technology companies, media organizations, and telecom providers accelerate growth, improve customer experience, and build next-generation capabilities."
        canonical="/industries/technology-media-telecom"
      />
      <Navigation />
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-8 block">
              Technology, Media & Telecom
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Technology, Media & Telecom
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              The TMT sector is defined by constant disruption. New technologies emerge, business models evolve, and customer expectations shift at unprecedented speed. NexDyne helps technology companies, media organizations, and telecom providers navigate this dynamic landscape—building the capabilities needed to lead rather than follow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Hero Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" 
            alt="Technology Media Telecom Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0077B5]">
                Technology, media, and telecommunications are converging in ways that create both opportunity and threat. Streaming has transformed entertainment. 5G is enabling new use cases. AI is reshaping every industry. Companies that can harness these forces will define the future; those that can't will be disrupted by those who can.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with TMT companies to build the capabilities that enable success in this environment. For technology companies, we help accelerate product development, scale go-to-market, and build operational excellence. For media companies, we help navigate the shift to digital, build direct consumer relationships, and monetize content in new ways. For telecom providers, we help modernize networks, improve customer experience, and develop new revenue streams.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our teams bring deep industry expertise combined with cutting-edge technical capabilities. We understand the unique challenges of TMT—from rapid technology cycles to complex ecosystem dynamics—and we bring the skills needed to help clients win.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics Strip */}
      <section className="py-16 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "50%", label: "Faster time to market" },
              { value: "35%", label: "Improvement in customer retention" },
              { value: "40%", label: "Reduction in network costs" },
              { value: "3x", label: "Increase in digital revenue" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0077B5] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help TMT Companies - Editorial Two-Column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-8 leading-tight">
                How We Help TMT Companies Win in a Disruptive Market
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Success in TMT requires the ability to move fast while building for scale. We help companies accelerate innovation, optimize operations, and build the customer relationships that drive sustainable growth—all while navigating the complexity of rapidly evolving technology and competitive landscapes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Product & Engineering */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Product & Engineering Excellence
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Accelerate product development with modern engineering practices. We help technology companies adopt agile methodologies, build scalable architectures, and create development platforms that enable rapid innovation.
                </p>
              </div>

              {/* Customer Experience */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Customer Experience & Engagement
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build customer relationships that drive loyalty and growth. Our solutions help TMT companies create personalized experiences, reduce churn, and maximize customer lifetime value across digital and physical channels.
                </p>
              </div>

              {/* Network Transformation */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Network Transformation & 5G
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Modernize networks to enable new services and reduce costs. We help telecom providers deploy 5G, virtualize network functions, and build the operational capabilities needed to compete in a software-defined world.
                </p>
              </div>

              {/* Content & Monetization */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Content Strategy & Monetization
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Maximize the value of content assets in a digital world. We help media companies develop content strategies, build direct-to-consumer platforms, and create data-driven monetization approaches that drive sustainable revenue.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Featured Case Study
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="TMT Digital Transformation" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-4">
                45%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in customer churn
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A major telecom provider partnered with us to transform their customer experience. We built an AI-powered customer intelligence platform that predicts churn, personalizes offers, and enables proactive service. The result: 45% reduction in churn, 30% improvement in NPS, and $200M in retained revenue.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                The platform also powers personalized marketing that has increased campaign response rates by 3x and reduced acquisition costs by 25%.
              </p>
              <Link href="/cases/telecom-customer-experience" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our TMT Capabilities - Editorial Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our TMT Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Cloud & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Cloud & Infrastructure Modernization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build scalable, resilient infrastructure that enables innovation. Our solutions help TMT companies migrate to cloud, modernize legacy systems, and build platforms that support rapid growth and changing business needs.
              </p>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                AI & Machine Learning
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Harness AI to create competitive advantage. Our solutions help TMT companies build AI capabilities for personalization, automation, and decision support—turning data into insights that drive business value.
              </p>
            </motion.div>

            {/* Digital Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Commerce & Subscriptions
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build digital commerce capabilities that drive growth. Our solutions help TMT companies launch subscription businesses, optimize pricing, and create seamless purchase experiences across channels.
              </p>
            </motion.div>

            {/* Data & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Data & Analytics Platforms
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Turn data into competitive advantage. Our platforms help TMT companies build data capabilities that enable better decisions, personalized experiences, and new data-driven products and services.
              </p>
            </motion.div>

            {/* Streaming & OTT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Streaming & OTT Platforms
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build and scale streaming platforms that delight viewers. Our solutions help media companies launch OTT services, optimize content delivery, and create personalized viewing experiences that drive engagement.
              </p>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Cybersecurity & Trust
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Protect digital assets and customer trust. Our cybersecurity solutions help TMT companies assess risk, implement controls, and build security capabilities that enable innovation while protecting against threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 md:py-28 bg-[#051C2C] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Our Clients' Success in TMT
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Success Story 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                10M
              </div>
              <div className="text-lg font-medium text-white mb-6">
                subscribers in first year
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A media company launched a new streaming service with our help. We built the technology platform, designed the user experience, and developed the content recommendation engine—helping them acquire 10 million subscribers in the first year with industry-leading engagement metrics.
              </p>
              <Link href="/cases/media-streaming-launch" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Success Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                60%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                faster product development cycles
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A technology company transformed their engineering organization with our help. We implemented modern development practices, built a platform engineering capability, and redesigned their architecture—reducing development cycles by 60% while improving quality and scalability.
              </p>
              <Link href="/cases/tech-engineering-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Retail & E-commerce", link: "/industries/retail" },
              { title: "Financial Services", link: "/industries/financial-services" },
              { title: "Consumer Products", link: "/industries/consumer-products" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#051C2C]/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to lead in a disruptive market?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you accelerate innovation, improve customer experience, and build the capabilities needed to win in technology, media, and telecom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    View All Case Studies
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
