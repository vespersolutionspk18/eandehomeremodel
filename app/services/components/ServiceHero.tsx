'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/Button'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  ctaText?: string
  ctaHref?: string
  badges?: string[]
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  ctaText = 'Get Free 3D Design',
  ctaHref = '/contact',
  badges = ['25+ Years Experience', 'CA Lic #1087571', 'FREE 3D Design']
}) => {
  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-cyan-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            {subtitle}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="blue" size="lg" href={ctaHref}>
              {ctaText}
            </Button>
            <Button variant="white" size="lg" href="/projects">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero
