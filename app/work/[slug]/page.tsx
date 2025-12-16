'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import LeadChange from '@/app/homecomponents/LeadChange'
import Button from '@/app/components/Button'
import { projects } from '@/app/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react'

const ProjectDetailPage = () => {
  const params = useParams()
  const slug = params.slug as string

  // Find the project by slug
  const project = projects.find(p => p.slug === slug)

  // If project not found, show 404-like message
  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
          <div className="p-10 text-center">
            <h1 className="text-4xl font-bold text-black/80 mb-4">Project Not Found</h1>
            <p className="text-xl text-black/60 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/work" className="text-[#1d4ed8] underline">
              Back to All Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Back Button */}
        <div className="px-4 sm:px-5 md:px-10 pt-5 md:pt-6 pb-4 md:pb-5">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black/70 hover:text-[#1d4ed8] active:text-[#1d4ed8] transition-colors font-medium min-h-[44px] py-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Image Section */}
        <div className="px-4 sm:px-5 md:px-10 pb-5 md:pb-10">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Hero Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 lg:p-12 text-white">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium">{project.industry}</span>
                  <span className="text-xs sm:text-sm">•</span>
                  <span className="text-xs sm:text-sm font-medium">{project.year}</span>
                </div>
                <h1 className="text-[1.75rem] leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-3 sm:mb-4">
                  {project.clientName}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Overview */}
        <div className="p-4 sm:p-5 md:p-10">
          <div className="bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tighter">Key Results</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {result.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90 mb-0.5 sm:mb-1">
                    {result.metric}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/70">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="p-4 sm:p-5 md:p-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-12">
            {/* Challenge */}
            <div className="bg-stone-100 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tighter mb-4 sm:mb-6">
                The Challenge
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-black/75 tracking-tight leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-[#1d4ed8]/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black/90 tracking-tighter mb-4 sm:mb-6">
                Our Solution
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-black/75 tracking-tight leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Services Delivered */}
        <div className="p-4 sm:p-5 md:p-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter mb-6 sm:mb-8">
              Services Delivered
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {project.services.map((service) => (
                <div
                  key={service}
                  className="bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-[#1d4ed8] active:border-[#1d4ed8] transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#1d4ed8]" />
                  <span className="text-center font-semibold text-sm sm:text-base text-black/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="p-4 sm:p-5 md:p-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter mb-6 sm:mb-8">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative h-40 sm:h-64 md:h-72 rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.clientName} project image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <div className="p-4 sm:p-5 md:p-10">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
                {/* Quote Icon Background */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-[120px] sm:text-[200px] text-black/5 font-serif leading-none">
                  &ldquo;
                </div>

                <div className="relative z-10">
                  <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black/90 tracking-tight leading-relaxed mb-6 sm:mb-8 font-medium">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1d4ed8] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-black/90">{project.testimonial.author}</div>
                      <div className="text-sm sm:text-lg text-black/70">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="p-3 sm:p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-[#1d4ed8] p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 sm:gap-6 text-white">
              <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Want Results Like This?
              </h2>

              <p className="text-base sm:text-lg md:text-xl tracking-tight leading-relaxed text-white/90">
                We&apos;ve helped 500+ home service businesses achieve breakthrough growth. Your success story could be next. Let&apos;s discuss how we can transform your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-2 sm:mt-4">
                <Button variant="secondary" href="/contact" size="lg">
                  Get Your Free Audit
                </Button>
                <Button variant="white" href="/work" size="lg">
                  View More Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects / More Work */}
        <div className="p-4 sm:p-5 md:p-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter mb-6 sm:mb-8">
              More Success Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/work/${relatedProject.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-stone-200 hover:border-[#1d4ed8] active:border-[#1d4ed8] transition-all duration-300">
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <Image
                          src={relatedProject.heroImage}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="text-lg sm:text-xl font-semibold text-black/90 mb-1 sm:mb-2 group-hover:text-[#1d4ed8] transition-colors">
                          {relatedProject.clientName}
                        </h3>
                        <p className="text-xs sm:text-sm text-black/60 mb-2 sm:mb-3">{relatedProject.industry}</p>
                        <div className="flex items-center gap-2 text-[#1d4ed8] font-medium text-sm min-h-[44px]">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Lead Change CTA */}
        <LeadChange text="Ready To Expand?" />

        <Footer />
      </main>
    </>
  )
}

export default ProjectDetailPage
