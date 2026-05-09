import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function ArtificialIntelligence() {
  return (
    <MarketingMasterTemplate
      capabilityName="Artificial Intelligence"
      capabilitySlug="artificial-intelligence"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Practical AI solutions for mid-market companies. We help organizations harness AI to automate operations, unlock insights, and compete with larger rivals."
      heroImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
      // PRESERVED CTA labels from source (Start Your AI Journey + View Case Studies)
      heroPrimaryCTA={{
        label: "Start Your AI Journey",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/cases?capability=artificial-intelligence",
      }}
      // PRESERVED 3 source stats; 4th is AUTHORED with TODO marker
      experienceStats={[
        {
          number: "120+",
          label: "AI implementations delivered for mid-market companies",
        },
        {
          number: "3.2x",
          label: "average ROI on AI investments within 18 months",
        },
        {
          number: "85%",
          label:
            "of our AI projects reach production (vs. 15% industry average)",
        },
        // TODO: confirm with practice lead before publish
        {
          number: "18 wks",
          label: "median time from kickoff to first production AI workload",
        },
      ]}
      // AUTHORED — featured uses source insight #1 title + AUTHORED summary; secondary uses source insights #2, #3
      // TODO: confirm with practice lead before publish (featured summary)
      thoughtLeadership={{
        featured: {
          tag: "Strategy",
          title:
            "The Mid-Market AI Playbook: Where to Start and How to Scale",
          summary:
            // TODO: confirm with practice lead before publish
            "Most mid-market AI programs stall between proof-of-concept and production. We outline the practical sequencing, governance, and team model that separates the firms that scale AI from those that abandon it after the first pilot.",
          image: "/images/insight-ai-playbook.jpg",
          href: "/insights/mid-market-ai-playbook",
        },
        secondary: [
          {
            tag: "Technology",
            title: "Generative AI for Operations: Beyond the Hype",
            href: "/insights/generative-ai-operations",
          },
          {
            tag: "Implementation",
            title: "Building Your First AI Use Case: A Practical Framework",
            href: "/insights/first-ai-use-case",
          },
        ],
      }}
      // PRESERVED 3 approach pillars verbatim from source
      approachPillars={[
        {
          step: "01",
          title: "Start with the business problem",
          body: "We don't lead with technology. We start by understanding the operational bottlenecks, decision gaps, and customer pain points that AI can actually solve—then work backward to the right approach.",
        },
        {
          step: "02",
          title: "Build for production, not demos",
          body: "Proof-of-concepts that never ship help no one. We design AI solutions with data pipelines, monitoring, and governance built in from day one—so they work in the real world.",
        },
        {
          step: "03",
          title: "Transfer knowledge, not dependency",
          body: "Our goal is to make your team self-sufficient. We document everything, train your people, and build systems they can maintain and improve without us.",
        },
      ]}
      // PRESERVED 6 ambition titles + descriptions verbatim from source; hrefs REMAPPED per locked spec
      ambitions={[
        {
          title: "Automate repetitive workflows",
          description:
            "Free your team from manual data entry, document processing, and routine tasks. We help you identify the highest-impact automation opportunities and implement AI solutions that deliver ROI within months.",
          href: "/capabilities/artificial-intelligence/process-automation",
        },
        {
          title: "Build intelligent customer experiences",
          description:
            "Deploy AI-powered chatbots, personalization engines, and recommendation systems that understand your customers and respond in real-time—without enterprise-scale budgets.",
          href: "/capabilities/artificial-intelligence/agentic-ai",
        },
        {
          title: "Unlock insights from your data",
          description:
            "Turn scattered spreadsheets and siloed databases into actionable intelligence. Our data transformation approach helps mid-market companies compete with data-driven insights.",
          href: "/capabilities/artificial-intelligence/predictive-analytics",
        },
        {
          title: "Deploy generative AI responsibly",
          description:
            "Move beyond ChatGPT experiments to production-ready generative AI. We help you select the right models, implement guardrails, and scale safely across your organization.",
          href: "/capabilities/artificial-intelligence/generative-ai",
        },
        {
          title: "Modernize legacy systems with AI",
          description:
            "Breathe new life into aging software by adding AI capabilities. Extract data from legacy systems, automate manual workarounds, and create modern interfaces without full replacement.",
          href: "/capabilities/artificial-intelligence/custom-model-development",
        },
        {
          title: "Scale AI across the organization",
          description:
            "Move from isolated pilots to enterprise-wide AI adoption. We help you build the governance, infrastructure, and change management capabilities for sustainable AI at scale.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap",
        },
      ]}
      // PRESERVED in-practice intro + bullets verbatim from source
      inPractice={{
        image: "/images/ai-team-collaboration.jpg",
        intro:
          "The hype around generative AI is real—but so is the confusion. Most mid-market companies are stuck between \"we should do something\" and \"we don't know where to start.\" We cut through the noise with a practical approach: identify high-impact use cases, start with quick wins, and build toward enterprise-scale deployment. No science projects. No endless pilots. Just AI that works.",
        realOutcomes: [
          "Customer service teams handling 3x more inquiries with AI-assisted responses",
          "Sales teams closing deals 40% faster with AI-generated proposals and follow-ups",
          "Operations teams reducing document processing time by 80%",
          "Marketing teams producing 5x more content with consistent brand voice",
        ],
        howWeHelp: [
          "Use case identification and prioritization based on business impact",
          "Model selection and evaluation (OpenAI, Anthropic, open-source options)",
          "Prompt engineering and fine-tuning for your specific needs",
          "Integration with existing systems and workflows",
        ],
      }}
      // PRESERVED all 10 service cards verbatim from source (titles + descriptions + hrefs)
      howWeCanHelp={[
        {
          title: "Generative AI Implementation",
          description:
            "Deploy intelligent agents that handle complex inquiries, draft documentation, and assist employees—freeing your team for high-value strategic work.",
          href: "/capabilities/artificial-intelligence/generative-ai",
        },
        {
          title: "Agentic AI",
          description:
            "Build autonomous AI agents that can reason, plan, and execute multi-step tasks independently. Move beyond simple chatbots to AI that takes action on your behalf.",
          href: "/capabilities/artificial-intelligence/agentic-ai",
        },
        {
          title: "Data Transformation",
          description:
            "Unlock the true value of your data. We build performance by making lasting improvements in technology, processes, and capabilities.",
          href: "/capabilities/artificial-intelligence/data-transformation",
        },
        {
          title: "Predictive Analytics",
          description:
            "Build models that forecast demand, predict churn, and identify opportunities before your competitors. Practical ML that works with real-world data.",
          href: "/capabilities/artificial-intelligence/predictive-analytics",
        },
        {
          title: "Process Automation",
          description:
            "Combine RPA, AI, and workflow orchestration to automate end-to-end processes. Reduce costs and errors while improving speed and consistency.",
          href: "/capabilities/artificial-intelligence/process-automation",
        },
        {
          title: "AI Strategy & Roadmap",
          description:
            "Define your AI vision, prioritize use cases, and build a practical roadmap. We help you make smart bets on AI that align with your business goals.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap",
        },
        {
          title: "Custom Model Development",
          description:
            "Fine-tune open-source models on your proprietary data. Own your intelligence and maintain competitive advantage with models trained on your unique insights.",
          href: "/capabilities/artificial-intelligence/custom-model-development",
        },
        {
          title: "Internet of Things",
          description:
            "Turn IoT into real business value with improved operations, connected products and services, and entirely new business models.",
          href: "/capabilities/artificial-intelligence/internet-of-things",
        },
        {
          title: "Digital Twins",
          description:
            "Build virtual replicas of assets, processes, and people by simulating real situations, allowing for better decision-making and risk mitigation.",
          href: "/capabilities/artificial-intelligence/digital-twins",
        },
        {
          title: "Risk & Resilience",
          description:
            "Protect your organization with AI models that detect anomalies in transactions and user behavior in real-time, ensuring operational continuity.",
          href: "/capabilities/artificial-intelligence/risk-resilience",
        },
      ]}
      // AUTHORED case-tab metrics distilled from Cat 11a pool (titles + slugs verified live in App.tsx)
      // TODO: confirm with practice lead before publish (per-card metric blurbs)
      clientResults={[
        {
          industry: "Financial Services",
          cases: [
            {
              slug: "bank-process-automation",
              title:
                "Bank automates KYC and onboarding with AI document intelligence",
              metric: "70% faster onboarding",
              image: "/images/case-bank-process-automation.jpg",
            },
            {
              slug: "fintech-payment-automation",
              title:
                "Fintech eliminates payment reconciliation backlog with ML",
              metric: "$3M annual savings",
              image: "/images/case-fintech-payment-automation.jpg",
            },
            {
              slug: "wealth-management-automation",
              title:
                "Wealth manager streamlines client onboarding end-to-end",
              metric: "5x faster intake",
              image: "/images/case-wealth-management-automation.jpg",
            },
            {
              slug: "insurance-claims-processing",
              title:
                "Insurer automates claims triage with computer vision",
              metric: "60% straight-through processing",
              image: "/images/case-insurance-claims-processing.jpg",
            },
          ],
        },
        {
          industry: "Healthcare",
          cases: [
            {
              slug: "healthcare-data-analytics",
              title:
                "Provider unifies clinical analytics across 20 facilities",
              metric: "40% better outcomes reporting",
              image: "/images/case-healthcare-data-analytics.jpg",
            },
            {
              slug: "hospital-clinical-workflow",
              title:
                "Hospital cuts nurse documentation time with ambient AI",
              metric: "2 hours saved per shift",
              image: "/images/case-hospital-clinical-workflow.jpg",
            },
            {
              slug: "telehealth-platform",
              title:
                "Telehealth provider scales to millions with AI triage",
              metric: "10x scale, 50% cost reduction",
              image: "/images/case-telehealth-platform.jpg",
            },
            {
              slug: "healthcare-patient-engagement",
              title:
                "Health system personalizes outreach with predictive models",
              metric: "32% engagement lift",
              image: "/images/case-healthcare-patient-engagement.jpg",
            },
          ],
        },
        {
          industry: "Professional Services",
          cases: [
            {
              slug: "law-firm-contract-automation",
              title:
                "Law firm automates contract review with tuned LLMs",
              metric: "75% faster turnaround",
              image: "/images/case-law-firm-contract-automation.jpg",
            },
            {
              slug: "consulting-knowledge-management",
              title:
                "Consultancy unlocks 20 years of project knowledge with RAG",
              metric: "60% time saved on research",
              image: "/images/case-consulting-knowledge-management.jpg",
            },
            {
              slug: "legal-document-intelligence",
              title:
                "Legal team extracts insights from 10K+ documents instantly",
              metric: "90% manual review eliminated",
              image: "/images/case-legal-document-intelligence.jpg",
            },
            {
              slug: "accounting-audit-automation",
              title:
                "Accounting firm automates audit sampling and testing",
              metric: "45% audit cycle reduction",
              image: "/images/case-accounting-audit-automation.jpg",
            },
          ],
        },
      ]}
      // PRESERVED partner names from source `partners` array; rendered as text labels (no logos passed)
      ecosystemLogos={[
        { name: "OpenAI", logo: "" },
        { name: "Anthropic", logo: "" },
        { name: "AWS", logo: "" },
        { name: "Google Cloud", logo: "" },
        { name: "Microsoft Azure", logo: "" },
        { name: "Databricks", logo: "" },
      ]}
      // SOURCE has 4 leader cards but they are CLIENT TESTIMONIALS not internal practice leaders.
      // Spec describes "Our Leaders in <Capability>" with name + role + LinkedIn — i.e., NexDyne staff.
      // Per content authoring rule, do not invent staff identities. Pass empty array; section renders conditionally.
      // TODO: confirm with practice lead before publish (replace with real practice leadership headshots + LinkedIn URLs)
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (title + image + link); tags + readTime AUTHORED
      // TODO: confirm with practice lead before publish (readTime values)
      insights={[
        {
          tag: "Strategy",
          title:
            "The Mid-Market AI Playbook: Where to Start and How to Scale",
          readTime: "8 min read",
          image: "/images/insight-ai-playbook.jpg",
          href: "/insights/mid-market-ai-playbook",
        },
        {
          tag: "Technology",
          title: "Generative AI for Operations: Beyond the Hype",
          readTime: "6 min read",
          image: "/images/insight-genai-operations.jpg",
          href: "/insights/generative-ai-operations",
        },
        {
          tag: "Implementation",
          title: "Building Your First AI Use Case: A Practical Framework",
          readTime: "10 min read",
          image: "/images/insight-first-ai-usecase.jpg",
          href: "/insights/first-ai-use-case",
        },
      ]}
      // AUTHORED — source closing CTA was generic "Ready to explore AI" copy (no named lead)
      // TODO: confirm with practice lead before publish (real lead name + photo + email + LinkedIn)
      closingCTA={{
        leadName: "Our AI Practice Lead",
        leadTitle: "Head of Artificial Intelligence, NexDyne Consulting Group",
        leadPhoto:
          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BIZXaFVVaVqquVZA.png",
        leadEmail: "ai@nexdyne.tech",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
