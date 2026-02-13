import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Layers, Users, Smartphone, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";

export default function ServiceDesign() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Service Design | NexDyne Technologies" 
        description="Service blueprinting, employee experience design, and physical-digital integration. We orchestrate the invisible to deliver seamless services."
        canonical="/capabilities/growth-marketing-sales/service-design"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/growth-marketing-sales">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block hover:text-white transition-colors cursor-pointer">
                Growth, Marketing & Sales
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3 md:mb-4 eb-garamond">
              Service <br />
              <span className="text-[#0077B5]">Design</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Orchestrate the invisible. We align people, infrastructure, and technology to deliver services that are seamless, scalable, and human-centered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Assess Your Service Architecture
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Introduction Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
                Engineering great <br />
                <span className="text-[#0077B5]">services.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  Great services don't happen by accident; they are engineered. In complex organizations, the gap between what a customer experiences and what the business intends is often where value is lost. Siloed departments, disjointed systems, and misaligned incentives create friction that frustrates users and drains efficiency.
                </p>
                <p>
                  NexDyne's Service Design practice bridges this gap. We look beyond the user interface to the underlying operational layers—the <strong className="text-[#051C2C] font-semibold">"backstage" processes</strong> that power the "frontstage" experience. By treating your service as a holistic ecosystem, we design resilient systems that deliver consistent quality at scale, turning operational complexity into competitive advantage.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                  alt="Service Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 What We Do Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">What we do</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We architect the complete service environment. Our methodology connects customer needs with business feasibility and technical capability to build services that work for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Service Blueprinting",
                description: "We visualize the entire service ecosystem, mapping front-end customer actions against back-end support processes. This \"X-ray view\" of your organization reveals bottlenecks, redundancies, and opportunities for automation, ensuring that every touchpoint is supported by robust infrastructure."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Employee Experience (EX) Design",
                description: "Your employees are the delivery mechanism of your service. We design tools, workflows, and environments that empower your team to deliver excellence. By removing internal friction, we liberate your staff to focus on high-value customer interactions rather than administrative drudgery."
              },
              {
                icon: <Smartphone className="w-7 h-7" />,
                title: "Physical-Digital Integration",
                description: "The boundary between online and offline is dissolving. We design hybrid experiences where digital intelligence enhances physical interactions. From smart retail spaces to connected field services, we ensure continuity and context across the physical-digital divide."
              },
              {
                icon: <FlaskConical className="w-7 h-7" />,
                title: "Service Prototyping & Piloting",
                description: "We de-risk innovation through rigorous testing. Before full-scale rollout, we simulate service scenarios, build low-fidelity environments, and run live pilots. This iterative approach allows us to validate assumptions, refine mechanics, and ensure operational readiness."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-[#0077B5]/50 transition-all duration-300 hover:bg-white/10">
                  <div className="mb-6 p-3 bg-[#0077B5]/10 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Examples of Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">Examples of our work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Healthcare Patient Intake Redesign",
                description: "For a national healthcare provider, we redesigned the patient intake process, integrating digital pre-check-in with physical clinic workflows. This reduced wait times by 35% and increased clinician capacity by 15%.",
                metric: "35%",
                metricLabel: "Reduced wait times",
                link: "/cases/healthcare-patient-intake"
              },
              {
                title: "Logistics Driver Experience",
                description: "We partnered with a logistics firm to overhaul their driver experience. By redesigning the delivery app and aligning it with warehouse operations, we reduced delivery errors by 28% and improved driver retention by 40%.",
                metric: "40%",
                metricLabel: "Better driver retention",
                link: "/cases/logistics-driver-experience"
              },
              {
                title: "Retail Bank Advisory Service",
                description: "We helped a retail bank launch a new advisory service, blueprinting the interaction model between AI-driven insights and human advisors. The new service achieved a Net Promoter Score (NPS) of 82 in its first quarter.",
                metric: "82",
                metricLabel: "NPS Score",
                link: "/cases/retail-bank-advisory"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={item.link} className="block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-[#051C2C]/5 hover:bg-[#051C2C] transition-all duration-500 hover:scale-[1.02]">
                    <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2 group-hover:text-white transition-colors">
                      {item.metric}
                    </div>
                    <div className="text-sm text-[#051C2C]/60 mb-6 group-hover:text-white/60 transition-colors">
                      {item.metricLabel}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#051C2C]/70 leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                      {item.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] font-medium group-hover:text-white group-hover:translate-x-2 transition-all">
                      Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Related Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Related capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "Customer Experience",
                description: "Turn customers into advocates. We map journeys, identify friction points, and design seamless experiences that drive loyalty and retention.",
                link: "/capabilities/growth-marketing-sales/customer-experience"
              },
              {
                title: "Personalization at Scale",
                description: "Leveraging data and AI to deliver relevant content and offers to millions of users individually, in real-time, without compromising privacy or performance.",
                link: "/capabilities/growth-marketing-sales/personalization-at-scale"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-[#0077B5]/50 transition-all duration-300 hover:bg-white/10">
                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#0077B5] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
              Is your infrastructure failing your customers?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10">
              A great interface cannot fix a broken process. Our Service Design Assessment uncovers the operational disconnects that are compromising your customer promise.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#0077B5] hover:bg-white/90 px-10 py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg">
                Assess Your Service Architecture
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "The CEO's Guide to Data Modernization",
            category: "Strategy",
            link: "/insights/ceo-guide-data-modernization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "Building a Data-First Culture",
            category: "Culture",
            link: "/insights/building-data-first-culture",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          },
          {
            title: "From Data Lake to Value Stream",
            category: "Technology",
            link: "/insights/data-lake-value-stream",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
