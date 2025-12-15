import { Metadata } from 'next'
import CountyPageTemplate from '@/app/components/CountyPageTemplate'
import { getCountyBySlug } from '@/lib/locations-data'

const county = getCountyBySlug('santa-barbara-county')!

export const metadata: Metadata = {
  title: 'Santa Barbara County Home Remodeling | E&E - Kitchen, Bath & Whole House',
  description: 'Expert home remodeling in Santa Barbara County. E&E serves Santa Barbara, Goleta & Carpinteria. Spanish Colonial expertise, FREE 3D design, 25+ years experience. CA License #1087571.',
  keywords: ['Santa Barbara County home remodeling', 'Santa Barbara kitchen remodel', 'Santa Barbara bathroom contractor', 'Goleta remodeling', 'Carpinteria contractor']
}

export default function SantaBarbaraCountyPage() {
  return <CountyPageTemplate county={county} />
}
