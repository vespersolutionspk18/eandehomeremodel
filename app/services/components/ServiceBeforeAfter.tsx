'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterPair {
  before: string
  after: string
  label: string
}

interface ServiceBeforeAfterProps {
  title?: string
  subtitle?: string
  pairs: BeforeAfterPair[]
  accentColor?: string
}

const BeforeAfterSlider: React.FC<{
  before: string
  after: string
  label: string
  accentColor: string
}> = ({ before, after, label, accentColor }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="flex flex-col">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt="After renovation"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={before}
            alt="Before renovation"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Slider Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ boxShadow: `0 4px 20px rgba(0,0,0,0.3)` }}
          >
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                stroke={accentColor}
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke={accentColor}
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm font-medium rounded-full">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 backdrop-blur-sm text-white text-sm font-medium rounded-full" style={{ backgroundColor: accentColor }}>
          After
        </div>
      </div>

      {/* Caption */}
      <p className="mt-3 text-center text-gray-700 font-medium">{label}</p>
    </div>
  )
}

const ServiceBeforeAfter: React.FC<ServiceBeforeAfterProps> = ({
  title = 'Before & After',
  subtitle = 'See The Transformation',
  pairs,
  accentColor = '#0891b2'
}) => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3"
            style={{ color: accentColor }}
          >
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Drag the slider to reveal the stunning transformations we&apos;ve created for our clients.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pairs.map((pair, index) => (
            <BeforeAfterSlider
              key={index}
              before={pair.before}
              after={pair.after}
              label={pair.label}
              accentColor={accentColor}
            />
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-12 text-center">
          <a
            href="/before-after"
            className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:gap-3"
            style={{ color: accentColor }}
          >
            View All Before &amp; After Photos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceBeforeAfter
