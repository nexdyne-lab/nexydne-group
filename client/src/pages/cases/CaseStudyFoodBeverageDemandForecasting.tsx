import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, Clock, TrendingUp, Users, Target, Zap, CheckCircle, Quote, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function CaseStudyFoodBeverageDemandForecasting() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Food & Beverage Demand Forecasting Case Study" 
        description="How a regional food and beverage company reduced planning time by 50% and improved forecast accuracy using machine learning."
        canonical="/cases/food-beverage-demand-forecasting"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-base overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80" 
            alt="Food & Beverage Industry" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <Link href="/industries/consumer-products" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Consumer Products
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study • Food & Beverage
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Transforming Demand Planning with Machine Learning
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mb-10">
              A regional food and beverage company with supply chain operations across multiple markets engaged NexDyne to build a machine-learning algorithm that revolutionized their demand forecasting capabilities.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "50%", label: "Reduction in planning time" },
                { value: "18%", label: "Forecast accuracy improvement" },
                { value: "0.8%", label: "EBIT improvement" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Client Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                A Regional F&B Leader Facing Modern Challenges
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-base/5 p-6 rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <p className="text-charcoal/70 text-sm">Food & Beverage Manufacturing</p>
                </div>
                <div className="bg-base/5 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Company Size</h3>
                  <p className="text-charcoal/70 text-sm">2,500+ employees across 8 markets</p>
                </div>
                <div className="bg-base/5 p-6 rounded-lg">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Revenue</h3>
                  <p className="text-charcoal/70 text-sm">$450M annual revenue</p>
                </div>
              </div>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our client is a regional food and beverage company with a diverse product portfolio spanning dairy, beverages, and packaged foods. With supply chain operations across multiple markets and a network of distributors, the company faced increasing pressure to improve demand forecasting accuracy while reducing the manual effort required from their planning team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-base/5">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Legacy Planning Processes Couldn't Keep Pace
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed mb-12">
                <p>
                  The company's demand planning process relied heavily on spreadsheet-based forecasting and the institutional knowledge of experienced planners. While this approach had served them well historically, several factors were creating mounting pressure:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Manual, Time-Intensive Process",
                    description: "Demand planners spent 60% of their time gathering and reconciling data from multiple sources, leaving little time for strategic analysis."
                  },
                  {
                    title: "Inconsistent Accuracy",
                    description: "Forecast accuracy varied significantly by product category and region, ranging from 65% to 85% depending on the planner's experience."
                  },
                  {
                    title: "Limited Scenario Planning",
                    description: "The manual process made it nearly impossible to run multiple demand scenarios or quickly respond to market changes."
                  },
                  {
                    title: "Growing Product Complexity",
                    description: "SKU proliferation and new product launches were outpacing the planning team's capacity to maintain accurate forecasts."
                  }
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg border border-base/10"
                  >
                    <h3 className="font-semibold text-charcoal mb-3">{challenge.title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{challenge.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Building an Intelligent Demand Sensing Engine
              </h2>
              
              <p className="text-lg text-charcoal/70 leading-relaxed mb-12">
                NexDyne partnered with the client's planning and IT teams to design and implement a machine learning-based demand forecasting solution. Our approach focused on augmenting—not replacing—the expertise of demand planners while dramatically improving accuracy and efficiency.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1",
                    title: "Data Foundation & Integration",
                    duration: "6 weeks",
                    description: "We began by consolidating data from 12 different sources including ERP systems, POS data from key retailers, weather data, and promotional calendars. Our data engineering team built automated pipelines to ensure real-time data availability.",
                    outcomes: ["Unified data lake with 3+ years of historical data", "Automated daily data refresh from all sources", "Data quality monitoring and alerting system"]
                  },
                  {
                    phase: "Phase 2",
                    title: "ML Model Development",
                    duration: "8 weeks",
                    description: "Our data science team developed and tested multiple forecasting approaches, ultimately selecting an ensemble model that combined gradient boosting with time series decomposition. The model was trained on product-level data across all markets.",
                    outcomes: ["Ensemble model with 94% accuracy on test data", "Feature importance analysis for interpretability", "Automated model retraining pipeline"]
                  },
                  {
                    phase: "Phase 3",
                    title: "Planner Workflow Integration",
                    duration: "4 weeks",
                    description: "We designed an intuitive interface that presented ML-generated forecasts alongside historical patterns and key drivers. Planners could adjust forecasts based on their market knowledge, with all changes tracked for continuous model improvement.",
                    outcomes: ["Interactive dashboard for demand planners", "Exception-based workflow for outlier review", "Feedback loop for model refinement"]
                  },
                  {
                    phase: "Phase 4",
                    title: "Rollout & Change Management",
                    duration: "6 weeks",
                    description: "We implemented a phased rollout starting with the highest-volume product categories, providing hands-on training and support to the planning team throughout the transition.",
                    outcomes: ["100% adoption across planning team", "Comprehensive training program delivered", "Ongoing support and optimization"]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{phase.phase}</span>
                      <span className="text-sm text-charcoal/50">• {phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{phase.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
                The Results
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                Transformational Impact Across the Organization
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    metric: "50%",
                    label: "Reduction in Planning Time",
                    description: "Demand planners now spend their time on strategic analysis and exception management rather than data gathering."
                  },
                  {
                    metric: "4-18%",
                    label: "Forecast Accuracy Improvement",
                    description: "Accuracy improved across all product categories, with the largest gains in seasonal and promotional items."
                  },
                  {
                    metric: "0.4-0.8%",
                    label: "EBIT Improvement",
                    description: "Reduced stockouts and overstock situations translated directly to improved profitability."
                  },
                  {
                    metric: "3x",
                    label: "Scenario Planning Capacity",
                    description: "The team can now run multiple demand scenarios in hours instead of weeks."
                  }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 p-8 rounded-xl"
                  >
                    <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-white mb-3">{result.label}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{result.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 p-8 md:p-12 rounded-xl relative"
              >
                <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 relative z-10 pl-8">
                  "NexDyne didn't just give us a forecasting tool—they transformed how our planning team works. Our planners are now strategic partners to the business, not just number crunchers. The accuracy improvements have had a direct impact on our bottom line."
                </blockquote>
                <div className="pl-8">
                  <div className="font-semibold text-white">VP of Supply Chain</div>
                  <div className="text-white/60 text-sm">Regional Food & Beverage Company</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Key Takeaways
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Lessons for Your Demand Planning Journey
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Start with the data foundation",
                    description: "ML models are only as good as the data they're trained on. Investing in data quality and integration upfront pays dividends throughout the project."
                  },
                  {
                    title: "Augment, don't replace",
                    description: "The most successful implementations combine ML capabilities with human expertise. Planners bring context and judgment that algorithms can't replicate."
                  },
                  {
                    title: "Design for adoption",
                    description: "Technical excellence means nothing without user adoption. Involving planners in the design process and providing comprehensive training is essential."
                  },
                  {
                    title: "Plan for continuous improvement",
                    description: "Demand patterns change over time. Building in feedback loops and model retraining capabilities ensures the solution remains effective."
                  }
                ].map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">{takeaway.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{takeaway.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-base/5">
        <div className="container px-4 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Related Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Explore more success stories
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consumer Electronics Demand Optimization",
                  description: "How a retailer increased annual sales by $2.4M with localized demand forecasting.",
                  link: "/cases/consumer-electronics-demand-optimization",
                  industry: "Consumer Electronics"
                },
                {
                  title: "Retail Inventory Optimization",
                  description: "Reducing stockouts by 35% while cutting inventory costs for a national retailer.",
                  link: "/cases/retail-inventory-optimization",
                  industry: "Retail"
                },
                {
                  title: "Manufacturing Predictive Maintenance",
                  description: "Achieving 40% reduction in unplanned downtime through AI-powered maintenance.",
                  link: "/cases/manufacturing-predictive-maintenance",
                  industry: "Manufacturing"
                }
              ].map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={caseStudy.link} className="group block">
                    <div className="bg-white p-6 rounded-xl border border-base/10 hover:border-primary/30 transition-all h-full">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
                        {caseStudy.industry}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                        {caseStudy.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Read case study <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to transform your demand planning?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Let's discuss how machine learning can improve your forecast accuracy and free your planning team to focus on strategic decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/industries/consumer-products">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    Explore Consumer Products
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
