import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { counties, allLocations } from '@/lib/locations-data'

export const metadata = {
  title: 'Service Areas | E&E Home Remodeling - Ventura, Santa Barbara & Los Angeles',
  description: 'E&E Home Remodeling serves Ventura County, Santa Barbara County, and Los Angeles County. Find your local remodeling experts with offices in Tarzana, Oxnard, and Santa Barbara.'
}

const offices = [
  {
    name: 'San Fernando Valley',
    address: '18340 Ventura Blvd',
    city: 'Tarzana, CA 91356',
    phone: '(818) 200-1334',
    areas: 'Calabasas, Woodland Hills, Encino, Sherman Oaks, Tarzana, Burbank'
  },
  {
    name: 'Ventura County',
    address: '300 E Esplanade Dr, 9th Floor',
    city: 'Oxnard, CA 93036',
    phone: '(805) 590-0908',
    areas: 'Ventura, Oxnard, Camarillo, Thousand Oaks, Moorpark, Simi Valley'
  },
  {
    name: 'Santa Barbara',
    address: '7 W Figueroa St, Ste 217',
    city: 'Santa Barbara, CA 93101',
    phone: '(805) 590-0908',
    areas: 'Santa Barbara, Goleta, Carpinteria, Montecito'
  }
]

const LocationsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[50%]">
              Serving Southern California for 25+ Years
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[45%]">
              With three offices across Ventura, Santa Barbara, and Los Angeles Counties, E&E Home Remodeling brings expert craftsmanship to your neighborhood. Find your local team below.
            </p>
          </div>

          {/* Map placeholder with offices */}
          <div className="bg-stone-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0891b2]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-2">
                    {office.name}
                  </h3>
                  <p className="text-base text-black/60 tracking-tighter mb-4">
                    {office.address}<br />{office.city}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-[#0891b2] font-medium hover:underline mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </a>
                  <p className="text-sm text-black/50 tracking-tighter">
                    <span className="font-medium text-black/70">Serving:</span> {office.areas}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Counties */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12">
            Browse by County
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {counties.map((county, index) => (
              <Link
                key={index}
                href={`/locations/${county.slug}`}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden relative h-[300px] sm:h-[350px]"
              >
                <Image
                  src={county.heroImage}
                  alt={county.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tighter mb-2">
                    {county.name}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base tracking-tighter mb-4">
                    {county.cities.length} cities served
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    View Cities <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Cities Grid */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16 bg-stone-50">
          <div className="py-8 lg:py-16">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4 text-center">
              All Service Areas
            </h2>
            <p className="text-lg text-black/60 tracking-tighter mb-12 text-center max-w-2xl mx-auto">
              Click any city to learn about our remodeling services in your area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {counties.map((county, countyIndex) => (
                <div key={countyIndex}>
                  <h3 className="text-xl font-medium text-[#0891b2] tracking-tighter mb-4 pb-2 border-b border-[#0891b2]/20">
                    {county.name}
                  </h3>
                  <ul className="space-y-2">
                    {county.cities.map((city, cityIndex) => (
                      <li key={cityIndex}>
                        <Link
                          href={`/locations/${city.slug}`}
                          className="flex items-center justify-between py-2 text-base text-black/70 hover:text-[#0891b2] tracking-tighter transition-colors group"
                        >
                          {city.name}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
              Don&apos;t See Your City?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 tracking-tighter mb-8 max-w-2xl mx-auto">
              We serve many more communities throughout Southern California. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0891b2] rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="tel:8776389429"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (877) 638-9429
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default LocationsPage
