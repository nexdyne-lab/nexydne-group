import { useCallback } from "react";
import { useLocation } from "wouter";

interface ScrollOptions {
  offset?: number;
  duration?: number;
  behavior?: ScrollBehavior;
}

/**
 * Custom hook for smooth scrolling to sections
 * Handles both same-page scrolling and cross-page navigation with hash
 */
export function useSmoothScroll() {
  const [location, setLocation] = useLocation();

  const scrollToElement = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { offset = 80, behavior = "smooth" } = options;
    
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string, options: ScrollOptions = {}) => {
    const currentPath = location.split('#')[0];
    const targetPath = `/#${sectionId}`;
    
    // If we're on the home page, just scroll
    if (currentPath === "/" || currentPath === "") {
      scrollToElement(sectionId, options);
    } else {
      // Navigate to home with hash, then scroll
      setLocation(targetPath);
      // Wait for navigation and DOM update
      setTimeout(() => {
        scrollToElement(sectionId, options);
      }, 100);
    }
  }, [location, setLocation, scrollToElement]);

  return { scrollToElement, scrollToSection };
}

/**
 * Standalone function for smooth scroll (for use outside React components)
 */
export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
