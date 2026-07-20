import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, UserSquare, Calculator, GitBranch, Network, HandHeart, FileSpreadsheet, TrendingUp } from "lucide-react";

export function ServicesExit() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Exit Preparation That Won a 40% Valuation Premium | Professional Services Case Study"
      seoDescription="A 140-employee environmental consulting firm had 60% client concentration and a founder tied to every relationship. An 18-month exit-prep program won a 40% valuation premium at a 5x EBITDA multiple."
      canonical="/capabilities/strategy-corporate-finance/case-studies/services-exit"
      industry="Professional Services"
      industryLink="/industries"
      title="How a Consulting Firm Won a 40% Valuation Premium at Exit"
      subtitle="A professional-services firm prepared for sale over 18 months — diversifying revenue, transitioning founder relationships, and optimizing financials — winning a 40% valuation premium at a 5x EBITDA multiple."
      heroImage="/images/industries/meeting-topview.jpg"
      metrics={[
        { value: "40%", label: "Valuation Premium" },
        { value: "6 mo", label: "Founder Transition" },
        { value: "5x", label: "EBITDA Multiple" },
        { value: "100%", label: "Founder Exit Completed" }
      ]}
      clientContextTitle="Not Ready for Sale"
      clientContextIntro="A 140-employee environmental consulting firm had a founder approaching retirement who wanted to exit within 2–3 years — but the company wasn't ready. Revenue was concentrated in a few large clients, key relationships were tied to the founder personally, and financials didn't present the business well."
      clientContextBody="The sale-readiness assessment identified value-reducing issues: the top 3 clients represented 60% of revenue, the founder was personally involved in most client relationships, EBITDA was understated due to above-market owner compensation, and there was no clear leadership succession plan."
      clientProfile={{
        industry: "Environmental Consulting Firm",
        companySize: "140 Employees",
        projectDuration: "18-Month Prep",
        additionalInfo: "Competitive Process",
        additionalLabel: "Sale"
      }}
      challengeTitle="Why Buyers Would Discount It"
      challenges={[
        {
          icon: Users,
          title: "60% client concentration",
          description: "The top three clients drove most revenue, a classic risk discount."
        },
        {
          icon: UserSquare,
          title: "Founder-dependent relationships",
          description: "The founder was personally tied to most key client relationships."
        },
        {
          icon: Calculator,
          title: "Understated EBITDA",
          description: "Above-market owner compensation masked the business's true earnings."
        },
        {
          icon: GitBranch,
          title: "No succession plan",
          description: "The firm had no clear leadership succession to reassure buyers."
        }
      ]}
      approachTitle="Engineer the Business for Sale"
      approachIntro="NEXDYNE ran an 18-month program to reduce concentration, transition founder relationships, and optimize financial presentation — then ran a competitive sale process."
      steps={[
        {
          step: "01",
          title: "Diversify revenue",
          description: "New business development, adjacent service lines, and pricing improvements brought the largest client under 15% of revenue."
        },
        {
          step: "02",
          title: "Transition the founder out",
          description: "Senior team members took over key relationships, institutional knowledge was documented, and retention agreements secured key employees."
        },
        {
          step: "03",
          title: "Optimize the financials",
          description: "Owner compensation was normalized, add-backs documented, real estate separated, and a quality-of-earnings analysis prepared proactively."
        },
        {
          step: "04",
          title: "Run a competitive process",
          description: "When ready, a process generated interest from both strategic and financial buyers."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "Valuation premium",
          detail: "Over initial indications, at a 5x EBITDA multiple"
        },
        {
          icon: Network,
          value: "< 15%",
          label: "Largest client share",
          detail: "Diversification erased buyers' concentration discount"
        },
        {
          icon: HandHeart,
          value: "6 mo",
          label: "Clean founder transition",
          detail: "Protecting client relationships and the employee base"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "A Strategic Acquisition That Doubled Market Presence",
          metric: "2x",
          label: "market share",
          link: "/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition",
          image: "/images/industries/mfg-robot-arm-team.jpg"
        },
        {
          title: "A Series B Raise at an 8x Revenue Multiple",
          metric: "8x",
          label: "revenue multiple",
          link: "/capabilities/strategy-corporate-finance/case-studies/saas-series-b",
          image: "/images/capabilities/cap-celebrate.jpg"
        }
      ]}
      ctaTitle="Planning your exit?"
      ctaDescription="Let's talk about what exit preparation could add to your final sale price."
    />
  );
}

export default ServicesExit;
