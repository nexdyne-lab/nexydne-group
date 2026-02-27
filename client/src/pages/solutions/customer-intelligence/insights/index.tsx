import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const insights = [
  {
    id: "beyond-segmentation",
    title: "Beyond Segmentation: The Future of Customer Intelligence",
    category: "Strategy",
    description: "Why traditional customer segmentation is failing and how AI-powered behavioral intelligence is reshaping how companies understand and engage customers.",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "churn-prediction-playbook",
    title: "The Churn Prediction Playbook for Mid-Market SaaS",
    category: "Technology",
    description: "A practical guide to building and deploying churn prediction models that actually drive retention—from feature engineering to intervention automation.",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "hyper-personalization",
    title: "Hyper-Personalization at Scale: A Practical Guide",
    category: "Marketing",
    description: "How to move from basic segmentation to true 1:1 personalization without drowning in complexity or burning through your marketing budget.",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "customer-data-platforms",
    title: "The Executive Guide to Customer Data Platforms",
    category: "Technology",
    description: "Cutting through the CDP hype: what these platforms actually do, when you need one, and how to evaluate vendors for your specific use cases.",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "ltv-modeling",
    title: "Customer Lifetime Value Modeling: From Theory to Practice",
    category: "Analytics",
    description: "A comprehensive guide to building LTV models that inform acquisition strategy, customer success prioritization, and marketing investment decisions.",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "journey-orchestration",
    title: "Journey Orchestration: The Next Frontier in Customer Experience",
    category: "Marketing",
    description: "How leading companies are moving from campaign-centric to journey-centric engagement—and the technology and organizational changes required.",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export default function CustomerIntelligenceInsights() {
  const featuredInsights = insights.filter(i => i.featured);
  const otherInsights = insights.filter(i => !i.featured);

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Customer Intelligence Insights" 
        description="Expert perspectives on customer data, predictive analytics, and personalization strategies for mid-market companies."
        canonical="/solutions/data-driven-customer-intelligence/insights"
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
              Insights
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4 max-w-4xl">
              Customer Intelligence Insights
            </h1>
            
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              Expert perspectives on customer data, predictive analytics, and personalization strategies for mid-market companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-white">Featured Insights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/solutions/data-driven-customer-intelligence/insights/${insight.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">{insight.category}</span>
                    <span className="flex items-center text-white/40 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Insights */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold">More Insights</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {otherInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/solutions/data-driven-customer-intelligence/insights/${insight.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">{insight.category}</span>
                    <span className="flex items-center text-charcoal/40 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
                Stay ahead of the curve
              </h2>
              <p className="text-lg text-charcoal/60 leading-relaxed mb-8">
                Get our latest insights on customer intelligence, predictive analytics, and personalization delivered to your inbox.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                  Subscribe to Insights
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
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
                Ready to put these insights into action?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Let's discuss how we can help you build customer intelligence capabilities.
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
