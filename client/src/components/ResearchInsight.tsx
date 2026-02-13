import { TrendingUp, BarChart3, Users, DollarSign } from "lucide-react";

interface Insight {
  icon: "trending" | "chart" | "users" | "dollar";
  statistic: string;
  description: string;
  source?: string;
}

interface ResearchInsightProps {
  title?: string;
  subtitle?: string;
  insights: Insight[];
  citation?: string;
}

const iconMap = {
  trending: TrendingUp,
  chart: BarChart3,
  users: Users,
  dollar: DollarSign,
};

export function ResearchInsight({
  title = "Industry Research & Insights",
  subtitle = "Data-backed evidence from our proprietary research and industry studies",
  insights,
  citation
}: ResearchInsightProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider bg-cyan-50 px-4 py-2 rounded-full">
              Our Research Shows
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          {insights.map((insight, index) => {
            const Icon = iconMap[insight.icon];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-cyan-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {insight.statistic}
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">
                  {insight.description}
                </p>
                {insight.source && (
                  <p className="text-xs text-slate-400 italic">
                    Source: {insight.source}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Citation */}
        {citation && (
          <div className="bg-slate-50 border-l-4 border-cyan-500 p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 rounded-r-lg">
            <p className="text-sm text-slate-600 italic">
              <span className="font-semibold text-slate-900">Research Methodology:</span> {citation}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
