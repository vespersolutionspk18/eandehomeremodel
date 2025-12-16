import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, UserCheck, Eye, Handshake, Clock } from 'lucide-react'

export const metadata = {
  title: "Meet Ezra & Ester | The Owners Behind E&E Home Remodeling",
  description: "Get to know Ezra and Ester, the husband-wife team who personally manage every E&E Home Remodeling project. No middlemen, just owners who care about your home."
}

const commitments = [
  {
    icon: UserCheck,
    title: "On-Site Presence",
    description: "One of us is on your job site throughout the project—not just for check-ins, but actively managing every detail."
  },
  {
    icon: Eye,
    title: "Quality Oversight",
    description: "We inspect every phase of work ourselves. Nothing gets signed off until it meets our personal standards."
  },
  {
    icon: Handshake,
    title: "Direct Communication",
    description: "Questions? Concerns? You call us directly. No phone trees, no waiting for callbacks from people you've never met."
  },
  {
    icon: Clock,
    title: "Accountability",
    description: "When the owners are personally involved, problems get solved fast. No finger-pointing or buck-passing."
  }
]

const MeetTheTeamPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Hero Section */}
        <section className="p-4 sm:p-5 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between mb-8 lg:mb-12">
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl text-black/95 tracking-tighter lg:w-[45%]">
              Meet Ezra & Ester
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tighter leading-relaxed text-black/80 lg:w-[50%]">
              The owners who built this company—and who personally manage your project from start to finish.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/about-team.jpg"
              alt="Ezra and Ester - E&E Home Remodeling owners"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Why No Middlemen Matters */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-6">
              Why &ldquo;No Middlemen&rdquo; Matters
            </h2>
            <div className="space-y-6 text-lg sm:text-xl text-black/80 tracking-tighter leading-relaxed">
              <p>
                When you hire most contractors, here&apos;s what happens: you meet a salesperson who makes promises. Then your project gets handed to a project manager you&apos;ve never met. They coordinate crews who work on dozens of jobs at once. The person who sold you? You might never see them again.
              </p>
              <p>
                At E&E, <strong>the people who promise are the people who deliver</strong>. Ezra manages construction with 25+ years of hands-on expertise. Ester works directly with you on design and materials. When something needs a decision, an owner makes it—right there, on the spot.
              </p>
              <p>
                This isn&apos;t just a tagline. It&apos;s how we&apos;ve operated for over two decades, and it&apos;s why our clients leave 5-star reviews talking about communication, trust, and craftsmanship that exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Bios */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Ezra */}
            <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="w-20 h-20 rounded-full bg-[#0891b2] flex items-center justify-center text-white text-2xl font-medium mb-6">
                E
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Ezra
              </h3>
              <p className="text-lg text-[#0891b2] font-medium tracking-tighter mb-6">
                Construction & Project Management
              </p>
              <div className="space-y-4 text-lg text-black/70 tracking-tighter leading-relaxed">
                <p>
                  Ezra started in construction at 18 and has spent over 30 years perfecting his craft. From framing to finish work, he&apos;s done it all—and that experience shows in his ability to anticipate problems before they happen.
                </p>
                <p>
                  On every E&E project, Ezra is the one ensuring structural integrity, code compliance, and the kind of craftsmanship that lasts. He personally oversees crews, inspects work, and makes sure nothing leaves the job site until it&apos;s right.
                </p>
                <p>
                  <strong>His philosophy:</strong> &ldquo;There&apos;s no such thing as &apos;good enough.&apos; Either it&apos;s done right, or it&apos;s not done yet.&rdquo;
                </p>
              </div>
            </div>

            {/* Ester */}
            <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="w-20 h-20 rounded-full bg-[#0891b2] flex items-center justify-center text-white text-2xl font-medium mb-6">
                E
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Ester
              </h3>
              <p className="text-lg text-[#0891b2] font-medium tracking-tighter mb-6">
                Design & Client Relations
              </p>
              <div className="space-y-4 text-lg text-black/70 tracking-tighter leading-relaxed">
                <p>
                  Ester brings the creative vision that transforms houses into dream homes. With an eye for design and a talent for understanding what clients really want, she guides homeowners through every decision—from layout to lighting to the perfect cabinet hardware.
                </p>
                <p>
                  She&apos;s also the driving force behind E&E&apos;s FREE 3D design service, believing that every homeowner deserves to see their remodel before construction begins.
                </p>
                <p>
                  <strong>Her philosophy:</strong> &ldquo;Your home should reflect who you are. My job is to help you discover that—and then make it real.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <h2 className="text-3xl sm:text-4xl text-black/90 font-medium tracking-tighter mb-8 lg:mb-12">
            Our Personal Commitment to Every Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-5 p-5 sm:p-8 border border-stone-200 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-black/90 tracking-tighter mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-black/60 tracking-tighter leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="bg-[#0891b2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter mb-4">
                Ready to Talk?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 tracking-tighter mb-8">
                Reach out directly to schedule your free consultation. You&apos;ll be working with us from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="tel:8776389429"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#0891b2] rounded-full font-medium text-base sm:text-lg hover:bg-white/90 active:bg-white/80 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  <Phone className="w-5 h-5" />
                  (877) 638-9429
                </Link>
                <Link
                  href="mailto:info@eandehomeremodel.com"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white rounded-full font-medium text-base sm:text-lg hover:bg-white/10 active:bg-white/20 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Link>
              </div>
              <p className="text-sm text-white/70">
                Or visit one of our showrooms in Tarzana, Oxnard, or Santa Barbara
              </p>
            </div>
          </div>
        </section>

        {/* Next Link */}
        <section className="p-4 sm:p-5 lg:p-10 my-8 lg:my-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 sm:p-12 border border-stone-200 rounded-2xl sm:rounded-3xl">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-black/90 tracking-tighter mb-2">
                Curious about how we work?
              </h2>
              <p className="text-lg text-black/60 tracking-tighter">
                See our step-by-step process from consultation to completion.
              </p>
            </div>
            <Link
              href="/about/our-process"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0891b2] text-white rounded-full font-medium text-base sm:text-lg hover:bg-[#0891b2]/90 active:bg-[#0891b2]/80 active:scale-[0.98] transition-all whitespace-nowrap min-h-[48px]"
            >
              Our Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default MeetTheTeamPage
