'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import { MapPin, Calendar, Clock, DollarSign, Star, ChevronLeft, ChevronRight, X, CheckCircle } from 'lucide-react'
import { ProjectData, getProjectBySlug } from '@/lib/projects-data'

interface ProjectPageTemplateProps {
  project: ProjectData
}

const BeforeAfterSlider = ({ before, after, area }: { before: string; after: string; area: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }

  return (
    <div className="flex flex-col">
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
        {/* After Image (Full) */}
        <Image
          src={after}
          alt={`${area} - After`}
          fill
          className="object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={before}
            alt={`${area} - Before`}
            fill
            className="object-cover"
            style={{ maxWidth: 'none', width: `${100 / (sliderPosition / 100)}%` }}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-600 -mr-1" />
            <ChevronRight className="w-4 h-4 text-gray-600 -ml-1" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-sm font-medium rounded-full">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0891b2] text-white text-sm font-medium rounded-full">
          After
        </div>
      </div>
      <p className="text-center mt-3 text-base font-medium text-black/70 tracking-tight">{area}</p>
    </div>
  )
}

const LightboxGallery = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext
}: {
  images: string[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-white/80 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-5xl h-[80vh] mx-4">
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.galleryImages.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.galleryImages.length - 1 ? 0 : prev + 1))
  }

  const relatedProjectsData = project.relatedProjects
    .map(slug => getProjectBySlug(slug))
    .filter(Boolean) as ProjectData[]

  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0891b2] hover:underline text-base font-medium tracking-tight"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8">
            <div className="lg:w-[60%]">
              <div className="flex items-center gap-2 text-[#0891b2] mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-base font-medium tracking-tight">{project.location}, {project.county}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-black/95 tracking-tighter mb-6">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl tracking-tighter leading-relaxed text-black/70">
                {project.description}
              </p>
            </div>

            <div className="lg:w-[40%]">
              <div className="bg-stone-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-black/90 tracking-tight mb-6">Project Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0891b2]" />
                    </div>
                    <div>
                      <p className="text-sm text-black/50 tracking-tight">Location</p>
                      <p className="text-base font-medium text-black/90 tracking-tight">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-[#0891b2]" />
                    </div>
                    <div>
                      <p className="text-sm text-black/50 tracking-tight">Completed</p>
                      <p className="text-base font-medium text-black/90 tracking-tight">{project.completionYear}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#0891b2]" />
                    </div>
                    <div>
                      <p className="text-sm text-black/50 tracking-tight">Timeline</p>
                      <p className="text-base font-medium text-black/90 tracking-tight">{project.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-[#0891b2]" />
                    </div>
                    <div>
                      <p className="text-sm text-black/50 tracking-tight">Investment</p>
                      <p className="text-base font-medium text-black/90 tracking-tight">{project.budgetRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 capitalize">
                {project.category.replace('-', ' ')}
              </span>
              <span className="px-4 py-2 bg-[#0891b2] rounded-full text-sm font-medium text-white">
                {project.completionYear}
              </span>
            </div>
          </div>
        </section>

        {/* Project Scope */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8">
              Project Scope
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.scope.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-stone-100 rounded-full text-base text-black/70 tracking-tight"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-amber-50 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl font-medium text-black/90 tracking-tighter mb-4">
                The Challenge
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl font-medium text-black/90 tracking-tighter mb-4">
                Our Solution
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4">
            Before & After Transformations
          </h2>
          <p className="text-lg text-black/60 tracking-tighter mb-10 max-w-3xl">
            Drag the slider to reveal the dramatic transformation. See the incredible difference quality craftsmanship makes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {project.beforeAfters.map((ba, index) => (
              <BeforeAfterSlider
                key={index}
                before={ba.before}
                after={ba.after}
                area={ba.area}
              />
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16 bg-stone-50">
          <div className="py-8 lg:py-12">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-black/60 tracking-tighter mb-10">
              {project.galleryImages.length} photos showcasing every detail of this transformation. Click any image to enlarge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8">
            Notable Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                <span className="text-base text-black/80 tracking-tight">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-relaxed mb-8 max-w-4xl">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-medium">
                {project.testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-medium">{project.testimonial.name}</p>
                <p className="text-white/80">{project.testimonial.title}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjectsData.length > 0 && (
          <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4">
              Similar Projects
            </h2>
            <p className="text-lg text-black/60 tracking-tighter mb-10">
              Explore more transformations like this one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjectsData.map((relatedProject, index) => (
                <Link
                  key={index}
                  href={`/projects/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={relatedProject.heroImage}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 rounded-full text-sm font-medium text-gray-900 capitalize">
                        {relatedProject.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-black/90 tracking-tight group-hover:text-[#0891b2] transition-colors mb-1">
                    {relatedProject.title}
                  </h3>
                  <p className="text-base text-black/60 tracking-tight">
                    {relatedProject.location}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="p-3 sm:p-5 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl py-16 md:py-24 px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready for Your Own Transformation?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                Get your FREE 3D design and see your dream space before we build it. No obligation, no pressure - just expert guidance from a family-owned business with 25+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0891b2] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                >
                  Get Free 3D Design
                </Link>
                <Link
                  href="tel:8776389429"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Call (877) 638-9429
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Family Owned</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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

      <LightboxGallery
        images={project.galleryImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  )
}

export default ProjectPageTemplate
