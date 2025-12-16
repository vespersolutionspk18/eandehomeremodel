'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import { MapPin, Phone, ChefHat, Bath, Home, TreePine, Building2, PlusSquare, ArrowRight, CheckCircle, Star } from 'lucide-react'

export interface LocationData {
  slug: string
  name: string
  county: string
  countySlug: string
  tagline: string
  description: string
  highlights: string[]
  heroImage: string
  nearbyAreas: { name: string; slug: string }[]
  localInfo: {
    permitInfo: string
    hoaNote: string
    localTip: string
  }
  testimonial: {
    quote: string
    name: string
    project: string
  }
  nearestOffice: {
    name: string
    address: string
    city: string
    phone: string
  }
  seoKeywords: string[]
}

interface LocationPageTemplateProps {
  location: LocationData
}

const services = [
  { name: 'Kitchen Remodeling', href: '/services/kitchen-remodeling', icon: ChefHat, description: 'Custom cabinets, countertops, islands & complete kitchen transformations' },
  { name: 'Bathroom Remodeling', href: '/services/bathroom-remodeling', icon: Bath, description: 'Master baths, guest baths, showers & tub-to-shower conversions' },
  { name: 'ADU & Garage Conversion', href: '/services/adu-garage-conversion', icon: Building2, description: 'Accessory dwelling units, garage conversions & rental income solutions' },
  { name: 'Outdoor Living', href: '/services/outdoor-living', icon: TreePine, description: 'Patio covers, outdoor kitchens, pergolas & deck building' },
  { name: 'Whole House Remodeling', href: '/services/whole-house-remodeling', icon: Home, description: 'Complete home renovations from foundation to finish' },
  { name: 'Room Additions', href: '/services/room-additions', icon: PlusSquare, description: 'Expand your living space with seamless additions' },
]

