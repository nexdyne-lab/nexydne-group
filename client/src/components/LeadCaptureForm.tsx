import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Download, Loader2 } from "lucide-react";

interface LeadCaptureFormProps {
  whitepaperTitle: string;
  whitepaperDescription?: string;
  downloadUrl?: string;
  onSuccess?: (data: FormData) => void;
  variant?: "default" | "compact" | "inline";
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  industry: string;
}

const roles = [
  "C-Suite Executive",
  "VP / Director",
  "Manager",
  "Individual Contributor",
  "Consultant",
  "Other",
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Financial Services",
  "Retail & E-commerce",
  "Logistics & Transportation",
  "Professional Services",
  "Technology",
  "Insurance",
  "Telecommunications",
  "Other",
];

export default function LeadCaptureForm({
  whitepaperTitle,
  whitepaperDescription,
  downloadUrl = "#",
  onSuccess,
  variant = "default",
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }
    if (!formData.industry) {
      newErrors.industry = "Please select your industry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    onSuccess?.(formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-lg sm:rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 text-center ${className}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Thank you, {formData.firstName}!
        </h3>
        <p className="text-slate-600 mb-6">
          Your download is ready. Click the button below to access the whitepaper.
        </p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#051C2C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0077B5] transition-colors"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download Whitepaper
        </a>
        <p className="text-sm text-slate-500 mt-6">
          We've also sent a copy to {formData.email}
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First name *"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Last name *"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div>
          <Input
            type="email"
            placeholder="Work email *"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Company *"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={errors.company ? "border-red-500" : ""}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Select value={formData.role} onValueChange={(v) => handleChange("role", v)}>
              <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                <SelectValue placeholder="Role *" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </div>
          <div>
            <Select value={formData.industry} onValueChange={(v) => handleChange("industry", v)}>
              <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                <SelectValue placeholder="Industry *" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#051C2C] hover:bg-[#0077B5]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Download Now
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className={`bg-white rounded-lg sm:rounded-lg sm:rounded-xl shadow-lg overflow-hidden ${className}`}>
      {whitepaperTitle && (
        <div className="bg-gradient-to-r from-[#051C2C] to-[#0a3d5c] p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{whitepaperTitle}</h3>
          {whitepaperDescription && (
            <p className="text-white/80 text-sm">{whitepaperDescription}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-slate-700 font-medium">
              First name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`mt-1 ${errors.firstName ? "border-red-500" : ""}`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName" className="text-slate-700 font-medium">
              Last name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`mt-1 ${errors.lastName ? "border-red-500" : ""}`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-slate-700 font-medium">
            Work email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="company" className="text-slate-700 font-medium">
            Company <span className="text-red-500">*</span>
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={`mt-1 ${errors.company ? "border-red-500" : ""}`}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
          )}
        </div>

        <div>
          <Label htmlFor="role" className="text-slate-700 font-medium">
            Role <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.role} onValueChange={(v) => handleChange("role", v)}>
            <SelectTrigger className={`mt-1 ${errors.role ? "border-red-500" : ""}`}>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role}</p>
          )}
        </div>

        <div>
          <Label htmlFor="industry" className="text-slate-700 font-medium">
            Industry <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.industry} onValueChange={(v) => handleChange("industry", v)}>
            <SelectTrigger className={`mt-1 ${errors.industry ? "border-red-500" : ""}`}>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind}>
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#051C2C] hover:bg-[#0077B5] py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Download Whitepaper
            </>
          )}
        </Button>

        <p className="text-xs text-slate-500 text-center">
          By submitting this form, you agree to receive communications from NexDyne Consulting Group.
          You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
