import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('tarzana')!

export const metadata: Metadata = {
  title: `Home Remodeling in ${location.name} | E&E - Your Local Neighborhood Experts`,
  description: `Expert home remodeling in ${location.name}, CA. E&E's home office is in Tarzana—we're your neighbors! Kitchen remodeling, bathroom renovation & whole house remodels. FREE 3D design. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function TarzanaPage() {
  return <LocationPageTemplate location={location} />
}
