import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MiddlewarePatterns() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/solutions/martech-stack" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to MarTech & Stack Architecture
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              Engineering
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              May 22, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Middleware Patterns for Scale: Beyond Point-to-Point Integration
          </h1>
          
          <p className="text-xl text-slate-300">
            Why direct API connections fail at scale, and how to implement event-driven architectures that handle millions of transactions.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In the early stages of a startup, connecting System A to System B is easy. You write a script, hit an API endpoint, and you're done. But as you add System C, D, and E, the number of connections grows quadratically. This is the "Point-to-Point Integration Hell."
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When one system changes its API, five others break. When traffic spikes, the weakest link crashes the whole chain. To scale, you need robust middleware patterns.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Event Bus Pattern
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Instead of systems talking directly to each other, they publish events to a central bus (like Kafka or RabbitMQ). Other systems subscribe to the events they care about.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-slate-700 mb-8">
              <li><strong>Decoupling:</strong> The sender doesn't need to know who the receiver is.</li>
              <li><strong>Buffering:</strong> If the receiver is down or slow, the bus holds the message until it's ready. No data loss.</li>
              <li><strong>Scalability:</strong> You can add new consumers without touching the producer.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Handling Failure: Dead Letter Queues
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              In a distributed system, failure is inevitable. An API will time out. A database will lock. Without a strategy, these failures result in silent data loss.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>Dead Letter Queue (DLQ)</strong> is a holding area for messages that couldn't be processed after several retries. This allows engineers to investigate the root cause (bad data? bug?) and replay the messages later, ensuring 100% data integrity.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Idempotency: The Safety Net
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              What happens if a network glitch causes a payment request to be sent twice? Without <strong>idempotency</strong>, you charge the customer twice. With it, the system recognizes the unique ID of the request and ignores the duplicate.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg text-slate-900 font-semibold">
                "Reliability isn't about preventing failure. It's about handling failure gracefully."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The API Gateway
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              An API Gateway sits between your clients and your backend services. It handles cross-cutting concerns like authentication, rate limiting, and logging. This simplifies your microservices, letting them focus on business logic rather than security protocols.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Moving from spaghetti code to structured middleware patterns is the difference between a fragile prototype and an enterprise-grade platform.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Architect for resilience</h3>
            <p className="text-slate-300 mb-6">
              Our Engineering team specializes in designing high-throughput, fault-tolerant middleware architectures for mission-critical applications.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
