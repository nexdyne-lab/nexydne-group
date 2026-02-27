import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CaseStudyContactFormProps {
  caseStudyTitle: string;
}

export default function CaseStudyContactForm({ caseStudyTitle }: CaseStudyContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-xl sm:rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Request similar results for your business
              </h2>
              <p className="text-lg text-muted-foreground">
                Interested in achieving outcomes like this case study? Share your details and our team will reach out to discuss how we can help transform your operations.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-secondary/10 border border-green-200 rounded-lg p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 text-center">
                <div className="text-secondary text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Thank you for your interest!</h3>
                <p className="text-secondary">
                  We'll review your request and get back to you within 24 hours to schedule a consultation.
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

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal/80 mb-2">
                    Tell us about your automation needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your current challenges, processes you'd like to automate, or specific outcomes you're looking to achieve..."
                  />
                </div>

                {/* Hidden field for case study reference */}
                <input type="hidden" name="caseStudy" value={caseStudyTitle} />

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    By submitting this form, you agree to be contacted by NewCo Technologies regarding your automation needs.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
