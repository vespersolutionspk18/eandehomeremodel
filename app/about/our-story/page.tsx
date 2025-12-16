import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Award, Heart } from 'lucide-react'

export const metadata = {
  title: "Our Story | E&E Home Remodeling - 25+ Years of Family Excellence",
  description: "Discover how Ezra and Ester built E&E Home Remodeling from a small family operation into Southern California's most trusted remodeling company. Our journey from 1999 to today."
}

const milestones = [
  {
    year: "1999",
    title: "E&E Founded",
    description: "Ezra and Ester start E&E Home Remodeling with one truck and a simple promise: treat every home like our own."
  },
  {
    year: "2005",
    title: "100th Project",
    description: "We complete our 100th project and open our first dedicated showroom in Tarzana."
  },
  {
    year: "2010",
    title: "Ventura Expansion",
    description: "Growing demand leads us to open our Ventura County office, bringing quality remodeling to more families."
  },
  {
    year: "2015",
    title: "Santa Barbara Office",
    description: "We expand to Santa Barbara County, serving the entire Southern California coastal region."
  },
  {
    year: "2020",
    title: "FREE 3D Design Launch",
    description: "We pioneer FREE 3D design services, letting homeowners visualize their remodel before construction."
  },
  {
    year: "2024",
    title: "500+ Projects Complete",
    description: "Over 500 families have trusted us with their homes, maintaining our 5-star reputation every step of the way."
  }
]

const OurStoryPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[45%]">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[50%]">
              How a husband-wife team with a passion for quality transformed into Southern California&apos;s most trusted home remodeling company.
            </p>
          </div>
        </section>

        {/* Main Story */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px]">
              <Image
                src="/our-story.jpg"
                alt="E&E Home Remodeling journey"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6 text-lg sm:text-xl text-black/80 tracking-tighter leading-relaxed">
              <p>
                In 1999, Ezra and Ester made a decision that would change their lives—and the homes of hundreds of Southern California families. Armed with Ezra&apos;s construction expertise, Ester&apos;s design eye, and a shared belief that every homeowner deserves honest, quality work, they started E&E Home Remodeling.
              </p>
              <p>
                In those early days, they did everything themselves. Ezra was on the tools while Ester managed clients and brought creative vision to each project. They didn&apos;t have fancy offices or big marketing budgets—just word of mouth and the results that spoke for themselves.
              </p>
              <p>
                What set them apart then is what sets them apart now: <strong>the owners are involved in every project</strong>. While other companies hand you off to project managers you&apos;ve never met, Ezra and Ester remain personally invested in your home.
              </p>
              <p>
                Twenty-five years later, that commitment hasn&apos;t changed. They&apos;ve built a team that shares their values, opened three offices across Southern California, and completed over 500 projects—but you&apos;ll still find Ezra on job sites and Ester working directly with clients on design.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl">
              <Heart className="w-10 h-10 text-[#0891b2] mb-4" />
              <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-3">
                Family Business Values
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                We&apos;re not a franchise or a corporation. Every project reflects on our family name—and we take that seriously. When we say your home will be treated like our own, we mean it.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl">
              <Award className="w-10 h-10 text-[#0891b2] mb-4" />
              <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-3">
                Quality Over Shortcuts
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                We don&apos;t cut corners to save time or money. Every material, every technique, every finish is chosen for durability and craftsmanship. That&apos;s why our work stands the test of time.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl">
              <MapPin className="w-10 h-10 text-[#0891b2] mb-4" />
              <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-3">
                Local Roots, Real Relationships
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                We live in the communities we serve. Our reputation matters here—so we go above and beyond for every client. Many of our projects come from referrals and repeat customers.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-stone-50 rounded-2xl">
              <Calendar className="w-10 h-10 text-[#0891b2] mb-4" />
              <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-3">
                Transparent Communication
              </h3>
              <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                No surprises. No hidden fees. We explain every step of the process, keep you updated throughout, and make sure you know exactly what to expect—and what you&apos;re paying for.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16 bg-stone-50">
          <div className="py-8 lg:py-16">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12 text-center">
              25+ Years of Milestones
            </h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 sm:gap-8 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-[#0891b2] flex items-center justify-center text-white font-medium text-xs sm:text-base flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#0891b2]/20 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl sm:text-2xl font-medium text-black/90 tracking-tighter mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-black/70 tracking-tighter leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 sm:p-12 border border-stone-200 rounded-2xl sm:rounded-3xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Want to know more about our team?
              </h2>
              <p className="text-lg text-black/60 tracking-tighter">
                Meet the people who will transform your home.
              </p>
            </div>
            <Link
              href="/about/meet-ezra-and-ester"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0891b2] text-white rounded-full font-medium text-base sm:text-lg hover:bg-[#0891b2]/90 active:bg-[#0891b2]/80 active:scale-[0.98] transition-all whitespace-nowrap min-h-[48px]"
            >
              Meet Ezra & Ester
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default OurStoryPage
