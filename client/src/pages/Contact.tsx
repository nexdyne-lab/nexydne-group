import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SEO } from '@/components/SEO';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { Link } from 'wouter';

const contactReasons = [
  { value: 'business', label: "Business inquiry: I'm exploring hiring NexDyne" },
  { value: 'partnership', label: "Partnership request: I'd like to be considered for NexDyne's Alliance Ecosystem" },
  { value: 'press', label: "Press relations: I'm a member of the media seeking a NexDyne expert's comment" },
  { value: 'speaker', label: "Speaker request: I'd like to have a NexDyne expert speak at my event" },
  { value: 'career', label: "Career information: I'd like to work at NexDyne" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    reason: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacyAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLead = trpc.leads.capture.useMutation({
    onSuccess: () => {
      toast.success('Thank you for your message. We will be in touch soon.');
      setFormData({
        reason: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacyAccepted: false,
      });
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong. Please try again.');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.reason) {
      toast.error('Please select a reason for contacting us.');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!formData.privacyAccepted) {
      toast.error('Please accept the Privacy Policy to continue.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead.mutateAsync({
        email: formData.email,
        firstName: formData.firstName || undefined,
        lastName: formData.lastName || undefined,
        company: formData.company || undefined,
        caseStudyTitle: `Contact Form: ${formData.reason}`,
        caseStudyIndustry: formData.message || undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="Contact Us | NexDyne Technologies" 
        description="Get in touch with NexDyne. We're here to help you transform your business with intelligent automation and data-driven solutions."
        canonical="/contact"
      />
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3">
              Contact Us
            </h1>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Intro Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 pb-12 border-b border-gray-200"
            >
              <div />
              <div>
                <p className="text-lg text-gray-900 mb-4">
                  So we can help serve you better, please complete the form below.
                </p>
                <p className="text-gray-600">
                  Please note, due to the volume of inquiries, we cannot respond to everyone. 
                  Where we can, we will respond as soon as possible.
                </p>
              </div>
            </motion.div>

            {/* Reason for Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 py-12 border-b border-gray-200"
            >
              <div />
              <div className="space-y-2">
                <label className="block text-sm text-gray-500">
                  <span className="text-red-600">*</span> Reason for contacting NexDyne:
                </label>
                <Select 
                  value={formData.reason} 
                  onValueChange={(value) => setFormData({ ...formData, reason: value })}
                >
                  <SelectTrigger className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none">
                    <SelectValue placeholder="Reason for contacting NexDyne" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactReasons.map((reason) => (
                      <SelectItem key={reason.value} value={reason.value}>
                        {reason.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            {/* About You Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 py-12 border-b border-gray-200"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  About you
                </h2>
              </div>
              <div className="space-y-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    <span className="text-red-600">*</span> First Name
                  </label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    <span className="text-red-600">*</span> Last Name
                  </label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    <span className="text-red-600">*</span> Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    Phone Number:
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Your Business Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 py-12 border-b border-gray-200"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  About your business
                </h2>
              </div>
              <div className="space-y-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    <span className="text-red-600">*</span> Company Name:
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Your Message Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 py-12 border-b border-gray-200"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  Your message
                </h2>
              </div>
              <div className="space-y-6">
                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500">
                    <span className="text-red-600">*</span> Message:
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your reason for contacting NexDyne in 1,500 characters or less..."
                    className="w-full min-h-[200px] border-gray-300 focus:border-gray-900 focus:ring-0 rounded-none resize-none"
                    maxLength={1500}
                  />
                </div>
              </div>
            </motion.div>

            {/* Privacy & Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 py-12"
            >
              <div />
              <div className="space-y-8">
                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, privacyAccepted: checked as boolean })
                    }
                    className="mt-1 border-gray-400 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                    <span className="text-red-600">*</span> I have read the{' '}
                    <Link href="/privacy">
                      <a className="text-red-600 hover:underline">Privacy Policy</a>
                    </Link>{' '}
                    and agree to its terms.
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-base font-semibold rounded-none uppercase tracking-wider"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </motion.div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
