import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface InsightCard {
  type: "Article" | "Report" | "Whitepaper" | "Case Study";
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

interface InsightsSectionProps {
  insights: InsightCard[];
}

export function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-[#0A1628]">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            OUR INSIGHTS
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            From machine learning operations and organizational change to ethical considerations and emerging use cases, 
            our latest thinking on how organizations can most effectively and responsibly use AI to create business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          {insights.map((insight, index) => (
            <Link key={index} href={insight.link}>
              <a className="group block bg-slate-900/50 rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {insight.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-start justify-between gap-2">
                    <span>{insight.title}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                    {insight.description}
                  </p>
                  <div className="text-xs text-slate-500">
                    {insight.date}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/insights">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group">
              Read our insights
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
