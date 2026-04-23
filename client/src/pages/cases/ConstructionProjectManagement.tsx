import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Layers, Smartphone } from "lucide-react";

export function ConstructionProjectManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground">App Development</Link>
          <span>/</span>
          <Link href="/solutions/custom-software" className="hover:text-foreground">Custom Software</Link>
          <span>/</span>
          <span className="text-foreground">Construction Firm Replaces 5 Tools with Unified Platform</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Construction Firm Replaces 5 Tools with Unified Project Management Platform</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Custom web and mobile app consolidated scheduling, resource allocation, and financial tracking—saving $180K annually in software costs.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-secondary" />
              <span className="font-semibold">$180K annual savings</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span className="font-semibold">5 tools replaced</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="font-semibold">Mobile-first design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A regional construction firm managing $120 million in annual projects was juggling five separate software platforms: one for scheduling, another for resource allocation, a third for financial tracking, a fourth for document management, and a fifth for field reporting. Project managers spent hours each week manually reconciling data between systems, leading to errors, delays, and frustrated teams.
            </p>
            <p>
              The fragmented toolset created visibility gaps. Executives couldn't get real-time project status without requesting custom reports from multiple systems. Field crews used paper forms because the mobile apps were clunky and required internet connectivity. Budget overruns weren't discovered until monthly financial reviews—too late to course-correct.
            </p>
            <p>
              Software licensing costs were escalating as the firm grew. They were paying $180,000 annually for tools that didn't talk to each other and didn't match their workflows. They needed a unified platform that could handle scheduling, resource management, financials, and field reporting in one system—accessible from both office and job sites.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              NEXDYNE built a comprehensive project management platform with a React web application for office users and a React Native mobile app for field crews. The system consolidates scheduling (Gantt charts, critical path analysis), resource allocation (equipment, labor, materials), financial tracking (budgets, change orders, invoicing), and field reporting (daily logs, safety inspections, photo documentation) into one unified interface.
            </p>
            <p>
              The mobile app works offline, syncing data when connectivity is available—critical for remote job sites. Field crews can submit daily reports, log equipment hours, capture photos with GPS coordinates, and flag issues that automatically create tasks for project managers. Real-time dashboards give executives instant visibility into project health, budget status, and resource utilization across all active jobs.
            </p>
            <p>
              We integrated the platform with their existing accounting system (QuickBooks) and document storage (SharePoint), ensuring seamless data flow without manual re-entry. NEXDYNE provided on-site training at project sites and built role-specific workflows for project managers, superintendents, field crews, and executives.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">$180K</div>
              <div className="text-muted-foreground">Annual software cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">5</div>
              <div className="text-muted-foreground">Tools consolidated into one</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">88%</div>
              <div className="text-muted-foreground">Field crew adoption rate</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              The unified platform transformed project management operations. Project managers saved 8-10 hours per week previously spent reconciling data between systems. Real-time dashboards eliminated the need for manual status reports—executives now have instant visibility into every project's schedule, budget, and resource allocation.
            </p>
            <p>
              Field crews embraced the mobile app, achieving 88% adoption within the first month. Daily reporting time dropped from 30 minutes per crew to under 10 minutes, and the offline capability meant crews could work seamlessly even at remote sites without cellular coverage. Photo documentation with GPS coordinates improved quality control and reduced disputes with clients.
            </p>
            <p>
              Financial visibility improved dramatically. Project managers now see budget vs. actual costs in real-time, enabling proactive cost management instead of reactive firefighting. The firm reduced budget overruns by 34% in the first year by catching issues early and adjusting resource allocation before costs spiraled.
            </p>
            <p>
              The $180,000 in annual software savings paid for the custom platform development within 18 months. Beyond cost savings, the firm gained competitive advantages: faster project delivery, better client communication, and the ability to manage more projects with the same staff. They've since grown from $120M to $165M in annual revenue while maintaining the same project management team size.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to consolidate your tools with custom software?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how a unified platform can eliminate software sprawl and deliver better ROI than multiple subscriptions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="mailto:martijn@nexdyne.com">Schedule a consultation</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-destructive">
              <Link href="/solutions/custom-software">Learn more about custom software</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
