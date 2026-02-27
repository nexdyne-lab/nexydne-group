import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  title?: string;
  description?: string;
  source?: string; // Track where the form was submitted from
}

export default function ContactForm({ 
  title = "Get in touch",
  description = "Share your details and our team will reach out to discuss how we can help transform your business.",
  source = "general"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    source: source
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log form data to console for now (can be integrated with backend later)
      console.log("Contact form submission:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Success message will be shown in the form

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          name: "", 
          email: "", 
          company: "", 
          phone: "", 
          message: "",
          source: source
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Failed to send message:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-xl sm:rounded-2xl shadow-xl p-8 md:p-12">
      <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-secondary/10 border border-green-200 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 text-center">
          <div className="text-secondary text-5xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-charcoal mb-2">Thank you for reaching out!</h3>
          <p className="text-secondary">
            We've received your message and will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-charcoal/80 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal/80 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-charcoal/80 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your Company Inc."
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-charcoal/80 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-charcoal/80 mb-2">
              How can we help you? *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
              placeholder="Tell us about your business challenges, goals, or specific services you're interested in..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              By submitting this form, you agree to be contacted by NEXDYNE Technologies regarding your inquiry.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
