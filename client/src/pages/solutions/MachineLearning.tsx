import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function MachineLearning() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/">
              <a className="hover:text-blue-600">Services</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data Solutions</a>
            </Link>
            <span>/</span>
            <span className="text-slate-900">Machine Learning</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-3 eb-garamond">
            Machine Learning & Predictive Analytics
          </h1>
          <p className="text-xl max-w-3xl">
            Deploy models that forecast demand, predict churn, optimize pricing, and automate decisions. Production ML pipelines that improve continuously as data accumulates.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-8">
              <img
                src="/ml-hero.b363ce32.jpg"
                alt="Machine Learning Team"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-4">Want to know more?</h3>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Ask Martijn Voorveld
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12">The benefits</h2>
              
              <div className="space-y-12">
                {/* Benefit 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Predictions that drive action
                    </h3>
                    <p className="text-lg text-slate-700">
                      Models that forecast business outcomes with quantified confidence intervals. Not academic experiments—production systems that trigger automated workflows, alert stakeholders, and feed decision engines. We deploy predictions where they matter: inventory systems, pricing engines, CRM platforms, and operational dashboards.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Models that improve over time
                    </h3>
                    <p className="text-lg text-slate-700">
                      Continuous learning pipelines that retrain on fresh data automatically. We build monitoring systems that detect model drift, track prediction accuracy, and trigger retraining workflows when performance degrades. Your models get smarter as your business generates more data—no manual intervention required.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Fast deployment to production
                    </h3>
                    <p className="text-lg text-slate-700">
                      From proof of concept to production in weeks, not quarters. We use MLOps best practices—containerized models, API endpoints, version control, A/B testing infrastructure—so you can deploy models safely and roll back instantly if needed. Start small, prove value, scale fast.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Explainable and auditable
                    </h3>
                    <p className="text-lg text-slate-700">
                      Models you can trust and explain to stakeholders. We build interpretability into every deployment—feature importance rankings, SHAP values, prediction explanations, and audit trails. Regulators, executives, and end users all get answers when they ask "why did the model decide that?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Experiment to Production */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            From experiment to production
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Most machine learning projects die in notebooks. Data scientists build promising prototypes that never see production because there's no path from Jupyter to real systems. We specialize in closing that gap.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Our approach starts with business outcomes, not algorithms. What decision are you trying to automate? What metric moves the needle? We work backward from there—identifying the right prediction target, sourcing training data, selecting appropriate algorithms, and building deployment infrastructure that integrates with existing systems.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              We favor pragmatic techniques over cutting-edge research. Gradient boosting often beats deep learning for tabular data. Simple baselines outperform complex ensembles when training data is limited. We benchmark multiple approaches, measure what matters (business impact, not academic metrics), and deploy the simplest model that hits your performance targets.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border-l-4 border-purple-600">
            <blockquote className="text-xl text-purple-900 italic mb-4">
              "The best model is the one that ships. We optimize for production readiness, not leaderboard rankings."
            </blockquote>
            <p className="text-slate-700 font-semibold">
              Martijn Voorveld, Commercial Lead - NEXDYNE TECHNOLOGIES
            </p>
          </div>
        </div>
      </section>

      {/* MLOps and Continuous Improvement */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            MLOps and continuous improvement
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Deploying a model is just the beginning. Real value comes from continuous improvement—monitoring performance, detecting drift, retraining on fresh data, and iterating based on business feedback.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              We build MLOps infrastructure that treats models like software: version control for datasets and model artifacts, automated testing pipelines, CI/CD for model deployment, monitoring dashboards that track prediction accuracy and data quality, and automated retraining workflows triggered by performance degradation.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Our clients don't need dedicated ML engineers to keep models running. We hand off systems that your existing data team can maintain—clear documentation, runbooks for common issues, alerting that surfaces problems before they impact business metrics, and training to ensure your team understands how everything works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder-avatar.svg"
                  alt="Martijn Voorveld"
                  className="w-32 h-32 rounded-full bg-slate-200"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Want to know more?
                </h3>
                <p className="text-lg text-slate-700 mb-2">
                  Martijn Voorveld
                </p>
                <p className="text-slate-600 mb-6">
                  Senior Sales Manager
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in touch
                  </Button>
                  <Button variant="outline" className="border-slate-300">
                    Schedule a meeting
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">Partners</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">ML Platforms & Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Databricks */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Databricks</h3>
              <p className="text-slate-700">
                Unified analytics platform for data engineering, ML training, and model deployment at scale.
              </p>
            </div>

            {/* MLflow */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">MLflow</h3>
              <p className="text-slate-700">
                Open-source platform for managing ML lifecycle including experimentation, reproducibility, and deployment.
              </p>
            </div>

            {/* Weights & Biases */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Weights & Biases</h3>
              <p className="text-slate-700">
                Developer tools for experiment tracking, model optimization, and dataset versioning.
              </p>
            </div>

            {/* Kubeflow */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Kubeflow</h3>
              <p className="text-slate-700">
                Kubernetes-native platform for deploying, monitoring, and managing ML workflows in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXDYNE Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/office-building.jpg"
                alt="NEXDYNE Office"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why NEXDYNE
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Whether you're looking for a strategic partner, a boost for your digital transformation, or the ultimate customer experience for your customers, you've come to the right place. With our next-generation digital solutions, you'll always be one step ahead of the competition.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cases we love talking about</h2>
            <p className="text-xl text-slate-700">
              Heard of a business that transforms unique business challenges into exceptional outcomes? That'd be us. Check out these inspiring cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <Link href="/cases/retail-demand-forecasting">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/retail-demand-forecasting.80929293.jpg" alt="Retail Demand Forecasting" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Retailer Reduces Stockouts 35% with Demand Forecasting
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Multi-location forecasting model predicts SKU-level demand 8 weeks ahead, optimizing inventory across 200 stores and cutting overstock 28%.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Case 2 */}
            <Link href="/cases/telecom-churn-prediction">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/telecom-churn-prediction.8d1a6957.jpg" alt="Telecom Churn Prediction" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Telecom Provider Cuts Churn 22% with Predictive Model
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Real-time churn scoring identifies at-risk customers 60 days before cancellation, enabling targeted retention campaigns that save $12M annually.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Case 3 */}
            <Link href="/cases/financial-fraud-detection">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <img src="/financial-fraud-detection.a2088bd5.jpg" alt="Financial Fraud Detection" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Bank Detects Fraud 40% Faster with ML Anomaly Detection
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Graph neural network identifies suspicious transaction patterns in real-time, reducing false positives 65% while catching fraud earlier.
                  </p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Related Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Strategy */}
            <Link href="/solutions/data-strategy">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Strategy</h3>
                <p className="text-slate-700">Define what data matters and how to monetize it.</p>
              </div>
            </Link>

            {/* Data Platform */}
            <Link href="/solutions/data-platform">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data Platform</h3>
                <p className="text-slate-700">Modern data warehouses and lakes built on cloud infrastructure.</p>
              </div>
            </Link>

            {/* Data Visualization */}
            <Link href="/solutions/data-visualization">
              <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Data visualization</h3>
                <p className="text-slate-700">Real-time dashboards and analytics interfaces that surface insights.</p>
              </div>
            </Link>

            {/* Current page */}
            <div className="p-6 rounded-lg bg-blue-100 border-2 border-blue-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Machine Learning</h3>
              <p className="text-slate-700">Deploy predictive models that improve over time.</p>
            </div>

            {/* Data Governance */}
            <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 opacity-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data governance</h3>
              <p className="text-slate-700">Access controls, compliance frameworks, and data quality monitoring.</p>
            </div>

            {/* Data Engineering */}
            <div className="p-6 rounded-lg border-2 border-dashed border-slate-300 opacity-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data Engineering</h3>
              <p className="text-slate-700">Augment your team with certified data engineers and architects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to deploy production ML systems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build predictive models that drive measurable business outcomes and improve continuously as your data grows.
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
          <RelatedContent items={dataRelatedItems} />
      <Footer />

    </div>
  );
}
