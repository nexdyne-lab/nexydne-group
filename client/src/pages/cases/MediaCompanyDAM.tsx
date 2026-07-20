import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FolderX, Search, Copy, ShieldAlert, Database, Tags, Send } from "lucide-react";

export function MediaCompanyDAM() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Centralizing 2M Media Assets With a DAM Platform | Media Case Study"
      seoDescription="A broadcaster's 2M assets were scattered with no metadata, and producers spent 45 minutes finding clips. A DAM platform cut search to 30 seconds and ended on-air rights violations."
      canonical="/cases/media-company-dam"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Media Company Centralized 2M Assets With a DAM Platform"
      subtitle="A unified digital-asset library for video, audio, and images across 12 production teams and 40 channels cut asset search time from 45 minutes to 30 seconds — and ended costly on-air rights violations."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "2M", label: "Assets Centralized" },
        { value: "30 sec", label: "Search Time (from 45 min)" },
        { value: "40", label: "Channels Automated" },
        { value: "Zero", label: "Rights Violations" }
      ]}
      clientContextTitle="Content Chaos"
      clientContextIntro="A regional broadcast media company with 12 production teams and 40 distribution channels struggled with content chaos. Its 2 million digital assets — raw footage, edited segments, B-roll, graphics, audio, and promos — were scattered across workstations, network drives, and cloud accounts with inconsistent naming and zero metadata."
      clientContextBody="Producers spent 45 minutes on average searching for clips, often giving up and re-shooting footage they knew existed. Duplicates proliferated — the same interview lived in eight folders as “final_v3” and “approved_FINAL_FINAL.” Rights management was nonexistent, causing three copyright violations in a year when expired stock footage aired live. Distribution was manual too: breaking news took 2 hours from final edit to all channels, and competitors regularly beat them to air."
      clientProfile={{
        industry: "Broadcast Media Company",
        companySize: "12 Production Teams",
        projectDuration: "40 Channels",
        additionalInfo: "Bynder",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Nobody Could Find Anything"
      challenges={[
        {
          icon: FolderX,
          title: "Assets scattered, no metadata",
          description: "2M files spread across workstations, drives, and cloud accounts with inconsistent naming."
        },
        {
          icon: Search,
          title: "45-minute searches",
          description: "Producers often gave up and re-shot footage they knew existed somewhere."
        },
        {
          icon: Copy,
          title: "Rampant duplicates",
          description: "The same clip lived in eight folders with confusing, non-authoritative version names."
        },
        {
          icon: ShieldAlert,
          title: "Three copyright violations",
          description: "With no rights tracking, expired stock footage aired live over the past year."
        }
      ]}
      approachTitle="One Repository, AI-Tagged and Automated"
      approachIntro="NEXDYNE deployed Bynder as the central DAM, migrating all 2M assets into a single repository with rich metadata, AI auto-tagging, and automated multi-channel distribution."
      steps={[
        {
          step: "01",
          title: "Capture metadata on ingest",
          description: "Automated workflows tagged content type, show, air date, talent, location, and rights and expiration at upload."
        },
        {
          step: "02",
          title: "Auto-tag with AI",
          description: "AI analyzed video to detect objects, people, locations, and speech, making everything searchable by natural language."
        },
        {
          step: "03",
          title: "Edit without leaving the timeline",
          description: "Bynder integrated with Premiere and Avid so editors accessed the DAM directly from their editing tools."
        },
        {
          step: "04",
          title: "Automate distribution",
          description: "Marking a segment ready auto-generated broadcast, web, and social variants and published to all 40 channels via API with rights logging."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Tags,
          value: "30 sec",
          label: "Asset search time",
          detail: "Down from 45 minutes, with 2M assets deduped to 1.4M"
        },
        {
          icon: Send,
          value: "15 min",
          label: "Breaking news to all channels",
          detail: "Down from 2 hours, beating competitors to air"
        },
        {
          icon: ShieldAlert,
          value: "Zero",
          label: "Rights violations since launch",
          detail: "After three on-air violations the prior year, with duplicate re-shoots eliminated"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Handling a 10x Traffic Spike During a Streaming Launch",
          metric: "10x",
          label: "traffic handled",
          link: "/cases/media-streaming-scale",
          image: "/images/cases/media-streaming-scale-hero.jpg"
        },
        {
          title: "Cutting Content Compliance Review From 3 Weeks to 4 Days",
          metric: "100%",
          label: "regulatory adherence",
          link: "/cases/healthcare-content-compliance",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to tame your content library?"
      ctaDescription="Let's talk about what a modern DAM could do for your production and distribution speed."
    />
  );
}

export default MediaCompanyDAM;
