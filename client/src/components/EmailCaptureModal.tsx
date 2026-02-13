import { useState } from 'react';
import { X, Download, Loader2, CheckCircle, Mail, User, Building2, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  caseStudyTitle: string;
  caseStudyIndustry?: string;
}

export function EmailCaptureModal({
  isOpen,
  onClose,
  onSuccess,
  caseStudyTitle,
  caseStudyIndustry
}: EmailCaptureModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    marketingConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const captureLead = trpc.leads.capture.useMutation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await captureLead.mutateAsync({
        email: formData.email,
        firstName: formData.firstName || undefined,
        lastName: formData.lastName || undefined,
        company: formData.company || undefined,
        jobTitle: formData.jobTitle || undefined,
        caseStudyTitle,
        caseStudyIndustry,
        marketingConsent: formData.marketingConsent
      });
      
      setIsSuccess(true);
      
      // Short delay to show success state, then trigger download
      setTimeout(() => {
        onSuccess();
        onClose();
        // Reset form for next use
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          company: '',
          jobTitle: '',
          marketingConsent: false
        });
        setIsSuccess(false);
      }, 1500);
      
    } catch (error) {
      console.error('Failed to capture lead:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl sm:rounded-xl sm:rounded-2xl shadow-xl sm:shadow-xl sm:shadow-2xl w-full max-w-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#051C2C] to-[#0a3d5c] p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#0077B5]/20 rounded-lg sm:rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Download className="w-6 h-6 text-[#0077B5]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Download Case Study</h2>
                    <p className="text-white/60 text-sm">Get the full PDF report</p>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  Enter your details below to download the complete case study with detailed insights, 
                  implementation strategies, and measurable outcomes.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 space-y-4">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#051C2C] mb-2">Success!</h3>
                    <p className="text-[#051C2C]/60">Your download will begin shortly...</p>
                  </motion.div>
                ) : (
                  <>
                    {/* Email - Required */}
                    <div>
                      <label className="block text-sm font-medium text-[#051C2C] mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#051C2C]/40" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@company.com"
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg text-[#051C2C] placeholder:text-[#051C2C]/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all ${
                            errors.email ? 'border-red-500' : 'border-[#051C2C]/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#051C2C] mb-1.5">
                          First Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#051C2C]/40" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="w-full pl-10 pr-4 py-3 border border-[#051C2C]/20 rounded-lg text-[#051C2C] placeholder:text-[#051C2C]/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#051C2C] mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Smith"
                          className="w-full px-4 py-3 border border-[#051C2C]/20 rounded-lg text-[#051C2C] placeholder:text-[#051C2C]/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[#051C2C] mb-1.5">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#051C2C]/40" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Inc."
                          className="w-full pl-10 pr-4 py-3 border border-[#051C2C]/20 rounded-lg text-[#051C2C] placeholder:text-[#051C2C]/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                        />
                      </div>
                    </div>

                    {/* Job Title */}
                    <div>
                      <label className="block text-sm font-medium text-[#051C2C] mb-1.5">
                        Job Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#051C2C]/40" />
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          placeholder="VP of Operations"
                          className="w-full pl-10 pr-4 py-3 border border-[#051C2C]/20 rounded-lg text-[#051C2C] placeholder:text-[#051C2C]/40 focus:outline-none focus:ring-2 focus:ring-[#0077B5] transition-all"
                        />
                      </div>
                    </div>

                    {/* Marketing Consent */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleInputChange}
                        className="mt-1 w-3 h-3 sm:w-4 sm:h-4 text-[#0077B5] border-[#051C2C]/20 rounded focus:ring-[#0077B5]"
                      />
                      <label htmlFor="marketingConsent" className="text-sm text-[#051C2C]/70 leading-relaxed">
                        I'd like to receive insights, case studies, and updates from NexDyne Consulting Group. 
                        You can unsubscribe at any time.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#0077B5] hover:bg-[#005a8c] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                          Download Case Study
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-center text-[#051C2C]/50">
                      By downloading, you agree to our{' '}
                      <a href="/privacy" className="text-[#0077B5] hover:underline">Privacy Policy</a>.
                      We respect your privacy and will never share your information.
                    </p>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EmailCaptureModal;
