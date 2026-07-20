import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ClipboardList, PackageX, WifiOff, Timer, ScanBarcode, RefreshCw, Gauge, DollarSign } from "lucide-react";

export function RetailInventoryApp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building a Custom Inventory App That Cut Stockouts 40% | Retail Case Study"
      seoDescription="An 85-store outdoor retailer's associates spent 3–4 hours a day on manual counts with 84% accuracy. A mobile inventory app lifted accuracy to 98.5% and cut stockouts 40%."
      canonical="/cases/retail-inventory-app"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Retailer Built a Custom Inventory App and Cut Stockouts 40%"
      subtitle="A multi-location retailer deployed a mobile inventory app with real-time sync, barcode scanning, and automated reorder triggers across 85 stores — lifting accuracy to 98.5% and sales 8%."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "40%", label: "Fewer Stockouts" },
        { value: "98.5%", label: "Inventory Accuracy" },
        { value: "8%", label: "Higher Sales" }
      ]}
      clientContextTitle="Counting by Hand"
      clientContextIntro="A specialty outdoor gear retailer running 85 stores across the Western US struggled with chronic inventory accuracy. Its legacy system required manual data entry on back-office desktops, causing delayed updates and frequent gaps between records and actual shelf stock."
      clientContextBody="Associates spent 3–4 hours a day on manual counts, pulling them away from customers, and stockouts hit 22% of popular items during peak seasons. The retailer needed a mobile-first solution for real-time updates from the sales floor, streamlined receiving and cycle counting, and automated reorders — integrated with NetSuite, working offline in stores with poor connectivity, with fast barcode scanning. With peak season four months out, it needed rapid development and rollout."
      clientProfile={{
        industry: "Outdoor Gear Retailer",
        companySize: "85 Stores",
        projectDuration: "3.5-Month Build",
        additionalInfo: "NetSuite ERP",
        additionalLabel: "Integration"
      }}
      challengeTitle="Why Inventory Was Unreliable"
      challenges={[
        {
          icon: ClipboardList,
          title: "3–4 hours a day counting",
          description: "Manual, back-office data entry pulled associates off the floor and away from customers."
        },
        {
          icon: PackageX,
          title: "22% peak-season stockouts",
          description: "Delayed updates meant popular items ran out with no timely reorder signal."
        },
        {
          icon: WifiOff,
          title: "Unreliable connectivity",
          description: "Stores needed the app to work offline without losing data during network interruptions."
        },
        {
          icon: Timer,
          title: "A four-month deadline",
          description: "The solution had to build and roll out across 85 stores before peak season."
        }
      ]}
      approachTitle="An Offline-First Mobile App"
      approachIntro="NEXDYNE designed and built a custom iOS and Android tablet app optimized for rugged sales-floor devices — with barcode scanning, guided receiving, cycle counting, and automated reorder recommendations synced to NetSuite."
      steps={[
        {
          step: "01",
          title: "Scan, adjust, sync in real time",
          description: "Barcode scanning gave instant lookup, and inventory adjustments synchronized live with NetSuite via SuiteScript APIs."
        },
        {
          step: "02",
          title: "Build offline-first",
          description: "React Native with intelligent sync queuing kept the app fully usable through intermittent connectivity, with zero data loss."
        },
        {
          step: "03",
          title: "Automate the reorder point",
          description: "Custom algorithms calculated optimal reorder points from sales velocity, seasonality, and supplier lead times."
        },
        {
          step: "04",
          title: "Right-size permissions",
          description: "Role-based access let managers approve large adjustments while every associate could run basic counts and updates."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "98.5%",
          label: "Inventory accuracy",
          detail: "Up from 84%, with stockouts on key items down 40%"
        },
        {
          icon: Timer,
          value: "45 min",
          label: "Daily inventory time",
          detail: "Down from 3–4 hours, freeing associates for customers"
        },
        {
          icon: DollarSign,
          value: "8%",
          label: "Higher sales",
          detail: "With 1,850 stockouts prevented and inventory labor sharply reduced"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Stockouts 35% With ML Demand Forecasting",
          metric: "35%",
          label: "fewer stockouts",
          link: "/cases/retail-demand-forecasting",
          image: "/images/cases/retail-demand-forecasting-hero.jpg"
        },
        {
          title: "Automating a Retailer's Supply Chain With RPA",
          metric: "45%",
          label: "faster processing",
          link: "/cases/global-retailer",
          image: "/images/cases/global-retailer-hero.jpg"
        }
      ]}
      ctaTitle="Ready to get inventory right?"
      ctaDescription="Let's talk about what a purpose-built mobile app could do for your accuracy and labor cost."
    />
  );
}

export default RetailInventoryApp;
