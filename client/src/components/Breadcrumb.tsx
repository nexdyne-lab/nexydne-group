import { Link } from 'wouter';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate JSON-LD structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.href && { "item": `${window.location.origin}${item.href}` })
      }))
    };

    // Create or update script tag
    let script = document.querySelector('script[data-breadcrumb-schema]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-breadcrumb-schema', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Cleanup on unmount
    return () => {
      const existingScript = document.querySelector('script[data-breadcrumb-schema]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return (
    <nav 
      className="container py-4 text-sm text-muted-foreground" 
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-cyan-600 transition-all duration-300 ease-out relative group px-1 py-0.5 rounded"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                {/* Subtle background glow on hover */}
                <span className="absolute inset-0 bg-cyan-50 opacity-0 rounded transition-opacity duration-300 ease-out group-hover:opacity-100 -z-10"></span>
              </Link>
            ) : (
              <span className="text-charcoal font-medium px-1 py-0.5">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1.5 text-muted-foreground/70 transition-colors duration-300 group-hover:text-cyan-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
