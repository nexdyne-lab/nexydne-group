import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function IoTResilientSupplyChain() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              IoT & Supply Chain
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              January 15, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            IoT and the Resilient Supply Chain: Visibility is Victory
          </h1>
          
          <p className="text-xl text-slate-300">
            In an era of global disruption, knowing where your goods are isn't enough. You need to know their condition, their context, and their risk profile in real-time.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Supply chains used to be judged on cost and speed. Today, the primary metric is resilience. From pandemics to geopolitical tensions to climate events, the disruptions are constant. The companies that thrive aren't the ones with the leanest inventory; they're the ones with the best eyes.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Internet of Things (IoT) technology has graduated from "nice-to-have" pilot projects to the backbone of modern logistics. It provides the granular, real-time data layer that allows supply chain managers to move from reactive firefighting to proactive orchestration.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Three Layers of IoT Visibility
            </h2>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Location & Status</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Basic GPS tracking is table stakes. Modern IoT tags (using cellular, LoRaWAN, or satellite) provide continuous updates on location, even in remote areas or deep within a warehouse. But knowing <em>where</em> a container is doesn't help if you don't know <em>what</em> state it's in.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Condition Monitoring</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              For sensitive goods—pharmaceuticals, food, electronics—condition is everything. Sensors now track temperature, humidity, shock, tilt, and light exposure.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>Example:</strong> A cold-chain logistics provider uses IoT sensors to monitor vaccine shipments. If a freezer unit's temperature trends upward (even if still within safe limits), an alert triggers a maintenance check at the next stop, preventing spoilage before it happens.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Contextual Intelligence</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This is where AI meets IoT. By combining sensor data with external data sources (weather, traffic, port congestion), systems can predict delays and recommend alternatives.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Case Study: Global Electronics Distributor
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A major distributor of high-value components was losing millions annually to "shrinkage" and damage during transit. They implemented a comprehensive IoT tracking solution.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Results</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>90% Reduction in Lost Cargo:</strong> Real-time alerts allowed security teams to intervene during theft attempts.</li>
                <li><strong>Damage Accountability:</strong> Shock sensors pinpointed exactly when and where damage occurred, allowing the company to hold specific carriers accountable.</li>
                <li><strong>Inventory Optimization:</strong> With precise arrival times, they reduced safety stock levels by 15%, freeing up significant working capital.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Implementing IoT Without the Headache
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The barrier to entry has never been lower. Battery life for sensors has extended to years, connectivity costs have plummeted, and platforms like NexDyne's can ingest data from any device type into a single dashboard.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Resilience isn't about building higher walls; it's about turning on the lights. IoT gives you the visibility to see the disruption coming and the agility to steer around it.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Secure your supply chain</h3>
            <p className="text-slate-300 mb-6">
              Don't let visibility gaps put your business at risk. NexDyne helps you deploy and manage enterprise-grade IoT solutions for end-to-end supply chain transparency.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Get a Demo
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">NEXDYNE TECHNOLOGIES</h4>
                <p className="text-slate-600 mt-1">
                  Engineering intelligent systems that transform enterprise operations through AI-driven automation and data intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/digital-twin-manufacturing">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                      alt="Digital Twins" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    Digital Twins in Manufacturing: From Hype to ROI
                  </h4>
                  <p className="text-slate-600 text-sm mt-2">
                    How leading manufacturers are using digital twins to simulate production lines and predict failures.
                  </p>
                </div>
              </Link>
              <Link href="/insights/generative-supply-chain">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                      alt="Generative Supply Chain" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    The Generative Supply Chain: Scaling Creative with AI
                  </h4>
                  <p className="text-slate-600 text-sm mt-2">
                    How a global retailer reduced content production costs by 60% while increasing engagement.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
