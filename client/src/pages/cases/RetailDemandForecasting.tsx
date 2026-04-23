import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetailDemandForecasting() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-primary">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/machine-learning">
              <a className="hover:text-primary">Machine Learning</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Retailer Reduces Stockouts 35% with Demand Forecasting</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Retailer Reduces Stockouts 35% with Demand Forecasting
            </h1>
            <p className="text-xl mb-8">
              Multi-location forecasting model predicts SKU-level demand 8 weeks ahead, optimizing inventory across 200 stores and cutting overstock 28%.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">35%</div>
                <div className="text-purple-100">Stockout Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">28%</div>
                <div className="text-purple-100">Overstock Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$8.5M</div>
                <div className="text-purple-100">Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200</div>
                <div className="text-purple-100">Stores Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-4">
              A mid-sized specialty retailer with 200 locations faced chronic inventory problems. Popular items sold out before replenishment arrived, while slow-moving SKUs accumulated in back rooms. Store managers ordered based on gut feel, corporate buyers relied on last year's sales, and nobody could predict seasonal spikes accurately.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The financial impact was severe: $12M in lost sales from stockouts, $6M in markdowns to clear excess inventory, and deteriorating customer satisfaction as shoppers learned not to rely on product availability. Their existing inventory system used simple moving averages that couldn't handle regional demand variation, promotional effects, or weather-driven purchasing patterns.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              They needed demand forecasting that worked at SKU-store-week granularity, incorporated external signals (weather, local events, competitor promotions), and integrated with their existing replenishment systems. The solution had to be explainable—buyers needed to understand why the model recommended specific order quantities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              NEXDYNE built a gradient boosting model (XGBoost) that forecasts demand 8 weeks ahead for every SKU-store combination. The model ingests 3 years of transaction history, promotional calendars, local weather forecasts, regional demographics, and competitor pricing data scraped from public websites.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We engineered features that capture seasonal patterns (back-to-school, holidays), promotional lift (historical response to discounts), cannibalization effects (substitute products), and local preferences (regional taste differences). The model retrains weekly on fresh data, automatically detecting trend shifts and adjusting forecasts.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Forecasts feed directly into their replenishment system via API, generating purchase orders that optimize for target service levels while minimizing carrying costs. Store managers see predictions in their existing dashboard with confidence intervals and explanations for unusual forecasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">XGBoost regression for SKU-store-week forecasts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Feature engineering: seasonality, promotions, weather</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Weekly automated retraining on Databricks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">SHAP values for forecast explainability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">REST API to replenishment system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Tableau dashboard for buyers and managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Email alerts for anomalous predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">MLflow for model versioning and monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              Within 6 months of deployment, stockouts dropped 35% and overstock situations fell 28%. The retailer saved $8.5M annually through reduced markdowns, lower carrying costs, and recaptured sales. Forecast accuracy (MAPE) improved from 42% with their old system to 18% with the ML model.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Store managers trust the system enough to reduce safety stock levels, freeing up working capital. Buyers spend less time firefighting stockouts and more time on strategic merchandising. Customer satisfaction scores improved 12 points as product availability became reliable.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The model continues to improve as it learns from new data. Seasonal forecasts get more accurate each year, promotional lift predictions adapt to changing consumer behavior, and the system automatically flags when external factors (competitor closures, new housing developments) shift local demand patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">18%</div>
              <div className="text-charcoal/80">Mean Absolute Percentage Error (down from 42%)</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">12 pts</div>
              <div className="text-charcoal/80">Customer Satisfaction Improvement</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">6 months</div>
              <div className="text-charcoal/80">Time to Full ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to optimize your inventory with ML?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build demand forecasting models that reduce stockouts, cut carrying costs, and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-slate-100">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}
