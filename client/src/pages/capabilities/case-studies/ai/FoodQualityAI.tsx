import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ScanSearch, Trash2, UserX, Frown, Camera, Brain, Gauge, DollarSign } from "lucide-react";

export function FoodQualityAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Computer Vision Quality Inspection That Lifted Yield 18% | Food Processing Case Study"
      seoDescription="A food processor's manual inspection missed defects and wasted 12% of production. A computer-vision system improved defect detection 40%, lifted yield 18%, and saved $1.8M a year."
      canonical="/capabilities/artificial-intelligence/case-studies/food-quality-ai"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Food Processor Improved Yield 18% With Computer Vision"
      subtitle="A regional food processor deployed computer-vision quality inspection integrated with its production lines — improving defect detection 40%, lifting yield 18%, and saving $1.8M a year."
      heroImage="/images/capabilities/cap-food.jpg"
      metrics={[
        { value: "40%", label: "Better Defect Detection" },
        { value: "18%", label: "Yield Increase" },
        { value: "65%", label: "Fewer Complaints" },
        { value: "$1.8M", label: "Annual Savings" }
      ]}
      clientContextTitle="Inspection That Couldn't Keep Pace"
      clientContextIntro="A regional food processing company with 200 employees processes fresh produce for retail and foodservice customers, with quality as a critical differentiator. Manual inspection was inconsistent and couldn't keep pace with production speeds — and product waste from quality issues ran at 12% of production."
      clientContextBody="Visual defects like bruising, discoloration, and size variation were hard to detect consistently at line speed, and grading accuracy varied significantly between inspectors and shifts. Customer complaints about quality were increasing, threatening key retail accounts. The speed of the lines made thorough manual inspection impossible at the volume required to serve major customers."
      clientProfile={{
        industry: "Food Processing Company",
        companySize: "200 Employees",
        projectDuration: "Line-Integrated",
        additionalInfo: "Computer Vision",
        additionalLabel: "Solution"
      }}
      challengeTitle="Why Quality Slipped Through"
      challenges={[
        {
          icon: UserX,
          title: "Inconsistent by shift and inspector",
          description: "Defect detection and grading accuracy varied widely across people and production speeds."
        },
        {
          icon: Trash2,
          title: "12% of production wasted",
          description: "Quality issues drove significant waste and rework costs."
        },
        {
          icon: Frown,
          title: "Rising customer complaints",
          description: "Inconsistent quality threatened key retail and foodservice accounts."
        },
        {
          icon: ScanSearch,
          title: "Line speed beat manual review",
          description: "At the volumes major accounts demanded, thorough manual inspection was impossible."
        }
      ]}
      approachTitle="Vision Systems on Every Line"
      approachIntro="NEXDYNE designed a computer-vision system tailored to food processing — optimized cameras and lighting, deep-learning defect and grading models, and integration with sorting and rejection mechanisms."
      steps={[
        {
          step: "01",
          title: "Engineer for produce",
          description: "Cameras and lighting were tuned to detect defects across varying product sizes and orientations, with redundancy for continuous operation."
        },
        {
          step: "02",
          title: "Train on real defects",
          description: "Deep-learning models trained on thousands of labeled images classified defects, graded quality tiers, and detected foreign material."
        },
        {
          step: "03",
          title: "Act on the results automatically",
          description: "The system connected to sorting and rejection mechanisms and to production tracking for full quality traceability."
        },
        {
          step: "04",
          title: "Surface trends in real time",
          description: "Dashboards showed quality by line and shift with supervisor alerts, then expanded from pilot to more lines and product types."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "40%",
          label: "Better defect detection",
          detail: "Consistent across all shifts and line speeds"
        },
        {
          icon: Brain,
          value: "18%",
          label: "Higher yield",
          detail: "Eliminating both missed defects and false rejections"
        },
        {
          icon: DollarSign,
          value: "$1.8M",
          label: "Annual savings",
          detail: "With customer complaints down 65%"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Reducing Manufacturing Downtime With Predictive Maintenance",
          metric: "45%",
          label: "less downtime",
          link: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "AI Demand Forecasting That Cut Inventory 35%",
          metric: "35%",
          label: "less inventory",
          link: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to make quality consistent?"
      ctaDescription="Let's talk about what computer vision could do for your yield and quality control."
    />
  );
}

export default FoodQualityAI;
