import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Scale,
  Globe,
  Lock
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function CloudInfrastructure() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Data Modernization",
      description: "Transform legacy silos into intelligent data platforms that drive real-time insights.",
      link: "/solutions/enterprise-transformation/legacy-modernization"
    },
    {
      title: "API Integration",
      description: "Connect disparate apps, data, and partners into a seamless ecosystem.",
      link: "/solutions/enterprise-transformation/api-integration"
    },
    {
      title: "DevOps & Security",
      description: "Ship faster with automated pipelines that have compliance baked in.",
      link: "/solutions/enterprise-transformation/devops-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Cloud Infrastructure" 
        description="Build adaptive, cloud-native environments that expand and contract with your business pulse—delivering performance when you need it and savings when you don't."
        canonical="/solutions/enterprise-transformation/cloud-infrastructure"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Cloud Infrastructure
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Scalable, secure foundations on AWS, Azure, and GCP. Build adaptive, cloud-native environments that expand and contract with your business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
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
              src="/images/cloud-infrastructure-abstract.jpg" 
              alt="Cloud Infrastructure Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "99.99%", label: "Uptime SLA achieved across deployments" },
              { metric: "40%", label: "Average cost reduction post-migration" },
              { metric: "100+", label: "Cloud migrations delivered" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#0077B5] pl-6"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              True cloud value comes from re-architecting, not just re-hosting. A simple "lift and shift" migration often results in higher costs and the same operational headaches—just in a different location.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We build systems that leverage the unique capabilities of the cloud—auto-scaling, managed services, and global distribution—to deliver performance, resilience, and cost efficiency that on-premise infrastructure simply cannot match.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Infrastructure should be code. Manual server provisioning is a relic. Infrastructure-as-Code (IaC) enables version control, automated testing, and disaster recovery in minutes, not days. Multi-cloud is often the answer—vendor lock-in is a real risk. FinOps is non-negotiable—cloud bills can spiral without proper governance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Cloud Infrastructure Capabilities */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Cloud Infrastructure Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end cloud services from strategy to migration to ongoing optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Migration Planning",
                description: "Comprehensive assessment and roadmap for moving workloads to AWS, Azure, or GCP. We identify dependencies, risks, and the optimal migration sequence."
              },
              {
                title: "Multi-Cloud Architecture",
                description: "Design and implement architectures that span multiple cloud providers. Avoid vendor lock-in while leveraging the best services from each platform."
              },
              {
                title: "Infrastructure as Code",
                description: "Terraform, CloudFormation, and Pulumi implementations that make your infrastructure version-controlled, repeatable, and disaster-recovery ready."
              },
              {
                title: "Kubernetes & Containers",
                description: "Container orchestration with EKS, AKS, or GKE. We design, deploy, and manage Kubernetes clusters that scale with your workloads."
              },
              {
                title: "Cloud Security & Compliance",
                description: "Security-first architectures with IAM, encryption, network segmentation, and compliance frameworks for HIPAA, SOC 2, and PCI-DSS."
              },
              {
                title: "FinOps & Cost Optimization",
                description: "Implement cloud financial management practices. Reserved instances, spot pricing, right-sizing, and governance to control cloud spend."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with accent block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                alt="Cloud infrastructure visualization" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Accent block */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#0077B5] rounded-lg" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold text-[#051C2C] leading-[1.1] mb-8">
                We've learned what works—and what doesn't.
              </h2>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed mb-6">
                The difference isn't luck. It's process. We've refined our approach over 100+ cloud migrations, learning what works for companies your size. We know how to architect for scale, optimize costs from day one, and avoid the pitfalls that derail most cloud projects.
              </p>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed">
                More importantly, we know when to go multi-cloud versus single-provider—saving you from vendor lock-in and unnecessary complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Build infrastructure that scales with your ambition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Rethink your infrastructure",
                description: "We help you move from rigid, on-premise systems to flexible cloud environments that adapt to business demands—scaling up for growth spurts and down during quiet periods."
              },
              {
                title: "Migrate without disruption",
                description: "We plan and execute migrations that keep your business running. Zero-downtime cutovers, automated rollback plans, and continuous validation ensure nothing breaks."
              },
              {
                title: "Optimize continuously",
                description: "Cloud isn't a destination—it's an operating model. We establish FinOps practices, automated monitoring, and governance frameworks that keep costs controlled and performance optimized."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Key Benefits - H100 Hover Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Beyond Lift and Shift
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Build systems that leverage the unique capabilities of the cloud.
            </h2>
          </motion.div>

          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Adaptive Scaling",
                description: "Auto-scaling groups and serverless patterns that handle millions of requests without manual intervention."
              },
              {
                title: "Resilience First",
                description: "Multi-region, active-active architectures that survive data center failures and keep your business online."
              },
              {
                title: "Cost Intelligence",
                description: "FinOps practices, spot instances, and automated resource scheduling to maximize every dollar spent."
              },
              {
                title: "Cloud-Native Core",
                description: "Managed services from Kubernetes to serverless databases that reduce operational overhead."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="group h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Tech Stack Section (Preserved Unique Section - Enhanced) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Platform Mastery
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain deep partnerships and certifications across all major cloud providers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                provider: "AWS", 
                subtitle: "Advanced Consulting Partner",
                icon: "☁️",
                services: ["EC2, Lambda, Fargate", "RDS, DynamoDB, Aurora", "CloudFront, Route53"] 
              },
              { 
                provider: "Azure", 
                subtitle: "Gold Cloud Platform",
                icon: "⚡",
                services: ["AKS, App Service", "Cosmos DB, SQL Database", "Azure DevOps, GitHub Actions"] 
              },
              { 
                provider: "Google Cloud", 
                subtitle: "Premier Partner",
                icon: "🌐",
                services: ["GKE, Cloud Run", "BigQuery, Cloud Spanner", "Vertex AI, TensorFlow"] 
              }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#0077B5] hover:shadow-lg transition-all h-full">
                  <div className="text-4xl mb-4">{stack.icon}</div>
                  <div className="text-2xl font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">{stack.provider}</div>
                  <p className="text-sm text-gray-500 mb-6">{stack.subtitle}</p>
                  <ul className="space-y-3">
                    {stack.services.map((service, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0077B5] shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Case Studies (F100) */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white">
                See how we've transformed cloud infrastructure for leading organizations.
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero-Downtime Migration to AWS",
                category: "Retail",
                description: "Moving a $2B retailer from on-premise to cloud without a single minute of downtime.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/retail-cloud-migration"
              },
              {
                title: "Multi-Region Architecture for FinTech",
                category: "Financial Services",
                description: "Building a globally distributed platform that processes 10M transactions daily with 99.99% uptime.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/fintech-multi-region"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-[#0077B5] mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0077B5] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Featured Insight Banner (Preserved Unique Section) */}
      <section className="py-16 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Featured Insight</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The CTO's Guide to Cloud Modernization</h3>
              <p className="text-white/80">A comprehensive framework for transforming your infrastructure.</p>
            </div>
            <Link href="/insights/cto-guide-cloud-modernization">
              <Button className="bg-white text-[#0077B5] hover:bg-gray-100 px-8 py-4 font-semibold whitespace-nowrap">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C]">
              Explore more Technology capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cap.link} className="group block h-full">
                  <div className="h-full min-h-[180px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-[#051C2C]/60 text-sm mb-4">{cap.description}</p>
                    </div>
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: CTA Section (F100 - Cyan Background) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to modernize your cloud infrastructure?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our cloud expertise can help you build a scalable, resilient foundation.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-10 py-6 text-lg font-semibold">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
