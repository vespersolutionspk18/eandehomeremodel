'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, ArrowRight, Filter, Grid, LayoutGrid, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { projects, getAllCategories, getAllLocations, ProjectData } from '@/lib/projects-data'

const categoryLabels: Record<string, string> = {
  'kitchen': 'Kitchen Remodeling',
  'bathroom': 'Bathroom Remodeling',
  'whole-house': 'Whole House',
  'outdoor': 'Outdoor Living',
  'adu': 'ADU & Garage',
  'room-addition': 'Room Addition',
}

const BeforeAfterPreview = ({ project }: { project: ProjectData }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const beforeAfter = project.beforeAfters[0]

  if (!beforeAfter) return null

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      <Image
        src={beforeAfter.after}
        alt={`${project.title} - After`}
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={beforeAfter.before}
          alt={`${project.title} - Before`}
          fill
          className="object-cover"
          style={{ maxWidth: 'none', width: `${100 / (sliderPosition / 100)}%` }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-3 h-3 text-gray-600 -mr-0.5" />
          <ChevronRight className="w-3 h-3 text-gray-600 -ml-0.5" />
        </div>
      </div>
      <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded-full">
        Before
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-[#0891b2] text-white text-xs font-medium rounded-full">
        After
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'featured'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const categories = getAllCategories()
  const locations = getAllLocations()

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedCategory && project.category !== selectedCategory) return false
      if (selectedLocation && project.location !== selectedLocation) return false
      return true
    })
  }, [selectedCategory, selectedLocation])

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedLocation(null)
  }

  const hasActiveFilters = selectedCategory || selectedLocation

  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between mb-12">
            <div className="lg:w-[60%]">
              <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter mb-5 sm:mb-6">
                Our Projects
              </h1>
              <p className="text-base sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/70">
                Explore {projects.length}+ stunning transformations across Southern California.
                Every project showcases our commitment to quality craftsmanship and attention to detail.
              </p>
            </div>
            <div className="lg:w-[35%] flex flex-col gap-4">
              <div className="bg-stone-50 rounded-2xl p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium text-[#0891b2] tracking-tighter">{projects.length}+</p>
                    <p className="text-sm sm:text-base text-black/60 tracking-tight">Completed Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium text-[#0891b2] tracking-tighter">25+</p>
                    <p className="text-sm sm:text-base text-black/60 tracking-tight">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium text-[#0891b2] tracking-tighter">3</p>
                    <p className="text-sm sm:text-base text-black/60 tracking-tight">Counties Served</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium text-[#0891b2] tracking-tighter">100%</p>
                    <p className="text-sm sm:text-base text-black/60 tracking-tight">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-colors min-h-[44px] ${
                  showFilters ? 'bg-[#0891b2] text-white border-[#0891b2]' : 'border-stone-300 text-black/70 hover:border-[#0891b2] active:bg-stone-100'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-white text-[#0891b2] rounded-full text-xs flex items-center justify-center font-medium">
                    {(selectedCategory ? 1 : 0) + (selectedLocation ? 1 : 0)}
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-sm text-black/50 hover:text-black/70"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              )}

              {selectedCategory && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0891b2]/10 text-[#0891b2] rounded-full text-sm font-medium">
                  {categoryLabels[selectedCategory] || selectedCategory}
                  <button onClick={() => setSelectedCategory(null)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedLocation && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0891b2]/10 text-[#0891b2] rounded-full text-sm font-medium">
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation(null)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-black/50">{filteredProjects.length} projects</span>
              <div className="flex border border-stone-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-stone-100' : 'hover:bg-stone-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('featured')}
                  className={`p-2 ${viewMode === 'featured' ? 'bg-stone-100' : 'hover:bg-stone-50'}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Dropdowns */}
          {showFilters && (
            <div className="flex flex-wrap gap-4 mb-8 p-6 bg-stone-50 rounded-2xl">
              <div>
                <label className="block text-sm font-medium text-black/70 mb-2">Project Type</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[40px] ${
                        selectedCategory === category
                          ? 'bg-[#0891b2] text-white'
                          : 'bg-white border border-stone-200 text-black/70 hover:border-[#0891b2] active:bg-stone-100'
                      }`}
                    >
                      {categoryLabels[category] || category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black/70 mb-2">Location</label>
                <div className="flex flex-wrap gap-2">
                  {locations.map(location => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(selectedLocation === location ? null : location)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[40px] ${
                        selectedLocation === location
                          ? 'bg-[#0891b2] text-white'
                          : 'bg-white border border-stone-200 text-black/70 hover:border-[#0891b2] active:bg-stone-100'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900 capitalize">
                          {project.category.replace('-', ' ')}
                        </span>
                        <span className="px-3 py-1 bg-[#0891b2]/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {project.beforeAfters.length} Before/After
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-black/90 tracking-tight group-hover:text-[#0891b2] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-base text-black/60 tracking-tight">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {filteredProjects.map((project, index) => (
                <div key={project.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <BeforeAfterPreview project={project} />
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-4 lg:p-8`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-sm font-medium text-black/70 capitalize">
                        {project.category.replace('-', ' ')}
                      </span>
                      <span className="px-3 py-1 bg-[#0891b2]/10 rounded-full text-sm font-medium text-[#0891b2]">
                        {project.completionYear}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-3">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-base text-black/60 tracking-tight mb-4">
                      <MapPin className="w-4 h-4" />
                      {project.location}, {project.county}
                    </div>
                    <p className="text-lg text-black/70 tracking-tight leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.scope.slice(0, 4).map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-stone-100 rounded-full text-sm text-black/60">
                          {item}
                        </span>
                      ))}
                      {project.scope.length > 4 && (
                        <span className="px-3 py-1 bg-stone-100 rounded-full text-sm text-black/60">
                          +{project.scope.length - 4} more
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-[#0891b2] font-medium hover:underline"
                    >
                      View Full Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="p-3 sm:p-5 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
                Your Home Could Be Next
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
                Get your FREE 3D design and see your dream space before we build it. No obligation, no pressure - just expert guidance from a family-owned business with 25+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#0891b2] rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 active:bg-white/80 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="tel:8776389429"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 active:bg-white/20 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  Call (877) 638-9429
                </Link>
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
        </section>

        <Footer />
      </main>
    </>
  )
}
