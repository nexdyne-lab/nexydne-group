import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FrameworkPhase {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

interface ProprietaryFrameworkProps {
  name: string;
  tagline: string;
  description: string;
  phases: FrameworkPhase[];
  trademark?: boolean;
}

export function ProprietaryFramework({
  name,
  tagline,
  description,
  phases,
  trademark = true
}: ProprietaryFrameworkProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Proprietary Methodology
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {name}{trademark && <sup className="text-2xl">™</sup>}
          </h2>
          <p className="text-xl text-cyan-400 font-medium mb-6">{tagline}</p>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Framework Phases */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8 relative z-10">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Card */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 hover:border-cyan-500 transition-all duration-300 h-full">
                  {/* Phase Number */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-white">{phase.number}</span>
                  </div>
                  
                  {/* Phase Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {phase.title}
                  </h3>
                  
                  {/* Phase Description */}
                  <p className="text-white/60 text-sm mb-4 text-center leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Phase Outcomes */}
                  <div className="space-y-2">
                    {phase.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/80">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Between Phases */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60 mb-6">
            Our proven methodology has delivered measurable results for leading organizations worldwide.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Learn More About Our Approach
          </button>
        </div>
      </div>
    </section>
  );
}
