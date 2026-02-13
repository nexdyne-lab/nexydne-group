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
      image: "https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/xR823wOhCHcIJqsRqP0xRl-img-4_1770254461000_na1fn_Y2FyZWVyLXN0b3J5LTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L3hSODIzd09oQ0hjSUpxc1JxUDB4UmwtaW1nLTRfMTc3MDI1NDQ2MTAwMF9uYTFmbl9ZMkZ5WldWeUxYTjBiM0o1TFRFLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JigACD9dWvBp6trWCyGKT9EtM0uEbkg1demsoNb7NiSqzGMArpomm6WzBwHJj0jOePabr31XkfWcq5WALQzFSE8HnWzHxsMxKFO2~azJwrMhi26MJxxq9qDa2HfTlQpLNuA2gQohJPpYdVpBAjuo2AfT4sIHDQPcqNUXL3SSNQlN-2VUYK~zEl5HJpwWAS~jZuvwHl2BSKLA1CVwFM53N9hKZgUxx9w76WALnwj2VfICz3wY~JQ49~1Pztfv5HRRsgw3si57TsqKu8iKPK~YTo74FagPGRQl6J88v6V7svNeQ1IEdz~LkOtuNoStaanITaFadigsLKi2JZdlTx2HNw__",
    },
    {
      name: "Raj Patel",
      role: "Data Analyst → Director",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/xR823wOhCHcIJqsRqP0xRl-img-5_1770254463000_na1fn_Y2FyZWVyLXN0b3J5LTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L3hSODIzd09oQ0hjSUpxc1JxUDB4UmwtaW1nLTVfMTc3MDI1NDQ2MzAwMF9uYTFmbl9ZMkZ5WldWeUxYTjBiM0o1TFRJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m2nCJVgWYaf6~eEtvGpSh5w1RuYIBBOsUOcRFrZrkxolvXcGRW7juK~MJw~11ubjKb1xRbUbHzP9i~k2HN1D8ke07a06UMe2xdFfi0T-E9oYpf01Uq-IZxhh7voq3M91NN6D0WUsEpWk9k8vt8pPXnX1a3Qbus2ijdo1xtyXOlWr~jvPWINGxpDGebUf9~88yl8XLyGbH1njp0Zx0Hx-FLjrOuROuRrV~iEtvhokxzS7tX5Ry0DuiCpSU6M46ApSpaYgEUPgvYkTTI7Q-NH3paiE4-M6I8eZThdLOhYw7e3q3XztroL2Al6UhOH~VnSs53sNYC9b6urU782zfepcwA__",
    },
    {
      name: "Michael Torres",
      role: "Associate → Principal",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/dlCAKxYKypD4QJdxpAymNJ-img-1_1770254525000_na1fn_Y2FyZWVyLXN0b3J5LTM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L2RsQ0FLeFlLeXBENFFKZHhwQXltTkotaW1nLTFfMTc3MDI1NDUyNTAwMF9uYTFmbl9ZMkZ5WldWeUxYTjBiM0o1TFRNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S61LyKFzOMJ9pO2FIHtqTTOZd6MuaxARRXHbXoz2~pJMaO-FmVFPhGZvEphCk5CHRLINCytkw4Gw8tKQGlcq-ziVuO6yr0aIYgZMCmERMu3fi2nyh9V-7nCF70qmLHAZosqD3PNzzGWyfbSHF-AtH9v4-3jQGN4UolGyXGu3hVMlR-nUbFjGykg2tfw~9TvvnbF6~x14un3vnEdIsk1I5GR~JqmlLnMifCx3crVLWMhWgQp3Iw0gSNRht9tGQV1eMoWSK0pfuXO2oPvESHxqn2dg83mgFmDSLP3RpuOVOKBvqIQD0InMJnEpyoOmKZRA36tbMygokVpxLNKnVtf76A__",
    },
    {
      name: "David Williams",
      role: "Engineer → VP Technology",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/dlCAKxYKypD4QJdxpAymNJ-img-2_1770254518000_na1fn_Y2FyZWVyLXN0b3J5LTQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L2RsQ0FLeFlLeXBENFFKZHhwQXltTkotaW1nLTJfMTc3MDI1NDUxODAwMF9uYTFmbl9ZMkZ5WldWeUxYTjBiM0o1TFRRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SguNRzY6yPcec4u3Fz9-y9tUGeiL189te5ARDSlftLchSTFnfvzUc3vIQRxlq9G-pMwzW5f7YHxPkPQ8iDONl6BuNi1RRsS97NaL3-~A9yP9EZYZTO8hqDyJTWAPeE~bnR98gH2YTS8bH8uCd4b94KBnEvecv0scI9HEFYgGR0SGGvz1wBfMak8lx-6AdwAPmwedBaXzp7lQnryIzOM9gwg~l6-gavsvBNUXNHBRuU6Tvlym~Ne-lUv4SHnmHkjNYkWCRe6z78-OLRVqgdussFrz5UeThVHq-~BJFajNtF4-h2isE~Z5HUNjNlW0QZ~Ui5YDbAkzbUjYdukmAzf2Nw__",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#333] selection:bg-[#0052cc] selection:text-white">
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
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/mjqYzGyRVEfwiDTy.jpg" 
            alt="Diverse team collaborating in modern office" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 sm:px-6 md:px-12 relative z-10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4 italic eb-garamond">
              Big challenges.
              <br />
              Bigger growth.
            </h1>
            <Button className="bg-[#0052cc] hover:bg-[#003d99] text-white px-8 py-4 text-base font-medium rounded-none">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              The pace is demanding and expectations are high, but you'll learn faster 
              here than anywhere else, supported by teams that are committed to making 
              each other—and our clients—better. Whether you're with us for two years 
              or 20, the skills you build will make you a leader ahead of your peers 
              and change the trajectory of your career.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a href="#why-nexdyne" className="text-[#0052cc] font-medium hover:underline inline-flex items-center">
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
            className="text-2xl md:text-3xl font-serif text-gray-900 mb-8"
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
                className="px-5 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-[#0052cc] hover:text-white transition-colors rounded-sm"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Career Stories Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-[#f5f5f5]">
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
              <div className="bg-[#0052cc] text-white px-6 py-4 inline-block">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  Build the career you never imagined
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  No two paths at NexDyne are the same, and many of us find ourselves in roles 
                  far from where we started. The opportunity is endless.
                </p>
              </motion.div>

              {/* Career Story Circles with Connecting Lines */}
              <div className="relative py-12">
                {/* Connecting line background */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 hidden md:block" style={{ transform: 'translateY(-50%)' }} />
                
                {/* Dots on the line */}
                <div className="absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-[#0052cc] hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[40%] w-2 h-2 rounded-full bg-[#0052cc] hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[65%] w-2 h-2 rounded-full bg-[#0052cc] hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
                <div className="absolute top-1/2 left-[90%] w-2 h-2 rounded-full bg-[#0052cc] hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />

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
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 group-hover:border-[#0052cc] transition-colors">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-500 text-center">{story.role}</span>
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
                <Button className="bg-[#0052cc] hover:bg-[#003d99] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-none">
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
              src="https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/xR823wOhCHcIJqsRqP0xRl-img-2_1770254466000_na1fn_Y2FyZWVyLW91ci1wZW9wbGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L3hSODIzd09oQ0hjSUpxc1JxUDB4UmwtaW1nLTJfMTc3MDI1NDQ2NjAwMF9uYTFmbl9ZMkZ5WldWeUxXOTFjaTF3Wlc5d2JHVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=k0BN2X~coPWqZevNHjBnt~NXjjWR5lgpUkoE6Yx1nqZrUUscFIXRa9WVtbeL1tjInJ0v2847m7riG8h3Oq2lNr8PDlhc1jgjBR2u12gS8O9OGZ66ExcgDpBWMhDbMYw3L~J3vNP9OAR9rVQKG7EnQaCbg910CynskqY6CiGeKP4GRSjlV85ho16Rf-6-NfWyb6S10LuzJfVYdKtuvFHaEvZjxeVgBzIEWr0ADShkwXsYTlyxSm1LRA~VP2f86OUEFyYlL5hDC9IDOKjcEB-JWp5ZIbDGc2TtgNxcL1Z9ZsGp9Lz5XShuwQg0JUQmCXA23kkgKPmBKbxLK~i8RD-P3g__" 
              alt="Our people collaborating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">Our people</h3>
              <span className="text-white/80 flex items-center gap-2 group-hover:text-white transition-colors">
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
              src="https://private-us-east-1.manuscdn.com/sessionFile/TJkqOrshf8Z1WIoDLWeHb6/sandbox/xR823wOhCHcIJqsRqP0xRl-img-3_1770254475000_na1fn_Y2FyZWVyLXN0dWRlbnRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVEprcU9yc2hmOFoxV0lvRExXZUhiNi9zYW5kYm94L3hSODIzd09oQ0hjSUpxc1JxUDB4UmwtaW1nLTNfMTc3MDI1NDQ3NTAwMF9uYTFmbl9ZMkZ5WldWeUxYTjBkV1JsYm5Sei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zrk4gHzlQ6mGOrmMnVqR4-x2pqTgJEVpg~V7ks0929ITXh6dvyjbprc8w9GDAuQOYK9kCoB0mYNfs-V6eVi5Pq5AYPLqn3bWxKmoWwtw0Kriouib7CHfdrL~QqHb8tM7HOuroQ7dAUnpwpE~cUiqeKi4YL3YQDJG1P2kM~0jKQumFzI2KMkodZTrjIe6hmtoeU~0cyDZfPgy~~~d8GLukD74xmFtp1bRBAuv-dxIQhCue3bLjRNg5OtvTFnGAesMc3UwlxVrSYHaN1Yk32dCwLZYSaQ0L~BHSDtW5flfktWqhycZSeuqgNSTNzQkMq30HGFtJuJ~udyZDG~HGgfqiw__" 
              alt="Students and early career"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">Students</h3>
              <span className="text-white/80 flex items-center gap-2 group-hover:text-white transition-colors">
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
              <div className="bg-[#0052cc] text-white px-6 py-4 inline-block">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  Industry leaders agree — our people thrive here
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
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
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0052cc] mb-2">Top</div>
                  <div className="text-2xl md:text-3xl font-bold text-[#0052cc] mb-1">100</div>
                  <p className="text-sm text-gray-600">Best Places to Work</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0052cc] mb-2">5</div>
                  <div className="text-sm text-gray-600 mb-1">consecutive years</div>
                  <p className="text-sm text-gray-600">Innovation Leader</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0052cc] mb-2">A+</div>
                  <p className="text-sm text-gray-600">Diversity & Inclusion Rating</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0052cc] mb-2">95%</div>
                  <p className="text-sm text-gray-600">Employee Satisfaction</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Jobs CTA Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-[#1a1a1a]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Ready to make your mark?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Explore open positions and find the role that matches your ambitions.
            </p>
            <Button className="bg-[#0052cc] hover:bg-[#003d99] text-white px-10 py-5 text-base font-bold uppercase tracking-wider rounded-none">
              Find Jobs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
