import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, BarChart3 } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

interface ReadinessAssessmentProps {
  title: string;
  description: string;
  questions: Question[];
  ctaText?: string;
}

export default function ReadinessAssessment({
  title,
  description,
  questions,
  ctaText = "Get Your Full Report"
}: ReadinessAssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateScore({ ...answers, [questionId]: value });
      setIsComplete(true);
    }
  };

  const calculateScore = (finalAnswers: Record<string, number>) => {
    const total = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 3; // Assuming max value is 3
    const percentage = Math.round((total / maxScore) * 100);
    setScore(percentage);
  };

  const getMaturityLevel = (percentage: number) => {
    if (percentage < 40) return { label: "Emerging", color: "text-yellow-400", description: "You're just starting your journey. Focus on foundational capabilities." };
    if (percentage < 75) return { label: "Developing", color: "text-[#00d4ff]", description: "You have good basics in place. Now it's time to scale and optimize." };
    return { label: "Advanced", color: "text-green-400", description: "You're a leader in this space. Focus on innovation and continuous improvement." };
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    setScore(0);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-[#050829] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="bg-[#0a0e3d] border border-white/10 rounded-xl sm:rounded-xl sm:rounded-2xl p-8 md:p-12 shadow-xl sm:shadow-xl sm:shadow-2xl relative overflow-hidden">
            {/* Progress Bar */}
            {!isComplete && (
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <div 
                  className="h-full bg-[#00d4ff] transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            )}

            {!isComplete ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
                  <span className="text-[#00d4ff] text-sm font-bold tracking-wider uppercase">Question {currentStep + 1} of {questions.length}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{questions[currentStep].text}</h3>
                </div>

                <div className="space-y-4">
                  {questions[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                      className="w-full text-left p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all group flex items-center justify-between"
                    >
                      <span className="text-slate-200 group-hover:text-white font-medium">{option.label}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-[#00d4ff] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#00d4ff]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-[#00d4ff]" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">Your Maturity Score: {score}%</h3>
                <div className={`text-xl font-bold mb-6 ${getMaturityLevel(score).color}`}>
                  {getMaturityLevel(score).label}
                </div>
                
                <p className="text-slate-300 mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 max-w-lg mx-auto">
                  {getMaturityLevel(score).description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-[#00d4ff] hover:bg-[#00bce3] text-[#0a0e3d] font-bold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full">
                    {ctaText}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetAssessment}
                    className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full"
                  >
                    Retake Assessment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
