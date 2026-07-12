import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, X, ChevronDown, Menu, ArrowUpRight } from "lucide-react";
import UtilityBar from "./UtilityBar";

// Industries data for mega menu
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

// Capabilities data
const capabilities = [
  { name: "Artificial Intelligence", slug: "artificial-intelligence" },
  { name: "Business Building", slug: "business-building" },
  { name: "Technology", slug: "technology" },
  { name: "Strategy & Corporate Finance", slug: "strategy-corporate-finance" },
  { name: "Operations", slug: "operations" },
  { name: "Growth, Marketing & Sales", slug: "growth-marketing-sales" },
  { name: "Data Transformation", slug: "data-transformation" },
  { name: "Digital Twins", slug: "digital-twins" },
  { name: "Internet of Things", slug: "internet-of-things" },
  { name: "Risk & Resilience", slug: "risk-and-resilience" },
];

// Solutions data
const solutions = [
  { name: "Intelligent Process Optimization", slug: "intelligent-process-optimization" },
  { name: "Data-Driven Customer Intelligence", slug: "data-driven-customer-intelligence" },
  { name: "Scalable Enterprise Transformation", slug: "scalable-enterprise-transformation" },
  { name: "Accelerating Business Growth", slug: "accelerating-business-growth" },
  { name: "Process Automation", slug: "rpa" },
  { name: "App Development", slug: "app-development" },
  { name: "Data Solutions", slug: "data-solutions" },
  { name: "Customer Intelligence", slug: "customer-intelligence" },
  { name: "Digital Engagement", slug: "digital-engagement" },
  { name: "Enterprise Transformation", slug: "enterprise-transformation" },
];

// Insights categories
const insightsCategories = [
  {
    title: "Featured Insights",
    items: [
      { name: "Why Intelligent Automation Isn't Optional Anymore", slug: "why-intelligent-automation-isnt-optional-anymore" },
      { name: "How AI Agents Transform Enterprise Operations", slug: "how-ai-agents-transform-enterprise-operations" },
      { name: "Complete Guide to Process Mining", slug: "complete-guide-process-mining" },
      { name: "CEO Guide to Data Modernization", slug: "ceo-guide-data-modernization" },
    ],
  },
  {
    title: "By Topic",
    items: [
      // { name: "AI & Technology", slug: "ai-technology" },
      { name: "Strategy & Finance", slug: "strategy-finance" },
      { name: "Operations", slug: "operations" },
      { name: "Growth & Marketing", slug: "growth-marketing" },
    ],
  },
];

// About items
const aboutItems = [
  { name: "About Us", slug: "" },
  { name: "Purpose, Mission & Values", slug: "values" },
  { name: "Our Impact", slug: "impact" },
  { name: "Leadership Team", slug: "/team" },
  // { name: "US Office", slug: "us-office" },
];

type NavItem = "industries" | "capabilities" | "solutions" | "insights" | "about" | null;

/* ------------------------------------------------------------------ */
/*  Mega-menu — one clean, organised pattern for every dropdown        */
/*  Intro column · structured link grid · branded feature card         */
/* ------------------------------------------------------------------ */

interface MenuLink { label: string; href: string; desc?: string }
interface MenuFeature {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}
interface MenuConfig {
  eyebrow: string;
  description: string;
  viewAll?: MenuLink;
  links?: MenuLink[];
  groups?: { title: string; links: MenuLink[] }[];
  feature: MenuFeature;
}

