import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('thousand-oaks')!

export const metadata: Metadata = {
  title: `Home Remodeling in ${location.name} | E&E - Kitchen, Bath & Whole House`,
  description: `Expert home remodeling in ${location.name}, CA. E&E offers kitchen remodeling, bathroom renovation, ADUs & whole house remodels. FREE 3D design, 25+ years experience. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function ThousandOaksPage() {
  return <LocationPageTemplate location={location} />
}
