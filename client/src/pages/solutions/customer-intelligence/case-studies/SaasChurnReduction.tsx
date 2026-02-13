import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function SaasChurnReduction() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="SaaS Churn Reduction Case Study | Customer Intelligence" 
        description="How a B2B software company reduced churn by 38% using predictive models to identify at-risk accounts 60 days before cancellation."
        canonical="/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
            alt="SaaS Analytics Dashboard" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/90 to-[#051C2C]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/solutions/data-driven-customer-intelligence/case-studies" className="inline-flex items-center text-white/60 hover:text-[#0077B5] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              SaaS • Case Study
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4 max-w-4xl">
              B2B software company reduces churn by 38%
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              How a 280-employee SaaS platform built predictive churn models to identify at-risk accounts 60 days before cancellation.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">38%</div>
                <div className="text-white/60 text-sm">Churn reduction</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">$890K</div>
                <div className="text-white/60 text-sm">Retained ARR</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">60 days</div>
                <div className="text-white/60 text-sm">Early warning lead time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                Reactive retention in a competitive market
              </h2>
              <div className="prose prose-lg max-w-none text-[#051C2C]/70">
                <p>
                  A B2B SaaS platform serving mid-market companies was experiencing annual churn rates of 18%—significantly above the industry benchmark of 10-12%. With $28M in ARR and aggressive growth targets, the company was losing ground: for every two new customers acquired, one was walking out the door.
                </p>
                <p>
                  The customer success team was operating reactively, only engaging when customers explicitly signaled dissatisfaction or requested cancellation. By then, it was often too late. The team had no visibility into which accounts were at risk, no early warning system, and no data-driven playbooks for intervention.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>No predictive visibility into churn risk—only lagging indicators</li>
                  <li>Customer success team spread thin across 800+ accounts</li>
                  <li>Product usage data siloed from CRM and support systems</li>
                  <li>Generic retention offers that didn't address root causes</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#F8F9FA] p-8 rounded-xl">
                <h3 className="font-serif font-bold text-xl mb-6">Project Overview</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Industry</div>
                    <div className="font-semibold">B2B SaaS</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Company Size</div>
                    <div className="font-semibold">280 employees</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">ARR</div>
                    <div className="font-semibold">$28M</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Timeline</div>
                    <div className="font-semibold">20 weeks</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Services</div>
                    <div className="font-semibold">Churn Prediction, Customer Health Scoring, Retention Automation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
              Building a predictive retention engine
            </h2>
            <p className="text-xl text-white/60 max-w-3xl">
              We implemented an end-to-end churn prediction and prevention system that gave the customer success team 60+ days of lead time to save at-risk accounts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                phase: "Phase 1",
                title: "Data Integration & Feature Engineering",
                description: "Unified product usage data, CRM records, support tickets, and billing information into a comprehensive customer health dataset.",
                outcomes: ["150+ behavioral features extracted", "Real-time data pipeline", "Historical churn pattern analysis"]
              },
              {
                phase: "Phase 2",
                title: "Churn Prediction Model Development",
                description: "Built and validated machine learning models to predict churn probability 60-90 days in advance with high accuracy.",
                outcomes: ["87% prediction accuracy", "60-day early warning window", "Explainable risk factors"]
              },
              {
                phase: "Phase 3",
                title: "Customer Health Scoring",
                description: "Created a real-time health score dashboard that prioritized accounts by risk level and identified specific intervention opportunities.",
                outcomes: ["Dynamic health scores", "Risk driver identification", "Prioritized account lists"]
              },
              {
                phase: "Phase 4",
                title: "Retention Playbook Automation",
                description: "Developed automated workflows that triggered personalized interventions based on risk signals and churn drivers.",
                outcomes: ["8 automated playbooks", "Personalized outreach sequences", "ROI tracking per intervention"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-xl"
              >
                <div className="text-[#0077B5] text-sm font-bold mb-4">{item.phase}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#0077B5] mr-3 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
              Transforming retention from reactive to predictive
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "38%", label: "Churn reduction", detail: "Year-over-year improvement" },
              { value: "$890K", label: "Retained ARR", detail: "Accounts saved from churn" },
              { value: "87%", label: "Prediction accuracy", detail: "At 60-day horizon" },
              { value: "3.2x", label: "CS team efficiency", detail: "More accounts per rep" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-[#051C2C]/50 text-sm">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8F9FA] p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-[#0077B5]/30 mb-6" />
            <blockquote className="text-2xl font-serif italic text-[#051C2C]/80 leading-relaxed mb-8">
              "NEXDYNE's Customer Intelligence Maturity Model gave us a clear roadmap from fragmented data to predictive insights. We reduced churn by 38% and identified $890K in at-risk ARR before customers even thought about canceling."
            </blockquote>
            <div>
              <div className="font-bold text-lg">David Kim</div>
              <div className="text-[#051C2C]/60">Chief Revenue Officer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Key Learnings
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                Critical success factors for churn prediction
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Product usage is the leading indicator",
                    description: "Declining feature adoption and login frequency were the strongest predictors—more reliable than NPS or support tickets."
                  },
                  {
                    title: "Explainability drives action",
                    description: "The CS team needed to understand why an account was flagged to craft effective interventions. Black-box predictions weren't enough."
                  },
                  {
                    title: "Timing matters more than offers",
                    description: "Early intervention (60+ days out) had 3x higher save rates than last-minute retention offers, even without discounts."
                  },
                  {
                    title: "Automate the routine, personalize the complex",
                    description: "Automated playbooks handled straightforward cases, freeing CSMs to focus on high-value accounts requiring nuanced engagement."
                  }
                ].map((learning, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{learning.title}</h3>
                      <p className="text-[#051C2C]/60 leading-relaxed">{learning.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent 
        items={[
          {
            title: "Specialty retailer increases repeat purchase rate by 42%",
            category: "Case Study",
            link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "The Churn Prediction Playbook for Mid-Market SaaS",
            category: "Insight",
            link: "/solutions/data-driven-customer-intelligence/insights/churn-prediction-playbook",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Beyond Segmentation: The Future of Customer Intelligence",
            category: "Insight",
            link: "/solutions/data-driven-customer-intelligence/insights/beyond-segmentation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
                Ready to predict and prevent churn?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Let's discuss how predictive analytics can transform your retention strategy.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-[#0077B5] hover:bg-white/90 px-10 py-6 text-base font-semibold">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
