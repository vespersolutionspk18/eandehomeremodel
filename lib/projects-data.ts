export interface BeforeAfter {
  before: string
  after: string
  area: string
}

export interface ProjectData {
  slug: string
  title: string
  location: string
  locationSlug: string
  county: string
  category: 'kitchen' | 'bathroom' | 'whole-house' | 'outdoor' | 'adu' | 'room-addition'
  heroImage: string
  description: string
  challenge: string
  solution: string
  scope: string[]
  timeline: string
  budgetRange: string
  completionYear: number
  beforeAfters: BeforeAfter[]
  galleryImages: string[]
  features: string[]
  testimonial: {
    quote: string
    name: string
    title: string
  }
  relatedProjects: string[]
  seoKeywords: string[]
}

export const projects: ProjectData[] = [
  {
    slug: 'calabasas-whole-house-villawood',
    title: 'Calabasas Whole House Transformation',
    location: 'Calabasas',
    locationSlug: 'calabasas',
    county: 'Los Angeles County',
    category: 'whole-house',
    heroImage: '/projects/Calabasas33.jpg',
    description: 'A stunning whole-house remodel that transformed a dated 1990s home into a modern Mediterranean masterpiece. This Calabasas property received a complete makeover including a chef\'s kitchen, spa-like master bath, and beautiful outdoor living spaces.',
    challenge: 'The homeowners purchased this property with the vision of creating their forever home. The existing layout was compartmentalized, the kitchen was dark and cramped, and the bathrooms were outdated. They wanted an open, flowing space perfect for entertaining while maintaining the home\'s Mediterranean character.',
    solution: 'We reconfigured the floor plan to create an open-concept living area with seamless transitions between the kitchen, dining, and living spaces. Custom cabinetry, quartz countertops, and professional-grade appliances transformed the kitchen. Each bathroom became a spa retreat with heated floors, rainfall showers, and custom vanities.',
    scope: ['Complete kitchen remodel', 'Master bathroom renovation', 'Guest bathroom updates', 'Living room expansion', 'Outdoor kitchen installation', 'Patio cover with ceiling fan', 'New flooring throughout', 'Custom lighting design', 'Landscape refresh'],
    timeline: '4 months',
    budgetRange: '$250,000 - $350,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/YuriBefore1.jpg', after: '/projects/DSC04091.jpg', area: 'Kitchen' },
      { before: '/projects/YuriBefore2.jpg', after: '/projects/DSC04094.jpg', area: 'Kitchen Island' },
      { before: '/projects/YuriBefore3.jpg', after: '/projects/DSC04100.jpg', area: 'Kitchen Cabinets' },
      { before: '/projects/YuriBefore4.jpg', after: '/projects/DSC08929.jpg', area: 'Master Bathroom' },
      { before: '/projects/YuriBefore5.jpg', after: '/projects/DSC08942.jpg', area: 'Bathroom Vanity' },
      { before: '/projects/YuriBefore6.jpg', after: '/projects/DSC04185.jpg', area: 'Outdoor Living' },
    ],
    galleryImages: [
      '/projects/DSC04091.jpg',
      '/projects/DSC04094.jpg',
      '/projects/DSC04095.jpg',
      '/projects/DSC04099.jpg',
      '/projects/DSC04100.jpg',
      '/projects/DSC04109.jpg',
      '/projects/calabasas.jpg',
      '/projects/Calabasas33.jpg',
      '/projects/DSC08925.jpg',
      '/projects/DSC08929.jpg',
      '/projects/DSC08942.jpg',
      '/projects/DSC04185.jpg',
      '/projects/DSC04188.jpg',
      '/projects/DSC04190.jpg',
      '/projects/DSC04191.jpg',
      '/projects/DSC04218.jpg',
    ],
    features: [
      'Custom soft-close cabinetry with pull-out organizers',
      'Quartzite waterfall countertops',
      'Wolf 6-burner range with griddle',
      'Sub-Zero refrigerator',
      'Heated bathroom floors with programmable thermostat',
      'Frameless glass shower enclosures',
      'Built-in outdoor BBQ with refrigerator',
      'Aluminum patio cover with integrated lighting',
    ],
    testimonial: {
      quote: 'Ezra and Ester made our dream home a reality. From day one, they listened to our vision and delivered beyond our expectations. The attention to detail is incredible—every corner of our home feels intentional and beautiful.',
      name: 'Jennifer & Mark T.',
      title: 'Calabasas Homeowners'
    },
    relatedProjects: ['woodland-hills-modern-kitchen', 'encino-master-suite', 'tarzana-outdoor-oasis'],
    seoKeywords: ['calabasas whole house remodel', 'calabasas home renovation', 'calabasas kitchen remodel', 'luxury home remodel calabasas']
  },
  {
    slug: 'woodland-hills-modern-kitchen',
    title: 'Woodland Hills Contemporary Kitchen',
    location: 'Woodland Hills',
    locationSlug: 'woodland-hills',
    county: 'Los Angeles County',
    category: 'kitchen',
    heroImage: '/projects/DSC04071-2cc97e5a.jpg',
    description: 'A complete kitchen transformation that brought contemporary elegance to this Woodland Hills family home. The outdated galley kitchen was opened up to create a stunning entertainer\'s dream with a massive island and high-end finishes.',
    challenge: 'The original galley kitchen was isolated from the living areas, making it impossible for the homeowners to interact with guests while cooking. Limited counter space and dated appliances made meal prep frustrating. They wanted a kitchen that would become the heart of their home.',
    solution: 'We removed the wall separating the kitchen from the living room, creating an expansive open floor plan. A 10-foot island with waterfall edges became the centerpiece, providing ample seating and prep space. We installed custom white shaker cabinets with brass hardware and integrated smart appliances.',
    scope: ['Wall removal for open concept', 'Custom cabinet installation', 'Quartz countertops', 'New appliance package', 'Pendant lighting design', 'Backsplash installation', 'New hardwood flooring', 'Electrical upgrades'],
    timeline: '6 weeks',
    budgetRange: '$85,000 - $120,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/YuriBefore10.jpg', after: '/projects/DSC04075a.jpg', area: 'Kitchen Overview' },
      { before: '/projects/YuriBefore11.jpg', after: '/projects/DSC04076.jpg', area: 'Island & Seating' },
      { before: '/projects/YuriBefore12.jpg', after: '/projects/DSC04078.jpg', area: 'Cabinet Wall' },
      { before: '/projects/YuriBefore13.jpg', after: '/projects/DSC04087.jpg', area: 'Appliance Wall' },
    ],
    galleryImages: [
      '/projects/DSC04071-2cc97e5a.jpg',
      '/projects/DSC04075a.jpg',
      '/projects/DSC04076.jpg',
      '/projects/DSC04078.jpg',
      '/projects/DSC04085-2a.jpg',
      '/projects/DSC04085-2b.jpg',
      '/projects/DSC04087.jpg',
      '/projects/kitchen-1.jpeg',
      '/projects/kitchen-2.jpg',
      '/projects/kitchen-3.jpg',
      '/projects/DSC04109-2.jpg',
      '/projects/DSC04115.jpg',
    ],
    features: [
      'Custom white shaker cabinets to ceiling',
      'Brushed brass cabinet hardware',
      '10-foot waterfall quartz island',
      'Under-cabinet LED lighting',
      'Built-in wine refrigerator',
      'Pot filler over range',
      'Farmhouse sink with touchless faucet',
      'Smart home integration',
    ],
    testimonial: {
      quote: 'Our kitchen went from the room we avoided to our favorite space in the house. E&E understood exactly what we needed and the finished result is magazine-worthy. We host dinner parties every weekend now!',
      name: 'David & Lisa M.',
      title: 'Woodland Hills Homeowners'
    },
    relatedProjects: ['calabasas-whole-house-villawood', 'sherman-oaks-kitchen-refresh', 'thousand-oaks-family-kitchen'],
    seoKeywords: ['woodland hills kitchen remodel', 'kitchen renovation woodland hills', 'modern kitchen remodel', 'open concept kitchen los angeles']
  },
  {
    slug: 'thousand-oaks-family-kitchen',
    title: 'Thousand Oaks Family-Friendly Kitchen',
    location: 'Thousand Oaks',
    locationSlug: 'thousand-oaks',
    county: 'Ventura County',
    category: 'kitchen',
    heroImage: '/projects/DSC04119.jpg',
    description: 'A thoughtfully designed kitchen remodel for a busy family of five. This Thousand Oaks project focused on durability, storage, and functionality without sacrificing style.',
    challenge: 'With three young children, this family needed a kitchen that could withstand heavy daily use while still looking beautiful. The existing kitchen lacked storage, had poor workflow, and the island was too small for family meals.',
    solution: 'We designed a kitchen with families in mind—durable quartz countertops, easy-clean cabinet finishes, and a massive island with built-in homework station. A walk-in pantry maximized storage, and we added a beverage station to keep the main prep areas free.',
    scope: ['Full cabinet replacement', 'Large island with seating for 6', 'Walk-in pantry creation', 'Beverage center addition', 'New countertops', 'Tile backsplash', 'Recessed lighting', 'New flooring'],
    timeline: '5 weeks',
    budgetRange: '$75,000 - $95,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/YuriBefore15.jpg', after: '/projects/DSC04119.jpg', area: 'Main Kitchen' },
      { before: '/projects/YuriBefore16.jpg', after: '/projects/DSC04122.jpg', area: 'Island Area' },
      { before: '/projects/YuriBefore17.jpg', after: '/projects/DSC04123.jpg', area: 'Cooking Zone' },
    ],
    galleryImages: [
      '/projects/DSC04119.jpg',
      '/projects/DSC04122-a.jpg',
      '/projects/DSC04122.jpg',
      '/projects/DSC04123.jpg',
      '/projects/DSC04128.jpg',
      '/projects/DSC04129.jpg',
      '/projects/DSC04130-2.jpg',
      '/projects/DSC04133.jpg',
      '/projects/DSC04140.jpg',
      '/projects/DSC04143.jpg',
    ],
    features: [
      'Durable quartz countertops',
      'Soft-close drawers throughout',
      'Built-in homework/charging station',
      'Walk-in pantry with custom shelving',
      'Double ovens for meal prep',
      'Oversized farmhouse sink',
      'Beverage refrigerator',
      'Kid-height snack drawer',
    ],
    testimonial: {
      quote: 'E&E thought of everything a family with kids needs. The homework station in the island, the easy-to-clean surfaces, the massive pantry—it\'s like they designed it specifically for our chaos!',
      name: 'The Rodriguez Family',
      title: 'Thousand Oaks Homeowners'
    },
    relatedProjects: ['woodland-hills-modern-kitchen', 'ventura-coastal-kitchen', 'simi-valley-kitchen-update'],
    seoKeywords: ['thousand oaks kitchen remodel', 'family kitchen design', 'ventura county kitchen contractor', 'kid-friendly kitchen remodel']
  },
  {
    slug: 'ventura-coastal-kitchen',
    title: 'Ventura Coastal-Inspired Kitchen',
    location: 'Ventura',
    locationSlug: 'ventura',
    county: 'Ventura County',
    category: 'kitchen',
    heroImage: '/projects/DSC04149.jpg',
    description: 'A bright, airy kitchen renovation inspired by Ventura\'s coastal lifestyle. White cabinets, natural wood accents, and ocean-blue touches create a relaxed beach-house feel.',
    challenge: 'Located just minutes from the beach, this home\'s dark, dated kitchen felt disconnected from its coastal surroundings. The homeowners wanted a space that reflected the laid-back Ventura lifestyle while being practical for daily use.',
    solution: 'We brought the outdoors in with white shaker cabinets, natural wood floating shelves, and subtle blue-gray accents. Large windows were added to maximize natural light, and we installed a butcher block breakfast bar for casual meals.',
    scope: ['Cabinet replacement', 'Window enlargement', 'Floating shelf installation', 'Butcher block island', 'Subway tile backsplash', 'New lighting', 'Flooring update'],
    timeline: '4 weeks',
    budgetRange: '$55,000 - $70,000',
    completionYear: 2023,
    beforeAfters: [
      { before: '/projects/YuriBefore18.jpg', after: '/projects/DSC04149.jpg', area: 'Full Kitchen' },
      { before: '/projects/YuriBefore19.jpg', after: '/projects/DSC04157.jpg', area: 'Sink Area' },
    ],
    galleryImages: [
      '/projects/DSC04149.jpg',
      '/projects/DSC04157.jpg',
      '/projects/DSC04158.jpg',
      '/projects/DSC04162.jpg',
      '/projects/DSC04165a.jpg',
      '/projects/DSC04168a.jpg',
      '/projects/DSC04175.jpg',
      '/projects/DSC04181.jpg',
    ],
    features: [
      'White shaker cabinets',
      'Natural wood floating shelves',
      'Butcher block breakfast bar',
      'Subway tile with gray grout',
      'Brass fixture accents',
      'Enlarged windows',
      'Open shelving display',
      'Coastal color palette',
    ],
    testimonial: {
      quote: 'Our kitchen now feels like a natural extension of our Ventura lifestyle. We love having coffee at the breakfast bar watching the morning light. Ezra really understood the coastal vibe we were going for.',
      name: 'Steve & Nancy P.',
      title: 'Ventura Homeowners'
    },
    relatedProjects: ['thousand-oaks-family-kitchen', 'oxnard-kitchen-bath-combo', 'santa-barbara-mediterranean-kitchen'],
    seoKeywords: ['ventura kitchen remodel', 'coastal kitchen design', 'beach house kitchen', 'ventura county contractor']
  },
  {
    slug: 'encino-master-suite',
    title: 'Encino Luxury Master Suite',
    location: 'Encino',
    locationSlug: 'encino',
    county: 'Los Angeles County',
    category: 'bathroom',
    heroImage: '/projects/DSC08925.jpg',
    description: 'A spa-inspired master bathroom retreat in the heart of Encino. This project transformed a cramped, builder-grade bathroom into a luxurious sanctuary featuring a freestanding soaking tub, rainfall shower, and custom double vanity.',
    challenge: 'The existing master bathroom was cramped with a dated jacuzzi tub that was never used, poor lighting, and an inefficient layout. The homeowners wanted a spa-like retreat where they could unwind after long days.',
    solution: 'We removed the bulky jacuzzi and reconfigured the layout to include a stunning freestanding soaking tub as the focal point. A spacious walk-in shower with dual rainfall heads and body jets replaced the old shower stall. Custom floating vanities with vessel sinks completed the look.',
    scope: ['Complete bathroom gut renovation', 'Layout reconfiguration', 'Freestanding tub installation', 'Walk-in shower build', 'Custom vanity fabrication', 'Heated floors', 'New lighting scheme', 'Frameless glass enclosure'],
    timeline: '5 weeks',
    budgetRange: '$65,000 - $85,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/YuriBefore22.jpg', after: '/projects/DSC08925.jpg', area: 'Full Bathroom' },
      { before: '/projects/bathroom-1.jpg', after: '/projects/DSC08929.jpg', area: 'Shower Area' },
      { before: '/projects/bathroom-2.jpg', after: '/projects/DSC08942.jpg', area: 'Vanity' },
    ],
    galleryImages: [
      '/projects/DSC08925.jpg',
      '/projects/DSC08929.jpg',
      '/projects/DSC08932.jpg',
      '/projects/DSC08935.jpg',
      '/projects/DSC08937.jpg',
      '/projects/DSC08942.jpg',
      '/projects/DSC08953.jpg',
      '/projects/DSC08954.jpg',
      '/projects/DSC08962.jpg',
      '/projects/DSC08965.jpg',
      '/projects/DSC08967.jpg',
      '/projects/DSC08977.jpg',
    ],
    features: [
      'Freestanding Victoria + Albert soaking tub',
      'Dual rainfall shower heads',
      'Body jet system',
      'Heated Carrara marble floors',
      'Custom floating double vanity',
      'Backlit mirror with defogger',
      'Frameless glass enclosure',
      'Toto smart toilet',
    ],
    testimonial: {
      quote: 'Walking into my bathroom feels like checking into a luxury spa. The heated floors, the rainfall shower, the beautiful tub—every detail is perfect. E&E created exactly what I envisioned and more.',
      name: 'Rachel K.',
      title: 'Encino Homeowner'
    },
    relatedProjects: ['sherman-oaks-spa-bath', 'calabasas-whole-house-villawood', 'tarzana-master-bath'],
    seoKeywords: ['encino bathroom remodel', 'luxury master bathroom', 'spa bathroom design', 'encino contractor']
  },
  {
    slug: 'sherman-oaks-spa-bath',
    title: 'Sherman Oaks Zen Spa Bathroom',
    location: 'Sherman Oaks',
    locationSlug: 'sherman-oaks',
    county: 'Los Angeles County',
    category: 'bathroom',
    heroImage: '/projects/DSC04202.jpg',
    description: 'A tranquil bathroom renovation that brings Japanese-inspired zen to this Sherman Oaks home. Natural materials, clean lines, and thoughtful details create a serene daily escape.',
    challenge: 'The homeowners, inspired by their travels to Japan, wanted their outdated 1980s bathroom transformed into a zen retreat. They desired natural materials, minimalist design, and a connection to nature.',
    solution: 'We incorporated natural stone, warm wood tones, and plenty of plants to create a spa-like atmosphere. A Japanese soaking tub became the centerpiece, complemented by a walk-in shower with a pebble floor. A living plant wall brings nature inside.',
    scope: ['Complete renovation', 'Japanese soaking tub installation', 'Pebble shower floor', 'Teak vanity cabinet', 'Living wall installation', 'Skylight addition', 'Natural stone walls'],
    timeline: '6 weeks',
    budgetRange: '$70,000 - $90,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/20221004_112154.jpg', after: '/projects/DSC04202.jpg', area: 'Main Bathroom' },
      { before: '/projects/20221004_112208.jpg', after: '/projects/DSC04205.jpg', area: 'Shower' },
    ],
    galleryImages: [
      '/projects/DSC04202.jpg',
      '/projects/DSC04205.jpg',
      '/projects/DSC04196.jpg',
      '/projects/DSC04198.jpg',
      '/projects/DSC04192.jpg',
      '/projects/DSC04194.jpg',
      '/projects/DSC04215.jpg',
      '/projects/DSC04226a.jpg',
      '/projects/DSC04230.jpg',
      '/projects/DSC04231.jpg',
    ],
    features: [
      'Hinoki wood Japanese soaking tub',
      'River pebble shower floor',
      'Custom teak vanity',
      'Living moss wall',
      'Solar tube skylight',
      'Heated stone floors',
      'Rainfall shower head',
      'Natural stone accent wall',
    ],
    testimonial: {
      quote: 'Every time I step into my bathroom, I feel the stress melt away. Ezra understood our vision for a zen sanctuary and brought it to life with incredible craftsmanship.',
      name: 'Dr. James & Amy L.',
      title: 'Sherman Oaks Homeowners'
    },
    relatedProjects: ['encino-master-suite', 'burbank-modern-bath', 'tarzana-master-bath'],
    seoKeywords: ['sherman oaks bathroom remodel', 'zen bathroom design', 'japanese bathroom', 'spa bathroom sherman oaks']
  },
  {
    slug: 'tarzana-outdoor-oasis',
    title: 'Tarzana Backyard Outdoor Oasis',
    location: 'Tarzana',
    locationSlug: 'tarzana',
    county: 'Los Angeles County',
    category: 'outdoor',
    heroImage: '/projects/DSC04185.jpg',
    description: 'A complete backyard transformation that turned an unused lawn into the ultimate outdoor living space. This Tarzana project features a full outdoor kitchen, covered dining area, fire pit lounge, and resort-style landscaping.',
    challenge: 'The backyard was an afterthought—mostly unused lawn that required constant maintenance. The homeowners wanted a space for year-round entertaining, outdoor cooking, and relaxation without the upkeep of grass.',
    solution: 'We designed distinct zones for cooking, dining, and lounging. An aluminum patio cover with ceiling fans provides shade, while a built-in outdoor kitchen makes entertaining easy. A fire pit surrounded by built-in seating creates a cozy gathering spot. Drought-tolerant landscaping eliminated the lawn maintenance.',
    scope: ['Outdoor kitchen construction', 'Patio cover installation', 'Fire pit and seating', 'Hardscape installation', 'Drought-tolerant landscape', 'Outdoor lighting', 'Sound system', 'Ceiling fans'],
    timeline: '8 weeks',
    budgetRange: '$95,000 - $130,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/o-15.jpg', after: '/projects/DSC04185.jpg', area: 'Patio Overview' },
      { before: '/projects/o-16.jpg', after: '/projects/DSC04188.jpg', area: 'Outdoor Kitchen' },
      { before: '/projects/o-17.jpg', after: '/projects/DSC04190.jpg', area: 'Dining Area' },
      { before: '/projects/o-18.jpg', after: '/projects/DSC04191.jpg', area: 'Fire Pit Lounge' },
    ],
    galleryImages: [
      '/projects/DSC04185.jpg',
      '/projects/DSC04188.jpg',
      '/projects/DSC04190.jpg',
      '/projects/DSC04191.jpg',
      '/projects/DSC04218.jpg',
      '/projects/DSC00639.jpg',
      '/projects/DSC00643.jpg',
      '/projects/o-19.jpg',
      '/projects/o-20.jpg',
      '/projects/o-21.jpg',
      '/projects/o-22.jpg',
      '/projects/o-23.jpg',
    ],
    features: [
      'Built-in BBQ with side burner',
      'Outdoor refrigerator and ice maker',
      'Granite prep counter',
      'Aluminum patio cover with fans',
      'Gas fire pit with lava rock',
      'Built-in concrete seating',
      'Low-voltage landscape lighting',
      'Integrated speaker system',
    ],
    testimonial: {
      quote: 'We basically live outside now. The outdoor kitchen is amazing for hosting, and everyone loves gathering around the fire pit. E&E turned our boring backyard into a resort.',
      name: 'Mike & Karen B.',
      title: 'Tarzana Homeowners'
    },
    relatedProjects: ['calabasas-whole-house-villawood', 'simi-valley-outdoor-living', 'ventura-patio-deck'],
    seoKeywords: ['tarzana outdoor living', 'outdoor kitchen los angeles', 'backyard remodel', 'patio cover tarzana']
  },
  {
    slug: 'simi-valley-outdoor-living',
    title: 'Simi Valley Outdoor Entertainment Space',
    location: 'Simi Valley',
    locationSlug: 'simi-valley',
    county: 'Ventura County',
    category: 'outdoor',
    heroImage: '/projects/DSC00637.jpg',
    description: 'A spacious outdoor entertainment area perfect for Simi Valley\'s beautiful weather. This project created seamless indoor-outdoor living with a covered pergola, cooking station, and comfortable seating areas.',
    challenge: 'The homeowners had a large backyard but no defined outdoor living space. They wanted to take advantage of Simi Valley\'s year-round great weather and create a space for family gatherings and weekend entertaining.',
    solution: 'We built a modern pergola with adjustable louvers for sun control, added a streamlined BBQ station, and created multiple seating areas for different occasions. A dining table under the pergola accommodates large family dinners.',
    scope: ['Louvered pergola construction', 'BBQ station build', 'Paver patio installation', 'Outdoor lighting', 'Furniture layout', 'Landscape borders'],
    timeline: '5 weeks',
    budgetRange: '$55,000 - $75,000',
    completionYear: 2023,
    beforeAfters: [
      { before: '/projects/o-24.jpg', after: '/projects/DSC00637.jpg', area: 'Backyard Overview' },
      { before: '/projects/o-25.jpg', after: '/projects/DSC00631.jpg', area: 'Pergola Area' },
    ],
    galleryImages: [
      '/projects/DSC00637.jpg',
      '/projects/DSC00631.jpg',
      '/projects/DSC00627.jpg',
      '/projects/DSC00624.jpg',
      '/projects/DSC00623.jpg',
      '/projects/DSC00621.jpg',
      '/projects/DSC00620.jpg',
      '/projects/DSC00619.jpg',
      '/projects/DSC00617.jpg',
      '/projects/DSC00616.jpg',
      '/projects/DSC00613.jpg',
    ],
    features: [
      'Adjustable louvered pergola',
      'Built-in BBQ grill',
      'Granite countertop',
      'Paver patio installation',
      'String light installation',
      'Outdoor dining for 8',
      'Lounge seating area',
      'Natural stone borders',
    ],
    testimonial: {
      quote: 'The pergola with adjustable louvers is genius—we can have full sun or complete shade depending on the time of day. E&E really thought through every detail.',
      name: 'Tom & Linda S.',
      title: 'Simi Valley Homeowners'
    },
    relatedProjects: ['tarzana-outdoor-oasis', 'thousand-oaks-patio-remodel', 'moorpark-backyard-retreat'],
    seoKeywords: ['simi valley outdoor living', 'pergola installation', 'outdoor entertainment space', 'ventura county outdoor remodel']
  },
  {
    slug: 'santa-barbara-mediterranean-kitchen',
    title: 'Santa Barbara Mediterranean Kitchen',
    location: 'Santa Barbara',
    locationSlug: 'santa-barbara',
    county: 'Santa Barbara County',
    category: 'kitchen',
    heroImage: '/projects/DSC03966-ae6881a0.jpg',
    description: 'A stunning Mediterranean-style kitchen renovation that honors Santa Barbara\'s architectural heritage. Terra cotta tile floors, arched openings, and hand-painted tiles create an authentic Old World feel.',
    challenge: 'This historic Santa Barbara home needed a kitchen update while preserving its Mediterranean character. The homeowners wanted modern functionality without sacrificing the home\'s original charm.',
    solution: 'We sourced hand-painted tiles from a local artisan for the backsplash and chose warm wood cabinets that complement the terra cotta floors. Wrought iron fixtures and an arched range hood maintain the Mediterranean aesthetic while concealing modern appliances.',
    scope: ['Custom wood cabinets', 'Hand-painted tile backsplash', 'Terra cotta floor restoration', 'Arched range hood', 'New appliances', 'Wrought iron fixtures', 'Copper farmhouse sink'],
    timeline: '7 weeks',
    budgetRange: '$90,000 - $115,000',
    completionYear: 2023,
    beforeAfters: [
      { before: '/projects/o-26.jpg', after: '/projects/DSC03966-ae6881a0.jpg', area: 'Kitchen Main' },
      { before: '/projects/o-27.jpg', after: '/projects/DSC03978.jpg', area: 'Range Area' },
    ],
    galleryImages: [
      '/projects/DSC03966-ae6881a0.jpg',
      '/projects/DSC03978.jpg',
      '/projects/DSC03958---Copy.jpg',
      '/projects/DSC03961.jpg',
      '/projects/DSC03981as-0fb3be63.jpg',
      '/projects/DSC03985-f1726aa6.jpg',
      '/projects/DSC03990er.jpg',
      '/projects/DSC04000.jpg',
      '/projects/DSC04007.jpg',
      '/projects/DSC04009.jpg',
      '/projects/DSC04014.jpg',
    ],
    features: [
      'Custom alder wood cabinets',
      'Hand-painted Talavera tiles',
      'Copper farmhouse sink',
      'Wrought iron pot rack',
      'Arched plastered range hood',
      'Terra cotta floor tile',
      'Undercabinet task lighting',
      'Hidden spice pullouts',
    ],
    testimonial: {
      quote: 'E&E understood that we didn\'t want a "new" kitchen—we wanted one that looked like it had always been part of this 1920s home. They nailed it perfectly.',
      name: 'Robert & Catherine M.',
      title: 'Santa Barbara Homeowners'
    },
    relatedProjects: ['goleta-coastal-bath', 'ventura-coastal-kitchen', 'carpinteria-beach-house'],
    seoKeywords: ['santa barbara kitchen remodel', 'mediterranean kitchen design', 'santa barbara contractor', 'historic home renovation']
  },
  {
    slug: 'burbank-complete-remodel',
    title: 'Burbank Mid-Century Complete Remodel',
    location: 'Burbank',
    locationSlug: 'burbank',
    county: 'Los Angeles County',
    category: 'whole-house',
    heroImage: '/projects/DSC00115.jpg',
    description: 'A sensitive renovation of a 1958 mid-century modern home in Burbank. This project updated the entire home while preserving and enhancing the original architectural character that makes these homes special.',
    challenge: 'The homeowners fell in love with this mid-century gem but it needed significant updates. Previous renovations had covered original features, and the layout didn\'t suit modern living. They wanted to restore its mid-century soul while adding contemporary comfort.',
    solution: 'We uncovered original features like post-and-beam ceilings and terrazzo floors, restoring them to their former glory. The kitchen was opened up with period-appropriate cabinetry in warm walnut. Bathrooms received updates with classic mid-century tile patterns.',
    scope: ['Original feature restoration', 'Kitchen renovation', 'Two bathroom updates', 'Post-and-beam ceiling exposure', 'Terrazzo floor restoration', 'Period-appropriate fixtures', 'Landscape refresh', 'Window replacement'],
    timeline: '12 weeks',
    budgetRange: '$180,000 - $240,000',
    completionYear: 2024,
    beforeAfters: [
      { before: '/projects/o-28.jpg', after: '/projects/DSC00115.jpg', area: 'Living Room' },
      { before: '/projects/o-29.jpg', after: '/projects/DSC00116.jpg', area: 'Kitchen' },
      { before: '/projects/PHOTO-2023-11-30-22-22-07.jpg', after: '/projects/DSC00118.jpg', area: 'Master Bath' },
    ],
    galleryImages: [
      '/projects/DSC00115.jpg',
      '/projects/DSC00116.jpg',
      '/projects/DSC00118.jpg',
      '/projects/DSC00122.jpg',
      '/projects/DSC09011.jpg',
      '/projects/DSC09013.jpg',
      '/projects/DSC09017.jpg',
      '/projects/DSC09022.jpg',
      '/projects/DSC09035.jpg',
      '/projects/DSC09040.jpg',
      '/projects/DSC08998.jpg',
      '/projects/DSC09009.jpg',
    ],
    features: [
      'Restored post-and-beam ceilings',
      'Refinished terrazzo floors',
      'Walnut slab cabinet fronts',
      'Period-appropriate tile work',
      'Clerestory window preservation',
      'Eichler-style bathroom vanity',
      'Atomic-era lighting fixtures',
      'Floor-to-ceiling windows maintained',
    ],
    testimonial: {
      quote: 'Ezra and Ester share our passion for mid-century architecture. They didn\'t just renovate our home—they restored its character. Every decision honored the original design intent.',
      name: 'Brian & Jessica H.',
      title: 'Burbank Homeowners'
    },
    relatedProjects: ['sherman-oaks-spa-bath', 'encino-master-suite', 'calabasas-whole-house-villawood'],
    seoKeywords: ['burbank home remodel', 'mid-century modern renovation', 'burbank contractor', 'eichler style remodel']
  },
]

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getProjectsByCategory = (category: ProjectData['category']): ProjectData[] => {
  return projects.filter(project => project.category === category)
}

export const getProjectsByLocation = (locationSlug: string): ProjectData[] => {
  return projects.filter(project => project.locationSlug === locationSlug)
}

export const getAllCategories = (): string[] => {
  return [...new Set(projects.map(p => p.category))]
}

export const getAllLocations = (): string[] => {
  return [...new Set(projects.map(p => p.location))]
}
