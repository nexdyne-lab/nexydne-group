import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, RefreshCw, Download } from "lucide-react";
import { jsPDF } from "jspdf";

const questions = [
  {
    id: 1,
    question: "How is your data currently stored?",
    options: [
      { text: "Spreadsheets and local files", score: 1 },
      { text: "Siloed databases per application", score: 2 },
      { text: "Centralized Data Warehouse", score: 3 },
      { text: "Modern Data Lake / Lakehouse", score: 4 }
    ]
  },
  {
    id: 2,
    question: "How quickly can you access key business insights?",
    options: [
      { text: "Weeks (Manual reporting)", score: 1 },
      { text: "Days (Requested from IT)", score: 2 },
      { text: "Hours (Automated reports)", score: 3 },
      { text: "Real-time (Self-service dashboards)", score: 4 }
    ]
  },
  {
    id: 3,
    question: "What is the quality of your data?",
    options: [
      { text: "Unknown / Frequent errors", score: 1 },
      { text: "Inconsistent across systems", score: 2 },
      { text: "Good, but requires manual cleaning", score: 3 },
      { text: "High, with automated quality checks", score: 4 }
    ]
  },
  {
    id: 4,
    question: "How is data governance handled?",
    options: [
      { text: "Ad-hoc / Non-existent", score: 1 },
      { text: "Basic access controls", score: 2 },
      { text: "Defined policies and roles", score: 3 },
      { text: "Automated governance & cataloging", score: 4 }
    ]
  }
];

export default function DataMaturityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionScore: number) => {
    const newScore = score + optionScore;
    if (currentQuestion < questions.length - 1) {
      setScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const getResult = () => {
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage < 40) {
      return {
        level: "Data Aware",
        description: "You are at the beginning of your journey. Focus on centralizing data and establishing basic quality standards.",
        color: "text-orange-400"
      };
    } else if (percentage < 70) {
      return {
        level: "Data Proficient",
        description: "You have a solid foundation. Now is the time to automate pipelines and enable self-service analytics.",
        color: "text-blue-400"
      };
    } else {
      return {
        level: "Data Driven",
        description: "You are leading the pack. Focus on advanced AI/ML use cases and real-time decision making.",
        color: "text-green-400"
      };
    }
  };

  const result = showResult ? getResult() : null;

  const generatePDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;

    // --- Header Background ---
    doc.setFillColor(10, 14, 61); // #0a0e3d (Dark Blue)
    doc.rect(0, 0, pageWidth, 40, "F");

    // --- Logo / Brand Name ---
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("NexDyne Consulting Group", margin, 25);

    // --- Report Title ---
    doc.setTextColor(0, 212, 255); // #00d4ff (Cyan)
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Data Maturity Assessment Report", pageWidth - margin, 25, { align: "right" });

    // --- Content Section ---
    let yPos = 60;

    // Assessment Result Title
    doc.setTextColor(10, 14, 61); // Dark Blue
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Assessment Result", margin, yPos);
    
    yPos += 15;

    // Result Level Box
    doc.setFillColor(240, 248, 255); // Light Blue Background
    doc.setDrawColor(0, 212, 255); // Cyan Border
    doc.roundedRect(margin, yPos, pageWidth - (margin * 2), 40, 3, 3, "FD");

    // Result Level Text
    doc.setTextColor(0, 86, 179); // Darker Blue
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(result.level, pageWidth / 2, yPos + 18, { align: "center" });

    // Result Description
    doc.setTextColor(80, 80, 80); // Dark Gray
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    const splitDesc = doc.splitTextToSize(result.description, pageWidth - (margin * 2) - 20);
    doc.text(splitDesc, pageWidth / 2, yPos + 30, { align: "center" });

    yPos += 60;

    // --- Recommendations Section ---
    doc.setTextColor(10, 14, 61);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Strategic Recommendations", margin, yPos);

    yPos += 15;

    const recommendations = [
      "1. Centralize Data: Move from siloed systems to a unified data lake or warehouse.",
      "2. Automate Pipelines: Replace manual reporting with automated ETL/ELT workflows.",
      "3. Enforce Governance: Implement role-based access control and data quality checks.",
      "4. Enable Self-Service: Deploy BI tools to empower business users with real-time insights."
    ];

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);

    recommendations.forEach((rec) => {
      doc.text(rec, margin, yPos);
      yPos += 10;
    });

    // --- Footer ---
    const footerY = pageHeight - 20;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, footerY - 10, pageWidth - margin, footerY - 10);
    
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("© " + new Date().getFullYear() + " NexDyne Consulting Group. All rights reserved.", margin, footerY);
    doc.text("www.nexdyne.com", pageWidth - margin, footerY, { align: "right" });

    // Save PDF
    doc.save("NexDyne_Data_Maturity_Report.pdf");
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
      {!showResult ? (
        <>
          <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Assessment Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-muted-foreground/70 text-sm">
                {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-secondary h-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left p-4 rounded-lg sm:rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-secondary/10 hover:border-secondary transition-all duration-200 group flex items-center justify-between"
              >
                <span className="text-muted-foreground/50 group-hover:text-white font-medium">
                  {option.text}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/0 group-hover:text-secondary transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-2">Assessment Complete</h3>
          <p className="text-muted-foreground/70 mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">Here is your data maturity profile:</p>
          
          <div className="bg-white/5 rounded-lg sm:rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 border border-white/10">
            <div className={`text-2xl font-bold mb-2 ${result?.color}`}>
              {result?.level}
            </div>
            <p className="text-muted-foreground/50 leading-relaxed">
              {result?.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={resetQuiz}
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 gap-2"
            >
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
              Retake Quiz
            </Button>
            <Button 
              onClick={generatePDF}
              className="bg-secondary hover:bg-secondary text-base font-bold gap-2"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              Get Full Report
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
