import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function InsuranceAnalyticsBacklog() {
  return (
    <CaseStudyTemplate
      client="Regional P&C Insurance Carrier"
      industry="Insurance · Data Strategy"
      title="Insurance Carrier Prioritizes $12M Analytics Backlog in 6 Weeks"
      subtitle="Data strategy sprint identified high-ROI use cases, eliminated projects that wouldn't move the needle, and created executable roadmap that aligned analytics team with business priorities."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
      challenge={`A regional property & casualty insurance carrier with $800M in annual premiums had accumulated a $12M analytics project backlog over 3 years. Business units submitted 47 requests—fraud detection models, claims cost prediction, underwriting automation, customer churn prevention, pricing optimization, agent performance dashboards. The analytics team of 8 people couldn't execute everything.

The Chief Data Officer faced impossible choices. Every business unit claimed their project was "critical." No objective framework existed to prioritize requests. The team worked on whichever project had the loudest executive sponsor, not the highest business value. Projects took 9 months on average to deliver because scope kept expanding. Stakeholders complained about slow delivery while the analytics team burned out from context-switching.

The carrier needed a data strategy that objectively prioritized the backlog, killed low-value projects, sequenced high-impact initiatives, and created realistic delivery timelines that matched team capacity.`}
      solution={`NEXDYNE conducted a 6-week Data Strategy Sprint that evaluated all 47 backlog projects, scored them on business value and implementation complexity, identified 8 high-ROI initiatives to execute, killed 23 low-value projects, and built an 18-month roadmap with realistic delivery milestones based on team capacity.

Each project was evaluated on financial impact (revenue increase, cost reduction, loss prevention), strategic alignment, stakeholder demand, data readiness, technical difficulty, and organizational change requirements. All 47 projects were plotted on a value/complexity matrix: high-value, low-complexity projects executed first; high-value, high-complexity projects sequenced based on dependencies; low-value projects killed regardless of complexity.

Capacity planning calculated team capacity (8 FTEs = 14,400 hours/year after meetings, training, support) and estimated effort for each project. The 8 prioritized initiatives included: fraud detection model ($3.2M annual savings), claims cost prediction ($2.8M savings), underwriting automation ($1.5M savings), pricing optimization ($4M revenue increase), and customer churn prevention ($1.8M retention value). 23 low-value projects were eliminated and 16 deferred pending foundational capabilities.`}
      impact={`The $13.3M projected value from 8 prioritized initiatives exceeded what the full 47-project backlog could have delivered—most projects had no quantified business case. The backlog dropped 49% through eliminating 23 low-value projects. Stakeholder alignment improved dramatically as transparent scoring ended political battles over project sequencing, reducing executive escalations by 80%.

Delivery predictability transformed: the capacity-based roadmap set realistic expectations, and average project delivery time decreased from 9 months to 5 months because scope was defined upfront and the team wasn't overcommitted. Team morale improved as they focused on projects that mattered.`}
      metrics={[
        { value: "$13.3M", label: "Projected value from 8 prioritized projects" },
        { value: "49%", label: "Backlog reduction (23 projects killed)" },
        { value: "6 weeks", label: "From backlog chaos to executable roadmap" }
      ]}
      quote={{
        text: "We had 47 analytics projects in the backlog and no way to prioritize them objectively. Every business unit claimed their project was critical. NEXDYNE's prioritization framework was a revelation—scoring projects on business value and implementation complexity gave us an objective basis to make tough decisions. We killed 23 low-value projects that would have wasted resources. The 8 high-ROI initiatives we're executing will deliver $13.3M in value. The roadmap is realistic—we're not overcommitting anymore.",
        author: "Lisa Chen",
        role: "Chief Data Officer"
      }}
      tags={["Insurance", "Data Strategy", "Analytics", "Strategy & Finance"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
