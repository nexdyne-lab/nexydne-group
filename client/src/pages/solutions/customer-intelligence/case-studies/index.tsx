import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const caseStudies = [
  {
    id: "ecommerce-repeat-purchase",
    title: "Specialty retailer increases repeat purchase rate by 42%",
    category: "E-commerce",
    description: "150-employee online retailer deployed predictive analytics to identify high-value customers and personalize product recommendations, resulting in significant revenue growth.",
    stats: [
      { value: "42%", label: "Repeat purchase increase" },
      { value: "$1.2M", label: "Annual revenue lift" },
      { value: "3.2x", label: "Campaign ROI improvement" }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "saas-churn-reduction",
    title: "B2B software company reduces churn by 38%",
    category: "SaaS",
    description: "280-employee SaaS platform built predictive churn models to identify at-risk accounts 60 days before cancellation, enabling proactive retention interventions.",
    stats: [
      { value: "38%", label: "Churn reduction" },
      { value: "$890K", label: "Retained ARR" },
      { value: "60 days", label: "Early warning lead time" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "bank-cross-sell",
    title: "Regional bank doubles cross-sell conversion",
    category: "Financial Services",
    description: "120-employee community bank implemented next-best-action models to personalize product recommendations for existing customers.",
    stats: [
      { value: "2.1x", label: "Cross-sell conversion" },
      { value: "$640K", label: "New revenue generated" },
      { value: "45%", label: "Customer engagement increase" }
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "healthcare-patient-engagement",
    title: "Healthcare network improves patient retention by 28%",
    category: "Healthcare",
    description: "Multi-location healthcare provider used patient journey analytics to identify drop-off points and implement targeted re-engagement campaigns.",
    stats: [
      { value: "28%", label: "Patient retention" },
      { value: "35%", label: "Appointment adherence" },
      { value: "$2.1M", label: "Revenue protected" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "subscription-ltv-optimization",
    title: "Subscription business increases LTV by 34%",
    category: "Media & Entertainment",
    description: "Digital media company deployed customer lifetime value models to optimize acquisition spend and personalize content recommendations.",
    stats: [
      { value: "34%", label: "LTV increase" },
      { value: "22%", label: "Acquisition cost reduction" },
      { value: "2.8x", label: "Content engagement" }
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "b2b-lead-scoring",
    title: "B2B manufacturer improves lead conversion by 56%",
    category: "Manufacturing",
    description: "Industrial equipment manufacturer implemented predictive lead scoring to prioritize sales outreach and personalize engagement strategies.",
    stats: [
      { value: "56%", label: "Lead conversion" },
      { value: "40%", label: "Sales cycle reduction" },
      { value: "$3.4M", label: "Pipeline generated" }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export default function CustomerIntelligenceCaseStudies() {
  const featuredStudies = caseStudies.filter(s => s.featured);
  const otherStudies = caseStudies.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Customer Intelligence Case Studies" 
        description="Real-world examples of how companies transformed customer understanding with data-driven intelligence."
        canonical="/solutions/data-driven-customer-intelligence/case-studies"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/95 to-base" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/solutions/data-driven-customer-intelligence" className="inline-flex items-center text-white/60 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Customer Intelligence
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Studies
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4 max-w-4xl">
              Customer intelligence driving real results
            </h1>
            
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Explore how mid-market companies have transformed customer understanding into measurable business outcomes with NEXDYNE's data-driven approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-white">Featured Case Studies</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/solutions/data-driven-customer-intelligence/case-studies/${study.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex gap-6 mb-6">
                    {study.stats.slice(0, 2).map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-white/40 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold">More Success Stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {otherStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/solutions/data-driven-customer-intelligence/case-studies/${study.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex gap-6 mb-6">
                    {study.stats.slice(0, 2).map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-charcoal/40 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
                Ready to write your success story?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Let's discuss how customer intelligence can transform your business outcomes.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-semibold">
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
