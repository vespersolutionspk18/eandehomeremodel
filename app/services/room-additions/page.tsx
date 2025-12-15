'use client'

import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ServiceHero from '../components/ServiceHero'
import ServiceIntro from '../components/ServiceIntro'
import ServiceFeatures from '../components/ServiceFeatures'
import ServiceBeforeAfter from '../components/ServiceBeforeAfter'
import ServiceGallery from '../components/ServiceGallery'
import ServiceFAQ from '../components/ServiceFAQ'
import ServiceCTA from '../components/ServiceCTA'
import {
  PlusSquare,
  Home,
  Bed,
  Users2,
  Briefcase,
  Maximize,
} from 'lucide-react'

const RoomAdditionsPage = () => {
  const features = [
    {
      icon: Bed,
      title: 'Bedroom Additions',
      description: 'Add bedrooms for growing families, guests, or convert to a luxurious primary suite with bathroom.',
    },
    {
      icon: Home,
      title: 'Family Room Extensions',
      description: 'Expand your living space with a great room, family room, or sunroom addition.',
    },
    {
      icon: Briefcase,
      title: 'Home Office Additions',
      description: 'Purpose-built home offices with proper lighting, sound insulation, and separate entries.',
    },
    {
      icon: Users2,
      title: 'In-Law Suites',
      description: 'Self-contained suites with bedroom, bathroom, and kitchenette for multi-generational living.',
    },
    {
      icon: PlusSquare,
      title: 'Second Story Additions',
      description: 'Build up when you can\'t build out - add a complete second floor to your home.',
    },
    {
      icon: Maximize,
      title: 'Bump-Outs',
      description: 'Smaller additions that expand a room by a few feet - perfect for enlarged kitchens or bathrooms.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-3.jpg', after: '/after-whole-house-2.jpg', label: 'Thousand Oaks Home Addition' },
    { before: '/before-4.jpg', after: '/after-whole-house-3.jpg', label: 'Ventura Family Room Extension' },
    { before: '/before-5.jpg', after: '/after-outdoor-2.jpg', label: 'Calabasas Second Story' },
    { before: '/before-11.jpg', after: '/after-kitchen-1.jpg', label: 'Santa Barbara Great Room' },
    { before: '/before-12.jpg', after: '/after-bathroom-2.jpg', label: 'Woodland Hills Master Suite' },
    { before: '/before-6.jpg', after: '/after-kitchen-2.jpg', label: 'Camarillo Sunroom Addition' },
  ]

  const galleryImages = [
    { src: '/room-addition-1.jpg', alt: 'Primary bedroom addition', caption: 'Primary Suite Addition' },
    { src: '/project-1.jpg', alt: 'Family room extension', caption: 'Great Room Extension' },
    { src: '/project-2.jpg', alt: 'Home office addition', caption: 'Custom Home Office' },
    { src: '/whole-house-2.jpg', alt: 'Second story addition', caption: 'Second Story Addition' },
    { src: '/whole-house-3.jpg', alt: 'In-law suite addition', caption: 'In-Law Suite' },
    { src: '/project-3.jpg', alt: 'Sunroom addition', caption: 'Sunroom Addition' },
  ]

  const faqs = [
    {
      question: 'What types of room additions can you build?',
      answer: 'We build all types of additions: single-room bump-outs, primary suite additions, family room extensions, second story additions, in-law suites, home offices, sunrooms, and multi-room expansions. Each is designed to seamlessly match your existing home.',
    },
    {
      question: 'How much does a room addition cost?',
      answer: 'Room additions in Southern California typically range from $250-$500 per square foot depending on complexity. A 400 sq ft bedroom addition might cost $100,000-$180,000, while a 1,000 sq ft second story could range from $250,000-$450,000. We provide detailed quotes.',
    },
    {
      question: 'Will the addition match my existing home?',
      answer: 'Absolutely! We specialize in seamless integration - matching rooflines, siding, windows, and trim so your addition looks like it was always part of the original design. Many clients\' neighbors can\'t tell which part is new.',
    },
    {
      question: 'Do room additions require permits?',
      answer: 'Yes, all room additions require building permits and often planning approval. Additions must meet setback requirements, lot coverage limits, and height restrictions. We handle the entire permit process and ensure code compliance.',
    },
    {
      question: 'How long does it take to build a room addition?',
      answer: 'A typical single-story addition takes 3-5 months from permit approval. Second story additions take 5-8 months. The permit process adds 2-4 months before construction. We provide a detailed timeline during your consultation.',
    },
    {
      question: 'Can I stay in my home during construction?',
      answer: 'Usually yes! Most additions allow you to live in your home during construction since work is happening in a new area. There may be some disruption when we tie into existing systems, but we minimize inconvenience.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="Room Additions in Southern California"
          subtitle="Expand Your Living Space"
          description="Need more space? Room additions let you expand your home without moving. From bedroom additions and family room extensions to second stories and in-law suites, we build seamless additions that look like they've always been there."
          heroImage="/room-addition-1.jpg"
          badges={['Seamless Integration', 'Permit Experts', 'CA Lic #1087571']}
        />

        <ServiceIntro
          title="Expand Your Home, Not Your Address"
          paragraphs={[
            "Your family's needs change over time. Maybe you need another bedroom, a home office, or space for aging parents. Room additions let you grow your home while staying in the neighborhood you love.",
            "At E&E Home Remodeling, we specialize in additions that seamlessly integrate with your existing home. Our goal is for the addition to look like it was always part of the original design - not a tacked-on afterthought.",
            "With 25+ years of building additions throughout Ventura, Santa Barbara, and Los Angeles counties, we've mastered everything from simple bump-outs to complex second-story additions. Ezra and Ester personally ensure every detail is perfect."
          ]}
          image="/project-1.jpg"
          imageAlt="Room addition by E&E Home Remodeling"
          highlights={[
            { label: 'Additions Built', value: '150+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Avg. Addition Size', value: '600 SF' },
          ]}
        />

        <ServiceFeatures
          title="Room Addition Services"
          subtitle="Types of Additions We Build"
          features={features}
        />

        <ServiceBeforeAfter
          title="Addition Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="More Addition Projects"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="Room Addition FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready to Expand Your Home?"
          description="Get your FREE room addition consultation and 3D design. We'll assess your property, discuss options, and show you exactly how your new space will look and feel. Expand your home, not your address."
          primaryButtonText="Get Free 3D Design"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default RoomAdditionsPage
