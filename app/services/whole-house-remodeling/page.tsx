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
  Layers,
  Zap,
  PenTool,
  Shield,
  Users,
} from 'lucide-react'

const WholeHouseRemodelingPage = () => {
  const features = [
    {
      icon: Layers,
      title: 'Open Floor Plans',
      description: 'Remove walls, create flow, and modernize your home\'s layout for the way families live today.',
    },
    {
      icon: Home,
      title: 'Complete Renovations',
      description: 'Every room transformed - kitchens, bathrooms, bedrooms, living spaces, and everything in between.',
    },
    {
      icon: PenTool,
      title: 'Custom Design',
      description: 'Work directly with our design team to create a cohesive vision that reflects your style and needs.',
    },
    {
      icon: Zap,
      title: 'Systems Upgrades',
      description: 'Update electrical, plumbing, and HVAC systems to modern standards with energy-efficient options.',
    },
    {
      icon: Shield,
      title: 'Structural Changes',
      description: 'From foundation to roofline, we handle structural modifications with proper engineering.',
    },
    {
      icon: Users,
      title: 'Single Point of Contact',
      description: 'Ezra or Ester manages your entire project - no bouncing between contractors or supervisors.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-1.jpg', after: '/after-kitchen-1.jpg', label: 'Calabasas Complete Renovation' },
    { before: '/before-3.jpg', after: '/after-whole-house-2.jpg', label: 'Thousand Oaks Home Exterior' },
    { before: '/before-4.jpg', after: '/after-whole-house-3.jpg', label: 'Ventura Home Transformation' },
    { before: '/before-5.jpg', after: '/after-outdoor-2.jpg', label: 'Santa Barbara Full Remodel' },
    { before: '/before-6.jpg', after: '/after-bathroom-2.jpg', label: 'Woodland Hills Master Suite' },
    { before: '/before-11.jpg', after: '/after-kitchen-2.jpg', label: 'Camarillo Modern Update' },
  ]

  const galleryImages = [
    { src: '/project-calabasas.jpg', alt: 'Calabasas whole house remodel', caption: 'Calabasas Complete Renovation' },
    { src: '/whole-house-1.jpg', alt: 'Living room transformation', caption: 'Open Concept Living' },
    { src: '/whole-house-2.jpg', alt: 'Entryway redesign', caption: 'Grand Entryway Design' },
    { src: '/whole-house-3.jpg', alt: 'Master suite renovation', caption: 'Master Suite Renovation' },
    { src: '/project-1.jpg', alt: 'Kitchen and living flow', caption: 'Kitchen to Living Flow' },
    { src: '/project-3.jpg', alt: 'Complete home renovation', caption: 'Complete Home Transformation' },
  ]

  const faqs = [
    {
      question: 'What\'s included in a whole house remodel?',
      answer: 'A whole house remodel can include any combination of: kitchen and bathrooms, flooring throughout, electrical and plumbing updates, HVAC replacement, wall removal for open floor plans, window and door replacement, interior and exterior paint, and finish details. We customize the scope to your goals and budget.',
    },
    {
      question: 'How long does a whole house remodel take?',
      answer: 'Most whole house remodels take 4-8 months depending on scope and complexity. A moderate renovation might take 4-5 months, while an extensive gut renovation with additions could take 8-12 months. We provide a detailed timeline during planning.',
    },
    {
      question: 'Can I live in my house during a whole house remodel?',
      answer: 'It depends on the scope. For moderate remodels, we can often phase work to keep areas livable. For gut renovations, temporary relocation is usually necessary for your comfort and safety. We\'ll discuss options during consultation.',
    },
    {
      question: 'How much does a whole house remodel cost?',
      answer: 'Whole house remodels in Southern California typically range from $150,000 to $500,000+, depending on size, scope, and finishes. A mid-range full renovation averages $200-$300 per square foot. We provide detailed, transparent pricing.',
    },
    {
      question: 'Do you handle all the contractors and trades?',
      answer: 'Yes! We manage all trades - plumbing, electrical, HVAC, drywall, painting, flooring, tile, carpentry, and more. You work with one point of contact (Ezra or Ester), not multiple contractors.',
    },
    {
      question: 'Should I remodel or sell and buy a different house?',
      answer: 'This depends on your location, equity, and attachment to your neighborhood. Often, remodeling your existing home costs less than moving (considering realtor fees, moving costs, and higher interest rates), while letting you stay in a location you love.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="Whole House Remodeling in Southern California"
          subtitle="Complete Home Transformation"
          description="Transform your entire home from foundation to roofline. Our whole house remodeling brings together kitchens, bathrooms, living spaces, and more into one cohesive renovation managed by a single team."
          heroImage="/project-calabasas.jpg"
          badges={['Complete Renovations', 'One Team, One Vision', 'CA Lic #1087571']}
        />

        <ServiceIntro
          title="Don't Move. Improve."
          paragraphs={[
            "Love your neighborhood but not your house? A whole house remodel lets you create your dream home without the stress and cost of moving. At E&E Home Remodeling, we specialize in complete home transformations.",
            "Unlike juggling multiple contractors, our approach gives you one team, one vision, and one point of contact. Ezra and Ester personally manage every whole house project, ensuring seamless coordination across all trades.",
            "With 25+ years transforming homes throughout Ventura, Santa Barbara, and Los Angeles counties, we've mastered the art of whole house renovations that stay on budget and exceed expectations."
          ]}
          image="/whole-house-1.jpg"
          imageAlt="Whole house remodel by E&E Home Remodeling"
          highlights={[
            { label: 'Homes Transformed', value: '200+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Avg. Project Size', value: '2,500 SF' },
          ]}
        />

        <ServiceFeatures
          title="Whole House Services"
          subtitle="Complete Renovation Solutions"
          features={features}
        />

        <ServiceBeforeAfter
          title="Home Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="More Renovation Projects"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="Whole House Remodeling FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready to Transform Your Entire Home?"
          description="Get your FREE comprehensive design consultation and 3D visualization. See your whole home transformation before construction begins. Don't move - improve with E&E."
          primaryButtonText="Get Free Consultation"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default WholeHouseRemodelingPage
