'use client'

import React, { useState, useEffect } from 'react'
import { X, Search, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyPopupProps {
  delay?: number; // Delay in milliseconds before showing
}

const StickyPopup: React.FC<StickyPopupProps> = ({ delay = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already dismissed the popup
    const hasSeenPopup = localStorage.getItem('hasSeenPopup')

    if (hasSeenPopup) {
      return // Don't show if they've seen it before
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const handleClose = () => {
    setIsVisible(false)
    // Remember that user has seen the popup
    localStorage.setItem('hasSeenPopup', 'true')
  }

  const handleCTA = () => {
    handleClose()
    router.push('/contact')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [0.98, 1.02, 0.98], // Pulsing scale animation
          }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 0.4 },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] w-[95%] max-w-5xl"
        >
          <div className="bg-gradient-to-r from-[#1d4ed8] to-[#1e40af] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Horizontal Layout */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6 p-5 md:p-6 lg:p-8">
              {/* Left Side - Message */}
              <div className="flex-1 text-white text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold">FREE ASSESSMENT</span>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter mb-2">
                  How Does Your Business Rank Online?
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white/90 mb-3 md:mb-0">
                  Most home service businesses lose 60%+ of leads to competitors who rank higher. Find out where you stand in 60 seconds.
                </p>

                {/* Trust Elements - Desktop Only */}
                <div className="hidden md:flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-white/80" />
                    <span className="text-xs text-white/80">Free Google Ranking Check</span>
                  </div>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-white/80">✓ 500+ Contractors Trust Us</span>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="flex flex-col justify-center items-center md:items-end gap-3 md:border-l md:border-white/20 md:pl-6 lg:pl-8 w-full md:w-auto">
                <button
                  onClick={handleCTA}
                  className="bg-white hover:bg-stone-100 text-[#1d4ed8] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-200 hover:shadow-xl text-sm md:text-base lg:text-lg whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <span>Get Free Audit Now</span>
                  <span className="text-xl">→</span>
                </button>

                <p className="text-xs text-white/70 text-center md:text-right">
                  No credit card • Takes 60 seconds
                </p>
              </div>
            </div>

            {/* Animated Border Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
              style={{
                boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0 0 0 4px rgba(255, 255, 255, 0.3)',
                  '0 0 0 4px rgba(255, 255, 255, 0.7)',
                  '0 0 0 4px rgba(255, 255, 255, 0.3)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyPopup
