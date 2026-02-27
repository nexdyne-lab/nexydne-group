import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, BarChart3, GraduationCap, Shield, Users, TrendingUp, PieChart, LineChart, Table, Server, Code, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';
import InteractiveTechStack from '@/components/InteractiveTechStack';
import ReadinessAssessment from '@/components/ReadinessAssessment';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataSolutions() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data & Analytics' }
  ];

  const caseStudies = [
    {
      title: "Healthcare Analytics Platform",
      category: "Healthcare",
      description: "Predictive analytics for patient outcomes and resource allocation.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
      link: "/cases/healthcare-analytics"
    },
    {
      title: "Insurance Fraud Detection",
      category: "Insurance",
      description: "AI-driven fraud detection saving millions in potential losses.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
      link: "/cases/insurance-claims-processing"
    },
    {
      title: "Fintech Data Lake",
      category: "Fintech",
      description: "Centralized data lake for real-time financial reporting.",
      image: "/images/fintech-payment.jpg",
      link: "/cases/fintech-payment-automation"
    }
  ];

  const techCategories = [
    {
      title: "Data Warehousing",
      description: "Scalable storage for all your enterprise data.",
      items: [
        { name: "Snowflake", category: "Cloud Data Warehouse", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "BigQuery", category: "Serverless Warehouse", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Redshift", category: "Data Warehouse", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Databricks", category: "Lakehouse", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "BI & Analytics",
      description: "Visualizing data to drive business decisions.",
      items: [
        { name: "Power BI", category: "Business Intelligence", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Tableau", category: "Visual Analytics", icon: <PieChart className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Looker", category: "Data Exploration", icon: <LineChart className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Metabase", category: "Open Source BI", icon: <Table className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "Data Engineering",
      description: "Pipelines and orchestration for reliable data flow.",
      items: [
        { name: "Airflow", category: "Workflow Orchestration", icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "dbt", category: "Data Transformation", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Spark", category: "Big Data Processing", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Fivetran", category: "Data Integration", icon: <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    }
  ];

  const assessmentQuestions = [
    {
      id: "q1",
      text: "How accessible is your data today?",
      options: [
        { value: 1, label: "Siloed in different systems" },
        { value: 2, label: "Available in reports but hard to query" },
        { value: 3, label: "Centralized and self-service" }
      ]
    },
    {
      id: "q2",
      text: "What is your data quality level?",
      options: [
        { value: 1, label: "Frequent errors and manual fixes" },
        { value: 2, label: "Generally reliable but some issues" },
        { value: 3, label: "Automated quality checks and high trust" }
      ]
    },
    {
      id: "q3",
      text: "How do you use data for decision making?",
      options: [
        { value: 1, label: "Gut feeling mostly" },
        { value: 2, label: "Monthly retrospective reports" },
        { value: 3, label: "Real-time dashboards and predictive models" }
      ]
    },
    {
      id: "q4",
      text: "Do you have a defined data strategy?",
      options: [
        { value: 1, label: "No formal strategy" },
        { value: 2, label: "IT-led initiatives" },
        { value: 3, label: "Business-aligned roadmap" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Services</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Data Solutions
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Build your data strategy and foundation, then extract actionable insights that drive decisions and create measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">What We Do</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-charcoal">
              Turn data into competitive advantage
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Data is all around us. But are you actually leveraging it to its full potential? If you want to make your data truly valuable, you need expertise that spans from strategy to implementation, from reporting and dashboards to data engineering solutions.
            </p>
            <p>
              At NexDyne, we don't believe in endless consultancy arrangements or long-term management contracts. We deliver concrete solutions and transparent knowledge transfer. When we're done, you can confidently harness and build upon your own data capabilities. Get data-driven, without constantly relying on external support.
            </p>
            <p>
              Our approach combines strategic thinking with technical execution. We help you define what success looks like, build the infrastructure to support it, and develop the capabilities to sustain it—creating a data-driven culture that compounds competitive advantages over time.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <InteractiveTechStack 
        title="Modern Data Stack" 
        categories={techCategories} 
      />

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Our Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              End-to-end data solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-strategy" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <TrendingUp className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Strategy
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  Organizations that leverage data achieve success. We help you plot a winning strategy that aligns data initiatives with business objectives and ROI.
                </p>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-platform" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Database className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Platform
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  A data-driven organization needs a solid foundation. We build the platform that fits your data ambitions—scalable, secure, and future-proof.
                </p>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-analytics" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <BarChart3 className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Analytics
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  Build data analytics dashboards that add real value with the right insights, so you know exactly where to optimize your business for maximum impact.
                </p>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-training" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <GraduationCap className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Training
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  Give your employees the knowledge and skills they need to get data under control, from foundational concepts to advanced analytics techniques.
                </p>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-governance" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Shield className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Governance
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  Work efficiently and securely with maximum control over access, compliance, and version control. Ensure the right information reaches the right people at the right time.
                </p>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-consultancy" className="block">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <div className="flex items-start mb-4">
                  <Users className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-charcoal">
                    Data Consultancy
                  </h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">
                  Cut your time to market and strengthen your data team with experienced, certified professionals who help grow your organization's data maturity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Readiness Assessment */}
      <ReadinessAssessment 
        title="What's Your Data Maturity Score?"
        description="Take our quick assessment to see where you stand on the path to becoming a data-driven organization."
        questions={assessmentQuestions}
        ctaText="Get Your Data Strategy Report"
      />

      {/* Related Case Studies */}
      <RelatedCaseStudies 
        cases={caseStudies}
        title="Data Success Stories"
        subtitle="See how we've helped organizations unlock the value of their data."
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-primary text-white">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to unlock your data's potential?
          </h2>
          <p className="text-xl opacity-90 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            From strategy to implementation, we help you turn raw data into business value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:p-5 md:p-6">
            <Button className="bg-white text-primary hover:bg-subtle text-lg px-10 py-6 rounded-full font-bold shadow-lg transition-all hover:scale-105">
              Start Your Data Journey
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 py-6 rounded-full font-bold">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


