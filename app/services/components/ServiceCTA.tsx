'use client'

import React from 'react'
import Button from '@/app/components/Button'

interface ServiceCTAProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  backgroundColor?: string
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title = 'Ready to Transform Your Home?',
  description = 'Get your FREE 3D design and see your dream space before we build it. No obligation, no pressure - just expert guidance from a family-owned business with 25+ years of experience.',
  primaryButtonText = 'Get Free 3D Design',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'Call (877) 638-9429',
  secondaryButtonHref = 'tel:8776389429',
  backgroundColor = '#0891b2'
}) => {
  return (
    <div className="p-3 sm:p-5">
      <div
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 rounded-2xl sm:rounded-3xl"
        style={{ backgroundColor }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
            <Button variant="white" size="lg" href={secondaryButtonHref}>
              {secondaryButtonText}
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>25+ Years</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Family Owned</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>CA Lic #1087571</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCTA
