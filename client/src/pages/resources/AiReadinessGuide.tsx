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
  ListChecks,
  Gauge,
  AlertTriangle,
  Compass,
  Plus,
  Minus,
} from "lucide-react";

const GUIDE_PDF = "/downloads/NexDyne-SMB-AI-Readiness-Guide.pdf";

const LEARN = [
  "Whether your business problem is clearly defined — or still just “we should use AI”",
  "Which readiness gaps quietly derail AI and automation projects",
  "Where human oversight is still essential (and where it isn't)",
  "Whether you're ready for a pilot — or need to close a few gaps first",
];

const INSIDE = [
  { icon: ListChecks, title: "10 readiness questions", body: "Across process, data, people, ownership, risk, and value — the dimensions that actually predict success." },
  { icon: Gauge, title: "A self-scoring diagnostic", body: "Score each question 0–2, add it up, and read your band. About 15 minutes, start to finish." },
  { icon: AlertTriangle, title: "Warning signs + one action", body: "For every question: what “not ready” looks like, and the single next step to close the gap." },
  { icon: Compass, title: "Your band + next step", body: "Not ready, partially ready, or ready — with a clear, honest read on what to do next." },
];

const FAQS = [
  {
    q: "Is this really free?",
    a: "Yes — genuinely free, no strings. Readiness is the single biggest predictor of whether an AI investment pays off, and we'd rather you get that right. Keep us in mind when you're ready to go deeper.",
  },
  {
    q: "Who is this for?",
    a: "Leaders of growing companies — roughly 20 to 200 people. Owners, CEOs, presidents, COOs, operations managers, and technology leaders evaluating AI, automation, or new technology.",
  },
  {
    q: "How long does it take?",
    a: "About 15 minutes. Ten questions, score yourself, read your band. It's built to be brought straight into a leadership meeting.",
  },
  {
    q: "Why do you ask for my information?",
    a: "So we can email you the guide and send occasional practical insights for growing companies. We keep your information safe, never sell it, and you can unsubscribe at any time.",
  },
];

export default function AiReadinessGuide() {
  const [form, setForm] = useState({ firstName: "", email: "", company: "", role: "" });
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      document.getElementById("get-guide")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      console.error("guide request failed", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition";

  const Mockup = ({ className = "" }: { className?: string }) => (
    <div className={"relative " + className}>
      <img
        src="/images/ai-readiness-guide-peek.png"
        alt=""
        aria-hidden
        className="absolute -right-6 top-6 w-40 rounded-md shadow-[0_20px_40px_-16px_rgba(0,0,0,0.28)] border border-[#E5E7EB] rotate-3"
      />
      <img
        src="/images/ai-readiness-guide-cover.png"
        alt="The SMB AI Readiness Guide — cover"
        className="relative w-48 rounded-md shadow-[0_26px_60px_-16px_rgba(0,0,0,0.45)] border border-[#E5E7EB] -rotate-2"
      />
    </div>
  );

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("get-guide")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO
        title="Is Your Business Ready for AI? — Free Readiness Guide"
        description="A free 10-question diagnostic for growing companies. Evaluate your processes, data, workforce, and governance before investing in AI or automation."
        canonical="/resources/ai-readiness-guide"
      />

      {/* Minimal header — no nav menu (one exit only) */}
      <header className="border-b border-[#E5E7EB] bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="NexDyne home">
            <img src="/brand/logo-mixed.svg" alt="NexDyne Consulting Group" className="h-6 w-auto" />
          </Link>
          <a
            href="#get-guide"
            onClick={scrollToForm}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
          >
            Get the free guide <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* HERO — copy left, form right */}
      <section className="bg-[#F7F9FC] border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
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
            </div>

            {/* Form card */}
            <div id="get-guide" className="md:sticky md:top-24 scroll-mt-24">
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
                      Landed in the middle? That's where the right first move matters most. Reply to the
                      email to request an <strong>AI &amp; Operations Readiness Assessment</strong>.
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
                          <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={inputCls + (emailError ? " border-primary" : "")} />
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
                        <label className="block text-sm font-medium mb-1.5">Role <span className="text-charcoal/40 font-normal">(optional)</span></label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
                          <input type="text" name="role" value={form.role} onChange={onChange} placeholder="COO / Operations lead" className={inputCls} />
                        </div>
                      </div>
                      <TurnstileWidget appearance="interaction-only" onVerify={setToken} onExpire={() => setToken(null)} />
                      <button type="submit" disabled={submitting} className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>) : (<>Get the Free Guide <ArrowRight className="w-4 h-4" /></>)}
                      </button>
                      <p className="text-xs text-center text-charcoal/50 leading-relaxed">
                        By requesting the guide you'll also get occasional practical insights for growing
                        companies. Unsubscribe anytime. See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary mb-3">What's inside</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em]">A diagnostic, not a lecture.</h2>
            <p className="mt-3 text-charcoal/65 leading-relaxed">
              Ten questions you can score honestly in fifteen minutes — and a clear read on what to do next.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSIDE.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-[#F7F9FC] border border-[#E5E7EB] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-[15px] mb-1.5">{title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY READINESS FIRST — reinforcement */}
      <section className="bg-[#F7F9FC] border-y border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary mb-3">Why readiness comes first</div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] leading-tight">
                Most AI projects fail before implementation even begins.
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Not because the technology is wrong — because the process was unclear, the data was scattered,
                no one owned the outcome, or human judgment got automated away. Technology can't compensate for
                any of that. Point AI at those gaps and it amplifies them, faster and at scale.
              </p>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                This guide helps you find those gaps first — so your first AI investment is one that actually
                pays off. That's what we mean by <strong>human intelligence, governed and scaled.</strong>
              </p>
              <a href="#get-guide" onClick={scrollToForm} className="mt-7 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors">
                Get the free guide <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center md:justify-end pr-8">
              <Mockup />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-center">Questions, answered.</h2>
          <div className="mt-8 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-[15px] md:text-base">{f.q}</span>
                    <span className="flex-none w-6 h-6 rounded-full bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center text-charcoal/60">
                      {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {open && <p className="pb-5 -mt-1 text-charcoal/70 leading-relaxed text-[15px]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary mb-4">The SMB AI Readiness Guide</div>
          <h2 className="text-2xl md:text-[2rem] font-bold tracking-[-0.02em] text-white leading-tight max-w-2xl mx-auto">
            Know whether you're ready — before you spend a dollar.
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Ten questions. Fifteen minutes. A clear, honest read on your next move.
          </p>
          <a href="#get-guide" onClick={scrollToForm} className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
            Get the free guide <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/50">
          <span>© {new Date().getFullYear()} NexDyne Consulting Group</span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-charcoal">Privacy</a>
            <a href="/about" className="hover:text-charcoal">About</a>
            <a href="/" className="hover:text-charcoal">nexdynegroup.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
