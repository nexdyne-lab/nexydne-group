import InsightArticleV2 from "@/components/InsightArticleV2";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

/**
 * GEO/SEO cluster article — target query: "AI readiness checklist for small
 * business". Checklist format (highly quotable/extractable for AI engines),
 * cited stats, funnels to the downloadable self-scoring guide.
 */
export default function AIReadinessChecklistSMB() {
  const references = [
    { label: "MIT NANDA — “The GenAI Divide: State of AI in Business” (2025): ~95% of enterprise GenAI pilots fail to reach production.", url: "https://nanda.media.mit.edu/" },
    { label: "Gartner — “Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027” (June 2025).", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
    { label: "First Page Sage — “Agentic AI Adoption Statistics” (2026): compiled analyses of failure root causes (unclear success criteria, data access).", url: "https://firstpagesage.com/reports/agentic-ai-adoption-statistics/" },
  ];

  const relatedInsights = [
    { title: "Is Your Business Ready for AI? A 15-Minute Test", category: "AI Readiness", link: "/insights/is-your-business-ready-for-ai", image: "/images/insights/is-your-business-ready-for-ai-hero.jpg" },
    { title: "What Should a Small Business Automate First?", category: "Automation", link: "/insights/what-should-a-small-business-automate-first", image: "/images/insights/what-should-a-small-business-automate-first-hero.jpg" },
    { title: "Shadow AI Is the New Shadow IT", category: "Security & Risk", link: "/insights/shadow-ai-inside-your-firm", image: "/images/insights/shadow-ai-inside-your-firm-hero.jpg" },
  ];

  const sections = [
    { id: "definition", label: "What AI readiness means" },
    { id: "checklist", label: "The 10-point checklist" },
    { id: "scoring", label: "Scoring & bands" },
    { id: "get-the-guide", label: "The printable version" },
  ];

  return (
    <InsightArticleV2
      category="AI Readiness"
      categoryHref="/insights"
      canonicalPath="/insights/ai-readiness-checklist-for-small-business"
      title="The AI Readiness Checklist for Small Businesses (2026)"
      subtitle="Ten checks a leadership team can run in fifteen minutes to know whether an AI or automation investment will pay off — with a simple scoring system and honest interpretation bands."
      heroImage="/images/insights/ai-readiness-checklist-for-small-business-hero.jpg"
      publishDate="July 19, 2026"
      readTime="5 min"
      sections={sections}
      keyTakeaways={[
        "AI readiness = can your processes, data, people, and ownership structures absorb AI productively. It is testable in 15 minutes with ten checks.",
        "The checks cover: problem definition, process stability, data usability, team understanding, ownership, risk handling, human oversight, measurement, maintainability, and cost justification.",
        "Score 0–2 per check. Under 8/20: fix foundations before buying anything. 8–14: close gaps, then one narrow pilot. 15+: build a prioritized plan.",
        "The failure statistics justify the discipline: ~95% of GenAI pilots never reach production, and analysts trace most failures to readiness gaps, not model choice.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <h2 id="definition">What does "AI ready" actually mean?</h2>
      <p>
        <strong>AI readiness is the degree to which a business's processes, data, people, and accountability
        structures can absorb AI productively.</strong> It is not about which model or vendor you pick. Research
        keeps confirming this the hard way: roughly 95% of enterprise GenAI pilots never reach
        production<Cite n={1} />, Gartner expects over 40% of agentic AI projects to be canceled by the end of
        2027<Cite n={2} />, and root-cause analyses trace most failures to unclear success criteria and
        inaccessible data<Cite n={3} /> — readiness gaps, all diagnosable in advance.
      </p>

      <h2 id="checklist">The 10-point AI readiness checklist</h2>
      <p>Run these ten checks with your leadership team. Be honest — the value is in the low scores.</p>
      <ol>
        <li><strong>Problem definition.</strong> We can state in one sentence what we're solving, who feels it, and how often — not just "we should use AI."</li>
        <li><strong>Process stability.</strong> The target process runs the same way most of the time, and its steps are written down.</li>
        <li><strong>Data usability.</strong> The data the task needs is identifiable, reasonably clean, and reachable — no three-spellings-of-one-customer problem.</li>
        <li><strong>Team understanding.</strong> Several people can explain the process and would spot a wrong output.</li>
        <li><strong>Ownership.</strong> One named person will own the system after go-live, with time allocated.</li>
        <li><strong>Risk &amp; exceptions.</strong> The main edge cases are listed, and we know which must route to a human.</li>
        <li><strong>Human oversight.</strong> We've drawn the line between what AI drafts and what humans decide — especially anything customer-facing, financial, or regulated.</li>
        <li><strong>Measurement.</strong> A baseline exists (hours, error rate, cost) and one number decides keep-or-kill.</li>
        <li><strong>Maintainability.</strong> The setup is documented and more than one person can run it.</li>
        <li><strong>Cost justification.</strong> Hours saved × loaded cost beats total cost, with payback we could defend to a board.</li>
      </ol>

      <h2 id="scoring">Scoring and what your band means</h2>
      <p>Score each item <strong>0 (not in place), 1 (partially), 2 (clearly in place)</strong> — 20 points max:</p>
      <ul>
        <li><strong>0–7 · Not ready.</strong> Buy nothing yet. Fix process clarity, ownership, and one source of truth — cheaper than any tool, and the payoff arrives with or without AI.</li>
        <li><strong>8–14 · Partially ready.</strong> The most common band. Close your two or three lowest scores, then run one narrow pilot with a baseline.</li>
        <li><strong>15–20 · Ready.</strong> Prioritize use cases and build the plan — and resist doing everything at once.</li>
      </ul>

      <h2 id="get-the-guide">The printable, self-scoring version</h2>
      <p>
        This checklist condenses our full diagnostic. The complete version — with warning signs, "what ready
        looks like," and one concrete action per question — is free as a printable, self-scoring PDF built to be
        taken into a leadership meeting: <a href="/resources/ai-readiness-guide" className="text-primary font-semibold">The SMB AI Readiness Guide</a>.
        For the operations side of the same question, see the
        {" "}<a href="/resources/operations-readiness-checklist" className="text-primary font-semibold">Operations Readiness Checklist</a>.
      </p>
    </InsightArticleV2>
  );
}
