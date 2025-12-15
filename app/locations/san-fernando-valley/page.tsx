import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'
import { getLocationBySlug } from '@/lib/locations-data'

const location = getLocationBySlug('san-fernando-valley')!

export const metadata: Metadata = {
  title: `Home Remodeling in ${location.name} | E&E - Kitchen, Bath & Whole House`,
  description: `Expert home remodeling in the ${location.name}. E&E offers kitchen remodeling, bathroom renovation, ADUs & whole house remodels. Tarzana office, FREE 3D design, 25+ years experience. CA License #1087571.`,
  keywords: location.seoKeywords
}

export default function SanFernandoValleyPage() {
  return <LocationPageTemplate location={location} />
}
