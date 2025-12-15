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
  Droplets,
  Sparkles,
  Bath,
  Square,
  Flame,
  ShieldCheck,
} from 'lucide-react'

const BathroomRemodelingPage = () => {
  const features = [
    {
      icon: Bath,
      title: 'Master Bathroom Design',
      description: 'Create your personal spa retreat with double vanities, soaking tubs, and walk-in showers designed for luxury and relaxation.',
    },
    {
      icon: Droplets,
      title: 'Walk-In Showers',
      description: 'Custom frameless glass enclosures, rainfall showerheads, body jets, and beautiful tile work that transforms your daily routine.',
    },
    {
      icon: Sparkles,
      title: 'Tub-to-Shower Conversion',
      description: 'Modernize your bathroom by converting an outdated tub into a spacious, accessible walk-in shower.',
    },
    {
      icon: Square,
      title: 'Custom Tile Work',
      description: 'From floor to ceiling, we install stunning tile designs including marble, porcelain, and decorative accent patterns.',
    },
    {
      icon: Flame,
      title: 'Heated Floors',
      description: 'Add the luxury of radiant heated floors - step onto warm tile every morning in Southern California\'s cooler months.',
    },
    {
      icon: ShieldCheck,
      title: 'Waterproofing Guarantee',
      description: 'Professional waterproofing ensures your bathroom stays dry and protected for decades to come.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-15.jpg', after: '/after-bathroom-1.jpg', label: 'Calabasas Marble Shower' },
    { before: '/before-13.jpg', after: '/after-bathroom-2.jpg', label: 'Thousand Oaks Master Bath' },
    { before: '/before-12.jpg', after: '/after-bathroom-3.jpg', label: 'Ventura Spa Bathroom' },
    { before: '/before-19.jpg', after: '/after-bathroom-4.jpg', label: 'Santa Barbara Walk-In Shower' },
    { before: '/before-22.jpg', after: '/after-bathroom-5.jpg', label: 'Woodland Hills Guest Bath' },
    { before: '/before-18.jpg', after: '/after-bathroom-6.jpg', label: 'Camarillo Luxury Bath' },
  ]

  const galleryImages = [
    { src: '/bathroom-hero.jpg', alt: 'Luxury master bathroom remodel', caption: 'Luxury Master Bath' },
    { src: '/bathroom-2.jpg', alt: 'Modern walk-in shower', caption: 'Frameless Walk-In Shower' },
    { src: '/bathroom-3.jpg', alt: 'Double vanity bathroom', caption: 'Custom Double Vanity' },
    { src: '/bathroom-4.jpg', alt: 'Spa-like bathroom design', caption: 'Spa-Inspired Design' },
    { src: '/bathroom-5.jpg', alt: 'Contemporary bathroom tiles', caption: 'Contemporary Tile Design' },
    { src: '/bathroom-1.jpg', alt: 'Complete bathroom renovation', caption: 'Complete Bathroom Renovation' },
  ]

  const faqs = [
    {
      question: 'How long does a bathroom remodel take?',
      answer: 'A typical bathroom remodel takes 2-4 weeks for a standard update and 4-6 weeks for a complete renovation. Master bathroom remodels with layout changes may take 6-8 weeks. We provide a detailed timeline specific to your project during consultation.',
    },
    {
      question: 'Can you make my bathroom more accessible?',
      answer: 'Absolutely! We specialize in aging-in-place modifications including curbless showers, grab bars, comfort-height toilets, and wider doorways. We can make your bathroom safer and more accessible while maintaining beautiful design.',
    },
    {
      question: 'What\'s included in a typical bathroom remodel?',
      answer: 'Our bathroom remodels typically include demolition, new flooring, shower/tub installation, vanity and countertop, toilet, lighting, plumbing fixtures, tile work, paint, and all finish details. We customize every project to your needs and budget.',
    },
    {
      question: 'How much does a bathroom remodel cost?',
      answer: 'Bathroom remodels in Southern California range from $15,000 for a basic refresh to $75,000+ for a luxury master bath. A mid-range bathroom remodel typically costs $25,000-$45,000. We provide transparent pricing with no hidden fees.',
    },
    {
      question: 'Do I need a permit for a bathroom remodel?',
      answer: 'Most bathroom remodels that involve plumbing or electrical changes require permits. We handle all permit applications and inspections for you, ensuring your project meets code requirements in Ventura, Santa Barbara, and LA counties.',
    },
    {
      question: 'Can I use my bathroom during the remodel?',
      answer: 'If you have another bathroom in your home, that\'s the ideal situation. For single-bathroom homes, we work efficiently to minimize downtime and can often maintain partial functionality during certain phases of construction.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="Bathroom Remodeling in Southern California"
          subtitle="Master & Guest Bathroom Renovation"
          description="Transform your bathroom into a personal spa retreat. From luxurious master baths with walk-in showers to efficient guest bathroom updates, we create beautiful spaces that start and end your day right."
          heroImage="/bathroom-hero.jpg"
          badges={['FREE 3D Design', 'Walk-In Shower Experts', 'CA Lic #1087571']}
        />

        <ServiceIntro
          title="Bathroom Renovations That Exceed Expectations"
          paragraphs={[
            "Your bathroom should be more than functional - it should be a retreat. At E&E Home Remodeling, we specialize in creating spa-like bathrooms that combine stunning design with lasting quality.",
            "Whether you're dreaming of a luxurious master bathroom with a walk-in shower and soaking tub, or you need to update a tired guest bath, our team brings 25+ years of expertise to every project.",
            "With Ezra and Ester personally overseeing your renovation, you get the attention to detail that only a family-owned business can provide. Plus, our FREE 3D design lets you see your new bathroom before we start."
          ]}
          image="/bathroom-1.jpg"
          imageAlt="Modern bathroom remodel by E&E Home Remodeling"
          highlights={[
            { label: 'Bathrooms Completed', value: '750+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Customer Rating', value: '5.0★' },
          ]}
        />

        <ServiceFeatures
          title="Bathroom Remodeling Services"
          subtitle="What We Offer"
          features={features}
        />

        <ServiceBeforeAfter
          title="Bathroom Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="More Bathroom Projects"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="Bathroom Remodeling FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready for Your Spa-Like Bathroom?"
          description="Get your FREE 3D bathroom design and visualize your personal retreat before construction begins. Experience the E&E difference - family-owned, personally managed, exceptional results."
          primaryButtonText="Get Free 3D Design"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default BathroomRemodelingPage
