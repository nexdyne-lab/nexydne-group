// TODO: David — confirm Education-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function EducationIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Education"
      slug="education"
      heroSubtitle="We help K-12 systems, universities, and learning platforms build digital and operating capabilities that improve learning outcomes — using AI-powered personalization, modern student-success infrastructure, and operating discipline that respects the mission."
      heroImage="/blog-team-collaboration.913d82ea.jpg"
      povParagraphs={[
        "Education is in a moment of profound change. Students expect personalized, flexible learning experiences. Institutions are being asked to demonstrate outcomes and value. Technology is enabling entirely new models of teaching, learning, and credentialing — and the institutions that lean into that shift are pulling ahead on enrollment, completion, and reputation.",
        "We partner with K-12 systems, research universities, community colleges, corporate-learning organizations, and EdTech platforms to build the digital capabilities the next decade rewards. Our approach combines a deep respect for pedagogy with practical expertise in technology, data, and change — so the work compounds inside the institution rather than living on a vendor invoice.",
        "Beyond technology, we help institutions rethink operating models. Hybrid-learning strategies, modern student-success infrastructure, and back-office automation all need to fit together. We bring a holistic perspective that addresses learner outcomes, financial sustainability, and the mission at the same time."
      ]}
      challenges={[
        {
          title: "Enrollment and student success",
          body: "Demographic headwinds and shifting student expectations are compressing enrollment and completion at the same time. Modern student-success platforms, AI-driven advising, and journey analytics are now baseline capabilities."
        },
        {
          title: "Operating-model financial pressure",
          body: "Tuition discounting, state-funding volatility, and rising operating cost are stressing institutional P&Ls. Back-office automation and shared-services models can fund the next phase of investment."
        },
        {
          title: "Learning at scale, learning that works",
          body: "Hybrid and online learning is permanent — and quality is uneven. Personalized learning, evidence-based course design, and instructor enablement are how institutions are converting modality into outcomes."
        },
        {
          title: "Data, AI, and academic integrity",
          body: "Generative AI is rewriting both how students learn and how institutions assess. Clear policy, modern assessment design, and AI-aware academic-integrity tooling are now essential."
        }
      ]}
      capabilities={[
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer the prospective-, current-, and lifetime-learner experience using journey analytics and personalization tuned to mission and market."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Automate financial aid, registration, and back-office operations to free capacity for the academic and student-success work that drives outcomes."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify SIS, LMS, and CRM data into a single learner record that supports modern advising, success interventions, and AI-driven personalization."
        },
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Develop the program portfolio, market expansion, and credential strategy that will define enrollment and revenue across the next planning horizon."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "40+", label: "Institutions and EdTech platforms served"},
        {number: "R1, K-12", label: "Engagements span research universities, community colleges, and K-12 systems"},
        {number: "15%", label: "Average lift in retention on optimized programs"},
        {number: "12 mo", label: "Average education engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The institutions that are growing through this cycle do not treat technology as a competing priority to academic mission — they treat it as the operating system that lets the mission scale.",
        author: "Dr. Robert Kim",
        role: "Partner, Education Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg"
        },
        {
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/case-healthcare-team.5797392b.jpg"
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/case-accountants-audit.1c87a151.jpg"
        }
      ]}
    />
  );
}
