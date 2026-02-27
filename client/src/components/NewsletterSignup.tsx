import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("submitting");
    
    // Simulate API call - in production, this would connect to your email service
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
      subscribers.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers));
      
      setStatus("success");
      setMessage("Thanks for subscribing! Check your inbox for our latest insights.");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-base via-primary to-primary text-white p-8 md:p-12 rounded-lg">
      <div className="max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Get automation insights delivered to your inbox
        </h3>
        <p className="text-lg mb-6 text-white/90">
          Join 2,500+ business leaders receiving our monthly newsletter with practical automation strategies, ROI benchmarks, and case study deep-dives.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={status === "submitting" || status === "success"}
            className="flex-1 px-4 py-3 rounded-md text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="px-8 py-3 bg-cyan-400 text-charcoal font-semibold rounded-md hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "submitting" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-sm ${status === "error" ? "text-red-200" : "text-cyan-200"}`}>
            {message}
          </p>
        )}
        
        <p className="text-xs text-white/70 mt-4">
          No spam, ever. Unsubscribe anytime. By subscribing, you agree to receive emails from NewCo Technologies.
        </p>
      </div>
    </div>
  );
}
