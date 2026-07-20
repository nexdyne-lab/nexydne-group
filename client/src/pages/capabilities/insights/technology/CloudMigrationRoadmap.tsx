import InsightArticleV2 from "@/components/InsightArticleV2";

export default function CloudMigrationRoadmap() {
  const sections = [
    { id: "cloud-reality", label: "The growing-company cloud reality" },
    { id: "five-phase-framework", label: "The five-phase migration framework" },
    { id: "cost-management", label: "Cost management strategies" },
    { id: "security", label: "Security considerations" },
    { id: "common-pitfalls", label: "Common pitfalls to avoid" },
  ];

  const relatedInsights = [
    {
      title: "Cloud-Native Architecture Patterns",
      category: "Architecture",
      link: "/insights/cloud-native-architecture",
      image: "/images/insights/cloud-native-architecture-hero.jpg",
    },
    {
      title: "CEO's Guide to Data Modernization",
      category: "Data",
      link: "/insights/ceo-guide-data-modernization",
      image: "/images/insights/ceo-guide-data-modernization-hero.jpg",
    },
    {
      title: "Building a Data-Driven Culture",
      category: "Culture",
      link: "/insights/building-data-culture",
      image: "/images/insights/building-data-culture-hero.jpg",
    },
  ];

  return (
    <InsightArticleV2
      category="Technology"
      categoryHref="/capabilities/technology/insights"
      title="The Cloud Migration Roadmap for Mid-Size Companies"
      subtitle="A practical guide to planning and executing cloud migration without enterprise-level budgets or teams."
      heroImage="/images/capability-technology.jpg"
      publishDate="January 2026"
      readTime="14 min"
      sections={sections}
      keyTakeaways={[
        "Mid-size companies can migrate successfully without enterprise budgets by playing to advantages like smaller portfolios and faster decision-making.",
        "A disciplined five-phase framework—assessment, foundation, pilot, wave migration, and optimization—reduces risk and rework.",
        "Cost governance from day one, through reserved capacity, spot instances, auto-scaling, and storage tiering, keeps cloud spend under control.",
        "In the cloud, identity is the new perimeter, so security must shift to strong authentication, least-privilege access, and continuous monitoring.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Cloud migration is no longer optional for mid-size companies. The question is not whether to migrate, but how to
        do it efficiently without the massive budgets and specialized teams that large enterprises deploy. This guide
        provides a practical roadmap based on our experience with 80+ cloud migrations at growing companies.
      </p>

      <h2 id="cloud-reality">The growing-company cloud reality</h2>

      <p>
        Mid-size companies face unique challenges in cloud migration. They typically have legacy systems that have grown
        organically over years, limited IT staff who must maintain operations while executing migration, and budgets
        that don't allow for the "lift and shift everything" approaches that enterprises use.
      </p>

      <p>
        Yet they also have advantages. Smaller application portfolios mean faster assessment and planning. Fewer
        stakeholders enable quicker decision-making. And the business impact of successful migration—improved agility,
        reduced costs, better security—is proportionally larger.
      </p>

      <h2 id="five-phase-framework">The five-phase migration framework</h2>

      <h3>Phase 1: Assessment and strategy (4-6 weeks)</h3>

      <p>
        Begin with a comprehensive inventory of your current technology landscape. Document every application, database,
        and integration. For each, assess: business criticality, technical complexity, cloud readiness, and
        dependencies.
      </p>

      <p>
        Based on this assessment, categorize applications into migration strategies: Rehost (lift and shift), Replatform
        (lift and optimize), Refactor (rebuild for cloud), Replace (with SaaS), or Retire (decommission).
      </p>

      <h3>Phase 2: Foundation building (6-8 weeks)</h3>

      <p>
        Before migrating applications, establish your cloud foundation. This includes: landing zone architecture with
        appropriate security controls, network connectivity between cloud and on-premises, identity and access
        management integration, monitoring and logging infrastructure, and cost management and governance frameworks.
      </p>

      <p>
        Investing in a solid foundation pays dividends throughout the migration. It reduces security risks, simplifies
        compliance, and prevents the "cloud sprawl" that drives up costs.
      </p>

      <h3>Phase 3: Pilot migration (4-6 weeks)</h3>

      <p>
        Select 2-3 applications for initial migration. Choose applications that are important enough to matter but not
        so critical that failure would be catastrophic. Good pilot candidates are: moderately complex (not trivial, not
        mission-critical), representative of your broader portfolio, owned by teams willing to participate actively.
      </p>

      <p>
        The pilot phase is as much about learning as delivery. Document everything: what worked, what didn't, how long
        things actually took versus estimates. These learnings will inform the broader migration.
      </p>

      <h3>Phase 4: Wave migration (3-12 months)</h3>

      <p>
        Migrate remaining applications in planned waves, typically 3-5 applications per wave. Sequence waves to manage
        risk and dependencies: start with less critical applications, progress to more critical ones as your team gains
        experience.
      </p>

      <p>
        Each wave follows a consistent pattern: detailed planning, environment preparation, migration execution, testing
        and validation, cutover and stabilization. Standardizing this process improves efficiency and reduces errors.
      </p>

      <h3>Phase 5: Optimization (ongoing)</h3>

      <p>
        Migration is not the end—it's the beginning of cloud optimization. Once applications are running in the cloud,
        focus on: right-sizing resources based on actual usage, implementing auto-scaling for variable workloads,
        optimizing data storage and transfer costs, and modernizing applications to leverage cloud-native services.
      </p>

      <h2 id="cost-management">Cost management strategies</h2>

      <p>Cloud costs can spiral quickly without proper governance. Implement these strategies from day one:</p>

      <ul>
        <li>
          <strong>Reserved capacity:</strong> For predictable workloads, commit to 1-3 year reserved instances for
          30-60% savings over on-demand pricing.
        </li>
        <li>
          <strong>Spot instances:</strong> For fault-tolerant workloads, use spot instances for up to 90% savings on
          compute costs.
        </li>
        <li>
          <strong>Auto-scaling:</strong> Configure applications to scale down during low-usage periods, particularly
          nights and weekends.
        </li>
        <li>
          <strong>Storage tiering:</strong> Move infrequently accessed data to lower-cost storage tiers automatically.
        </li>
      </ul>

      <h2 id="security">Security considerations</h2>

      <p>Cloud migration changes your security model fundamentally. Key considerations include:</p>

      <ul>
        <li>
          <strong>Shared responsibility:</strong> Understand what the cloud provider secures versus what you must
          secure. This varies by service type.
        </li>
        <li>
          <strong>Identity-centric security:</strong> In the cloud, identity is the new perimeter. Implement strong
          authentication, least-privilege access, and continuous monitoring.
        </li>
        <li>
          <strong>Data protection:</strong> Encrypt data at rest and in transit. Implement data loss prevention
          controls. Understand data residency requirements.
        </li>
        <li>
          <strong>Compliance:</strong> Ensure your cloud configuration meets relevant compliance requirements (HIPAA,
          PCI, SOC 2, etc.). Use cloud-native compliance tools to automate verification.
        </li>
      </ul>

      <h2 id="common-pitfalls">Common pitfalls to avoid</h2>

      <ul>
        <li>
          <strong>Lift and shift everything:</strong> Simply moving applications to the cloud without optimization often
          increases costs without improving capabilities. Be selective about what to rehost versus refactor.
        </li>
        <li>
          <strong>Underestimating data migration:</strong> Moving large datasets takes longer than expected. Plan for
          data migration early and test thoroughly.
        </li>
        <li>
          <strong>Ignoring training:</strong> Cloud requires new skills. Invest in training your team before, during,
          and after migration.
        </li>
        <li>
          <strong>Skipping the foundation:</strong> Rushing to migrate applications without proper foundation leads to
          security gaps, compliance issues, and technical debt.
        </li>
      </ul>
    </InsightArticleV2>
  );
}
