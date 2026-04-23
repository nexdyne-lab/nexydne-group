import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MediaCompanyDAM() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-primary">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/content-service-platform">
              <a className="hover:text-primary">Content Service Platform</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Media Company Centralizes 2M Assets with DAM Platform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Media Company Centralizes 2M Assets with DAM Platform
            </h1>
            <p className="text-xl mb-8">
              Unified digital asset library for video, audio, and image content across 12 production teams and 40 distribution channels, reducing asset search time from 45 minutes to 30 seconds.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">2M</div>
                <div className="text-indigo-100">Assets Centralized</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30 sec</div>
                <div className="text-indigo-100">Asset Search Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">40</div>
                <div className="text-indigo-100">Distribution Channels</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$3.2M</div>
                <div className="text-indigo-100">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-4">
              A regional broadcast media company with 12 production teams and 40 distribution channels (linear TV, streaming platforms, social media, syndication partners) struggled with content chaos. Their 2 million digital assets—raw footage, edited segments, B-roll, graphics, audio clips, and promotional materials—were scattered across local workstations, network drives, and cloud storage accounts with inconsistent naming conventions and zero metadata.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Producers spent 45 minutes on average searching for specific clips, often giving up and re-shooting footage they knew existed somewhere. Duplicate assets proliferated—the same interview clip existed in 8 different folders with names like "final_v3.mp4" and "approved_FINAL_FINAL.mp4." Rights management was nonexistent, leading to 3 copyright violations in the past year when expired stock footage aired on live broadcasts.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Distribution workflows were manual and error-prone. Editors exported videos in multiple formats for different platforms (1080p for broadcast, 720p for web, vertical crops for social), uploaded to each destination manually, and hoped they didn't miss a channel. When breaking news required rapid content distribution, the process took 2 hours from final edit to all channels live—competitors beat them to air regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              NEXDYNE deployed Bynder as the centralized digital asset management platform, migrating all 2M assets from scattered storage locations into a single repository with rich metadata tagging. We built automated ingestion workflows that capture metadata at upload time: content type (raw footage, edited segment, B-roll), show/series, air date, talent names, location, usage rights, and expiration dates for licensed content.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              AI-powered auto-tagging analyzes video content to detect objects, people, locations, and spoken words, generating searchable metadata automatically. Producers search by natural language queries ("interview with mayor about budget crisis last week") and get relevant clips instantly. Advanced filters narrow results by rights status (cleared for broadcast, web-only, expired), resolution, aspect ratio, and duration.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We integrated Bynder with their video editing tools (Adobe Premiere, Avid Media Composer) so editors access the DAM directly from their timeline without switching applications. Distribution workflows automate transcoding and publishing: editors mark a segment "ready for distribution," and the system automatically generates format variants (broadcast, web, social), uploads to all 40 channels via API, and logs distribution metadata for rights tracking and analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Bynder DAM for centralized asset repository</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">AI-powered auto-tagging for video content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated transcoding and distribution workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Rights management with expiration tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Adobe Premiere and Avid Media Composer plugins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">YouTube, Facebook, Twitter APIs for social distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">AWS MediaConvert for automated transcoding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Slack for workflow notifications and approvals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              Asset search time dropped from 45 minutes to 30 seconds. Producers find exactly the clip they need using natural language search, and AI-generated metadata surfaces relevant content they didn't know existed. Duplicate assets were eliminated during migration—the 2M assets consolidated to 1.4M unique files, freeing 12TB of storage and reducing confusion about which version is authoritative.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Distribution speed improved dramatically. Breaking news content now reaches all 40 channels in 15 minutes from final edit—down from 2 hours. Automated transcoding and API-based publishing eliminate manual uploads, and editors can monitor distribution status in real-time. The company beat competitors to air on 8 major breaking news stories in the first 6 months, increasing viewership and ad revenue.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Rights management prevented costly violations. The system tracks usage rights and expiration dates for all licensed content, automatically flagging assets that are about to expire and preventing expired content from being distributed. Zero copyright violations occurred in the first year, avoiding potential fines and legal disputes. Annual savings totaled $3.2M: reduced storage costs ($400K), eliminated duplicate content production ($1.8M), and avoided rights violation penalties ($1M).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <div className="text-3xl font-bold text-indigo-900 mb-2">15 min</div>
              <div className="text-charcoal/80">Breaking News Distribution Time</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">Zero</div>
              <div className="text-charcoal/80">Copyright Violations in Year 1</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">12TB</div>
              <div className="text-charcoal/80">Storage Freed by Deduplication</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to centralize your digital assets with a DAM platform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build digital asset management systems that make content discoverable, automate distribution, and prevent rights violations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-900 hover:bg-slate-100">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}
