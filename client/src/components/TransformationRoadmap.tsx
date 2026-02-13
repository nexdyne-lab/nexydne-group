import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  milestones: string[];
}

interface TransformationRoadmapProps {
  title?: string;
  subtitle?: string;
  phases: RoadmapPhase[];
  totalDuration?: string;
}

export function TransformationRoadmap({
  title = "Transformation Roadmap",
  subtitle = "A proven, phased approach to delivering measurable business outcomes",
  phases,
  totalDuration
}: TransformationRoadmapProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider bg-cyan-50 px-4 py-2 rounded-full">
              Implementation Timeline
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">{subtitle}</p>
          {totalDuration && (
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
              <span className="text-slate-700 font-semibold">Total Duration: {totalDuration}</span>
            </div>
          )}
        </div>

        {/* Roadmap Phases */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-4 sm:p-6 md:p-4 sm:p-6 md:p-8 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'} mb-8 lg:mb-0`}>
                      <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        {/* Phase Header */}
                        <div className="mb-4">
                          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                            {phase.phase}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                            <span className="text-sm text-slate-500 font-medium">{phase.duration}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            {phase.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>

                        {/* Deliverables */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                            Key Deliverables
                          </h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-700">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Milestones */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                            Success Milestones
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.milestones.map((milestone, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-200"
                              >
                                {milestone}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
                  </div>

                  {/* Arrow to next phase */}
                  {index < phases.length - 1 && (
                    <div className="flex justify-center my-8 lg:hidden">
                      <ArrowRight className="w-8 h-8 text-cyan-500 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Transformation Journey?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our structured approach ensures predictable outcomes, minimized risk, and accelerated time-to-value.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Schedule a Roadmap Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
