import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, FileCheck, Award, Users, Star, Building2, BadgeCheck, Scale } from 'lucide-react'

export const metadata = {
  title: "Credentials & Licensing | E&E Home Remodeling - CA License #1087571",
  description: "E&E Home Remodeling is fully licensed (CA #1087571), bonded, and insured. 25+ years serving Ventura, Santa Barbara & Los Angeles Counties with 5-star ratings on Yelp and Google."
}

const credentials = [
  {
    icon: Shield,
    title: "California Contractor License",
    subtitle: "License #1087571",
    description: "Fully licensed by the California Contractors State License Board. Verified and in good standing since 1999."
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    description: "Comprehensive general liability insurance and workers' compensation coverage. Your home and our team are protected."
  },
  {
    icon: Scale,
    title: "Bonded",
    description: "Licensed contractor bond on file with the state of California. Financial protection for every project we undertake."
  },
  {
    icon: BadgeCheck,
    title: "B - General Building Contractor",
    description: "Our license class allows us to handle complete remodeling projects—kitchens, bathrooms, additions, whole-house renovations, and ADUs."
  }
]

const ratings = [
  {
    platform: "Yelp",
    rating: "5.0",
    reviews: "50+",
    logo: "/yelp-5-star.png"
  },
  {
    platform: "Google",
    rating: "5.0",
    reviews: "40+",
    logo: "/google-logo.png"
  }
]

const whyItMatters = [
  {
    title: "Licensing Protects You",
    description: "Unlicensed contractors have no accountability. If something goes wrong, you have no recourse. Our license means the state holds us to professional standards—and you have protection."
  },
  {
    title: "Insurance Protects Your Home",
    description: "If an unlicensed contractor damages your property or someone gets hurt, you could be liable. Our comprehensive insurance means you're never at risk."
  },
  {
    title: "Bonding Protects Your Investment",
    description: "Our contractor bond is a guarantee. If we fail to complete work as agreed, you have financial recourse through the bond."
  },
  {
    title: "Permits Protect Your Property Value",
    description: "Work done without permits can kill a home sale or create liability issues. We pull proper permits for every project, protecting your investment."
  }
]

const CredentialsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[45%]">
              Credentials You Can Trust
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[50%]">
              Your home is your biggest investment. You deserve a contractor with the credentials to back up their promises. Here&apos;s everything you need to know about our qualifications.
            </p>
          </div>
        </section>

        {/* License Verification Banner */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl text-white/80 mb-1">California Contractor License</p>
                  <p className="text-3xl sm:text-4xl font-medium tracking-tighter">#1087571</p>
                </div>
              </div>
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0891b2] rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Verify License
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12">
            Our Qualifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 border border-stone-200 rounded-2xl hover:border-[#0891b2] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0891b2]/10 flex items-center justify-center">
                    <cred.icon className="w-7 h-7 text-[#0891b2]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-1">
                      {cred.title}
                    </h3>
                    {cred.subtitle && (
                      <p className="text-base text-[#0891b2] font-medium tracking-tighter mb-2">
                        {cred.subtitle}
                      </p>
                    )}
                    <p className="text-base sm:text-lg text-black/60 tracking-tight leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ratings Section */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12">
            Trusted & Highly Rated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ratings.map((platform, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center"
              >
                <Image
                  src={platform.logo}
                  alt={platform.platform}
                  width={120}
                  height={60}
                  className="h-10 sm:h-12 w-auto mx-auto mb-6"
                />
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-[#0891b2] text-[#0891b2]" />
                  ))}
                </div>
                <p className="text-4xl sm:text-5xl font-medium text-black/90 tracking-tighter mb-1">
                  {platform.rating}
                </p>
                <p className="text-lg text-black/60 tracking-tighter">
                  {platform.reviews} Reviews on {platform.platform}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#0891b2] font-medium text-lg hover:underline"
            >
              Read Our Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16 bg-stone-50">
          <div className="py-8 lg:py-16">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-4 text-center">
              Why Credentials Matter
            </h2>
            <p className="text-lg sm:text-xl text-black/60 tracking-tighter mb-12 text-center max-w-3xl mx-auto">
              Hiring an unlicensed contractor is one of the biggest mistakes homeowners make. Here&apos;s what proper credentials protect you from.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {whyItMatters.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl font-medium text-black/90 tracking-tighter mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-black/60 tracking-tighter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-6">
              Additional Information
            </h2>
            <div className="space-y-6 text-lg text-black/70 tracking-tighter leading-relaxed">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 bg-stone-50 rounded-2xl">
                <Building2 className="w-8 h-8 text-[#0891b2] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black/90 tracking-tighter mb-2">
                    Service Areas
                  </h3>
                  <p>
                    Licensed to operate throughout California. Primary service areas: Ventura County, Santa Barbara County, and Los Angeles County (San Fernando Valley).
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 bg-stone-50 rounded-2xl">
                <Users className="w-8 h-8 text-[#0891b2] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black/90 tracking-tighter mb-2">
                    Our Team
                  </h3>
                  <p>
                    All E&E team members are vetted, trained, and supervised directly by the owners. We maintain workers&apos; compensation coverage for everyone on our job sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 sm:p-12 border border-stone-200 rounded-2xl sm:rounded-3xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Ready to start your project?
              </h2>
              <p className="text-lg text-black/60 tracking-tighter">
                Get a free consultation and see your remodel in 3D before we build.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0891b2] text-white rounded-full font-medium text-lg hover:bg-[#0891b2]/90 transition-colors whitespace-nowrap"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default CredentialsPage
