import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NativeApps() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "iOS Native (Swift)",
      description:
        "Swift and SwiftUI engineered for the device. We build apps that feel like first-party Apple — fluid, responsive, and at home on every iPhone and iPad screen size.",
      link: "/solutions/native-apps/ios-native",
    },
    {
      title: "Android Native (Kotlin)",
      description:
        "Kotlin and Jetpack Compose for the full Android device matrix. Material 3 fidelity, deep integration with Google services, and the performance ceiling of pure native.",
      link: "/solutions/native-apps/android-native",
    },
    {
      title: "Native UX/UI Design",
      description:
        "Platform-respecting interaction design. We design to the Human Interface Guidelines and Material spec — not against them — so the app feels native, not ported.",
      link: "/solutions/native-apps/native-ux-ui",
    },
    {
      title: "Native Modernization",
      description:
        "Replatform legacy hybrid or aging Objective-C and Java codebases onto modern Swift and Kotlin. Cut crash rates, restore feature velocity, and unlock platform features.",
      link: "/solutions/native-apps/native-modernization",
    },
    {
      title: "Native Performance Optimization",
      description:
        "Frame-by-frame profiling, memory tuning, battery-conscious architecture. When the App Store ranking depends on speed, we deliver the milliseconds that matter.",
      link: "/solutions/native-apps/performance-optimization",
    },
    {
      title: "Native App Analytics & Instrumentation",
      description:
        "Crash analytics, funnel telemetry, A/B infrastructure, and event taxonomy. The team that measures the device beats the team that guesses about it.",
      link: "/solutions/native-apps/analytics-instrumentation",
    },
  ];

  const outcomes = [
    {
      // TODO: replace with real stat
      stat: "60+",
      label: "native iOS and Android apps shipped to the App Store and Play Store",
    },
    {
      // TODO: replace with real stat
      stat: "73%",
      label: "average crash rate reduction after a native modernization engagement",
    },
    {
      // TODO: replace with real stat
      stat: "4.0",
      label: "median App Store and Play Store rating across our shipped portfolio",
    },
  ];

  const approach = [
    {
      title: "Decide Native, Decide Why",
      description:
        "Native is a choice with cost. We make it for performance, platform integration, or App Store positioning — never by default.",
      link: "/solutions/native-apps/native-ux-ui",
    },
    {
      title: "Design to the Platform",
      description:
        "Apple and Google have spent decades shaping interaction patterns. We design with their grain, not against it, for instant familiarity.",
      link: "/solutions/native-apps/native-ux-ui",
    },
    {
      title: "Engineer for the Device",
      description:
        "Native means leveraging the device — Metal, Core ML, ARKit, CameraX, sensors. We architect to use what's there, not abstract it away.",
      link: "/solutions/native-apps/performance-optimization",
    },
    {
      title: "Instrument Before Launch",
      description:
        "Crash analytics, performance traces, and event telemetry ship with v1. The native app that measures itself improves; the one that doesn't decays.",
      link: "/solutions/native-apps/analytics-instrumentation",
    },
  ];

  const cases = [
    {
      industry: "Media & Entertainment",
      title: "Streaming Service Cuts Startup Time by 62% with a Swift Rewrite",
      description:
        "A legacy hybrid app rebuilt natively in Swift restored category-leading launch performance and lifted day-one viewership.",
      image: "/images/case-native-streaming.jpg",
      link: "/cases/streaming-native-rewrite",
    },
    {
      industry: "Healthcare",
      title: "Medical Device App Achieves Sub-100ms Response on Kotlin Native",
      description:
        "A regulated Android app demanding real-time sensor fusion required pure Kotlin native — and the precision it delivered.",
      image: "/images/case-native-medical.jpg",
      link: "/cases/medical-native-kotlin",
    },
  ];

  const relatedOfferings = [
    {
      title: "Mobile Apps",
      link: "/solutions/mobile-apps",
    },
    {
      title: "Cross-Platform Apps",
      link: "/solutions/cross-platform-apps",
    },
    {
      title: "Mobile UX Design",
      link: "/solutions/mobile-ux-design",
    },
    {
      title: "App Modernization",
      link: "/solutions/app-modernization",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Native Apps"
        description="Pure native iOS (Swift) and Android (Kotlin) development for apps where performance, platform integration, and App Store positioning matter."
        canonical="/solutions/native-apps"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero */}
      <SolutionHero
        eyebrow="SOLUTION · NATIVE APPS"
        title="Native Apps"
        subtitle="Pure native iOS and Android — Swift and Kotlin — for apps where performance, platform integration, and App Store positioning are the difference between leading and lagging."
        backgroundImage="/images/solution-native-apps.jpg"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
      />

      {/* SLOT 2 — White lead / editorial intro */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[72ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Perspective
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Cross-platform is the right answer most of the time. Native is the right answer when it isn't.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                For roughly seventy percent of mobile programs, React Native or Flutter
                is the right call. For the other thirty — apps where the performance
                ceiling, platform integration, or App Store ranking decides the
                business outcome — pure native still wins. The challenge is knowing
                which side of that line your product sits on, and committing fully
                once you do.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                NexDyne's{" "}
                <Link
                  href="/insights/native-vs-cross-platform"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  native mobile consultants
                </Link>{" "}
                build Swift and Kotlin apps that use the device — Metal, Core ML,
                CameraX, the full sensor stack — and ship with the instrumentation
                discipline of teams that have lived through one hypergrowth launch
                already.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light grey service grid (six sub-offerings) */}
      <section className="bg-grey py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              How We Help Clients
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six ways we ship native that earns the App Store front page.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              We combine deep platform fluency in Swift and Kotlin with the
              instrumentation discipline of teams that have shipped through scale —
              delivering apps that feel native, perform native, and rank native.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={service.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col">
                    <h3 className="text-xl text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                      {service.description}
                    </p>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White Outcome / Real Results stat cluster */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Experience & Impact
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Measurable outcomes from native apps in production.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${
                  i > 0 ? "md:border-l md:border-charcoal/10 md:pl-10" : ""
                }`}
              >
                {/* TODO: replace with real stat */}
                <div
                  className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-5"
                  style={{ fontWeight: 500, letterSpacing: "-0.03em" }}
                >
                  {item.stat}
                </div>
                <div className="text-base text-charcoal/75 leading-[1.55] max-w-[30ch]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Light grey Approach / Methodology framework */}
      <section className="bg-grey py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              How We Think About It
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              The Native-First Framework
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Four integrated phases that take a native app from platform decision to
              App Store ranking — without the architectural detours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={step.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 flex flex-col">
                    <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 leading-[1.55] flex-1">
                      {step.description}
                    </p>
                    <span className="mt-6 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Explore
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 6 — ORANGE-RED SIGNAL SECTION (the single bg-primary moment) */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              The Outcome
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Apps that the App Store rewards. NexDyne native clients ship faster
              startups, smoother frames, and the kind of category rankings that
              compound into install velocity.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              We've built consumer, enterprise, and regulated-industry native apps
              from MVP through hyperscale — treating performance, accessibility, and
              observability as launch features, not later phases.
            </p>
            <Link href="/cases">
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                See How We Help Leaders Win
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 7 — White Case studies / proof */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Client Results
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Native apps, proved in outcomes.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={result.link} className="group block cursor-pointer">
                  <div className="border border-charcoal/10 bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                        {result.industry}
                      </span>
                      {/* TODO: replace with real stat */}
                      <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-base text-charcoal/75 leading-[1.55] mb-6">
                        {result.description}
                      </p>
                      <span className="text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                        Read Case
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/cases">
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SLOT 8 — White Related capabilities / cross-sell */}
      <section className="bg-white py-24 md:py-32 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Related Offerings
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Adjacent capabilities for a complete mobile program.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {relatedOfferings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={offering.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col justify-between min-h-[200px]">
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read More
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 9 — Charcoal closing CTA "Ready to Talk?" */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                  Ready to Talk?
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-10"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Bring our native team into your next App Store conversation.
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-6 max-w-[52ch]">
                  I want to talk to your experts in:
                </p>
                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/40 rounded-none text-base text-white py-6 focus:ring-0 focus:border-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="media">Media & Entertainment</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-8 max-w-[52ch]">
                  We work with leaders who treat the App Store ranking as a business
                  metric — not a marketing one — and want a native partner that ships
                  with the device, not against it.
                </p>
                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-white/30 px-4 py-4 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                  />
                  <Link href="/contact">
                    <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                      Contact us
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
