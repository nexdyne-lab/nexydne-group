import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { SEO } from "@/components/SEO";
import {
  Check,
  CheckCircle2,
  Loader2,
  ListChecks,
  Gauge,
  AlertTriangle,
  Compass,
  Plus,
  Minus,
} from "lucide-react";

// Gated endpoint — the raw file is never linked directly, so a download only
// ever follows a completed capture (soft gate). Streams from private R2 in prod.
const GUIDE_PDF = "/api/download/ai-readiness-guide";

const LEARN = [
  "Whether your business problem is clearly defined — or still just “we should use AI”",
  "Which readiness gaps quietly derail AI and automation projects",
  "Where human oversight is still essential (and where it isn't)",
  "Whether you're ready for a pilot — or need to close a few gaps first",
];

const INSIDE = [
  { icon: ListChecks, title: "10 readiness questions", body: "Across process, data, people, ownership, risk, and value — the dimensions that actually predict success." },
  { icon: Gauge, title: "A self-scoring diagnostic", body: "Score each question 0–2, add it up, read your band. About fifteen minutes, start to finish." },
  { icon: AlertTriangle, title: "Warning signs + one action", body: "For every question: what “not ready” looks like, and the single next step to close the gap." },
  { icon: Compass, title: "Your band + next step", body: "Not ready, partially ready, or ready — with a clear, honest read on what to do next." },
];

const FAQS = [
  { q: "Is this really free?", a: "Yes — genuinely free, no strings. Readiness is the single biggest predictor of whether an AI investment pays off, and we'd rather you get that right. Keep us in mind when you're ready to go deeper." },
  { q: "Who is this for?", a: "Leaders of growing companies — roughly 20 to 200 people. Owners, CEOs, presidents, COOs, operations managers, and technology leaders evaluating AI, automation, or new technology." },
  { q: "How long does it take?", a: "About fifteen minutes. Ten questions, score yourself, read your band. It's built to be brought straight into a leadership meeting." },
  { q: "Why do you ask for my information?", a: "So we can email you the guide and send occasional practical insights for growing companies. We keep your information safe, never sell it, and you can unsubscribe at any time." },
];

/** Eyebrow: thin red rule + charcoal kicker — the site's standard section opener. */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className={"nx-eyebrow " + (light ? "text-white/70" : "text-charcoal/60")}>{children}</span>
    </div>
  );
}

