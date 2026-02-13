import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function MunicipalPermitSystem() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground transition-colors">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground transition-colors">App Development</Link>
          <span>/</span>
          <Link href="/solutions/lowcode-development" className="hover:text-foreground transition-colors">Low-code Development</Link>
          <span>/</span>
          <span className="text-foreground">City Government Modernizes Permit System Serving 250K Residents</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">City Government Modernizes Permit System Serving 250K Residents</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Municipal government replaces 30-year-old legacy system with Microsoft Power Platform solution—reducing permit approval time from 45 days to 7 days and improving citizen satisfaction by 58 points
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              A mid-sized city government serving 250,000 residents struggled with a 30-year-old permit management system that required citizens to submit paper applications in person and wait weeks for approval. The system handled building permits, business licenses, special event permits, and zoning variances across 12 different departments, each with their own manual review processes. Citizens complained about long wait times, lack of status visibility, and the inconvenience of taking time off work to visit city hall during business hours.
            </p>
            <p>
              The city's IT department had attempted to modernize the system twice over the past decade, but both projects failed due to budget constraints, vendor lock-in concerns, and resistance from department staff accustomed to paper-based workflows. Average permit approval time had increased to 45 days, well above the state average of 21 days, causing frustration among residents and local businesses. With a new mayor committed to digital government and a federal grant available for technology modernization, the city set a 12-week timeline to launch a digital permit system that could serve all departments while maintaining compliance with state regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              NEXDYNE partnered with the city's IT and department leaders to design and develop a comprehensive permit management system using Microsoft Power Platform. We conducted workshops with staff from all 12 departments to map existing workflows, identify bottlenecks, and design streamlined approval processes. The system featured online permit applications with document upload, automated routing to appropriate departments, electronic review and approval workflows, payment processing, and real-time status tracking for citizens.
            </p>
            <p>
              Our development team leveraged Power Apps for the citizen-facing portal and staff review interfaces, Power Automate for workflow automation and email notifications, and Power BI for department dashboards and compliance reporting. We integrated with the city's existing financial system for payment processing and document management system for permit record retention. The solution included self-service kiosks in city hall for residents without internet access, ensuring equitable access to digital services. Role-based access controls ensured staff could only view and approve permits within their department's jurisdiction.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Technical Implementations</h3>
            <ul className="space-y-2">
              <li>Power Apps citizen portal with mobile-responsive design and document upload capabilities for permit applications</li>
              <li>Power Automate workflows for automated routing, approval notifications, and deadline tracking across 12 departments</li>
              <li>Integration with city financial system for online payment processing and receipt generation</li>
              <li>Power BI dashboards for department performance monitoring, compliance reporting, and citizen service metrics</li>
              <li>Self-service kiosks in city hall for residents without internet access, ensuring equitable digital service delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">7 days</div>
              <div className="text-lg text-muted-foreground">Average approval time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">82%</div>
              <div className="text-lg text-muted-foreground">Online submission rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">58 pts</div>
              <div className="text-lg text-muted-foreground">Satisfaction improvement</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The digital permit system launched on schedule after 12 weeks of development and staff training. Within 6 months of launch, 82% of permit applications were submitted online, far exceeding the initial 60% adoption target. Average permit approval time dropped from 45 days to 7 days, with simple permits (fence installations, sign permits) approved within 24 hours. Citizen satisfaction scores increased 58 points, with residents praising the convenience of 24/7 online access and real-time status tracking.
            </p>
            <p>
              The city reduced permit processing costs by $420,000 annually through automation and eliminated the need for three temporary staff positions previously required to manage paper applications. Department staff productivity increased 40% as they spent less time on data entry and more time on complex permit reviews requiring professional judgment. The system's audit trail and compliance reporting capabilities simplified state inspections and reduced regulatory findings by 85%. The city now uses Power Platform for additional citizen services, including code enforcement reporting, park reservations, and public records requests, establishing a foundation for comprehensive digital government transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-peach-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to modernize your government services?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how NEXDYNE can help you deliver better citizen experiences with low-code solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800">Get in touch</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cases">View all cases</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
