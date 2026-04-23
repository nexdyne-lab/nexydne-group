import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ManufacturingPredictiveMaintenance() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/solutions/data-visualization" className="hover:text-white transition-colors">Data visualization</Link>
            <span>/</span>
            <span className="text-white">Manufacturing Predictive Maintenance</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Manufacturing Plant Cuts Downtime 35% with Predictive Maintenance Dashboard
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Equipment health dashboard predicted failures 2 weeks in advance, enabling scheduled maintenance instead of emergency repairs.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A food processing plant operating 24/7 with 150 pieces of critical equipment struggled with unplanned downtime that disrupted production schedules and increased maintenance costs. Equipment failures occurred without warning—a conveyor belt motor burned out during peak production, a refrigeration compressor failed overnight, a packaging line jammed due to worn components.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              Unplanned downtime averaged 12 hours per week, costing $15K per hour in lost production. Maintenance operated reactively—fixing equipment after it broke instead of preventing failures. The maintenance team lacked visibility into equipment health. Sensors captured vibration, temperature, and pressure data, but no one analyzed it until after failures occurred.
            </p>
            <p className="text-lg text-charcoal/80">
              The plant manager needed a predictive maintenance dashboard that surfaced early warning signs of equipment degradation, enabling scheduled maintenance during planned downtime instead of emergency repairs during production runs. The dashboard had to integrate sensor data from 150 assets and predict failures weeks in advance with sufficient accuracy to justify maintenance interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-8">
              NEXDYNE built a predictive maintenance dashboard using IoT sensor data and machine learning models to forecast equipment failures. The dashboard integrated data from 150 assets (motors, compressors, conveyors, pumps) and displayed real-time health scores, failure predictions, and maintenance recommendations.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Dashboard Components</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Equipment health heatmap.</strong> Visual overview of all 150 assets color-coded by health score (green: healthy, yellow: degrading, red: critical). Maintenance team prioritized inspections on red/yellow assets instead of following fixed schedules.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Failure prediction timeline.</strong> ML model predicted equipment failures 2-4 weeks in advance based on sensor patterns (vibration anomalies, temperature spikes, pressure fluctuations). Dashboard showed predicted failure date with confidence interval, enabling proactive maintenance scheduling.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Sensor trend analysis.</strong> Time-series charts displayed vibration, temperature, and pressure trends for each asset. Maintenance engineers investigated anomalies—a motor showing gradual temperature increase over 3 weeks indicated bearing degradation requiring replacement.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Maintenance work order integration.</strong> Dashboard automatically generated work orders for predicted failures, assigning them to maintenance technicians with recommended actions (replace bearing, lubricate motor, inspect belt tension). Technicians received mobile notifications with asset location and repair instructions.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Predictive Model Development</h3>
            <p className="text-lg text-charcoal/80 mb-4">
              Trained ML model on 18 months of historical sensor data and failure records. Model learned failure signatures—vibration patterns that preceded motor failures, temperature trends that indicated compressor issues. Achieved 85% prediction accuracy with 2-week lead time, sufficient for scheduling maintenance during planned downtime.
            </p>
            <p className="text-lg text-charcoal/80">
              Deployed dashboard to maintenance office and production floor displays. Maintenance team reviewed health scores daily, scheduling interventions on degrading assets before failures occurred. Automated alerts sent email/SMS notifications when assets entered critical health zones.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">35%</div>
              <div className="text-muted-foreground">Reduction in unplanned downtime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Failure prediction accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$2.4M</div>
              <div className="text-muted-foreground">Annual savings from reduced downtime</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "Before the dashboard, we fixed equipment after it broke—always during production runs, always costing us $15K per hour in lost output. The predictive maintenance dashboard gave us 2-4 weeks warning before failures. We scheduled maintenance during planned downtime instead of emergency repairs during production. Unplanned downtime dropped 35%, saving $2.4M annually. The model predicted 85% of failures accurately—a conveyor motor, two compressors, and a packaging line all flagged weeks before they would have failed. We caught issues early and fixed them on our schedule, not the equipment's."
            </p>
            <p className="text-charcoal font-semibold">
              James Rodriguez, Plant Manager
            </p>
          </div>

          <h3 className="text-2xl font-bold text-charcoal mb-6">Business Impact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Downtime reduction:</strong> Unplanned downtime decreased 35% (from 12 hours/week to 7.8 hours/week). With downtime costing $15K per hour, this saved $2.4M annually. Production output increased 4% due to improved equipment availability.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Maintenance cost savings:</strong> Emergency repair costs decreased 40% as maintenance shifted from reactive to proactive. Scheduled maintenance during planned downtime avoided overtime labor costs and expedited parts shipping. Maintenance budget decreased 18% while equipment reliability improved.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Prediction accuracy:</strong> ML model achieved 85% accuracy predicting failures 2-4 weeks in advance. Caught critical failures before they occurred—conveyor motor bearing degradation, compressor refrigerant leak, packaging line belt wear. False positive rate of 12% acceptable given cost of missed failures.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Operational efficiency:</strong> Maintenance team shifted from fixed schedules to condition-based maintenance. Reduced unnecessary preventive maintenance on healthy equipment, freeing technician time for value-added work. Equipment lifespan extended 15% through proactive interventions.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">IoT & Data Pipeline</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• IoT sensors (vibration, temperature, pressure)</li>
                <li>• MQTT protocol for real-time data streaming</li>
                <li>• Apache Kafka for event processing</li>
                <li>• TimescaleDB for time-series data</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">ML & Visualization</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Python scikit-learn for ML models</li>
                <li>• Random Forest for failure classification</li>
                <li>• Grafana for dashboard visualization</li>
                <li>• REST API for CMMS integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to predict failures before they happen?
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Let's build predictive maintenance dashboards that shift your operations from reactive to proactive.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-charcoal rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
            <Link href="/solutions/data-visualization">
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-charcoal transition-colors font-semibold">
                View all cases
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
