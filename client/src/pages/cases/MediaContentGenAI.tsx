import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function MediaContentGenAI() {
  return (
    <CaseStudyTemplate
      client="Global Media Network"
      industry="Media · AI & Machine Learning"
      title="Media Network Automates Content Creation with GenAI"
      subtitle="Automated generation of summaries, social clips, and localized subtitles reduced post-production time by 70%."
      heroImage="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1600&q=80"
      challenge={`A global media network produced thousands of hours of video content weekly but struggled to repurpose it effectively for different platforms and regions. Manually creating social media clips, writing summaries, and translating subtitles was a slow, labor-intensive process that created bottlenecks and delayed content distribution.

They needed a way to scale their content operations without linearly scaling headcount, ensuring that every piece of content reached its maximum potential audience immediately after broadcast.`}
      solution={`NEXDYNE implemented a multimodal GenAI pipeline that ingested raw video footage and automatically generated derivative assets.

Intelligent Clipping used computer vision and NLP models to analyze full-length episodes and identify viral moments, automatically cropping them to vertical formats for TikTok and Instagram Reels. Automated Localization transcribed audio and generated frame-accurate subtitles in 20+ languages, using style transfer to match the tone of the original content. Metadata Enrichment used GenAI to generate SEO-optimized titles, descriptions, and tags for every asset, improving discoverability across streaming platforms.`}
      impact={`Post-production time decreased 70% as the GenAI pipeline automated the most time-intensive derivative content tasks. Content that previously required days of manual editing now reached all platforms within minutes of airing. Social media engagement increased 3x as algorithmically optimized clips and vertical-format videos captured platform-native audiences.

The network expanded to 20+ language markets instantly with automated localization, reaching previously underserved audiences without proportional increases in translation staff. Editorial teams shifted focus from repetitive reformatting to high-value creative work, and the content archive became a continuous revenue source—generating engagement and ad revenue from existing footage that previously sat unused.`}
      metrics={[
        { value: "70%", label: "Reduction in post-production time" },
        { value: "3x", label: "Increase in social media engagement" },
        { value: "20+", label: "Languages supported instantly" }
      ]}
      quote={{
        text: "We've turned our archive into a goldmine. Content that used to sit on a shelf is now generating revenue across social platforms within minutes of airing.",
        author: "Head of Digital Strategy",
        role: "Global Media Network"
      }}
      tags={["Media", "AI", "GenAI", "Content", "Automation"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
