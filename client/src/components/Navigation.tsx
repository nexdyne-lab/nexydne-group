import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, X, ChevronDown, Menu } from "lucide-react";
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
  // { name: "Technology", slug: "technology" },
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

  // Determine if current page has a light/white background (no dark hero)
  const lightBackgroundPages = [
    '/insights/mid-market-ai-guide',
    '/insights/digital-transformation-readiness',
    '/insights/scaling-operations',
    '/insights/customer-intelligence',
    '/contact',
    '/careers',
    '/team',
    '/sitemap',
    '/privacy-policy',
    '/terms-of-use',
    '/cookie-preferences',
    '/accessibility',
  ];
  
  // Check if current page starts with any light background page path
  const isLightBackgroundPage = lightBackgroundPages.some(page => 
    location === page || location.startsWith('/insights/')
  );

  // Determine if navbar should be light (white bg, dark text)
  const isNavbarLight = isScrolled || activeDropdown !== null || isLightBackgroundPage;

  return (
    <>
      {/* Fixed Navigation Container */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavbarLight 
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        {/* Upper Utility Bar */}
        <UtilityBar isScrolled={isScrolled} isNavbarLight={isNavbarLight} />

        <div className="flex h-20 items-center justify-between w-full px-6 lg:px-12">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-6">
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
              <div className="flex flex-col leading-tight">
                <span className={`text-[1.4rem] md:text-[1.7rem] font-bold tracking-tight ${isNavbarLight ? 'text-charcoal' : 'text-white'}`}>
                  NEXDYNE
                </span>
                <span className={`text-[11px] md:text-xs font-medium tracking-[0.15em] uppercase ${isNavbarLight ? 'text-charcoal/70' : 'text-white/70'}`}>
                  CONSULTING GROUP
                </span>
              </div>
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

        {/* Mega Menu Dropdowns - positioned below the nav bar */}
        {/* Industries Dropdown */}
        {activeDropdown === 'industries' && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-border/50 shadow-lg"
            onMouseEnter={() => handleDropdownEnter('industries')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Industries</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="py-2 text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
              {/* <div className="mt-6 pt-6 border-t border-border/50">
                <Link
                  href="/industries"
                  className="text-primary font-semibold hover:underline"
                  onClick={handleNavigation}
                >
                  View all industries →
                </Link>
              </div> */}
            </div>
          </div>
        )}

        {/* Capabilities Dropdown */}
        {activeDropdown === 'capabilities' && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-border/50 shadow-lg"
            onMouseEnter={() => handleDropdownEnter('capabilities')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
                {capabilities.map((capability) => (
                  <Link
                    key={capability.slug}
                    href={`/capabilities/${capability.slug}`}
                    className="py-2 text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    {capability.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <Link
                  href="/capabilities"
                  className="text-primary font-semibold hover:underline"
                  onClick={handleNavigation}
                >
                  View all capabilities →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Solutions Dropdown */}
        {activeDropdown === 'solutions' && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-border/50 shadow-lg"
            onMouseEnter={() => handleDropdownEnter('solutions')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Solutions</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
                {solutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    className="py-2 text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
              {/* <div className="mt-6 pt-6 border-t border-border/50">
                <Link
                  href="/solutions"
                  className="text-primary font-semibold hover:underline"
                  onClick={handleNavigation}
                >
                  View all solutions →
                </Link>
              </div> */}
            </div>
          </div>
        )}

        {/* Insights Dropdown */}
        {activeDropdown === 'insights' && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-border/50 shadow-lg"
            onMouseEnter={() => handleDropdownEnter('insights')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {insightsCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">{category.title}</h4>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/insights/${item.slug}`}
                          className="block py-2 text-charcoal hover:text-primary transition-colors"
                          onClick={handleNavigation}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/50">
                <Link
                  href="/insights"
                  className="text-primary font-semibold hover:underline"
                  onClick={handleNavigation}
                >
                  View all insights →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* About Dropdown */}
        {activeDropdown === 'about' && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-border/50 shadow-lg"
            onMouseEnter={() => handleDropdownEnter('about')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">About NexDyne Consulting Group</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.slug.startsWith('/') ? item.slug : `/about${item.slug ? `/${item.slug}` : ''}`}
                    className="py-2 text-charcoal hover:text-primary transition-colors"
                    onClick={handleNavigation}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/cases"
                  className="py-2 text-charcoal hover:text-primary transition-colors"
                  onClick={handleNavigation}
                >
                  Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="py-2 text-charcoal hover:text-primary transition-colors"
                  onClick={handleNavigation}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Full-Screen Menu Overlay (Mobile + Search) */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20">
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
                    className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400"
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
