import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl sm:rounded-xl sm:rounded-2xl p-12 shadow-xl sm:shadow-xl sm:shadow-2xl border border-slate-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>
          <h3 className="text-3xl font-bold text-charcoal mb-4">Thank you for your interest!</h3>
          <p className="text-lg text-muted-foreground mb-6">
            We've received your consultation request. Our business building team will reach out within 24 hours to schedule a discovery call.
          </p>
          <p className="text-sm text-muted-foreground">
            In the meantime, check your email for our Business Building Playbook.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-xl sm:rounded-2xl p-12 shadow-xl sm:shadow-xl sm:shadow-2xl border border-slate-200">
      <div className="mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
        <h3 className="text-3xl font-bold text-charcoal mb-4">Start Your Business Building Journey</h3>
        <p className="text-lg text-muted-foreground">
          Schedule a consultation with our business building experts to discuss your growth objectives and explore how we can help you launch and scale new ventures.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-charcoal/80 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-charcoal/80 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal/80 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
            placeholder="john.smith@company.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-charcoal/80 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
              placeholder="Company Name"
            />
          </div>

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
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-charcoal/80 mb-2">
            Primary Interest *
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-white"
          >
            <option value="">Select an option</option>
            <option value="ai-acceleration">AI-Powered Acceleration</option>
            <option value="distinctive-expertise">Distinctive Expertise & Proven Methodologies</option>
            <option value="go-to-market">Go-To-Market at Scale</option>
            <option value="digital-transformation">Digital Transformation Accelerator</option>
            <option value="rapid-innovation">Rapid Innovation & Testing</option>
            <option value="performance-intelligence">Performance Intelligence & Benchmarking</option>
            <option value="general">General Business Building Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal/80 mb-2">
            Tell us about your business building goals
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Describe your growth objectives, market opportunities, or specific challenges you'd like to discuss..."
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? (
              <>
                <span className="animate-pulse">Submitting...</span>
              </>
            ) : (
              <>
                Schedule Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to our Privacy Policy. We'll use your information to contact you about our services and may send you relevant business building insights.
        </p>
      </form>
    </div>
  );
}
