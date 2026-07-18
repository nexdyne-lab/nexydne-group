/**
 * Config registry for lead-magnet landing pages.
 *
 * Layout mirrors HubSpot's offer-page structure (dark hero + mockup + button,
 * "what's inside" carousel, reinforcement section + mockup, FAQ, dark final CTA)
 * in the NexDyne brand. To add a magnet: (1) upload its PDF to R2 + add a server
 * registry entry (server/_core/downloads.ts), then (2) add a config object here
 * keyed by the same slug. The generic <LeadMagnetLanding> + the dynamic
 * /resources/:slug route render it — no bespoke page.
 */

export interface LeadMagnetConfig {
  /** Must match the server registry key + /api/download/:slug. */
  slug: string;
  seoTitle: string;
  seoDescription: string;

  // Hero
  heroTag: string; // small pill, e.g. "Free Download"
  headline: string; // the magnet name — big hero H1
  subhead: string;
  heroCtaLabel: string; // e.g. "Download Now"
  cover: string; // mockup front image
  peek?: string; // mockup back image (page peek)

  // "What's inside" carousel — each string is one card
  contentsEyebrow: string;
  contents: string[];

  // Reinforcement section
  upgradeEyebrow: string;
  upgradeHeading: string;
  upgradeParagraphs: string[]; // HTML allowed
  upgradeCtaLabel: string;

  // FAQ
  faqHeading: string;
  faqs: { q: string; a: string }[];

  // Final CTA band
  finalEyebrow: string;
  finalHeading: string;
  finalCtaLabel: string;

  // Capture modal
  formHeading: string;
  formSub: string;
  ctaLabel: string; // submit button
  successHeading: string;
  successBody: string;
  successCtaLine: string; // HTML allowed
}

export const LEAD_MAGNETS: Record<string, LeadMagnetConfig> = {
  "ai-readiness-guide": {
    slug: "ai-readiness-guide",
    seoTitle: "The SMB AI Readiness Guide — Free Download",
    seoDescription:
      "A free 10-question diagnostic for growing companies. Evaluate your processes, data, workforce, and governance before investing in AI or automation.",

    heroTag: "Free Download",
    headline: "The SMB AI Readiness Guide",
    subhead:
      "Is your business actually ready for AI? A free, 10-question diagnostic for growing companies — evaluate your processes, data, workforce, and governance, and know whether AI will pay off before you spend a dollar.",
    heroCtaLabel: "Download Now",
    cover: "/images/ai-readiness-guide-cover.png",
    peek: "/images/ai-readiness-guide-peek.png",

    contentsEyebrow: "What's inside",
    contents: [
      "A step-by-step, 10-question readiness diagnostic across process, data, people, ownership, risk, and value.",
      "A self-scoring system that turns each answer into a clear readiness band — not ready, partially ready, or ready.",
      "Warning signs and one concrete action for every question, so you know exactly what to fix first.",
      "A plain-English read on whether you're ready to pilot — or need to close a few gaps before you start.",
    ],

    upgradeEyebrow: "Why readiness comes first",
    upgradeHeading: "Most AI projects fail before implementation even begins.",
    upgradeParagraphs: [
      "Not because the technology is wrong — because the process was unclear, the data was scattered, no one owned the outcome, or human judgment got automated away. Technology can't compensate for any of that. Point AI at those gaps and it amplifies them, faster and at scale.",
      "This guide helps you find those gaps first — so your first AI investment is one that actually pays off. That's what we mean by <strong>human intelligence, governed and scaled.</strong>",
    ],
    upgradeCtaLabel: "Grab Your Copy",

    faqHeading: "Before you download.",
    faqs: [
      { q: "Is this really free?", a: "Yes — genuinely free, no strings. Readiness is the single biggest predictor of whether an AI investment pays off, and we'd rather you get that right. Keep us in mind when you're ready to go deeper." },
      { q: "Who is this for?", a: "Leaders of growing companies — roughly 20 to 200 people. Owners, CEOs, presidents, COOs, operations managers, and technology leaders evaluating AI, automation, or new technology." },
      { q: "How long does it take?", a: "About fifteen minutes. Ten questions, score yourself, read your band. It's built to be brought straight into a leadership meeting." },
      { q: "Why do I need to fill out the information requested?", a: "So we can email you the guide and send occasional practical insights for growing companies. We keep your information safe, never sell it, and you can unsubscribe at any time." },
    ],

    finalEyebrow: "The SMB AI Readiness Guide",
    finalHeading: "Know whether you're ready — before you spend a dollar.",
    finalCtaLabel: "Download for free",

    formHeading: "Get the free guide",
    formSub: "Free download",
    ctaLabel: "Get the Free Guide",
    successHeading: "Check your inbox.",
    successBody: "We've emailed your copy of the guide. You can also download it now:",
    successCtaLine:
      "Landed in the middle? That's where the right first move matters most. Reply to the email to request an <strong>AI &amp; Operations Readiness Assessment</strong>.",
  },
};
