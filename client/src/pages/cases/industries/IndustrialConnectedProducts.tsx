import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Wifi, Cog, TrendingUp, DollarSign, Shield, Users, BarChart3, Zap } from "lucide-react";

export default function IndustrialConnectedProducts() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Connected Products Platform | Manufacturing Case Study"
      seoDescription="How an industrial equipment manufacturer generated $45M in new service revenue through IoT-enabled connected products and predictive maintenance services."
      canonical="/cases/industrial-connected-products"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="Industrial Equipment Maker Launches $45M Connected Services Business"
      subtitle="How IoT-enabled products and predictive maintenance services transformed a traditional equipment manufacturer into a digital services leader."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
      metrics={[
        { value: "$45M", label: "New Service Revenue" },
        { value: "85%", label: "Customer Retention" },
        { value: "40%", label: "Service Margin" },
        { value: "15K", label: "Connected Assets" }
      ]}
      clientContextTitle="A Manufacturer Seeking Recurring Revenue"
      clientContextIntro="A global industrial equipment manufacturer sold $2B in heavy machinery annually—compressors, pumps, and turbines for oil & gas, power generation, and manufacturing. But revenue was lumpy, margins were under pressure from low-cost competitors, and customer relationships ended at the point of sale."
      clientContextBody="The company's installed base of 50,000+ machines represented an untapped opportunity. Customers struggled with unplanned downtime, inefficient operations, and reactive maintenance. The manufacturer had the engineering expertise to help but no way to deliver insights at scale. They needed to transform from a product company to a product-plus-services company."
      clientProfile={{
        industry: "Industrial Equipment",
        companySize: "$2B Annual Revenue",
        projectDuration: "24 Months",
        additionalInfo: "50,000+ Installed Base",
        additionalLabel: "Equipment in Field"
      }}
      challengeTitle="From Product Sales to Service Revenue"
      challenges={[
        {
          icon: DollarSign,
          title: "Lumpy Revenue",
          description: "Equipment sales cyclical and unpredictable—no recurring revenue stream to smooth cash flow."
        },
        {
          icon: TrendingUp,
          title: "Margin Pressure",
          description: "Low-cost competitors eroding equipment margins—needed differentiation beyond hardware."
        },
        {
          icon: Users,
          title: "Weak Relationships",
          description: "Customer relationship ended at sale—no ongoing engagement or insight into equipment performance."
        },
        {
          icon: Cog,
          title: "Untapped Expertise",
          description: "Deep engineering knowledge couldn't be delivered at scale without digital infrastructure."
        }
      ]}
      approachTitle="Building the Connected Products Platform"
      approachIntro="NexDyne designed and built an end-to-end connected products platform that enabled remote monitoring, predictive maintenance, and performance optimization services—creating a new $45M recurring revenue stream."
      steps={[
        {
          step: "01",
          title: "IoT Architecture",
          description: "Designed a scalable IoT platform that connected equipment in the field to cloud analytics. Edge gateways collected data from sensors, processed locally for real-time alerts, and transmitted to cloud for advanced analytics."
        },
        {
          step: "02",
          title: "Predictive Analytics",
          description: "Built machine learning models that predicted equipment failures 2-4 weeks in advance based on vibration patterns, temperature trends, and operating conditions. Models trained on historical failure data from service records."
        },
        {
          step: "03",
          title: "Customer Portal",
          description: "Developed a customer-facing portal that provided real-time visibility into equipment health, performance benchmarks, and maintenance recommendations. Customers could see ROI of connected services in real-time."
        },
        {
          step: "04",
          title: "Service Business Model",
          description: "Created tiered service offerings: Basic monitoring, predictive maintenance, and performance optimization. Pricing based on value delivered—uptime guarantees and efficiency improvements—not just data access."
        }
      ]}
      resultsTitle="A New Business Model Emerges"
      results={[
        {
          icon: DollarSign,
          value: "$45M",
          label: "New annual service revenue",
          detail: "Recurring revenue with 40% margins"
        },
        {
          icon: Users,
          value: "85%",
          label: "Customer retention rate",
          detail: "Connected customers rarely switch vendors"
        },
        {
          icon: Shield,
          value: "60%",
          label: "Reduction in unplanned downtime",
          detail: "For customers on predictive maintenance tier"
        },
        {
          icon: Wifi,
          value: "15K",
          label: "Connected assets",
          detail: "30% of installed base connected in 2 years"
        }
      ]}
      quote="We transformed from a company that sold equipment to one that sells outcomes. Our customers don't just buy a compressor—they buy guaranteed uptime and optimized performance. The connected services business has higher margins, stickier customers, and predictable revenue."
      quoteAuthor="Thomas Anderson"
      quoteRole="Chief Digital Officer"
      relatedStudies={[
        {
          title: "Smart Factory Transformation for Automotive",
          metric: "40%",
          label: "OEE improvement",
          link: "/cases/automotive-smart-factory",
          image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
        },
        {
          title: "AI Quality Prediction for Semiconductor Fab",
          metric: "92%",
          label: "defect prediction accuracy",
          link: "/cases/semiconductor-quality-prediction",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Launch Connected Services?"
      ctaDescription="Let's discuss how IoT can transform your product business into a services powerhouse."
    />
  );
}
