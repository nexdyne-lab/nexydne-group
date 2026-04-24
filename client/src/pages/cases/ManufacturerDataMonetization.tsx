import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ManufacturerDataMonetization() {
  return (
    <CaseStudyTemplate
      client="Mid-Market Industrial Equipment Manufacturer"
      industry="Manufacturing · Data Strategy"
      title="Manufacturer Identifies $4M Revenue Opportunity Through Data Monetization"
      subtitle="Data strategy engagement mapped equipment telemetry landscape and built roadmap to launch predictive maintenance subscription service generating recurring revenue."
      heroImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80"
      challenge={`A mid-market industrial equipment manufacturer with $200M annual revenue collected massive amounts of telemetry data from 8,000 machines deployed at customer sites—vibration sensors, temperature readings, operating hours, fault codes. The data sat in AWS S3 buckets, used only for warranty claim investigations when equipment failed.

The CEO saw competitors launching "equipment-as-a-service" offerings with predictive maintenance capabilities. Customers asked if the manufacturer could predict failures before they happened. The product team proposed building a predictive maintenance platform but had no data strategy—no clarity on what data existed, what condition it was in, or which use cases would generate the most value.

The manufacturer needed a data strategy that mapped their current data landscape, identified monetization opportunities, prioritized use cases by ROI, and created an executable roadmap that aligned engineering resources with business priorities.`}
      solution={`NEXDYNE conducted a 6-week Data Strategy Sprint that inventoried all data assets, interviewed stakeholders across product, engineering, sales, and customer success teams, identified 12 potential use cases, and prioritized them by revenue potential and implementation complexity.

Week 1-2 mapped the data landscape: cataloged telemetry streams, warranty claims database, service technician notes, customer contracts, and parts inventory—assessing data quality, completeness, and gaps. Week 3 conducted 15 stakeholder interviews surfacing customer pain points and lost revenue from unplanned downtime. Week 4 identified 12 potential use cases including predictive maintenance, usage-based pricing, warranty fraud detection, and parts demand forecasting. Week 5 scored each use case: predictive maintenance subscription service topped the ranking with $4M annual recurring revenue potential, high customer demand, and feasibility with existing telemetry. Week 6 delivered an executable 18-month phased roadmap.

During the engagement, NEXDYNE also built a proof-of-concept predictive maintenance model using historical failure data that predicted bearing failures 2 weeks in advance with 82% accuracy—proving the roadmap was executable, not theoretical.`}
      impact={`The CEO approved a $1.2M investment to build the commercial platform immediately after reviewing the proof-of-concept. The roadmap to $4M ARR was sequenced in three phases: MVP for one equipment line piloted with 10 customers (months 1-6), commercial launch across all equipment lines at $500/machine/month (months 7-12), and feature expansion with usage-based pricing and customer benchmarking (months 13-18).

Beyond the primary revenue stream, the strategy eliminated 4 low-value projects that would have consumed $800K in development costs. Customers using the predictive maintenance service renewed service contracts at 95% vs. the 78% industry average. The service launched 9 months ahead of competitors, with the sales team closing 3 major deals citing predictive capabilities as the key differentiator.`}
      metrics={[
        { value: "$4M", label: "Projected annual recurring revenue" },
        { value: "12", label: "Use cases identified and prioritized" },
        { value: "6 weeks", label: "From kickoff to executive approval" }
      ]}
      quote={{
        text: "Before the strategy sprint, we knew we had valuable telemetry data but no idea how to monetize it. NEXDYNE mapped our entire data landscape, interviewed our teams, and identified 12 potential use cases in 6 weeks. The prioritization framework was eye-opening—predictive maintenance had 3x the revenue potential of other ideas. The proof-of-concept they built during the engagement proved the roadmap worked. We approved the $1.2M investment on the spot. Now we're launching a subscription service that will generate $4M annually.",
        author: "David Martinez",
        role: "Chief Product Officer"
      }}
      tags={["Manufacturing", "Data Strategy", "IoT", "Strategy & Finance"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}
