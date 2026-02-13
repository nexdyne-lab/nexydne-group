import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function HospitalityGuestExperience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/customer-intelligence" className="hover:text-foreground">Data-Driven Customer Intelligence</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/digital-engagement" className="hover:text-foreground">Digital Engagement</Link>
        <span className="mx-2">/</span>
        <span>Hotel Chain Elevates Guest Experience Through Digital Engagement</span>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Hotel Chain Elevates Guest Experience Through Digital Engagement</h1>
          <p className="text-2xl opacity-95">
            Personalized mobile concierge service increases guest satisfaction by 34% and drives 52% growth in ancillary revenue per stay through intelligent, context-aware engagement.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A boutique hotel chain with 42 properties across major US cities faced a critical guest experience challenge. Despite premium positioning and high room rates, guest satisfaction scores had declined 18 points over three years as travelers increasingly expected seamless digital experiences comparable to leading hospitality brands. The chain's mobile app functioned primarily as a booking tool, offering minimal value during guest stays. Concierge services remained phone-based and reactive, creating friction for guests seeking recommendations, reservations, or assistance.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The core problem: disconnected guest touchpoints created inconsistent experiences that failed to leverage guest preferences, stay history, or real-time context. A returning guest who previously requested late checkout had to repeat the request each visit. Guests interested in spa services received no proactive recommendations or special offers. The hotel lacked visibility into guest needs until problems escalated to front desk complaints. This reactive approach limited opportunities to deliver personalized service that would differentiate the brand and drive loyalty.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond guest satisfaction, the fragmented experience created revenue leakage. Ancillary services—spa treatments, dining reservations, room upgrades, local experiences—remained underutilized because guests didn't discover offerings or found booking processes cumbersome. Staff spent excessive time handling routine requests that could be automated, limiting their ability to deliver high-touch service during critical moments. Leadership recognized that digital engagement wasn't just about technology—it was essential for delivering the personalized luxury experience that justified premium pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              NEXDYNE designed and implemented a comprehensive digital engagement platform centered on a mobile concierge app that transformed the guest experience from check-in through post-stay follow-up. The solution unified guest data from the property management system, CRM, loyalty program, and third-party services into a single customer profile that powered personalized interactions across every touchpoint. The mobile app became the guest's digital companion—enabling seamless service requests, personalized recommendations, and frictionless access to hotel amenities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The mobile concierge featured intelligent recommendations powered by collaborative filtering and guest preference modeling. Upon check-in, guests received personalized suggestions for dining, spa treatments, and local experiences based on their profile, previous stays, and real-time context (weather, local events, time of day). NEXDYNE implemented one-tap booking for all hotel services—room service, spa appointments, restaurant reservations, housekeeping requests—eliminating phone calls and front desk visits for routine needs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              For pre-arrival engagement, the platform sent personalized welcome messages with property highlights, weather forecasts, and curated local recommendations three days before check-in. Guests could select room preferences, schedule early check-in, and pre-book services directly through the app. During stays, the app enabled digital key access, real-time service request tracking, and proactive notifications about relevant offerings (happy hour specials, spa availability, local event tickets).
            </p>
            <p className="text-lg leading-relaxed">
              NEXDYNE integrated conversational AI for instant guest support, handling common inquiries about hotel amenities, local directions, and service information without staff intervention. For complex requests, the system routed inquiries to appropriate staff members with full context, enabling faster, more personalized responses. Post-stay, the platform automated satisfaction surveys and personalized thank-you messages, while capturing feedback that informed continuous service improvements. The solution included a comprehensive analytics dashboard that tracked engagement metrics, service utilization, and revenue attribution across all digital touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">34%</div>
              <div className="text-lg text-muted-foreground">Satisfaction increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">52%</div>
              <div className="text-lg text-muted-foreground">Ancillary revenue growth</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">81%</div>
              <div className="text-lg text-muted-foreground">App adoption rate</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The digital engagement platform transformed guest experiences and business performance within five months of launch. Guest satisfaction scores increased by 34% as personalized, frictionless service replaced generic, reactive interactions. Mobile app adoption reached 81% of guests within three months, with 92% of adopters actively using the app during their stays. Guests particularly valued digital key access (94% adoption among app users) and one-tap service requests, which reduced average response times from 12 minutes to 3 minutes.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Ancillary revenue per stay increased by 52% as personalized recommendations surfaced relevant services at optimal moments. Spa bookings grew 67%, driven by targeted offers sent to guests based on previous spa usage and stay duration. Restaurant reservations increased 43% through seamless in-app booking that eliminated friction. Room upgrade acceptance rates doubled as the app presented personalized upgrade offers with visual room comparisons and one-tap purchasing.
            </p>
            <p className="text-lg leading-relaxed">
              Operational efficiency improved significantly. Front desk call volume decreased by 41% as guests self-served routine requests through the mobile app. Staff productivity increased as digital workflows automated repetitive tasks, freeing time for high-value guest interactions. Housekeeping efficiency improved by 18% through real-time request tracking and optimized scheduling. Guest loyalty program enrollment increased from 34% to 72% as the app made sign-up and benefit access frictionless. Net Promoter Score increased by 26 points, with guests citing the personalized digital experience as a key differentiator versus competitors. The hotel chain's direct booking rate increased by 23% as the superior mobile experience reduced reliance on OTA platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFE5D9]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate guest experiences?</h2>
          <p className="text-lg mb-8">Let's build digital engagement that drives satisfaction and revenue.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get in touch</Button>
            <Link href="/solutions/digital-engagement">
              <Button size="lg" variant="outline">Learn more about Digital Engagement</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
