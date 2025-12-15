import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Palette, FileText, ClipboardCheck, Hammer, CheckCircle } from 'lucide-react'

export const metadata = {
  title: "Our Process | E&E Home Remodeling - From Consultation to Completion",
  description: "See exactly how E&E Home Remodeling transforms your home. Free consultation, FREE 3D design, transparent pricing, and expert construction. No surprises, just results."
}

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    subtitle: "We come to you",
    description: "Your remodel starts with a conversation. We visit your home, listen to your vision, assess the space, and discuss your goals and budget. This is about understanding what you want—not selling you what we want.",
    details: [
      "In-home visit at your convenience",
      "Discuss your vision and priorities",
      "Assess structural possibilities",
      "Initial budget discussion",
      "Answer all your questions"
    ],
    icon: Home,
    color: "bg-cyan-50"
  },
  {
    number: "02",
    title: "FREE 3D Design",
    subtitle: "See it before we build it",
    description: "Here's something most contractors charge $2,000-5,000 for—we include it free. You'll see photorealistic 3D renderings of your remodel before we break ground. No guessing, no surprises.",
    details: [
      "Photorealistic 3D renderings",
      "Multiple design options",
      "Virtual walkthrough of your space",
      "Revisions until you love it",
      "Included at no extra cost"
    ],
    icon: Palette,
    color: "bg-teal-50"
  },
  {
    number: "03",
    title: "Detailed Proposal",
    subtitle: "Transparent pricing",
    description: "You'll receive a comprehensive proposal with itemized pricing. We explain every cost, every material choice, and every phase of work. No hidden fees, no surprise add-ons down the road.",
    details: [
      "Itemized cost breakdown",
      "Material specifications",
      "Project timeline",
      "Payment schedule",
      "Everything in writing"
    ],
    icon: FileText,
    color: "bg-emerald-50"
  },
  {
    number: "04",
    title: "Permits & Prep",
    subtitle: "We handle the paperwork",
    description: "Building permits, HOA approvals, city requirements—we manage all of it. You don't have to navigate bureaucracy or worry about compliance. That's our job.",
    details: [
      "Building permit applications",
      "HOA coordination if needed",
      "City inspections scheduled",
      "Material ordering",
      "Site preparation"
    ],
    icon: ClipboardCheck,
    color: "bg-green-50"
  },
  {
    number: "05",
    title: "Construction",
    subtitle: "Owners on-site",
    description: "This is where E&E truly stands apart. Ezra or Ester is personally on your job site throughout construction—not just checking in occasionally, but actively managing every detail.",
    details: [
      "Daily progress updates",
      "Clean, organized worksite",
      "Respect for your schedule",
      "Quality checkpoints",
      "Direct owner access anytime"
    ],
    icon: Hammer,
    color: "bg-lime-50"
  },
  {
    number: "06",
    title: "Final Walkthrough",
    subtitle: "Your satisfaction guaranteed",
    description: "Before we consider the job done, we walk through every inch together. Every detail is reviewed. Any concerns are addressed immediately. We don't leave until you're completely satisfied.",
    details: [
      "Detailed inspection together",
      "Punch list completion",
      "Care instructions provided",
      "Warranty documentation",
      "Your complete satisfaction"
    ],
    icon: CheckCircle,
    color: "bg-yellow-50"
  }
]

const OurProcessPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[45%]">
              Our Process
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[50%]">
              From first call to final walkthrough, we keep you informed and involved. Here&apos;s how we turn your vision into reality—step by step, with no surprises along the way.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className={`${step.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full`}>
                    <span className="text-6xl sm:text-7xl font-bold text-black/10 block mb-4">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-[#0891b2]" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter">
                          {step.title}
                        </h3>
                        <p className="text-base text-[#0891b2] font-medium tracking-tighter">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-black/70 tracking-tighter leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-black/60 tracking-tighter">
                          <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden relative h-[250px] sm:h-[300px] lg:h-auto lg:min-h-[400px]">
                  <Image
                    src={index % 2 === 0 ? "/process-1.jpg" : "/process-2.jpg"}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-6">
                Why Our Process Works
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-black/70 tracking-tighter leading-relaxed">
                <p>
                  Most remodeling horror stories come down to one thing: <strong>poor communication</strong>. Homeowners don&apos;t know what&apos;s happening, costs spiral out of control, and the finished product doesn&apos;t match expectations.
                </p>
                <p>
                  Our process is designed to eliminate those problems. The FREE 3D design means you see exactly what you&apos;re getting before we start. The detailed proposal means no surprise costs. The owner presence means problems get solved in real-time, not after weeks of back-and-forth.
                </p>
                <p>
                  It&apos;s not complicated—it&apos;s just what happens when you have owners who actually care about every project they take on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 tracking-tighter mb-8 max-w-2xl mx-auto">
              Step one is easy—schedule your free consultation and let&apos;s talk about what you want to create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0891b2] rounded-full font-medium text-lg hover:bg-white/90 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="tel:8776389429"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
              >
                Call (877) 638-9429
              </Link>
            </div>
          </div>
        </section>

        {/* Next Link */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 sm:p-12 border border-stone-200 rounded-2xl sm:rounded-3xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Want to see our credentials?
              </h2>
              <p className="text-lg text-black/60 tracking-tighter">
                Licensed, bonded, insured, and trusted by 500+ homeowners.
              </p>
            </div>
            <Link
              href="/about/credentials"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0891b2] text-white rounded-full font-medium text-lg hover:bg-[#0891b2]/90 transition-colors whitespace-nowrap"
            >
              Our Credentials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default OurProcessPage
