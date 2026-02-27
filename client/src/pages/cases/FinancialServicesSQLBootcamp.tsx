import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinancialServicesSQLBootcamp() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-primary to-primary text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-purple-200">
            <Link href="/" className="hover:text-white">Home</Link>
            {" / "}
            <Link href="/solutions/data-solutions" className="hover:text-white">Data Solutions</Link>
            {" / "}
            <Link href="/solutions/data-training" className="hover:text-white">Data Training</Link>
            {" / "}
            <span className="text-white">Financial Services Firm Upskills 50 Analysts</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Financial Services Firm Upskills 50 Analysts with SQL & Python Bootcamp
            </h1>
            <p className="text-xl text-purple-100">
              8-week intensive training transformed business analysts into self-sufficient data practitioners, reducing IT backlog 60% and accelerating insight delivery from weeks to hours.
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
              A mid-market investment firm with $8B AUM faced a critical bottleneck: business analysts relied entirely on IT for data extraction and analysis. Simple requests—portfolio performance by sector, client segmentation, risk exposure calculations—required submitting tickets that took 2-3 weeks to fulfill.
            </p>
            <p>
              The IT team maintained a backlog of 200+ data requests, prioritizing infrastructure and compliance work over ad-hoc analytics. Analysts spent hours manually copying data from PDFs and Excel files, introducing errors and missing time-sensitive opportunities.
            </p>
            <p>
              Leadership recognized the problem: analysts had domain expertise but lacked technical skills to access data directly. Hiring more data engineers wasn't the answer—the firm needed to upskill existing analysts to become self-sufficient.
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
              NEXDYNE designed an 8-week SQL and Python bootcamp tailored to the firm's data environment and business problems. Rather than generic training, we built curriculum around their actual data warehouse schema, real portfolio datasets, and common analytical workflows.
            </p>
            <p>
              <strong>Week 1-2: SQL Fundamentals</strong> - SELECT statements, filtering, aggregations, and joins using the firm's client and transaction tables. Analysts wrote queries to answer real business questions: "Which clients have AUM growth &gt;20% YoY?" "What's average portfolio turnover by advisor?"
            </p>
            <p>
              <strong>Week 3-4: Advanced SQL</strong> - Window functions, CTEs, subqueries, and performance optimization. Participants built complex queries for risk analysis, attribution modeling, and compliance reporting—replacing manual Excel workflows with automated SQL scripts.
            </p>
            <p>
              <strong>Week 5-6: Python for Data Analysis</strong> - Pandas, NumPy, and data manipulation. Analysts learned to clean messy datasets, merge multiple sources, and automate repetitive tasks. Final project: build a Python script that generates weekly portfolio performance reports automatically.
            </p>
            <p>
              <strong>Week 7-8: Visualization & Automation</strong> - Matplotlib, Seaborn, and Jupyter notebooks. Participants created interactive dashboards and scheduled automated reports that email stakeholders every Monday morning with updated metrics.
            </p>
            <p>
              Training delivery: 2 hours/week live instruction (Zoom), 4 hours/week hands-on exercises (asynchronous), 1 hour/week office hours for Q&A. All exercises used real firm data (anonymized for training environment). Participants worked in cohorts of 10, fostering peer learning and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-900 mb-2">60%</div>
              <div className="text-charcoal/80">Reduction in IT data request backlog within 3 months</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-900 mb-2">85%</div>
              <div className="text-charcoal/80">Of analysts now write SQL queries independently</div>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <div className="text-4xl font-bold text-indigo-900 mb-2">3 weeks → 2 hours</div>
              <div className="text-charcoal/80">Time to deliver portfolio performance analysis</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <div className="text-4xl font-bold text-red-900 mb-2">$400K</div>
              <div className="text-charcoal/80">Annual savings from reduced manual data processing</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-charcoal/80">
            <p>
              Six months post-training, analysts had built 120+ automated reports and dashboards that previously required manual Excel work. The IT team shifted focus from ad-hoc data requests to strategic infrastructure projects—migrating to a modern cloud data warehouse and implementing real-time risk monitoring.
            </p>
            <p>
              Client-facing impact: advisors now receive daily portfolio updates instead of monthly reports, enabling faster response to market changes. Compliance team automated 15 regulatory reports that previously took 40 hours/month to compile manually.
            </p>
            <p>
              <em>"This training didn't just teach SQL—it fundamentally changed how our analysts think about data. They went from passive consumers waiting for IT to active problem-solvers who build their own solutions."</em> - Chief Data Officer
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
              <h3 className="text-xl font-bold text-charcoal mb-3">Training Platform</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Jupyter Notebooks for hands-on exercises</li>
                <li>• Zoom for live instruction and office hours</li>
                <li>• Slack workspace for peer collaboration</li>
                <li>• GitHub for code sharing and version control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Technologies Taught</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• PostgreSQL (firm's data warehouse)</li>
                <li>• Python 3.9 (Pandas, NumPy, Matplotlib)</li>
                <li>• Jupyter for interactive analysis</li>
                <li>• Git for collaboration and reproducibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-primary to-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to upskill your team?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's design a training program that transforms your analysts into self-sufficient data practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100">
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
