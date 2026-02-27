import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MediaContentGenAI() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/artificial-intelligence" className="hover:text-white transition-colors">Generative AI</Link>
            <span>/</span>
            <span className="text-white">Media Content Production</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Media Network Automates Content Creation with GenAI
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Automated generation of summaries, social clips, and localized subtitles reduced post-production time by 70%.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A global media network produced thousands of hours of video content weekly but struggled to repurpose it effectively for different platforms and regions. Manually creating social media clips, writing summaries, and translating subtitles was a slow, labor-intensive process that created bottlenecks and delayed content distribution.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              They needed a way to scale their content operations without linearly scaling headcount, ensuring that every piece of content reached its maximum potential audience immediately after broadcast.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-8">
              NEXDYNE implemented a multimodal GenAI pipeline that ingested raw video footage and automatically generated derivative assets.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Intelligent Clipping.</strong> Computer vision and NLP models analyzed full-length episodes to identify viral moments, automatically cropping them to vertical formats for TikTok and Instagram Reels.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Automated Localization.</strong> The system transcribed audio and generated frame-accurate subtitles in 20+ languages, using style transfer to match the tone of the original content.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Metadata Enrichment.</strong> GenAI generated SEO-optimized titles, descriptions, and tags for every asset, improving discoverability across streaming platforms.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-muted-foreground">Reduction in post-production time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-muted-foreground">Increase in social media engagement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-muted-foreground">Languages supported instantly</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "We've turned our archive into a goldmine. Content that used to sit on a shelf is now generating revenue across social platforms within minutes of airing."
            </p>
            <p className="text-charcoal font-semibold">
              Head of Digital Strategy
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Scale your content engine
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            See how GenAI can multiply your creative output.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-charcoal rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
