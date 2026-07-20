import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { PhoneCall, EyeOff, GitBranch, Clock, MapPinned, Grid3x3, Gauge, DollarSign } from "lucide-react";

export function LogisticsOperationsDashboard() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Delivery Delays 40% With a Real-Time Operations Dashboard | Logistics Case Study"
      seoDescription="A logistics company running 200 trucks discovered delays only when customers called, stuck at 78% on-time. A real-time operations dashboard cut delays 40% and lifted on-time to 92%."
      canonical="/cases/logistics-operations-dashboard"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Logistics Company Cut Delivery Delays 40% With a Real-Time Dashboard"
      subtitle="A custom real-time operations dashboard surfaced capacity bottlenecks and route inefficiencies for proactive intervention — improving on-time delivery from 78% to 92% and saving $1.8M a year."
      heroImage="/images/cases/logistics-operations-dashboard-hero.jpg"
      metrics={[
        { value: "40%", label: "Fewer Delivery Delays" },
        { value: "92%", label: "On-Time Delivery" },
        { value: "$1.8M", label: "Annual Savings" }
      ]}
      clientContextTitle="Blind to Delays Until Too Late"
      clientContextIntro="A regional logistics company managing 200 trucks and 50 distribution centers struggled with delivery delays that damaged relationships and raised costs. On-time delivery hovered at 78% — below the 90%+ industry standard — and delays cascaded: one late pickup caused missed windows at three downstream stops."
      clientContextBody="The operations team had no real-time visibility. Dispatchers discovered delays only when customers called to complain, by which point the chance to reroute or reallocate had passed. Post-mortems happened days later through Excel — too late to prevent recurring issues. The COO needed a dashboard that surfaced bottlenecks as they emerged, integrating TMS, GPS tracking, and delivery schedules into one view."
      clientProfile={{
        industry: "Regional Logistics Company",
        companySize: "200 Trucks, 50 DCs",
        projectDuration: "60-Second Refresh",
        additionalInfo: "React + D3.js",
        additionalLabel: "Stack"
      }}
      challengeTitle="Why Delays Kept Cascading"
      challenges={[
        {
          icon: PhoneCall,
          title: "Delays found via complaints",
          description: "Dispatchers learned of problems only when customers called, too late to fix."
        },
        {
          icon: GitBranch,
          title: "Cascading misses",
          description: "One late pickup rippled into missed windows at three downstream stops."
        },
        {
          icon: EyeOff,
          title: "No real-time visibility",
          description: "The team had no live view of network performance across trucks and centers."
        },
        {
          icon: Clock,
          title: "Days-late post-mortems",
          description: "Excel analysis came too late to prevent recurring problems."
        }
      ]}
      approachTitle="See Bottlenecks Before They Bite"
      approachIntro="NEXDYNE built a custom real-time operations dashboard in React and D3.js, pulling TMS and GPS data on a 60-second refresh and alerting dispatchers before issues cascaded into customer-facing delays."
      steps={[
        {
          step: "01",
          title: "Map network health live",
          description: "A geographic view color-coded every active delivery on-time, at-risk, or delayed, with click-through root cause."
        },
        {
          step: "02",
          title: "Forecast capacity",
          description: "A 48-hour capacity heatmap let dispatchers reroute to underutilized centers before overloads caused delays."
        },
        {
          step: "03",
          title: "Flag slow routes",
          description: "Route-efficiency metrics highlighted routes running 20%+ below baseline, with a customer-impact forecast."
        },
        {
          step: "04",
          title: "Validate then automate alerts",
          description: "A 3-week prototype was validated with 5 dispatchers before production, with automated SMS on threshold breaches."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "92%",
          label: "On-time delivery",
          detail: "Up from 78%, beating the industry benchmark"
        },
        {
          icon: DollarSign,
          value: "$1.8M",
          label: "Annual savings",
          detail: "From reduced expedited shipping and avoided penalties"
        },
        {
          icon: MapPinned,
          value: "150+",
          label: "At-risk shipments saved weekly",
          detail: "Through proactive dispatcher intervention"
        }
      ]}
      quote="Before the dashboard, we discovered delays when customers called to complain — too late to fix the problem. Now we see at-risk shipments 2–3 hours in advance and intervene before they miss delivery windows. On-time delivery improved from 78% to 92%. Customer satisfaction scores increased 25%. The dashboard paid for itself in 4 months."
      quoteAuthor="Sarah Mitchell"
      quoteRole="Chief Operations Officer"
      relatedStudies={[
        {
          title: "Launching a Real-Time Tracking App for 500 Drivers",
          metric: "96%",
          label: "on-time delivery",
          link: "/cases/logistics-tracking-app",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Unifying 30+ Regional Brands With AI Optimization",
          metric: "$55M",
          label: "operational savings",
          link: "/cases/logistics-brand-consolidation",
          image: "/images/cases/logistics-brand-consolidation-hero.jpg"
        }
      ]}
      ctaTitle="Ready to see delays before they happen?"
      ctaDescription="Let's talk about what a real-time operations dashboard could do for your on-time delivery."
    />
  );
}

export default LogisticsOperationsDashboard;
