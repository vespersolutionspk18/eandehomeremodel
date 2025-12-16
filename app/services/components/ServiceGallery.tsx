'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ServiceGalleryProps {
  title?: string
  subtitle?: string
  images: GalleryImage[]
  accentColor?: string
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  title = 'Our Recent Projects',
  subtitle = 'Gallery',
  images,
  accentColor = '#0891b2'
}) => {
  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 md:mb-14">
          <div>
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3" style={{ color: accentColor }}>
              {subtitle}
            </p>
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {title}
            </h2>
          </div>
          <Link
            href="/projects"
            className="mt-4 sm:mt-0 text-sm sm:text-base font-medium hover:underline transition-colors min-h-[44px] flex items-center"
            style={{ color: accentColor }}
          >
            View All Projects →
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceGallery
