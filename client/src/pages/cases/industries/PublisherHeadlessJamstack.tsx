import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, DollarSign, Target, Zap, TrendingUp, CheckCircle } from "lucide-react";

export default function PublisherHeadlessJamstack() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Publisher Cuts Page Load Time in Half With Jamstack Headless Rebuild | Headless CMS Case Study"
      seoDescription="A digital publisher's slow site hurt engagement and Core Web Vitals. A headless CMS plus static Jamstack delivery halved page load time, restored editorial velocity, and unlocked new monetization surfaces."
      canonical="/cases/publisher-headless-jamstack"
      industry="Media"
      industryLink="/industries/technology-media-telecom"
      title="How a Digital Publisher Halved Page Load Time With a Jamstack Rebuild"
      subtitle="A slow, aging site was costing the publisher readers, search ranking, and ad revenue. A headless CMS with static delivery made pages fast again — and opened new ways to monetize."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "50%", label: "Faster Page Loads" },
        { value: "Better", label: "Core Web Vitals" },
        { value: "Restored", label: "Editorial Velocity" },
        { value: "New", label: "Monetization Surfaces" }
      ]}
      clientContextTitle="A Slow Site Bleeding Readers"
      clientContextIntro="A digital publisher's website had grown slow. Pages took too long to load, which drove readers away, dragged down its Core Web Vitals and search ranking, and cut into the ad revenue that depends on both traffic and engagement. The aging platform also made it hard for editors to publish quickly."
      clientContextBody="For a publisher, speed is revenue. Slow pages lose readers before the content loads, hurt the search visibility that drives discovery, and reduce the ad impressions that fund the business. The monolithic platform rendered pages slowly and coupled editorial to delivery, so improving performance and improving editorial velocity pulled against each other. The publisher needed to rebuild on a headless CMS with static Jamstack delivery — pre-rendering pages for speed while decoupling editorial — to restore performance, ranking, and the ability to launch new monetization surfaces."
      clientProfile={{
        industry: "Digital Publisher",
        companySize: "~$180M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "Headless + Jamstack Rebuild",
        additionalLabel: "Publishing Platform"
      }}
      challengeTitle="Why Speed Was Costing Revenue"
      challenges={[
        { icon: Clock, title: "Slow Page Loads", description: "Pages loaded too slowly, driving readers away before content appeared." },
        { icon: TrendingDown, title: "Weak Core Web Vitals", description: "Poor performance dragged down search ranking and discovery." },
        { icon: DollarSign, title: "Lost Ad Revenue", description: "Fewer readers and impressions cut into the ad revenue the business depends on." },
        { icon: Target, title: "Editorial Coupled to Delivery", description: "The monolith tied publishing to rendering, so speed and velocity pulled against each other." }
      ]}
      approachTitle="Rebuild Headless on Jamstack"
      approachIntro="We rebuilt the publisher on a headless CMS with static Jamstack delivery — pre-rendering pages for speed — halving page load time, improving Core Web Vitals, restoring editorial velocity, and unlocking new monetization surfaces."
      steps={[
        { step: "01", title: "Decoupling Editorial From Delivery", description: "We moved to a headless CMS so editors could publish independently of how pages were rendered." },
        { step: "02", title: "Adding Static Jamstack Delivery", description: "We pre-rendered pages statically for near-instant loads, transforming performance and Core Web Vitals." },
        { step: "03", title: "Restoring Editorial Velocity", description: "With editorial decoupled, the team could publish quickly again on a modern workflow." },
        { step: "04", title: "Unlocking Monetization", description: "The composable architecture let the publisher launch new monetization surfaces the old platform could not support." }
      ]}
      resultsTitle="Fast Pages, More Revenue"
      results={[
        { icon: Zap, value: "50%", label: "Faster loads", detail: "Page load time halved" },
        { icon: TrendingUp, value: "Better", label: "Web Vitals", detail: "Search ranking restored" },
        { icon: CheckCircle, value: "Velocity", label: "Editorial", detail: "Publishing quick again" },
        { icon: DollarSign, value: "New", label: "Monetization", detail: "Surfaces the old stack couldn't run" }
      ]}
      quote="Our pages were slow, and for a publisher slow means fewer readers, worse search ranking, and less ad revenue — all at once. Rebuilding on a headless CMS with static delivery cut load times in half, brought our Core Web Vitals back, and let our editors move fast again. It even opened up new ways to monetize we simply could not run before."
      quoteAuthor="Chief Product Officer"
      quoteRole="Digital publisher"
      relatedStudies={[
        { title: "How a Specialty Retailer Lifted Conversion 31% With Audience-Driven Personalization", metric: "31%", label: "higher conversion", link: "/cases/retail-dxp-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a National Insurer Halved Publishing Time With a Composable Migration", metric: "50%+", label: "faster publishing", link: "/cases/insurer-sitecore-migration", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Is a slow site costing you readers and revenue?"
      ctaDescription="Let's rebuild on headless Jamstack for speed, ranking, and new monetization."
    />
  );
}
