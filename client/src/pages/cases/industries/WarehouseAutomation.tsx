import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, Cog, TrendingUp, DollarSign, Users, Clock, Target, Zap } from "lucide-react";

export default function WarehouseAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Warehouse Automation | Logistics Case Study"
      seoDescription="How a retailer improved warehouse productivity by 45% through robotics, AI-powered optimization, and intelligent automation."
      canonical="/cases/warehouse-automation"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="Retailer Improves Warehouse Productivity 45% with Automation"
      subtitle="How robotics, AI-powered slotting, and intelligent automation transformed fulfillment operations to meet e-commerce demand."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
      metrics={[
        { value: "45%", label: "Productivity Gain" },
        { value: "99.8%", label: "Order Accuracy" },
        { value: "3x", label: "Throughput Increase" },
        { value: "$60M", label: "Annual Savings" }
      ]}
      clientContextTitle="A Retailer Overwhelmed by E-Commerce Growth"
      clientContextIntro="A major retailer's e-commerce business had tripled in three years, but warehouse operations couldn't keep pace. Order fulfillment was manual and labor-intensive. During peak seasons, the company couldn't hire enough workers. Customers waited days for orders while competitors offered same-day delivery."
      clientContextBody="Warehouses were designed for pallet-in, pallet-out operations, not each-pick e-commerce fulfillment. Workers walked miles per shift. Slotting was static—fast-moving items buried in the back. The retailer needed to transform operations to meet the speed and scale of modern e-commerce."
      clientProfile={{
        industry: "Retail",
        companySize: "10 Fulfillment Centers",
        projectDuration: "24 Months",
        additionalInfo: "500K Orders/Day",
        additionalLabel: "Peak Volume"
      }}
      challengeTitle="Manual Operations at E-Commerce Scale"
      challenges={[
        {
          icon: Users,
          title: "Labor Constraints",
          description: "Can't hire enough workers for peak seasons—fulfillment capacity capped."
        },
        {
          icon: Clock,
          title: "Slow Fulfillment",
          description: "2-3 day fulfillment while competitors offer same-day—losing customers."
        },
        {
          icon: Package,
          title: "Manual Picking",
          description: "Workers walking miles per shift—inefficient, error-prone, exhausting."
        },
        {
          icon: Target,
          title: "Static Slotting",
          description: "Product placement based on history, not current demand—wasted travel."
        }
      ]}
      approachTitle="Intelligent Warehouse Automation"
      approachIntro="NexDyne designed and implemented a comprehensive warehouse automation program: goods-to-person robotics, AI-powered slotting, and intelligent orchestration that transformed fulfillment operations."
      steps={[
        {
          step: "01",
          title: "Robotics Deployment",
          description: "Implemented goods-to-person robotics that brought products to workers instead of workers walking to products. Reduced travel time by 80% and increased picks per hour by 3x."
        },
        {
          step: "02",
          title: "AI-Powered Slotting",
          description: "Deployed ML models that continuously optimized product placement based on demand patterns, order profiles, and picking efficiency. Fast-moving items automatically positioned for fastest access."
        },
        {
          step: "03",
          title: "Intelligent Orchestration",
          description: "Built a warehouse execution system that optimized work allocation, wave planning, and resource deployment in real-time. Right work to right worker at right time."
        },
        {
          step: "04",
          title: "Predictive Operations",
          description: "Implemented demand forecasting that predicted order volumes and enabled proactive staffing, inventory positioning, and capacity planning. No more scrambling during peaks."
        }
      ]}
      resultsTitle="Fulfillment Excellence"
      results={[
        {
          icon: TrendingUp,
          value: "45%",
          label: "Productivity improvement",
          detail: "Units per labor hour"
        },
        {
          icon: Target,
          value: "99.8%",
          label: "Order accuracy",
          detail: "Up from 98.5%"
        },
        {
          icon: Zap,
          value: "3x",
          label: "Throughput increase",
          detail: "Same footprint, 3x volume"
        },
        {
          icon: DollarSign,
          value: "$60M",
          label: "Annual savings",
          detail: "From labor and efficiency gains"
        }
      ]}
      quote="Automation transformed our fulfillment capability. We went from struggling to keep up with demand to leading the industry in speed and accuracy. Our workers now manage robots instead of walking miles. We can handle 3x the volume in the same space. E-commerce growth is now an opportunity, not a crisis."
      quoteAuthor="Sarah Johnson"
      quoteRole="SVP of Operations"
      relatedStudies={[
        {
          title: "Freight Network Optimization",
          metric: "18%",
          label: "cost reduction",
          link: "/cases/freight-optimization",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
        },
        {
          title: "Last-Mile Delivery Optimization",
          metric: "30%",
          label: "cost reduction",
          link: "/cases/last-mile-optimization",
          image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Automate Your Warehouse?"
      ctaDescription="Let's discuss how automation can transform your fulfillment operations."
    />
  );
}
