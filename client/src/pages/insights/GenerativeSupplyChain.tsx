import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GenerativeSupplyChain() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Generative AI
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              February 2, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The Generative Supply Chain: Scaling Creative with AI
          </h1>
          
          <p className="text-xl text-muted-foreground/50">
            How a global retailer reduced content production costs by 60% while increasing engagement by using GenAI for asset variation.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The bottleneck in modern marketing isn't data; it's content. We have the data to identify thousands of micro-segments and the technology to target them, but we lack the creative capacity to build unique assets for each one.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Traditional creative production is linear and labor-intensive. A photoshoot happens, assets are retouched, copy is written, and a few variations are produced for A/B testing. Scaling this to hundreds or thousands of variations is cost-prohibitive and operationally impossible.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Enter the Generative Supply Chain. By integrating Generative AI into the creative workflow, organizations can move from "crafting assets" to "generating variations," unlocking a level of personalization previously thought impossible.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Case Study: Global Retailer Transformation
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We partnered with a global fashion retailer facing a common problem: they operated in 20+ markets with diverse cultural nuances, weather patterns, and style preferences. Their central creative team couldn't keep up with the demand for localized content.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">The Challenge</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Volume:</strong> Needed 5,000+ unique assets per month across email, social, and web.</li>
                <li><strong>Speed:</strong> Production lead times were 6-8 weeks, making reactive marketing impossible.</li>
                <li><strong>Cost:</strong> Agency fees for localization and variation were skyrocketing.</li>
                <li><strong>Relevance:</strong> Generic "global" assets were performing poorly in local markets.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Solution: An AI-Augmented Workflow
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We didn't replace the creative team; we gave them superpowers. We built a custom Generative AI pipeline trained on the brand's visual identity and product catalog.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">1. Virtual Photoshoots</h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Instead of flying models to different locations, we used AI to generate backgrounds and contexts. A single product shot could be placed in a rainy London street, a sunny Sydney beach, or a snowy Tokyo park, all with photorealistic lighting and shadows.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">2. Dynamic Copy Generation</h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We fine-tuned an LLM on the brand's voice guidelines. The system could generate hundreds of subject line and body copy variations, automatically translating and culturally adapting them for each market.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">3. Automated Assembly</h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              A compositing engine combined the generated images and text into final assets, resizing them for every platform (Instagram Stories, Facebook Feed, Email Banners) automatically.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Results
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The impact was immediate and dramatic.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg text-charcoal/80 mb-8">
              <li><strong>60% Reduction in Production Costs:</strong> Drastically reduced spend on stock photography, location shoots, and basic retouching.</li>
              <li><strong>4x Increase in Output:</strong> The team went from producing 1,200 assets/month to over 5,000 without adding headcount.</li>
              <li><strong>35% Increase in Engagement:</strong> Highly localized and context-aware content resonated far better with customers.</li>
              <li><strong>2-Week Time-to-Market:</strong> Reduced lead times from 8 weeks to 2 weeks, allowing the brand to jump on trends instantly.</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The Future of Creative Work
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              This isn't about AI replacing creativity; it's about AI replacing drudgery. By automating the "variation" phase of production, creative teams are freed to focus on the "ideation" phase—coming up with the big concepts and campaigns that actually move the needle. The Generative Supply Chain turns the creative department from a bottleneck into a growth engine.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Scale your content production</h3>
            <p className="text-muted-foreground/50 mb-6">
              NexDyne helps brands build custom Generative AI pipelines that amplify creative output and drive personalization.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Schedule a Consultation
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-lg">NEXDYNE TECHNOLOGIES</h4>
                <p className="text-muted-foreground mt-1">
                  Engineering intelligent systems that transform enterprise operations through AI-driven automation and data intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/beyond-segmentation">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop" 
                      alt="Beyond Segmentation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Beyond Segmentation: The Era of N=1 Marketing
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Why traditional audience segments are failing, and how to build a marketing engine that treats every customer as a market of one.
                  </p>
                </div>
              </Link>
              <Link href="/insights/why-intelligent-automation">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop" 
                      alt="Intelligent Automation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    Why Intelligent Automation Isn't Optional Anymore
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    The conversation around intelligent automation has shifted dramatically. What was once a competitive advantage is now table stakes.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
