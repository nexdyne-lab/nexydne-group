import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export function FinancialServicesEmail() {
  return (
    <CaseStudyTemplate
      client="Tier-1 Financial Services Firm"
      industry="Financial Services"
      title="From Mass Blast to 1:1 Conversation"
      subtitle="Generating unique email content for 5 million customers to double click-through rates."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
      challenge={`Email marketing was a primary channel for this financial giant, but engagement was plummeting. They were sending generic "newsletter" style emails to their entire base of 5 million customers.
      
      A 25-year-old saving for a first home was receiving the same retirement planning advice as a 60-year-old retiree. The lack of relevance was leading to high unsubscribe rates and brand fatigue. The marketing team wanted to personalize, but manually creating thousands of variations was impossible.`}
      solution={`We built a "Generative Content Supply Chain" powered by AI.
      
      First, we unified their customer data to create rich profiles including life stage, spending patterns, and financial goals. Then, we deployed a Natural Language Generation (NLG) model that could assemble emails dynamically.
      
      Instead of writing one email, copywriters wrote "content blocks" and rules. The AI then assembled these blocks into millions of unique permutations. A customer who just bought a crib would receive content about college savings plans, while a customer who travels frequently would see offers for travel rewards cards.`}
      impact={`The campaign results shattered industry benchmarks. By treating every customer as an individual, the bank re-established trust and relevance.
      
      Open rates increased by 40%, and click-through rates doubled compared to the control group. The "unsubscribe" rate dropped to near zero. The system now generates over 20 million unique email variations per month with no additional headcount required in the marketing team.`}
      metrics={[
        { value: "40%", label: "Increase in email open rates" },
        { value: "2x", label: "Increase in click-through rates" },
        { value: "5M", label: "Unique customers reached" }
      ]}
      tags={["Personalization", "Generative AI", "Marketing Automation", "Finance"]}
      relatedCapability={{
        title: "Personalization at Scale",
        link: "/capabilities/growth-marketing-sales/personalization-at-scale"
      }}
    />
  );
}

export default FinancialServicesEmail;
