import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RetailerDataAcademy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white py-20">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-indigo-200">
            <Link href="/" className="hover:text-white">Home</Link>
            {" / "}
            <Link href="/solutions/data-solutions" className="hover:text-white">Data Solutions</Link>
            {" / "}
            <Link href="/solutions/data-training" className="hover:text-white">Data Training</Link>
            {" / "}
            <span className="text-white">Retailer Builds Internal Data Academy</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Retailer Builds Internal Data Academy to Train 120 Employees
            </h1>
            <p className="text-xl text-indigo-100">
              Custom curriculum covering analytics fundamentals through ML deployment trained employees across 6 departments in 12 months, creating a data-literate organization.
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
              A regional retail chain with 85 stores and $450M annual revenue recognized that data literacy was becoming a competitive differentiator. While they had invested in a modern data warehouse and BI tools, adoption remained low—only 15% of employees used data to inform decisions.
            </p>
            <p>
              The problem wasn't technology—it was capability. Store managers didn't know how to interpret sales dashboards. Merchandising teams couldn't build custom reports. Marketing relied on external agencies for campaign analysis because internal teams lacked analytics skills.
            </p>
            <p>
              Leadership wanted to build a "data-driven culture," but one-off training sessions hadn't worked. Employees attended generic webinars, forgot the content within weeks, and reverted to gut-feel decision-making. The company needed a structured, ongoing program that built real capability.
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
              NEXDYNE designed a multi-tier "Data Academy" with role-specific learning paths spanning 12 months. Rather than one-size-fits-all training, we created curricula tailored to job functions—store operations, merchandising, marketing, finance, supply chain, and IT.
            </p>
            <p>
              <strong>Tier 1: Data Literacy (All Employees)</strong> - 4-week foundation covering data concepts, dashboard interpretation, and basic Excel analytics. Participants learned to read charts, identify trends, and ask better questions of data. Delivered as 1-hour weekly modules with practical exercises using real store performance data.
            </p>
            <p>
              <strong>Tier 2: Self-Service Analytics (Business Users)</strong> - 8-week program teaching Looker (the company's BI tool), SQL basics, and report building. Store managers learned to create custom sales reports, merchandisers built inventory dashboards, marketers analyzed campaign performance independently. Hands-on projects required participants to solve actual business problems.
            </p>
            <p>
              <strong>Tier 3: Advanced Analytics (Analysts & Data Team)</strong> - 12-week intensive covering Python, statistical analysis, A/B testing, and ML fundamentals. Participants built predictive models for demand forecasting, customer segmentation, and price optimization. Final capstone: deploy a production ML model that improves business KPIs.
            </p>
            <p>
              Delivery model: Blended learning combining live workshops (monthly), self-paced online modules (weekly), and hands-on projects (continuous). Each tier included certification upon completion, creating internal credentials that recognized data expertise. Participants worked in cross-functional cohorts, fostering collaboration and knowledge sharing across departments.
            </p>
            <p>
              NEXDYNE provided train-the-trainer sessions to build internal instructors who could sustain the academy after our engagement. We developed curriculum materials, exercise datasets, grading rubrics, and instructor guides—everything needed to run the program independently.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <div className="text-4xl font-bold text-indigo-900 mb-2">120</div>
              <div className="text-charcoal/80">Employees trained across 6 departments in 12 months</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-4xl font-bold text-purple-900 mb-2">15% → 68%</div>
              <div className="text-charcoal/80">Increase in employees using data for daily decisions</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-900 mb-2">250+</div>
              <div className="text-charcoal/80">Custom dashboards and reports built by business users</div>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-primary">
              <div className="text-4xl font-bold text-red-900 mb-2">$1.2M</div>
              <div className="text-charcoal/80">Annual savings from reduced external analytics consulting</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-charcoal/80">
            <p>
              One year post-launch, the Data Academy became a permanent fixture in the company's talent development program. New hires complete Tier 1 during onboarding. High-potential employees advance through Tier 2 and 3, creating a pipeline of internal analytics talent.
            </p>
            <p>
              Business impact: Store managers now optimize staffing schedules using traffic forecasts (reducing labor costs 8%). Merchandisers identify slow-moving inventory 3 weeks earlier, minimizing markdowns. Marketing runs A/B tests in-house instead of paying agencies $50K/campaign.
            </p>
            <p>
              Cultural shift: Data became the common language across departments. Meetings start with dashboards, not opinions. Decisions are justified with metrics, not seniority. The company promoted 3 Tier 3 graduates into newly created "Analytics Lead" roles, recognizing data expertise as a career path.
            </p>
            <p>
              <em>"The Data Academy transformed our organization. We went from data-averse to data-native in 12 months. Employees who were intimidated by spreadsheets now build ML models. This is the best talent investment we've made."</em> - Chief People Officer
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
              <h3 className="text-xl font-bold text-charcoal mb-3">Learning Platform</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Custom LMS built on Moodle</li>
                <li>• Zoom for live workshops and office hours</li>
                <li>• Slack workspace for cohort collaboration</li>
                <li>• GitHub for code sharing and project submissions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Technologies Taught</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• Looker (company's BI platform)</li>
                <li>• SQL (Snowflake data warehouse)</li>
                <li>• Python (Pandas, Scikit-learn, Matplotlib)</li>
                <li>• Excel (advanced formulas, pivot tables)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build your Data Academy?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's design a structured training program that creates a data-literate organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-slate-100">
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
