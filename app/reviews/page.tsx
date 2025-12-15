'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials, { Testimonial } from '../components/Testimonials'
import { Star, Play, Quote, ArrowRight, Award, CheckCircle2, MapPin } from 'lucide-react'

// Video testimonials data
const videoTestimonials = [
  {
    id: 1,
    title: 'Kitchen & Great Room Transformation',
    client: 'The Johnson Family',
    location: 'Calabasas, CA',
    thumbnail: '/after-kitchen-1.jpg',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
    quote: 'E&E transformed our outdated kitchen into the heart of our home.',
  },
  {
    id: 2,
    title: 'Complete Home Renovation',
    client: 'Michael & Sarah R.',
    location: 'Thousand Oaks, CA',
    thumbnail: '/after-whole-house-2.jpg',
    videoId: 'dQw4w9WgXcQ',
    quote: 'From start to finish, Ezra and Ester were there every step of the way.',
  },
  {
    id: 3,
    title: 'Master Bathroom Remodel',
    client: 'The Martinez Family',
    location: 'Ventura, CA',
    thumbnail: '/after-bathroom-2.jpg',
    videoId: 'dQw4w9WgXcQ',
    quote: 'Our bathroom is now a spa retreat. We use it every day!',
  },
  {
    id: 4,
    title: 'Outdoor Living Space',
    client: 'David & Lisa K.',
    location: 'Santa Barbara, CA',
    thumbnail: '/after-outdoor-2.jpg',
    videoId: 'dQw4w9WgXcQ',
    quote: 'The patio cover and outdoor kitchen changed how we live.',
  },
  {
    id: 5,
    title: 'ADU Garage Conversion',
    client: 'The Chen Family',
    location: 'Woodland Hills, CA',
    thumbnail: '/after-whole-house-3.jpg',
    videoId: 'dQw4w9WgXcQ',
    quote: 'Now my mother-in-law has her own space. Best decision ever!',
  },
  {
    id: 6,
    title: 'Whole House Transformation',
    client: 'Robert & Maria T.',
    location: 'Camarillo, CA',
    thumbnail: '/after-kitchen-2.jpg',
    videoId: 'dQw4w9WgXcQ',
    quote: 'We didn\'t have to move. E&E gave us our dream home.',
  },
]

// Written testimonials for the carousel
const writtenTestimonials: Testimonial[] = [
  {
    id: 1,
    body: "E&E completely transformed our 1970s kitchen into a modern masterpiece. Ezra was hands-on throughout the entire process, and the quality of work exceeded our expectations. The FREE 3D design helped us visualize everything before construction started.",
    clientName: "Jennifer M.",
    clientCompany: "Calabasas Kitchen Remodel",
    source: 'google',
    rating: 5,
  },
  {
    id: 2,
    body: "After getting quotes from 5 different contractors, we chose E&E because of their transparency and professionalism. Ester's attention to detail and Ezra's craftsmanship made our bathroom renovation stress-free. Highly recommend!",
    clientName: "Mark & Susan T.",
    clientCompany: "Thousand Oaks Bathroom",
    source: 'yelp',
    rating: 5,
  },
  {
    id: 3,
    body: "Our whole house remodel was a massive undertaking, but E&E handled it beautifully. No middlemen, no surprises - just excellent communication and stunning results. Our neighbors can't believe it's the same house!",
    clientName: "The Rodriguez Family",
    clientCompany: "Ventura Whole House",
    source: 'houzz',
    rating: 5,
  },
  {
    id: 4,
    body: "The ADU they built in our backyard is now generating rental income that covers our mortgage. E&E handled all the permits and the construction was top-notch. Best investment we've made!",
    clientName: "David L.",
    clientCompany: "Woodland Hills ADU",
    source: 'google',
    rating: 5,
  },
  {
    id: 5,
    body: "We've worked with contractors before, but E&E is in a different league. The outdoor kitchen and patio cover they built has turned our backyard into our favorite room. Worth every penny!",
    clientName: "Patricia & James W.",
    clientCompany: "Santa Barbara Outdoor Living",
    source: 'yelp',
    rating: 5,
  },
  {
    id: 6,
    body: "From the first consultation to the final walkthrough, E&E was professional and responsive. The 3D design service was amazing - we could see exactly what our kitchen would look like. No surprises!",
    clientName: "Linda K.",
    clientCompany: "Sherman Oaks Kitchen",
    source: 'google',
    rating: 5,
  },
  {
    id: 7,
    body: "Ezra and Ester treat your home like their own. The attention to detail in our master bathroom is incredible - from the heated floors to the custom tile work. True craftsmen!",
    clientName: "Michael & Emily R.",
    clientCompany: "Encino Master Bath",
    source: 'houzz',
    rating: 5,
  },
  {
    id: 8,
    body: "After living in our home for 20 years, we finally did the renovation we always dreamed of. E&E made it happen on budget and on time. The open floor plan transformed how we live!",
    clientName: "The Thompson Family",
    clientCompany: "Tarzana Home Renovation",
    source: 'yelp',
    rating: 5,
  },
]

// Stats data
const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '25+', label: 'Years Experience' },
  { value: '5.0', label: 'Average Rating' },
  { value: '100%', label: 'Would Recommend' },
]

