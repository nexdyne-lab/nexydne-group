import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface InsightsFeaturedHeroProps {
  featuredArticle: {
    slug: string;
    title: string;
    dek: string;
    heroImage: string;
    topic: string;
    readTime: string;
    date: string;
  };
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function InsightsFeaturedHero({
  featuredArticle,
}: InsightsFeaturedHeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src={featuredArticle.heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      </div>
      <div className="relative container px-4 sm:px-6 md:px-12 min-h-[76vh] flex items-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="w-full max-w-2xl bg-off-white/95 backdrop-blur-sm border-t-[3px] border-primary p-8 sm:p-10 lg:p-12 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]"
        >
          <span className="nx-eyebrow text-primary">Insights · Featured</span>
          <h1 className="nx-h1 text-charcoal mt-4">{featuredArticle.title}</h1>
          <p className="nx-lead text-muted-foreground mt-5">{featuredArticle.dek}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-charcoal/60">
            <span className="font-medium text-charcoal/80">{featuredArticle.topic}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-charcoal/30" />
            <span>{featuredArticle.readTime}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-charcoal/30" />
            <span>{featuredArticle.date}</span>
          </div>
          <Link href={`/insights/${featuredArticle.slug}`}>
            <span className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
