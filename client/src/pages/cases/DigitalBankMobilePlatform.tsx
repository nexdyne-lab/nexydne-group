import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DigitalBankMobilePlatform() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/">
            <a className="hover:text-foreground transition-colors">Home</a>
          </Link>
          <span>/</span>
          <Link href="/solutions/customer-intelligence">
            <a className="hover:text-foreground transition-colors">Data-Driven Customer Intelligence</a>
          </Link>
          <span>/</span>
          <Link href="/solutions/digital-engagement">
            <a className="hover:text-foreground transition-colors">Digital Engagement</a>
          </Link>
          <span>/</span>
          <Link href="/solutions/mobile-apps">
            <a className="hover:text-foreground transition-colors">Mobile Apps</a>
          </Link>
          <span>/</span>
          <span className="text-foreground">Digital Bank Case Study</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <img 
            src="/mobile-apps-case-fintech.fb9a5819.jpg" 
            alt="Digital Bank Mobile Platform Case Study" 
            className="w-full h-96 object-cover rounded-lg mb-12"
          />
          
          <h1 className="text-5xl font-bold mb-3">Digital Bank Onboards 250K Users in 6 Months with Mobile-First Platform</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">250K</div>
              <div className="text-sm text-muted-foreground">Users onboarded in 6 months</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Mobile transaction rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.8min</div>
              <div className="text-sm text-muted-foreground">Average account opening time</div>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>The Challenge</h2>
            <p>
              A digital-first bank launching in the US market needed a mobile banking app that could compete with established neobanks like Chime and Current. Their business model relied on mobile-only operations—no physical branches—so the app had to handle everything from account opening to loan applications. Security and regulatory compliance were paramount, requiring bank-grade encryption and adherence to FDIC guidelines.
            </p>
            <p>
              The app needed to support complex financial features including instant payments, check deposits via camera, budgeting tools, and savings goals. User onboarding had to be frictionless (under 5 minutes) while meeting Know Your Customer (KYC) requirements. The bank also needed to integrate with legacy core banking systems and third-party services like Plaid for account linking.
            </p>

            <h2>The Solution</h2>
            <p>
              NEXDYNE built native iOS and Android apps using Swift and Kotlin to maximize security and performance for financial transactions. We implemented biometric authentication (Face ID, Touch ID, fingerprint) and end-to-end encryption for all sensitive data. The onboarding flow used AI-powered identity verification with document scanning and liveness detection, reducing fraud while maintaining a smooth user experience.
            </p>
            <p>
              Our team integrated with the bank's core systems via secure APIs, implementing real-time transaction notifications and instant balance updates. We built a custom camera module for mobile check deposits with automatic edge detection and image quality validation. The app's budgeting features used machine learning to categorize transactions and provide spending insights.
            </p>

            <h2>The Results</h2>
            <p>
              The app launched successfully and onboarded 250,000 users in the first six months, exceeding the bank's growth projections by 67%. The streamlined onboarding flow achieved an average completion time of 2.8 minutes, with a 92% completion rate—significantly higher than the industry average of 65-75%. Mobile transactions accounted for 94% of all banking activity, validating the mobile-first strategy.
            </p>
            <p>
              Security audits confirmed the app met all regulatory requirements, with zero data breaches or security incidents. The mobile check deposit feature processed $45 million in deposits during the first six months, with a 98% success rate. User satisfaction scores averaged 4.7★ on both App Stores, with particular praise for the intuitive interface and fast transaction speeds.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li><strong>Native development for security:</strong> Swift and Kotlin provided the security and performance required for financial applications</li>
              <li><strong>Frictionless onboarding:</strong> AI-powered identity verification reduced onboarding time by 60% while maintaining compliance</li>
              <li><strong>Real-time features:</strong> Instant notifications and balance updates created a responsive banking experience</li>
              <li><strong>Mobile check deposits:</strong> Camera-based deposits eliminated the need for physical branches</li>
            </ul>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Learn more about Mobile Apps</h3>
              <p className="mb-6">
                Discover how NEXDYNE can help you build secure, compliant mobile banking experiences.
              </p>
              <Link href="/solutions/mobile-apps">
                <Button size="lg">Learn more about Mobile Apps</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
