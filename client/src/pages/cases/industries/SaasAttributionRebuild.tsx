import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, AlertTriangle, DollarSign, BarChart3, TrendingDown, CheckCircle } from "lucide-react";

export default function SaasAttributionRebuild() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Attribution Rebuild Cuts Wasted Spend 24% in a Quarter | B2B SaaS Case Study"
      seoDescription="A growth-stage SaaS team ran on last-click attribution that underweighted the top of funnel. Rebuilding on first-party events and incrementality testing cut wasted spend 24% in a quarter with pipeline unchanged."
      canonical="/cases/saas-attribution-rebuild"
      industry="B2B SaaS"
      industryLink="/industries/technology-media-telecom"
      title="How a Growth-Stage SaaS Team Cut a Quarter of Its Wasted Spend by Fixing Attribution"
      subtitle="Last-click attribution was systematically crediting the wrong campaigns and hiding the cannibalistic ones. A cleaner read let the team cut spend without touching pipeline."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "24%", label: "Less Wasted Spend" },
        { value: "1 Qtr", label: "To the Cut" },
        { value: "Unchanged", label: "Pipeline" },
        { value: "First-Party", label: "Event Capture" }
      ]}
      clientContextTitle="Trusting a Model That Lied"
      clientContextIntro="A growth-stage SaaS team was allocating its marketing budget on last-click attribution — a model that credits the final touch before conversion and ignores everything that came before. It was simple, it was the default, and it was systematically steering money to the wrong places."
      clientContextBody="Last-click flattered the bottom of the funnel and starved the top, over-crediting campaigns that merely caught demand others had created. Worse, it hid cannibalization: campaigns that claimed conversions they had not actually caused looked like winners and kept their budget. The team was optimizing confidently against a distorted picture. To spend better, it needed attribution rebuilt on first-party behavioral data and validated with incrementality testing — a read clean enough to reveal which spend was actually doing work."
      clientProfile={{
        industry: "Growth-Stage SaaS",
        companySize: "~$180M ARR",
        projectDuration: "4 Months",
        additionalInfo: "Multi-Channel Demand Gen",
        additionalLabel: "Marketing Model"
      }}
      challengeTitle="Why the Budget Was Misspent"
      challenges={[
        { icon: Target, title: "Last-Click Distortion", description: "The model credited only the final touch, underweighting the top of the funnel that created demand." },
        { icon: AlertTriangle, title: "Hidden Cannibalization", description: "Campaigns claimed conversions they had not caused, looking like winners while wasting budget." },
        { icon: DollarSign, title: "Confident but Wrong Spend", description: "The team optimized decisively against a fundamentally distorted picture." },
        { icon: BarChart3, title: "No Incrementality Read", description: "There was no way to tell which spend was actually causing incremental pipeline." }
      ]}
      approachTitle="Rebuild the Read, Then Cut the Waste"
      approachIntro="We rebuilt the attribution architecture on first-party event capture and incrementality testing, and used the cleaner read to retire the campaigns the model exposed as cannibalistic — cutting wasted spend 24 percent in a single quarter with pipeline unchanged."
      steps={[
        { step: "01", title: "Capturing First-Party Events", description: "We rebuilt attribution on first-party behavioral event capture, replacing the last-click default with a full-funnel picture." },
        { step: "02", title: "Validating With Incrementality Tests", description: "We ran incrementality testing to establish which spend actually caused pipeline, not just which touch happened to be last." },
        { step: "03", title: "Exposing the Cannibalistic Campaigns", description: "The cleaner read revealed campaigns claiming conversions they had not caused, which had been protected by last-click." },
        { step: "04", title: "Cutting Without Losing Pipeline", description: "We retired the wasteful campaigns, cutting spend 24 percent in a quarter while total pipeline held flat." }
      ]}
      resultsTitle="Less Spend, Same Pipeline"
      results={[
        { icon: TrendingDown, value: "24%", label: "Less wasted spend", detail: "In a single quarter" },
        { icon: CheckCircle, value: "Unchanged", label: "Pipeline", detail: "Cuts hit waste, not demand" },
        { icon: BarChart3, value: "First-Party", label: "Attribution", detail: "Full-funnel, not last-click" },
        { icon: Target, value: "Tested", label: "Incrementality", detail: "Proved what actually drove pipeline" }
      ]}
      quote="Last-click made some of our campaigns look like heroes when they were just standing in the right place at the right time. Rebuilding attribution on real behavior and testing for incrementality let us cut a quarter of our spend in three months — and our pipeline did not move, because we only cut the waste."
      quoteAuthor="VP of Marketing"
      quoteRole="Growth-stage SaaS"
      relatedStudies={[
        { title: "How a Streaming Service Cut App Startup Time by 62% With a Native Rewrite", metric: "62%", label: "faster startup time", link: "/cases/streaming-native-rewrite", image: "/images/industries/tech-datacenter.jpg" },
        { title: "How a Medical Device App Hit Sub-100ms Response With Pure Kotlin Native", metric: "<100ms", label: "response time", link: "/cases/medical-native-kotlin", image: "/images/cases/medical-native-kotlin-hero.jpg" }
      ]}
      ctaTitle="Is last-click hiding your wasted spend?"
      ctaDescription="Let's rebuild attribution on first-party data and incrementality so you can cut waste, not pipeline."
    />
  );
}
