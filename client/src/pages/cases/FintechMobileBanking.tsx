import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FintechMobileBanking() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-blue-500 transition-colors">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/intelligent-process-optimization">
              <a className="hover:text-blue-500 transition-colors">Intelligent Process Optimization</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/app-development">
              <a className="hover:text-blue-500 transition-colors">App Development</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium">Credit Union Launches Mobile Banking App</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-charcoal mb-3 leading-tight">
            Credit Union Launches Mobile Banking App with 4.8 Star Rating
          </h1>
          <p className="text-2xl text-charcoal/80 leading-relaxed">
            Regional credit union builds iOS and Android mobile banking app with biometric authentication, mobile check deposit, and P2P payments—achieving 78% adoption in 6 months
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            A community credit union serving 125,000 members across the Pacific Northwest faced increasing pressure from larger banks offering sophisticated mobile banking experiences. Their existing mobile app, developed by a third-party vendor, suffered from poor user experience, frequent crashes, and limited functionality. Member satisfaction scores for digital banking lagged 28 percentage points behind the industry average. Younger members (ages 25-40) were closing accounts at alarming rates, citing the lack of modern mobile features as their primary reason for leaving.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            The credit union needed a complete mobile banking overhaul that would match or exceed the capabilities of major national banks while maintaining the personalized service that defined their brand. The new app had to support biometric authentication, mobile check deposit with instant funds availability, peer-to-peer payments, bill pay, account alerts, and cardless ATM access. Security and regulatory compliance were paramount, requiring SOC 2 Type II certification and adherence to FFIEC mobile banking guidelines. The credit union set a 9-month timeline to design, develop, test, and launch both iOS and Android apps.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Solution</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            NEXDYNE partnered with the credit union's IT, compliance, and member experience teams to design and develop a comprehensive mobile banking platform. We conducted extensive user research with 250 members across different age groups and technical proficiency levels to inform the UX design. The app featured intuitive navigation with a dashboard showing account balances, recent transactions, and personalized insights. Biometric authentication (Face ID, Touch ID, fingerprint) provided secure yet convenient access.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Our development team built native iOS and Android apps using Swift and Kotlin respectively, ensuring optimal performance and platform-specific user experience. We integrated with the credit union's core banking system (Symitar) via secure APIs for real-time account data and transaction processing. Mobile check deposit used advanced image processing and OCR to extract check details and detect fraud patterns. P2P payments leveraged the Zelle network for instant transfers to members at other financial institutions. We implemented multi-factor authentication, device fingerprinting, and behavioral analytics to detect and prevent fraud while maintaining a frictionless user experience.
          </p>

          <h3 className="text-2xl font-bold text-charcoal mb-4 mt-8">Key Technical Implementations</h3>
          <ul className="space-y-3 text-lg text-charcoal/80">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Native iOS (Swift) and Android (Kotlin) apps with biometric authentication and secure enclave key storage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Symitar core banking integration via REST APIs for real-time account data, transactions, and bill pay processing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Mobile check deposit with AI-powered fraud detection, image quality validation, and instant funds availability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Zelle P2P payment integration for instant transfers with contact list synchronization and split payment features</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Advanced security with device fingerprinting, behavioral analytics, and real-time fraud monitoring via Feedzai</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-8">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">78%</div>
              <div className="text-charcoal/80 font-medium">Member adoption rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">4.8★</div>
              <div className="text-charcoal/80 font-medium">App Store rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">92%</div>
              <div className="text-charcoal/80 font-medium">Reduction in branch visits</div>
            </div>
          </div>

          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            The mobile banking app launched on schedule after 8 months of development and 1 month of beta testing with 2,000 members. Within 6 months of full launch, 78% of the credit union's members had downloaded and actively used the app, far exceeding the initial 60% adoption target. App Store ratings reached 4.8 stars on iOS and 4.7 stars on Android, with members praising the intuitive interface, fast performance, and comprehensive feature set. Member satisfaction scores for digital banking increased 35 percentage points, surpassing the industry average.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Mobile check deposits accounted for 68% of all check deposits within 3 months of launch, reducing branch traffic and teller workload. P2P payment volume exceeded $45M in the first year, with 42% of members using the feature regularly. The credit union reduced member attrition in the 25-40 age group by 73%, with exit surveys showing the new mobile app as the primary reason for staying. Branch visits decreased 92% for routine transactions, allowing staff to focus on financial advisory services and complex member needs. The app's success attracted 8,500 new members in the first year, with 64% citing the mobile banking experience as a key factor in their decision to join.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-primary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to build your custom application?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how NEXDYNE can accelerate your digital transformation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-slate-50">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View all cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
