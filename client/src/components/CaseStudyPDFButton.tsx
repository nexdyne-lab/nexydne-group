import { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateCaseStudyPDF } from '@/lib/generateCaseStudyPDF';
import { EmailCaptureModal } from '@/components/EmailCaptureModal';
import { toast } from 'sonner';

interface CaseStudyPDFButtonProps {
  title: string;
  industry: string;
  capability?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack?: string[];
  metrics?: { value: string; label: string }[];
  clientInfo?: {
    industry?: string;
    companySize?: string;
    revenue?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  variant?: 'default' | 'outline' | 'ghost' | 'hero';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  /** If true, requires email capture before download */
  requireEmail?: boolean;
}

export function CaseStudyPDFButton({
  title,
  industry,
  capability,
  summary,
  challenge,
  solution,
  results,
  techStack,
  metrics,
  clientInfo,
  testimonial,
  variant = 'outline',
  size = 'default',
  className = '',
  requireEmail = true
}: CaseStudyPDFButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 300));
      
      generateCaseStudyPDF({
        title,
        industry,
        capability,
        summary,
        challenge,
        solution,
        results,
        techStack,
        metrics,
        clientInfo,
        testimonial
      });
      
      toast.success('PDF downloaded successfully', {
        description: 'Your case study PDF has been saved to your downloads folder.'
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error('Failed to generate PDF', {
        description: 'Please try again or contact support if the issue persists.'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadClick = () => {
    if (requireEmail) {
      setShowEmailModal(true);
    } else {
      generatePDF();
    }
  };

  const handleEmailSuccess = () => {
    generatePDF();
  };

  // Hero variant for prominent placement
  if (variant === 'hero') {
    return (
      <>
        <button
          onClick={handleDownloadClick}
          disabled={isGenerating}
          className={`group inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
          )}
          <span className="font-medium">
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
          </span>
        </button>
        
        <EmailCaptureModal
          isOpen={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          onSuccess={handleEmailSuccess}
          caseStudyTitle={title}
          caseStudyIndustry={industry}
        />
      </>
    );
  }

  return (
    <>
      <Button
        onClick={handleDownloadClick}
        disabled={isGenerating}
        variant={variant}
        size={size}
        className={`gap-2 ${className}`}
      >
        {isGenerating ? (
          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
        ) : (
          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
        )}
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </Button>
      
      <EmailCaptureModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSuccess={handleEmailSuccess}
        caseStudyTitle={title}
        caseStudyIndustry={industry}
      />
    </>
  );
}

// Compact version for inline use
export function CaseStudyPDFLink({
  title,
  industry,
  capability,
  summary,
  challenge,
  solution,
  results,
  techStack,
  metrics,
  clientInfo,
  testimonial,
  className = '',
  requireEmail = true
}: Omit<CaseStudyPDFButtonProps, 'variant' | 'size'>) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      generateCaseStudyPDF({
        title,
        industry,
        capability,
        summary,
        challenge,
        solution,
        results,
        techStack,
        metrics,
        clientInfo,
        testimonial
      });
      
      toast.success('PDF downloaded successfully');
    } catch (error) {
      toast.error('Failed to generate PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadClick = () => {
    if (requireEmail) {
      setShowEmailModal(true);
    } else {
      generatePDF();
    }
  };

  const handleEmailSuccess = () => {
    generatePDF();
  };

  return (
    <>
      <button
        onClick={handleDownloadClick}
        disabled={isGenerating}
        className={`inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium transition-colors disabled:opacity-50 ${className}`}
      >
        {isGenerating ? (
          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
        ) : (
          <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
        )}
        <span className="underline underline-offset-2">
          {isGenerating ? 'Generating...' : 'Download as PDF'}
        </span>
      </button>
      
      <EmailCaptureModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSuccess={handleEmailSuccess}
        caseStudyTitle={title}
        caseStudyIndustry={industry}
      />
    </>
  );
}

export default CaseStudyPDFButton;