const industryLinks: MenuLink[] = industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }));
// The six core disciplines shown in the Capabilities mega-menu (matches the
// homepage "Discover our capabilities" set). Each carries a one-line descriptor.
const capabilityMajorLinks: MenuLink[] = [
  { label: "Artificial Intelligence", href: "/capabilities/artificial-intelligence", desc: "Governed AI that scales judgment — not just automation." },
  { label: "Business Building", href: "/capabilities/business-building", desc: "Launch new ventures and revenue engines from inside the core." },
  { label: "Technology", href: "/capabilities/technology", desc: "Modern, cloud-native platforms built to scale with ambition." },
  { label: "Strategy & Corporate Finance", href: "/capabilities/strategy-corporate-finance", desc: "Sharper strategy and capital decisions that compound value." },
  { label: "Operations", href: "/capabilities/operations", desc: "Turn manual operations into governed, autonomous execution." },
  { label: "Growth, Marketing & Sales", href: "/capabilities/growth-marketing-sales", desc: "Convert capability into demand, pipeline, and revenue." },
];
// The four core solutions shown in the Solutions mega-menu (matches the homepage
// "Operational excellence" set). Each carries a one-line descriptor.
const solutionMajorLinks: MenuLink[] = [
  { label: "Intelligent Process Optimization", href: "/solutions/intelligent-process-optimization", desc: "Manual operations become governed, autonomous execution." },
  { label: "Data-Driven Customer Intelligence", href: "/solutions/data-driven-customer-intelligence", desc: "Turn data into governed customer insight at scale." },
  { label: "Scalable Enterprise Transformation", href: "/solutions/scalable-enterprise-transformation", desc: "Modernize the core to scale with ambition." },
  { label: "Accelerating Business Growth", href: "/solutions/accelerating-business-growth", desc: "Products and channels that turn capability into revenue." },
];
const aboutLinks: MenuLink[] = [
  ...aboutItems.map((a) => ({
    label: a.name,
    href: a.slug.startsWith("/") ? a.slug : `/about${a.slug ? `/${a.slug}` : ""}`,
  })),
  { label: "Case Studies", href: "/cases" },
  { label: "Contact Us", href: "/contact" },
];
const insightGroups = insightsCategories.map((cat) => ({
  title: cat.title,
  links: cat.items.map((it) => ({ label: it.name, href: `/insights/${it.slug}` })),
}));

const MENU: Record<Exclude<NavItem, null>, MenuConfig> = {
  industries: {
    eyebrow: "Industries",
    description: "Deep sector expertise — from financial services and healthcare to the public sector.",
    viewAll: { label: "View all industries", href: "/industries" },
    links: industryLinks,
    feature: {
      eyebrow: "Spotlight",
      title: "Winning with governed AI in the mid-market",
      desc: "A practical guide to scaling human judgment alongside automation.",
      href: "/insights/mid-market-ai-guide",
      cta: "Read the guide",
    },
  },
  capabilities: {
    eyebrow: "Capabilities",
    description: "The disciplines we bring to every engagement — strategy, technology, and governed AI.",
    viewAll: { label: "View all capabilities", href: "/capabilities" },
    links: capabilityMajorLinks,
    feature: {
      eyebrow: "Flagship doctrine",
      title: "HIG™ — Human Intelligence Governance",
      desc: "Our framework for governing intelligence before you scale it.",
      href: "/about",
      cta: "Explore HIG™",
    },
  },
  solutions: {
    eyebrow: "Solutions",
    description: "Productised programs that move from strategy to measurable outcomes.",
    viewAll: { label: "View all solutions", href: "/solutions" },
    links: solutionMajorLinks,
    feature: {
      eyebrow: "Featured solution",
      title: "Intelligent Process Optimization",
      desc: "Turn operational chaos into governed, measurable execution.",
      href: "/solutions/intelligent-process-optimization",
      cta: "See the solution",
    },
  },
  insights: {
    eyebrow: "Insights",
    description: "Perspectives on governance, strategy, and scaling human judgment with AI.",
    viewAll: { label: "View all insights", href: "/insights" },
    groups: insightGroups,
    feature: {
      eyebrow: "Featured insight",
      title: "The AI Adoption Outlook 2026",
      desc: "Why the winners will be the organisations that govern first.",
      href: "/insights/ai-adoption-outlook-2026",
      cta: "Read more",
    },
  },
  about: {
    eyebrow: "About",
    description: "The firm, our people, and the doctrine behind our work.",
    links: aboutLinks,
    feature: {
      eyebrow: "Who we are",
      title: "Human Intelligence. Governed. Scaled.",
      desc: "A management consulting firm built for the age of AI.",
      href: "/about",
      cta: "About NexDyne",
    },
  },
};

