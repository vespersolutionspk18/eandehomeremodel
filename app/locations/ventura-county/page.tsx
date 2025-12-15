import { Metadata } from 'next'
import CountyPageTemplate from '@/app/components/CountyPageTemplate'
import { getCountyBySlug } from '@/lib/locations-data'

const county = getCountyBySlug('ventura-county')!

export const metadata: Metadata = {
  title: 'Ventura County Home Remodeling | E&E - Kitchen, Bath & Whole House',
  description: 'Expert home remodeling in Ventura County. E&E serves Ventura, Oxnard, Camarillo, Thousand Oaks, Moorpark & Simi Valley. FREE 3D design, 25+ years experience. CA License #1087571.',
  keywords: ['Ventura County home remodeling', 'Ventura County kitchen remodel', 'Ventura County bathroom contractor', 'Conejo Valley remodeling', 'Ventura County ADU']
}

export default function VenturaCountyPage() {
  return <CountyPageTemplate county={county} />
}
