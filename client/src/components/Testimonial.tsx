import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

export function Testimonial({ quote, name, title, company, image }: TestimonialProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <Quote className="w-10 h-10 text-cyan-500 mb-4" />
      <p className="text-slate-700 text-lg mb-6 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xl">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="text-sm text-slate-500">{company}</p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

export function TestimonialSection({ testimonials, title = "What Our Clients Say", subtitle }: TestimonialSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
