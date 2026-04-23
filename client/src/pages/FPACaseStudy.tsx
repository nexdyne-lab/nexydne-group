import { Link } from "wouter";
import { ArrowLeft, TrendingUp, Target, LineChart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function FPACaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'FP&A Scenario Planning' }
      ]} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container relative z-10">
          <Link href="/services/fpa">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-5 sm:mb-6 md:mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to FP&A
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium mb-6">
              Case Study · Scenario Planning
            </div>
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight eb-garamond">
              How Scenario Planning Helped a SaaS Company Navigate Market Uncertainty
            </h1>
            <p className="text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              A growth-stage B2B SaaS company transformed their financial planning from reactive budgeting to proactive scenario modeling, enabling confident decision-making during unprecedented market volatility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-5 md:p-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-5 md:p-6">
                <div className="text-3xl font-bold text-blue-300 mb-2">35%</div>
                <div className="text-sm text-blue-100">Forecast Accuracy Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-5 md:p-6">
                <div className="text-3xl font-bold text-blue-300 mb-2">10 Days</div>
                <div className="text-sm text-blue-100">Faster Strategic Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-5 md:p-6">
                <div className="text-3xl font-bold text-blue-300 mb-2">$2.4M</div>
                <div className="text-sm text-blue-100">Cost Avoidance in Year 1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-charcoal/80">Industry</h3>
                <p className="text-muted-foreground mb-6">B2B SaaS · Marketing Automation</p>
                
                <h3 className="text-lg font-semibold mb-3 text-charcoal/80">Company Size</h3>
                <p className="text-muted-foreground mb-6">85-110 employees, $12M ARR</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-charcoal/80">Growth Stage</h3>
                <p className="text-muted-foreground mb-6">Series B, scaling from product-market fit to market leadership</p>
                
                <h3 className="text-lg font-semibold mb-3 text-charcoal/80">Engagement Duration</h3>
                <p className="text-muted-foreground">9 months (ongoing partnership)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Target className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The company had built a successful product and achieved strong early traction, but their financial planning infrastructure hadn't evolved with their growth. They were operating with static annual budgets built in Excel, disconnected from real-time business drivers.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <Card className="p-4 sm:p-5 md:p-6 border-l-4 border-l-red-500">
                <h3 className="font-semibold text-lg mb-3">Reactive Planning Cycle</h3>
                <p className="text-muted-foreground">
                  Annual budgets were obsolete within weeks of approval. Market conditions shifted rapidly, but the company lacked the analytical infrastructure to model alternative scenarios or stress-test assumptions. Strategic decisions were made based on outdated forecasts.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-l-4 border-l-red-500">
                <h3 className="font-semibold text-lg mb-3">Disconnected Data Sources</h3>
                <p className="text-muted-foreground">
                  Revenue forecasts lived in the CRM, expense budgets in Excel, and actuals in the accounting system. Consolidating data for variance analysis took 5-7 days each month, leaving little time for strategic analysis before the next close cycle began.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-l-4 border-l-red-500">
                <h3 className="font-semibold text-lg mb-3">Limited Visibility into Future States</h3>
                <p className="text-muted-foreground">
                  The leadership team struggled to answer critical questions: What happens if churn increases by 2%? How does a 20% sales hiring acceleration impact cash runway? What's our break-even timeline under different growth scenarios? Without scenario modeling capabilities, every strategic discussion became a guessing game.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-l-4 border-l-red-500">
                <h3 className="font-semibold text-lg mb-3">Board Communication Gaps</h3>
                <p className="text-muted-foreground">
                  Board meetings focused on explaining variances from outdated budgets rather than discussing strategic options. The CFO spent more time defending historical performance than modeling future opportunities, eroding board confidence in the financial planning process.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NexDyne implemented a comprehensive scenario planning framework that transformed the company's financial planning from static annual budgets to dynamic, driver-based forecasting with real-time scenario modeling capabilities.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Phase 1: Driver-Based Revenue Model</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We began by building a predictive revenue model that integrated CRM pipeline data with historical conversion metrics. Instead of forecasting revenue as a single top-line number, we decomposed it into underlying drivers: lead volume, conversion rates by stage, average contract value, and expansion/churn dynamics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This driver-based approach enabled the team to model revenue under different assumptions (optimistic pipeline conversion, conservative churn rates, accelerated expansion) and understand which levers had the greatest impact on outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Phase 2: Integrated Data Infrastructure</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We eliminated manual data consolidation by building automated pipelines that connected the CRM, accounting system, and HR platform into a unified analytical layer. This integration reduced close-to-forecast time from 7 days to less than 2 days, freeing the finance team to focus on analysis rather than data wrangling.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Validation rules and automated reconciliation ensured data accuracy, while real-time dashboards gave leadership instant visibility into performance against plan.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Phase 3: Scenario Planning Framework</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We designed a three-scenario planning framework (Base Case, Upside, Downside) that modeled different market conditions and strategic choices. Each scenario incorporated assumptions about key drivers: sales productivity, customer acquisition costs, churn rates, pricing changes, and hiring velocity.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The framework enabled the leadership team to stress-test strategic decisions before committing resources. Questions like "Should we accelerate sales hiring?" or "Can we afford to expand into a new market?" could be answered with data-driven scenario analysis rather than intuition.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We also built sensitivity analysis tools that showed which assumptions had the greatest impact on cash runway and profitability, helping the team focus on the metrics that mattered most.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Phase 4: Rolling Forecast Process</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We replaced the annual budget with a rolling 18-month forecast that updated quarterly. This shift transformed budgeting from a once-a-year exercise into a continuous strategic dialogue, ensuring that forecasts remained relevant as market conditions evolved.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The rolling forecast process included formal variance analysis and assumption reviews, creating accountability for forecast accuracy while maintaining flexibility to adapt to changing circumstances.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Phase 5: Executive Reporting Transformation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We redesigned the board reporting package to shift from variance explanations to strategic scenario discussions. Instead of spending 30 minutes explaining why actuals differed from an outdated budget, board meetings now focused on evaluating strategic options under different scenarios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The new reporting format included scenario comparison dashboards, sensitivity analysis, and forward-looking metrics that enabled more productive strategic conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Results</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The scenario planning framework delivered measurable improvements in forecast accuracy, decision speed, and strategic confidence within the first year of implementation.
                </p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-4 sm:p-5 md:p-6">
              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">35% Forecast Accuracy Improvement</h3>
                    <p className="text-muted-foreground">
                      Driver-based revenue modeling reduced forecast error from ±18% to ±12%, enabling more confident resource allocation and strategic planning.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">10-Day Faster Strategic Response</h3>
                    <p className="text-muted-foreground">
                      Real-time scenario modeling enabled the leadership team to evaluate strategic options in days rather than weeks, accelerating decision-making during critical market shifts.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">$2.4M Cost Avoidance</h3>
                    <p className="text-muted-foreground">
                      Scenario analysis revealed that a planned sales hiring acceleration would have extended cash runway by only 2 months while increasing burn by $200K/month. The company deferred hiring and focused on sales productivity instead, avoiding $2.4M in unnecessary costs.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">75% Reduction in Close-to-Forecast Time</h3>
                    <p className="text-muted-foreground">
                      Automated data integration reduced monthly forecast preparation from 7 days to less than 2 days, freeing the finance team to focus on strategic analysis.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Improved Board Confidence</h3>
                    <p className="text-muted-foreground">
                      Board meetings shifted from variance explanations to strategic scenario discussions. Post-meeting surveys showed a 40% increase in board confidence in the financial planning process.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 border-t-4 border-t-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Successful Series C Fundraise</h3>
                    <p className="text-muted-foreground">
                      The scenario planning framework provided the analytical foundation for the company's Series C pitch, demonstrating financial sophistication that impressed investors and contributed to a successful $25M raise.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-5 sm:mb-6 md:mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <Card className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-lg mb-3">Driver-Based Models Beat Top-Line Forecasts</h3>
                <p className="text-muted-foreground">
                  Decomposing revenue into underlying drivers (lead volume, conversion rates, pricing) enabled more accurate forecasting and revealed which levers had the greatest impact on outcomes.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-lg mb-3">Scenario Planning Enables Proactive Strategy</h3>
                <p className="text-muted-foreground">
                  Modeling multiple futures (Base, Upside, Downside) transformed strategic planning from reactive adjustments to proactive option evaluation, accelerating decision-making and reducing risk.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-lg mb-3">Data Integration Unlocks Strategic Time</h3>
                <p className="text-muted-foreground">
                  Eliminating manual data consolidation freed the finance team to focus on analysis rather than data wrangling, increasing the value delivered to leadership and the board.
                </p>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold text-lg mb-3">Rolling Forecasts Keep Plans Relevant</h3>
                <p className="text-muted-foreground">
                  Replacing annual budgets with rolling 18-month forecasts ensured that financial plans remained relevant as market conditions evolved, maintaining strategic agility.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Financial Planning?
            </h2>
            <p className="text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Discover how scenario planning and driver-based forecasting can help your organization navigate uncertainty with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/services/fpa">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-charcoal">
                  Explore FP&A Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
