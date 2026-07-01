import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Careers() {
  const jobCategories = [
    "Management Consulting",
    "Analytics, Data, & Research",
    "Business Operations",
    "Design",
    "Marketing",
    "Product Management & Innovation",
    "Talent & Human Resources",
    "Technology & Engineering",
  ];

  const careerStories = [
    {
      name: "Jennifer Liu",
      role: "Senior Consultant → Partner",
      image: "/images/hero-team.jpg",
    },
    {
      name: "Raj Patel",
      role: "Data Analyst → Director",
      image: "/images/digital-transformation-abstract.jpg",
    },
    {
      name: "Michael Torres",
      role: "Associate → Principal",
      image: "/images/ai-team-consulting.jpg",
    },
    {
      name: "David Williams",
      role: "Engineer → VP Technology",
      image: "/images/cloud-abstract.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Careers | NexDyne Consulting Group" 
        description="Build your career at NexDyne. Join a team where your expertise drives real impact. Explore opportunities in consulting, analytics, technology, and more."
        canonical="/careers"
      />
      <Navigation />
      
      {/* McKinsey-Style Hero Section - Full Width Background Image */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end pt-16 overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-team-2.webp" 
            alt="Diverse team collaborating in modern office" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 sm:px-6 md:px-12 relative z-10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-4 italic eb-garamond">
              Big challenges.
              <br />
              Bigger growth.
            </h1>
            <Button className="bg-primary hover:bg-charcoal text-charcoal px-8 py-4 text-base font-medium rounded-none">
              Search Jobs <Search className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* White Content Card Section - McKinsey Style */}
      <section className="relative z-20 -mt-8 md:-mt-12">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg p-8 md:p-12 max-w-3xl"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              At NexDyne, you'll be in the room when the stakes are highest, working on 
              transformational challenges that shape industries across Africa and beyond.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              The pace is demanding and expectations are high, but you'll learn faster 
              here than anywhere else, supported by teams that are committed to making 
              each other—and our clients—better. Whether you're with us for two years 
              or 20, the skills you build will make you a leader ahead of your peers 
              and change the trajectory of your career.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <a href="#why-nexdyne" className="text-primary font-medium hover:underline inline-flex items-center">
                Why NexDyne <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Categories Navigation */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-charcoal mb-8"
          >
            Explore opportunities
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {jobCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-5 py-3 text-sm font-medium text-charcoal/80 bg-subtle hover:bg-primary-hover hover:text-white transition-colors rounded-sm"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Career Stories Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
            {/* Left Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-64 flex-shrink-0"
            >
              <div className="bg-primary text-charcoal px-6 py-4 inline-block">
                <span className="text-sm font-bold uppercase tracking-wider">Career Stories</span>
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
                  Build the career you never imagined
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  No two paths at NexDyne are the same, and many of us find ourselves in roles 
                  far from where we started. The opportunity is endless.
                </p>
              </motion.div>

              {/* Career Story Circles with Connecting Lines */}
              <div className="relative py-12">
                {/* Connecting line background */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 hidden md:block" style={{ transform: 'translateY(-50%)' }} />
                
                {/* Dots on the line */}
                <div className="absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-primary hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[40%] w-2 h-2 rounded-full bg-primary hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[65%] w-2 h-2 rounded-full bg-primary hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[90%] w-2 h-2 rounded-full bg-primary hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />

                <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 relative z-10">
                  {careerStories.map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 group-hover:border-primary-hover transition-colors">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground text-center">{story.role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <Button className="bg-primary hover:bg-charcoal text-charcoal px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-none">
                  Explore Career Stories
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People / Students Two-Column Cards */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          {/* Our People Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden"
          >
            <img 
              src="/images/ai-team-collaboration.jpg" 
              alt="Our people collaborating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl text-charcoal mb-2">Our people</h3>
              <span className="text-muted-foreground flex items-center gap-2 group-hover:text-white transition-colors">
                Meet your future peers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>

          {/* Students Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden"
          >
            <img
              src="/images/careers-students.jpg"
              alt="Students and early career"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl text-charcoal mb-2">Students</h3>
              <span className="text-muted-foreground flex items-center gap-2 group-hover:text-white transition-colors">
                Get your start <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
            {/* Left Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-64 flex-shrink-0"
            >
              <div className="bg-primary text-charcoal px-6 py-4 inline-block">
                <span className="text-sm font-bold uppercase tracking-wider">Awards & Recognition</span>
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
                  Industry leaders agree — our people thrive here
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  We're consistently recognized as a top workplace for innovation, 
                  diversity, and professional development. The reason is simple: our people.
                </p>
              </motion.div>

              {/* Awards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">Top</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100</div>
                  <p className="text-sm text-muted-foreground">Best Places to Work</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground mb-1">consecutive years</div>
                  <p className="text-sm text-muted-foreground">Innovation Leader</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">A+</div>
                  <p className="text-sm text-muted-foreground">Diversity & Inclusion Rating</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Jobs CTA Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Ready to make your mark?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore open positions and find the role that matches your ambitions.
            </p>
            <Button className="bg-primary hover:bg-charcoal text-charcoal px-10 py-5 text-base font-bold uppercase tracking-wider rounded-none">
              Find Jobs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
