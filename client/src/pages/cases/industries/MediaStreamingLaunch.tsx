import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Video, Users, Star, DollarSign, Target, Zap } from "lucide-react";

export default function MediaStreamingLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a Streaming Service That Won 750,000 Subscribers | Technology, Media & Telecom Case Study"
      seoDescription="A regional broadcaster was losing viewers to national streamers and had no platform of its own. Building a streaming service around its content brought in 750,000 subscribers in the first year."
      canonical="/cases/media-streaming-launch"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Regional Broadcaster Launched Streaming and Won 750,000 Subscribers"
      subtitle="A respected broadcaster had the programming audiences wanted but no way to deliver it directly. Building a streaming service of its own turned a shrinking cable audience into a growing digital one."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "750K", label: "Subscribers in Year 1" },
        { value: "4.2hrs", label: "Weekly Engagement" },
        { value: "92%", label: "Retention Rate" },
        { value: "Ahead", label: "Of the Year-1 Business Plan" }
      ]}
      clientContextTitle="A Strong Catalogue With No Way to Reach Viewers Directly"
      clientContextIntro="A regional broadcaster had spent decades building a library of well-loved programming and a loyal audience. But that audience was moving online faster than the company could follow. Viewers were cancelling cable in favor of streaming, and the broadcaster had no service of its own to keep them. Its content was strong; its ability to deliver it directly to a viewer's television or phone was not."
      clientContextBody="Earlier attempts at a digital product had disappointed. The app was slow, the recommendations were crude, and technical faults drove people away almost as quickly as they arrived. The organization had been built to make and broadcast programs, not to run a consumer technology product, and it lacked the engineering and data skills that a modern streaming service depends on. Leadership decided that owning the direct relationship with its viewers was no longer optional — and that the company would have to build the capability to do it, largely from scratch."
      clientProfile={{
        industry: "Media & Entertainment",
        companySize: "Regional Broadcaster",
        projectDuration: "18 Months",
        additionalInfo: "~15,000 Content Hours",
        additionalLabel: "Programming Library"
      }}
      challengeTitle="Rich in Content, Short on Capability"
      challenges={[
        {
          icon: Video,
          title: "No Platform of Its Own",
          description: "The existing app could not deliver the fast, reliable experience viewers now expected as standard, and every fault cost the company a customer."
        },
        {
          icon: Users,
          title: "Built for Broadcast, Not Product",
          description: "The organization had few of the product, engineering and data people a consumer streaming service needs to run day to day."
        },
        {
          icon: Target,
          title: "Competing Against Bigger Budgets",
          description: "National streaming services had years of head start and far deeper pockets to spend on technology and marketing."
        },
        {
          icon: Zap,
          title: "One Chance to Get Launch Right",
          description: "The service had to open across the broadcaster's core markets at once and hold up under opening-week demand, with little room for a stumble."
        }
      ]}
      approachTitle="Building a Streaming Service Around the Content"
      approachIntro="Working alongside the broadcaster's leaders, we designed and built the streaming service end to end — the underlying platform, the viewing experience, the recommendations and the launch itself — so the company could finally put its programming in front of viewers on its own terms."
      steps={[
        {
          step: "01",
          title: "A Platform Built to Scale",
          description: "We built the service on modern cloud foundations so it could grow with demand and add features quickly. Programs started playing in under two seconds, and the platform was sized to absorb the traffic spikes that come with a launch and a popular new release."
        },
        {
          step: "02",
          title: "Recommendations People Actually Use",
          description: "We built a recommendation system that learned what each viewer enjoyed and shaped their home screen, rows and search around it. Within months, roughly a third of all viewing was coming from what the service suggested — on a par with the larger streamers."
        },
        {
          step: "03",
          title: "An Experience That Feels Premium",
          description: "We designed a clean, consistent experience across phone, tablet and television, with the features viewers now take for granted — separate profiles, downloads for offline viewing and the ability to pick up exactly where they left off."
        },
        {
          step: "04",
          title: "A Launch That Held Up",
          description: "We coordinated the launch across the broadcaster's core markets, loaded the full library, and stood ready as demand climbed through the opening weeks. The service stayed fast and stable when it mattered most."
        }
      ]}
      resultsTitle="A Direct Audience, Built From Scratch"
      results={[
        {
          icon: Users,
          value: "750K",
          label: "Subscribers in year one",
          detail: "Half again more than the 500,000 target"
        },
        {
          icon: Video,
          value: "4.2hrs",
          label: "Weekly engagement",
          detail: "Per subscriber — above the industry average"
        },
        {
          icon: Star,
          value: "92%",
          label: "Monthly retention",
          detail: "Among the best in its category"
        },
        {
          icon: DollarSign,
          value: "Ahead",
          label: "Of the year-one business plan",
          detail: "Subscription revenue outpacing the launch case"
        }
      ]}
      quote="For the first time we own the relationship with the people who watch us, rather than renting it from someone else's platform. The service is fast, the recommendations keep people coming back, and the experience holds its own against far bigger names. We stopped watching our audience drift away and started growing it again."
      quoteAuthor="President, Direct-to-Consumer"
      quoteRole="Regional media and entertainment company"
      relatedStudies={[
        {
          title: "Tripling a Software Company's Release Speed",
          metric: "3x",
          label: "faster releases",
          link: "/cases/tech-engineering-transformation",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "Cutting a Regional Carrier's Churn by 40%",
          metric: "40%",
          label: "lower customer churn",
          link: "/cases/telecom-customer-experience",
          image: "/images/cases/telecom-customer-experience-hero.jpg"
        }
      ]}
      ctaTitle="Ready to reach your audience directly?"
      ctaDescription="Let's talk about building a digital product that puts your content in front of the people who want it."
    />
  );
}
