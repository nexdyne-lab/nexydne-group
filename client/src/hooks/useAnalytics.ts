import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Define the analytics event interface
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

// Define the analytics provider interface
interface AnalyticsProvider {
  trackPageview: (path: string) => void;
  trackEvent: (event: AnalyticsEvent) => void;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics 4 Implementation
const ga4Provider: AnalyticsProvider = {
  trackPageview: (path) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
      });
    }
  },
  trackEvent: (event) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event.name, event.properties);
    }
  },
};

// Mock implementation for development
const mockProvider: AnalyticsProvider = {
  trackPageview: (path) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Pageview: ${path}`);
    }
  },
  trackEvent: (event) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Event: ${event.name}`, event.properties);
    }
  },
};

// Select provider based on environment
const provider = process.env.NODE_ENV === 'production' ? ga4Provider : mockProvider;

export function useAnalytics() {
  const [location] = useLocation();

  // Track pageviews on route change
  useEffect(() => {
    provider.trackPageview(location);
  }, [location]);

  // Return track function for custom events
  const track = (name: string, properties?: Record<string, any>) => {
    provider.trackEvent({ name, properties });
  };

  return { track };
}
