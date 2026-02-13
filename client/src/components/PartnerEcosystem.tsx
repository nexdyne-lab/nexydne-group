import { Award, Shield, Zap } from "lucide-react";

interface Partner {
  name: string;
  logo?: string;
  category: "cloud" | "data" | "automation" | "analytics" | "integration";
  badge?: string;
}

interface PartnerEcosystemProps {
  title?: string;
  subtitle?: string;
  partners: Partner[];
  certifications?: string[];
}

export function PartnerEcosystem({
  title = "Technology Partner Ecosystem",
  subtitle = "We partner with industry-leading technology providers to deliver best-in-class solutions",
  partners,
  certifications = []
}: PartnerEcosystemProps) {
  const categoryColors = {
    cloud: "from-blue-500 to-cyan-500",
    data: "from-purple-500 to-pink-500",
    automation: "from-orange-500 to-red-500",
    analytics: "from-green-500 to-emerald-500",
    integration: "from-indigo-500 to-blue-500",
  };

  const categoryLabels = {
    cloud: "Cloud Infrastructure",
    data: "Data & AI",
    automation: "Automation",
    analytics: "Analytics",
    integration: "Integration",
  };

  // Group partners by category
  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Partners by Category */}
        <div className="space-y-12 mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          {Object.entries(groupedPartners).map(([category, categoryPartners]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${categoryColors[category as keyof typeof categoryColors]}`} />
                <h3 className="text-2xl font-bold text-slate-900">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                {categoryPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:border-cyan-300 group"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <div className={`h-12 w-full rounded bg-gradient-to-r ${categoryColors[partner.category]} opacity-20 mb-3`} />
                    )}
                    <p className="text-sm font-semibold text-slate-700 text-center">
                      {partner.name}
                    </p>
                    {partner.badge && (
                      <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full mt-2">
                        {partner.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Certifications & Accreditations</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Value Proposition */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-3">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
            <p className="text-slate-700 font-medium">
              Leveraging best-of-breed technologies to accelerate your digital transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
