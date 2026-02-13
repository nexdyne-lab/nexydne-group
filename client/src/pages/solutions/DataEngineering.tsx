import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FastForward, Award, Users, BookOpen, Target } from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataEngineering() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <Link href="/solutions/data-solutions" className="hover:text-foreground transition-colors">Data solutions</Link>
            <span>/</span>
            <span className="text-foreground">Data Engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-3 eb-garamond">
                Data Engineering
              </h1>
            </div>
            <div>
              <p className="text-xl lg:text-2xl leading-relaxed">
                Accelerate time-to-value and scale your data operations with battle-tested engineers and architects. We embed directly into your team, build production-ready pipelines, and transfer knowledge so your organization stands on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            {/* Contact Person */}
            <div>
              <h2 className="text-3xl eb-garamond font-bold mb-8">The Benefits of Data Engineering</h2>
              <div className="space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 mx-auto lg:mx-0"></div>
                <div className="text-center lg:text-left">
                  <p className="font-semibold mb-2">Want to know more?</p>
                  <Button variant="outline" className="rounded-full">
                    Ask Martijn Voorveld
                  </Button>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FastForward className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Faster delivery</h3>
                <p className="text-muted-foreground">
                  Cut development cycles in half and ship data products faster with senior engineers who've built pipelines at scale across AWS, Azure, and GCP.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Proven expertise</h3>
                <p className="text-muted-foreground">
                  Tap into years of hands-on experience with modern data stacks—dbt, Airflow, Databricks, Snowflake, Kafka—across Fortune 500 and high-growth startups.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Flexible capacity</h3>
                <p className="text-muted-foreground">
                  Scale your team up or down as projects evolve. Add specialists for ETL optimization, data quality frameworks, or real-time streaming without long-term hiring commitments.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Knowledge transfer</h3>
                <p className="text-muted-foreground">
                  Our engineers work shoulder-to-shoulder with your team, documenting patterns, running workshops, and building internal capability so you're self-sufficient after engagement ends.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">End-to-end ownership</h3>
                <p className="text-muted-foreground">
                  From architecture design to production deployment, we handle infrastructure setup, pipeline orchestration, data quality monitoring, and performance tuning across your entire data lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl eb-garamond font-bold mb-8 text-center">Data engineering: powering intelligent operations</h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every successful data initiative runs on solid engineering foundations. NEXDYNE augments your team with certified data engineers and architects who build scalable pipelines, integrate disparate systems, and continuously improve data quality. Whether you need specialized expertise for a critical project or want to scale your engineering capacity without lengthy hiring cycles, we deliver production-ready solutions that accelerate time-to-value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our engineers work with the latest cloud technologies and apply industry best practices in data governance, security, and observability. We architect data warehouses, build real-time streaming pipelines, optimize ETL workflows, and implement DataOps automation. Whether you're migrating legacy systems to the cloud, building a modern data lakehouse, or scaling existing infrastructure, we ensure your data platform is future-proof and performant.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-rose-800 text-white">
        <div className="container max-w-4xl text-center">
          <blockquote className="text-3xl lg:text-4xl font-bold mb-8 leading-relaxed">
            "If you want to scale without breaking your data infrastructure, you need engineers who've been there before."
          </blockquote>
          <p className="text-xl opacity-90">
            Sarah Chen, VP of Engineering at TechFlow Systems
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-4xl eb-garamond font-bold mb-8 text-center">How we approach data engineering</h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We start by understanding your current data architecture, team capabilities, and business objectives. Our engineers conduct technical assessments to identify bottlenecks, security gaps, and scalability constraints. Then we design solutions that fit your technology stack and organizational maturity—whether that's modernizing legacy ETL jobs, implementing CI/CD for data pipelines, or building real-time event streaming architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our engineers embed directly into your team, working in your repositories, attending standups, and collaborating through your preferred tools (Jira, Slack, GitHub). We prioritize knowledge transfer through pair programming, code reviews, and comprehensive documentation. Automated testing, monitoring, and alerting are built into every pipeline we deliver. By working closely with your team, we ensure you're equipped to maintain and evolve the solutions independently after our engagement concludes. Together, we build resilient data infrastructure that supports all your analytics and AI initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-blue-300"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl eb-garamond font-bold">Want to know more?</h2>
              <div className="space-y-2">
                <p className="text-xl font-semibold">Martijn Voorveld</p>
                <p className="text-lg text-muted-foreground">Commercial Lead</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-full px-8">
                  Get in touch
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Schedule a meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-16">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Partners</p>
              <h2 className="text-4xl eb-garamond font-bold mb-6">Agentic AI</h2>
              <Button variant="outline" className="rounded-full">
                All partners
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B2635] mb-4">Glean</div>
                <div className="w-32 h-32 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-blue-600">g</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B2635] mb-4">Weaviate</div>
                <div className="w-32 h-32 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-blue-600">W</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B2635] mb-4">LangChain</div>
                <div className="w-32 h-32 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-blue-600">🦜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/data-engineering-hero.20103844.jpg" 
                alt="NEXDYNE data engineering team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl eb-garamond font-bold">Why NEXDYNE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for a strategic partner who understands both cutting-edge technology and practical business transformation? NEXDYNE delivers enterprise-grade data engineering solutions that keep you ahead of the competition. Our US-based teams combine deep technical expertise with real-world implementation experience—we don't just architect systems, we ensure they drive measurable business outcomes and empower your team to operate independently.
              </p>
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-full px-8">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl eb-garamond font-bold mb-4">Cases we love talking about</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real organizations solving real challenges with measurable results. These case studies show how data engineering augmentation transforms operations and accelerates delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Case 1 */}
            <Link href="/cases/fintech-data-pipeline" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/fintech-data-pipeline.2afa276c.jpg" 
                    alt="Fintech real-time data pipeline" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B2635] transition-colors">
                    Fintech Scales Real-Time Transaction Processing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Payment processor builds Kafka streaming pipeline handling 50K transactions/second with 99.99% uptime.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/cases/ecommerce-data-warehouse" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/ecommerce-data-warehouse.144968e4.jpg" 
                    alt="E-commerce data warehouse migration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B2635] transition-colors">
                    E-Commerce Retailer Migrates to Snowflake
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Multi-brand retailer modernizes legacy data warehouse, reducing query times by 85% and cutting infrastructure costs 40%.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/cases/manufacturing-iot-pipeline" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/manufacturing-iot-pipeline.428c6e77.jpg" 
                    alt="Manufacturing IoT data pipeline" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#8B2635] transition-colors">
                    Manufacturer Builds IoT Sensor Data Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Industrial equipment company ingests 2M sensor events/hour, enabling predictive maintenance and 30% downtime reduction.
                  </p>
                  <div className="flex items-center text-[#8B2635] font-semibold">
                    Read case study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              All cases
            </Button>
          </div>
        </div>
      </section>

      {/* Services Footer Navigation */}
      <section className="py-16 bg-background border-t">
        <div className="container">
          <h3 className="text-2xl font-bold mb-8">Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/solutions/data-strategy" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Data Strategy</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/data-platform" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Data Platform</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/data-visualization" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Data Visualization</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/data-training" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Data Training</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/machine-learning" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Machine Learning</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/data-governance" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Data Governance</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/solutions/content-service-platform" className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors group">
              <span className="font-semibold">Content Service Platform</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent items={dataRelatedItems} />
      <Footer />
    </div>
  );
}
