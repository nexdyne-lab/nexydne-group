import { useState, useEffect } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector("article");
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate how far through the article we've scrolled
      const scrollStart = articleTop - windowHeight * 0.1;
      const scrollEnd = articleTop + articleHeight - windowHeight * 0.5;
      const scrollRange = scrollEnd - scrollStart;

      if (scrollY < scrollStart) {
        setProgress(0);
      } else if (scrollY > scrollEnd) {
        setProgress(100);
      } else {
        const currentProgress = ((scrollY - scrollStart) / scrollRange) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    calculateProgress();
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
