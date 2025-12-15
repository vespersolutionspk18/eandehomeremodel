'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceFeaturesProps {
  title: string
  subtitle: string
  features: Feature[]
  accentColor?: string
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title,
  subtitle,
  features,
  accentColor = '#0891b2'
}) => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${accentColor}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceFeatures
