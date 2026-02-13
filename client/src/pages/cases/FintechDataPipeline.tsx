import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FintechDataPipeline() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions/data-solutions" className="hover:text-foreground transition-colors">Data Solutions</Link>
            <span>/</span>
            <Link href="/solutions/data-engineering" className="hover:text-foreground transition-colors">Data Engineering</Link>
            <span>/</span>
            <span className="text-foreground">Fintech Scales Real-Time Transaction Processing</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Fintech Scales Real-Time Transaction Processing
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
            Payment processor builds Kafka streaming pipeline handling 50,000 transactions per second with 99.99% uptime and sub-100ms latency
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A rapidly growing payment processing company serving 2,500 merchants across the United States faced a critical infrastructure bottleneck. Their legacy batch-based transaction processing system, built on PostgreSQL and cron jobs, could only handle 5,000 transactions per second during peak hours. As merchant volume grew 300% year-over-year, the system began experiencing frequent outages, delayed settlements, and data inconsistencies that threatened customer trust and regulatory compliance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The internal engineering team of 8 people lacked specialized expertise in distributed streaming architectures and real-time data processing. They needed to rebuild their entire transaction pipeline to handle 10x current volume while maintaining PCI-DSS compliance, implementing fraud detection in real-time, and providing merchants with instant transaction visibility. The company estimated a 12-month timeline to hire, onboard, and train the necessary specialists—time they didn't have as merchant churn accelerated due to system reliability issues.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              NEXDYNE embedded a 4-person data engineering team specializing in real-time streaming architectures. Within 2 weeks, our engineers conducted a comprehensive technical assessment, identified critical failure points in the existing system, and designed a cloud-native architecture using Apache Kafka, AWS Kinesis, and Flink for stream processing. The new architecture separated transaction ingestion, processing, fraud detection, and settlement into independent microservices that could scale horizontally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team worked directly in the client's GitHub repositories, participating in daily standups and sprint planning. We implemented CI/CD pipelines using GitHub Actions, established comprehensive monitoring with Datadog, and built automated testing frameworks that validated data integrity across the entire streaming pipeline. Throughout the 6-month engagement, we conducted weekly knowledge transfer sessions, documented architectural decisions, and paired with internal engineers on production deployments. By month 4, the client's team was independently managing routine pipeline maintenance and feature development.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Key Technical Implementations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Apache Kafka cluster with 12 brokers handling 50K messages/second with exactly-once semantics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Flink stream processing jobs for real-time fraud detection with 95% accuracy and 80ms average latency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">AWS Kinesis Data Streams integration for merchant-facing real-time transaction dashboards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Automated data quality monitoring with Great Expectations and custom alerting via PagerDuty</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">PCI-DSS compliant encryption and tokenization layer using AWS KMS and HashiCorp Vault</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">10x</div>
              <div className="text-sm font-semibold text-muted-foreground">Transaction capacity increase</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">99.99%</div>
              <div className="text-sm font-semibold text-muted-foreground">System uptime achieved</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">6 months</div>
              <div className="text-sm font-semibold text-muted-foreground">Faster than hiring timeline</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The new real-time transaction processing pipeline went live in production after 5 months of development and 1 month of parallel testing. The system now handles peak loads of 50,000 transactions per second with 99.99% uptime and sub-100ms end-to-end latency. Merchant churn dropped 45% within the first quarter post-launch as transaction visibility and settlement speed improved dramatically.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The client's internal engineering team gained deep expertise in distributed streaming architectures, Kafka operations, and Flink stream processing. They now independently manage the production pipeline, add new fraud detection rules, and scale infrastructure to meet growing demand. The company successfully passed their PCI-DSS audit with zero findings related to data processing infrastructure. Most importantly, the new architecture positioned them to support 10x growth without additional engineering augmentation, saving an estimated $2.4M in hiring and infrastructure costs over 3 years.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to scale your data infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how NEXDYNE can accelerate your data engineering initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#8B2635] hover:bg-white/90 rounded-full px-8">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
              View all cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
