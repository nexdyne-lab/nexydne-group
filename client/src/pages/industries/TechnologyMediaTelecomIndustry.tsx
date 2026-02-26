import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wifi, Play, Smartphone, BarChart3, ChevronRight, Globe, Cloud, Radio, Tv, Mail } from "lucide-react";
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
      
      {/* Hero Section - Consulting standard: hierarchy, CTA, split with image */}
      <section className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[68vh] lg:items-center overflow-hidden bg-[#E8EEF4] border-b border-[#051C2C]/10 pt-8">
        {/* Full-bleed image on the right (desktop only) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
              alt="Technology and innovation"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        {/* Copy: consulting-standard hierarchy + CTA */}
        <div className="container relative z-10 px-4 md:px-12 py-14 md:py-20 lg:py-24 flex-shrink-0">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0077B5]" aria-hidden>
                Industries
              </p>
              <h1 className="eb-garamond font-bold text-[#051C2C] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl tracking-tight leading-[1.12]">
                Technology, Media & Telecom
              </h1>
              <p className="text-base md:text-lg text-[#051C2C]/75 leading-relaxed max-w-lg">
                Navigate disruption. Build the capabilities to lead.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Mobile: image in flow below copy */}
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt="Technology and innovation"
            className="w-full h-full object-cover object-center"
          />
        </div>
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

      {/* Our Experience & Impact - Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-[#0B2B40] text-2xl md:text-3xl mb-12 md:mb-16"
          >
            Our Experience & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { value: "40+", label: "Ventures launched with clients across industries" },
              { value: "78%", label: "Reach profitability within 18 months" },
              { value: "4-6 Mo", label: "Typical time from concept to market launch" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0B2B40] mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-[#6C757D] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Grid style with header and separators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
              How We Help Clients
            </h2>
            <div className="border-t border-[#E5E7EB]" aria-hidden />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mt-8">
            {[
              { title: "Product & Engineering Excellence", desc: "Accelerate product development with modern engineering practices. We help technology companies adopt agile methodologies, build scalable architectures, and create development platforms that enable rapid innovation." },
              { title: "Customer Experience & Engagement", desc: "Build customer relationships that drive loyalty and growth. Our solutions help TMT companies create personalized experiences, reduce churn, and maximize customer lifetime value across digital and physical channels." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-[#E5E7EB] my-10 md:my-12" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { title: "Network Transformation & 5G", desc: "Modernize networks to enable new services and reduce costs. We help telecom providers deploy 5G, virtualize network functions, and build the operational capabilities needed to compete in a software-defined world." },
              { title: "Content Strategy & Monetization", desc: "Maximize the value of content assets in a digital world. We help media companies develop content strategies, build direct-to-consumer platforms, and create data-driven monetization approaches that drive sustainable revenue." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#051C2C] mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
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

      {/* Featured Insights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#051C2C] mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-[#E5E7EB] mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] mb-2">Collection</span>
              <Link href="/insights/tmt-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-[#051C2C] leading-tight group-hover:text-[#0077B5] transition-colors">
                  The Next Normal – The future of TMT: Converged, cloud-native, and content-driven
                </h3>
                <span className="text-[#0077B5] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-[#6B7280] mb-4">November 3, 2025 —</span>
              <p className="text-[#051C2C]/70 text-base leading-relaxed">
                Technology, media, and telecom are converging around cloud, 5G, and content. This collection explores how TMT companies can accelerate product development, monetize data and content, and build the platforms that define the next decade of connectivity and entertainment.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for 5G and network investments", link: "/insights/5g-roi", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", alt: "5G network" },
              { category: "Article", title: "Finding a route to profitability in streaming and media", link: "/insights/streaming-profitability", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80", alt: "Streaming" },
              { category: "Article", title: "The journey toward AI-enabled content and operations", link: "/insights/ai-tmt", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", alt: "TMT technology" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6B7280] block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-[#051C2C] leading-snug group-hover:text-[#0077B5] transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-[#0077B5] shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4  decoration-[#0077B5] decoration-2 underline-offset-4">
                Cybersecurity & Trust
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Protect digital assets and customer trust. Our cybersecurity solutions help TMT companies assess risk, implement controls, and build security capabilities that enable innovation while protecting against threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Examples of our work style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#051C2C] mb-10 md:mb-14"
          >
            Examples of Our Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[21/9] min-h-[200px] mb-10 md:mb-14 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Launching a streaming service", body: "A media company launched a new streaming service with our help. We built the technology platform, designed the user experience, and developed the content recommendation engine—helping them acquire millions of subscribers in the first year with industry-leading engagement metrics." },
              { title: "Accelerating product development", body: "A technology company transformed their engineering organization with our help. We implemented modern development practices, built a platform engineering capability, and redesigned their architecture—reducing development cycles while improving quality and scalability." },
              { title: "Modernizing telecom operations", body: "A telecom operator engaged us to modernize their BSS/OSS stack. We helped consolidate systems, automate provisioning and assurance, and improve the customer experience—reducing operational costs and time to market for new offers." },
              { title: "Scaling digital content operations", body: "We helped a publisher scale their digital content and subscription business. The work included a new CMS, personalization, paywall and billing, and analytics—driving subscriber growth and retention." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-[#051C2C] mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-[#051C2C]/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-[#051C2C] text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our TMT practice with expertise in telecom transformation, media strategy, and software and platform businesses.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in 5G and network strategy, content and streaming, and digital product development for TMT clients.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on technology M&A, SaaS growth strategy, and international expansion for software and media companies.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img src={expert.image} alt={expert.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <h3 className="eb-garamond font-bold text-[#051C2C] text-xl md:text-2xl mb-1">{expert.name}</h3>
                <p className="text-sm text-[#6B7280] mb-4">{expert.title}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 line-clamp-4">{expert.description}</p>
                <a href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`} className="inline-flex items-center justify-center w-10 h-10 bg-[#051C2C] text-white rounded-md hover:bg-[#051C2C]/90 transition-colors" aria-label={`Email ${expert.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mt-12 md:mt-16">
            <Link href="/our-people">
              <button type="button" className="px-6 py-3 bg-white border border-[#0077B5] text-[#0077B5] font-semibold rounded-md hover:bg-[#0077B5]/5 transition-colors">
                More experts
              </button>
            </Link>
          </motion.div>
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
