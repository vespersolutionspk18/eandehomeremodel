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
  Home,
  FileText,
  DollarSign,
  Maximize2,
  Building,
  CheckCircle2,
} from 'lucide-react'

const ADUGarageConversionPage = () => {
  const features = [
    {
      icon: Home,
      title: 'Garage Conversions',
      description: 'Transform your existing garage into a fully functional living space with kitchen, bathroom, and separate entrance.',
    },
    {
      icon: Building,
      title: 'Detached ADUs',
      description: 'Build a standalone accessory dwelling unit in your backyard - perfect for rental income or extended family.',
    },
    {
      icon: FileText,
      title: 'Permit Management',
      description: 'We handle all California ADU permits, including planning, building, and inspection approvals.',
    },
    {
      icon: DollarSign,
      title: 'Rental Income Potential',
      description: 'ADUs can generate $1,500-$3,500+ monthly rental income in Southern California markets.',
    },
    {
      icon: Maximize2,
      title: 'Space Optimization',
      description: 'Clever design maximizes every square foot with built-in storage, murphy beds, and multi-use spaces.',
    },
    {
      icon: CheckCircle2,
      title: 'Turnkey Solutions',
      description: 'From design to final inspection, we handle everything - plumbing, electrical, HVAC, and finishes.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-6.jpg', after: '/after-whole-house-2.jpg', label: 'Ventura Garage Conversion' },
    { before: '/before-10.jpg', after: '/after-whole-house-3.jpg', label: 'Thousand Oaks ADU' },
    { before: '/before-19.jpg', after: '/after-kitchen-1.jpg', label: 'Calabasas Guest House' },
    { before: '/before-22.jpg', after: '/after-bathroom-2.jpg', label: 'Oxnard Studio ADU' },
    { before: '/before-1.jpg', after: '/after-kitchen-2.jpg', label: 'Santa Barbara Detached ADU' },
    { before: '/before-2.jpg', after: '/after-outdoor-2.jpg', label: 'Woodland Hills Conversion' },
  ]

  const galleryImages = [
    { src: '/adu-1.jpg', alt: 'Completed garage ADU conversion', caption: 'Garage to Studio ADU' },
    { src: '/adu-2.jpg', alt: 'ADU interior living space', caption: 'Open Concept ADU Living' },
    { src: '/whole-house-1.jpg', alt: 'Detached ADU exterior', caption: 'Detached Backyard ADU' },
    { src: '/project-3.jpg', alt: 'ADU kitchen design', caption: 'Efficient ADU Kitchen' },
    { src: '/room-addition-1.jpg', alt: 'ADU bedroom setup', caption: 'ADU Bedroom Suite' },
    { src: '/project-calabasas.jpg', alt: 'Luxury ADU finish', caption: 'Premium ADU Finishes' },
  ]

  const faqs = [
    {
      question: 'What is an ADU and what are California\'s requirements?',
      answer: 'An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family lot. California law (AB 68, AB 881, SB 13) allows ADUs up to 1,200 sq ft on most residential properties. Requirements vary by city, but generally you can build one ADU and one Junior ADU per lot.',
    },
    {
      question: 'How much does an ADU or garage conversion cost?',
      answer: 'Garage conversions typically range from $75,000-$150,000 depending on size and finishes. New construction detached ADUs range from $150,000-$350,000. These are investments that can add significant property value and generate rental income.',
    },
    {
      question: 'How long does it take to build an ADU?',
      answer: 'A garage conversion typically takes 3-4 months from permit approval. A new detached ADU takes 5-8 months. The permit process in California can take 60-120 days depending on the city. We manage the entire timeline for you.',
    },
    {
      question: 'Do I need a permit for a garage conversion?',
      answer: 'Yes, garage conversions to living space require building permits, and typically planning approval. The good news: California has streamlined ADU permitting, and many cities now offer expedited review. We handle all permit requirements.',
    },
    {
      question: 'Can I rent out my ADU?',
      answer: 'Yes! California law allows ADU rentals, and many homeowners use them for long-term rental income, short-term rentals (where allowed), or housing for family members. ADUs in Southern California can rent for $1,500-$3,500+ per month.',
    },
    {
      question: 'Will an ADU increase my property value?',
      answer: 'Yes, ADUs typically add significant value - often more than the construction cost. In Southern California, a well-built ADU can add $100,000-$300,000 to your property value while generating monthly rental income.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="ADU & Garage Conversions in California"
          subtitle="Accessory Dwelling Unit Specialists"
          description="Unlock your property's potential with a professionally built ADU. From garage conversions to detached units, we handle permits, design, and construction - creating additional living space that adds value and generates income."
          heroImage="/adu-1.jpg"
          badges={['CA ADU Specialists', 'Permit Experts', 'Turnkey Build']}
        />

        <ServiceIntro
          title="California's ADU & Garage Conversion Experts"
          paragraphs={[
            "California's ADU laws have opened incredible opportunities for homeowners. Whether you want rental income, space for aging parents, a home office, or housing for adult children, an ADU is a smart investment.",
            "E&E Home Remodeling specializes in garage conversions and detached ADUs throughout Ventura, Santa Barbara, and Los Angeles counties. We navigate the permit process, design efficient floor plans, and build quality living spaces.",
            "With over 25 years of construction experience and deep knowledge of local ADU requirements, we make the process smooth from concept to certificate of occupancy."
          ]}
          image="/adu-2.jpg"
          imageAlt="Completed ADU by E&E Home Remodeling"
          highlights={[
            { label: 'ADUs Completed', value: '75+' },
            { label: 'Permit Success Rate', value: '100%' },
            { label: 'Avg. Rental Income', value: '$2,200/mo' },
          ]}
        />

        <ServiceFeatures
          title="ADU & Garage Conversion Services"
          subtitle="What We Offer"
          features={features}
        />

        <ServiceBeforeAfter
          title="ADU Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="More ADU Projects"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="ADU & Garage Conversion FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready to Build Your ADU?"
          description="Get a FREE consultation and 3D design for your ADU project. We'll assess your property, explain permit requirements, and show you exactly what's possible. Start generating rental income or create the perfect space for family."
          primaryButtonText="Get Free ADU Consultation"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default ADUGarageConversionPage
