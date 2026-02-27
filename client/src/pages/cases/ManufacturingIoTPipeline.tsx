import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ManufacturingIoTPipeline() {
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
            <span className="text-foreground">Manufacturer Builds IoT Sensor Data Platform</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Manufacturer Builds IoT Sensor Data Platform
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
            Industrial equipment company ingests 2 million sensor events per hour, enabling predictive maintenance and 30% downtime reduction
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A mid-sized industrial equipment manufacturer operating 8 production facilities across the United States faced mounting maintenance costs and unplanned equipment downtime. Their 450 CNC machines, robotic arms, and conveyor systems generated sensor data (temperature, vibration, pressure, runtime metrics) that was logged locally but never analyzed. Maintenance teams relied on reactive repairs and fixed schedules, leading to unexpected failures that cost $85K per hour in lost production and emergency service calls averaging $15K per incident.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The company's IT team of 6 people had no experience building IoT data pipelines or implementing machine learning for predictive maintenance. They needed to centralize sensor data from 1,200+ connected devices, build real-time monitoring dashboards for plant managers, and develop predictive models to forecast equipment failures 48-72 hours in advance. Leadership wanted to avoid expensive industrial IoT platform vendors and instead build an in-house solution using cloud infrastructure, but lacked the specialized engineering talent to execute.
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
              NEXDYNE deployed a 3-person data engineering team with expertise in IoT architectures and time-series data processing. We started with a 2-week pilot at one facility, instrumenting 50 machines with AWS IoT Core agents that streamed sensor data to the cloud. Our team designed a scalable architecture using AWS IoT Core for device connectivity, Kinesis Data Streams for ingestion, TimescaleDB for time-series storage, and Apache Spark for batch analytics and ML model training.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built real-time monitoring dashboards in Grafana that displayed equipment health metrics, anomaly detection alerts, and predictive maintenance recommendations. Our engineers worked closely with the client's maintenance team to understand failure patterns and calibrate alert thresholds. We implemented a CI/CD pipeline using Terraform for infrastructure-as-code and GitHub Actions for automated testing and deployment. Throughout the 8-month engagement, we conducted weekly training sessions teaching the client's IT team IoT architecture patterns, time-series database optimization, and ML model deployment workflows.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Key Technical Implementations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">AWS IoT Core managing 1,200+ connected devices with secure MQTT communication and certificate-based authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Kinesis Data Streams ingesting 2M sensor events/hour with automatic scaling and data retention policies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">TimescaleDB storing 18 months of historical sensor data with automated compression and retention management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Apache Spark jobs for anomaly detection using isolation forest algorithms with 88% prediction accuracy</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Grafana dashboards with real-time equipment health monitoring and PagerDuty integration for critical alerts</span>
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
              <div className="text-4xl font-bold text-destructive mb-2">30%</div>
              <div className="text-sm font-semibold text-muted-foreground">Unplanned downtime reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-destructive mb-2">$1.8M</div>
              <div className="text-sm font-semibold text-muted-foreground">Annual maintenance cost savings</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-4xl font-bold text-destructive mb-2">88%</div>
              <div className="text-sm font-semibold text-muted-foreground">Failure prediction accuracy</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The IoT sensor data platform rolled out across all 8 facilities over 6 months, with the final 2 months dedicated to ML model training and alert threshold tuning. Unplanned equipment downtime dropped 30% in the first year as maintenance teams shifted from reactive repairs to proactive interventions based on predictive alerts. The system accurately predicted 88% of equipment failures 48-72 hours in advance, giving maintenance teams time to schedule repairs during planned downtime windows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maintenance costs decreased $1.8M annually by reducing emergency service calls, optimizing spare parts inventory, and extending equipment lifespan through condition-based maintenance. Plant managers gained real-time visibility into equipment health across all facilities through Grafana dashboards accessible on mobile devices. The client's IT team now independently manages the IoT platform, adds new device types, and trains updated ML models using historical data. The company is expanding the platform to monitor energy consumption and environmental conditions, with plans to integrate predictive maintenance insights directly into their ERP system for automated work order generation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your IoT data platform?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how NEXDYNE can help you unlock the value of sensor data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-destructive hover:bg-white/90 rounded-full px-8">
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
