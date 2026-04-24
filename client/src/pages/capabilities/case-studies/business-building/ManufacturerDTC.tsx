import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function ManufacturerDTC() {
  return (
    <CaseStudyTemplate
      client="Specialty Outdoor Equipment Manufacturer"
      industry="Manufacturing · Business Building"
      title="Manufacturer Creates Direct-to-Consumer Channel"
      subtitle="How a specialty manufacturer built a successful D2C business alongside their B2B channel, capturing higher margins and building brand equity."
      heroImage="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80"
      challenge={`Retail partners controlled pricing and customer experience. Margin pressure from retailers was intensifying. The company had no direct customer data or relationships. Competitors were successfully launching D2C channels. The leadership needed to build D2C without alienating existing retail partners.

A 200-employee specialty manufacturer producing premium outdoor equipment sold exclusively through retailers and distributors had strong brand recognition among enthusiasts but limited direct customer relationships. Retail consolidation was reducing leverage and squeezing margins while larger competitors used D2C channel data to make faster product decisions. Without direct consumer relationships, the company was flying blind on true end-user preferences and needs.`}
      solution={`NEXDYNE developed a D2C strategy that complemented rather than competed with existing retail channels. D2C-exclusive products, limited editions, and customization options were identified as areas where the direct channel could thrive without threatening retailer partnerships. Pricing strategies maintained channel parity on overlapping products, and a communication plan addressed retail partner concerns proactively.

The e-commerce platform was designed to deliver premium brand experience—rich media showcasing products, product customization capabilities for D2C exclusives, integration with manufacturing systems for made-to-order products, and content educating and engaging enthusiast customers. Customer experience extended through expert consultation services, premium packaging, post-purchase engagement through content and community, and loyalty programs driving repeat purchases. CRM implementation captured and utilized direct customer data to inform product development and personalized recommendations.`}
      impact={`The D2C channel generated $8 million in revenue in its first full year from 45,000 direct customers—at 28% higher gross margins than wholesale distribution. Customer satisfaction ratings reached 4.8 out of 5 as the direct brand experience delivered what retail could not: customization, expert guidance, and community connection.

The customer data generated through direct relationships became a strategic asset, informing product development decisions faster and more accurately than retailer sell-through data ever could. Retail partner relationships remained intact, as the D2C strategy's focus on exclusives and customization created clear channel differentiation rather than direct competition. The company now has the direct customer relationships to build lasting brand loyalty regardless of retail channel shifts.`}
      metrics={[
        { value: "$8M", label: "D2C revenue" },
        { value: "28%", label: "Higher margins vs. wholesale" },
        { value: "45K", label: "Direct customers" },
        { value: "4.8", label: "Customer rating" }
      ]}
      tags={["Manufacturing", "D2C", "E-commerce", "Business Building"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default ManufacturerDTC;
