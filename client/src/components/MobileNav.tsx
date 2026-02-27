import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, ChevronDown } from "lucide-react";

// Industries data for mobile menu
const industries = [
  { name: "Aerospace & Defense", slug: "aerospace-defense" },
  { name: "Automotive", slug: "automotive" },
  { name: "Consumer Products", slug: "consumer-products" },
  { name: "Education", slug: "education" },
  { name: "Energy & Utilities", slug: "energy-utilities" },
  { name: "Financial Services", slug: "financial-services" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Industrial Manufacturing", slug: "manufacturing" },
  { name: "Insurance", slug: "insurance" },
  { name: "Private Equity & Investments", slug: "private-equity" },
  { name: "Public Sector", slug: "public-sector" },
  { name: "Retail & E-commerce", slug: "retail" },
  { name: "Technology, Media & Telecom", slug: "technology-media-telecom" },
  { name: "Transportation & Logistics", slug: "transportation-logistics" },
  { name: "Travel & Hospitality", slug: "travel-hospitality" },
  { name: "Urban Development", slug: "urban-development" },
];

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isScrolled: boolean;
}

// Animated hamburger button component
function HamburgerButton({ isOpen, onClick, isScrolled }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none group touch-manipulation"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-5 flex flex-col justify-between">
        {/* Top line */}
        <span
          className={`block h-0.5 w-6 rounded-full transform transition-all duration-300 ease-out ${
            isScrolled ? 'bg-white' : 'bg-charcoal'
          } ${
            isOpen 
              ? 'rotate-45 translate-y-[9px] bg-white' 
              : 'group-hover:w-5'
          }`}
        />
        {/* Middle line */}
        <span
          className={`block h-0.5 w-6 rounded-full transform transition-all duration-200 ease-out ${
            isScrolled ? 'bg-white' : 'bg-charcoal'
          } ${
            isOpen 
              ? 'opacity-0 translate-x-3 bg-white' 
              : 'group-hover:w-4'
          }`}
        />
        {/* Bottom line */}
        <span
          className={`block h-0.5 w-6 rounded-full transform transition-all duration-300 ease-out ${
            isScrolled ? 'bg-white' : 'bg-charcoal'
          } ${
            isOpen 
              ? '-rotate-45 -translate-y-[9px] bg-white' 
              : 'group-hover:w-5'
          }`}
        />
      </div>
    </button>
  );
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToInitiatives: (e: React.MouseEvent) => void;
}

// Mobile navigation overlay component
export function MobileNavOverlay({ isOpen, onClose, scrollToInitiatives }: MobileNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-base z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link href="/" onClick={onClose} className="flex items-center">
            <img 
              src="/nexdyne-logo-darkmode.png" 
              alt="NexDyne Consulting Group" 
              className="h-16 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center text-white hover:text-primary active:text-primary transition-colors touch-manipulation"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="h-[calc(100%-80px)] overflow-y-auto overscroll-contain">
          <div className="p-4">
            {/* Menu items with staggered animation */}
            <div className="space-y-1">
              <Accordion type="single" collapsible className="w-full">
                {/* Expertise Accordion */}
                <AccordionItem 
                  value="expertise" 
                  className={`border-white/10 transform transition-all duration-300 ${
                    isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '50ms' }}
                >
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-primary active:text-primary hover:no-underline py-4 min-h-[48px] touch-manipulation">
                    Expertise
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4 pl-4 py-2">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">Solutions</h4>
                        <Link href="/solutions/intelligent-process-optimization" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Intelligent Process Optimization
                        </Link>
                        <Link href="/solutions/data-solutions" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Data-Driven Customer Intelligence
                        </Link>
                        <Link href="/solutions/process-orchestration" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Scalable Enterprise Transformation
                        </Link>
                        <Link href="/capabilities/growth-marketing-sales" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Accelerating Business Growth
                        </Link>
                      </div>
                      
                      <div className="space-y-2 mt-2 pt-2 border-t border-white/10">
                        <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">Services</h4>
                        <Link href="/capabilities" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Process Automation
                        </Link>
                        <Link href="/capabilities" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          App Development
                        </Link>
                        <Link href="/capabilities" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Data Solutions
                        </Link>
                        <Link href="/capabilities" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          Digital Engagement
                        </Link>
                        <Link href="/capabilities/growth-marketing-sales" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                          E-commerce
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Industries Accordion */}
                <AccordionItem 
                  value="industries" 
                  className={`border-white/10 transform transition-all duration-300 ${
                    isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-primary active:text-primary hover:no-underline py-4 min-h-[48px] touch-manipulation">
                    Industries
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 pl-4 py-2 max-h-64 overflow-y-auto">
                      {industries.map((industry) => (
                        <Link 
                          key={industry.slug}
                          href={`/industries/${industry.slug}`} 
                          className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" 
                          onClick={onClose}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Organization Accordion */}
                <AccordionItem 
                  value="organization" 
                  className={`border-white/10 transform transition-all duration-300 ${
                    isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-primary active:text-primary hover:no-underline py-4 min-h-[48px] touch-manipulation">
                    Organization
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 pl-4 py-2">
                      <Link href="/about" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                        About Us
                      </Link>
                      <Link href="/team" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                        Our People
                      </Link>
                      <Link href="/insights" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                        Insights
                      </Link>
                      <Link href="/careers" className="block text-white/70 hover:text-primary active:text-primary py-3 min-h-[44px] transition-colors touch-manipulation" onClick={onClose}>
                        Careers
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Direct links with staggered animation */}
              <Link 
                href="/capabilities" 
                className={`block text-lg font-medium text-white hover:text-primary active:text-primary py-4 min-h-[52px] border-b border-white/10 transition-all duration-300 touch-manipulation ${
                  isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
                onClick={onClose}
              >
                Capabilities
              </Link>

              <Link 
                href="/cases" 
                className={`block text-lg font-medium text-white hover:text-primary active:text-primary py-4 min-h-[52px] border-b border-white/10 transition-all duration-300 touch-manipulation ${
                  isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '250ms' }}
                onClick={onClose}
              >
                Cases
              </Link>
              
              <button
                onClick={(e) => {
                  scrollToInitiatives(e);
                  onClose();
                }}
                className={`block w-full text-left text-lg font-medium text-white hover:text-primary active:text-primary py-4 min-h-[52px] border-b border-white/10 transition-all duration-300 touch-manipulation ${
                  isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Initiatives
              </button>
            </div>

            {/* CTA Button with animation */}
            <div 
              className={`mt-6 transition-all duration-300 ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <Link href="/contact" onClick={onClose}>
                <Button className="bg-primary hover:bg-primary/90 active:bg-secondary text-white font-semibold w-full py-6 min-h-[56px] text-lg rounded-lg transition-colors touch-manipulation">
                  Contact us
                </Button>
              </Link>
            </div>

            {/* Language selector with animation */}
            <div 
              className={`flex items-center justify-center gap-2 text-sm font-medium text-white/70 mt-6 pt-6 border-t border-white/10 transition-all duration-300 ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Globe className="w-4 h-4" />
              <span>EN-US</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HamburgerButton };
