import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, X, ChevronDown, ChevronRight, ChevronLeft, Menu, ArrowUpRight, Globe, Bookmark } from "lucide-react";
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
      title: "Winning with governed AI at growing companies",
      desc: "A practical guide to scaling human judgment alongside automation.",
      href: "/insights/practical-ai-guide",
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
      className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-lg border border-white/10 p-7 text-white transition-colors"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      {/* single signal accent — thin orange top rule */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: "#DE2F23" }} />
      <div className="relative flex h-full flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DE2F23]">{feature.eyebrow}</span>
        <h4 className="mt-3 text-[1.35rem] font-bold leading-[1.18] tracking-[-0.02em]">{feature.title}</h4>
        <p className="mt-3 text-sm leading-[1.6] text-white/60">{feature.desc}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/90 transition-colors group-hover:text-white">
          {feature.cta}
          <ArrowUpRight className="h-4 w-4 text-[#DE2F23] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

/* ------------------------------------------------------------------ */
/*  Hamburger drawer — Bain-style two-level slide (master → section)    */
/* ------------------------------------------------------------------ */

// Order of drillable sections in the drawer master list.
const drawerSections: Exclude<NavItem, null>[] = ["industries", "capabilities", "solutions", "insights", "about"];

// Utility links mirrored from the top UtilityBar (which is hidden on mobile),
// shown below the divider in the drawer master list.
const drawerUtilityLinks: { label: string; href: string }[] = [
  { label: "Offices", href: "/offices" },
  { label: "Alumni", href: "/follow-us" },
  { label: "Media Center", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function DrawerChildPanel({
  section,
  onNavigate,
}: {
  section: Exclude<NavItem, null>;
  onNavigate: () => void;
}) {
  const cfg = MENU[section];
  const items: MenuLink[] = cfg.links ?? (cfg.groups ? cfg.groups.flatMap((g) => g.links) : []);
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-6 pb-10 pt-7">
        {/* Single red signal accent + title */}
        <span aria-hidden className="mb-4 block h-[3px] w-10 rounded-full bg-primary" />
        <h3 className="text-[1.5rem] font-bold tracking-[-0.02em] text-charcoal">{cfg.eyebrow}</h3>
        <p className="mb-5 mt-1.5 text-[13.5px] leading-[1.55] text-charcoal/50">{cfg.description}</p>
        <div className="flex flex-col">
          {items.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className="group flex items-center justify-between gap-3 border-b border-border/40 py-3.5 text-[15px] font-medium text-charcoal/90 transition-colors hover:text-primary"
            >
              <span>{l.label}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-primary opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        {cfg.viewAll && (
          <Link
            href={cfg.viewAll.href}
            onClick={onNavigate}
            className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-primary"
          >
            {cfg.viewAll.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<NavItem>(null);
  // Which section is drilled-into inside the hamburger drawer (null = master list)
  const [drawerSection, setDrawerSection] = useState<Exclude<NavItem, null> | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);
  // Retains the last drilled section so its panel stays rendered while sliding back
  const lastDrawerSectionRef = useRef<Exclude<NavItem, null> | null>(null);
  if (drawerSection) lastDrawerSectionRef.current = drawerSection;
  const drawerChildSection = drawerSection ?? lastDrawerSectionRef.current;

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
    setDrawerSection(null);
  }, []);

  // Reset the drawer to its master list whenever it closes
  useEffect(() => {
    if (!menuOpen) setDrawerSection(null);
  }, [menuOpen]);

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

  // The home hero and the About firm-hero are full-bleed dark, so the navbar sits
  // transparent (white text) over them at the top of the page and turns solid white
  // on scroll. Keep this list in sync with any page that opens on a dark hero.
  const darkHeroPages: string[] = ["/", "/about"];
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

      {/* Hamburger drawer — Bain-style two-level slide (master → section) */}
      {menuOpen && (
        <>
          {/* Scrim — dims the page; click to close */}
          <div
            className="fixed inset-0 top-14 z-40 bg-charcoal/40 backdrop-blur-[2px] md:top-20"
            onClick={handleNavigation}
            aria-hidden
          />
          {/* Left-anchored drawer panel */}
          <div className="fixed bottom-0 left-0 top-14 z-40 flex w-full max-w-[430px] flex-col overflow-hidden bg-white shadow-[0_30px_80px_-20px_rgba(36,36,36,0.5)] md:top-20">
            {/* Sticky header — always-clear Back + Close */}
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-border pl-3 pr-4">
              {drawerSection ? (
                <button
                  onClick={() => setDrawerSection(null)}
                  className="group flex items-center gap-1.5 rounded-md py-2 pl-2 pr-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-primary"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                  Main menu
                </button>
              ) : (
                <span className="pl-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                  Menu
                </span>
              )}
              <button
                onClick={handleNavigation}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sliding track */}
            <div className="relative flex-1 overflow-hidden">
              <div
                className="flex h-full w-[200%] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: drawerSection ? "translateX(-50%)" : "translateX(0)" }}
              >
              {/* --- Master panel --- */}
              <div className="flex h-full w-1/2 flex-col">
                {/* Search */}
                <div className="border-b border-border px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 shrink-0 text-muted-foreground/70" />
                    <input
                      type="text"
                      placeholder="Type to search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-[15px] outline-none placeholder-charcoal/40"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")} aria-label="Clear search">
                        <X className="h-4 w-4 text-muted-foreground/70" />
                      </button>
                    )}
                  </div>
                </div>
                {/* Master list */}
                <nav className="flex-1 overflow-y-auto px-2 py-3">
                  {drawerSections.map((s) => (
                    <button
                      key={s}
                      onClick={() => setDrawerSection(s)}
                      className="group flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-[17px] font-medium text-charcoal transition-colors hover:bg-subtle hover:text-primary"
                    >
                      {MENU[s].eyebrow}
                      <ChevronRight className="h-5 w-5 text-charcoal/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                    </button>
                  ))}
                  {/* Careers — direct link, no sub-panel */}
                  <Link
                    href="/careers"
                    onClick={handleNavigation}
                    className="flex w-full items-center rounded-lg px-3 py-3.5 text-[17px] font-medium text-charcoal transition-colors hover:bg-subtle hover:text-primary"
                  >
                    Careers
                  </Link>
                  {/* Utility links — mirrored from the top UtilityBar */}
                  <div className="mt-3 border-t border-border pt-3">
                    {drawerUtilityLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={handleNavigation}
                        className="flex items-center rounded-md px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal/70 transition-colors hover:bg-subtle hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    ))}
                    {/* Global | English */}
                    <div className="flex items-center gap-2 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal/70">
                      <Globe className="h-3.5 w-3.5" />
                      Global | English
                    </div>
                    {/* Saved Items — coming soon (mirrors the top UtilityBar toast) */}
                    <button
                      onClick={() => {
                        const toast = document.createElement("div");
                        toast.textContent = "Saved Items — Feature coming soon";
                        toast.className =
                          "fixed top-16 right-6 bg-charcoal text-white text-sm px-4 py-2 rounded shadow-lg z-[100]";
                        document.body.appendChild(toast);
                        setTimeout(() => toast.remove(), 2500);
                        handleNavigation();
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal/70 transition-colors hover:bg-subtle hover:text-primary"
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                      Saved Items
                    </button>
                  </div>
                </nav>
              </div>

              {/* --- Child panel --- */}
              <div className="h-full w-1/2">
                {drawerChildSection && (
                  <DrawerChildPanel section={drawerChildSection} onNavigate={handleNavigation} />
                )}
              </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

