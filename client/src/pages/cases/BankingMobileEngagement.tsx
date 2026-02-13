import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function BankingMobileEngagement() {
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
        <span>Bank Transforms Digital Experience with AI-Powered Mobile App</span>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Bank Transforms Digital Experience with AI-Powered Mobile App</h1>
          <p className="text-2xl opacity-95">
            Conversational AI and proactive notifications reduce call center volume by 38% while improving customer satisfaction scores by 27 points through intelligent, personalized engagement.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A regional bank with $12 billion in assets and 850,000 customers faced mounting pressure from digital-first competitors offering superior mobile banking experiences. Despite investing in a mobile app, customer adoption remained low—only 32% of customers had downloaded the app, and active usage rates lagged at just 18%. Customer satisfaction scores for digital channels trailed industry benchmarks by 31 points, while call center volume continued growing 12% annually as customers struggled with basic banking tasks.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The root problem: the existing mobile app functioned as a passive transaction tool rather than an intelligent engagement platform. Customers received no proactive guidance about account issues, spending patterns, or financial opportunities. The app lacked conversational AI for support, forcing customers to navigate complex IVR systems or wait on hold for simple questions. Push notifications were limited to generic security alerts, missing opportunities to deliver personalized financial insights that would drive engagement and loyalty.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond customer frustration, the digital experience gap created competitive vulnerability. Younger customers—the bank's growth demographic—increasingly chose fintech competitors offering intuitive mobile experiences with AI-powered insights and instant support. Branch traffic declined as customers sought digital-first solutions the bank couldn't provide. Leadership recognized that transforming mobile engagement wasn't just about technology—it was essential for customer retention, acquisition, and long-term competitive positioning.
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
              NEXDYNE designed and implemented a next-generation mobile banking platform centered on conversational AI and proactive engagement. The solution rebuilt the mobile app from the ground up using React Native, delivering native iOS and Android experiences with AI-powered features that transformed banking from transactional to advisory. At the core: an intelligent virtual assistant capable of understanding natural language queries, executing banking tasks, and providing personalized financial guidance.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The conversational AI assistant—integrated directly into the mobile app—handled common customer inquiries instantly: balance checks, transaction searches, fund transfers, bill payments, and account troubleshooting. NEXDYNE trained the AI on 18 months of call center transcripts and customer interaction data, enabling it to understand banking terminology, resolve ambiguous queries, and escalate complex issues to human agents seamlessly. The assistant learned from every interaction, continuously improving accuracy and expanding capabilities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Beyond reactive support, NEXDYNE implemented proactive engagement through intelligent push notifications triggered by behavioral patterns and financial events. Customers received personalized alerts about unusual spending, upcoming bill due dates, low balance warnings, and savings opportunities—all contextualized to individual financial situations. The app included a personalized insights dashboard that surfaced spending trends, budget recommendations, and tailored product suggestions based on transaction analysis and life-stage modeling.
            </p>
            <p className="text-lg leading-relaxed">
              For security and fraud prevention, NEXDYNE integrated biometric authentication (Face ID, Touch ID) and real-time transaction monitoring that alerted customers to suspicious activity instantly. The solution included a comprehensive analytics platform that tracked engagement metrics, identified friction points, and enabled continuous optimization. NEXDYNE also implemented a customer feedback loop that captured satisfaction ratings after key interactions, providing actionable insights for ongoing improvements.
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
              <div className="text-5xl font-bold text-primary mb-2">38%</div>
              <div className="text-lg text-muted-foreground">Call center reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">27</div>
              <div className="text-lg text-muted-foreground">Point CSAT improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">74%</div>
              <div className="text-lg text-muted-foreground">App adoption rate</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The AI-powered mobile banking platform transformed customer engagement within six months of launch. Call center volume decreased by 38% as the conversational AI assistant resolved 67% of customer inquiries without human intervention—handling 2.4 million interactions in the first six months. Average resolution time for common banking tasks dropped from 8.5 minutes (via phone) to 45 seconds (via AI assistant), dramatically improving customer experience while reducing operational costs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Customer satisfaction scores for digital channels increased by 27 points, surpassing industry benchmarks for the first time in the bank's history. Mobile app adoption surged from 32% to 74% of customers, with daily active usage rates reaching 52%—more than double pre-launch levels. Customers particularly valued proactive financial insights, with 83% reporting that personalized spending alerts and savings recommendations improved their financial management.
            </p>
            <p className="text-lg leading-relaxed">
              The business impact extended beyond operational efficiency. Mobile-initiated product applications (credit cards, loans, investment accounts) increased by 156% as personalized recommendations surfaced relevant opportunities at optimal moments. Fraud detection improved significantly, with real-time transaction alerts enabling customers to confirm or dispute suspicious activity within minutes—reducing fraud losses by 29%. Customer retention improved by 12 percentage points among mobile app users, validating the strategic value of digital engagement. The bank's Net Promoter Score increased by 18 points, driven primarily by improvements in digital experience quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFE5D9]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform digital banking?</h2>
          <p className="text-lg mb-8">Let's build AI-powered engagement that drives satisfaction and efficiency.</p>
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
