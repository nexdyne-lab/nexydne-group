import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FoodDeliveryApp() {
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
          <span className="text-foreground">Food Delivery Case Study</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <img 
            src="/mobile-apps-case-delivery.e1b7b191.jpg" 
            alt="Food Delivery App Case Study" 
            className="w-full h-96 object-cover rounded-lg mb-12"
          />
          
          <h1 className="text-5xl font-bold mb-3">Regional Food Delivery Service Scales to 500K Orders/Month with Real-Time Tracking</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K</div>
              <div className="text-sm text-muted-foreground">Monthly orders processed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">18min</div>
              <div className="text-sm text-muted-foreground">Average delivery time</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.6★</div>
              <div className="text-sm text-muted-foreground">Customer satisfaction rating</div>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>The Challenge</h2>
            <p>
              A regional food delivery service operating in 15 cities needed to rebuild their mobile app to compete with national players like DoorDash and Uber Eats. Their existing app suffered from slow performance, unreliable GPS tracking, and frequent crashes during peak hours. Customer complaints centered on inaccurate delivery estimates, inability to track drivers in real-time, and a clunky ordering interface that made menu browsing frustrating.
            </p>
            <p>
              The company needed a scalable platform that could handle 500,000+ orders per month while providing real-time driver tracking, accurate ETAs, and seamless payment processing. The app had to support three user types (customers, drivers, and restaurant partners) with different interfaces and workflows. Integration with existing restaurant POS systems and payment gateways was critical, as was offline functionality for drivers in areas with poor connectivity.
            </p>

            <h2>The Solution</h2>
            <p>
              NEXDYNE built separate native apps for customers (iOS/Android), drivers (iOS/Android), and restaurant partners (tablet-optimized). The customer app featured an intuitive menu browsing experience with high-quality food photos, customization options, and saved favorites. We implemented real-time order tracking with live map views showing driver location and estimated arrival times, updated every 10 seconds via WebSocket connections.
            </p>
            <p>
              The driver app used GPS optimization algorithms to suggest efficient routes and batch multiple orders for the same area. Offline functionality allowed drivers to accept orders and navigate even when connectivity was poor, with automatic sync when connection was restored. We integrated with Stripe for payment processing and built custom APIs to connect with various restaurant POS systems. The backend leveraged AWS Lambda for serverless scaling during peak hours, handling traffic spikes without performance degradation.
            </p>

            <h2>The Results</h2>
            <p>
              The new app launched successfully and immediately improved operational metrics. Order volume increased 156% in the first three months as the improved user experience attracted new customers and increased order frequency. Average delivery time decreased from 32 minutes to 18 minutes thanks to the driver app's route optimization and batch order features. Customer satisfaction ratings improved from 3.8★ to 4.6★, with particular praise for the accurate ETAs and real-time tracking.
            </p>
            <p>
              The app handled peak loads of 15,000 concurrent users without performance issues, compared to frequent crashes with the old system. Driver efficiency improved 34% through better route planning and batch order capabilities. Restaurant partners reported 42% fewer order errors due to the improved POS integration and clearer order displays. The company expanded to 10 additional cities within six months, enabled by the scalable platform architecture.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li><strong>Real-time tracking:</strong> WebSocket connections provided accurate, live driver location updates that improved customer trust</li>
              <li><strong>Route optimization:</strong> GPS algorithms and batch ordering increased driver efficiency by 34%</li>
              <li><strong>Offline functionality:</strong> Drivers could operate in low-connectivity areas without losing orders</li>
              <li><strong>Serverless scaling:</strong> AWS Lambda handled traffic spikes during peak hours without manual intervention</li>
            </ul>

            <div className="mt-12 p-8 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Learn more about Mobile Apps</h3>
              <p className="mb-6">
                Discover how NEXDYNE can help you build scalable mobile platforms for marketplace and delivery businesses.
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
