import { LocationData } from '@/app/components/LocationPageTemplate'

// Office information
const offices = {
  tarzana: {
    name: 'San Fernando Valley Office',
    address: '18340 Ventura Blvd',
    city: 'Tarzana, CA 91356',
    phone: '(818) 200-1334'
  },
  oxnard: {
    name: 'Ventura County Office',
    address: '300 E Esplanade Dr, 9th Floor',
    city: 'Oxnard, CA 93036',
    phone: '(805) 590-0908'
  },
  santaBarbara: {
    name: 'Santa Barbara Office',
    address: '7 W Figueroa St, Ste 217',
    city: 'Santa Barbara, CA 93101',
    phone: '(805) 590-0908'
  }
}

// Hero images for different locations (cycling through available project images)
const heroImages = [
  '/about-hero.jpg',
  '/project-1.jpg',
  '/project-2.jpg',
  '/project-3.jpg',
  '/about-kitchen.jpg',
  '/about-bathroom.jpg',
]

// Ventura County Locations
export const venturaCountyLocations: LocationData[] = [
  {
    slug: 'ventura',
    name: 'Ventura',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Trusted by Ventura families for over 25 years. From beachside bungalows to hillside estates, we bring expert craftsmanship to every home.',
    description: 'Ventura\'s unique coastal climate and architectural diversity require a contractor who understands local conditions. From moisture-resistant materials for oceanfront properties to designs that maximize those stunning Pacific views, E&E brings specialized knowledge to every Ventura project.',
    highlights: [
      'Local Ventura County office for quick response',
      'Experience with coastal home requirements',
      'FREE 3D design to visualize your remodel',
      'Owners personally manage every project',
      '25+ years serving Ventura homeowners'
    ],
    heroImage: heroImages[0],
    nearbyAreas: [
      { name: 'Oxnard', slug: 'oxnard' },
      { name: 'Camarillo', slug: 'camarillo' },
      { name: 'Thousand Oaks', slug: 'thousand-oaks' },
      { name: 'Moorpark', slug: 'moorpark' },
      { name: 'Simi Valley', slug: 'simi-valley' }
    ],
    localInfo: {
      permitInfo: 'City of Ventura permits are required for most remodeling projects. We handle all permit applications and city inspections as part of our service.',
      hoaNote: 'Many Ventura neighborhoods have HOA requirements. We coordinate with your HOA to ensure designs meet community guidelines before construction.',
      localTip: 'Ventura\'s coastal air requires careful material selection. We recommend marine-grade hardware and moisture-resistant finishes for lasting results.'
    },
    testimonial: {
      quote: 'E&E transformed our dated 1970s Ventura home into a modern coastal retreat. The 3D design helped us make confident decisions, and Ezra was on-site almost every day.',
      name: 'The Martinez Family',
      project: 'Ventura Whole House Remodel'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Ventura home remodeling', 'Ventura kitchen remodel', 'Ventura bathroom contractor', 'remodeling company Ventura', 'home renovation Ventura CA']
  },
  {
    slug: 'oxnard',
    name: 'Oxnard',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Expert remodeling for Oxnard homes. From Channel Islands Harbor to River Ridge, we deliver quality craftsmanship your neighbors trust.',
    description: 'Oxnard offers diverse neighborhoods from coastal communities to inland developments. Our team understands the unique character of areas like Mandalay Bay, Oxnard Shores, and River Ridge, delivering remodels that enhance your home\'s value and livability.',
    highlights: [
      'Oxnard office for local project management',
      'Experience with diverse Oxnard neighborhoods',
      'ADU specialists for rental income potential',
      'FREE 3D design included with every project',
      'Licensed, bonded & insured (CA #1087571)'
    ],
    heroImage: heroImages[1],
    nearbyAreas: [
      { name: 'Ventura', slug: 'ventura' },
      { name: 'Camarillo', slug: 'camarillo' },
      { name: 'Port Hueneme', slug: 'ventura-county' },
      { name: 'Thousand Oaks', slug: 'thousand-oaks' }
    ],
    localInfo: {
      permitInfo: 'City of Oxnard has specific ADU-friendly policies. We\'re experienced with the local permit process and can help you maximize your property\'s potential.',
      hoaNote: 'Oxnard has many master-planned communities with HOA oversight. We\'ve worked with most local HOAs and understand their approval processes.',
      localTip: 'Oxnard\'s agricultural heritage means some properties have unique soil conditions. We assess site requirements before every project.'
    },
    testimonial: {
      quote: 'Our ADU conversion turned our unused garage into a beautiful rental unit. E&E handled everything—permits, design, construction. Now we have extra income every month!',
      name: 'Robert W.',
      project: 'Oxnard ADU Conversion'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Oxnard home remodeling', 'Oxnard kitchen remodel', 'Oxnard ADU conversion', 'remodeling contractor Oxnard', 'home renovation Oxnard CA']
  },
  {
    slug: 'camarillo',
    name: 'Camarillo',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Premium remodeling for Camarillo\'s finest homes. From Spanish Hills to Mission Oaks, we deliver the quality your neighborhood deserves.',
    description: 'Camarillo\'s established neighborhoods feature beautiful Spanish Colonial, Ranch, and contemporary homes that deserve expert care. Our team has extensive experience enhancing properties throughout Camarillo, from custom kitchen renovations to complete whole-house transformations.',
    highlights: [
      'Deep experience in Camarillo neighborhoods',
      'Respectful of Spanish Colonial & Ranch architecture',
      'Premium materials and finishes',
      'FREE 3D design for confident decisions',
      'Family-owned with 25+ years experience'
    ],
    heroImage: heroImages[2],
    nearbyAreas: [
      { name: 'Thousand Oaks', slug: 'thousand-oaks' },
      { name: 'Oxnard', slug: 'oxnard' },
      { name: 'Ventura', slug: 'ventura' },
      { name: 'Moorpark', slug: 'moorpark' },
      { name: 'Simi Valley', slug: 'simi-valley' }
    ],
    localInfo: {
      permitInfo: 'City of Camarillo maintains high standards for residential construction. We ensure all work meets or exceeds local building codes.',
      hoaNote: 'Camarillo\'s planned communities like Spanish Hills have architectural review boards. We prepare professional submissions for smooth approvals.',
      localTip: 'Many Camarillo homes have great bones but dated interiors. Our specialty is modernizing kitchens and baths while respecting original architecture.'
    },
    testimonial: {
      quote: 'E&E understood exactly what our Spanish Hills home needed. The kitchen remodel preserved the Spanish Colonial character while adding modern functionality.',
      name: 'The Hendersons',
      project: 'Camarillo Kitchen Remodel'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Camarillo home remodeling', 'Camarillo kitchen remodel', 'Camarillo bathroom contractor', 'remodeling company Camarillo', 'home renovation Camarillo CA']
  },
  {
    slug: 'thousand-oaks',
    name: 'Thousand Oaks',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Trusted by Thousand Oaks families for exceptional home transformations. Quality craftsmanship for Conejo Valley\'s finest homes.',
    description: 'Thousand Oaks homeowners expect the best, and E&E delivers. From the established neighborhoods of North Ranch to the family communities of Newbury Park, we bring 25+ years of expertise to every kitchen, bathroom, and whole-house renovation in the Conejo Valley.',
    highlights: [
      'Extensive Conejo Valley experience',
      'Trusted by 100+ Thousand Oaks families',
      'Premium kitchen & bathroom renovations',
      'FREE 3D design visualization',
      'Owners on-site for every project'
    ],
    heroImage: heroImages[3],
    nearbyAreas: [
      { name: 'Westlake Village', slug: 'ventura-county' },
      { name: 'Newbury Park', slug: 'ventura-county' },
      { name: 'Camarillo', slug: 'camarillo' },
      { name: 'Moorpark', slug: 'moorpark' },
      { name: 'Simi Valley', slug: 'simi-valley' }
    ],
    localInfo: {
      permitInfo: 'City of Thousand Oaks has a streamlined permit process. We handle all applications and maintain excellent relationships with local inspectors.',
      hoaNote: 'Many Thousand Oaks neighborhoods have active HOAs. We\'ve successfully worked with most community associations in the area.',
      localTip: 'Thousand Oaks homes often have great natural light. Our designs maximize views while creating functional, beautiful spaces.'
    },
    testimonial: {
      quote: 'Ezra and Ester were hands-on from start to finish. The FREE 3D design helped us visualize our dream kitchen perfectly. The finished result exceeded all our expectations!',
      name: 'Sarah & Michael T.',
      project: 'Thousand Oaks Kitchen Remodel'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Thousand Oaks home remodeling', 'Thousand Oaks kitchen remodel', 'Thousand Oaks bathroom contractor', 'remodeling company Thousand Oaks', 'home renovation Thousand Oaks CA']
  },
  {
    slug: 'moorpark',
    name: 'Moorpark',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Quality home remodeling for Moorpark families. From country estates to newer developments, we deliver craftsmanship you can trust.',
    description: 'Moorpark\'s mix of rural properties and family neighborhoods offers unique remodeling opportunities. Whether you\'re updating a ranch property or modernizing a home in one of Moorpark\'s planned communities, E&E brings the expertise to transform your space.',
    highlights: [
      'Experience with Moorpark\'s diverse properties',
      'ADU and guest house specialists',
      'FREE 3D design for every project',
      'Transparent pricing with no surprises',
      'CA License #1087571'
    ],
    heroImage: heroImages[4],
    nearbyAreas: [
      { name: 'Thousand Oaks', slug: 'thousand-oaks' },
      { name: 'Simi Valley', slug: 'simi-valley' },
      { name: 'Camarillo', slug: 'camarillo' },
      { name: 'Ventura', slug: 'ventura' }
    ],
    localInfo: {
      permitInfo: 'City of Moorpark welcomes ADU development. We can help you navigate the permitting process for accessory dwelling units and home additions.',
      hoaNote: 'Moorpark has fewer HOA restrictions than neighboring cities, offering more flexibility in design choices.',
      localTip: 'Many Moorpark properties have space for outdoor living additions. Our patio covers and outdoor kitchens are perfect for the area\'s climate.'
    },
    testimonial: {
      quote: 'We wanted to add an ADU for my mother-in-law. E&E made the process seamless and the finished unit is beautiful. She loves her new space!',
      name: 'The Garcia Family',
      project: 'Moorpark ADU Addition'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Moorpark home remodeling', 'Moorpark kitchen remodel', 'Moorpark ADU contractor', 'remodeling company Moorpark', 'home renovation Moorpark CA']
  },
  {
    slug: 'simi-valley',
    name: 'Simi Valley',
    county: 'Ventura County',
    countySlug: 'ventura-county',
    tagline: 'Transforming Simi Valley homes with expert craftsmanship. Quality remodeling for the valley\'s diverse neighborhoods.',
    description: 'Simi Valley\'s growing communities and established neighborhoods deserve quality remodeling. From Wood Ranch to Madera, our team brings expert craftsmanship to kitchen renovations, bathroom remodels, and whole-house transformations throughout the valley.',
    highlights: [
      'Serving Simi Valley neighborhoods',
      'Kitchen & bathroom specialists',
      'Room additions and expansions',
      'FREE 3D design visualization',
      '25+ years of family craftsmanship'
    ],
    heroImage: heroImages[5],
    nearbyAreas: [
      { name: 'Moorpark', slug: 'moorpark' },
      { name: 'Thousand Oaks', slug: 'thousand-oaks' },
      { name: 'Chatsworth', slug: 'san-fernando-valley' },
      { name: 'Granada Hills', slug: 'san-fernando-valley' }
    ],
    localInfo: {
      permitInfo: 'City of Simi Valley has clear permitting guidelines. We ensure all projects are properly permitted and inspected.',
      hoaNote: 'Wood Ranch and other Simi Valley communities have HOA requirements. We work within community guidelines for all projects.',
      localTip: 'Simi Valley\'s warm climate makes outdoor living spaces ideal. Our pergolas and patio covers extend your living area year-round.'
    },
    testimonial: {
      quote: 'Our master bathroom was straight out of the 90s. E&E transformed it into a spa-like retreat. The tile work and fixtures are stunning!',
      name: 'Linda P.',
      project: 'Simi Valley Master Bath'
    },
    nearestOffice: offices.oxnard,
    seoKeywords: ['Simi Valley home remodeling', 'Simi Valley kitchen remodel', 'Simi Valley bathroom contractor', 'remodeling company Simi Valley', 'home renovation Simi Valley CA']
  }
]

// Santa Barbara County Locations
export const santaBarbaraCountyLocations: LocationData[] = [
  {
    slug: 'santa-barbara',
    name: 'Santa Barbara',
    county: 'Santa Barbara County',
    countySlug: 'santa-barbara-county',
    tagline: 'Preserving Santa Barbara\'s architectural heritage while creating modern living spaces. Expert remodeling with respect for local character.',
    description: 'Santa Barbara\'s distinctive Spanish Colonial Revival architecture requires a contractor who understands and respects local design traditions. Our team specializes in sensitive renovations that honor your home\'s character while adding modern functionality and comfort.',
    highlights: [
      'Santa Barbara office for local service',
      'Expertise in Spanish Colonial style',
      'Historic district experience',
      'FREE 3D design for visualization',
      'Premium materials and finishes'
    ],
    heroImage: heroImages[0],
    nearbyAreas: [
      { name: 'Goleta', slug: 'goleta' },
      { name: 'Carpinteria', slug: 'carpinteria' },
      { name: 'Montecito', slug: 'santa-barbara-county' }
    ],
    localInfo: {
      permitInfo: 'Santa Barbara has specific architectural guidelines, especially in historic districts. We navigate these requirements expertly for smooth approvals.',
      hoaNote: 'Santa Barbara\'s El Pueblo Viejo district and other areas have strict design standards. We specialize in compliant, beautiful renovations.',
      localTip: 'Santa Barbara\'s Mediterranean climate is perfect for indoor-outdoor living. Our designs often incorporate this seamless transition.'
    },
    testimonial: {
      quote: 'Our whole house remodel was a huge project, but E&E managed everything seamlessly. Ezra was on-site almost every day. True professionals who care about their work.',
      name: 'David & Linda C.',
      project: 'Santa Barbara Home Remodel'
    },
    nearestOffice: offices.santaBarbara,
    seoKeywords: ['Santa Barbara home remodeling', 'Santa Barbara kitchen remodel', 'Santa Barbara bathroom contractor', 'remodeling company Santa Barbara', 'home renovation Santa Barbara CA']
  },
  {
    slug: 'goleta',
    name: 'Goleta',
    county: 'Santa Barbara County',
    countySlug: 'santa-barbara-county',
    tagline: 'Quality remodeling for Goleta homes. From Old Town charm to modern communities, we deliver expert craftsmanship.',
    description: 'Goleta\'s mix of historic properties and newer developments offers diverse remodeling opportunities. Our team brings the same quality and care to every project, whether you\'re updating a mid-century home or customizing a newer property.',
    highlights: [
      'Local Santa Barbara County office',
      'Experience with diverse home styles',
      'ADU and garage conversion experts',
      'FREE 3D design included',
      'Family-owned since 1999'
    ],
    heroImage: heroImages[1],
    nearbyAreas: [
      { name: 'Santa Barbara', slug: 'santa-barbara' },
      { name: 'Carpinteria', slug: 'carpinteria' },
      { name: 'Isla Vista', slug: 'santa-barbara-county' }
    ],
    localInfo: {
      permitInfo: 'Goleta has streamlined its ADU permit process. We can help you add living space or rental income potential to your property.',
      hoaNote: 'Many Goleta communities have modest HOA requirements. We ensure all designs meet community standards.',
      localTip: 'Goleta\'s tech industry growth has increased home values. Strategic remodeling can maximize your property\'s potential.'
    },
    testimonial: {
      quote: 'E&E converted our garage into a beautiful in-law suite. The quality is outstanding and the process was stress-free. Highly recommend!',
      name: 'The Nakamura Family',
      project: 'Goleta Garage Conversion'
    },
    nearestOffice: offices.santaBarbara,
    seoKeywords: ['Goleta home remodeling', 'Goleta kitchen remodel', 'Goleta bathroom contractor', 'remodeling company Goleta', 'home renovation Goleta CA']
  },
  {
    slug: 'carpinteria',
    name: 'Carpinteria',
    county: 'Santa Barbara County',
    countySlug: 'santa-barbara-county',
    tagline: 'Expert remodeling for Carpinteria\'s beach community. Coastal-smart renovations that stand the test of time.',
    description: 'Carpinteria\'s beach town character and coastal environment require specialized knowledge. We select materials and designs that withstand salt air while capturing the casual elegance that defines this special community.',
    highlights: [
      'Coastal construction expertise',
      'Beach town aesthetic understanding',
      'Moisture-resistant materials',
      'FREE 3D design visualization',
      '25+ years coastal experience'
    ],
    heroImage: heroImages[2],
    nearbyAreas: [
      { name: 'Santa Barbara', slug: 'santa-barbara' },
      { name: 'Goleta', slug: 'goleta' },
      { name: 'Ventura', slug: 'ventura' }
    ],
    localInfo: {
      permitInfo: 'Carpinteria has coastal commission considerations for some properties. We navigate these requirements for compliant construction.',
      hoaNote: 'Beach communities often have specific requirements. We work with local associations to ensure smooth project approvals.',
      localTip: 'Carpinteria\'s beach lifestyle calls for easy-maintenance, durable finishes. Our material recommendations reflect coastal living needs.'
    },
    testimonial: {
      quote: 'Our beach bungalow needed a complete kitchen overhaul. E&E understood our casual coastal style and delivered beyond our expectations.',
      name: 'The Reynolds',
      project: 'Carpinteria Beach House Kitchen'
    },
    nearestOffice: offices.santaBarbara,
    seoKeywords: ['Carpinteria home remodeling', 'Carpinteria kitchen remodel', 'Carpinteria bathroom contractor', 'remodeling company Carpinteria', 'home renovation Carpinteria CA']
  }
]

// Los Angeles County Locations
export const losAngelesCountyLocations: LocationData[] = [
  {
    slug: 'san-fernando-valley',
    name: 'San Fernando Valley',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'The Valley\'s trusted remodeling contractor. From Studio City to Chatsworth, we deliver quality craftsmanship throughout the San Fernando Valley.',
    description: 'The San Fernando Valley\'s diverse neighborhoods deserve a contractor with deep local knowledge. Our Tarzana office has served Valley homeowners for over 25 years, delivering exceptional kitchen, bathroom, and whole-house renovations from Encino to Granada Hills.',
    highlights: [
      'Tarzana office in the heart of the Valley',
      '25+ years serving Valley homeowners',
      'Experience with all Valley neighborhoods',
      'FREE 3D design for every project',
      'Owners personally manage projects'
    ],
    heroImage: heroImages[3],
    nearbyAreas: [
      { name: 'Tarzana', slug: 'tarzana' },
      { name: 'Encino', slug: 'encino' },
      { name: 'Sherman Oaks', slug: 'sherman-oaks' },
      { name: 'Woodland Hills', slug: 'woodland-hills' },
      { name: 'Calabasas', slug: 'calabasas' },
      { name: 'Burbank', slug: 'burbank' }
    ],
    localInfo: {
      permitInfo: 'LA City permits are required for most remodeling. We handle all permit applications and maintain excellent relationships with Valley inspectors.',
      hoaNote: 'Valley neighborhoods have varying HOA requirements. We research and comply with all community guidelines.',
      localTip: 'Valley homes often have great entertaining spaces. Our outdoor living additions are perfect for the area\'s sunny climate.'
    },
    testimonial: {
      quote: 'E&E has done three projects for us over the years—kitchen, master bath, and outdoor kitchen. They\'re our go-to contractor for everything!',
      name: 'The Johnsons',
      project: 'Multiple Valley Projects'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['San Fernando Valley home remodeling', 'Valley kitchen remodel', 'San Fernando Valley contractor', 'remodeling company San Fernando Valley', 'home renovation San Fernando Valley']
  },
  {
    slug: 'calabasas',
    name: 'Calabasas',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Luxury remodeling for Calabasas estates. Premium craftsmanship that matches your home\'s prestige.',
    description: 'Calabasas homes demand the finest materials and most skilled craftsmanship. Our team has extensive experience with high-end renovations in The Oaks, Calabasas Hills, and throughout this prestigious community, delivering results that exceed expectations.',
    highlights: [
      'Luxury home renovation specialists',
      'Premium materials and finishes',
      'The Oaks and Calabasas Hills experience',
      'FREE 3D design visualization',
      'Discreet, professional service'
    ],
    heroImage: heroImages[4],
    nearbyAreas: [
      { name: 'Woodland Hills', slug: 'woodland-hills' },
      { name: 'Hidden Hills', slug: 'los-angeles-county' },
      { name: 'Agoura Hills', slug: 'los-angeles-county' },
      { name: 'Westlake Village', slug: 'ventura-county' }
    ],
    localInfo: {
      permitInfo: 'City of Calabasas maintains high standards. We ensure all work exceeds code requirements and meets community expectations.',
      hoaNote: 'Calabasas communities like The Oaks have architectural review boards. We prepare detailed submissions for smooth approvals.',
      localTip: 'Calabasas homes often feature large chef\'s kitchens and spa-like bathrooms. Our designs maximize these signature spaces.'
    },
    testimonial: {
      quote: 'Our outdoor living space is absolutely stunning. The patio cover and outdoor kitchen they built has become our favorite spot. 25+ years of experience really shows!',
      name: 'Amanda & Chris R.',
      project: 'Calabasas Outdoor Living'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Calabasas home remodeling', 'Calabasas kitchen remodel', 'Calabasas luxury contractor', 'remodeling company Calabasas', 'home renovation Calabasas CA']
  },
  {
    slug: 'woodland-hills',
    name: 'Woodland Hills',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Expert remodeling for Woodland Hills homes. Quality craftsmanship from your neighbors in the West Valley.',
    description: 'Woodland Hills offers beautiful homes ranging from classic Valley ranches to hillside custom properties. Our team, based nearby in Tarzana, brings expert craftsmanship and local knowledge to every Woodland Hills renovation project.',
    highlights: [
      'Based in neighboring Tarzana',
      'West Valley specialists',
      'Kitchen & bathroom experts',
      'FREE 3D design included',
      'CA License #1087571'
    ],
    heroImage: heroImages[5],
    nearbyAreas: [
      { name: 'Tarzana', slug: 'tarzana' },
      { name: 'Calabasas', slug: 'calabasas' },
      { name: 'Encino', slug: 'encino' },
      { name: 'West Hills', slug: 'san-fernando-valley' }
    ],
    localInfo: {
      permitInfo: 'LA City building department oversees Woodland Hills. We handle all permit applications and inspections.',
      hoaNote: 'Woodland Hills has several HOA communities. We coordinate with associations to ensure compliant designs.',
      localTip: 'Woodland Hills\' hillside properties often offer stunning views. Our designs maximize these natural assets.'
    },
    testimonial: {
      quote: 'From the first consultation to the final walkthrough, E&E exceeded every expectation. The master bathroom they designed is like a spa retreat. Worth every penny!',
      name: 'Michelle K.',
      project: 'Woodland Hills Master Bath'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Woodland Hills home remodeling', 'Woodland Hills kitchen remodel', 'Woodland Hills bathroom contractor', 'remodeling company Woodland Hills', 'home renovation Woodland Hills CA']
  },
  {
    slug: 'tarzana',
    name: 'Tarzana',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Your neighborhood remodeling experts. E&E\'s home base is right here in Tarzana—we\'re your neighbors.',
    description: 'Tarzana is home to our main office and showroom, making us truly local neighbors. We take special pride in transforming homes in our own community, from the Tarzana Estates to properties throughout this wonderful neighborhood.',
    highlights: [
      'Our home office is in Tarzana',
      'We\'re your neighbors',
      'Visit our local showroom',
      'FREE 3D design for all projects',
      '25+ years serving the community'
    ],
    heroImage: heroImages[0],
    nearbyAreas: [
      { name: 'Encino', slug: 'encino' },
      { name: 'Woodland Hills', slug: 'woodland-hills' },
      { name: 'Reseda', slug: 'san-fernando-valley' },
      { name: 'Sherman Oaks', slug: 'sherman-oaks' }
    ],
    localInfo: {
      permitInfo: 'As Tarzana locals, we know the LA City permit process inside and out. We handle everything for a smooth project.',
      hoaNote: 'We\'re familiar with Tarzana\'s community associations and work within all local guidelines.',
      localTip: 'Visit our Tarzana showroom to see cabinets, countertops, and fixtures in person before making decisions.'
    },
    testimonial: {
      quote: 'Having E&E right in Tarzana made everything easy. They were always available, and the quality of work is outstanding. Our kitchen is now the heart of our home.',
      name: 'The Steins',
      project: 'Tarzana Kitchen Renovation'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Tarzana home remodeling', 'Tarzana kitchen remodel', 'Tarzana bathroom contractor', 'remodeling company Tarzana', 'home renovation Tarzana CA']
  },
  {
    slug: 'encino',
    name: 'Encino',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Premium remodeling for Encino\'s distinguished homes. Expert craftsmanship for the Valley\'s most desirable neighborhood.',
    description: 'Encino\'s tree-lined streets feature some of the Valley\'s most prestigious homes. Our team brings the expertise and attention to detail these properties deserve, from Royal Oaks to Encino Hills.',
    highlights: [
      'Royal Oaks & Encino Hills experience',
      'Luxury kitchen & bathroom renovations',
      'Premium materials and finishes',
      'FREE 3D design visualization',
      'Owners on every project'
    ],
    heroImage: heroImages[1],
    nearbyAreas: [
      { name: 'Tarzana', slug: 'tarzana' },
      { name: 'Sherman Oaks', slug: 'sherman-oaks' },
      { name: 'Bel Air', slug: 'los-angeles-county' },
      { name: 'Studio City', slug: 'san-fernando-valley' }
    ],
    localInfo: {
      permitInfo: 'Encino properties often involve complex renovations. We manage all permitting and ensure code compliance.',
      hoaNote: 'Encino\'s upscale communities have design standards. We work within these guidelines to deliver approved, beautiful results.',
      localTip: 'Encino homes often have mature landscaping worth preserving. We plan construction to protect your property\'s assets.'
    },
    testimonial: {
      quote: 'E&E transformed our dated Encino home into a modern masterpiece while preserving its character. The attention to detail is remarkable.',
      name: 'Dr. Sarah M.',
      project: 'Encino Whole House Renovation'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Encino home remodeling', 'Encino kitchen remodel', 'Encino bathroom contractor', 'remodeling company Encino', 'home renovation Encino CA']
  },
  {
    slug: 'sherman-oaks',
    name: 'Sherman Oaks',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Quality remodeling for Sherman Oaks homes. From Ventura Boulevard to the hills, we deliver exceptional craftsmanship.',
    description: 'Sherman Oaks offers diverse architectural styles from mid-century modern to contemporary hillside homes. Our team has extensive experience enhancing properties throughout this vibrant community.',
    highlights: [
      'Mid-century modern expertise',
      'Hillside property experience',
      'Kitchen & bathroom specialists',
      'FREE 3D design for every project',
      'Local Valley contractor'
    ],
    heroImage: heroImages[2],
    nearbyAreas: [
      { name: 'Encino', slug: 'encino' },
      { name: 'Studio City', slug: 'san-fernando-valley' },
      { name: 'Van Nuys', slug: 'san-fernando-valley' },
      { name: 'Valley Village', slug: 'san-fernando-valley' }
    ],
    localInfo: {
      permitInfo: 'Sherman Oaks falls under LA City jurisdiction. We handle all permit requirements efficiently.',
      hoaNote: 'Sherman Oaks has various community associations. We ensure designs meet neighborhood standards.',
      localTip: 'Sherman Oaks\' hillside homes often have unique structural considerations. We assess every property thoroughly.'
    },
    testimonial: {
      quote: 'Our mid-century Sherman Oaks home needed sensitive updating. E&E preserved its character while making it functional for modern life. Perfect balance!',
      name: 'Mark & Julia S.',
      project: 'Sherman Oaks Mid-Century Remodel'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Sherman Oaks home remodeling', 'Sherman Oaks kitchen remodel', 'Sherman Oaks bathroom contractor', 'remodeling company Sherman Oaks', 'home renovation Sherman Oaks CA']
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    county: 'Los Angeles County',
    countySlug: 'los-angeles-county',
    tagline: 'Expert remodeling for Burbank homes. Quality craftsmanship for the Media Capital of the World.',
    description: 'Burbank\'s charming neighborhoods feature classic California architecture that deserves expert care. From Magnolia Park bungalows to Rancho Equestrian estates, we bring quality craftsmanship to every Burbank renovation.',
    highlights: [
      'Experience with Burbank home styles',
      'Magnolia Park to Rancho coverage',
      'Kitchen & bathroom transformations',
      'FREE 3D design included',
      '25+ years serving LA County'
    ],
    heroImage: heroImages[3],
    nearbyAreas: [
      { name: 'Glendale', slug: 'los-angeles-county' },
      { name: 'North Hollywood', slug: 'san-fernando-valley' },
      { name: 'Toluca Lake', slug: 'san-fernando-valley' },
      { name: 'Studio City', slug: 'san-fernando-valley' }
    ],
    localInfo: {
      permitInfo: 'City of Burbank has its own building department. We\'re experienced with local permit requirements.',
      hoaNote: 'Burbank neighborhoods vary in HOA requirements. We research and comply with all community standards.',
      localTip: 'Burbank\'s older homes often have great bones but need updated kitchens and baths. Our specialty is preserving character while adding modern function.'
    },
    testimonial: {
      quote: 'E&E updated our 1950s Burbank home beautifully. The new kitchen and bathroom look amazing while fitting the house\'s original character.',
      name: 'The Anderson Family',
      project: 'Burbank Classic Home Update'
    },
    nearestOffice: offices.tarzana,
    seoKeywords: ['Burbank home remodeling', 'Burbank kitchen remodel', 'Burbank bathroom contractor', 'remodeling company Burbank', 'home renovation Burbank CA']
  }
]

// All locations combined
export const allLocations: LocationData[] = [
  ...venturaCountyLocations,
  ...santaBarbaraCountyLocations,
  ...losAngelesCountyLocations
]

// Helper function to get location by slug
export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find(loc => loc.slug === slug)
}

// Helper function to get locations by county
export function getLocationsByCounty(countySlug: string): LocationData[] {
  return allLocations.filter(loc => loc.countySlug === countySlug)
}

// County overview data
export interface CountyData {
  slug: string
  name: string
  description: string
  heroImage: string
  cities: LocationData[]
  office: typeof offices.tarzana
}

export const counties: CountyData[] = [
  {
    slug: 'ventura-county',
    name: 'Ventura County',
    description: 'From coastal Ventura to the Conejo Valley, E&E Home Remodeling serves all of Ventura County with expert kitchen, bathroom, and whole-house renovations. Our Oxnard office provides local service and quick response times.',
    heroImage: heroImages[0],
    cities: venturaCountyLocations,
    office: offices.oxnard
  },
  {
    slug: 'santa-barbara-county',
    name: 'Santa Barbara County',
    description: 'E&E brings 25+ years of remodeling expertise to Santa Barbara County. From historic Spanish Colonial properties to modern beach homes, we deliver craftsmanship that respects and enhances your home\'s character.',
    heroImage: heroImages[1],
    cities: santaBarbaraCountyLocations,
    office: offices.santaBarbara
  },
  {
    slug: 'los-angeles-county',
    name: 'Los Angeles County',
    description: 'Our Tarzana headquarters serves the San Fernando Valley and surrounding Los Angeles County communities. From Calabasas luxury homes to classic Valley properties, we deliver exceptional remodeling results.',
    heroImage: heroImages[2],
    cities: losAngelesCountyLocations,
    office: offices.tarzana
  }
]

export function getCountyBySlug(slug: string): CountyData | undefined {
  return counties.find(county => county.slug === slug)
}
