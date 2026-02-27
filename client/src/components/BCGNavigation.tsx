import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";

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

// Menu structure
const menuStructure = {
  services: {
    title: "Our Services",
    categories: [
      {
        name: "Industries",
        description: "Learn how we draw on industry expertise to make companies more competitive.",
        items: industries.map(ind => ({ name: ind.name, href: `/industries/${ind.slug}` })),
      },
      {
        name: "Capabilities",
        description: "Explore our core capabilities across technology, strategy, and operations.",
        items: [
          { name: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
          { name: "Business Building", href: "/capabilities/business-building" },
          { name: "Data Transformation", href: "/capabilities/data-transformation" },
          { name: "Digital Twins", href: "/capabilities/digital-twins" },
          { name: "Growth, Marketing & Sales", href: "/capabilities/growth-marketing-sales" },
          { name: "Internet of Things", href: "/capabilities/internet-of-things" },
          { name: "Operations", href: "/capabilities/operations" },
          { name: "Risk & Resilience", href: "/capabilities/risk-and-resilience" },
          { name: "Strategy & Corporate Finance", href: "/capabilities/strategy-corporate-finance" },
        ],
      },
      {
        name: "Solutions",
        description: "Tailored solutions to transform your business.",
        items: [
          { name: "Intelligent Process Optimization", href: "/solutions/intelligent-process-optimization" },
          { name: "Data-Driven Customer Intelligence", href: "/solutions/data-driven-customer-intelligence" },
          { name: "Scalable Enterprise Transformation", href: "/solutions/scalable-enterprise-transformation" },
          { name: "Accelerating Business Growth", href: "/solutions/accelerating-business-growth" },
          { name: "Process Automation", href: "/solutions/rpa" },
          { name: "App Development", href: "/solutions/app-development" },
          { name: "Data Solutions", href: "/solutions/data-solutions" },
          { name: "Customer Intelligence", href: "/solutions/customer-intelligence" },
          { name: "Digital Engagement", href: "/solutions/digital-engagement" },
          { name: "Enterprise Transformation", href: "/solutions/enterprise-transformation" },
        ],
      },
    ],
  },
  insights: {
    title: "Our Insights",
    categories: [
      {
        name: "Featured Insights",
        description: "Our latest thinking on the issues that matter most.",
        items: [
          { name: "Why Intelligent Automation Isn't Optional Anymore", href: "/insights/why-intelligent-automation-isnt-optional-anymore" },
          { name: "How AI Agents Transform Enterprise Operations", href: "/insights/how-ai-agents-transform-enterprise-operations" },
          { name: "Complete Guide to Process Mining", href: "/insights/complete-guide-process-mining" },
          { name: "CEO Guide to Data Modernization", href: "/insights/ceo-guide-data-modernization" },
          { name: "Building a Data Culture", href: "/insights/building-data-culture" },
          { name: "Cloud Native Architecture", href: "/insights/cloud-native-architecture" },
        ],
      },
      {
        name: "Strategy & Finance",
        description: "Strategic insights for business leaders.",
        items: [
          { name: "Series A Fundraising Guide", href: "/insights/series-a-fundraising-guide" },
          { name: "M&A Failure Analysis", href: "/insights/ma-failure-analysis" },
          { name: "Business Transformation Strategy", href: "/insights/business-transformation-strategy" },
          { name: "Performance Improvement Framework", href: "/insights/performance-improvement-framework" },
          { name: "Rolling Forecasts", href: "/insights/rolling-forecasts" },
          { name: "KPI Dashboards", href: "/insights/kpi-dashboards" },
        ],
      },
      {
        name: "Technology & Operations",
        description: "Operational excellence through technology.",
        items: [
          { name: "Generative AI in Supply Chain", href: "/insights/generative-supply-chain" },
          { name: "Digital Twin Manufacturing", href: "/insights/digital-twin-manufacturing" },
          { name: "IoT Resilient Supply Chain", href: "/insights/iot-resilient-supply-chain" },
          { name: "Green Growth Imperative", href: "/insights/green-growth-imperative" },
          { name: "Net Zero Transition", href: "/insights/net-zero-transition" },
        ],
      },
      {
        name: "Growth & Marketing",
        description: "Driving growth through customer-centric strategies.",
        items: [
          { name: "Headless Commerce Guide", href: "/insights/headless-commerce-guide" },
          { name: "AI in E-commerce", href: "/insights/ai-in-ecommerce" },
          { name: "Mobile Commerce Optimization", href: "/insights/mobile-commerce-optimization" },
          { name: "Future of Performance Marketing", href: "/insights/future-of-performance-marketing" },
          { name: "Hyper-Personalization at Scale", href: "/insights/hyper-personalization-at-scale" },
        ],
      },
    ],
  },
  company: {
    title: "Our Company",
    categories: [
      {
        name: "About NexDyne",
        description: "Learn about who we are and what drives us.",
        items: [
          { name: "About Us", href: "/about" },
          { name: "Purpose, Mission & Values", href: "/about/values" },
          { name: "Our Impact", href: "/about/impact" },
          { name: "US Office", href: "/about/us-office" },
        ],
      },
      {
        name: "Our People",
        description: "Meet the team behind NexDyne.",
        items: [
          { name: "Leadership Team", href: "/team" },
          { name: "Careers", href: "/careers" },
        ],
      },
      {
        name: "Case Studies",
        description: "See how we've helped clients succeed.",
        items: [
          { name: "All Case Studies", href: "/cases" },
          { name: "Global Retailer E-commerce", href: "/cases/global-retailer-ecommerce" },
          { name: "Financial Institution Automation", href: "/cases/financial-institution-automation" },
          { name: "Healthcare Provider AI", href: "/cases/healthcare-provider-ai" },
        ],
      },
      {
        name: "Connect",
        description: "Get in touch with us.",
        items: [
          { name: "Contact Us", href: "/contact" },
          { name: "Follow Us", href: "/follow-us" },
        ],
      },
    ],
  },
};

export default function BCGNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<keyof typeof menuStructure | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();

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

  // Close menu on navigation
  const handleNavigation = useCallback((href: string) => {
    setMenuOpen(false);
    setActiveSection(null);
    setActiveCategory(null);
  }, []);

  // Handle section click
  const handleSectionClick = (section: keyof typeof menuStructure) => {
    if (activeSection === section) {
      setActiveSection(null);
      setActiveCategory(null);
    } else {
      setActiveSection(section);
      // Auto-select first category
      const firstCategory = menuStructure[section].categories[0];
      setActiveCategory(firstCategory?.name || null);
    }
  };

  // Handle category hover/click
  const handleCategoryHover = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  // Get current category items
  const getCurrentCategoryItems = () => {
    if (!activeSection || !activeCategory) return null;
    const section = menuStructure[activeSection];
    return section.categories.find(cat => cat.name === activeCategory);
  };

  const currentCategory = getCurrentCategoryItems();

  // Split items into columns for display
  const splitIntoColumns = (items: { name: string; href: string }[], columns: number = 2) => {
    const itemsPerColumn = Math.ceil(items.length / columns);
    const result: { name: string; href: string }[][] = [];
    for (let i = 0; i < columns; i++) {
      result.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return result;
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen 
            ? 'bg-white' 
            : isScrolled 
              ? 'bg-white shadow-sm' 
              : 'bg-transparent'
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
                menuOpen 
                  ? 'bg-transparent' 
                  : isScrolled 
                    ? 'bg-subtle hover:bg-muted' 
                    : 'bg-white/90 hover:bg-white'
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span className="block w-5 h-0.5 bg-charcoal" />
                  <span className="block w-5 h-0.5 bg-charcoal" />
                  <span className="block w-5 h-0.5 bg-charcoal" />
                </div>
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => handleNavigation("/")}>
              <img 
                src="/nexdyne-logo-full.png" 
                alt="NexDyne Intelligence & Consulting" 
                className={`h-16 w-auto object-contain transition-all ${
                  menuOpen || isScrolled ? '' : 'brightness-0'
                }`}
              />
            </Link>
          </div>

          {/* Right: Search + Login */}
          <div className="flex items-center gap-4">
            {/* Search Icon (visible when menu closed) */}
            {!menuOpen && (
              <button
                onClick={() => setMenuOpen(true)}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                  isScrolled 
                    ? 'hover:bg-subtle text-charcoal' 
                    : 'hover:bg-white/20 text-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Login Button */}
            <Link 
              href="/contact"
              className={`font-semibold text-sm uppercase tracking-wider transition-colors ${
                menuOpen || isScrolled 
                  ? 'text-charcoal hover:text-base' 
                  : 'text-charcoal hover:text-base'
              }`}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '80px' }}
      >
        <div className="h-full overflow-y-auto">
          {/* Search Bar */}
          <div className="border-b border-border">
            <div className="container px-4 md:px-6 py-4">
              <div className="flex items-center gap-3 max-w-2xl">
                <Search className="w-5 h-5 text-muted-foreground/70" />
                <input
                  type="text"
                  placeholder="Type to search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Menu Content */}
          <div className="container px-4 md:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16">
              {/* Left Sidebar - Main Categories */}
              <div className="space-y-2">
                {/* Our Services */}
                <div>
                  <button
                    onClick={() => handleSectionClick('services')}
                    className={`w-full text-left py-4 text-2xl font-semibold transition-colors ${
                      activeSection === 'services' 
                        ? 'text-base' 
                        : 'text-charcoal hover:text-base'
                    }`}
                  >
                    {menuStructure.services.title}
                  </button>
                  
                  {/* Subcategories */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeSection === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 pb-4 space-y-1">
                      {menuStructure.services.categories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => handleCategoryHover(cat.name)}
                          onMouseEnter={() => handleCategoryHover(cat.name)}
                          className={`block w-full text-left py-2 text-base transition-colors ${
                            activeCategory === cat.name 
                              ? 'text-base font-medium bg-base/5 px-3 -mx-3 rounded' 
                              : 'text-muted-foreground hover:text-base'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Our Insights */}
                <div>
                  <button
                    onClick={() => handleSectionClick('insights')}
                    className={`w-full text-left py-4 text-2xl font-semibold transition-colors ${
                      activeSection === 'insights' 
                        ? 'text-base' 
                        : 'text-charcoal hover:text-base'
                    }`}
                  >
                    {menuStructure.insights.title}
                  </button>
                  
                  {/* Subcategories */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeSection === 'insights' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 pb-4 space-y-1">
                      {menuStructure.insights.categories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => handleCategoryHover(cat.name)}
                          onMouseEnter={() => handleCategoryHover(cat.name)}
                          className={`block w-full text-left py-2 text-base transition-colors ${
                            activeCategory === cat.name 
                              ? 'text-base font-medium bg-base/5 px-3 -mx-3 rounded' 
                              : 'text-muted-foreground hover:text-base'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Our Company */}
                <div>
                  <button
                    onClick={() => handleSectionClick('company')}
                    className={`w-full text-left py-4 text-2xl font-semibold transition-colors ${
                      activeSection === 'company' 
                        ? 'text-base' 
                        : 'text-charcoal hover:text-base'
                    }`}
                  >
                    {menuStructure.company.title}
                  </button>
                  
                  {/* Subcategories */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeSection === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 pb-4 space-y-1">
                      {menuStructure.company.categories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => handleCategoryHover(cat.name)}
                          onMouseEnter={() => handleCategoryHover(cat.name)}
                          className={`block w-full text-left py-2 text-base transition-colors ${
                            activeCategory === cat.name 
                              ? 'text-base font-medium bg-base/5 px-3 -mx-3 rounded' 
                              : 'text-muted-foreground hover:text-base'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Links */}
                <div className="pt-6 border-t border-border mt-6">
                  <Link
                    href="/insights"
                    className="block py-3 text-lg text-muted-foreground hover:text-base transition-colors"
                    onClick={() => handleNavigation("/insights")}
                  >
                    All Insights
                  </Link>
                  <Link
                    href="/cases"
                    className="block py-3 text-lg text-muted-foreground hover:text-base transition-colors"
                    onClick={() => handleNavigation("/cases")}
                  >
                    All Case Studies
                  </Link>
                  <Link
                    href="/careers"
                    className="block py-3 text-lg text-muted-foreground hover:text-base transition-colors"
                    onClick={() => handleNavigation("/careers")}
                  >
                    Careers
                  </Link>
                </div>
              </div>

              {/* Right Content Area - Category Items */}
              <div className="hidden lg:block">
                {currentCategory && (
                  <div className="animate-in fade-in duration-300">
                    {/* Category Header */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-charcoal mb-2">
                        {currentCategory.name}
                      </h2>
                      <p className="text-muted-foreground">
                        {currentCategory.description}
                      </p>
                    </div>

                    {/* Category Items in Columns */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                      {currentCategory.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2.5 text-charcoal hover:text-base transition-colors border-b border-transparent hover:border-secondary/20"
                          onClick={() => handleNavigation(item.href)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* View All Link */}
                    {activeSection === 'services' && activeCategory === 'Industries' && (
                      <div className="mt-8">
                        <Link
                          href="/industries"
                          className="inline-flex items-center text-base font-semibold hover:underline"
                          onClick={() => handleNavigation("/industries")}
                        >
                          View all industries →
                        </Link>
                      </div>
                    )}
                    {activeSection === 'services' && activeCategory === 'Capabilities' && (
                      <div className="mt-8">
                        <Link
                          href="/capabilities"
                          className="inline-flex items-center text-base font-semibold hover:underline"
                          onClick={() => handleNavigation("/capabilities")}
                        >
                          View all capabilities →
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* Default state when no category selected */}
                {!currentCategory && activeSection && (
                  <div className="flex items-center justify-center h-64 text-muted-foreground/70">
                    <p>Select a category to view options</p>
                  </div>
                )}

                {/* Default state when menu first opens */}
                {!activeSection && (
                  <div className="flex flex-col items-start justify-center h-64">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                      How can we assist you today?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Learn more about our core areas of expertise by selecting your topic of interest.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