// Featured projects for "See the work behind these reviews"
const featuredProjects = [
  {
    title: 'Calabasas Complete Renovation',
    image: '/after-kitchen-1.jpg',
    href: '/projects/calabasas-whole-house',
  },
  {
    title: 'Thousand Oaks Modern Home',
    image: '/after-whole-house-2.jpg',
    href: '/projects/thousand-oaks-modern',
  },
  {
    title: 'Santa Barbara Luxury Outdoor',
    image: '/after-outdoor-2.jpg',
    href: '/projects/santa-barbara-outdoor',
  },
]

const VideoCard: React.FC<{
  video: typeof videoTestimonials[0]
  onPlay: (videoId: string) => void
}> = ({ video, onPlay }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button */}
        <button
          onClick={() => onPlay(video.videoId)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-7 h-7 text-cyan-600 ml-1" fill="currentColor" />
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-black/90 tracking-tight mb-1">{video.title}</h3>
        <div className="flex items-center gap-2 text-sm text-black/60 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{video.location}</span>
        </div>
        <div className="flex items-start gap-2">
          <Quote className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-black/70 italic">{video.quote}</p>
        </div>
        <p className="text-sm font-medium text-black/80 mt-3">— {video.client}</p>
      </div>
    </div>
  )
}

const VideoModal: React.FC<{
  videoId: string | null
  onClose: () => void
}> = ({ videoId, onClose }) => {
  if (!videoId) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
        >
          <span className="text-lg">Close</span>
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

const ReviewsPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-stone-50" />

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full text-cyan-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>500+ Happy Homeowners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black/90 mb-6">
              Don&apos;t Take Our Word For It
            </h1>

            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-10">
              See what our clients say about working with E&E Home Remodeling.
              Real stories from real homeowners across Southern California.
            </p>

            {/* Aggregate Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <span className="text-5xl md:text-6xl font-bold text-black tracking-tighter">5.0</span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-black/60">Average Rating</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-16 bg-black/10" />

              <div className="flex items-center gap-4">
                <Image src="/yelp-5-star.png" alt="Yelp" width={80} height={32} className="h-8 w-auto" unoptimized />
                <Image src="/google-logo.png" alt="Google" width={24} height={24} className="h-6 w-auto" unoptimized />
                <Image src="/houzz-logo.webp" alt="Houzz" width={60} height={24} className="h-6 w-auto" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-cyan-600">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h5 className="text-sm text-black/60 tracking-tight mb-2">Video Testimonials</h5>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black/90 mb-4">
                Hear From Our Clients
              </h2>
              <p className="text-black/60 max-w-xl mx-auto">
                Watch real homeowners share their experience working with E&E Home Remodeling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTestimonials.map((video) => (
                <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>

        {/* Written Testimonials Carousel */}
        <Testimonials
          testimonials={writtenTestimonials}
          title="Written Reviews"
          subtitle="What Homeowners Say"
          accentColor="#0891b2"
        />

        {/* Review Platforms Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h5 className="text-sm text-black/60 tracking-tight mb-2">Verified Reviews</h5>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black/90 mb-4">
                Find Us On These Platforms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Yelp Card */}
              <a
                href="https://www.yelp.com/biz/e-and-e-remodeling-los-angeles"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Image src="/yelp-5-star.png" alt="Yelp" width={80} height={32} className="h-8 w-auto" unoptimized />
                  <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-red-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-black/60 text-sm">5.0 stars based on 50+ reviews</p>
                <p className="text-red-600 font-medium text-sm mt-2">Read Reviews on Yelp</p>
              </a>

              {/* Google Card */}
              <a
                href="https://www.google.com/search?q=E%26E+Home+Remodeling+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Image src="/google-logo.png" alt="Google" width={24} height={24} className="h-6 w-auto" unoptimized />
                    <span className="font-medium text-black/80">Google Reviews</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-black/60 text-sm">5.0 stars based on 30+ reviews</p>
                <p className="text-blue-600 font-medium text-sm mt-2">Read Reviews on Google</p>
              </a>

              {/* Houzz Card */}
              <a
                href="https://www.houzz.com/professionals/general-contractors/e-and-e-construction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Image src="/houzz-logo.webp" alt="Houzz" width={80} height={32} className="h-7 w-auto" unoptimized />
                  <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-green-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-black/60 text-sm">5.0 stars based on 20+ reviews</p>
                <p className="text-green-600 font-medium text-sm mt-2">Read Reviews on Houzz</p>
              </a>
            </div>
          </div>
        </section>

        {/* See The Work Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h5 className="text-sm text-black/60 tracking-tight mb-2">Our Work</h5>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black/90 mb-4">
                See The Work Behind These Reviews
              </h2>
              <p className="text-black/60 max-w-xl mx-auto">
                Explore the projects that earned us these glowing reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-semibold text-lg tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm mt-1 group-hover:text-cyan-300 transition-colors">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">CA Lic #1087571</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">Family Owned</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-3 sm:p-5">
          <div className="bg-cyan-600 rounded-2xl sm:rounded-3xl py-16 md:py-20 px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6">
                Join Our Happy Homeowners
              </h2>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Ready to start your own transformation story? Get your FREE consultation and 3D design today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-700 rounded-full font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18776389429"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Call (877) 638-9429
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Video Modal */}
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}

export default ReviewsPage
