import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function FoodQualityAI() {
  return (
    <CaseStudyArticle
      industry="Artificial Intelligence"
      industryHref="/capabilities/artificial-intelligence"
      title="Quality Inspection AI Improves Yield for Food Processor"
      subtitle="How a regional food processor implemented computer vision AI to improve quality detection and increase production yield"
      client="A regional food processing company with 200 employees and multiple product lines. The company processes fresh produce for retail and foodservice customers, with quality being a critical differentiator."
      challenge="Manual quality inspection was inconsistent and couldn't keep pace with production speeds. Defect detection rates varied by shift and inspector. Product waste from quality issues was running at 12% of production. Customer complaints about quality were increasing, threatening key accounts."
      metrics={[
        { value: "40%", label: "Defect Detection Improvement" },
        { value: "18%", label: "Yield Increase" },
        { value: "65%", label: "Complaint Reduction" },
        { value: "$1.8M", label: "Annual Savings" },
      ]}
      relatedCaseStudies={[
        {
          title: "Predictive Maintenance Reduces Downtime for Manufacturing SMB",
          href: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          industry: "Manufacturing"
        },
        {
          title: "Demand Forecasting AI Optimizes Inventory for Regional Distributor",
          href: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          industry: "Distribution"
        },
        {
          title: "AI-Driven Underwriting Accelerates Growth for Specialty Lender",
          href: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
          industry: "Financial Services"
        }
      ]}
    >
      <h2>Understanding Quality Challenges</h2>
      <p>
        Our assessment revealed that quality issues stemmed from multiple sources. Visual defects like bruising, discoloration, and size variations were difficult to detect consistently at production speeds. Foreign material contamination required constant vigilance. Grading accuracy varied significantly between inspectors and shifts. The speed of production lines made thorough manual inspection impossible.
      </p>

      <h2>Designing the Vision System</h2>
      <p>
        We designed a computer vision system tailored to food processing requirements. We selected cameras and lighting optimized for detecting defects in produce. We developed image processing pipelines that handled varying product sizes and orientations. We created inspection stations that integrated with existing conveyor systems. We also built in redundancy to ensure continuous operation.
      </p>

      <h2>Training the AI Models</h2>
      <p>
        We trained deep learning models using thousands of labeled product images. We created defect classification models that identified specific quality issues. We developed grading models that sorted products into quality tiers. We built foreign material detection that identified contamination. We also implemented continuous learning to improve accuracy as new defect types emerged.
      </p>

      <h2>Integrating with Production</h2>
      <p>
        We integrated the AI system with production line controls. We connected to sorting and rejection mechanisms for automated removal of defective products. We linked to production tracking systems for quality traceability. We built real-time dashboards showing quality metrics by line and shift. We also created alerts that notified supervisors of quality trends.
      </p>

      <h2>Optimizing and Scaling</h2>
      <p>
        After successful pilot deployment, we optimized and scaled the system. We fine-tuned detection thresholds to balance quality and yield. We expanded to additional production lines and product types. We developed predictive capabilities that identified upstream quality issues. We also created reporting that supported customer quality audits.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Computer vision can exceed human inspection accuracy at production speeds</li>
        <li>Training data quality is critical for food processing AI</li>
        <li>Integration with production controls enables automated quality management</li>
        <li>Continuous learning adapts to new products and defect types</li>
      </ul>
    </CaseStudyArticle>
  );
}
