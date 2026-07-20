import InsightArticleV2 from "@/components/InsightArticleV2";

export default function HiringForBuilders() {
  const sections = [
    { id: "pirate-ship", label: "Pirate ship culture" },
    { id: "compensation", label: "Compensation" },
    { id: "tour-of-duty", label: "Tour of duty" },
    { id: "red-flag", label: "Red flag to watch" },
  ];

  const relatedInsights = [
    { title: "The Corporate Venture Advantage", category: "Venture Building", link: "/insights/corporate-venture-advantage", image: "/images/insights/corporate-venture-advantage-hero.jpg" },
    { title: "From MVP to Scale", category: "Venture Building", link: "/insights/from-mvp-to-scale", image: "/images/insights/from-mvp-to-scale-hero.jpg" },
    { title: "Building a Data-First Culture", category: "Culture", link: "/insights/building-data-culture", image: "/images/insights/building-data-culture-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Talent"
      categoryHref="/insights"
      title="Hiring for Builders: Attracting Entrepreneurial Talent to Corporate Ventures"
      subtitle="The type of person who thrives in a structured corporate hierarchy is rarely the same person who can build a business from zero to one. Here is how to find, hire, and retain the 'builders.'"
      heroImage="/images/insights/hiring-for-builders-hero.jpg"
      publishDate="October 15, 2024"
      readTime="5 min"
      sections={sections}
      keyTakeaways={[
        "Corporate innovation needs makers, not managers—people who thrive on ambiguity, speed, and building from zero to one.",
        "Give the venture team a distinct 'pirate ship' culture: physical separation, tool autonomy, and its own norms.",
        "Align incentives with a phantom-equity model so builders share in the value they create, not the politics of the parent.",
        "Frame the role as a two-to-three-year 'tour of duty' and hire for curiosity, resilience, and a bias for action.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Corporate innovation labs often fail because they are staffed with "managers" rather than "makers." Managers are great at optimizing existing processes, reporting to stakeholders, and mitigating risk. Makers are great at breaking things, moving fast, and dealing with ambiguity.
      </p>
      <p>
        To build a successful new venture, you need makers. But makers are allergic to bureaucracy. So, how do you get them to join a corporate-backed venture?
      </p>

      <h2 id="pirate-ship">1. The "Pirate Ship" Culture</h2>
      <p>
        You must create a distinct sub-culture for the venture team. It should feel like a pirate ship docked next to the navy fleet.
      </p>
      <ul>
        <li><strong>Physical Separation:</strong> Don't put them on the same floor as the legal department. Ideally, put them in a WeWork or a separate building.</li>
        <li><strong>Tool Autonomy:</strong> Let them use Slack, Notion, and Linear, even if the corporate standard is Microsoft Teams and SharePoint.</li>
        <li><strong>Dress Code:</strong> If the corporation wears suits, let the venture team wear hoodies. It signals "we are different."</li>
      </ul>

      <h2 id="compensation">2. Compensation that Aligns Incentives</h2>
      <p>
        You cannot pay a venture founder a standard corporate salary and bonus. They need upside.
      </p>
      <p>
        We recommend a <strong>"Phantom Equity"</strong> model. The venture team gets a stake in the value they create. If the venture is spun out or acquired by the parent company, they get a payout. This aligns their interests with the success of the <em>venture</em>, not the politics of the parent company.
      </p>

      <h2 id="tour-of-duty">3. The "Tour of Duty" Mindset</h2>
      <p>
        Accept that builders might not stay forever. And that's okay. Frame the role as a 2-3 year "tour of duty" to launch a specific product.
      </p>
      <blockquote>
        Come build this with us. We have the funding and the distribution. You bring the speed. In two years, you'll have a massive win on your resume, and we'll have a thriving business.
      </blockquote>
      <p>
        This honest framing attracts high-performers who want to build, ship, and move on to the next challenge, rather than climb a corporate ladder.
      </p>

      <h2 id="red-flag">A Red Flag to Watch For</h2>
      <p>
        If a candidate asks more questions about the pension plan than the product roadmap, they are not a builder. Hire for curiosity, resilience, and a bias for action.
      </p>
    </InsightArticleV2>
  );
}
