import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function EnergyTradingPlatform() {
  return (
    <CaseStudyTemplate
      client="Energy Trading Firm"
      industry="Energy · Custom Software"
      title="Energy Firm Builds Real-Time Trading Platform for $50M Daily Volume"
      subtitle="Custom React/Node.js platform processes 50,000 trades daily with sub-second latency, replacing legacy system that couldn't scale."
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80"
      challenge={`A mid-sized energy trading firm in Houston was processing $50 million in daily transactions through a 15-year-old proprietary system built on outdated technology. The platform struggled to handle peak trading volumes, frequently experienced latency spikes during market volatility, and lacked the real-time analytics traders needed to make split-second decisions.

The legacy system's limitations were costing the firm money in three ways: missed trading opportunities due to slow execution, manual workarounds that increased operational risk, and expensive maintenance contracts for obsolete infrastructure. Off-the-shelf trading platforms couldn't accommodate their unique risk models and regulatory reporting requirements.

They needed a custom solution that could scale with their growth, integrate with their existing risk management systems, and provide the performance and reliability their traders demanded.`}
      solution={`NEXDYNE architected a modern trading platform using React for the frontend and Node.js microservices for the backend, deployed on AWS for elastic scalability. We built real-time market data feeds, order execution logic, and risk analytics dashboards tailored to their specific trading strategies.

The platform processes 50,000 trades daily with sub-second latency, even during peak volatility. WebSocket connections deliver live price updates to trader workstations, while automated risk checks validate every order before execution. Integration with their existing ETRM system ensures seamless position reconciliation and regulatory reporting.

We implemented a phased rollout strategy, running the new platform in parallel with the legacy system for three months to validate accuracy and build trader confidence.`}
      impact={`The new platform transformed the firm's trading operations. Traders gained real-time visibility into positions, risk exposure, and market conditions—enabling faster, more confident decision-making. Automated order validation eliminated manual review bottlenecks, reducing average execution time from 3.2 seconds to under 0.5 seconds.

The firm eliminated $240,000 in annual maintenance costs for the legacy system and reduced infrastructure spending by 40% through cloud-native architecture. More importantly, they captured trading opportunities they would have missed with the old platform, generating an estimated $1.8 million in additional revenue during the first year.`}
      metrics={[
        { value: "$50M", label: "Daily trading volume processed" },
        { value: "99.99%", label: "Platform uptime achieved" },
        { value: "85%", label: "Reduction in execution latency" }
      ]}
      tags={["Custom Software", "Energy", "Real-Time Systems", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