const BTN =
  "inline-block whitespace-nowrap bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary-hover transition-colors cursor-pointer";

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
    } catch (err) {
      console.error("guide request failed", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("get-guide")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inputCls =
    "w-full px-4 py-3 border border-border text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO
        title="Is Your Business Ready for AI? — Free Readiness Guide"
        description="A free 10-question diagnostic for growing companies. Evaluate your processes, data, workforce, and governance before investing in AI or automation."
        canonical="/resources/ai-readiness-guide"
      />

      {/* Minimal header */}
      <header className="border-b border-border bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="NexDyne home">
            <img src="/brand/logo-mixed.svg" alt="NexDyne Consulting Group" className="h-6 w-auto" />
          </Link>
          <a href="#get-guide" onClick={scrollToForm}
            className="hidden sm:inline-block bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary-hover transition-colors">
            Get the guide
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>The SMB AI Readiness Guide</Eyebrow>
              <h1 className="nx-h1 text-charcoal mt-6">Is your business actually ready for AI?</h1>
              <p className="nx-lead text-charcoal/70 mt-6 max-w-xl">
                A free, 10-question diagnostic for growing companies. Evaluate your processes, data,
                workforce, and governance — and know whether AI will pay off before you spend a dollar.
              </p>

              <div className="mt-9 space-y-3.5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal/50">What you'll learn</p>
                {LEARN.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 w-4 h-4 text-primary flex-none" strokeWidth={3} />
                    <span className="text-[15px] leading-snug text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.1em] text-charcoal/45">
                <span>Free</span><span className="w-1 h-1 bg-charcoal/25" />
                <span>10 questions</span><span className="w-1 h-1 bg-charcoal/25" />
                <span>~15 minutes</span>
              </div>
            </div>

            {/* Form card — sharp, bordered, editorial */}
            <div id="get-guide" className="md:sticky md:top-24 scroll-mt-24">
              <div className="bg-white border border-border">
                {done ? (
                  <div className="p-8 text-center">
                    <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="nx-h3 text-charcoal">Check your inbox.</h2>
                    <p className="mt-3 text-charcoal/70 text-[15px] leading-relaxed">
                      We've emailed your copy of <strong>The SMB AI Readiness Guide</strong>. You can also download it now:
                    </p>
                    <a href={GUIDE_PDF} download className={BTN + " mt-5 w-full text-center"}>
                      Download the guide
                    </a>
                    <p className="mt-6 text-sm text-charcoal/60 leading-relaxed">
                      Landed in the middle? That's where the right first move matters most. Reply to the email to request an <strong>AI &amp; Operations Readiness Assessment</strong>.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="bg-charcoal px-7 py-6">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-primary" />
                        <span className="nx-eyebrow text-white/60">Free download</span>
                      </div>
                      <h2 className="nx-h3 text-white mt-3">Get the free guide</h2>
                    </div>
                    <form onSubmit={onSubmit} className="p-7 space-y-4">
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-charcoal/60 mb-1.5">Work email <span className="text-primary">*</span></label>
                        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={inputCls + (emailError ? " border-primary" : "")} />
                        {emailError && <p className="text-primary text-sm mt-1">{emailError}</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-charcoal/60 mb-1.5">First name</label>
                        <input type="text" name="firstName" value={form.firstName} onChange={onChange} placeholder="Jordan" className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-charcoal/60 mb-1.5">Company</label>
                        <input type="text" name="company" value={form.company} onChange={onChange} placeholder="Acme Inc." className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-charcoal/60 mb-1.5">Role <span className="text-charcoal/35 lowercase tracking-normal font-normal">(optional)</span></label>
                        <input type="text" name="role" value={form.role} onChange={onChange} placeholder="COO / Operations lead" className={inputCls} />
                      </div>
                      <TurnstileWidget appearance="interaction-only" onVerify={setToken} onExpire={() => setToken(null)} />
                      <button type="submit" disabled={submitting} className={BTN + " w-full text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"}>
                        {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : "Get the Free Guide"}
                      </button>
                      <p className="text-xs text-center text-charcoal/50 leading-relaxed">
                        By requesting the guide you'll also get occasional practical insights for growing companies. Unsubscribe anytime. See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
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
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="max-w-2xl">
            <Eyebrow>What's inside</Eyebrow>
            <h2 className="nx-h2 text-charcoal mt-6">A diagnostic, not a lecture.</h2>
            <p className="nx-lead text-charcoal/65 mt-5">
              Ten questions you can score honestly in fifteen minutes — and a clear read on what to do next.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIDE.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-border p-7 hover:border-primary/50 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                <div className="h-px w-8 bg-charcoal/10 my-5" />
                <h3 className="text-lg font-bold text-charcoal leading-snug">{title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY READINESS FIRST */}
      <section className="bg-[#FEFEFE] border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Why readiness comes first</Eyebrow>
              <h2 className="nx-h2-split text-charcoal mt-6">Most AI projects fail before implementation even begins.</h2>
              <p className="text-[15px] md:text-base text-charcoal/70 leading-relaxed mt-5">
                Not because the technology is wrong — because the process was unclear, the data was scattered,
                no one owned the outcome, or human judgment got automated away. Technology can't compensate for
                any of that. Point AI at those gaps and it amplifies them, faster and at scale.
              </p>
              <p className="text-[15px] md:text-base text-charcoal/70 leading-relaxed mt-4">
                This guide helps you find those gaps first — so your first AI investment is one that actually
                pays off. That's what we mean by <strong>human intelligence, governed and scaled.</strong>
              </p>
              <a href="#get-guide" onClick={scrollToForm} className={BTN + " mt-8"}>Get the free guide</a>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img src="/images/ai-readiness-guide-peek.png" alt="" aria-hidden
                  className="absolute -right-5 top-6 w-40 border border-border shadow-[0_16px_36px_-18px_rgba(0,0,0,0.25)]" />
                <img src="/images/ai-readiness-guide-cover.png" alt="The SMB AI Readiness Guide — cover"
                  className="relative w-52 border border-border shadow-[0_22px_50px_-18px_rgba(0,0,0,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-6 nx-section">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="nx-eyebrow text-charcoal/60">Questions, answered</span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="nx-h2 text-charcoal mt-5">Before you download.</h2>
          </div>
          <div className="mt-10 border-t border-border">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer" aria-expanded={open}>
                    <span className="font-semibold text-[15px] md:text-base text-charcoal">{f.q}</span>
                    <span className="flex-none w-6 h-6 border border-border flex items-center justify-center text-charcoal/60">
                      {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {open && <p className="pb-6 -mt-1 text-charcoal/70 leading-relaxed text-[15px]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark authority */}
      <section className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 nx-section text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="nx-eyebrow text-white/60">The SMB AI Readiness Guide</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="nx-h2 text-white mt-6 max-w-2xl mx-auto">Know whether you're ready — before you spend a dollar.</h2>
          <p className="nx-lead text-white/55 mt-5 max-w-xl mx-auto">
            Ten questions. Fifteen minutes. A clear, honest read on your next move.
          </p>
          <a href="#get-guide" onClick={scrollToForm} className={BTN + " mt-9"}>Get the free guide</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/50">
          <span>© {new Date().getFullYear()} NexDyne Consulting Group</span>
          <div className="flex items-center gap-6 uppercase tracking-[0.08em]">
            <a href="/privacy" className="hover:text-charcoal">Privacy</a>
            <a href="/about" className="hover:text-charcoal">About</a>
            <a href="/" className="hover:text-charcoal">nexdynegroup.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
