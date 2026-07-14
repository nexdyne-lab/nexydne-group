import InsightArticleV2 from "@/components/InsightArticleV2";

export default function LeanOperationsScale() {
  const sections = [
    { id: "beyond-factory", label: "Beyond the factory floor" },
    { id: "eight-wastes", label: "The eight wastes" },
    { id: "success-factors", label: "Key success factors" },
    { id: "management-system", label: "The management system" },
    { id: "scaling-challenges", label: "Scaling challenges" },
    { id: "lean-culture", label: "Building a lean culture" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Smart Cost Reduction", category: "Performance Improvement", link: "/insights/smart-cost-reduction", image: "/images/capabilities/cap-strategy-spheres.jpg" },
    { title: "Working Capital Optimization", category: "Performance Improvement", link: "/insights/working-capital-optimization", image: "/images/capabilities/cap-hands-data.jpg" },
    { title: "Performance Improvement Framework", category: "Performance Improvement", link: "/insights/performance-improvement-framework", image: "/images/industries/ops-gears.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Performance Improvement"
      title="Lean Operations at Scale"
      subtitle="How to apply lean principles to complex organizations for sustainable operational excellence and continuous improvement."
      heroImage="/images/capabilities/cap-team-screens.jpg"
      publishDate="December 2024"
      readTime="11 min"
      sections={sections}
      keyTakeaways={[
        "Lean principles—eliminating waste, reducing variation, and continuously improving—apply far beyond manufacturing to any organization that wants to deliver more value with fewer resources.",
        "The DOWNTIME framework captures the eight wastes: defects, overproduction, waiting, non-utilized talent, transportation, inventory, motion, and extra processing.",
        "Scaling lean depends on leadership commitment, a sustaining management system, and broad capability building—not tools and events alone.",
        "Lean at scale is ultimately about culture, and the organizations that achieve it gain a competitive advantage that compounds and is difficult to replicate.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="beyond-factory">Beyond the Factory Floor</h2>
      <p>
        Lean principles were developed in manufacturing but apply far more broadly. The core concepts—eliminating
        waste, reducing variation, and continuously improving—are relevant to any organization that wants to deliver
        more value with fewer resources.
      </p>
      <p>
        Yet many organizations struggle to scale lean beyond pilot projects. They achieve impressive results in one
        area, then fail to replicate success across the enterprise. This article explores how to build lean
        capabilities that scale.
      </p>

      <h2 id="eight-wastes">The Eight Wastes</h2>
      <p>
        The DOWNTIME framework is a memorable way to identify the eight classic wastes lean sets out to eliminate:
      </p>
      <ul>
        <li>
          <strong>D</strong>efects — errors requiring rework
        </li>
        <li>
          <strong>O</strong>verproduction — making more than needed
        </li>
        <li>
          <strong>W</strong>aiting — idle time between steps
        </li>
        <li>
          <strong>N</strong>on-utilized talent — underusing people
        </li>
        <li>
          <strong>T</strong>ransportation — unnecessary movement
        </li>
        <li>
          <strong>I</strong>nventory — excess stock or WIP
        </li>
        <li>
          <strong>M</strong>otion — unnecessary physical movement
        </li>
        <li>
          <strong>E</strong>xtra processing — more work than required
        </li>
      </ul>

      <h2 id="success-factors">Scaling Lean: Key Success Factors</h2>

      <h3>Leadership Commitment</h3>
      <p>
        Lean transformation requires sustained leadership commitment. Leaders must model lean behaviors, allocate
        resources, and hold the organization accountable for results.
      </p>

      <h3>Management System</h3>
      <p>
        Tools and events don't sustain themselves. A lean management system—including daily management, visual
        controls, and problem-solving routines—is essential for sustainability.
      </p>

      <h3>Capability Building</h3>
      <p>
        Lean at scale requires broad capability. Invest in training and coaching to build problem-solving skills
        throughout the organization, not just in a central lean team.
      </p>

      <h2 id="management-system">The Lean Management System</h2>

      <h3>Daily Management</h3>
      <p>
        Short, focused meetings at the start of each day to review performance, identify issues, and assign
        countermeasures. The foundation of operational discipline.
      </p>

      <h3>Visual Management</h3>
      <p>
        Make performance visible so problems are immediately apparent. Visual boards, status indicators, and
        real-time metrics enable rapid response.
      </p>

      <h3>Standard Work</h3>
      <p>
        Document the current best way to perform each process. Standard work is the baseline for improvement—you
        can't improve what isn't standardized.
      </p>

      <h3>Problem Solving</h3>
      <p>
        Structured approach to identifying root causes and implementing countermeasures. A3 thinking and PDCA cycles
        build problem-solving capability.
      </p>

      <h2 id="scaling-challenges">Common Scaling Challenges</h2>
      <ul>
        <li>
          <strong>Tool focus:</strong> Implementing lean tools without the underlying management system and culture
          change.
        </li>
        <li>
          <strong>Expert dependency:</strong> Relying on a central lean team rather than building capability
          throughout the organization.
        </li>
        <li>
          <strong>Event-driven improvement:</strong> Focusing on kaizen events without daily management to sustain
          gains.
        </li>
        <li>
          <strong>Insufficient leadership engagement:</strong> Leaders who delegate lean rather than actively
          participating.
        </li>
      </ul>

      <h2 id="lean-culture">Building a Lean Culture</h2>
      <p>
        Ultimately, lean at scale is about culture. It's about creating an organization where everyone—from the front
        line to the C-suite—is engaged in identifying and solving problems, eliminating waste, and continuously
        improving.
      </p>
      <p>
        This culture doesn't happen overnight. It requires years of consistent effort, leadership modeling, and
        reinforcement. But organizations that achieve it gain a sustainable competitive advantage that's difficult
        for competitors to replicate.
      </p>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        Lean at scale is achievable, but it requires more than tools and training. It requires a management system
        that sustains improvement, leadership commitment that persists through challenges, and a culture that embraces
        continuous improvement as a way of working. Organizations that get this right achieve operational excellence
        that compounds over time.
      </p>
    </InsightArticleV2>
  );
}
