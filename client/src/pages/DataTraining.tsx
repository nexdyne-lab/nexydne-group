import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, BookOpen, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataTraining() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Training' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Data Training
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Give your employees the knowledge and skills they need to get data under control, from foundational concepts to advanced analytics techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Practical from day one</h3>
              <p className="text-gray-700 leading-relaxed">
                Real-world training that applies directly to day-to-day work. Forget theory—we're talking real use cases and immediate application.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">All skill levels</h3>
              <p className="text-gray-700 leading-relaxed">
                From data specialists to end users, whether they're just getting started or want to dive into advanced techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert instructors</h3>
              <p className="text-gray-700 leading-relaxed">
                Courses delivered by professionals who live and breathe data, keen to share their knowledge and real-world experience.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customized content</h3>
              <p className="text-gray-700 leading-relaxed">
                Company-specific training or complete courses, specially designed for your teams and your data challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding Data Training</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Building organizational capability
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              When it comes to data, it's not the technology that's the bottleneck anymore. It's knowing what, how, and why. With us, training doesn't mean just taking a course. We actually help your technical teams and business users with hands-on knowledge of the data world—whether it's SQL, Python, analytics tools, or specific platforms you use. Our training courses are available out of the box, but we always tailor them to specific needs. There's one constant, though: we don't do theory, just practical knowledge that can be deployed right away.
            </p>
            <p>
              We believe in making organizations self-reliant. That's why, as well as traditional training, we also offer training on the job that fits alongside ongoing projects. We teach your teams not only how to use solutions, but more than anything how to manage them. Because one thing is clear: we want you to get ahead without us. No need for constant consultation when we pass on real knowledge that makes your organization stronger.
            </p>
            <p>
              Data literacy isn't just for technical teams. Business users who understand data fundamentals make better decisions, ask better questions, and use analytics more effectively. We design training programs that build data skills across the organization—from executives who need to interpret dashboards to analysts who need to build complex models. Each program is tailored to the audience's role, technical background, and learning objectives.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#2D5BFF] p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-gray-700 mb-4">
              "We invested in a data platform but our teams didn't know how to use it effectively. NexDyne's training program changed that. They taught our analysts SQL and data modeling, our business users how to interpret dashboards, and our IT team how to manage the infrastructure. Six months later, we're finally seeing the ROI we expected from our data investments."
            </p>
            <p className="font-semibold text-gray-900">Director of Analytics, Healthcare Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8">
              Learning that sticks
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Training fails when it's disconnected from real work. We design learning experiences that use your actual data, address your specific challenges, and enable immediate application of new skills.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Assess Needs & Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding your teams' current skill levels, roles, and learning objectives. What do they need to accomplish? What knowledge gaps are holding them back? We design training programs that address specific needs rather than generic curriculum. For technical teams, this might mean deep dives into SQL optimization or machine learning. For business users, it might mean dashboard interpretation or data-driven decision making.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Deliver Hands-On Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Training sessions use your actual data and business scenarios whenever possible. Participants work through real problems they'll encounter in their roles. We balance instruction with hands-on practice—concepts are explained clearly, then immediately applied in exercises. Instructors provide feedback and guidance as participants work through challenges. For technical training, this includes coding exercises and troubleshooting. For business users, this includes interpreting dashboards and making data-driven recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Support & Reinforce</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learning doesn't end when training does. We provide reference materials, code samples, and documentation that participants can use back on the job. For ongoing projects, we offer "training on the job" where our experts work alongside your team, teaching through real work rather than classroom exercises. We're available for questions and guidance as teams apply new skills. Follow-up sessions reinforce learning and address challenges that emerge during real-world application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Training Programs</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Build data skills across your organization
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Fundamentals for Business Users</h3>
              <p className="text-gray-700 leading-relaxed">
                Build data literacy across your organization. Understand how data is collected, stored, and analyzed. Learn to interpret dashboards, ask good questions, and make data-informed decisions.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">SQL & Database Essentials</h3>
              <p className="text-gray-700 leading-relaxed">
                Master SQL for data analysis. Write queries to extract, filter, and aggregate data. Understand database structures, joins, and optimization techniques for efficient data retrieval.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Visualization & Dashboards</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn to build effective dashboards using tools like Tableau, Power BI, or Looker. Design visualizations that communicate insights clearly and drive action.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Python for Data Analysis</h3>
              <p className="text-gray-700 leading-relaxed">
                Use Python for data manipulation, analysis, and automation. Work with pandas, numpy, and visualization libraries to analyze datasets and generate insights.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Engineering Fundamentals</h3>
              <p className="text-gray-700 leading-relaxed">
                Build and maintain data pipelines. Understand ETL processes, data quality, and infrastructure management. Learn best practices for reliable data operations.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Analytics & Statistics</h3>
              <p className="text-gray-700 leading-relaxed">
                Apply statistical methods to business problems. Understand hypothesis testing, regression analysis, and predictive modeling. Make statistically sound recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Complete data solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-analytics" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Analytics
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Build dashboards and analytics that your trained teams can use effectively to drive better business decisions.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-consultancy" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Consultancy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Augment your team with experienced data professionals who can mentor your staff while delivering results.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to build data skills?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how data training can build the capabilities your organization needs to succeed with data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#2D5BFF] hover:bg-[#1e40af] text-white">
                Schedule consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
