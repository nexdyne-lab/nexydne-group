import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function MediaCompanyDAM() {
  return (
    <CaseStudyTemplate
      client="Regional Broadcast Media Company"
      industry="Media · Content Management"
      title="Media Company Centralizes 2M Assets with DAM Platform"
      subtitle="Unified digital asset library for video, audio, and image content across 12 production teams and 40 distribution channels, reducing asset search time from 45 minutes to 30 seconds."
      heroImage="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80"
      challenge={`A regional broadcast media company with 12 production teams and 40 distribution channels (linear TV, streaming platforms, social media, syndication partners) struggled with content chaos. Their 2 million digital assets—raw footage, edited segments, B-roll, graphics, audio clips, and promotional materials—were scattered across local workstations, network drives, and cloud storage accounts with inconsistent naming conventions and zero metadata.

Producers spent 45 minutes on average searching for specific clips, often giving up and re-shooting footage they knew existed somewhere. Duplicate assets proliferated—the same interview clip existed in 8 different folders with names like "final_v3.mp4" and "approved_FINAL_FINAL.mp4." Rights management was nonexistent, leading to 3 copyright violations in the past year when expired stock footage aired on live broadcasts.

Distribution workflows were manual and error-prone. Editors exported videos in multiple formats for different platforms (1080p for broadcast, 720p for web, vertical crops for social), uploaded to each destination manually, and hoped they didn't miss a channel. When breaking news required rapid content distribution, the process took 2 hours from final edit to all channels live—competitors beat them to air regularly.`}
      solution={`NEXDYNE deployed Bynder as the centralized digital asset management platform, migrating all 2M assets from scattered storage locations into a single repository with rich metadata tagging. We built automated ingestion workflows that capture metadata at upload time: content type (raw footage, edited segment, B-roll), show/series, air date, talent names, location, usage rights, and expiration dates for licensed content.

AI-powered auto-tagging analyzes video content to detect objects, people, locations, and spoken words, generating searchable metadata automatically. Producers search by natural language queries ("interview with mayor about budget crisis last week") and get relevant clips instantly. Advanced filters narrow results by rights status (cleared for broadcast, web-only, expired), resolution, aspect ratio, and duration.

We integrated Bynder with their video editing tools (Adobe Premiere, Avid Media Composer) so editors access the DAM directly from their timeline without switching applications. Distribution workflows automate transcoding and publishing: editors mark a segment "ready for distribution," and the system automatically generates format variants (broadcast, web, social), uploads to all 40 channels via API, and logs distribution metadata for rights tracking and analytics.`}
      impact={`Asset search time dropped from 45 minutes to 30 seconds. Producers find exactly the clip they need using natural language search, and AI-generated metadata surfaces relevant content they didn't know existed. Duplicate assets were eliminated during migration—the 2M assets consolidated to 1.4M unique files, freeing 12TB of storage and reducing confusion about which version is authoritative.

Distribution speed improved dramatically. Breaking news content now reaches all 40 channels in 15 minutes from final edit—down from 2 hours. Automated transcoding and API-based publishing eliminate manual uploads. The company beat competitors to air on 8 major breaking news stories in the first 6 months, increasing viewership and ad revenue.

Rights management prevented costly violations. The system tracks usage rights and expiration dates for all licensed content, automatically flagging assets that are about to expire and preventing expired content from being distributed. Zero copyright violations occurred in the first year. Annual savings totaled $3.2M: reduced storage costs ($400K), eliminated duplicate content production ($1.8M), and avoided rights violation penalties ($1M).`}
      metrics={[
        { value: "2M", label: "Assets centralized" },
        { value: "30 sec", label: "Asset search time (from 45 min)" },
        { value: "40", label: "Distribution channels automated" },
        { value: "$3.2M", label: "Annual savings" }
      ]}
      tags={["Media", "Content Management", "DAM", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
