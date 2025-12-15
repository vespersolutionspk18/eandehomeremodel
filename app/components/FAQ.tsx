'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  schemaOrg?: boolean
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Frequently Asked Questions",
  items,
  schemaOrg = true 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const faqSchema = schemaOrg ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  const textVariants = {
    initial: {
      y: 0
    },
    hover: {
      y: '-150%'
    }
  }

  const textVariantsHover = {
    initial: {
      y: '150%'
    },
    hover: {
      y: 0
    }
  }

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="flex flex-col lg:flex-row my-8 sm:my-10 md:my-12 lg:my-16 gap-4 sm:gap-5 md:gap-6 lg:gap-7 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 text-black/95">
        <h5 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl w-full lg:w-[30%] font-semibold tracking-tighter">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word}{index === 1 && <br className="hidden lg:block" />}{index !== title.split(' ').length - 1 && index !== 1 && ' '}
            </React.Fragment>
          ))}
        </h5>
        <div className="w-full lg:w-[70%] flex flex-col gap-3 sm:gap-4 md:gap-5">
          {items.map((item) => {
            const isExpanded = expandedItems.has(item.id)
            const isHovered = hoveredItem === item.id
            
            return (
              <div key={item.id}>
                <motion.div
                  onClick={() => toggleItem(item.id)}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  initial={{ borderRadius: 12 }}
                  animate={{ borderRadius: isHovered ? 20 : 12 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="pl-3 sm:pl-4 md:pl-5 pr-2 sm:pr-3 py-2 sm:py-2.5 md:py-3 flex flex-row justify-between text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tighter text-black/95 items-center bg-stone-200/40 cursor-pointer overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <motion.h5
                      initial="initial"
                      animate={isHovered ? 'hover' : 'initial'}
                      variants={textVariants}
                      transition={{ duration: 0.12, ease: 'easeInOut' }}
                    >
                      {item.question}
                    </motion.h5>
                    <motion.h5
                      className="absolute inset-0"
                      initial="initial"
                      animate={isHovered ? 'hover' : 'initial'}
                      variants={textVariantsHover}
                      transition={{ duration: 0.18, ease: 'easeInOut' }}
                    >
                      {item.question}
                    </motion.h5>
                  </div>
                  <motion.div
                    className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-black/95">+</p>
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.2, ease: 'easeInOut' }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 sm:pt-2.5 md:pt-3 pb-1 px-3 sm:px-4 text-sm sm:text-base md:text-lg text-black/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FAQ