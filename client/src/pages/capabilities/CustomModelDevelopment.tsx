// TODO: David — confirm Custom Model Development experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Custom Model Development hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function CustomModelDevelopment() {
  return (
    <CapabilityHubTemplate
      hubName="Custom Model Development"
      slug="custom-model-development"
      heroSubtitle="Build proprietary AI models tailored to your unique business challenges. From fine-tuning foundation models to training custom architectures, we deliver AI that fits your data, your domain, and your economics."
      // TODO: confirm hero image asset matches Custom Model Development theme
      heroImage="/images/capabilities/cap-coder.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "90+", label: "Custom models trained and deployed" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Typical accuracy lift over off-the-shelf models" },
        // TODO: confirm with practice lead before publish
        { number: "60%", label: "Average inference cost reduction post-optimization" },
        // TODO: confirm with practice lead before publish
        { number: "12-week", label: "Median engagement length, prototype to production" },
      ]}
      ambitions={[
        {
          title: "Train models on proprietary data",
          description:
            "Turn the data only you have — case files, transactions, sensor logs, customer interactions — into models competitors can’t replicate off a public benchmark.",
        },
        {
          title: "Specialize foundation models for your domain",
          description:
            "Fine-tune leading foundation models so they speak your industry, your products, and your tone — without giving up the strength of the base model.",
        },
        {
          title: "Deploy ML in production at scale",
          description:
            "Get past notebooks. Stand up the pipelines, monitoring, and governance that keep models reliable as traffic, data, and business rules evolve.",
        },
        {
          title: "Cut inference cost without losing accuracy",
          description:
            "Optimize, distill, and right-size models so unit economics work at full volume — not just in the demo.",
        },
        {
          title: "Build responsibly and explainably",
          description:
            "Bake bias detection, explainability, and audit trails into the model from day one, so AI clears legal, risk, and customer-trust bars on the first review.",
        },
        {
          title: "Own your AI capability long-term",
          description:
            "Stand up an internal team that can run, maintain, and evolve the model after we leave — so you keep compounding the advantage.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Custom Model Development ambition →"
      howWeCanHelp={[
        {
          title: "Foundation Model Fine-Tuning",
          description:
            "Adapt GPT, Claude, Llama, or other foundation models to your domain using your proprietary data. Achieve specialized performance without training from scratch.",
          href: "/capabilities/artificial-intelligence/custom-model-development/foundation-fine-tuning",
        },
        {
          title: "Custom Architecture Design",
          description:
            "Design and train neural network architectures optimized for your specific use case — whether computer vision, NLP, time series, or multimodal applications.",
          href: "/capabilities/artificial-intelligence/custom-model-development/architecture-design",
        },
        {
          title: "Data Pipeline Engineering",
          description:
            "Build robust data pipelines for model training. We handle data collection, cleaning, labeling, augmentation, and version control at scale.",
          href: "/capabilities/artificial-intelligence/custom-model-development/data-pipelines",
        },
        {
          title: "Model Optimization",
          description:
            "Reduce inference costs and latency through quantization, pruning, distillation, and architecture optimization. Deploy efficient models at scale.",
          href: "/capabilities/artificial-intelligence/custom-model-development/model-optimization",
        },
        {
          title: "MLOps & Deployment",
          description:
            "Build production-grade ML infrastructure with automated training pipelines, model versioning, A/B testing, and monitoring for drift and degradation.",
          href: "/capabilities/artificial-intelligence/custom-model-development/mlops-deployment",
        },
        {
          title: "Responsible AI & Governance",
          description:
            "Implement bias detection, explainability frameworks, and compliance controls. Build AI systems that are fair, transparent, and auditable.",
          href: "/capabilities/artificial-intelligence/custom-model-development/responsible-governance",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Understand the problem deeply",
          body: "We start by understanding your business problem, not jumping to model architectures. What decisions need to be made, what data is available, what accuracy is required? Those answers shape everything that follows.",
        },
        {
          step: "02",
          title: "Iterate rapidly",
          body: "We use agile ML practices to deliver working models quickly — start with simple baselines, measure performance, and iterate. This approach reduces risk and ensures we’re solving the right problem.",
        },
        {
          step: "03",
          title: "Build for production",
          body: "From day one, we design for deployment. That means thinking about latency, cost, monitoring, and maintenance — not just accuracy. A model that can’t be deployed is worthless.",
        },
      ]}
      featuredCases={[
        {
          slug: "legal-document-intelligence",
          title: "Transforming legal research with AI-powered document intelligence",
          industry: "Professional Services",
          metric: "70%",
          image: "/images/capabilities/cap-coder.jpg",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/images/capabilities/cap-data-presentation.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/images/industries/tech-datacenter.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/predictive-analytics", name: "Predictive Analytics" },
        { href: "/capabilities/artificial-intelligence/generative-ai", name: "Generative AI" },
        { href: "/capabilities/artificial-intelligence/agentic-ai", name: "Agentic AI" },
      ]}
      ctaLeadName="Talk to our Custom Model Development lead"
    />
  );
}

