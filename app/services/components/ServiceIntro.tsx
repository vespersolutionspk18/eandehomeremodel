'use client'

import React from 'react'
import Image from 'next/image'

interface ServiceIntroProps {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
  highlights?: { label: string; value: string }[]
  accentColor?: string
}

const ServiceIntro: React.FC<ServiceIntroProps> = ({
  title,
  paragraphs,
  image,
  imageAlt,
  highlights,
  accentColor = '#0891b2'
}) => {
  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6 tracking-tight">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-stone-50 rounded-xl">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: accentColor }}>
                      {highlight.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">{highlight.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceIntro
