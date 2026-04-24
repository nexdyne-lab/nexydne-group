import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function BankingMobileEngagement() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Digital Engagement"
      title="Bank Transforms Digital Experience with AI-Powered Mobile App"
      subtitle="Conversational AI and proactive notifications reduce call center volume by 38% while improving customer satisfaction scores by 27 points."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
      challenge={`A regional bank with $12 billion in assets and 850,000 customers faced mounting pressure from digital-first competitors offering superior mobile banking experiences. Despite investing in a mobile app, customer adoption remained low—only 32% of customers had downloaded the app, and active usage rates lagged at just 18%. Customer satisfaction scores for digital channels trailed industry benchmarks by 31 points, while call center volume continued growing 12% annually.

The root problem: the existing mobile app functioned as a passive transaction tool rather than an intelligent engagement platform. Customers received no proactive guidance about account issues, spending patterns, or financial opportunities. The app lacked conversational AI for support, forcing customers to navigate complex IVR systems or wait on hold for simple questions.

Beyond customer frustration, the digital experience gap created competitive vulnerability. Younger customers—the bank's growth demographic—increasingly chose fintech competitors offering intuitive mobile experiences with AI-powered insights and instant support.`}
      solution={`NEXDYNE designed and implemented a next-generation mobile banking platform centered on conversational AI and proactive engagement. The solution rebuilt the mobile app from the ground up using React Native, delivering native iOS and Android experiences with AI-powered features that transformed banking from transactional to advisory.

The conversational AI assistant—integrated directly into the mobile app—handled common customer inquiries instantly: balance checks, transaction searches, fund transfers, bill payments, and account troubleshooting. NEXDYNE trained the AI on 18 months of call center transcripts and customer interaction data, enabling it to understand banking terminology and resolve ambiguous queries.

Beyond reactive support, NEXDYNE implemented proactive engagement through intelligent push notifications triggered by behavioral patterns and financial events. Customers received personalized alerts about unusual spending, upcoming bill due dates, low balance warnings, and savings opportunities—all contextualized to individual financial situations.`}
      impact={`The AI-powered mobile banking platform transformed customer engagement within six months of launch. Call center volume decreased by 38% as the conversational AI assistant resolved 67% of customer inquiries without human intervention—handling 2.4 million interactions in the first six months.

Customer satisfaction scores for digital channels increased by 27 points, surpassing industry benchmarks for the first time in the bank's history. Mobile app adoption surged from 32% to 74% of customers. Mobile-initiated product applications increased by 156% as personalized recommendations surfaced relevant opportunities at optimal moments. Fraud detection improved significantly, reducing fraud losses by 29%.`}
      metrics={[
        { value: "38%", label: "Call center reduction" },
        { value: "27pts", label: "CSAT improvement" },
        { value: "74%", label: "App adoption rate" }
      ]}
      tags={["Digital Banking", "Conversational AI", "Mobile", "Customer Experience"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}
