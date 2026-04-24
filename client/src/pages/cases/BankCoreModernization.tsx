import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function BankCoreModernization() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Core Modernization"
      title="Regional Bank Modernizes Core Banking Platform"
      subtitle="Legacy mainframe migration to cloud-native architecture reduces processing time by 67% and cuts infrastructure costs by $3.8M annually."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      challenge={`A regional bank serving 850,000 customers across seven states faced a critical inflection point. Their core banking platform—originally deployed in 1998 on IBM mainframe infrastructure—had become a strategic liability. The system processed 2.4 million transactions daily but required 18 hours of overnight batch processing to reconcile accounts and update balances. Customers couldn't see real-time account activity, and the bank couldn't launch new products without months of COBOL development work.

The technology debt had accumulated to crisis levels. The bank employed only three developers who understood the legacy COBOL codebase, with two approaching retirement. Annual mainframe licensing and maintenance costs exceeded $5.2 million, while competitors with modern cloud platforms operated at a fraction of that cost. Customer satisfaction scores had declined for three consecutive years, with mobile banking functionality lagging industry standards by at least five years.

Leadership recognized that incremental improvements wouldn't suffice. The bank needed a complete platform transformation—migrating decades of business logic, customer data, and transaction history to a modern, cloud-native architecture.`}
      solution={`NEXDYNE partnered with the bank to design and execute a phased modernization strategy that balanced risk mitigation with speed to value. Rather than attempting a "big bang" migration, the team architected a strangler fig pattern—gradually replacing mainframe functionality with cloud-native microservices while maintaining system stability throughout the transition.

The solution centered on a modern core banking platform built on AWS, leveraging containerized microservices, event-driven architecture, and real-time data streaming. NEXDYNE's team reverse-engineered 2.8 million lines of COBOL code, documenting business rules and data flows before translating them into modern Java and Python services.

The migration proceeded in carefully orchestrated waves over 14 months. NEXDYNE built a sophisticated data synchronization layer that kept mainframe and cloud systems in sync during the transition, allowing the bank to validate new functionality against legacy behavior before cutting over customer segments.`}
      impact={`The modernized core banking platform transformed the bank's operational capabilities and competitive position. Transaction processing time dropped from 18 hours to 6 hours—a 67% improvement—with a clear path to real-time processing as the final mainframe components are retired. Customers now see account updates within seconds rather than waiting until the next business day.

Infrastructure costs decreased by $3.8 million annually, with cloud-based architecture eliminating expensive mainframe licensing fees and reducing data center footprint by 40%. System reliability exceeded expectations, achieving 99.94% uptime during the first 12 months. Development velocity increased by 340%, with new features moving from concept to production in weeks rather than months.`}
      metrics={[
        { value: "67%", label: "Faster transaction processing" },
        { value: "$3.8M", label: "Annual cost savings" },
        { value: "94%", label: "System uptime achieved" }
      ]}
      tags={["Cloud Migration", "Legacy Modernization", "Banking", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default BankCoreModernization;
