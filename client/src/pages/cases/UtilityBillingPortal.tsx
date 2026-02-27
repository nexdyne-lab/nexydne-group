import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function UtilityBillingPortal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-subtle border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/intelligent-process-optimization" className="hover:text-blue-600">Intelligent Process Optimization</Link>
            <span>/</span>
            <Link href="/solutions/app-development" className="hover:text-blue-600">App Development</Link>
            <span>/</span>
            <Link href="/solutions/customer-portal" className="hover:text-blue-600">Customer Portal</Link>
            <span>/</span>
            <span className="text-charcoal">Utility Company Modernizes Billing Portal for 500K Households</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container max-w-4xl">
          <Link href="/solutions/customer-portal" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Customer Portal
          </Link>
          <h1 className="text-5xl font-bold mb-3">Utility Company Modernizes Billing Portal for 500K Households</h1>
          <p className="text-2xl text-charcoal/80 leading-relaxed">
            Liferay DXP portal delivers 24/7 account access, reducing call center volume by 42% and improving payment timeliness by 28%.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed mb-4">
              A municipal electric and water utility serving 500,000 households across three counties struggled with an outdated billing portal that frustrated customers and burdened staff. The legacy system—built in 2009—required customers to create separate logins for electric and water accounts, offered no mobile optimization, and provided only basic bill viewing functionality.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Customer service representatives fielded over 45,000 monthly calls, with 68% related to routine inquiries: bill amounts, payment due dates, usage history, and service start/stop requests. The utility's call center operated from 8 AM to 6 PM weekdays, leaving customers without support during evenings and weekends when many needed assistance.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Late payment rates hovered at 18%, partly due to customers missing due dates when they couldn't easily access account information. The utility wanted to improve customer convenience, reduce operational costs, and encourage timely payments through a modern self-service portal that worked seamlessly across devices.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed mb-4">
              NEXDYNE designed and implemented a unified customer portal on Liferay DXP that consolidated electric and water account management into a single, mobile-responsive interface. The portal integrated with the utility's existing billing, metering, and customer information systems to provide real-time data access.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Customers gained the ability to view current and historical bills, track daily usage patterns through interactive charts, set up autopay and payment plans, report outages and service issues, schedule meter readings, and receive customized energy-saving tips based on their consumption patterns. A smart notification system sent email and SMS alerts for upcoming due dates, unusual usage spikes, and service updates.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              NEXDYNE's team conducted usability testing with a diverse group of customers—including seniors, non-native English speakers, and customers with disabilities—to ensure the portal met accessibility standards and felt intuitive for all user groups. The design prioritized clarity and simplicity, with large touch targets for mobile users and plain-language explanations of billing terms.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              The portal launched with a comprehensive customer education campaign, including video tutorials, email onboarding sequences, and in-person demonstrations at community centers. NEXDYNE provided ongoing support during the first six months to monitor adoption metrics and refine the user experience based on real-world usage patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
              <div className="text-charcoal/80">Reduction in call center volume</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">28%</div>
              <div className="text-charcoal/80">Improvement in payment timeliness</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">76%</div>
              <div className="text-charcoal/80">Customer portal adoption</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Within nine months of launch, the portal reduced call center volume by 42%, allowing the utility to reallocate staff to proactive customer outreach and energy efficiency programs. Customer satisfaction scores increased from 72% to 88%, with portal users expressing particular appreciation for 24/7 access and mobile convenience.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Late payment rates dropped from 18% to 13%, driven by automated payment reminders and the ease of setting up autopay through the portal. The utility saved approximately $2.1 million annually in reduced call center costs and improved cash flow from timelier payments. Autopay enrollment increased from 32% to 58% of all accounts.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Portal adoption reached 76% within the first year, with 64% of active users accessing the portal via mobile devices. The utility's outage reporting feature proved particularly valuable during severe weather events, allowing customers to report issues instantly and receive real-time restoration updates. Customer effort scores improved by 38%, reflecting the portal's success in making routine tasks effortless.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize your customer experience?</h2>
          <p className="text-xl text-charcoal/80 mb-8">
            Let's build a self-service portal that drives adoption and operational efficiency.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-charcoal text-white rounded-full hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
            <Link href="/solutions/customer-portal" className="px-8 py-3 border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors inline-block">
              Learn more about Customer Portals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
