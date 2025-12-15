'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { CountyData } from '@/lib/locations-data'

interface CountyPageTemplateProps {
  county: CountyData
}

const CountyPageTemplate: React.FC<CountyPageTemplateProps> = ({ county }) => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <div className="lg:w-[55%]">
              <div className="flex items-center gap-2 text-[#0891b2] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-base font-medium tracking-tight">Southern California</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter mb-6">
                Home Remodeling in {county.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80">
                {county.description}
              </p>
            </div>
            <div className="lg:w-[40%]">
              <div className="bg-[#0891b2] rounded-2xl p-6 sm:p-8 text-white">
                <p className="text-sm text-white/70 mb-2">Local Office</p>
                <h3 className="text-xl font-medium mb-4">{county.office.name}</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{county.office.address}<br />{county.office.city}</span>
                  </p>
                  <a
                    href={`tel:${county.office.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 hover:text-white/80"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    {county.office.phone}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#0891b2] rounded-full font-medium hover:bg-white/90 transition-colors"
                >
                  Request Free Consultation
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src={county.heroImage}
              alt={`Home remodeling in ${county.name}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm sm:text-base font-medium text-gray-900">
                {county.cities.length} Cities Served in {county.name}
              </span>
            </div>
          </div>
        </section>

        {/* Why Choose E&E */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-6">
              Why {county.name} Homeowners Choose E&E
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Local office for fast response times',
                'FREE 3D design visualization',
                'Owners personally manage every project',
                '25+ years of expert craftsmanship',
                'Fully licensed, bonded & insured',
                'No middlemen—work directly with owners'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-black/70 tracking-tighter">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4">
            Cities We Serve in {county.name}
          </h2>
          <p className="text-lg text-black/60 tracking-tighter mb-8 lg:mb-12 max-w-3xl">
            Click any city below to learn more about our remodeling services in your area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {county.cities.map((city, index) => (
              <Link
                key={index}
                href={`/locations/${city.slug}`}
                className="group p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-[#0891b2] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#0891b2]/10 flex items-center justify-center transition-colors">
                    <MapPin className="w-6 h-6 text-[#0891b2]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#0891b2] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-2 group-hover:text-[#0891b2] transition-colors">
                  {city.name}
                </h3>
                <p className="text-base text-black/60 tracking-tighter line-clamp-2">
                  {city.tagline.split('.')[0]}.
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
              Ready to Start Your {county.name} Project?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 tracking-tighter mb-8 max-w-2xl mx-auto">
              Schedule your free consultation and see your remodel in 3D before construction begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0891b2] rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href={`tel:${county.office.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {county.office.phone}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default CountyPageTemplate
