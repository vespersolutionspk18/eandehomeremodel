import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Hammer, Award, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "About E&E Home Remodeling | 25+ Years of Family Craftsmanship",
  description: "Meet Ezra & Ester, the family behind E&E Home Remodeling. 25+ years of expert kitchen, bathroom, and whole house remodeling in Ventura, Santa Barbara & Los Angeles Counties. CA License #1087571."
}

const aboutLinks = [
  {
    title: "Our Story",
    description: "How a family passion became Southern California's trusted remodeling company",
    href: "/about/our-story",
    icon: ChevronRight
  },
  {
    title: "Meet Ezra & Ester",
    description: "The owners who personally manage every project",
    href: "/about/meet-ezra-and-ester",
    icon: Users
  },
  {
    title: "Our Process",
    description: "From free consultation to final walkthrough",
    href: "/about/our-process",
    icon: Hammer
  },
  {
    title: "Credentials",
    description: "Licensed, bonded, insured, and 5-star rated",
    href: "/about/credentials",
    icon: Award
  }
]

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "3", label: "Office Locations" },
  { value: "5★", label: "Average Rating" }
]

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[45%]">
              Family-Owned. Quality-Driven. Trusted for 25+ Years.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[50%]">
              E&E Home Remodeling isn&apos;t a franchise or a faceless corporation. We&apos;re Ezra and Ester—a husband and wife team who built this company on a simple promise: treat every home like it&apos;s our own.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/about-hero.jpg"
              alt="E&E Home Remodeling - Kitchen transformation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex flex-wrap gap-3 sm:gap-4">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm sm:text-base font-medium text-gray-900">
                CA License #1087571
              </span>
              <span className="px-4 py-2 bg-[#0891b2] rounded-full text-sm sm:text-base font-medium text-white">
                FREE 3D Design
              </span>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 sm:p-8 border-l-2 border-l-[#0891b2] flex flex-col gap-1">
                <h5 className="text-5xl sm:text-6xl md:text-7xl text-black font-medium">{stat.value}</h5>
                <p className="text-base sm:text-lg md:text-xl text-black/90 tracking-tighter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose E&E */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-6">
                Why Homeowners Choose E&E
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-black/80 tracking-tighter leading-relaxed">
                <p>
                  When you hire a large contractor, your project gets passed between salespeople, project managers, and crews you&apos;ve never met. At E&E, <strong>Ezra or Ester is on-site for every project</strong>—answering your questions, solving problems in real-time, and making sure every detail meets our family&apos;s standards.
                </p>
                <p>
                  We offer something most contractors charge thousands for: <strong>FREE 3D design</strong> that lets you see your remodel before we break ground. No guesswork. No surprises. Just confidence.
                </p>
                <p>
                  Over 500 families across Ventura, Santa Barbara, and Los Angeles Counties have trusted us with their homes. Their 5-star reviews speak to what matters most: <strong>quality work, honest communication, and a team that truly cares</strong>.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[450px]">
              <Image
                src="/about-team.jpg"
                alt="Ezra and Ester on a job site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Learn More Links */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8">
            Learn More About Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aboutLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-[#0891b2] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#0891b2]/10 flex items-center justify-center transition-colors">
                    <link.icon className="w-6 h-6 text-[#0891b2]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[#0891b2] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-2">
                  {link.title}
                </h3>
                <p className="text-base sm:text-lg text-black/60 tracking-tight">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 tracking-tighter mb-8 max-w-2xl mx-auto">
              Schedule a free consultation and see your remodel in 3D—before we start building.
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

        <Footer />
      </main>
    </>
  )
}

export default AboutPage
