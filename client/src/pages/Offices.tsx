import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Office {
  id: string;
  city: string;
  country: string;
  region: string;
  address: string[];
  phone: string;
  email: string;
  hours: string;
  isHeadquarters?: boolean;
  image: string;
}

const offices: Office[] = [
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    address: ['350 Fifth Avenue', 'Suite 7820', 'New York, NY 10118'],
    phone: '+1 (212) 555-0100',
    email: 'newyork@nexdyne.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
    isHeadquarters: true,
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80'
  },
  {
    id: 'san-francisco',
    city: 'San Francisco',
    country: 'United States',
    region: 'Americas',
    address: ['One Market Street', 'Spear Tower, Suite 3600', 'San Francisco, CA 94105'],
    phone: '+1 (415) 555-0200',
    email: 'sanfrancisco@nexdyne.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80'
  },
  {
    id: 'chicago',
    city: 'Chicago',
    country: 'United States',
    region: 'Americas',
    address: ['233 South Wacker Drive', 'Willis Tower, Suite 8400', 'Chicago, IL 60606'],
    phone: '+1 (312) 555-0300',
    email: 'chicago@nexdyne.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM CST',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80'
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    address: ['30 St Mary Axe', 'The Gherkin, Level 28', 'London EC3A 8BF'],
    phone: '+44 20 7555 0400',
    email: 'london@nexdyne.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80'
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia Pacific',
    address: ['1 Raffles Place', '#44-01 One Raffles Place', 'Singapore 048616'],
    phone: '+65 6555 0500',
    email: 'singapore@nexdyne.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80'
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    address: ['Burj Khalifa', 'Level 124', 'Dubai, UAE'],
    phone: '+971 4 555 0600',
    email: 'dubai@nexdyne.com',
    hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
  }
];

const regions = ['All Regions', 'Americas', 'Europe', 'Asia Pacific', 'Middle East'];

export default function Offices() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Offices" 
        description="Find NexDyne offices around the world. Connect with our global team of consultants and experts."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-border">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-charcoal mb-3">
              Our Offices
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              With offices across the globe, we bring local expertise and global perspective to every engagement. Find the office nearest you.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Stats */}
      <section className="bg-subtle py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-charcoal mb-2">6</p>
              <p className="text-muted-foreground">Global Offices</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-charcoal mb-2">4</p>
              <p className="text-muted-foreground">Continents</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-charcoal mb-2">500+</p>
              <p className="text-muted-foreground">Consultants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-charcoal mb-2">24/7</p>
              <p className="text-muted-foreground">Global Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="bg-white py-6 border-b border-border sticky top-0 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  region === 'All Regions'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-charcoal/80 hover:bg-subtle border border-border'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {offices.map((office) => (
              <div 
                key={office.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Office Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Office Details */}
                <div className="p-6">
                  {/* City & Country */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal">
                        {office.city}
                        {office.isHeadquarters && (
                          <span className="ml-2 text-xs font-medium text-destructive uppercase tracking-wide">
                            HQ
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground">{office.country}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide bg-subtle px-2 py-1 rounded">
                      {office.region}
                    </span>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-muted-foreground/70 mt-0.5 flex-shrink-0" />
                    <div className="text-muted-foreground text-sm">
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-muted-foreground/70 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-muted-foreground text-sm hover:text-destructive transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-muted-foreground/70 flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-muted-foreground text-sm hover:text-destructive transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-muted-foreground/70 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{office.hours}</p>
                  </div>
                  
                  {/* Get Directions Link */}
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.address.join(', '))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-destructive font-medium text-sm hover:gap-3 transition-all"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-10 sm:py-12 lg:py-16 bg-subtle">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-normal text-charcoal mb-4">
              Global Presence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our network spans across major business centers, ensuring we're always close to our clients.
            </p>
          </div>
          
          {/* World Map Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-8 aspect-[2/1] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-muted-foreground/70" />
              </div>
              <p className="text-muted-foreground">Interactive map coming soon</p>
              <p className="text-sm text-muted-foreground/70 mt-2">View our offices on Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6">
              Ready to connect?
            </h2>
            <p className="text-xl text-muted-foreground/50 mb-8">
              Reach out to your nearest office or contact us directly to start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/careers"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded border border-white/30 transition-colors inline-block"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
