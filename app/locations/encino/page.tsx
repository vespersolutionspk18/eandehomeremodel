import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('encino')!

export const metadata: Metadata = {
  title: `Premium Home Remodeling in ${location.name} | E&E - Kitchen, Bath & Whole House`,
  description: `Premium home remodeling in ${location.name}, CA. E&E offers luxury kitchen remodeling, spa bathroom renovation & whole house remodels for Royal Oaks & Encino Hills. FREE 3D design. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function EncinoPage() {
  return <LocationPageTemplate location={location} />
}
