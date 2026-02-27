import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NoCodeMarketingAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/solutions/marketing-operations" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Marketing Operations
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Automation
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              February 3, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The No-Code Revolution: Democratizing Marketing Automation
          </h1>
          
          <p className="text-xl text-muted-foreground/50">
            How low-code and no-code platforms are empowering marketing teams to build complex workflows without engineering support.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              For years, "automation" in marketing meant one of two things: simple email drip campaigns or massive, expensive IT projects. If you wanted to connect your CRM to your webinar platform and then trigger a Slack alert for sales, you needed a developer.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              That bottleneck is gone. The rise of <strong>Integration Platform as a Service (iPaaS)</strong> tools like Zapier, Make (formerly Integromat), and Workato has ushered in the era of no-code operations.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Speed to Execution
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The primary advantage of no-code is velocity. Marketing teams can now prototype, build, and launch automated workflows in hours, not weeks. This agility allows for rapid experimentation.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-charcoal/80 mb-8">
              <li><strong>Lead Routing:</strong> Instantly route leads from Facebook Ads to Salesforce, enrich them with Clearbit data, and notify the right rep based on territory—all without writing a line of code.</li>
              <li><strong>Content Operations:</strong> Automate the content supply chain. When a draft is approved in Asana, automatically create a Google Doc, notify the copy editor via Slack, and schedule a placeholder in the CMS.</li>
              <li><strong>Event Management:</strong> Sync registrants from Zoom to HubSpot, generate personalized attendance certificates, and trigger post-event surveys seamlessly.</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Governance Challenge
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              With great power comes great responsibility. The ease of building automations can lead to a "spaghetti stack" of undocumented, fragile workflows. If the person who built the Zap leaves, the process breaks.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Successful organizations implement <strong>Citizen Developer frameworks</strong>. IT provides the secure sandbox and approved connectors; marketing operations builds the workflows. Documentation, error handling, and access controls are mandatory, not optional.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg text-charcoal font-semibold">
                "No-code doesn't mean no-governance. It means faster innovation within safe guardrails."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Bridging the Gap
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              No-code tools are the bridge between rigid enterprise software and the fluid needs of modern marketing. They allow teams to create "last-mile" connectivity that monolithic platforms can't provide out of the box.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              By empowering marketers to solve their own technical challenges, organizations unlock a massive amount of latent productivity and creativity. The future belongs to the technical marketer who can think in systems and build with blocks.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Automate your workflows</h3>
            <p className="text-muted-foreground/50 mb-6">
              We help teams design, build, and govern scalable automation architectures using leading iPaaS and no-code platforms.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-charcoal bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
