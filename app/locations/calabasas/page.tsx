import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('calabasas')!

export const metadata: Metadata = {
  title: `Luxury Home Remodeling in ${location.name} | E&E - Kitchen, Bath & Whole House`,
  description: `Luxury home remodeling in ${location.name}, CA. E&E offers premium kitchen remodeling, spa bathroom renovation & whole house remodels for The Oaks & Calabasas Hills. FREE 3D design. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function CalabasasPage() {
  return <LocationPageTemplate location={location} />
}
