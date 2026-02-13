import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function ManufacturingPredictiveMaintenance() {
  return (
    <CaseStudyArticle
      title="Predictive Maintenance Reduces Downtime for Manufacturing SMB"
      subtitle="How a mid-size manufacturing company with 150 employees achieved 45% reduction in unplanned downtime and 28% savings in maintenance costs through AI-powered predictive maintenance."
      industry="Manufacturing"
      industryHref="/industries/manufacturing"
      client="A precision metal fabrication company with 150 employees and 3 production facilities, serving automotive and aerospace customers with tight quality and delivery requirements."
      challenge="Unplanned equipment failures were causing production delays, quality issues, and costly emergency repairs. The company was spending 40% of maintenance budget on reactive repairs."
      metrics={[
        { value: "45%", label: "Downtime Reduction" },
        { value: "28%", label: "Maintenance Cost Savings" },
        { value: "92%", label: "Prediction Accuracy" },
        { value: "$680K", label: "Annual Savings" },
      ]}
      relatedCaseStudies={[
        {
          title: "AI-Powered Document Processing for Insurance",
          href: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          industry: "Insurance",
        },
        {
          title: "Quality Inspection AI for Food Processor",
          href: "/capabilities/artificial-intelligence/case-studies/food-quality-inspection",
          industry: "Food & Beverage",
        },
        {
          title: "Demand Forecasting for Regional Distributor",
          href: "/capabilities/artificial-intelligence/case-studies/distribution-demand-forecasting",
          industry: "Distribution",
        },
      ]}
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 eb-garamond">
        The Situation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Precision Metal Works (name changed) had built a reputation for quality and reliability 
        over 25 years. Their CNC machining centers, laser cutters, and press brakes produced 
        components for demanding customers in automotive and aerospace. But equipment reliability 
        was becoming a critical issue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        With 45 major pieces of equipment across three facilities, the company was experiencing 
        an average of 8 unplanned breakdowns per month. Each breakdown meant production delays, 
        expedited shipping costs, and occasionally quality issues from rushed restarts. The 
        maintenance team was stuck in reactive mode, spending most of their time on emergency 
        repairs rather than preventive work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Traditional preventive maintenance schedules—based on manufacturer recommendations and 
        calendar intervals—weren't working. Some equipment was being over-maintained while other 
        machines failed between scheduled services. The company needed a smarter approach.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        Our Approach
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We implemented a phased predictive maintenance program that leveraged existing equipment 
        data and added targeted sensors where needed. The goal was to predict failures before 
        they happened, enabling planned maintenance during scheduled downtime.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Phase 1: Data Foundation (Weeks 1-4)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        We began by assessing what data was already available. Many of the company's newer 
        machines had built-in sensors and data logging capabilities that weren't being utilized. 
        We connected these to a central data platform and added low-cost sensors to older 
        equipment for vibration, temperature, and power consumption monitoring.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Critically, we also digitized two years of maintenance records, creating a historical 
        dataset of failures, repairs, and parts replacements that would train our predictive models.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Phase 2: Failure Pattern Analysis (Weeks 5-8)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Working with the maintenance team, we identified the failure modes that caused the 
        most disruption:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Spindle bearing failures in CNC machines (average 4-hour repair, $15K parts cost)</li>
        <li>Hydraulic system issues in press brakes (2-hour repair, production quality risk)</li>
        <li>Laser source degradation (gradual quality decline before failure)</li>
        <li>Coolant system failures (can damage expensive tooling if not caught)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        For each failure mode, we analyzed historical patterns to identify leading indicators—
        the subtle changes in vibration, temperature, or power consumption that preceded failures.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Phase 3: Predictive Model Development (Weeks 9-14)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        We developed machine learning models for each critical failure mode, trained on 
        historical data and validated against known failure events. The models learned to 
        recognize the patterns that preceded failures, often detecting issues days or weeks 
        before they would cause breakdowns.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Key model capabilities included:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Remaining useful life estimation for critical components</li>
        <li>Anomaly detection for unexpected behavior patterns</li>
        <li>Degradation trending to identify gradual performance decline</li>
        <li>Root cause suggestions based on symptom patterns</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Phase 4: Operational Integration (Weeks 15-18)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        We integrated the predictive system with the company's maintenance workflow:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Dashboard showing equipment health status across all facilities</li>
        <li>Automated alerts when predicted failures approach maintenance windows</li>
        <li>Work order generation with predicted parts and labor requirements</li>
        <li>Integration with parts inventory to ensure availability</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        The Results
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        After six months of operation, the predictive maintenance system delivered 
        transformative results:
      </p>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="font-semibold text-gray-900 mb-4">Equipment Performance</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Unplanned downtime incidents</span>
            <span className="font-semibold">8/month → 4.4/month (45% reduction)</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Mean time between failures</span>
            <span className="font-semibold">+62%</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Overall equipment effectiveness (OEE)</span>
            <span className="font-semibold">78% → 86%</span>
          </li>
          <li className="flex justify-between">
            <span>Prediction accuracy</span>
            <span className="font-semibold">92%</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg my-8">
        <h3 className="font-semibold text-gray-900 mb-4">Financial Impact</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Maintenance cost reduction</span>
            <span className="font-semibold">28% ($320K annually)</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Production loss avoidance</span>
            <span className="font-semibold">$280K annually</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 pb-2">
            <span>Quality cost reduction</span>
            <span className="font-semibold">$80K annually</span>
          </li>
          <li className="flex justify-between">
            <span>Total annual benefit</span>
            <span className="font-semibold text-[#0077B5]">$680,000</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        Operational Transformation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Beyond the numbers, the predictive maintenance system transformed how the 
        maintenance team worked:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Proactive scheduling:</strong> 70% of maintenance is now planned vs. 40% before</li>
        <li><strong>Parts optimization:</strong> Reduced spare parts inventory by 15% while improving availability</li>
        <li><strong>Knowledge capture:</strong> System documents failure patterns, preserving institutional knowledge</li>
        <li><strong>Team development:</strong> Technicians spend more time on skilled work, less on emergency repairs</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        A Real-World Example
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Three months after deployment, the system detected an unusual vibration pattern in 
        one of the company's most critical CNC machining centers. The pattern matched the 
        signature of an impending spindle bearing failure—typically a $15,000 repair that 
        causes 4+ hours of downtime.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The system predicted failure within 2-3 weeks. The maintenance team scheduled the 
        repair for a planned weekend shutdown, ordered parts in advance, and completed the 
        work in 3 hours with no production impact. Without the prediction, this failure 
        would have occurred mid-week during a critical customer order.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        Lessons Learned
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Key success factors for this implementation:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Start with critical equipment:</strong> Focus initial efforts on machines where failures cause the most disruption</li>
        <li><strong>Leverage existing data:</strong> Most modern equipment already generates useful data—start there before adding sensors</li>
        <li><strong>Involve maintenance technicians:</strong> Their knowledge of equipment behavior is essential for model development</li>
        <li><strong>Build trust gradually:</strong> Start with alerts and recommendations before automating work orders</li>
        <li><strong>Measure comprehensively:</strong> Track not just downtime but quality, costs, and team productivity</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 eb-garamond">
        What's Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Building on this success, the company is now:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>Extending predictive capabilities to additional equipment types</li>
        <li>Integrating with production scheduling for optimized maintenance windows</li>
        <li>Exploring quality prediction based on equipment condition data</li>
        <li>Sharing anonymized data with equipment manufacturers for improved support</li>
      </ul>
    </CaseStudyArticle>
  );
}
