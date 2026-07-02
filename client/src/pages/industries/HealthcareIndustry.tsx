// TODO: David — confirm Healthcare-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function HealthcareIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Healthcare"
      slug="healthcare"
      heroSubtitle="We help health systems, payers, and life-sciences leaders move beyond fee-for-service — pairing clinical insight with AI-powered operations to improve outcomes, lift the care experience, and build the data foundations the next decade of healthcare will demand."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      heroFocal="60% 40%"
      povParagraphs={[
        "We begin our healthcare engagements by understanding the unique pressures your organization faces — whether you are a health system navigating value-based care, a payer trying to lift member outcomes, or a life-sciences company compressing time-to-market. Our approach blends clinical insight with technology expertise to deliver solutions that work in the real world of care delivery.",
        "Healthcare is in the middle of a fundamental shift — from volume to value, from episodic care to longitudinal engagement, from siloed records to unified clinical and operational data. Organizations that harness these forces will compound advantage. Those that cannot will struggle to keep up with consumer expectations, payer pressure, and the cost of care itself.",
        "Our practice brings together clinicians, data scientists, and operators. We help organizations build the capabilities needed to win in an increasingly competitive environment — AI-powered clinical decision support, seamless patient engagement, modernized revenue-cycle operations, and the population-health infrastructure that makes value-based contracts work."
      ]}
      challenges={[
        {
          title: "Volume to value pressure",
          body: "Reimbursement is shifting to outcomes faster than most operating models can absorb — leaders need predictive risk stratification and provable quality."
        },
        {
          title: "Clinician burnout and capacity",
          body: "Staff shortages and documentation burden are eroding capacity; AI-assisted documentation and workflow redesign return hours to clinicians."
        },
        {
          title: "Fragmented patient data",
          body: "Most systems still can't unify EHR, claims, and operational data — and that gap blocks personalization and credible AI at scale."
        },
        {
          title: "Margin compression",
          body: "Labor inflation and payer pressure are squeezing margins; revenue-cycle automation and denials management are the fastest durable fixes."
        }
      ]}
      capabilities={[
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "AI-assisted documentation, intelligent scheduling, and revenue-cycle automation that free capacity for care."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify EHR, claims, and operational data into one longitudinal record that powers population health and clinical AI."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer the patient and member experience — digital front door to post-visit — with journey-level personalization."
        },
        {
          name: "Risk & Resilience",
          href: "/capabilities/risk-resilience",
          blurb: "The model-risk, clinical-AI governance, and cyber-resilience controls regulators and accreditors increasingly expect."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "8 of 10", label: "Top US health systems served on at least one engagement"},
        {number: "120+", label: "Hospital and health-system engagements delivered"},
        {number: "$3.2M", label: "Average annual savings unlocked per system"},
        {number: "12 mo", label: "Average healthcare engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The systems that win the next decade will not be the ones with the most data — they will be the ones that translate that data into clinician minutes saved, patients retained, and risk-bearing contracts they can actually run.",
        author: "Dr. Maya Patel",
        role: "Partner, Healthcare Practice"
      }}
      featuredCases={[
        {
          slug: "hospital-clinical-workflow",
          title: "Optimizing clinical workflows to save 15 hours per physician weekly",
          industry: "Healthcare",
          metric: "15hrs",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Building an AI-powered patient engagement platform for better outcomes",
          industry: "Healthcare",
          metric: "40%",
          image: "/case-patient-care.b97e3209.jpeg"
        },
        {
          slug: "telehealth-platform",
          title: "Scaling telehealth services to reach 50,000+ patients monthly",
          industry: "Healthcare",
          metric: "50K+",
          image: "/case-doctor-consultation.799c1562.jpg"
        }
      ]}
    />
  );
}
