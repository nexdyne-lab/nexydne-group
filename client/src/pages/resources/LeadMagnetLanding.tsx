import { useState, useRef } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import NotFound from "@/pages/NotFound";
import {
  CheckCircle2,
  Loader2,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
} from "lucide-react";
import { LEAD_MAGNETS, type LeadMagnetConfig } from "./leadMagnets";

const BTN_RED =
  "inline-block whitespace-nowrap bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary-hover transition-colors cursor-pointer";
const BTN_LIGHT =
  "inline-block whitespace-nowrap bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal hover:bg-white/90 transition-colors cursor-pointer";
const BTN_DARK =
  "inline-block whitespace-nowrap bg-charcoal px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-charcoal/90 transition-colors cursor-pointer";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className={"nx-eyebrow " + (light ? "text-white/70" : "text-charcoal/60")}>{children}</span>
    </div>
  );
}

/** Cover + page-peek collage, framed to read on a dark hero. */
function Mockup({ cover, peek, alt }: { cover: string; peek?: string; alt: string }) {
  return (
    <div className="relative w-[300px] sm:w-[360px]">
      {peek && (
        <img src={peek} alt="" aria-hidden
          className="absolute -right-6 -bottom-6 w-48 border border-white/15 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] rotate-3" />
      )}
      <img src={cover} alt={alt}
        className="relative w-[260px] sm:w-[300px] border border-white/15 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/10 -rotate-2" />
    </div>
  );
}

/** Route entry: resolves the slug to a config, or renders the site 404. */
export function LeadMagnetLandingRoute({ params }: { params?: { slug?: string } }) {
  const cfg = params?.slug ? LEAD_MAGNETS[params.slug] : undefined;
  if (!cfg) return <NotFound />;
  return <LeadMagnetLanding config={cfg} />;
}

