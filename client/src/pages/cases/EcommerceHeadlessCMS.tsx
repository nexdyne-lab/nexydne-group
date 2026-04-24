import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function EcommerceHeadlessCMS() {
  return (
    <CaseStudyTemplate
      client="National Home Goods Retailer"
      industry="Retail · Content Management"
      title="Omnichannel Retailer Launches 6 New Channels in 8 Months"
      subtitle="How a national retailer used headless CMS to power web, mobile app, in-store kiosks, voice commerce, and digital signage from one content hub—increasing revenue per customer by 47%."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`A national home goods retailer with 340 stores was losing market share to digital-native competitors. Their e-commerce platform, in-store systems, and mobile app all ran on separate content management systems, creating inconsistent product information and forcing merchandising teams to update content in three different places.

The fragmented architecture made omnichannel initiatives nearly impossible. When the company wanted to launch in-store kiosks for endless aisle shopping, they discovered it would require building yet another content system. Voice commerce through Alexa and Google Assistant wasn't even on the roadmap because the technical complexity seemed insurmountable.

Most critically, the merchandising team couldn't execute coordinated campaigns across channels. A product promotion on the website wouldn't appear in stores for days, and mobile app content was perpetually out of sync. The company needed a unified content platform that could power all current and future customer touchpoints from a single source of truth.`}
      solution={`NEXDYNE designed a headless commerce architecture using Contentstack as the content hub, integrated with the retailer's existing Shopify Plus e-commerce platform. We created a unified product information model that served web, mobile, in-store kiosks, voice assistants, and digital signage through a single GraphQL API.

Our content orchestration layer enabled merchandisers to publish once and distribute everywhere. Product descriptions, images, videos, styling tips, and promotional content automatically flowed to all channels with channel-specific optimizations. We built custom integrations that synchronized inventory data in real-time, ensuring customers saw accurate product availability regardless of channel. Our training program equipped 85 merchandising staff with skills to manage omnichannel content efficiently, creating workflow automation that reduced content publishing time by 68%.`}
      impact={`The headless CMS transformation unlocked true omnichannel retail. Within eight months, the retailer launched in-store kiosks (340 locations), voice commerce on Alexa and Google Assistant, a redesigned mobile app, digital signage in stores, and an AR furniture visualization tool—all powered by the same content platform.

In-store kiosk orders accounted for $42M in annual revenue from products not stocked in physical locations. Voice commerce adoption exceeded projections by 230%. The mobile app saw 156% growth in monthly active users after the redesign. The company reduced content operations costs by $2.1M annually, and customer lifetime value grew 47% with improved engagement.`}
      metrics={[
        { value: "47%", label: "Revenue per customer increase" },
        { value: "6", label: "New channels launched in 8 months" },
        { value: "68%", label: "Faster content publishing" }
      ]}
      tags={["Headless CMS", "Omnichannel", "Retail", "Digital Transformation"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default EcommerceHeadlessCMS;
