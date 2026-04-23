import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";

const socialChannels = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/nexdyne",
    description: "Connect with us for industry insights, company updates, and professional networking. Join our community of business leaders and technology innovators.",
    followers: "45K+ followers",
    content: "Thought leadership, case studies, career opportunities"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://twitter.com/nexdyne",
    description: "Follow us for real-time updates, industry news, and quick insights on AI, automation, and digital transformation.",
    followers: "28K+ followers",
    content: "Industry news, quick tips, event updates"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@nexdyne",
    description: "Watch our video content including webinars, client success stories, expert interviews, and educational content on emerging technologies.",
    followers: "12K+ subscribers",
    content: "Webinars, tutorials, client testimonials"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/nexdyne",
    description: "Join our Facebook community for company culture highlights, team stories, and behind-the-scenes content.",
    followers: "18K+ followers",
    content: "Company culture, events, community engagement"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/nexdyne",
    description: "Follow us for visual stories showcasing our work, team, events, and the human side of technology transformation.",
    followers: "8K+ followers",
    content: "Visual stories, team highlights, event coverage"
  }
];

export default function FollowUs() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Follow Us | NexDyne Technologies" 
        description="Connect with NexDyne Technologies on social media. Stay updated with our latest insights, news, and thought leadership."
        canonical="/follow-us"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal tracking-tight mb-3">
              Follow Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay connected with NexDyne Technologies. Follow us on social media for the latest insights, industry news, thought leadership, and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* Social Channels Grid */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {socialChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="border border-border rounded-lg p-4 sm:p-6 md:p-8 hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 sm:p-5 md:p-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-base rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                          <channel.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">
                            {channel.name}
                          </h2>
                          <span className="text-sm text-muted-foreground">
                            {channel.followers}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {channel.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
                            Content:
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {channel.content}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 hidden md:block">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-base rounded-lg flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6 md:mb-8">
              Get the latest insights, research, and thought leadership delivered directly to your inbox. Join thousands of business leaders who stay ahead with NexDyne.
            </p>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-border">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:border-transparent"
                />
                <button className="w-full bg-base text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              {/* Media Inquiries */}
              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Media Inquiries
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For press inquiries, interview requests, or media-related questions, please contact our communications team.
                </p>
                <a 
                  href="mailto:media@nexdyne.com" 
                  className="text-primary hover:underline font-medium"
                >
                  media@nexdyne.com
                </a>
              </div>

              {/* Speaking Engagements */}
              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Speaking Engagements
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Interested in having a NexDyne expert speak at your event? Reach out to discuss availability and topics.
                </p>
                <a 
                  href="mailto:events@nexdyne.com" 
                  className="text-primary hover:underline font-medium"
                >
                  events@nexdyne.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Guidelines */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Content Guidelines
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-5 sm:mb-6 md:mb-8">
              We welcome engagement on our social channels. Please keep discussions professional and respectful. We reserve the right to remove content that is inappropriate, offensive, or violates our community standards.
            </p>
            <Link 
              href="/terms"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
            >
              View our Terms of Use
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