function MegaLink({ href, children, desc, onNavigate }: { href: string; children: React.ReactNode; desc?: string; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group flex justify-between gap-3 border-b border-border/40 ${desc ? "items-start py-3" : "items-center py-2.5"}`}
    >
      <span className="min-w-0">
        <span className="block text-[15px] font-medium text-charcoal/90 transition-colors group-hover:text-primary">{children}</span>
        {desc && (
          <span className="mt-1 block text-[13px] leading-[1.5] text-charcoal/50">{desc}</span>
        )}
      </span>
      <ArrowUpRight className={`${desc ? "mt-0.5" : ""} h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100`} />
    </Link>
  );
}

function FeatureCard({ feature, onNavigate }: { feature: MenuFeature; onNavigate: () => void }) {
  return (
    <Link
      href={feature.href}
      onClick={onNavigate}
      className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-lg bg-charcoal p-7 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{ backgroundImage: "url('/brand/pattern-orange.svg')", backgroundSize: "200px", backgroundRepeat: "repeat" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(120% 100% at 100% 100%, rgba(224,76,44,0.35) 0%, transparent 55%)" }}
      />
      <div className="relative flex h-full flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">{feature.eyebrow}</span>
        <h4 className="mt-3 text-[1.35rem] font-bold leading-[1.18] tracking-[-0.02em]">{feature.title}</h4>
        <p className="mt-3 text-sm leading-[1.6] text-white/70">{feature.desc}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors group-hover:text-amber">
          {feature.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function MegaMenu({
  config,
  onEnter,
  onLeave,
  onNavigate,
}: {
  config: MenuConfig;
  onEnter: () => void;
  onLeave: () => void;
  onNavigate: () => void;
}) {
  return (
    <div
      className="absolute left-0 right-0 top-full border-t border-border/60 bg-white shadow-[0_30px_60px_-30px_rgba(36,36,36,0.4)]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-8 md:px-12 md:py-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Intro column */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{config.eyebrow}</span>
            <p className="mt-4 max-w-[32ch] text-[15px] leading-[1.6] text-charcoal/60">{config.description}</p>
            {config.viewAll && (
              <Link
                href={config.viewAll.href}
                onClick={onNavigate}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-charcoal transition-colors hover:text-primary"
              >
                {config.viewAll.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Link grid */}
          <div className="lg:col-span-6">
            {config.groups ? (
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                {config.groups.map((g) => (
                  <div key={g.title}>
                    <h5 className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-charcoal/40">{g.title}</h5>
                    <div>
                      {g.links.map((l) => (
                        <MegaLink key={l.href} href={l.href} onNavigate={onNavigate}>{l.label}</MegaLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                {(config.links ?? []).map((l) => (
                  <MegaLink key={l.href} href={l.href} desc={l.desc} onNavigate={onNavigate}>{l.label}</MegaLink>
                ))}
              </div>
            )}
          </div>

          {/* Branded feature card */}
          <div className="lg:col-span-3">
            <FeatureCard feature={config.feature} onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<NavItem>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on navigation
  const handleNavigation = useCallback(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Handle dropdown hover
  const handleDropdownEnter = (item: NavItem) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(item);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // The home hero is a full-bleed colour carousel, so the navbar sits transparent
  // (white text) over it at the top of the page and turns solid white on scroll.
  const darkHeroPages: string[] = ["/"];
  const isLightBackgroundPage = !darkHeroPages.includes(location);

  // Determine if navbar should be light (white bg, dark text)
  const isNavbarLight = isScrolled || activeDropdown !== null || isLightBackgroundPage;

  return (
    <>
      {/* Fixed Navigation Container */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
          isNavbarLight 
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        {/* Upper Utility Bar */}
        <UtilityBar isScrolled={isScrolled} isNavbarLight={isNavbarLight} />

        <div className="flex h-14 md:h-20 items-center justify-between w-full px-3 md:px-6 lg:px-12">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Hamburger Button */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setActiveDropdown(null);
              }}
              className={`relative w-10 h-10 flex items-center justify-center rounded transition-colors ${
                isNavbarLight || menuOpen
                  ? 'hover:bg-subtle' 
                  : 'hover:bg-white/10'
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span className={`block w-5 h-0.5 ${isNavbarLight ? 'bg-charcoal' : 'bg-white'}`} />
                  <span className={`block w-5 h-0.5 ${isNavbarLight ? 'bg-charcoal' : 'bg-white'}`} />
                  <span className={`block w-5 h-0.5 ${isNavbarLight ? 'bg-charcoal' : 'bg-white'}`} />
                </div>
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={handleNavigation}>
              <img
                src={isNavbarLight ? "/brand/logo-mixed.svg" : "/brand/logo-white.svg"}
                alt="NexDyne Consulting Group"
                className="h-6 md:h-8 w-auto"
              />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-1 ml-8">
              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('industries')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeDropdown === 'industries'
                      ? 'text-primary'
                      : isNavbarLight 
                        ? 'text-charcoal hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Capabilities */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('capabilities')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeDropdown === 'capabilities'
                      ? 'text-primary'
                      : isNavbarLight 
                        ? 'text-charcoal hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  Capabilities
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'capabilities' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeDropdown === 'solutions'
                      ? 'text-primary'
                      : isNavbarLight 
                        ? 'text-charcoal hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Insights */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('insights')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeDropdown === 'insights'
                      ? 'text-primary'
                      : isNavbarLight 
                        ? 'text-charcoal hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  Insights
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    activeDropdown === 'about'
                      ? 'text-primary'
                      : isNavbarLight 
                        ? 'text-charcoal hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Careers - Direct Link */}
              <Link
                href="/careers"
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isNavbarLight 
                    ? 'text-charcoal hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
                onClick={handleNavigation}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Right: Search + Contact */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isNavbarLight || menuOpen
                  ? 'hover:bg-subtle text-charcoal' 
                  : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link 
              href="/contact"
              className={`hidden sm:block font-semibold text-sm uppercase tracking-wider transition-colors ${
                isNavbarLight || menuOpen
                  ? 'text-charcoal hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
              onClick={handleNavigation}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mega Menu Dropdown — one organised pattern for every nav item */}
        {activeDropdown && MENU[activeDropdown] && (
          <MegaMenu
            config={MENU[activeDropdown]}
            onEnter={() => handleDropdownEnter(activeDropdown)}
            onLeave={handleDropdownLeave}
            onNavigate={handleNavigation}
          />
        )}
      </nav>

      {/* Full-Screen Menu Overlay (Mobile + Search) */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-14 md:pt-20">
          <div className="h-full overflow-y-auto">
            {/* Search Bar */}
            <div className="border-b border-border">
              <div className="container px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3 max-w-2xl">
                  <Search className="w-5 h-5 text-muted-foreground/70" />
                  <input
                    type="text"
                    placeholder="Type to search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-lg bg-transparent border-none outline-none focus:ring-2 focus:ring-primary/40 rounded placeholder-charcoal/40"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")}>
                      <X className="w-5 h-5 text-muted-foreground/70" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="container px-4 sm:px-6 py-6 sm:py-8">
              <div className="space-y-5 sm:space-y-6">
                {/* Industries */}
                <div>
                  <Link
                    href="/industries"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors mb-3 sm:mb-4"
                    onClick={handleNavigation}
                  >
                    Industries
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 pl-3 sm:pl-4">
                    {industries.slice(0, 8).map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className="py-1 text-muted-foreground hover:text-primary transition-colors"
                        onClick={handleNavigation}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <Link
                    href="/capabilities"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors mb-3 sm:mb-4"
                    onClick={handleNavigation}
                  >
                    Capabilities
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 pl-3 sm:pl-4">
                    {capabilities.slice(0, 6).map((capability) => (
                      <Link
                        key={capability.slug}
                        href={`/capabilities/${capability.slug}`}
                        className="py-1 text-muted-foreground hover:text-primary transition-colors"
                        onClick={handleNavigation}
                      >
                        {capability.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <Link
                    href="/solutions"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors mb-3 sm:mb-4"
                    onClick={handleNavigation}
                  >
                    Solutions
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 pl-3 sm:pl-4">
                    {solutions.slice(0, 4).map((solution) => (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        className="py-1 text-muted-foreground hover:text-primary transition-colors"
                        onClick={handleNavigation}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                <div>
                  <Link
                    href="/insights"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    Insights
                  </Link>
                </div>

                {/* About */}
                <div>
                  <Link
                    href="/about"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    About
                  </Link>
                </div>

                {/* Careers */}
                <div>
                  <Link
                    href="/careers"
                    className="block text-xl sm:text-2xl font-semibold text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    Careers
                  </Link>
                </div>

                {/* Contact */}
                <div className="pt-5 sm:pt-6 border-t border-border">
                  <Link
                    href="/contact"
                    className="block text-xl sm:text-2xl font-semibold text-primary hover:text-primary/90 transition-colors"
                    onClick={handleNavigation}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

