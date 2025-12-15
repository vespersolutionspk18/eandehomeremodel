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
  Sun,
  Flame,
  TreePine,
  Umbrella,
  Lightbulb,
  Waves,
} from 'lucide-react'

const OutdoorLivingPage = () => {
  const features = [
    {
      icon: Umbrella,
      title: 'Patio Covers',
      description: 'Solid roof and lattice patio covers that provide shade, comfort, and extend your living space year-round.',
    },
    {
      icon: Flame,
      title: 'Outdoor Kitchens',
      description: 'Custom outdoor kitchens with built-in grills, refrigerators, sinks, and countertop space for entertaining.',
    },
    {
      icon: TreePine,
      title: 'Pergolas & Arbors',
      description: 'Beautiful wood and aluminum pergolas that create stunning focal points and comfortable outdoor rooms.',
    },
    {
      icon: Sun,
      title: 'Deck Building',
      description: 'Custom wood and composite decks designed to complement your home and maximize your outdoor enjoyment.',
    },
    {
      icon: Lightbulb,
      title: 'Outdoor Lighting',
      description: 'Integrated lighting solutions that extend your outdoor hours and create perfect ambiance.',
    },
    {
      icon: Waves,
      title: 'Fire Features',
      description: 'Fire pits, fireplaces, and fire tables that become the gathering point of your outdoor space.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-3.jpg', after: '/after-outdoor-1.jpg', label: 'Thousand Oaks Patio Cover' },
    { before: '/before-4.jpg', after: '/after-outdoor-2.jpg', label: 'Ventura Outdoor Living' },
    { before: '/before-5.jpg', after: '/after-outdoor-3.jpg', label: 'Calabasas Pergola & Deck' },
    { before: '/before-6.jpg', after: '/after-outdoor-4.jpg', label: 'Santa Barbara Backyard' },
    { before: '/before-10.jpg', after: '/after-outdoor-5.jpg', label: 'Woodland Hills Pool Deck' },
    { before: '/before-11.jpg', after: '/after-outdoor-6.jpg', label: 'Camarillo Outdoor Kitchen' },
  ]

  const galleryImages = [
    { src: '/outdoor-hero.jpg', alt: 'Custom patio cover with outdoor kitchen', caption: 'Patio Cover & Outdoor Kitchen' },
    { src: '/outdoor-2.jpg', alt: 'Covered patio entertaining space', caption: 'Covered Entertainment Area' },
    { src: '/outdoor-3.jpg', alt: 'Custom pergola design', caption: 'Cedar Pergola Design' },
    { src: '/outdoor-4.jpg', alt: 'Outdoor living room setup', caption: 'Outdoor Living Room' },
    { src: '/outdoor-1.jpg', alt: 'Deck with mountain views', caption: 'Custom Composite Deck' },
    { src: '/project-2.jpg', alt: 'Fire pit gathering area', caption: 'Fire Feature Lounge' },
  ]

  const faqs = [
    {
      question: 'What types of patio covers do you build?',
      answer: 'We build solid roof patio covers (with shingles, tile, or standing seam metal), insulated aluminum covers, open lattice covers, and combination designs. Each is engineered for Southern California\'s climate and can include integrated lighting, fans, and heating.',
    },
    {
      question: 'How much does an outdoor kitchen cost?',
      answer: 'Outdoor kitchens range from $15,000 for a basic built-in grill station to $100,000+ for a full outdoor kitchen with appliances, sink, refrigerator, pizza oven, and bar seating. We design to your budget and entertaining style.',
    },
    {
      question: 'Do I need a permit for a patio cover?',
      answer: 'Yes, most patio covers and outdoor structures require building permits. Attached structures may also need engineering. We handle all permit requirements and ensure your project meets code in Ventura, Santa Barbara, and LA counties.',
    },
    {
      question: 'What\'s the best material for decking in Southern California?',
      answer: 'Composite decking (like Trex or TimberTech) is popular for low maintenance, though premium hardwoods like Ipe offer natural beauty. We help you choose based on your aesthetic preferences, maintenance tolerance, and budget.',
    },
    {
      question: 'How long does it take to build a patio cover?',
      answer: 'A standard patio cover takes 2-4 weeks from permit approval. Outdoor kitchens take 4-8 weeks depending on complexity. More elaborate outdoor living spaces with multiple elements may take 8-12 weeks.',
    },
    {
      question: 'Can you work with my existing landscaping?',
      answer: 'Absolutely! We design outdoor structures to complement your existing landscaping and can coordinate with landscape contractors for integrated projects. We protect existing plants and hardscape during construction.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="Outdoor Living Spaces in Southern California"
          subtitle="Patio Covers, Outdoor Kitchens & More"
          description="Extend your living space outdoors with custom patio covers, outdoor kitchens, pergolas, and decks. Southern California's year-round climate deserves an outdoor space you'll use every day."
          heroImage="/outdoor-hero.jpg"
          badges={['Custom Patio Covers', 'Outdoor Kitchens', 'Pergola Experts']}
        />

        <ServiceIntro
          title="Create Your Perfect Outdoor Retreat"
          paragraphs={[
            "In Southern California, outdoor living isn't a luxury - it's a way of life. At E&E Home Remodeling, we design and build outdoor spaces that become the heart of your home's entertaining and relaxation.",
            "From elegant patio covers that provide year-round comfort to fully-equipped outdoor kitchens that make you the neighborhood's favorite host, we transform backyards into destinations.",
            "With 25+ years of experience building outdoor structures in Ventura, Santa Barbara, and Los Angeles counties, we understand what works in our climate and how to create spaces you'll love for decades."
          ]}
          image="/outdoor-1.jpg"
          imageAlt="Custom outdoor living space by E&E Home Remodeling"
          highlights={[
            { label: 'Outdoor Projects', value: '300+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Customer Rating', value: '5.0★' },
          ]}
        />

        <ServiceFeatures
          title="Outdoor Living Services"
          subtitle="What We Build"
          features={features}
        />

        <ServiceBeforeAfter
          title="Outdoor Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="More Outdoor Projects"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="Outdoor Living FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready for Your Outdoor Oasis?"
          description="Get your FREE 3D outdoor design and see exactly how your new space will look. From patio covers to outdoor kitchens, we'll help you create the perfect outdoor living area for Southern California living."
          primaryButtonText="Get Free 3D Design"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default OutdoorLivingPage
