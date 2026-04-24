import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export function RetailLoyaltyProgram() {
  return (
    <CaseStudyTemplate
      client="Global Fashion Retailer"
      industry="Retail & E-commerce"
      title="Loyalty 3.0: Beyond Points and Tiers"
      subtitle="Reinventing loyalty to focus on experiential rewards and community access."
      heroImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop"
      challenge={`This global fashion brand had a traditional "spend-and-get" loyalty program that was losing steam. Customers were sitting on millions of unredeemed points, and the program was doing little to drive emotional connection or advocacy.
      
      Competitors were offering deeper discounts, leading to a "race to the bottom." The brand needed a way to differentiate itself and build genuine loyalty that wasn't purely transactional.`}
      solution={`We partnered with the brand to design "Loyalty 3.0"—a program based on access, not just discounts.
      
      We conducted deep ethnographic research to understand what their customers truly valued. The answer wasn't just cheaper clothes; it was style advice, exclusivity, and community.
      
      The new program introduced "Experiential Tiers." Top-tier members gained access to early product drops, private styling sessions, and invites to fashion week events. We also gamified the experience, rewarding non-transactional behaviors like writing reviews, sharing on social media, and recycling old garments.`}
      impact={`The new program transformed the brand's relationship with its most valuable customers.
      
      Program enrollment spiked by 60% in the first year. Members of the new "Experiential Tiers" had a 3x higher Lifetime Value (LTV) than standard members. The focus on community and sustainability also resonated deeply with Gen Z consumers, significantly lowering the average age of the brand's core customer base.`}
      metrics={[
        { value: "60%", label: "Increase in program enrollment" },
        { value: "3x", label: "Higher LTV for top-tier members" },
        { value: "25%", label: "Increase in social media engagement" }
      ]}
      quote={{
        text: "We stopped buying their loyalty with coupons and started earning it with experiences. The difference is night and day.",
        author: "Sarah L.",
        role: "CMO, Global Fashion Retailer"
      }}
      tags={["Customer Experience", "Loyalty", "Retail", "Strategy"]}
      relatedCapability={{
        title: "Customer Experience",
        link: "/capabilities/growth-marketing-sales/customer-experience"
      }}
    />
  );
}

export default RetailLoyaltyProgram;
