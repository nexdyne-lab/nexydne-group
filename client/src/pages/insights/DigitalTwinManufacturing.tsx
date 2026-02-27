import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DigitalTwinManufacturing() {
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
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Digital Twins
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              January 28, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Digital Twins in Manufacturing: From Hype to ROI
          </h1>
          
          <p className="text-xl text-muted-foreground/50">
            How leading manufacturers are using digital twins to simulate production lines, predict failures, and optimize throughput before a single machine is turned on.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The concept of a "Digital Twin"—a virtual replica of a physical asset, process, or system—has been around for decades. But for years, it was the domain of aerospace giants and billion-dollar R&D labs. Today, thanks to cheaper sensors, cloud computing, and advanced AI, digital twins are democratizing manufacturing efficiency.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              For manufacturers, the promise is simple but transformative: What if you could test a new production line configuration, predict a machine failure, or train a new operator without risking downtime, safety, or capital?
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Moving Beyond Visualization
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Many organizations mistake a 3D CAD model for a digital twin. A true digital twin is dynamic. It breathes data. It is connected to the physical world via IoT sensors and updates in real-time (or near real-time) to reflect the current state of its physical counterpart.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The real value unlocks when you move from <strong>descriptive</strong> twins (visualizing what is happening) to <strong>predictive</strong> and <strong>prescriptive</strong> twins (simulating what <em>will</em> happen and determining what <em>should</em> happen).
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Case Study: Automotive Component Manufacturer
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We worked with a Tier 1 automotive supplier struggling with a new assembly line for EV components. The line was plagued by micro-stoppages and quality rejection rates that were double the target.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">The Implementation</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Data Integration:</strong> We connected PLCs, vision systems, and environmental sensors to a unified data platform.</li>
                <li><strong>Virtual Replica:</strong> Built a physics-based simulation of the critical robotic assembly stations.</li>
                <li><strong>Scenario Testing:</strong> Ran thousands of virtual production cycles to identify the root cause of the bottlenecks.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Discovery</h3>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The digital twin revealed that a specific robotic arm's path planning was suboptimal only when the ambient temperature in the factory rose above 28°C, causing thermal expansion in a joint that slightly misaligned the gripper. This subtle interaction was invisible to standard monitoring but obvious in the physics simulation.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Impact</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg text-charcoal/80 mb-8">
              <li><strong>15% Increase in OEE:</strong> By optimizing the robot's path and adding cooling, throughput stabilized.</li>
              <li><strong>$2M Annual Savings:</strong> Reduced scrap rates and avoided unscheduled downtime.</li>
              <li><strong>Virtual Commissioning:</strong> The company now tests all line changes in the twin before deploying to the floor, reducing ramp-up time for new products by 40%.</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Three Steps to Start
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              You don't need to model your entire factory at once. The most successful digital twin initiatives start small and scale fast.
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-lg text-charcoal/80 mb-8">
              <li><strong>Identify the Critical Asset:</strong> Pick the one machine or process that is your biggest bottleneck or cost center.</li>
              <li><strong>Connect the Data:</strong> Ensure you can reliably extract operational data from that asset. A twin without data is just a drawing.</li>
              <li><strong>Define the Use Case:</strong> Are you trying to predict maintenance? Optimize energy? Improve quality? Focus on one outcome first.</li>
            </ol>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Digital twins are no longer science fiction. They are a practical, proven tool for manufacturers who want to win on efficiency and agility. The question isn't if you'll use them, but how soon.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Optimize your production</h3>
            <p className="text-muted-foreground/50 mb-6">
              Ready to build your first digital twin? NexDyne's industrial IoT experts can help you connect your assets and unlock hidden value.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Talk to an Expert
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
                <h4 className="font-bold text-charcoal text-lg">NEXDYNE TECHNOLOGIES</h4>
                <p className="text-muted-foreground mt-1">
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
            <h3 className="text-2xl font-bold text-charcoal mb-8">Related Insights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/insights/iot-resilient-supply-chain">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                      alt="IoT Supply Chain" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    IoT and the Resilient Supply Chain
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    How real-time tracking and environmental monitoring are preventing losses and ensuring on-time delivery in volatile markets.
                  </p>
                </div>
              </Link>
              <Link href="/insights/process-mining-guide">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                      alt="Process Mining" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                    The Executive's Guide to Process Mining
                  </h4>
                  <p className="text-muted-foreground text-sm mt-2">
                    Stop guessing where your inefficiencies are. Process mining uses your own data to visualize exactly how work gets done.
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
