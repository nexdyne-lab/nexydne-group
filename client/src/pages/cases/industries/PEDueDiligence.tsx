import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Search, Clock, Target, Shield, DollarSign, FileCheck } from "lucide-react";

export default function PEDueDiligence() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reading a Healthcare Deal Right — Faster | Private Equity Case Study"
      seoDescription="A private equity fund kept losing good healthcare deals to slow diligence and expensive consultants. A systematic approach cut evaluation time by 40% and sharpened every decision."
      canonical="/cases/pe-healthcare-diligence"
      industry="Private Equity"
      industryLink="/industries/private-equity"
      title="How a Fund Cut Healthcare Diligence Time by 40%"
      subtitle="A private equity fund saw far more healthcare deals than it could properly assess. A faster, more consistent way to run commercial diligence let it move quickly on the right ones — and walk away from the wrong ones with conviction."
      heroImage="/images/cases/pe-healthcare-diligence-hero.jpg"
      metrics={[
        { value: "40%", label: "Faster Diligence" },
        { value: "3x", label: "More Targets Screened" },
        { value: "3 Weeks", label: "To a Clear Read" },
        { value: "1", label: "Bad Deal Avoided" }
      ]}
      clientContextTitle="More Deals Than It Could Properly Assess"
      clientContextIntro="A private equity fund investing in healthcare services reviewed well over a hundred opportunities a year but could run deep commercial diligence on only a handful. Each deep review took six to eight weeks and leaned heavily on outside consultants at meaningful cost in fees and deal momentum. Good targets were lost to faster buyers, while effort was spent on deals that should have been set aside sooner."
      clientContextBody="The work was also inconsistent. Every deal team built its diligence from scratch — sizing the market from costly research reports, gathering customer views ad hoc, and reaching a judgment in its own way. On a live acquisition — a multi-site provider of outpatient care — the fund wanted a clear, well-supported read in weeks rather than months, and it was not willing to lower the bar on rigour to get there."
      clientProfile={{
        industry: "Healthcare-Focused Private Equity",
        companySize: "Multi-Site Outpatient Target",
        projectDuration: "12 Months",
        additionalInfo: "100+ Deals Screened / Year",
        additionalLabel: "Deal Flow"
      }}
      challengeTitle="A Diligence Bottleneck"
      challenges={[
        {
          icon: Clock,
          title: "Too Slow to Compete",
          description: "Six to eight weeks per commercial review meant losing good deals to quicker, more decisive buyers."
        },
        {
          icon: Target,
          title: "Only a Handful Assessed",
          description: "The team could deeply evaluate just a few of the many deals it saw, so promising targets went unexamined."
        },
        {
          icon: Search,
          title: "Reinvented Every Time",
          description: "Each deal team started from a blank page, with no shared method — so quality and speed varied deal to deal."
        },
        {
          icon: DollarSign,
          title: "Costly Outside Help",
          description: "A heavy consulting bill on every deal put a hard cap on how many could be assessed."
        }
      ]}
      approachTitle="A Faster, More Consistent Read"
      approachIntro="We helped the fund replace slow, one-off diligence with a consistent method it could run itself — sizing markets, testing the commercial story, and checking with customers in a fraction of the time, so the team could reach a confident view in weeks."
      steps={[
        {
          step: "01",
          title: "Sizing the Market in Days",
          description: "We built simple, reusable tools to size a market, map its competitors and surface the trends that actually move a healthcare business. Work that once took consultants weeks now took days, and it produced the same answer every time."
        },
        {
          step: "02",
          title: "A Common Diligence Checklist",
          description: "We turned scattered practice into sector-specific checklists for healthcare — the questions that always matter and the risks that always hide. Every deal now got a consistent, comprehensive review rather than whatever its team thought to ask."
        },
        {
          step: "03",
          title: "Talking to Customers the Same Way",
          description: "We set a structured approach to customer references: the same questions each time, a careful reading of the answers, and patterns drawn across many conversations instead of a few memorable anecdotes."
        },
        {
          step: "04",
          title: "A Clear Recommendation, Quickly",
          description: "We pulled the findings into a single, comparable view so partners could weigh a deal on its merits and decide with conviction — go or pass — while the opportunity was still on the table."
        }
      ]}
      resultsTitle="Sharper Decisions, Sooner"
      results={[
        {
          icon: Clock,
          value: "40%",
          label: "Faster diligence",
          detail: "From six to eight weeks down to three to four"
        },
        {
          icon: Search,
          value: "3x",
          label: "More targets screened",
          detail: "Deeper looks at far more of the deal flow"
        },
        {
          icon: FileCheck,
          value: "3 Weeks",
          label: "To a clear read",
          detail: "On the healthcare target the fund pursued"
        },
        {
          icon: Shield,
          value: "1",
          label: "Bad deal avoided",
          detail: "The fund passed on a deal the review flagged"
        }
      ]}
      quote="We were losing deals we wanted and spending money on deals we didn't. A faster, more consistent way to run diligence changed both. On the healthcare deal we had a clear, well-supported read in three weeks — and the confidence to move before anyone else could."
      quoteAuthor="Partner, Head of Diligence"
      quoteRole="Healthcare-focused private equity fund"
      relatedStudies={[
        {
          title: "Adding Seven Points of EBITDA Margin at an Industrial Manufacturer",
          metric: "7 pts",
          label: "added EBITDA",
          link: "/cases/pe-industrial-transformation",
          image: "/images/cases/pe-industrial-transformation-hero.jpg"
        },
        {
          title: "Standing Up a Carved-Out Distributor in Six Months",
          metric: "6 Months",
          label: "to standalone operations",
          link: "/cases/pe-distribution-digital",
          image: "/images/cases/pe-distribution-digital-hero.jpg"
        }
      ]}
      ctaTitle="Ready to move faster on the right deals?"
      ctaDescription="Let's talk about diligence that is quicker and more consistent without losing rigour."
    />
  );
}
