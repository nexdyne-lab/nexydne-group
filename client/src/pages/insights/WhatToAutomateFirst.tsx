import InsightArticleV2 from "@/components/InsightArticleV2";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

/**
 * GEO/SEO cluster article — target query: "what should a small business
 * automate first". Direct answer capsule up top; scorecard; sequence; cited
 * stats. Funnels to the Operations Readiness Checklist via template callout.
 */
export default function WhatToAutomateFirst() {
  const references = [
    { label: "Gartner — “Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027” (June 2025).", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
    { label: "First Page Sage — “Agentic AI Adoption Statistics” (2026): compiled Forrester/Anaconda findings on pilot failure root causes.", url: "https://firstpagesage.com/reports/agentic-ai-adoption-statistics/" },
    { label: "McKinsey & Company — “The State of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  ];

  const relatedInsights = [
    { title: "Is Your Business Ready for AI? A 15-Minute Test", category: "AI Readiness", link: "/insights/is-your-business-ready-for-ai", image: "/images/insights/is-your-business-ready-for-ai-hero.jpg" },
    { title: "Measuring ROI: your first year of automation", category: "Real numbers", link: "/insights/measuring-automation-roi", image: "/images/insights/measuring-automation-roi-hero.jpg" },
    { title: "Why Intelligent Automation Isn't Optional Anymore", category: "Automation", link: "/insights/why-intelligent-automation-isnt-optional-anymore", image: "/images/insights/why-intelligent-automation-isnt-optional-anymore-hero.jpg" },
  ];

  const sections = [
    { id: "the-answer", label: "The answer" },
    { id: "six-filters", label: "The six filters" },
    { id: "usual-suspects", label: "Where to look first" },
    { id: "never-automate", label: "What NOT to automate" },
    { id: "first-90-days", label: "A first-90-days sequence" },
  ];

  return (
    <InsightArticleV2
      category="Automation"
      categoryHref="/insights"
      canonicalPath="/insights/what-should-a-small-business-automate-first"
      title="What Should a Small Business Automate First?"
      subtitle="Not the flashiest process — the most boring one. A practical filter for choosing your first automation, the usual best candidates, and the processes you should never hand to a machine."
      heroImage="/images/insights/what-should-a-small-business-automate-first-hero.jpg"
      publishDate="July 19, 2026"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "Automate first: high-frequency, rule-based, low-exception work — invoicing, data entry between systems, report assembly, scheduling, and status chasing.",
        "Six filters pick the winner: frequency, time consumed, error rate, standardization, data availability, and how little human judgment the task needs.",
        "Never automate an undocumented process, a decision that needs human judgment, or anything customer-facing without a review step.",
        "Sequence beats ambition: document → baseline → automate one process → measure against a keep-or-kill number → then expand.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <h2 id="the-answer">The answer</h2>
      <p>
        <strong>A small business should automate its most frequent, most rule-based, least-exceptional process
        first — typically invoicing, data entry between systems, report assembly, appointment scheduling, or
        status-update chasing.</strong> Not the flashiest candidate; the most boring one. The first automation's
        real job is to prove value and build the muscle — pick a process where the rules are clear, the volume
        is high, and being wrong is cheap.
      </p>
      <p>
        And one rule above all: <em>never automate a process nobody has written down.</em> Automating an
        undocumented process doesn't remove the chaos — it runs the chaos faster. That single mistake sits under
        a remarkable share of failed projects: compiled industry analyses attribute roughly 41% of AI/automation
        pilot failures to unclear success criteria and a third to data and access problems<Cite n={2} /> —
        both symptoms of automating before the groundwork.
      </p>

      <h2 id="six-filters">The six filters for choosing your first automation</h2>
      <p>Score each candidate process against six questions — the more yeses, the better the candidate:</p>
      <ol>
        <li><strong>Frequency</strong> — does it happen daily or weekly (not quarterly)?</li>
        <li><strong>Time</strong> — does it consume meaningful hours across the team?</li>
        <li><strong>Error rate</strong> — do mistakes and rework show up regularly?</li>
        <li><strong>Standardization</strong> — is it done the same way every time, and written down?</li>
        <li><strong>Data availability</strong> — does the process's data live somewhere reachable and consistent?</li>
        <li><strong>Judgment</strong> — can most cases be handled by rules, with exceptions routed to a person?</li>
      </ol>
      <p>
        A process that passes five or six filters is ready. Three or four: fix the gaps first — usually
        documentation or data. Fewer: it's not an automation candidate yet, whatever the vendor demo says.
      </p>

      <h2 id="usual-suspects">Where to look first in a growing company</h2>
      <ul>
        <li><strong>Finance:</strong> invoice creation and matching, expense processing, payment reminders.</li>
        <li><strong>Operations:</strong> order entry, re-keying data between two systems, standing report assembly.</li>
        <li><strong>Customer service:</strong> FAQ-grade replies drafted for human review, ticket routing and tagging.</li>
        <li><strong>Sales &amp; admin:</strong> meeting scheduling, CRM updates from email, proposal first drafts.</li>
      </ul>

      <h2 id="never-automate">What should you NOT automate?</h2>
      <ul>
        <li><strong>Undocumented processes</strong> — document first; you'll often find fixes worth more than the automation.</li>
        <li><strong>Judgment calls</strong> — pricing exceptions, hiring decisions, sensitive customer situations. AI can draft; a human decides.</li>
        <li><strong>Anything customer-facing without review</strong> — the average case is easy, and the edge case is where your reputation lives.</li>
        <li><strong>A process that changes weekly</strong> — stabilize it first, or you'll rebuild the automation forever.</li>
      </ul>

      <h2 id="first-90-days">A realistic first-90-days sequence</h2>
      <ol>
        <li><strong>Weeks 1–2:</strong> pick one process with the six filters; write it down end-to-end.</li>
        <li><strong>Weeks 3–4:</strong> record the baseline — hours, error rate, cycle time — and set one keep-or-kill number.</li>
        <li><strong>Weeks 5–10:</strong> automate that one process; route exceptions to a named owner.</li>
        <li><strong>Weeks 11–13:</strong> measure against the baseline. Hit the number → expand to the next process. Miss it → fix or kill, cheaply.</li>
      </ol>
      <p>
        That discipline — one process, one owner, one number — is the difference between the firms that compound
        automation gains and the 40%+ whose projects Gartner expects to be canceled outright<Cite n={1} />.
      </p>
    </InsightArticleV2>
  );
}
