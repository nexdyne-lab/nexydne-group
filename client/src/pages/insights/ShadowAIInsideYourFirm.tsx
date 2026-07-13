import InsightArticle from "@/components/InsightArticle";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function ShadowAIInsideYourFirm() {
  const references = [
    { label: "IBM Security — “Cost of a Data Breach Report.”", url: "https://www.ibm.com/reports/data-breach" },
    { label: "NIST — AI Risk Management Framework.", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "McKinsey & Company — “The state of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
  ];

  const relatedInsights = [
    { title: "The EU AI Act Is Enforcing in Stages", category: "Regulation & Governance", link: "/insights/eu-ai-act-playbook", image: "/images/business-strategy-abstract.jpg" },
    { title: "Agentic AI Just Got a Budget Line", category: "The AI Agenda", link: "/insights/agentic-ai-budget-line", image: "/images/ai-acceleration-abstract.jpg" },
    { title: "The AI Adoption Outlook 2026", category: "Featured Insight", link: "/insights/ai-adoption-outlook-2026", image: "/images/agentic-ai-abstract.jpg" },
  ];

  return (
    <InsightArticle
      category="Security & Risk"
      categoryHref="/insights"
      title="Shadow AI Is the New Shadow IT — Except This Time It Makes Decisions"
      subtitle="Unapproved AI tools are already drafting your proposals, summarising your contracts, and answering your customers. You can't block your way out — the firms getting this right are governing their way out."
      heroImage="/images/cyber-abstract.jpg"
      publishDate="July 6, 2026"
      readTime="8 min"
      keyTakeaways={[
        "Shadow AI — employees using unapproved AI tools with company data — is now pervasive, and unlike shadow IT it doesn't just store information; it transforms it and feeds decisions.",
        "Breach research shows AI-related incidents concentrate where access controls and inventories are missing; ungoverned AI usage adds measurable cost when things go wrong.",
        "Bans reliably fail: they push usage onto personal devices and accounts, making it invisible instead of safe.",
        "The working pattern is paved-road governance: sanctioned tools that are genuinely good, clear data rules, a lightweight intake path, and monitoring for what falls outside it.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        A decade ago, "shadow IT" meant a marketing team quietly paying for a file-sharing tool. Annoying,
        occasionally dangerous, mostly contained. Its successor is different in kind, not just degree.
        <strong> Shadow AI doesn't just store your information — it reasons over it.</strong> The unapproved tool
        isn't holding a document; it is summarising the contract, drafting the client answer, scoring the lead,
        and shaping decisions your firm is accountable for.
      </p>

      <p>
        And it is everywhere. Adoption research consistently finds employee AI usage running far ahead of official
        enablement<Cite n={3} /> — people use what makes them faster, sanctioned or not. Security research tells
        the same story from the damage side: AI-related incidents cluster in organisations with no AI inventory
        and no access controls, and ungoverned AI use adds measurable cost when a breach lands<Cite n={1} />.
      </p>

      <h2>Why this is worse than the last shadow</h2>

      <p>
        Three properties separate shadow AI from shadow IT:
      </p>

      <p>
        <strong>It exfiltrates by design.</strong> The whole point of using the tool is to paste in the
        confidential thing — the term sheet, the customer complaint history, the source code. Data leaves not by
        accident, but as the intended workflow.
      </p>

      <p>
        <strong>Its output re-enters your business as work product.</strong> A hallucinated clause in an AI-drafted
        proposal, a mispriced quote from an unvetted model — errors don't stay in the tool. They ship under your
        letterhead, with your liability attached.
      </p>

      <p>
        <strong>It is invisible to traditional controls.</strong> To your network, it's just HTTPS traffic to a
        popular domain. There is no server to find, no licence renewal to catch. Discovery has to be deliberate.
      </p>

      <blockquote>
        Shadow IT leaked your files. Shadow AI leaks your judgment — and imports someone else's, unreviewed,
        straight into your work product.
      </blockquote>

      <h2>Why the ban reflex backfires</h2>

      <p>
        The instinctive response — block the domains, publish a prohibition memo — has been tried at scale, and
        the result is consistent: usage doesn't stop, it relocates. To personal phones, home accounts, and
        pasted-through personal email. The firm keeps all of the risk and loses all of the visibility. Prohibition
        converts a governable behaviour into an invisible one.
      </p>

      <h2>The paved-road alternative</h2>

      <p>
        The firms handling this well follow a pattern we'd summarise in four moves:
      </p>

      <h3>1. Give people a road that's actually better</h3>
      <p>
        Sanction a small set of capable tools — with enterprise data terms — and make access frictionless. Most
        shadow usage isn't rebellion; it's unmet demand. Meet it, and the shadow population collapses on its own.
      </p>

      <h3>2. Publish data rules a human can remember</h3>
      <p>
        Three tiers work: green (public, use freely), amber (internal, sanctioned tools only), red (client,
        personal, regulated — named systems only). One page. No legal prose. Reinforced in the tools themselves.
      </p>

      <h3>3. Run discovery like you mean it</h3>
      <p>
        An AI usage inventory — network telemetry plus an amnesty survey — repeated quarterly. The amnesty part
        matters: you want people to tell you about the tool they love, not hide it. Every disclosure is
        intelligence about unmet demand.
      </p>

      <h3>4. Anchor it in a real framework</h3>
      <p>
        Fold AI usage into your risk management using a recognised structure such as the NIST AI RMF<Cite n={2} />.
        That gives the board a defensible answer, satisfies customer due-diligence, and — for firms in scope —
        does double duty as EU AI Act groundwork.
      </p>

      <h2>The governance dividend</h2>

      <p>
        Handled this way, the shadow-AI problem quietly becomes an asset: a live map of where your people find AI
        genuinely useful, field-tested and prioritised by demand. That map is exactly where your sanctioned AI
        roadmap should start. Govern the behaviour, and you don't just remove the risk — you inherit the R&D your
        workforce has been doing for free.
      </p>
    </InsightArticle>
  );
}
