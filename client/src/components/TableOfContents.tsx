import { useState, useEffect, useCallback } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentSelector?: string;
}

export default function TableOfContents({ contentSelector = "article" }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(true);

  // Extract headings from the article
  useEffect(() => {
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
  }, [contentSelector]);

  // Track active heading based on scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150; // Offset from top to trigger active state

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
    }
  }, []);

  if (headings.length < 3) {
    return null; // Don't show TOC for short articles
  }

  return (
    <div className="bg-[#F5F5F5] rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 w-full text-left text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/50 mb-4"
        >
          <List className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Table of Contents</span>
        </button>

        {isExpanded && (
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left text-sm py-2 px-3 rounded transition-all duration-200
                    ${heading.level === 3 ? "pl-5" : ""}
                    ${
                      activeId === heading.id
                        ? "bg-[#0077B5]/10 text-[#0077B5] font-medium border-l-2 border-[#0077B5]"
                        : "text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-white"
                    }
                  `}
                >
                  <span className="line-clamp-2">{heading.text}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
