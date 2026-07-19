import { ArrowRight, FileText, Briefcase, Search } from "lucide-react";
import { useLocation, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const links = [
    { href: "/resources", icon: FileText, title: "Free Resources", desc: "Readiness tools for growing companies" },
    { href: "/solutions/intelligent-process-optimization", icon: Briefcase, title: "Our Solutions", desc: "Explore our capabilities" },
    { href: "/cases", icon: Search, title: "Case Studies", desc: "See our impact across industries" },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans text-charcoal">
      <Navigation />

      <div className="flex-grow flex items-center justify-center py-24 px-6">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: message */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="nx-eyebrow text-charcoal/60">Error 404</span>
              </div>
              <h1 className="nx-h1 text-charcoal">
                Page not <span className="text-primary">found</span>
              </h1>
              <p className="nx-lead text-charcoal/60 mt-6 max-w-md">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setLocation("/")}
                  className="inline-block whitespace-nowrap bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary-hover transition-colors cursor-pointer"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => setLocation("/contact")}
                  className="inline-block whitespace-nowrap border border-charcoal/30 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </div>
            </div>

            {/* Right: helpful links — sharp bordered cards, red-on-hover */}
            <div className="border border-border bg-white p-7 md:p-8">
              <h3 className="nx-h3 text-charcoal mb-6">You might be looking for:</h3>
              <div className="space-y-3">
                {links.map(({ href, icon: Icon, title, desc }) => (
                  <Link key={href} href={href}>
                    <div className="group flex items-center gap-4 p-4 border border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="w-10 h-10 flex-none border border-border flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">{title}</h4>
                        <p className="text-sm text-charcoal/55">{desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-charcoal/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