const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({ location }) => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-16 justify-between mb-6 sm:mb-8 lg:mb-12">
            <div className="lg:w-[55%]">
              <div className="flex items-center gap-2 text-[#0891b2] mb-3 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium tracking-tight">{location.county}</span>
              </div>
              <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter mb-4 sm:mb-6">
                Home Remodeling in {location.name}
              </h1>
              <p className="text-base sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80">
                {location.tagline}
              </p>
            </div>
            <div className="lg:w-[40%] flex flex-col gap-3 sm:gap-4">
              <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-medium text-black/90 tracking-tighter mb-3 sm:mb-4">
                  Why {location.name} Homeowners Choose E&E
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {location.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 text-[0.9rem] sm:text-base text-black/70 tracking-tighter">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0891b2] text-white rounded-full font-medium text-base sm:text-lg hover:bg-[#0891b2]/90 active:bg-[#0891b2]/80 transition-colors min-h-[48px]"
              >
                Get Free Quote in {location.name}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-3xl overflow-hidden relative w-full h-[240px] sm:h-[400px] md:h-[500px]">
            <Image
              src={location.heroImage}
              alt={`Home remodeling project in ${location.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex flex-wrap gap-2 sm:gap-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-base font-medium text-gray-900">
                Serving {location.name} & Surrounding Areas
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0891b2] rounded-full text-xs sm:text-base font-medium text-white">
                FREE 3D Design
              </span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <div className="max-w-4xl">
            <h2 className="text-[1.5rem] leading-tight sm:text-4xl text-black/90 font-medium tracking-tighter mb-4 sm:mb-6">
              Your Trusted {location.name} Remodeling Contractor
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-xl text-black/80 tracking-tighter leading-relaxed">
              <p>{location.description}</p>
              <p>
                As a family-owned business with over 25 years of experience, we understand what {location.name} homeowners need.
                Ezra and Ester personally manage every project—no middlemen, no hand-offs to strangers. When you work with E&E,
                you work directly with the owners who built this company&apos;s reputation.
              </p>
              <p>
                Our FREE 3D design service lets you see your {location.name} remodel before construction begins.
                This means no surprises, no guesswork—just confidence in exactly what your finished project will look like.
              </p>
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <h2 className="text-[1.5rem] leading-tight sm:text-4xl text-black/90 font-medium tracking-tighter mb-3 sm:mb-4">
            Remodeling Services in {location.name}
          </h2>
          <p className="text-base sm:text-xl text-black/60 tracking-tighter mb-6 sm:mb-8 lg:mb-12 max-w-3xl">
            From kitchen renovations to whole-house transformations, we bring expert craftsmanship to every {location.name} project.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-stone-200 hover:border-[#0891b2] hover:shadow-lg active:scale-[0.98] transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0891b2]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#0891b2]/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-black/90 tracking-tighter mb-1.5 sm:mb-2 group-hover:text-[#0891b2] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[0.875rem] sm:text-base text-black/60 tracking-tighter leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Local Testimonial */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <div className="bg-stone-50 rounded-xl sm:rounded-3xl p-6 sm:p-12 lg:p-16">
            <div className="flex items-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0891b2] text-[#0891b2]" />
              ))}
            </div>
            <blockquote className="text-xl leading-snug sm:text-3xl text-black/80 tracking-tighter sm:leading-relaxed mb-6 sm:mb-8">
              &ldquo;{location.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0891b2] flex items-center justify-center text-white text-lg sm:text-xl font-medium">
                {location.testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-black/90 tracking-tighter">{location.testimonial.name}</p>
                <p className="text-sm sm:text-base text-black/60 tracking-tighter">{location.testimonial.project}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Info / FAQ */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <h2 className="text-[1.5rem] leading-tight sm:text-4xl text-black/90 font-medium tracking-tighter mb-5 sm:mb-8 lg:mb-12">
            What {location.name} Homeowners Should Know
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-3 lg:gap-8">
            <div className="p-5 sm:p-8 bg-cyan-50 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-medium text-black/90 tracking-tighter mb-2 sm:mb-3">
                Permits & Regulations
              </h3>
              <p className="text-[0.875rem] sm:text-base text-black/70 tracking-tighter leading-relaxed">
                {location.localInfo.permitInfo}
              </p>
            </div>
            <div className="p-5 sm:p-8 bg-teal-50 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-medium text-black/90 tracking-tighter mb-2 sm:mb-3">
                HOA Considerations
              </h3>
              <p className="text-[0.875rem] sm:text-base text-black/70 tracking-tighter leading-relaxed">
                {location.localInfo.hoaNote}
              </p>
            </div>
            <div className="p-5 sm:p-8 bg-emerald-50 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-medium text-black/90 tracking-tighter mb-2 sm:mb-3">
                Local Insight
              </h3>
              <p className="text-[0.875rem] sm:text-base text-black/70 tracking-tighter leading-relaxed">
                {location.localInfo.localTip}
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <h2 className="text-[1.5rem] leading-tight sm:text-4xl text-black/90 font-medium tracking-tighter mb-3 sm:mb-4">
            Also Serving Nearby {location.county} Communities
          </h2>
          <p className="text-base sm:text-lg text-black/60 tracking-tighter mb-5 sm:mb-8">
            In addition to {location.name}, we proudly serve these neighboring areas.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {location.nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={`/locations/${area.slug}`}
                className="px-4 py-2.5 sm:px-5 sm:py-3 bg-stone-100 hover:bg-[#0891b2] hover:text-white active:scale-[0.97] rounded-full text-sm sm:text-base font-medium text-black/70 tracking-tighter transition-all min-h-[40px] sm:min-h-0"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Office Info & CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-6 sm:my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-white">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-[1.5rem] leading-tight sm:text-4xl lg:text-5xl font-medium tracking-tighter mb-3 sm:mb-4">
                  Ready to Transform Your {location.name} Home?
                </h2>
                <p className="text-base sm:text-xl text-white/90 tracking-tighter mb-5 sm:mb-6">
                  Schedule your free consultation and see your remodel in 3D before we start building.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#0891b2] rounded-full font-medium text-base sm:text-lg hover:bg-white/90 active:bg-white/80 transition-colors min-h-[48px]"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href={`tel:${location.nearestOffice.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white rounded-full font-medium text-base sm:text-lg hover:bg-white/10 active:bg-white/20 transition-colors min-h-[48px]"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    {location.nearestOffice.phone}
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8">
                <p className="text-xs sm:text-sm text-white/70 mb-1.5 sm:mb-2">Nearest Office</p>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">{location.nearestOffice.name}</h3>
                <div className="space-y-2 text-white/90 text-sm sm:text-base">
                  <p className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                    <span>{location.nearestOffice.address}<br />{location.nearestOffice.city}</span>
                  </p>
                  <p className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    {location.nearestOffice.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default LocationPageTemplate
