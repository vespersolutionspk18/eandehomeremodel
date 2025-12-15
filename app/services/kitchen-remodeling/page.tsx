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
  Palette,
  Ruler,
  Lightbulb,
  Package,
  Wrench,
  Shield,
} from 'lucide-react'

const KitchenRemodelingPage = () => {
  const features = [
    {
      icon: Palette,
      title: 'Custom Cabinets',
      description: 'Handcrafted cabinetry designed to maximize your storage and complement your style. From modern minimalist to classic shaker designs.',
    },
    {
      icon: Ruler,
      title: 'Premium Countertops',
      description: 'Quartz, granite, marble, and butcher block options. We help you select the perfect surface for your cooking and entertaining needs.',
    },
    {
      icon: Lightbulb,
      title: 'Kitchen Islands',
      description: 'Custom islands that serve as the centerpiece of your kitchen - for cooking, dining, or entertaining guests.',
    },
    {
      icon: Package,
      title: 'Smart Storage',
      description: 'Innovative storage solutions including pull-out pantries, lazy Susans, and custom drawer organizers.',
    },
    {
      icon: Wrench,
      title: 'Appliance Installation',
      description: 'Expert installation of all kitchen appliances, including built-in refrigerators, ranges, and dishwashers.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every kitchen remodel comes with our craftsmanship warranty. We stand behind every project we complete.',
    },
  ]

  const beforeAfterPairs = [
    { before: '/before-1.jpg', after: '/after-kitchen-1.jpg', label: 'Calabasas Kitchen Transformation' },
    { before: '/before-2.jpg', after: '/after-kitchen-2.jpg', label: 'Calabasas Breakfast Nook' },
    { before: '/before-3.jpg', after: '/after-kitchen-3.jpg', label: 'Thousand Oaks Modern Kitchen' },
    { before: '/before-4.jpg', after: '/after-kitchen-4.jpg', label: 'Ventura Coastal Kitchen' },
    { before: '/before-10.jpg', after: '/after-kitchen-5.jpg', label: 'Santa Barbara Chef\'s Kitchen' },
    { before: '/before-11.jpg', after: '/after-kitchen-6.jpg', label: 'Woodland Hills Open Concept' },
  ]

  const galleryImages = [
    { src: '/kitchen-hero.jpg', alt: 'Modern kitchen remodel in Calabasas', caption: 'Calabasas Kitchen Transformation' },
    { src: '/kitchen-2.jpg', alt: 'Custom white cabinets', caption: 'Custom White Shaker Cabinets' },
    { src: '/kitchen-3.jpg', alt: 'Kitchen island design', caption: 'Waterfall Island with Quartz' },
    { src: '/kitchen-4.jpg', alt: 'Open concept kitchen', caption: 'Open Concept Kitchen Design' },
    { src: '/kitchen-5.jpg', alt: 'Kitchen with pendant lights', caption: 'Modern Pendant Lighting' },
    { src: '/kitchen-1.jpeg', alt: 'Complete kitchen renovation', caption: 'Complete Kitchen Renovation' },
  ]

  const faqs = [
    {
      question: 'How long does a kitchen remodel typically take?',
      answer: 'A complete kitchen remodel typically takes 6-12 weeks depending on the scope. Minor updates may take 2-4 weeks, while full gut renovations with layout changes can take 12-16 weeks. We provide a detailed timeline during your free consultation.',
    },
    {
      question: 'What is included in your FREE 3D design service?',
      answer: 'Our complimentary 3D design includes a full visualization of your new kitchen with your chosen cabinets, countertops, appliances, and finishes. You can see exactly how your kitchen will look before we start construction - most contractors charge $500-$2,000 for this service.',
    },
    {
      question: 'How much does a kitchen remodel cost in California?',
      answer: 'Kitchen remodels in Southern California typically range from $35,000 for a basic refresh to $150,000+ for a luxury renovation. The average mid-range kitchen remodel costs $50,000-$80,000. We provide detailed, transparent pricing with no hidden fees.',
    },
    {
      question: 'Do you handle permits for kitchen remodels?',
      answer: 'Yes! We handle all permit applications, inspections, and approvals. Our team is familiar with requirements in Ventura, Santa Barbara, and Los Angeles counties, ensuring your project meets all local codes.',
    },
    {
      question: 'Can I stay in my home during the kitchen remodel?',
      answer: 'Yes, most clients stay in their homes during the remodel. We set up a temporary kitchen area and work efficiently to minimize disruption. We also maintain a clean work environment and protect your home throughout the process.',
    },
    {
      question: 'What kitchen cabinet brands do you work with?',
      answer: 'We work with premium cabinet manufacturers including custom local craftsmen, semi-custom lines like Shiloh and Waypoint, and stock options for budget-conscious projects. We help you find the perfect balance of quality and value.',
    },
  ]

  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        <ServiceHero
          title="Kitchen Remodeling in Ventura, Santa Barbara & LA"
          subtitle="Expert Kitchen Renovation"
          description="Transform your kitchen into the heart of your home. From custom cabinets and premium countertops to complete layout redesigns, we bring your dream kitchen to life with 25+ years of expert craftsmanship."
          heroImage="/kitchen-hero.jpg"
          badges={['FREE 3D Design', '25+ Years Experience', 'CA Lic #1087571']}
        />

        <ServiceIntro
          title="Your Dream Kitchen Starts Here"
          paragraphs={[
            "At E&E Home Remodeling, we understand that the kitchen is more than just a place to cook - it's where families gather, memories are made, and your home's personality shines through.",
            "With over 25 years of experience transforming kitchens throughout Ventura, Santa Barbara, and Los Angeles counties, we've perfected the art of creating beautiful, functional spaces that exceed expectations.",
            "What sets us apart? Ezra and Ester personally manage every project - no middlemen, no surprises. Plus, our FREE 3D design service lets you see your new kitchen before we start construction."
          ]}
          image="/kitchen-1.jpeg"
          imageAlt="Custom kitchen remodel by E&E Home Remodeling"
          highlights={[
            { label: 'Kitchens Completed', value: '500+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Customer Rating', value: '5.0★' },
          ]}
        />

        <ServiceFeatures
          title="What We Offer"
          subtitle="Kitchen Remodeling Services"
          features={features}
        />

        <ServiceBeforeAfter
          title="Kitchen Transformations"
          subtitle="Before & After"
          pairs={beforeAfterPairs}
        />

        <ServiceGallery
          title="Kitchen Transformations"
          subtitle="Our Recent Work"
          images={galleryImages}
        />

        <ServiceFAQ
          title="Kitchen Remodeling FAQ"
          subtitle="Common Questions"
          faqs={faqs}
        />

        <ServiceCTA
          title="Ready for Your Dream Kitchen?"
          description="Get your FREE 3D kitchen design and see exactly how your new space will look. No obligation, no pressure - just expert guidance from a family who cares about your home as much as you do."
          primaryButtonText="Get Free 3D Design"
          secondaryButtonText="Call (877) 638-9429"
        />

        <Footer />
      </main>
    </>
  )
}

export default KitchenRemodelingPage
