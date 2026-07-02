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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-off-white via-white to-off-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/5 px-4 py-2 rounded-full">
              Implementation Timeline
            </span>
          </div>
          <h2 className="text-4xl font-bold text-charcoal mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">{subtitle}</p>
          {totalDuration && (
            <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-6 py-3 shadow-sm">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-charcoal/80 font-semibold">Total Duration: {totalDuration}</span>
            </div>
          )}
        </div>

        {/* Roadmap Phases */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-purple transform -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-4 sm:p-6 md:p-4 sm:p-6 md:p-8 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'} mb-8 lg:mb-0`}>
                      <div className="bg-white border border-border rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300">
                        {/* Phase Header */}
                        <div className="mb-4">
                          <div className="inline-block bg-gradient-to-r from-primary to-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                            {phase.phase}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/70" />
                            <span className="text-sm text-muted-foreground font-medium">{phase.duration}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-charcoal mb-3">
                            {phase.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {phase.description}
                          </p>
                        </div>

                        {/* Deliverables */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                            Key Deliverables
                          </h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-charcoal/80">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Milestones */}
                        <div>
                          <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                            Success Milestones
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.milestones.map((milestone, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary"
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
                      <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary border border-primary rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Ready to Start Your Transformation Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our structured approach ensures predictable outcomes, minimized risk, and accelerated time-to-value.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple/50 transition">
              Schedule a Roadmap Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
