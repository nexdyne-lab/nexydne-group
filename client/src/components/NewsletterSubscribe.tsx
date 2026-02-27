import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-center gap-3 text-orange-700">
          <CheckCircle className="w-6 h-6" />
          <p className="text-lg font-semibold">
            Thanks for subscribing! Check your inbox to confirm your subscription.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mail className="w-6 h-6 text-orange-500" />
          <h3 className="text-2xl font-bold text-charcoal">
            Subscribe to Insights
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Get the latest articles on intelligent automation, AI agents, and process optimization delivered to your inbox. No spam, unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="your.email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          By subscribing, you agree to receive marketing communications from NEXDYNE TECHNOLOGIES. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
