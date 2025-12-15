'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import {
  ChefHat,
  Bath,
  Home,
  TreePine,
  Building2,
  PlusSquare,
  ArrowRight,
} from 'lucide-react'

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: 'Kitchen Remodeling',
      shortDescription: 'Custom cabinets, countertops, islands & complete kitchen transformations.',
      fullDescription: 'Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, functional islands, and expert craftsmanship. From minor updates to complete gut renovations.',
      icon: ChefHat,
      href: '/services/kitchen-remodeling',
      image: '/kitchen-hero.jpg',
      features: ['Custom Cabinets', 'Quartz & Granite Counters', 'Kitchen Islands', 'Appliance Installation'],
    },
    {
      title: 'Bathroom Remodeling',
      shortDescription: 'Master baths, guest baths, walk-in showers & tub-to-shower conversions.',
      fullDescription: 'Create your personal spa retreat with luxurious master bathrooms, efficient guest baths, frameless walk-in showers, and beautiful tile work that transforms your daily routine.',
      icon: Bath,
      href: '/services/bathroom-remodeling',
      image: '/bathroom-hero.jpg',
      features: ['Walk-In Showers', 'Double Vanities', 'Heated Floors', 'Custom Tile Work'],
    },
    {
      title: 'ADU & Garage Conversion',
      shortDescription: 'Accessory dwelling units & garage conversions for extra living space.',
      fullDescription: 'Unlock your property\'s potential with professionally built ADUs. From garage conversions to detached units, we handle permits, design, and construction to create income-generating living spaces.',
      icon: Building2,
      href: '/services/adu-garage-conversion',
      image: '/adu-1.jpg',
      features: ['Garage ADUs', 'Detached Units', 'Permit Management', 'Turnkey Solutions'],
    },
    {
      title: 'Outdoor Living',
      shortDescription: 'Patio covers, outdoor kitchens, pergolas & deck construction.',
      fullDescription: 'Extend your living space outdoors with custom patio covers, fully-equipped outdoor kitchens, elegant pergolas, and beautiful deck construction designed for Southern California living.',
      icon: TreePine,
      href: '/services/outdoor-living',
      image: '/outdoor-hero.jpg',
      features: ['Patio Covers', 'Outdoor Kitchens', 'Pergolas & Arbors', 'Custom Decks'],
    },
    {
      title: 'Whole House Remodeling',
      shortDescription: 'Complete home renovations from foundation to finish.',
      fullDescription: 'Transform your entire home with one team, one vision. We handle complete renovations including kitchens, bathrooms, living spaces, and system upgrades - all managed by Ezra and Ester personally.',
      icon: Home,
      href: '/services/whole-house-remodeling',
      image: '/project-calabasas.jpg',
      features: ['Open Floor Plans', 'Complete Renovations', 'Systems Upgrades', 'Single Team'],
    },
    {
      title: 'Room Additions',
      shortDescription: 'Expand your living space with seamless room additions.',
      fullDescription: 'Need more space? We build bedroom additions, family room extensions, home offices, in-law suites, and second-story additions that seamlessly integrate with your existing home.',
      icon: PlusSquare,
      href: '/services/room-additions',
      image: '/room-addition-1.jpg',
      features: ['Bedroom Additions', 'Second Stories', 'In-Law Suites', 'Home Offices'],
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/kitchen-hero.jpg"
              alt="Home remodeling services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 py-16">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-cyan-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
                Expert Home Remodeling Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Transform Your Home with E&E
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                From kitchens and bathrooms to complete home transformations, we bring 25+ years of expert craftsmanship to every project. Family-owned, personally managed, exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  FREE 3D Design
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  25+ Years Experience
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  CA Lic #1087571
                </span>
              </div>
              <Button variant="blue" size="lg" href="/contact">
                Get Free 3D Design
              </Button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Our Remodeling Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whatever your home improvement needs, we have the expertise to bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                const isHovered = hoveredService === index

                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group flex flex-col bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-xl transition-all duration-300"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Icon Badge */}
                      <div className={`absolute bottom-4 left-4 backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-3 transition-all duration-500 ${
                        isHovered ? 'bg-white/30 scale-110' : ''
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0891b2] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center text-[#0891b2] font-medium group-hover:gap-3 gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* FREE 3D Design Feature */}
        <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[#0891b2] font-semibold text-sm uppercase tracking-wider">
                  Exclusive Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 tracking-tight">
                  See Your Dream Space in 3D — Free
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Most contractors charge $500-$2,000 for design services. At E&E, we include FREE 3D design with every project consultation. See exactly how your remodel will look before we break ground.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Realistic 3D renderings of your space</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Visualize materials, colors, and layouts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Make changes before construction starts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">No obligation, no pressure</span>
                  </li>
                </ul>
                <Button variant="blue" size="lg" href="/contact">
                  Schedule Free Consultation
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/kitchen-1.jpeg"
                  alt="3D kitchen design visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Serving Southern California
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              We provide expert home remodeling services throughout Ventura, Santa Barbara, and Los Angeles counties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/locations/ventura-county"
                className="p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0891b2]">
                  Ventura County
                </h3>
                <p className="text-gray-600 text-sm">
                  Ventura, Oxnard, Camarillo, Thousand Oaks, Moorpark, Simi Valley
                </p>
              </Link>
              <Link
                href="/locations/santa-barbara-county"
                className="p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0891b2]">
                  Santa Barbara County
                </h3>
                <p className="text-gray-600 text-sm">
                  Santa Barbara, Goleta, Carpinteria
                </p>
              </Link>
              <Link
                href="/locations/los-angeles-county"
                className="p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0891b2]">
                  Los Angeles County
                </h3>
                <p className="text-gray-600 text-sm">
                  Calabasas, Woodland Hills, Tarzana, Encino, Sherman Oaks, Burbank
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-[#0891b2]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Get your FREE consultation and 3D design. No obligation, no pressure - just expert guidance from a family-owned business with 25+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="secondary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button variant="white" size="lg" href="tel:8776389429">
                Call (877) 638-9429
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default ServicesPage
