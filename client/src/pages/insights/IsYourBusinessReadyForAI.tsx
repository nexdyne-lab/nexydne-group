import InsightArticleV2 from "@/components/InsightArticleV2";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

/**
 * GEO/SEO cluster article — target query: "is my business ready for AI".
 * Structure: direct answer first, question-form H2s, cited statistics,
 * quotable definition. Funnels to the AI Readiness Guide (template callout).
 */
export default function IsYourBusinessReadyForAI() {
  const references = [
    { label: "Gartner — “Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027” (June 2025).", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
    { label: "MIT NANDA — “The GenAI Divide: State of AI in Business” (2025): ~95% of enterprise GenAI pilots fail to reach production.", url: "https://nanda.media.mit.edu/" },
    { label: "First Page Sage — “Agentic AI Adoption Statistics” (2026): compiled Forrester/Anaconda findings on pilot-to-production rates and root causes.", url: "https://firstpagesage.com/reports/agentic-ai-adoption-statistics/" },
    { label: "McKinsey & Company — “The State of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  ];

  const relatedInsights = [
    { title: "Shadow AI Is the New Shadow IT", category: "Security & Risk", link: "/insights/shadow-ai-inside-your-firm", image: "/images/insights/shadow-ai-inside-your-firm-hero.jpg" },
    { title: "Winning with governed AI at growing companies", category: "Practical AI", link: "/insights/practical-ai-guide", image: "/images/ai-acceleration-abstract.jpg" },
    { title: "Measuring ROI: your first year of automation", category: "Real numbers", link: "/insights/measuring-automation-roi", image: "/images/business-strategy-abstract.jpg" },
  ];

  const sections = [
    { id: "short-answer", label: "The short answer" },
    { id: "why-projects-fail", label: "Why AI projects fail" },
    { id: "ten-signals", label: "The 10 readiness signals" },
    { id: "score-yourself", label: "How to score yourself" },
    { id: "what-to-do", label: "What to do with your result" },
  ];

  return (
    <InsightArticleV2
      category="AI Readiness"
      categoryHref="/insights"
      canonicalPath="/insights/is-your-business-ready-for-ai"
      title="Is Your Business Ready for AI? A 15-Minute Test for SMB Leaders"
      subtitle="Most AI projects fail before implementation begins — for readiness reasons, not technology reasons. Here is the 10-signal test we use with growing companies, and how to read your result."
      heroImage="/images/insights/is-your-business-ready-for-ai-hero.jpg"
      publishDate="July 19, 2026"
      readTime="7 min"
      sections={sections}
      keyTakeaways={[
        "AI readiness is the degree to which your processes, data, people, and ownership structures can absorb AI productively — it is mostly an operations question, not a technology question.",
        "Industry research attributes most AI failures to readiness gaps: unclear success criteria and inaccessible data top the list — not model quality.",
        "Ten signals predict success: defined problem, stable process, usable data, process understanding, ownership, risk handling, human oversight, measurability, maintainability, and justified cost.",
        "Score each signal 0–2. Under 8: fix foundations first. 8–14: close your lowest gaps, then run one narrow pilot. 15+: prioritize use cases and build a plan.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <h2 id="short-answer">The short answer</h2>
      <p>
        <strong>Your business is ready for AI when four things are true: the problem you want AI to solve is
        specific, the process it touches is stable and documented, the data it needs is usable, and one named
        person will own the outcome.</strong> If any of those four is missing, an AI investment doesn't fix the
        gap — it amplifies it, faster and at scale. Everything else in this article is a way of testing those
        four conditions honestly.
      </p>
      <p>
        A useful working definition: <em>AI readiness is the degree to which your processes, data, people, and
        accountability structures can absorb AI productively.</em> Notice what's absent from that definition —
        model choice, vendors, and tools. Readiness is an operations question before it is a technology question.
      </p>

      <h2 id="why-projects-fail">Why do most AI projects fail?</h2>
      <p>
        The failure numbers are stark and consistent. Gartner projects that over 40% of agentic AI projects will
        be canceled by the end of 2027, citing escalating costs and unclear business value<Cite n={1} />. MIT
        research found roughly 95% of enterprise GenAI pilots fail to reach production<Cite n={2} />. And when
        analysts trace the root causes, technology barely features: compiled industry research attributes about
        41% of failures to <strong>unclear success criteria</strong> and 33% to <strong>insufficient data and
        tool access</strong><Cite n={3} /> — with missing ownership and evaluation covering most of the rest.
      </p>
      <p>
        Read that list again: an undefined problem, unusable data, nobody owning the outcome. Those aren't AI
        failures. <strong>They are readiness failures that were diagnosable before a dollar was spent.</strong>
      </p>

      <h2 id="ten-signals">The 10 readiness signals</h2>
      <p>These are the ten questions we walk growing companies through before any AI investment:</p>
      <ol>
        <li><strong>Defined problem</strong> — you can state in one sentence what you're solving, who feels it, and how often.</li>
        <li><strong>Stable process</strong> — the work runs the same way most of the time, and the steps are written down.</li>
        <li><strong>Usable data</strong> — the data the task needs is identifiable, reasonably clean, and reachable.</li>
        <li><strong>Process understanding</strong> — several people can explain the work and would spot a wrong output.</li>
        <li><strong>Ownership</strong> — one named person will own the system after it goes live.</li>
        <li><strong>Risk handling</strong> — the main exceptions are listed, and you know which cases must route to a human.</li>
        <li><strong>Human oversight</strong> — you've drawn the line between what AI drafts and what humans decide.</li>
        <li><strong>Measurability</strong> — a baseline exists, and one number decides keep-or-kill.</li>
        <li><strong>Maintainability</strong> — documentation exists and more than one person can run it.</li>
        <li><strong>Justified cost</strong> — hours saved × loaded cost beats total cost with a defensible payback.</li>
      </ol>

      <h2 id="score-yourself">How to score yourself</h2>
      <p>
        Score each signal <strong>0 (not in place), 1 (partially), or 2 (clearly in place)</strong> — twenty
        points maximum. Do it with your leadership team, separately, then compare: the disagreements are usually
        more valuable than the total. The whole exercise takes about fifteen minutes.
      </p>

      <h2 id="what-to-do">What to do with your result</h2>
      <ul>
        <li><strong>0–7 — not ready.</strong> Good news, honestly: the fixes (process clarity, ownership, one source of truth) are cheaper than any tool and pay off with or without AI. Do them first.</li>
        <li><strong>8–14 — partially ready.</strong> The most common result. Close your two or three lowest-scoring signals, then run <em>one</em> narrow pilot with a baseline and a keep-or-kill number.</li>
        <li><strong>15–20 — ready.</strong> Prioritize use cases and build an implementation plan. Your risk now is doing too much at once — sequence it.</li>
      </ul>
      <p>
        Whatever your score, your lowest-scoring signals are your roadmap — fix them in order, and the eventual
        AI investment lands on foundations that hold.
      </p>
    </InsightArticleV2>
  );
}
