import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, ArrowRight, Command } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SEARCH_INDEX, SearchItem } from "@/lib/searchIndex";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [location, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Only close if not in mobile mode (mobile uses Dialog)
        if (!isMobile) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  // Search logic
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.type.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery) ||
      item.keywords?.some(k => k.toLowerCase().includes(lowerQuery))
    ).slice(0, 8); // Limit to 8 results
    
    setResults(filtered);
    setSelectedIndex(-1);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleSelect(results[selectedIndex].href);
      } else if (results.length > 0) {
        // Select first result if none selected
        handleSelect(results[0].href);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (href: string) => {
    setLocation(href);
    setIsOpen(false);
    setQuery("");
  };

  // Global keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const SearchContent = () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center p-3 border-b border-white/10">
        <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/70 ml-1" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search insights, services, capabilities..."
          className="border-0 bg-transparent focus-visible:ring-0 text-white placeholder:text-muted-foreground h-10 text-base md:text-sm flex-1"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-muted-foreground/70 hover:text-white"
          onClick={() => {
            setIsOpen(false);
            setQuery("");
          }}
        >
          <X className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        {results.length > 0 ? (
          <div className="px-2">
            {results.map((result, index) => (
              <button
                key={index}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-md flex items-center justify-between group transition-colors mb-1",
                  selectedIndex === index ? "bg-white/10" : "hover:bg-white/5"
                )}
                onClick={() => handleSelect(result.href)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex-1 min-w-0 mr-4">
                  <div className={cn(
                    "text-sm font-medium transition-colors truncate",
                    selectedIndex === index ? "text-secondary" : "text-white group-hover:text-secondary"
                  )}>
                    {result.title}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                      {result.type}
                    </span>
                    {result.description && (
                      <span className="text-xs text-muted-foreground truncate hidden sm:inline-block">
                        {result.description}
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight className={cn(
                  "w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground transition-all flex-shrink-0",
                  selectedIndex === index ? "text-secondary opacity-100 translate-x-0" : "group-hover:text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </button>
            ))}
          </div>
        ) : query.length > 0 ? (
          <div className="p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 text-center text-muted-foreground">
            <p className="text-sm">No results found for "{query}"</p>
            <p className="text-xs mt-2 text-muted-foreground">Try searching for "AI", "Data", or "Consulting"</p>
          </div>
        ) : (
          <div className="p-4">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">Suggested</div>
            <div className="space-y-1">
              {SEARCH_INDEX.slice(0, 5).map((item, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-2 rounded-md hover:bg-white/5 text-sm text-muted-foreground/70 hover:text-white transition-colors flex items-center gap-2"
                  onClick={() => handleSelect(item.href)}
                >
                  <SearchIcon className="w-3 h-3 opacity-50" />
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {!isMobile && (
        <div className="p-2 border-t border-white/10 text-[10px] text-muted-foreground flex justify-between px-4">
          <div className="flex gap-3">
            <span><kbd className="font-sans bg-white/10 px-1 rounded text-muted-foreground/70">↑</kbd> <kbd className="font-sans bg-white/10 px-1 rounded text-muted-foreground/70">↓</kbd> to navigate</span>
            <span><kbd className="font-sans bg-white/10 px-1 rounded text-muted-foreground/70">↵</kbd> to select</span>
          </div>
          <span><kbd className="font-sans bg-white/10 px-1 rounded text-muted-foreground/70">Esc</kbd> to close</span>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/90 hover:text-secondary hover:bg-white/5"
          >
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-base border-white/10 text-white w-full h-[100dvh] max-w-full rounded-none sm:rounded-lg sm:h-auto sm:max-h-[85vh] gap-0">
          <SearchContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      {!isOpen ? (
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/90 hover:text-secondary hover:bg-white/5 group relative"
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-charcoal/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
            Search (⌘K)
          </span>
        </Button>
      ) : (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] bg-base border border-white/10 rounded-lg shadow-xl sm:shadow-xl sm:shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50 max-h-[80vh] flex flex-col">
          <SearchContent />
        </div>
      )}
    </div>
  );
}
