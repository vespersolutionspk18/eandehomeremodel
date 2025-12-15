'use client'

import React from 'react'

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ServiceProcessProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
  accentColor?: string
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({
  title = 'Our Simple Process',
  subtitle = 'How It Works',
  steps,
  accentColor = '#0891b2'
}) => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3" style={{ color: accentColor }}>
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-stone-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10"
                  style={{ backgroundColor: accentColor }}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProcess
