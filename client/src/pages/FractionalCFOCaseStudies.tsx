import { Link } from 'wouter';
import { ArrowRight, TrendingUp, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function FractionalCFOCaseStudies() {
  const caseStudies = [
    {
      id: 'medical-device-growth',
      icon: Target,
      title: 'Identifying and Capturing Growth Opportunities',
      company: 'Mid-Market Medical Device Manufacturer',
      industry: 'Healthcare Manufacturing',
      challenge: 'Needed to identify high-potential growth themes and strategic investment channels',
      result: 'Successfully prioritized investment channels and identified strategic partners for collaboration and acquisition',
      metrics: [
        { label: 'Growth Themes Identified', value: '12+' },
        { label: 'Strategic Partners Evaluated', value: '25+' },
        { label: 'Investment Channels Prioritized', value: '5' }
      ],
      image: '/images/case-studies/medical-device.jpg',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'retail-market-expansion',
      icon: TrendingUp,
      title: 'Market Analysis and Strategic Expansion',
      company: 'Regional Consumer Electronics Retailer',
      industry: 'Retail',
      challenge: 'Fifth in market position with untapped expansion potential across regions',
      result: 'Doubled market share in two years, moving from fifth to second in the market',
      metrics: [
        { label: 'Market Share Growth', value: '2x' },
        { label: 'Market Position', value: '5th → 2nd' },
        { label: 'Time to Achievement', value: '24 months' }
      ],
      image: '/images/case-studies/retail-expansion.jpg',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'saas-category-leadership',
      icon: DollarSign,
      title: 'Shifting Mindsets to Drive Performance',
      company: 'B2B SaaS Platform',
      industry: 'Software & Technology',
      challenge: 'Stuck as a fast follower, needed to transition to category leadership',
      result: 'Funded breakthrough product pipeline with 5+ new revenue streams generating $50M+ ARR potential',
      metrics: [
        { label: 'New Revenue Streams', value: '5+' },
        { label: 'Potential ARR', value: '$50M+' },
        { label: 'Strategic Shift', value: 'Follower → Leader' }
      ],
      image: '/images/case-studies/saas-leadership.jpg',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                Case Studies
              </div>
              <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
                Fractional CFO Success Stories
              </h1>
              <p className="text-xl text-muted-foreground/50 leading-relaxed">
                Discover how NexDyne's Fractional CFO services have transformed financial functions from back-office necessities into strategic growth engines for mid-market companies.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container">
            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <Link key={study.id} href={`/case-studies/${study.id}`}>
                    <div className="group cursor-pointer">
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        {/* Image - Alternating sides */}
                        <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                          <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded-xl sm:rounded-2xl">
                            <div className={`w-full h-full bg-gradient-to-br ${study.gradient} opacity-20`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                          <div className="inline-flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                              {study.industry}
                            </div>
                          </div>

                          <h2 className="text-3xl font-bold text-charcoal mb-4 group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h2>

                          <div className="mb-6">
                            <div className="text-sm font-semibold text-muted-foreground mb-2">Company</div>
                            <div className="text-lg text-charcoal">{study.company}</div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm font-semibold text-muted-foreground mb-2">Challenge</div>
                            <p className="text-charcoal/80 leading-relaxed">{study.challenge}</p>
                          </div>

                          <div className="mb-5 sm:mb-6 md:mb-8">
                            <div className="text-sm font-semibold text-muted-foreground mb-2">Result</div>
                            <p className="text-charcoal font-medium leading-relaxed">{study.result}</p>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 sm:p-5 md:p-6 mb-5 sm:mb-6 md:mb-8">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx}>
                                <div className="text-2xl font-bold text-charcoal mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                            Read full case study <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-6 sm:p-8 md:p-12 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Ready to professionalize your finance function?
              </h2>
              <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                Don't let financial opacity hold back your growth. Our Fractional CFO services provide the leadership you need, when you need it.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-lg rounded-full">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
