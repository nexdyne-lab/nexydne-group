import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function InsuranceCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Regional Property & Casualty Insurance Company"
      industry="Insurance & Financial Services · Operations"
      title="73% Faster Claims Processing Cycle"
      subtitle="Regional property & casualty insurer automates claims intake and adjudication, reducing average processing time from 14 days to 3.8 days while improving accuracy and customer satisfaction."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
      challenge={`Claims arrived through multiple channels—email, fax, mail, and agent portals—requiring staff to manually extract data from PDFs, images, and handwritten forms. Each claim required 45-60 minutes of data entry before adjudication could begin. With 18 adjusters handling claims across different lines, decision-making varied significantly—similar claims received different outcomes depending on which adjuster reviewed them, creating compliance risks and customer fairness concerns.

A regional property and casualty insurance company serving homeowners, small businesses, and commercial clients across six Southeastern states with 280 employees and $340M in annual premiums processed approximately 45,000 claims annually. As the company expanded into new markets, claims volume grew 60% over three years while staffing increased only 15%, creating backlogs and extending processing times. Fraud detection rates were below 40% despite an estimated 3-4% of claims involving some level of fraud, resulting in significant leakage.`}
      solution={`NEXDYNE implemented an intelligent claims automation platform combining document AI, rules-based adjudication, and machine learning fraud detection to streamline the entire claims lifecycle.

AI-powered document extraction automatically processed claims from any channel—photos, PDFs, handwritten notes, and structured forms—extracting key data fields with 96% accuracy and reducing intake time from 45 minutes to under 3 minutes per claim. A rules-based decision engine applied consistent adjudication criteria across all claims, with straightforward claims (85% of volume) auto-approved or auto-denied based on policy terms, coverage limits, and claim characteristics, and complex cases routed to human adjusters.

Machine learning models analyzed claim patterns, claimant history, provider networks, and external data sources to flag potentially fraudulent claims, generating risk scores and supporting evidence for investigators. Automated notifications kept claimants informed at every stage via email, SMS, and portal updates, with self-service tools allowing customers to upload documents, check status, and schedule inspections without calling in.`}
      impact={`Average claims cycle time reduced from 14 days to 3.8 days—a 73% improvement—with simple claims resolved in under 24 hours. 85% of claims now processed without human intervention, freeing adjusters to focus on complex cases requiring genuine expertise. Annual savings of $1.8 million came from combined reductions in processing costs, improved fraud detection, and lower customer service expenses.

Fraud detection rate improved from 38% to 87%—a 2.3x improvement—recovering an estimated $420,000 annually in previously undetected fraudulent claims. Customer satisfaction improved from 72 to 89 NPS. Call center volume reduced 54% through self-service and proactive communication. Regulatory compliance improved with consistent, auditable decision trails. Adjuster capacity effectively tripled, enabling growth without proportional hiring.`}
      metrics={[
        { value: "73%", label: "Faster processing" },
        { value: "85%", label: "Auto-adjudication rate" },
        { value: "$1.8M", label: "Annual savings" },
        { value: "45K+", label: "Claims per year" }
      ]}
      quote={{
        text: "We were drowning in claims volume and our customers were suffering. NEXDYNE didn't just automate our processes—they transformed how we think about claims handling. Our adjusters now focus on the cases that truly need human judgment, while routine claims flow through automatically.",
        author: "Sarah Kim",
        role: "Chief Claims Officer, Southeastern Mutual Insurance"
      }}
      tags={["Insurance", "AI", "Claims Automation", "Operations"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
