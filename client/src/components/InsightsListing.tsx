import { Link } from "wouter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { SEO } from "./SEO";

interface InsightItem {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  readTime: string;
  category: string;
}

interface InsightsListingProps {
  title: string;
  subtitle: string;
  parentTitle: string;
  parentHref: string;
  insights: InsightItem[];
}

export default function InsightsListing({
  title,
  subtitle,
  parentTitle,
  parentHref,
  insights,
}: InsightsListingProps) {
  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={subtitle} />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <Link href={parentHref}>
            <span className="text-sm font-medium text-[#00d4ff] uppercase tracking-wider hover:underline">
              {parentTitle}
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {insights.map((insight, index) => (
              <Link key={index} href={insight.href}>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-[#0077B5] uppercase tracking-wider">
                        {insight.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#0077B5] transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-1">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{insight.date}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Discuss These Topics?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts are ready to help you apply these insights to your
            business.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
              Contact Our Team
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
