import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingUp, Languages, Scissors, Subtitles, Tags } from "lucide-react";

export default function MediaContentGenAI() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating Content Creation with GenAI | Media & Technology Case Study"
      seoDescription="A global media network produced thousands of hours of video but couldn't repurpose it fast enough. A multimodal GenAI pipeline cut post-production time 70% and tripled engagement."
      canonical="/case-studies/media-content-production"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Global Media Network Automates Content Creation with GenAI"
      subtitle="Automated generation of summaries, social clips, and localized subtitles reduced post-production time 70% — turning an archive that sat on the shelf into a continuous revenue source."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "70%", label: "Faster Post-Production" },
        { value: "3x", label: "More Social Engagement" },
        { value: "20+", label: "Languages Instantly" }
      ]}
      clientContextTitle="Thousands of Hours, Stuck in One Format"
      clientContextIntro="A global media network produced thousands of hours of video content weekly but struggled to repurpose it for different platforms and regions. Manually creating social clips, writing summaries, and translating subtitles was slow and labor-intensive, creating bottlenecks that delayed distribution."
      clientContextBody="The network needed to scale content operations without linearly scaling headcount — ensuring every piece reached its maximum audience immediately after broadcast, on every platform and in every market, rather than days later when the moment had passed."
      clientProfile={{
        industry: "Global Media Network",
        companySize: "Thousands of Hours / Week",
        projectDuration: "Multimodal Pipeline",
        additionalInfo: "20+ Languages",
        additionalLabel: "Localization Reach"
      }}
      challengeTitle="Why Content Couldn't Scale"
      challenges={[
        {
          icon: Scissors,
          title: "Manual clip creation",
          description: "Cutting social-ready clips from full episodes was slow, hand-crafted work that couldn't keep pace with output."
        },
        {
          icon: Subtitles,
          title: "Slow, costly localization",
          description: "Translating and subtitling content for each region was labor-intensive, limiting how many markets a title could reach."
        },
        {
          icon: Clock,
          title: "Distribution bottlenecks",
          description: "By the time derivative assets were ready, the moment had often passed and the content's reach was diminished."
        },
        {
          icon: Tags,
          title: "Weak discoverability",
          description: "Inconsistent titles, descriptions, and tags left valuable content hard to find across streaming platforms."
        }
      ]}
      approachTitle="A Multimodal GenAI Pipeline"
      approachIntro="NEXDYNE implemented a multimodal GenAI pipeline that ingested raw footage and automatically generated the derivative assets that used to take days by hand."
      steps={[
        {
          step: "01",
          title: "Intelligent clipping",
          description: "Vision and NLP models analyzed full episodes to find viral moments and auto-cropped them to vertical formats for TikTok and Instagram Reels."
        },
        {
          step: "02",
          title: "Automated localization",
          description: "The pipeline transcribed audio and generated frame-accurate subtitles in 20+ languages, using style transfer to match the original tone."
        },
        {
          step: "03",
          title: "Metadata enrichment",
          description: "GenAI produced SEO-optimized titles, descriptions, and tags for every asset, improving discoverability across streaming platforms."
        },
        {
          step: "04",
          title: "Free the editors for creative work",
          description: "With reformatting automated, editorial teams shifted from repetitive tasks to high-value creative work — and the archive became a continuous revenue source."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Clock,
          value: "70%",
          label: "Faster post-production",
          detail: "Content reached every platform within minutes of airing"
        },
        {
          icon: TrendingUp,
          value: "3x",
          label: "More social engagement",
          detail: "From platform-native, vertical-format clips"
        },
        {
          icon: Languages,
          value: "20+",
          label: "Language markets instantly",
          detail: "Reaching audiences without proportional translation staff"
        }
      ]}
      quote="We've turned our archive into a goldmine. Content that used to sit on a shelf is now generating revenue across social platforms within minutes of airing."
      quoteAuthor="Head of Digital Strategy"
      quoteRole="Global Media Network"
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Ensuring Vaccine Safety with IoT Cold Chain",
          metric: "90%",
          label: "less spoilage",
          link: "/case-studies/logistics-cold-chain",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to turn your archive into a revenue engine?"
      ctaDescription="Let's talk about what a GenAI content pipeline could unlock from what you already own."
    />
  );
}
