'use client'

import React from 'react'

interface KeyFeature {
  number: number
  title: string
  description: string
  titleElement?: React.ReactNode
}

interface KeyFeaturesProps {
  features: KeyFeature[]
  accentColor?: string
}

const KeyFeatures = ({ features, accentColor = '#1d4ed8' }: KeyFeaturesProps) => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col items-center text-center">
                {/* Numbered Circle */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6"
                  style={{ backgroundColor: `${accentColor}1A` }}
                >
                  <span
                    className="text-lg sm:text-xl font-semibold"
                    style={{ color: accentColor }}
                  >
                    {feature.number}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black leading-tight tracking-tight">
                    {feature.titleElement || feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base tracking-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
