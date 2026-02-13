import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FitnessAppEngagement() {
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
          <span className="text-foreground">Fitness Startup Case Study</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <img 
            src="/mobile-apps-case-fitness.ff78d1c6.jpg" 
            alt="Fitness Mobile App Case Study" 
            className="w-full h-96 object-cover rounded-lg mb-12"
          />
          
          <h1 className="text-5xl font-bold mb-3">Fitness Startup Achieves 4.8★ Rating with Gamified Workout App</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">30-day retention rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">App Store rating (iOS & Android)</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.2M</div>
              <div className="text-sm text-muted-foreground">Workouts completed in first year</div>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>The Challenge</h2>
            <p>
              A venture-backed fitness startup needed to launch a mobile app that could compete with established players like Peloton and Nike Training Club. Their differentiation strategy relied on AI-powered personalized training plans and social challenges that kept users motivated. However, they lacked mobile development expertise and needed to launch on both iOS and Android simultaneously within six months.
            </p>
            <p>
              The app required complex features including video streaming, offline workout downloads, real-time progress tracking, social feeds, and integration with wearable devices. Performance was critical—users wouldn't tolerate laggy video playback or slow load times during workouts.
            </p>

            <h2>The Solution</h2>
            <p>
              NEXDYNE built a cross-platform mobile app using React Native, enabling simultaneous iOS and Android development while maintaining native performance. We implemented a custom video player optimized for workout content, with adaptive bitrate streaming and offline caching. The app's gamification engine tracked user progress, unlocked achievements, and facilitated social challenges.
            </p>
            <p>
              Our design team created an intuitive interface that prioritized workout discovery and quick-start flows. We integrated with Apple Health and Google Fit to sync workout data, and implemented push notifications to re-engage users with personalized workout recommendations. The app's backend leveraged AWS for scalable video delivery and real-time data synchronization.
            </p>

            <h2>The Results</h2>
            <p>
              The app launched on schedule and immediately gained traction. Within three months, it achieved a 4.8★ rating on both App Stores—higher than most competitors. The 89% 30-day retention rate significantly exceeded industry benchmarks (typically 25-40% for fitness apps), driven by the gamification features and personalized workout recommendations.
            </p>
            <p>
              Users completed 3.2 million workouts in the first year, with average session times of 38 minutes. The social challenge feature drove 67% of users to invite friends, creating viral growth loops. The startup secured Series A funding based on the app's strong user engagement metrics and positive reviews.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li><strong>Cross-platform efficiency:</strong> React Native enabled simultaneous iOS and Android development, reducing time-to-market by 40% compared to native development</li>
              <li><strong>Performance optimization:</strong> Custom video player and offline caching delivered smooth workout experiences even on slower connections</li>
              <li><strong>Gamification drives retention:</strong> Social challenges and achievement systems kept users engaged long-term</li>
              <li><strong>Wearable integration:</strong> Apple Health and Google Fit sync increased perceived value and data accuracy</li>
            </ul>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Learn more about Mobile Apps</h3>
              <p className="mb-6">
                Discover how NEXDYNE can help you build mobile apps that drive user engagement and business growth.
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
