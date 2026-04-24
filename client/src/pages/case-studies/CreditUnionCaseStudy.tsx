import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function CreditUnionCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Community Credit Union"
      industry="Financial Services · Operations"
      title="45% Improvement in Member Satisfaction"
      subtitle="An 85-employee community credit union with 45,000 members implements NexDyne's Customer Intelligence Platform to personalize member experiences and predict service needs, achieving a 45% improvement in member satisfaction scores."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
      challenge={`This community credit union had served its members for over 60 years, building deep roots in the local community. But as national banks invested heavily in digital experiences and personalization, the credit union's leadership worried they were falling behind.

Member data was scattered across multiple systems—core banking, loan origination, digital banking, and call center logs. Relationship managers relied on memory and manual lookups to understand member needs. When a member called, staff often couldn't see the full picture of their relationship with the credit union.

The credit union's member satisfaction scores had plateaued, and younger members were increasingly drawn to digital-first competitors. Leadership knew they needed to leverage their data advantage—deep member relationships spanning decades—but lacked the tools to do so.`}
      solution={`NEXDYNE deployed its Customer Intelligence Platform to unify the credit union's member data and deliver actionable insights to frontline staff. The platform creates a 360-degree view of each member, combining transaction history, product holdings, service interactions, and life events.

Predictive models identify members likely to need specific products—a first-time homebuyer, a family approaching college expenses, a retiree considering wealth management. The system also flags members at risk of leaving, enabling proactive retention outreach.

For relationship managers, the platform provides real-time recommendations during member interactions. When a member calls or visits a branch, staff immediately see relevant insights and suggested next-best actions. Data from the core banking system, loan origination platform, digital banking channels, and member service records were integrated into a unified analytics layer with role-based access controls to address privacy and compliance requirements.`}
      impact={`Within three months of full deployment, the credit union saw measurable improvements in member satisfaction, business growth, and operational efficiency. Net Promoter Score increased from 42 to 61—a 45% improvement in member satisfaction. Average call resolution time reduced by 25%, and proactive outreach based on predicted needs strengthened relationships across the membership.

Cross-sell conversion rate improved by 28%, with new member acquisition up 15% through referrals. Loan portfolio quality improved with better risk insights. Relationship managers now serve 30% more members, and manual reporting time was reduced by 70% as real-time dashboards replaced weekly batch reports.`}
      metrics={[
        { value: "45%", label: "Member satisfaction improvement" },
        { value: "85", label: "Employees served" },
        { value: "12wks", label: "To full deployment" },
        { value: "28%", label: "Cross-sell increase" }
      ]}
      quote={{
        text: "We've always known our members better than any big bank could. Now we have the tools to prove it. Our staff can anticipate needs before members even ask, and that's created a level of loyalty we haven't seen in years.",
        author: "Chief Experience Officer",
        role: "Community Credit Union"
      }}
      tags={["Financial Services", "AI", "Customer Intelligence", "Operations"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default CreditUnionCaseStudy;
