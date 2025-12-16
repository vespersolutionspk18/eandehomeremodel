'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import MegaMenu from './MegaMenu'
import Button from './Button'

interface HeaderProps {
  enableScrollEffects?: boolean
  buttonText?: string
  buttonColor?: string
  hoverColor?: string
}

const Header = ({ enableScrollEffects = false, buttonText = 'Get Free Quote', buttonColor, hoverColor = '#0891b2' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!enableScrollEffects) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrollEffects])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Main Header - Fixed on home page, absolute on others */}
      <header className={`${enableScrollEffects ? 'fixed' : 'absolute'} z-[9999] transition-all duration-500 ${
        enableScrollEffects && isScrolled ? 'top-2 left-2 right-2 md:left-4 md:right-4' : 'top-0 left-0 right-0'
      }`}>
        <div className={`bg-white/50 backdrop-blur-xl transition-all duration-500 ${
          enableScrollEffects && isScrolled ? 'border-[2px] border-black/20 shadow-lg rounded-2xl' : 'border-b-2 border-gray-300'
        }`}>
        <div className="w-full px-4 sm:px-6 md:px-10">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/ee-logo-dark.png"
                alt="E&E Home Remodeling"
                width={140}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Primary Navigation - Centered - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <MegaMenu hoverColor={hoverColor} />
            </div>

            {/* Right Side - CTA Button (Desktop) and Hamburger (Mobile) */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Hidden on mobile */}
              <div className="hidden md:block">
                <Button variant="blue" customBackgroundColor={buttonColor || '#0891b2'} href="/contact">{buttonText}</Button>
              </div>

              {/* Hamburger Menu Button - Mobile Only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-black hover:bg-white/50 active:bg-white/70 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden safe-area-inset ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-semibold text-black">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-4 overscroll-contain">
            <nav className="flex flex-col gap-1">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 min-h-[48px] flex items-center text-lg text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                Home
              </Link>

              {/* Services Section */}
              <div className="mt-3">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Services
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  <Link
                    href="/services/kitchen-remodeling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Kitchen Remodeling
                  </Link>
                  <Link
                    href="/services/bathroom-remodeling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Bathroom Remodeling
                  </Link>
                  <Link
                    href="/services/adu-garage-conversion"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    ADU & Garage Conversion
                  </Link>
                  <Link
                    href="/services/outdoor-living"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Outdoor Living
                  </Link>
                  <Link
                    href="/services/whole-house-remodeling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Whole House Remodeling
                  </Link>
                  <Link
                    href="/services/room-additions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Room Additions
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    <span className="text-black text-[0.95rem]">FREE 3D Design</span>
                    <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full" style={{ backgroundColor: hoverColor }}>
                      Free
                    </span>
                  </Link>
                </div>
              </div>

              {/* Locations Section */}
              <div className="mt-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Service Areas
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  <Link
                    href="/locations/ventura-county"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Ventura County
                  </Link>
                  <Link
                    href="/locations/santa-barbara-county"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Santa Barbara County
                  </Link>
                  <Link
                    href="/locations/los-angeles-county"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Los Angeles County
                  </Link>
                  <Link
                    href="/locations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400, color: hoverColor }}
                  >
                    View All Locations →
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  About E&E
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  <Link
                    href="/about/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about/meet-ezra-and-ester"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Meet Ezra & Ester
                  </Link>
                  <Link
                    href="/about/our-process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 min-h-[44px] flex items-center text-[0.95rem] text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Our Process
                  </Link>
                </div>
              </div>

              {/* Other Pages */}
              <div className="mt-4">
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 min-h-[48px] flex items-center text-lg text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Our Work
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 min-h-[48px] flex items-center text-lg text-black hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-colors"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer - CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="blue"
              customBackgroundColor={buttonColor || '#0891b2'}
              className="w-full min-h-[52px]"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header