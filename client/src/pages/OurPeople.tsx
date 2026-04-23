import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Mail, ArrowRight, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  region: string;
  practiceArea: string;
  location: string;
  bio: string;
  image: string;
  email?: string;
}

// Sample team data - replace with real data
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Managing Partner',
    region: 'United States',
    practiceArea: 'Digital Transformation',
    location: 'New York',
    bio: 'Leads digital transformation initiatives for Fortune 500 companies and high-growth SMEs across the Northeast',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    email: 'sarah.mitchell@newco.com'
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'Senior Partner',
    region: 'United States',
    practiceArea: 'Cloud & Infrastructure',
    location: 'San Francisco',
    bio: 'Specializes in cloud migration strategies and infrastructure optimization for mid-market technology companies',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    email: 'james.chen@newco.com'
  },
  {
    id: '3',
    name: 'Amara Okafor',
    role: 'Managing Partner',
    region: 'Africa',
    practiceArea: 'Enterprise Applications',
    location: 'Lagos',
    bio: 'Drives enterprise digital solutions for leading African businesses and multinational corporations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    email: 'amara.okafor@newco.com'
  },
  {
    id: '4',
    name: 'Michael Rodriguez',
    role: 'Partner',
    region: 'United States',
    practiceArea: 'Data & AI',
    location: 'Austin',
    bio: 'Advises SMEs on data strategy, analytics implementation, and AI-driven business transformation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    email: 'michael.rodriguez@newco.com'
  },
  {
    id: '5',
    name: 'Fatima Hassan',
    role: 'Senior Partner',
    region: 'Africa',
    practiceArea: 'Cybersecurity',
    location: 'Nairobi',
    bio: 'Leads cybersecurity practice across East Africa, helping organizations build resilient security frameworks',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
    email: 'fatima.hassan@newco.com'
  },
  {
    id: '6',
    name: 'David Thompson',
    role: 'Principal',
    region: 'United States',
    practiceArea: 'Industry Solutions',
    location: 'Chicago',
    bio: 'Develops industry-specific solutions for manufacturing and logistics companies in the Midwest',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    email: 'david.thompson@newco.com'
  },
  {
    id: '7',
    name: 'Thandiwe Moyo',
    role: 'Partner',
    region: 'Africa',
    practiceArea: 'Digital Transformation',
    location: 'Johannesburg',
    bio: 'Supports Southern African enterprises in their digital transformation and innovation journeys',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    email: 'thandiwe.moyo@newco.com'
  },
  {
    id: '8',
    name: 'Robert Kim',
    role: 'Senior Consultant',
    region: 'United States',
    practiceArea: 'Cloud & Infrastructure',
    location: 'Seattle',
    bio: 'Implements cloud infrastructure solutions for Pacific Northwest technology and retail companies',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    email: 'robert.kim@newco.com'
  },
];

export default function OurPeople() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Our People | NexDyne Technologies" 
        description="Meet the leaders and experts who drive transformation for our clients. Our diverse team brings deep expertise across digital transformation, AI, and business strategy."
        canonical="/team"
      />
      <Navigation />
      
      {/* Hero Section - Clean McKinsey Style (No Filters) */}
      <section className="relative min-h-[50vh] flex items-center pt-16 overflow-hidden bg-base">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-primary-hover text-sm font-bold uppercase tracking-widest mb-4">
              Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-3">
              Our <span className="text-primary-hover">People</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Meet the leaders and experts who drive transformation for our clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
                  Built on trust.<br />
                  Driven by results.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our philosophy is simple: deliver cutting-edge technologies with customer-centric solutions, and back every 
                  partnership with hands-on expertise. We don't oversell or overcomplicate—we build systems that work from day one.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Earning your trust through proven results and transparent communication is our top priority. Every engagement 
                  is an opportunity to demonstrate the transformative power of intelligent automation.
                </p>
                <Link href="/case-studies">
                  <a className="inline-flex items-center gap-2 text-primary-hover font-semibold hover:gap-3 transition-all">
                    See Our Work <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Meet our team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines deep technical expertise with practical business experience to deliver 
              solutions that create measurable value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const profileSlug = member.name.toLowerCase().replace(/\s+/g, '-');
              const hasProfile = ['sarah-mitchell', 'james-chen', 'amara-okafor'].includes(profileSlug);
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={hasProfile ? `/team/${profileSlug}` : '#'}>
                    <a className="block group bg-white h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-[3/4] overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-hover mb-2">
                          {member.role}
                        </span>
                        <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-primary-hover transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {member.location}
                        </p>
                        <p className="text-sm font-medium text-muted-foreground">
                          {member.practiceArea}
                        </p>
                      </div>
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary-hover mb-4 block">
                Join Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Build your career with us
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                We're always looking for exceptional talent to join our team. Explore opportunities to make an impact at NexDyne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-base font-semibold rounded hover:bg-subtle transition-colors">
                    View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors">
                    Contact Us
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
