'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadChange from '../homecomponents/LeadChange'
import Button from '../components/Button'
import { projects } from '../types/project'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const WorkPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Projects Grid Section */}
        <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 tracking-tighter">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-16 justify-between">
            <h2 className="text-[1.75rem] leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Featured Projects
            </h2>
            <p className="text-black/75 text-base sm:text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              Each project represents a home service business that trusted us to transform their digital presence. From SEO domination to AI optimization, these success stories show what&apos;s possible when strategy meets execution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-2 border-stone-200 hover:border-[#1d4ed8] active:border-[#1d4ed8] transition-all duration-300 hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full">
                      <span className="text-xs sm:text-sm font-semibold text-black">{project.year}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black/90 tracking-tighter mb-1 sm:mb-2 group-hover:text-[#1d4ed8] transition-colors">
                        {project.clientName}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/60 tracking-tight mb-2 sm:mb-3">
                        {project.industry}
                      </p>
                      <p className="text-sm sm:text-base text-black/75 tracking-tight leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="px-2.5 sm:px-3 py-1 bg-stone-100 text-black/70 text-[10px] sm:text-xs font-medium rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="px-2.5 sm:px-3 py-1 bg-stone-100 text-black/70 text-[10px] sm:text-xs font-medium rounded-full">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Key Result */}
                    {project.results[0] && (
                      <div className="pt-3 sm:pt-4 border-t border-stone-200">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d4ed8]">
                            {project.results[0].value}
                          </span>
                          <span className="text-xs sm:text-sm text-black/60">
                            {project.results[0].metric}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* View Case Study Link */}
                    <div className="flex items-center gap-2 text-[#1d4ed8] font-medium text-sm group-hover:gap-3 transition-all min-h-[44px]">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-3 sm:p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-4 sm:gap-6">
              <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter">
                Ready to Write Your Success Story?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-black/75 tracking-tight leading-relaxed">
                These results aren&apos;t accidents - they&apos;re the outcome of proven strategies executed by a team that understands home service businesses. Let&apos;s build your case study next.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-2 sm:mt-4">
                <Button variant="blue" href="/contact" size="lg">
                  Get Your Free Audit
                </Button>
                <Button variant="secondary" href="/services" size="lg">
                  See Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Change CTA */}
        <LeadChange text="Start Your Transformation" />

        <Footer />
      </main>
    </>
  )
}

export default WorkPage
