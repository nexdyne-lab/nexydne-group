import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";

export default function Cases() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Aerospace & Defense", "Automotive", "Consumer Products", "Education", "Energy & Utilities", "Financial Services", "Healthcare", "Insurance", "Manufacturing", "Private Equity", "Public Sector", "Retail", "Technology, Media & Telecom", "Transportation & Logistics", "Travel & Hospitality", "Urban Development"];

  const caseStudies = [
    { id: "aerospace-digital-engineering", title: "How a global aircraft maker brought new programs to market 40% faster", industry: "Aerospace & Defense", metric: "40%", image: "/images/industries/aero-rocket.jpg", description: "An aerospace and defense supplier was losing years and tens of millions to problems found late in testing. Connecting its engineering work end to end changed the economics of every program." },
    { id: "supply-chain-visibility", title: "98% fleet readiness for a defense prime by getting ahead of demand", industry: "Aerospace & Defense", metric: "98%", image: "/images/industries/retail-warehouse.jpg", description: "A defense sustainment provider was grounding aircraft for want of parts while spare inventory sat in the wrong warehouses. Anticipating demand instead of reacting to it lifted readiness and freed capital at the same time." },
    { id: "logistics-optimization", title: "Halving surprise aircraft groundings for a major airline", industry: "Aerospace & Defense", metric: "50%", image: "/images/industries/ops-monitors-dark.jpg", description: "Every unexpected grounding cost a regional carrier six figures and a plane full of disrupted passengers. Reading the signals its aircraft were already sending let the airline fix problems on its own schedule, not the fault's." },
    { id: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/industries/auto-robotics-team.jpg", description: "A components maker had to convert an existing line to electric-vehicle parts while its old business still had to ship every day. Treating the switch as an engineering problem, not a scramble, changed the economics of the launch." },
    { id: "automotive-connected-vehicle", title: "Turning connected-vehicle data into fewer warranty claims", industry: "Automotive", metric: "30%", image: "/images/industries/tech-datacenter.jpg", description: "A vehicle manufacturer was already collecting data from the vehicles it sold, but doing almost nothing with it. Reading those signals cut its warranty bill and opened a service business it had never had before." },
    { id: "automotive-supply-resilience", title: "De-risking parts supply and recall traceability for a supplier", industry: "Automotive", metric: "80%", image: "/images/industries/mfg-robot-arm.jpg", description: "A supplier kept losing production when a single chip or component ran short, and when a quality issue surfaced it could not tell exactly which parts were affected. Getting ahead of supply and knowing where every part went changed both." },
    { id: "consumer-electronics-demand-optimization", title: "Cutting Excess Stock for a Consumer Electronics Brand", industry: "Consumer Products", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg", description: "Every new product had to be ordered before anyone knew how it would sell — and by the time demand was clear, the model was already halfway to retirement. Learning from similar products changed those odds." },
    { id: "food-beverage-demand-forecasting", title: "Sharper Demand Forecasting for a Food and Beverage Maker", industry: "Consumer Products", metric: "30%", image: "/images/capabilities/cap-food.jpg", description: "The same misread on demand produced two problems at once — perfectly good product thrown away, and shelves empty when customers came looking. A better read on demand eased both." },
    { id: "retail-assortment-optimization", title: "Tailoring Store Assortments Lifts a Retailer's Sales", industry: "Consumer Products", metric: "12%", image: "/images/capabilities/cap-retail-apparel.jpg", description: "Every store carried the same products regardless of who shopped there — so items that flew off the shelves in one neighbourhood gathered dust in another. Matching the range to the customer changed that." },
    { id: "university-student-success", title: "Helping 18% more students reach graduation", industry: "Education", metric: "18%", image: "/images/industries/edu-whiteboard.jpg", description: "A regional public university was losing capable students long before they earned a degree — usually before anyone noticed they were struggling. Seeing trouble early, and reaching out in time, changed the odds for thousands of them." },
    { id: "university-online-programs", title: "Tripling a university's online program enrollment", industry: "Education", metric: "3x", image: "/images/industries/women-laptops.jpg", description: "A well-regarded regional university had treated online learning as an afterthought while working adults quietly enrolled elsewhere. Rebuilding its programs around how those learners actually study turned a stalled offering into the university's fastest-growing one." },
    { id: "k12-adaptive-learning", title: "Personalized learning lifts district outcomes 25%", industry: "Education", metric: "25%", image: "/images/industries/team-strategy-board.jpg", description: "A district was designing lessons for the average student — leaving stronger ones unchallenged and struggling ones further behind. Helping teachers meet each child at their own level lifted results and began to close a stubborn gap." },
    { id: "utility-grid-modernization", title: "Cutting outage time nearly in half for a regional utility", industry: "Energy & Utilities", metric: "45%", image: "/images/industries/energy-solar.jpg", description: "A regional electric utility could not see its own network — it learned about outages when the phone rang. Giving operators a live picture of the grid, and letting it heal the simplest faults on its own, changed how quickly the lights came back on." },
    { id: "renewable-energy-forecasting", title: "Sharper generation forecasts for a renewables developer", industry: "Energy & Utilities", metric: "25%", image: "/images/industries/energy-wind.jpg", description: "A wind and solar developer paid a penalty every time its output missed what it had promised the grid — and those misses were costing millions a year. Learning the quirks of each site, and improving with every week of data, closed the gap." },
    { id: "power-generation-predictive-maintenance", title: "Halving unplanned outages at a power generator", industry: "Energy & Utilities", metric: "60%", image: "/images/industries/energy-powerplant.jpg", description: "A mid-sized generator kept losing turbines without warning, each trip costing around $500,000 in lost revenue and emergency repairs. Reading the signals its machines were already sending let it fix problems on a plan instead of in a panic." },
    { id: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg", description: "A regional bank was discovering fraud a full day after the money had already moved. Checking every transaction the instant it happened turned a losing chase into a fair fight." },
    { id: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg", description: "A regional bank held years of insight about its customers, but it sat locked in separate systems that never spoke to one another. Bringing it into one view let the bank serve people at the moments that mattered." },
    { id: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg", description: "A wealth manager built its name on personal service, then made every new client begin with three weeks of paperwork. Rebuilding that first experience freed advisers to do what clients actually pay them for." },
    { id: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes 35%", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg", description: "The system had spent years digitising its records, yet its clinicians still could not see the whole patient. Bringing that information together — and putting it in front of the care team when it mattered — changed the quality of care it could deliver." },
    { id: "healthcare-readmission", title: "Cutting avoidable readmissions by 42% with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg", description: "The network was paying millions in penalties for patients who returned within weeks of going home. Learning to tell — before a patient left — who was genuinely at risk let its care teams put their effort where it would do the most good." },
    { id: "healthcare-revenue-cycle", title: "Recovering $32M a year in revenue already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg", description: "The system was doing the work but not being paid for all of it — claims rejected by insurers, payments dragging out for weeks, staff redoing work that should have been right the first time. Fixing how it billed and collected turned that leak into recovered revenue." },
    { id: "insurance-ai-underwriting", title: "Quoting Commercial Business in a Day, Not a Week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg", description: "A commercial lines carrier was losing broker business because it was slow to quote. Letting software handle the routine risks — and freeing underwriters for the hard ones — turned speed into an advantage." },
    { id: "insurance-claims-automation", title: "Settling Straightforward Claims in Hours, Not Weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg", description: "A property and casualty carrier was settling even simple claims in two weeks while nimbler rivals paid in hours. Handling the routine claims automatically freed adjusters for the cases that needed them." },
    { id: "insurance-digital-distribution", title: "Turning a Call-Center Insurer Into a Digital One", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg", description: "A regional carrier still ran on phone calls and paper forms while newer rivals sold and served entirely online. Rebuilding its digital channels let customers do for themselves what they used to have to call about." },
    { id: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg", description: "A manufacturer's flagship plant had run much the same way for thirty years, and its output had stopped improving. Connecting the line and acting on the signals its own machines were already sending changed what the plant could produce." },
    { id: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/industries/mfg-robot-arm.jpg", description: "A semiconductor manufacturer was scrapping millions of dollars of silicon because flaws only revealed themselves at the very end of a process hundreds of steps long. Reading the warning signs early turned quality from a post-mortem into a forecast." },
    { id: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg", description: "An industrial equipment manufacturer earned lumpy, one-off revenue from the machines it sold and lost sight of them the moment they shipped. Staying connected to that installed base turned it into a steady, higher-margin services business." },
    { id: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg", description: "A private equity fund had bought a solid industrial business that had quietly stopped getting better. A focused program of operational improvement changed the trajectory of the hold — and the return." },
    { id: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg", description: "A private equity fund saw far more healthcare deals than it could properly assess. A faster, more consistent way to run commercial diligence let it move quickly on the right ones — and walk away from the wrong ones with conviction." },
    { id: "pe-distribution-digital", title: "Standing up a carved-out distributor in six months", industry: "Private Equity", metric: "6 Months", image: "/images/industries/deal-handshake.jpg", description: "A private equity fund bought a distribution business that was deeply tangled up in its former parent. Standing it up on its own — new systems included — quickly, cleanly and without disrupting customers was the whole game." },
    { id: "city-digital-services", title: "Making everyday services simple for a county's residents", industry: "Public Sector", metric: "40%", image: "/images/industries/city-digital.jpg", description: "Renewing a permit, applying for assistance or reporting a problem each meant learning a different website and starting over. Bringing those services together behind a single front door changed how residents experienced their government." },
    { id: "smart-city-platform", title: "Getting traffic moving again for a growing city", industry: "Public Sector", metric: "30%", image: "/images/industries/transport-traffic.jpg", description: "The city's traffic signals ran on fixed timers that took no notice of the road in front of them. Letting the signals respond to what was actually happening eased the daily grind of the commute and cleared the way for ambulances." },
    { id: "government-benefits-modernization", title: "Getting benefits to residents weeks sooner at a county agency", industry: "Public Sector", metric: "50%", image: "/images/industries/people-commute.jpg", description: "Deciding a single application meant a caseworker gathering documents and checking records by hand for hours. Letting software handle the routine paperwork freed staff to spend their time on the people who needed them most." },
    { id: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg", description: "A well-known apparel chain was losing a generation of digital-first shoppers to online-only rivals. Bringing its stores and website together into a single experience changed how — and how much — its customers bought." },
    { id: "grocery-demand-forecasting", title: "Cutting a grocer's fresh-food waste by a third", industry: "Retail", metric: "35%", image: "/images/capabilities/cap-food.jpg", description: "A well-run grocery chain was throwing away fresh food in some stores while running out of the same items in others. Learning to predict demand store by store turned a costly guessing game into something close to a science." },
    { id: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg", description: "A familiar points scheme had quietly become an expensive discount habit that changed little about how customers behaved. Rebuilding it around what members actually valued made it a genuine driver of growth." },
    { id: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg", description: "A respected broadcaster had the programming audiences wanted but no way to deliver it directly. Building a streaming service of its own turned a shrinking cable audience into a growing digital one." },
    { id: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-conference-data.jpg", description: "Rapid growth had left a software company shipping once a month while nimbler rivals shipped every week. Rebuilding how its teams built and released software gave the company back the speed it had as a start-up." },
    { id: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg", description: "A mobile carrier was losing customers faster than its competitors and only found out they were unhappy after they had already decided to leave. Seeing trouble coming — and acting on it early — turned defection into loyalty." },
    { id: "warehouse-optimization", title: "Lifting warehouse productivity 45% for a regional distributor", industry: "Transportation & Logistics", metric: "45%", image: "/images/industries/retail-warehouse.jpg", description: "A distributor's warehouses were built for pallets, not the single-item online orders now flooding in — and every peak meant hiring workers it could not find. Rethinking how work moved through the buildings changed the economics of fulfillment." },
    { id: "freight-optimization", title: "Cutting freight costs 18% for a consumer-goods shipper", industry: "Transportation & Logistics", metric: "18%", image: "/images/industries/transport-traffic.jpg", description: "A manufacturer's freight bill was rising faster than its sales while on-time delivery slipped — and every routing decision was still made by hand. Optimizing how shipments moved across the network took real cost out and put service back." },
    { id: "last-mile-optimization", title: "Cutting last-mile delivery costs 30% for a regional carrier", industry: "Transportation & Logistics", metric: "30%", image: "/images/industries/transport-bridge.jpg", description: "A carrier was spending more to deliver each parcel than the delivery earned, with routes fixed the night before and no way to adapt. Letting the routes adjust as the day unfolded turned a money-losing operation into a profitable one." },
    { id: "hotel-revenue-transformation", title: "Lifting hotel revenue per room by 18%", industry: "Travel & Hospitality", metric: "18%", image: "/images/industries/travel-city-twilight.jpg", description: "A hotel group was pricing its rooms by hand and leaving money on the table almost every night. Letting prices respond to real demand, property by property, changed the economics of the whole portfolio." },
    { id: "airline-loyalty-redesign", title: "Reviving a regional airline's loyalty program", industry: "Travel & Hospitality", metric: "40%", image: "/images/industries/transport-bridge.jpg", description: "A regional airline had millions of loyalty members but only a fraction who still cared. Making the rewards fit the traveler — not the other way round — turned a dormant program into a reason to keep flying." },
    { id: "hotel-guest-experience", title: "Restoring personal service across a hotel group", industry: "Travel & Hospitality", metric: "+25pts", image: "/images/industries/city-night.jpg", description: "An upscale hotel group had built its name on knowing its guests — and was quietly losing that as it grew. Giving every property one clear view of each guest brought the personal touch back at scale." },
    { id: "urban-master-planning", title: "Phasing a mixed-use district for stronger returns", industry: "Urban Development", metric: "18%", image: "/images/industries/skyscraper.jpg", description: "A mid-sized developer had won the rights to a large mixed-use district but no clear plan for the order in which to build it. Treating the district as a sequence of phases — each one helping to fund the next — changed the economics of the whole project." },
    { id: "urban-smart-buildings", title: "Cutting building operating costs with connected data", industry: "Urban Development", metric: "22%", image: "/images/industries/arch-glass-sphere.jpg", description: "A property owner was running its portfolio on complaints and callouts, spending more than it needed to keep buildings comfortable. Putting the data its buildings already produced to work lowered costs and made tenants want to stay." },
    { id: "urban-capital-projects", title: "Delivering capital projects on time and on budget", industry: "Urban Development", metric: "95%", image: "/images/industries/city-digital.jpg", description: "A developer running a dozen construction projects at once kept finding out about delays and cost overruns only after they had already hit. Seeing trouble coming — weeks earlier — changed how every project finished." },
  ];

  const filteredCases = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Case Studies | NexDyne Technologies" 
        description="Explore how NexDyne helps organizations achieve enduring change through technology-led transformation."
        canonical="/cases"
      />
      <Navigation />
      
      {/* Hero Section - Neutral-first */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="pt-8"><Breadcrumbs /></div>
          <div className="flex flex-col justify-center min-h-[46vh] py-20 lg:py-24">
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6"><span className="block h-[3px] w-9 bg-primary" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">CASE STUDIES</span></div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">Case Studies</h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">Our clients are achieving enduring change in their capabilities and performance. Leading with technology, we partner with them to eliminate manual work, accelerate execution, and build capabilities across their entire organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-5xl">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`pb-3 font-medium transition border-b-2 ${
                    selectedIndustry === industry
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-charcoal hover:border-border"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {filteredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/cases/${study.id}`}>
                  <div className="group cursor-pointer h-full">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{study.industry}</span>
                      <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {study.description}
                      </p>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                        Read case study <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-amber">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              NexDyne Insights
            </span>
            <h2 className="nx-h2 text-white">Latest thinking</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
            {[
              {
                title: "How AI and automation are reshaping business operations",
                date: "December 1, 2024",
                readTime: "6 min read",
                description: "Exploring the rapid adoption of intelligent automation across mid-sized US businesses and what it means for competitive advantage.",
                image: "/blog-ai-automation.3be6f720.jpg",
                link: "/insights/ai-automation-reshaping-business"
              },
              {
                title: "5 signs your business is ready for digital transformation",
                date: "November 18, 2024",
                readTime: "5 min read",
                description: "Key indicators that signal it's time to automate manual processes, from growing operational costs to scaling challenges and compliance pressures.",
                image: "/blog-digital-transformation.a3f57989.jpg",
                link: "/insights/digital-transformation-readiness"
              },
              {
                title: "Measuring ROI: What to expect in your first year of automation",
                date: "November 5, 2024",
                readTime: "7 min read",
                description: "Real metrics from our clients showing typical time savings, cost reductions, and accuracy improvements in the first 12 months of deployment.",
                image: "/blog-roi-measurement.1514df48.jpg",
                link: "/insights/measuring-automation-roi"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={post.link} className="group block h-full">
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-3">{post.date} · {post.readTime}</p>
                  <p className="text-white/60 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-amber text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/insights">
              <span className="inline-flex items-center text-base font-medium text-white hover:text-primary transition-colors cursor-pointer">
                See all stories
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
