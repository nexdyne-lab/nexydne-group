import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function FoodQualityAI() {
  return (
    <CaseStudyTemplate
      client="Regional Food Processing Company"
      industry="Food & Beverage · Artificial Intelligence"
      title="Quality Inspection AI Improves Yield for Food Processor"
      subtitle="How a regional food processor implemented computer vision AI to improve quality detection and increase production yield."
      heroImage="https://images.unsplash.com/photo-1566467021492-99e0d5f4bd04?w=1600&q=80"
      challenge={`Manual quality inspection was inconsistent and couldn't keep pace with production speeds. Defect detection rates varied by shift and inspector. Product waste from quality issues was running at 12% of production. Customer complaints about quality were increasing, threatening key accounts.

A regional food processing company with 200 employees processes fresh produce for retail and foodservice customers, with quality as a critical differentiator. Visual defects like bruising, discoloration, and size variations were difficult to detect consistently at production speeds, and grading accuracy varied significantly between inspectors. The speed of production lines made thorough manual inspection impossible at the volume required to serve major retail accounts.`}
      solution={`NEXDYNE designed a computer vision system tailored to food processing requirements, selecting cameras and lighting optimized for detecting defects in produce and developing image processing pipelines that handled varying product sizes and orientations. Inspection stations integrated with existing conveyor systems with built-in redundancy to ensure continuous operation.

Deep learning models were trained using thousands of labeled product images, creating defect classification models that identified specific quality issues, grading models that sorted products into quality tiers, and foreign material detection that identified contamination. Continuous learning capabilities improved accuracy as new defect types emerged.

The AI system was integrated with production line controls, connected to sorting and rejection mechanisms for automated removal of defective products, and linked to production tracking systems for quality traceability. Real-time dashboards showed quality metrics by line and shift, with supervisor alerts for emerging quality trends. After a successful pilot deployment, the system was expanded to additional production lines and product types.`}
      impact={`The computer vision quality system improved defect detection by 40% compared to manual inspection, with consistent performance across all shifts and production speeds. Yield increased 18% as improved sorting accuracy eliminated both missed defects and false rejections of acceptable product. Customer complaints dropped 65% as quality consistency improved across retail and foodservice accounts.

Annual savings of $1.8 million came from reduced waste, avoided customer penalties, and lower rework costs. The predictive capabilities that identified upstream quality issues enabled proactive interventions before defective product reached inspection stations. Customer quality audit reports, now automatically generated from system data, strengthened relationships with major retail accounts.`}
      metrics={[
        { value: "40%", label: "Defect detection improvement" },
        { value: "18%", label: "Yield increase" },
        { value: "65%", label: "Complaint reduction" },
        { value: "$1.8M", label: "Annual savings" }
      ]}
      tags={["Food & Beverage", "AI", "Computer Vision", "Quality Control"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default FoodQualityAI;
