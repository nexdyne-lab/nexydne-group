import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Target, DollarSign, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function StreamingHybridRecommender() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Hybrid Recommender Lifts New-Title Engagement 17% | Streaming Case Study"
      seoDescription="A streaming operator's recommender was starving new releases of attention. A hybrid model blending collaborative filtering with content affinity and recency lifted week-one engagement on new titles 17% with no back-catalog erosion."
      canonical="/cases/streaming-hybrid-recommender"
      industry="Subscription Streaming"
      industryLink="/industries/technology-media-telecom"
      title="How a Streaming Operator Gave New Releases a Fair Shot at Their Audience"
      subtitle="The recommender kept steering viewers back to the tenured catalog, so new titles launched into silence. A hybrid model that understood both behavior and content changed how new releases found their audience."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "17%", label: "Higher Week-One Engagement" },
        { value: "0%", label: "Back-Catalog Erosion" },
        { value: "2", label: "Surfaces Rewired" },
        { value: "4 Mo", label: "To Production" }
      ]}
      clientContextTitle="New Titles Launching Into Silence"
      clientContextIntro="A subscription streaming operator had built its content recommender on collaborative filtering, which works beautifully for titles with plenty of viewing history and poorly for anything brand new. The result was a home screen that leaned heavily on the tenured catalog and gave fresh releases almost no room to be seen."
      clientContextBody="This was not a small problem. The operator was spending heavily to acquire and produce new titles, then watching the very system meant to surface them push them to the bottom of every rail. New releases needed viewing history to be recommended, but they could not build viewing history if they were never recommended — a cold-start trap that quietly undercut the content investment. Programming leadership wanted new titles to reach the right audience in their first week, when marketing momentum was highest, without cannibalizing the back catalog that kept existing subscribers engaged."
      clientProfile={{
        industry: "Subscription Streaming Operator",
        companySize: "~$610M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Several Million Subscribers",
        additionalLabel: "Active Base"
      }}
      challengeTitle="Why New Releases Never Got Seen"
      challenges={[
        { icon: TrendingDown, title: "A Cold-Start Trap", description: "New titles needed viewing history to be recommended but could not earn history without first being recommended, so they stalled on arrival." },
        { icon: Target, title: "A Recommender Biased to Tenure", description: "Collaborative filtering rewarded titles with long histories, structurally pushing fresh releases to the bottom of every rail." },
        { icon: DollarSign, title: "Content Spend Undercut", description: "Money spent acquiring and producing new titles was wasted when the system meant to surface them buried them instead." },
        { icon: Users, title: "A Narrow Launch Window", description: "New releases had their best shot at an audience in week one, exactly when the recommender gave them the least visibility." }
      ]}
      approachTitle="Blending Behavior With Content and Recency"
      approachIntro="We built a hybrid recommender that supplements collaborative signals with content-affinity features and a recency boost, then wired it into the two surfaces that drive the most new-title discovery — the home rail and the post-watch carousel."
      steps={[
        { step: "01", title: "Diagnosing the Cold-Start Bias", description: "We quantified how much of a new title's under-performance came from the recommender itself rather than the content, isolating the structural bias from genuine audience signal." },
        { step: "02", title: "Adding Content-Affinity Features", description: "We enriched the model with content features — genre, themes, cast, tone — so a new title could be matched to viewers by what it was, not only by who had already watched it." },
        { step: "03", title: "Introducing a Recency Boost", description: "We added a tuned recency signal that gave new releases a fair shot during their launch window without letting novelty override genuine relevance." },
        { step: "04", title: "Rewiring the Right Surfaces", description: "We deployed the hybrid model into the home rail and the post-watch carousel — the two placements responsible for most new-title discovery — and monitored back-catalog engagement to guard against erosion." }
      ]}
      resultsTitle="New Titles That Reach Their Audience"
      results={[
        { icon: TrendingUp, value: "17%", label: "Higher week-one engagement", detail: "On new titles, versus the prior recommender" },
        { icon: CheckCircle, value: "0%", label: "Back-catalog erosion", detail: "Existing-catalog engagement held steady" },
        { icon: Target, value: "2", label: "Surfaces rewired", detail: "Home rail and post-watch carousel" },
        { icon: Zap, value: "4 Mo", label: "To production", detail: "From kickoff to full rollout" }
      ]}
      quote="We were spending a fortune to make and market new titles, then letting our own recommender hide them. The hybrid model finally gave a new release a fair chance in the week that matters most — and it did not cost us anything on the catalog that keeps people subscribed."
      quoteAuthor="Head of Content Programming"
      quoteRole="Streaming operator"
      relatedStudies={[
        { title: "How a Specialty Retailer Grew Email Revenue per Send by 42%", metric: "42%", label: "more email revenue per send", link: "/cases/retail-behavioral-email-revenue", image: "/images/capabilities/cap-retail-data.jpg" },
        { title: "How a B2B Software Provider Lifted Net Revenue Retention by Six Points", metric: "+6 pts", label: "net revenue retention", link: "/cases/saas-usage-segmentation-cs-routing", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is your recommender burying the content you paid to create?"
      ctaDescription="Let's talk about giving new releases a fair shot without eroding the catalog that retains your base."
    />
  );
}
