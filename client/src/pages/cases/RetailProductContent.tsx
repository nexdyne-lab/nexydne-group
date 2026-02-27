import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetailProductContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-blue-600">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/content-service-platform">
              <a className="hover:text-blue-600">Content Service Platform</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Retailer Launches Products 60% Faster with Content Platform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Retailer Launches Products 60% Faster with Content Platform
            </h1>
            <p className="text-xl mb-8">
              Automated product content workflows across 15,000 SKUs, 8 regional websites, and print catalogs, reducing time-to-market from 6 weeks to 2.5 weeks.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">60%</div>
                <div className="text-teal-100">Faster Product Launches</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15,000</div>
                <div className="text-teal-100">SKUs Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8</div>
                <div className="text-teal-100">Regional Websites</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$2.8M</div>
                <div className="text-teal-100">Annual Revenue Gain</div>
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
              A mid-sized home goods retailer with 15,000 SKUs across 8 regional websites and quarterly print catalogs struggled with product content chaos. Product information lived in spreadsheets maintained by merchandising teams, images were scattered across shared drives, and marketing copy existed in email threads. When launching a new product, the process took 6 weeks: merchandising created the spreadsheet entry, photography shot product images, copywriters drafted descriptions, designers laid out catalog pages, and web teams manually entered everything into each regional site.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Content inconsistencies plagued customer experience. The same product had different descriptions on different regional sites, images didn't match across web and print, and pricing errors occurred when updates didn't propagate everywhere. Customer service fielded 200+ inquiries per month about conflicting product information, and returns spiked when products didn't match their online descriptions.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Seasonal launches were nightmares. The fall catalog required coordinating 2,000 new products across all channels simultaneously. Teams worked nights and weekends for 3 weeks before launch, manually copying content between systems. Despite the effort, 15% of products missed launch day because content wasn't ready, costing $400K in lost revenue per season.
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
              NEXDYNE implemented Contentful as the centralized product information management (PIM) system, creating a single source of truth for all product content. We modeled product data with structured fields: SKU, name, category, dimensions, materials, care instructions, pricing by region, and relationships to images, videos, and documents. Content creators update once in Contentful, and changes propagate to all channels automatically via API.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We built automated workflows that route new products through required steps: merchandising creates the product record, photography uploads images with automatic quality checks (resolution, color profile, file format), copywriters draft descriptions with built-in brand voice guidelines, and legal reviews claims before publication. Each stakeholder sees only their tasks in a dashboard, and the system tracks completion status across all products in the launch pipeline.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Multi-channel publishing happens automatically. Web teams configure templates that pull product content from Contentful via API, rendering responsive product pages with SEO-optimized metadata. Print designers use InDesign plugins that import product data and images directly from Contentful, auto-generating catalog layouts with consistent formatting. When merchandising updates a price or description, changes appear on all 8 websites and in the print layout within minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Contentful PIM for centralized product data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated content workflows with approval gates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">API-driven multi-channel publishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated quality checks for images and copy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Shopify e-commerce platform for web publishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Adobe InDesign plugin for print catalog automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Cloudinary for image optimization and delivery</span>
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
              Product launch time dropped from 6 weeks to 2.5 weeks—a 60% improvement. The fall seasonal launch that previously took 3 weeks of manual work now completes in 5 days with zero missed products. Teams no longer work nights and weekends before launches, and the merchandising team can plan more frequent product drops to respond to market trends faster.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Content consistency improved dramatically. All 8 regional websites and print catalogs now show identical product information, eliminating customer confusion. Customer service inquiries about conflicting product details dropped 85%, and product returns due to description mismatches fell 40%. Customer satisfaction scores increased 12 points, and online reviews mentioned "accurate descriptions" 3x more frequently.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Revenue impact was significant. Faster time-to-market allowed the retailer to launch 2 additional seasonal collections per year, generating $2.8M in incremental revenue. Operational savings totaled $600K annually: reduced manual content entry labor ($350K), eliminated overtime during launches ($150K), and decreased returns from inaccurate content ($100K). The content platform paid for itself in 8 months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
              <div className="text-3xl font-bold text-teal-900 mb-2">2.5 weeks</div>
              <div className="text-charcoal/80">Product Launch Time (down from 6 weeks)</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">85%</div>
              <div className="text-charcoal/80">Reduction in Content Conflict Inquiries</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">Zero</div>
              <div className="text-charcoal/80">Products Missed at Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to accelerate product launches with a content platform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build product information management systems that centralize content, automate workflows, and enable multi-channel publishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-900 hover:bg-slate-100">
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