export function LeadMagnetLanding({ config }: { config: LeadMagnetConfig }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scroller = useRef<HTMLDivElement>(null);

  const open = () => setModalOpen(true);
  const scrollCards = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO title={config.seoTitle} description={config.seoDescription} canonical={`/resources/${config.slug}`} />

      {/* FAQPage structured data — the page's real FAQ, machine-readable for
          search + AI answer engines (GEO). */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: config.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Header — minimal, centered wordmark */}
      <header className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center">
          <Link href="/" aria-label="NexDyne home">
            <img src="/brand/logo-mixed.svg" alt="NexDyne Consulting Group" className="h-6 w-auto" />
          </Link>
        </div>
      </header>

      {/* HERO — dark band, copy left, mockup right */}
      <section className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block border border-white/25 text-white/80 text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5">
                {config.heroTag}
              </span>
              <h1 className="nx-h1 text-white mt-6">{config.headline}</h1>
              <p className="nx-lead text-white/65 mt-6 max-w-xl">{config.subhead}</p>
              <button onClick={open} className={BTN_RED + " mt-9"}>{config.heroCtaLabel}</button>
            </div>
            <div className="flex justify-center md:justify-end">
              <Mockup cover={config.cover} peek={config.peek} alt={`${config.headline} — cover`} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE — carousel */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>{config.contentsEyebrow}</Eyebrow>
              <h2 className="nx-h2 text-charcoal mt-6">Here's what you'll get.</h2>
            </div>
            <div className="hidden sm:flex gap-2 flex-none">
              <button onClick={() => scrollCards(-1)} aria-label="Previous"
                className="w-11 h-11 border border-border flex items-center justify-center text-charcoal/60 hover:border-primary/50 hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollCards(1)} aria-label="Next"
                className="w-11 h-11 border border-border flex items-center justify-center text-charcoal/60 hover:border-primary/50 hover:text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div ref={scroller}
            className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {config.contents.map((c, i) => (
              <div key={i}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white border border-border p-8 hover:border-primary/50 transition-colors duration-300">
                <div className="text-primary font-bold text-2xl tracking-tight">{String(i + 1).padStart(2, "0")}</div>
                <div className="h-px w-8 bg-charcoal/10 my-5" />
                <p className="text-[15px] leading-relaxed text-charcoal/80">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPGRADE / reinforcement */}
      <section className="bg-[#FEFEFE] border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>{config.upgradeEyebrow}</Eyebrow>
              <h2 className="nx-h2-split text-charcoal mt-6">{config.upgradeHeading}</h2>
              {config.upgradeParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] md:text-base text-charcoal/70 leading-relaxed mt-4"
                   dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <button onClick={open} className={BTN_RED + " mt-8"}>{config.upgradeCtaLabel}</button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[300px]">
                {config.peek && (
                  <img src={config.peek} alt="" aria-hidden
                    className="absolute -left-6 -top-4 w-40 border border-border shadow-[0_16px_36px_-18px_rgba(0,0,0,0.22)] -rotate-3" />
                )}
                <img src={config.cover} alt={`${config.headline} — inside`}
                  className="relative w-56 ml-auto border border-border shadow-[0_22px_50px_-18px_rgba(0,0,0,0.35)] rotate-2" />
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
            <h2 className="nx-h2 text-charcoal mt-5">{config.faqHeading}</h2>
          </div>
          <div className="mt-10 border-t border-border">
            {config.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer" aria-expanded={isOpen}>
                    <span className="font-semibold text-[15px] md:text-base text-charcoal">{f.q}</span>
                    <span className="flex-none w-6 h-6 border border-border flex items-center justify-center text-charcoal/60">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {isOpen && <p className="pb-6 -mt-1 text-charcoal/70 leading-relaxed text-[15px]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark band */}
      <section className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="nx-eyebrow text-white/60">{config.finalEyebrow}</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="nx-h2 text-white mt-6 max-w-2xl mx-auto">{config.finalHeading}</h2>
          <button onClick={open} className={BTN_LIGHT + " mt-9"}>{config.finalCtaLabel}</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/50">
          <span>© {new Date().getFullYear()} NexDyne Consulting Group</span>
          <div className="flex items-center gap-6 uppercase tracking-[0.08em]">
            <a href="/privacy" className="hover:text-charcoal">Privacy</a>
            <a href="/about" className="hover:text-charcoal">About</a>
            <a href="/contact" className="hover:text-charcoal">Contact</a>
            <a href="/" className="hover:text-charcoal">nexdynegroup.com</a>
          </div>
        </div>
      </footer>

      {modalOpen && <CaptureModal config={config} onClose={() => setModalOpen(false)} />}
    </div>
  );
}

/** Capture form in a modal — opens from any CTA (HubSpot pattern). */
function CaptureModal({ config, onClose }: { config: LeadMagnetConfig; onClose: () => void }) {
  const [form, setForm] = useState({ firstName: "", email: "", company: "", role: "" });
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const requestGuide = trpc.resources.requestGuide.useMutation();
  const validEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const downloadUrl = `/api/download/${config.slug}`;

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
        slug: config.slug,
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
    "w-full px-4 py-3 border border-border text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        {done ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="nx-h3 text-charcoal">{config.successHeading}</h2>
            <p className="mt-3 text-charcoal/70 text-[15px] leading-relaxed">{config.successBody}</p>
            <a href={downloadUrl} download className={BTN_RED + " mt-5 w-full text-center"}>Download the guide</a>
            <p className="mt-6 text-sm text-charcoal/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: config.successCtaLine }} />
          </div>
        ) : (
          <>
            <div className="bg-charcoal px-7 py-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="nx-eyebrow text-white/60">{config.formSub}</span>
              </div>
              <h2 className="nx-h3 text-white mt-3">{config.formHeading}</h2>
            </div>
            <form onSubmit={onSubmit} className="p-7 space-y-4">
              <div>
                <label className="block text-[13px] font-semibold uppercase tracking-[0.08em] text-charcoal/60 mb-1.5">Work email <span className="text-primary">*</span></label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={inputCls + (emailError ? " border-primary" : "")} autoFocus />
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
              <button type="submit" disabled={submitting} className={BTN_RED + " w-full text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"}>
                {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>) : (<>{config.ctaLabel} <ArrowRight className="w-4 h-4" /></>)}
              </button>
              <p className="text-xs text-center text-charcoal/50 leading-relaxed">
                By requesting this you'll also get occasional practical insights for growing companies. Unsubscribe anytime. See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default LeadMagnetLanding;
