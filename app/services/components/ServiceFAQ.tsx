'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  accentColor?: string
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'FAQ',
  faqs,
  accentColor = '#0891b2'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3" style={{ color: accentColor }}>
            {subtitle}
          </p>
          <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-white hover:bg-stone-50 active:bg-stone-100 transition-colors min-h-[56px]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceFAQ
