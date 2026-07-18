import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { SEO } from "@/components/SEO";
import {
  Check,
  CheckCircle2,
  Download,
  Loader2,
  Mail,
  User,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const GUIDE_PDF = "/downloads/NexDyne-SMB-AI-Readiness-Guide.pdf";

const LEARN = [
  "Whether your business problem is clearly defined — or still just “we should use AI”",
  "Which readiness gaps quietly derail AI and automation projects",
  "Where human oversight is still essential (and where it isn't)",
  "Whether you're ready for a pilot — or need to close a few gaps first",
];

export default function AiReadinessGuide() {
  const [form, setForm] = useState({ firstName: "", email: "", company: "", role: "" });
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const requestGuide = trpc.resources.requestGuide.useMutation();

  const validEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (name === "email" && emailError) setEmailError("");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !validEmail(form.email)) {
      setEmailError("Please enter a valid work email.");
      return;
    }
    const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY as string | undefined;
    if (sitekey && !token) {
      toast.error("Please complete the human verification.");
      return;
    }
    setSubmitting(true);
    try {
      await requestGuide.mutateAsync({
        email: form.email,
        firstName: form.firstName || undefined,
        company: form.company || undefined,
        role: form.role || undefined,
        turnstileToken: token ?? undefined,
      });
      setDone(true);
    } catch (err) {
      console.error("guide request failed", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition";

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-charcoal">
      <SEO
        title="Is Your Business Ready for AI? — Free Readiness Guide"
        description="A free 10-question diagnostic for growing companies. Evaluate your processes, data, workforce, and governance before investing in AI or automation."
        canonical="/resources/ai-readiness-guide"
      />

      {/* Minimal header — no nav menu, one exit only (conversion best practice) */}
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="NexDyne home">
            <img src="/brand/logo-mixed.svg" alt="NexDyne Consulting Group" className="h-6 w-auto" />
          </Link>
          <span className="text-xs font-medium tracking-wide text-charcoal/50 uppercase">Free Readiness Tool</span>
        </div>
      </header>

      {/* Hero — two columns: copy left, form right */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary mb-4">
              The SMB AI Readiness Guide
            </div>
            <h1 className="text-3xl md:text-[2.6rem] leading-[1.08] font-bold tracking-[-0.02em]">
              Is your business <span className="text-primary">actually ready</span> for AI?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/70 max-w-xl">
              A free, 10-question diagnostic for growing companies. Evaluate your processes, data,
              workforce, and governance — and know whether AI will pay off <em>before</em> you spend a dollar.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-charcoal">What you'll learn:</p>
              {LEARN.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-none w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-snug text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs font-medium text-charcoal/55">
              <span>Free</span>
              <span className="w-1 h-1 rounded-full bg-charcoal/25" />
              <span>10 questions</span>
              <span className="w-1 h-1 rounded-full bg-charcoal/25" />
              <span>~15 minutes</span>
            </div>

            {/* Offer cover thumbnail */}
            <div className="mt-10 hidden md:block">
              <img
                src="/images/ai-readiness-guide-cover.png"
                alt="The SMB AI Readiness Guide — cover"
                className="w-44 rounded-md shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] border border-[#E5E7EB]"
              />
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="md:sticky md:top-10">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] overflow-hidden">
              {done ? (
                <div className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-charcoal">Check your inbox.</h2>
                  <p className="mt-2 text-charcoal/70 text-[15px] leading-relaxed">
                    We've emailed your copy of <strong>The SMB AI Readiness Guide</strong>. You can also
                    download it right now:
                  </p>
                  <a
                    href={GUIDE_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5" /> Download the guide
                  </a>
                  <p className="mt-6 text-sm text-charcoal/60 leading-relaxed">
                    Scored yourself and landed in the middle? That's where the right first move matters most.
                    Reply to the email to request an <strong>AI &amp; Operations Readiness Assessment</strong>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-charcoal px-6 py-5">
                    <h2 className="text-white font-bold text-lg">Get the free guide</h2>
                    <p className="text-white/60 text-sm mt-0.5">Delivered to your inbox in seconds.</p>
                  </div>
                  <form onSubmit={onSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Work email <span className="text-primary">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                        <input
                          type="email" name="email" value={form.email} onChange={onChange}
                          placeholder="you@company.com"
                          className={inputCls + (emailError ? " border-primary" : "")}
                        />
                      </div>
                      {emailError && <p className="text-primary text-sm mt-1">{emailError}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">First name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                        <input type="text" name="firstName" value={form.firstName} onChange={onChange} placeholder="Jordan" className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                        <input type="text" name="company" value={form.company} onChange={onChange} placeholder="Acme Inc." className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Role <span className="text-charcoal/40 font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                        <input type="text" name="role" value={form.role} onChange={onChange} placeholder="COO / Operations lead" className={inputCls} />
                      </div>
                    </div>

                    <TurnstileWidget
                      appearance="interaction-only"
                      onVerify={setToken}
                      onExpire={() => setToken(null)}
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                      ) : (
                        <>Get the Free Guide <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>

                    <p className="text-xs text-center text-charcoal/50 leading-relaxed">
                      By requesting the guide you'll also get occasional practical insights for growing
                      companies. Unsubscribe anytime. See our{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/50">
          <span>© {new Date().getFullYear()} NexDyne Consulting Group</span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-charcoal">Privacy</a>
            <a href="/" className="hover:text-charcoal">nexdynegroup.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
