import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('santa-barbara')!

export const metadata: Metadata = {
  title: `Home Remodeling in ${location.name} | E&E - Kitchen, Bath & Whole House`,
  description: `Expert home remodeling in ${location.name}, CA. Spanish Colonial expertise, kitchen remodeling, bathroom renovation & whole house remodels. FREE 3D design, 25+ years experience. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function SantaBarbaraPage() {
  return <LocationPageTemplate location={location} />
}
