import { useState, useEffect, useCallback } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface InlineTableOfContentsProps {
  contentSelector?: string;
}

export default function InlineTableOfContents({ contentSelector = "article" }: InlineTableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract headings from the article
  useEffect(() => {
    const extractHeadings = () => {
      const article = document.querySelector(contentSelector);
      if (!article) return;

      const headingElements = article.querySelectorAll("h2, h3");
      const items: TOCItem[] = [];

      headingElements.forEach((heading, index) => {
        // Generate ID if not present
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }

        items.push({
          id: heading.id,
          text: heading.textContent || "",
          level: heading.tagName === "H2" ? 2 : 3,
        });
      });

      setHeadings(items);
    };

    // Wait for content to render
    const timer = setTimeout(extractHeadings, 100);
    return () => clearTimeout(timer);
  }, [contentSelector]);

  // Track active heading based on scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150;

      let currentActive = "";

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollY >= top - offset) {
            currentActive = heading.id;
          }
        }
      }

      setActiveId(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsExpanded(false);
    }
  }, []);

  if (headings.length < 3) {
    return null;
  }

  return (
    <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <List className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Table of Contents</span>
          <span className="text-slate-400 font-normal">({headings.filter(h => h.level === 2).length} sections)</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
        ) : (
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-slate-200">
          <ul className="mt-3 space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left text-sm py-1.5 px-3 rounded transition-all duration-200
                    ${heading.level === 3 ? "pl-6 text-xs" : ""}
                    ${
                      activeId === heading.id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    }
                  `}
                >
                  <span className="line-clamp-1">{heading.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
