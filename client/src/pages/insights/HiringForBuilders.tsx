import React from 'react';
import InsightArticleLayout, { InsightCallout } from "@/components/InsightArticleLayout";

export default function HiringForBuilders() {
  const relatedInsights = [
    {
      category: "Article",
      categoryIcon: "📄",
      title: "The Corporate Venture Advantage",
      description: "Why established assets combined with startup speed create an unfair market advantage.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
      link: "/insights/corporate-venture-advantage"
    },
    {
      category: "Guide",
      categoryIcon: "📘",
      title: "From MVP to Scale",
      description: "Navigating the 'valley of death' and operationalizing your new venture for growth.",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      link: "/insights/from-mvp-to-scale"
    },
    {
      category: "Culture",
      categoryIcon: "🎬",
      title: "Building a Data-First Culture",
      description: "NexDyne's Chief Data Officer discusses the human side of digital change.",
      readTime: "12 min watch",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      link: "/insights/building-data-culture"
    }
  ];

  return (
    <InsightArticleLayout
      category="Talent"
      categoryIcon="👥"
      title="Hiring for Builders: Attracting Entrepreneurial Talent to Corporate Ventures"
      subtitle="The type of person who thrives in a structured corporate hierarchy is rarely the same person who can build a business from zero to one. Here is how to find, hire, and retain the 'builders.'"
      readTime="5 min read"
      publishDate="October 15, 2024"
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      heroImageAlt="Hiring for Builders"
      authorName="Marcus Rivera"
      authorRole="Chief People Officer, NexDyne"
      authorImage="/team/marcus-rivera.jpg"
      relatedInsights={relatedInsights}
    >
      <p>
        Corporate innovation labs often fail because they are staffed with "managers" rather than "makers." Managers are great at optimizing existing processes, reporting to stakeholders, and mitigating risk. Makers are great at breaking things, moving fast, and dealing with ambiguity.
      </p>
      <p>
        To build a successful new venture, you need makers. But makers are allergic to bureaucracy. So, how do you get them to join a corporate-backed venture?
      </p>
      
      <h2>1. The "Pirate Ship" Culture</h2>
      <p>
        You must create a distinct sub-culture for the venture team. It should feel like a pirate ship docked next to the navy fleet.
      </p>
      <ul>
        <li><strong>Physical Separation:</strong> Don't put them on the same floor as the legal department. Ideally, put them in a WeWork or a separate building.</li>
        <li><strong>Tool Autonomy:</strong> Let them use Slack, Notion, and Linear, even if the corporate standard is Microsoft Teams and SharePoint.</li>
        <li><strong>Dress Code:</strong> If the corporation wears suits, let the venture team wear hoodies. It signals "we are different."</li>
      </ul>

      <h2>2. Compensation that Aligns Incentives</h2>
      <p>
        You cannot pay a venture founder a standard corporate salary and bonus. They need upside.
      </p>
      <p>
        We recommend a <strong>"Phantom Equity"</strong> model. The venture team gets a stake in the value they create. If the venture is spun out or acquired by the parent company, they get a payout. This aligns their interests with the success of the <em>venture</em>, not the politics of the parent company.
      </p>

      <h2>3. The "Tour of Duty" Mindset</h2>
      <p>
        Accept that builders might not stay forever. And that's okay. Frame the role as a 2-3 year "tour of duty" to launch a specific product.
      </p>
      <p>
        "Come build this with us. We have the funding and the distribution. You bring the speed. In two years, you'll have a massive win on your resume, and we'll have a thriving business."
      </p>
      <p>
        This honest framing attracts high-performers who want to build, ship, and move on to the next challenge, rather than climb a corporate ladder.
      </p>

      <InsightCallout title="Red Flag to Watch For">
        <p>
          If a candidate asks more questions about the pension plan than the product roadmap, they are not a builder. Hire for curiosity, resilience, and a bias for action.
        </p>
      </InsightCallout>
    </InsightArticleLayout>
  );
}
