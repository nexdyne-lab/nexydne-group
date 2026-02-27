import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HealthcareDashboardTraining() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base via-primary to-primary text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            {" / "}
            <Link href="/solutions/data-solutions" className="hover:text-white">Data Solutions</Link>
            {" / "}
            <Link href="/solutions/data-training" className="hover:text-white">Data Training</Link>
            {" / "}
            <span className="text-white">Healthcare Network Trains Clinical Staff on Dashboards</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Healthcare Network Trains 200 Clinicians to Build Custom Dashboards
            </h1>
            <p className="text-xl text-blue-100">
              Half-day workshops taught clinical staff to create Tableau dashboards for patient outcomes, improving visibility 45% and reducing manual reporting 30 hours/week.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="space-y-4 text-lg text-charcoal/80">
            <p>
              A regional healthcare network with 12 hospitals and 45 outpatient clinics struggled with patient outcome visibility. Clinicians wanted to track readmission rates, infection rates, length of stay, and other quality metrics—but relied on IT to generate reports that arrived weeks after the data was collected.
            </p>
            <p>
              The IT team maintained a Tableau server with pre-built dashboards, but they were generic and didn't answer specific clinical questions. Physicians wanted to drill down by department, diagnosis, or physician—capabilities that existed in the tool but required technical knowledge to configure.
            </p>
            <p>
              Clinical staff resorted to manual workarounds: exporting data to Excel, creating pivot tables, and emailing spreadsheets to colleagues. This consumed 30+ hours/week across the organization and introduced errors when formulas broke or data got stale.
            </p>
            <p>
              Leadership recognized the opportunity: Tableau was already deployed and licensed for 500 users, but only 20 people (all in IT) knew how to use it. If clinical staff could build their own dashboards, they'd get faster insights and free IT to focus on infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="space-y-4 text-lg text-charcoal/80">
            <p>
              NEXDYNE designed a half-day "Tableau for Clinicians" workshop tailored to healthcare use cases. Rather than teaching generic BI concepts, we focused on patient outcome dashboards using real (de-identified) clinical data from the network's EHR system.
            </p>
            <p>
              <strong>Morning Session (3 hours): Dashboard Fundamentals</strong> - Participants learned to connect to data sources, create visualizations (bar charts, line graphs, heat maps), and apply filters. We used familiar clinical scenarios: "Show readmission rates by department," "Compare infection rates across hospitals," "Track length of stay trends over time."
            </p>
            <p>
              <strong>Afternoon Session (2 hours): Advanced Features & Hands-On Project</strong> - Participants learned calculated fields, parameters, and dashboard actions. Final project: build a custom dashboard answering a specific clinical question relevant to their role. Cardiologists built heart failure readmission dashboards, orthopedic surgeons tracked surgical site infection rates, primary care physicians monitored chronic disease management metrics.
            </p>
            <p>
              Delivery model: In-person workshops at each hospital (12 sessions total), limited to 15-20 participants per session to ensure hands-on support. Each participant received a workbook with step-by-step instructions, example dashboards, and reference guides for post-training use.
            </p>
            <p>
              We trained 5 internal "Tableau Champions" (clinical informatics staff) who could provide ongoing support after NEXDYNE's engagement ended. Champions held monthly office hours, maintained a Slack channel for Q&A, and curated a library of reusable dashboard templates.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-900 mb-2">200</div>
              <div className="text-charcoal/80">Clinicians trained across 12 hospitals in 3 months</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <div className="text-4xl font-bold text-red-900 mb-2">45%</div>
              <div className="text-charcoal/80">Improvement in patient outcome visibility</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-900 mb-2">180+</div>
              <div className="text-charcoal/80">Custom dashboards built by clinical staff in 6 months</div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <div className="text-4xl font-bold text-indigo-900 mb-2">30 hrs/week</div>
              <div className="text-charcoal/80">Reduction in manual Excel reporting across organization</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-charcoal/80">
            <p>
              Six months post-training, Tableau usage skyrocketed: 420 active users (up from 20), 180+ custom dashboards created, and 15,000+ dashboard views per month. Clinical staff built dashboards for use cases IT never anticipated—OR utilization tracking, physician productivity metrics, patient satisfaction trends by unit.
            </p>
            <p>
              Clinical impact: Physicians identified a 12% readmission spike in heart failure patients at one hospital, traced it to discharge medication errors, and implemented process changes that reduced readmissions 18% within 3 months. Infection control team built real-time dashboards that flagged outbreaks 5 days earlier than manual surveillance.
            </p>
            <p>
              IT impact: Data request backlog dropped 70% as clinical staff answered their own questions. IT shifted focus from ad-hoc reporting to strategic initiatives—integrating new data sources, improving data quality, and building predictive models for patient risk stratification.
            </p>
            <p>
              <em>"This training democratized data access. Clinicians who never touched BI tools now build dashboards that drive clinical improvements. We're making better decisions faster because insights are at our fingertips, not buried in IT backlogs."</em> - Chief Medical Officer
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Training Delivery</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• In-person workshops at each hospital</li>
                <li>• Hands-on exercises with real clinical data</li>
                <li>• Printed workbooks and reference guides</li>
                <li>• Slack workspace for ongoing support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Technologies Taught</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Tableau Desktop (visualization tool)</li>
                <li>• Tableau Server (publishing platform)</li>
                <li>• Epic EHR data model (data source)</li>
                <li>• Healthcare-specific metrics (readmissions, LOS, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-base via-primary to-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to empower your team with self-service analytics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's design hands-on training that turns your users into confident dashboard builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View more cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
