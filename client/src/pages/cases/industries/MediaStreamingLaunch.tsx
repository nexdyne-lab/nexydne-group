import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Video, Users, TrendingUp, Globe, Zap, Target, DollarSign, Star } from "lucide-react";

export default function MediaStreamingLaunch() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Streaming Platform Launch | Media Case Study"
      seoDescription="How a media company launched a streaming platform that acquired 8M subscribers in 12 months through personalized content and seamless user experience."
      canonical="/cases/media-streaming-launch"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="Media Company Launches Streaming Platform, Acquires 8M Subscribers"
      subtitle="How a traditional media company built and launched a competitive streaming service that captured market share from established players."
      heroImage="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1920&q=80"
      metrics={[
        { value: "8M", label: "Subscribers in Year 1" },
        { value: "4.2hrs", label: "Weekly Engagement" },
        { value: "92%", label: "Retention Rate" },
        { value: "$180M", label: "First Year Revenue" }
      ]}
      clientContextTitle="A Media Giant Entering the Streaming Wars"
      clientContextIntro="A major media conglomerate with decades of premium content faced an existential threat. Cord-cutting was accelerating, linear TV ratings were declining, and streaming competitors were capturing audience attention. The company had the content library but lacked the technology platform and digital capabilities to compete."
      clientContextBody="Previous digital initiatives had underperformed—a clunky app, poor recommendations, and technical issues that frustrated users. The company needed to launch a world-class streaming platform that could compete with tech giants, leveraging its content advantage while building digital capabilities from scratch."
      clientProfile={{
        industry: "Media & Entertainment",
        companySize: "$15B Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "50,000+ Content Hours",
        additionalLabel: "Content Library"
      }}
      challengeTitle="Content Rich, Technology Poor"
      challenges={[
        {
          icon: Video,
          title: "Platform Gap",
          description: "No modern streaming infrastructure—legacy systems couldn't deliver the experience users expected."
        },
        {
          icon: Users,
          title: "Digital Capabilities",
          description: "Organization built for linear TV—lacked product, engineering, and data science talent for streaming."
        },
        {
          icon: Target,
          title: "Competitive Pressure",
          description: "Established streamers with years of head start and billions in technology investment."
        },
        {
          icon: Globe,
          title: "Global Scale",
          description: "Needed to launch in 50+ countries simultaneously with localized content and experience."
        }
      ]}
      approachTitle="Building a World-Class Streaming Platform"
      approachIntro="NexDyne partnered with the media company to design, build, and launch a streaming platform from the ground up—technology infrastructure, user experience, personalization engine, and go-to-market strategy."
      steps={[
        {
          step: "01",
          title: "Platform Architecture",
          description: "Designed a cloud-native streaming platform built for global scale. Microservices architecture enabled rapid feature development. CDN strategy ensured sub-2-second start times worldwide. Built for 10M+ concurrent streams."
        },
        {
          step: "02",
          title: "Personalization Engine",
          description: "Developed AI-powered recommendation system that learned user preferences from viewing behavior. Personalized home screen, content rows, and search results. Achieved 35% of viewing from recommendations—matching industry leaders."
        },
        {
          step: "03",
          title: "User Experience Design",
          description: "Created an intuitive, visually stunning interface across all devices. Seamless experience from mobile to TV. Features like profiles, downloads, and continue watching that users expected from premium services."
        },
        {
          step: "04",
          title: "Launch Execution",
          description: "Orchestrated simultaneous launch in 50+ countries with localized content, pricing, and marketing. Managed content ingestion of 50,000+ hours. Scaled infrastructure to handle launch-day traffic spikes."
        }
      ]}
      resultsTitle="A Successful Market Entry"
      results={[
        {
          icon: Users,
          value: "8M",
          label: "Subscribers in year one",
          detail: "Exceeding 5M target by 60%"
        },
        {
          icon: Video,
          value: "4.2hrs",
          label: "Weekly engagement",
          detail: "Per subscriber—above industry average"
        },
        {
          icon: Star,
          value: "92%",
          label: "Monthly retention rate",
          detail: "Best-in-class subscriber retention"
        },
        {
          icon: DollarSign,
          value: "$180M",
          label: "First year revenue",
          detail: "Ahead of business case projections"
        }
      ]}
      quote="We went from zero to 8 million subscribers in 12 months. The platform performs flawlessly, the recommendations keep users engaged, and the experience rivals the best in the industry. We're not just in the streaming wars—we're winning."
      quoteAuthor="Michael Torres"
      quoteRole="President, Direct-to-Consumer"
      relatedStudies={[
        {
          title: "Engineering Transformation for Tech Company",
          metric: "3x",
          label: "faster release velocity",
          link: "/cases/tech-engineering-transformation",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
        },
        {
          title: "Customer Experience Transformation for Telecom",
          metric: "40%",
          label: "reduction in churn",
          link: "/cases/telecom-customer-experience",
          image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Launch Your Digital Platform?"
      ctaDescription="Let's discuss how we can help you build and scale digital products."
    />
  );
}
