import { Metadata } from 'next'
import CountyPageTemplate from '@/app/components/CountyPageTemplate'
import { getCountyBySlug } from '@/lib/locations-data'

const county = getCountyBySlug('los-angeles-county')!

export const metadata: Metadata = {
  title: 'Los Angeles County Home Remodeling | E&E - San Fernando Valley Experts',
  description: 'Expert home remodeling in Los Angeles County & San Fernando Valley. E&E serves Calabasas, Woodland Hills, Encino, Sherman Oaks, Tarzana & Burbank. FREE 3D design. CA License #1087571.',
  keywords: ['Los Angeles County home remodeling', 'San Fernando Valley kitchen remodel', 'LA County bathroom contractor', 'West Valley remodeling', 'Calabasas contractor']
}

export default function LosAngelesCountyPage() {
  return <CountyPageTemplate county={county} />
}
