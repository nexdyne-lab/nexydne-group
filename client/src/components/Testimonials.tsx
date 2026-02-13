import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "NexDyne transformed our operations in ways we didn't think possible. Within six months, we reduced processing time by 70% and freed our team to focus on strategic initiatives rather than manual data entry.",
    author: "Sarah Mitchell",
    title: "Chief Operating Officer",
    company: "Meridian Financial Group",
    initials: "SM"
  },
  {
    quote: "The ROI exceeded our expectations. We saw a 340% return in the first year alone. More importantly, our customer satisfaction scores improved dramatically as we eliminated errors and delays.",
    author: "David Chen",
    title: "VP of Technology",
    company: "Pacific Logistics Partners",
    initials: "DC"
  },
  {
    quote: "What sets NexDyne apart is their deep understanding of mid-market challenges. They didn't just implement technology—they helped us reimagine our processes and build lasting capabilities.",
    author: "Jennifer Rodriguez",
    title: "CEO",
    company: "Cascade Healthcare Systems",
    initials: "JR"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-28 bg-[#F5F5F5]">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A]/60 mb-4 sm:mb-6 block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 sm:mb-6 font-serif text-[#1A1A1A] px-2 sm:px-0">
            Trusted by industry leaders
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/70">
            Hear from executives who have transformed their organizations with NexDyne.
          </p>
        </div>

        {/* Testimonials - Horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-4 sm:mx-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth px-4 sm:px-0 pb-4 sm:pb-0 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm flex-shrink-0 w-[85vw] sm:w-auto snap-center"
              >
              {/* Quote Icon */}
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0077B5]/20 mb-4 sm:mb-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed mb-4 sm:mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#1A1A1A]/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#051C2C] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A] text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-[#1A1A1A]/60">{testimonial.title}</div>
                  <div className="text-xs sm:text-sm text-[#0077B5]">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator for mobile */}
          <div className="flex sm:hidden justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-[#1A1A1A]/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Single testimonial card for use in other sections
export function TestimonialCard({ 
  quote, 
  author, 
  title, 
  company, 
  initials,
  variant = "light"
}: Testimonial & { variant?: "light" | "dark" }) {
  const bgColor = variant === "light" ? "bg-slate-50" : "bg-slate-800";
  const textColor = variant === "light" ? "text-slate-700" : "text-white/90";
  const authorColor = variant === "light" ? "text-slate-900" : "text-white";
  const subtitleColor = variant === "light" ? "text-slate-600" : "text-white/70";
  const borderColor = variant === "light" ? "border-slate-200" : "border-white/10";
  const quoteColor = variant === "light" ? "text-blue-600" : "text-blue-400";
  const avatarBg = variant === "light" ? "bg-slate-300" : "bg-slate-600";
  const avatarText = variant === "light" ? "text-slate-600" : "text-white";

  return (
    <div className={`${bgColor} p-8 md:p-12 rounded-2xl border ${borderColor}`}>
      <svg 
        className={`w-12 h-12 ${quoteColor} mb-6`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className={`text-xl md:text-2xl ${textColor} leading-relaxed mb-6`}>
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 ${avatarBg} rounded-full flex items-center justify-center ${avatarText} font-bold text-lg`}>
          {initials}
        </div>
        <div>
          <div className={`font-semibold ${authorColor}`}>{author}</div>
          <div className={subtitleColor}>{title}, {company}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
