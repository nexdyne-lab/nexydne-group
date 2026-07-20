import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, ServerCrash, Timer, TrendingUp, Network, BrainCircuit, ShieldCheck, DollarSign } from "lucide-react";

export function MediaStreamingScale() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Handling a 10x Traffic Spike During a Streaming Launch | Media Case Study"
      seoDescription="StreamVault's infrastructure was built for 50K concurrent users but faced 500K+ at launch. Elastic multi-CDN infrastructure handled 10x traffic with zero downtime in just 6 weeks."
      canonical="/cases/media-streaming-scale"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Streaming Platform Handled a 10x Traffic Spike at Launch"
      subtitle="StreamVault deployed elastic, multi-CDN infrastructure with predictive auto-scaling — delivering broadcast-quality streaming to 520,000 concurrent viewers with zero downtime, built in 6 weeks."
      heroImage="/images/cases/media-streaming-scale-hero.jpg"
      metrics={[
        { value: "10x", label: "Traffic Spike Handled" },
        { value: "Zero", label: "Downtime at Launch" },
        { value: "45%", label: "More Subscriber Conversions" },
        { value: "6 wks", label: "Implementation" }
      ]}
      clientContextTitle="One Shot at Launch"
      clientContextIntro="StreamVault, a premium streaming platform, was preparing to launch an exclusive documentary series with massive pre-launch buzz. Marketing projected 500,000 concurrent viewers at launch — and acknowledged social engagement could push it far higher."
      clientContextBody="The existing infrastructure, designed for steady-state traffic of 50,000 concurrent users, had never been tested at that scale, and previous high-traffic events caused buffering and degradation. A failed launch would damage the brand and hand competitors an opening. With only 8 weeks to go, StreamVault needed to transform its infrastructure to handle unpredictable spikes at broadcast quality — without disrupting the existing service."
      clientProfile={{
        industry: "Streaming Platform",
        companySize: "160 Employees",
        projectDuration: "6-Week Build",
        additionalInfo: "Multi-CDN",
        additionalLabel: "Architecture"
      }}
      challengeTitle="Why the Launch Was a Risk"
      challenges={[
        {
          icon: Users,
          title: "10x projected demand",
          description: "500,000+ concurrent viewers against infrastructure built for 50,000 steady-state users."
        },
        {
          icon: ServerCrash,
          title: "A history of degradation",
          description: "Previous high-traffic events had caused buffering and service degradation."
        },
        {
          icon: Timer,
          title: "An 8-week window",
          description: "The transformation had to land before launch without disrupting the live service."
        },
        {
          icon: TrendingUp,
          title: "Unpredictable spikes",
          description: "Social engagement meant demand could surge well beyond even the high projection."
        }
      ]}
      approachTitle="Elastic, Multi-CDN, Predictive"
      approachIntro="NEXDYNE designed a globally distributed, auto-scaling infrastructure that could handle 10x normal traffic at sub-second response times — delivered in just 6 weeks."
      steps={[
        {
          step: "01",
          title: "Go multi-CDN",
          description: "Intelligent routing across CloudFront, Fastly, and Akamai maximized cache hit rates and provided failover redundancy."
        },
        {
          step: "02",
          title: "Predict demand and scale ahead",
          description: "ML-powered auto-scaling anticipated demand from real-time social and pre-launch engagement signals."
        },
        {
          step: "03",
          title: "Push logic to the edge",
          description: "Lambda@Edge handled personalization and authentication at the edge, cutting origin load 80%, with adaptive bitrate protecting quality."
        },
        {
          step: "04",
          title: "Test to destruction",
          description: "Load tests simulated 1M concurrent users and chaos exercises hit CDN failover, origin failures, and network partitions before a 24/7 launch war room."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "520K",
          label: "Peak concurrent viewers",
          detail: "10x normal, with 99.99% availability and zero buffering"
        },
        {
          icon: TrendingUp,
          value: "45%",
          label: "More subscriber conversions",
          detail: "With 94% positive social sentiment"
        },
        {
          icon: DollarSign,
          value: "35%",
          label: "Lower CDN costs",
          detail: "With the platform now built for 15x baseline capacity"
        }
      ]}
      quote="We had one shot to get this launch right. NEXDYNE delivered infrastructure that handled 10x our normal traffic without a single hiccup. Our viewers had a flawless experience, and the positive buzz drove a 45% increase in conversions. They turned what could have been a disaster into our biggest success."
      quoteAuthor="Sarah Chen"
      quoteRole="Chief Technology Officer, StreamVault"
      relatedStudies={[
        {
          title: "Centralizing 2M Media Assets With a DAM Platform",
          metric: "$3.2M",
          label: "annual savings",
          link: "/cases/media-company-dam",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Reaching 99.99% Uptime After Migrating to AWS",
          metric: "99.99%",
          label: "uptime",
          link: "/cases/healthcare-cloud-migration",
          image: "/images/cases/healthcare-cloud-migration-hero.jpg"
        }
      ]}
      ctaTitle="Ready for your make-or-break moment?"
      ctaDescription="Let's talk about what elastic infrastructure could do for your biggest traffic events."
    />
  );
}

export default MediaStreamingScale;
