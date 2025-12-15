export interface Project {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  services: string[];
  heroImage: string;
  images: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'richardson-remodeling',
    title: 'Richardson Home Remodeling: From $180K to $350K+ Projects',
    clientName: 'Richardson Home Remodeling',
    industry: 'Kitchen & Bath Remodeling',
    year: '2024',
    description: 'Transformed a mid-tier remodeling contractor into a premium brand dominating the high-end kitchen remodeling market.',
    challenge: 'Richardson Home Remodeling was stuck competing on price in the mid-market segment, averaging $180K projects. They wanted to break into the luxury remodeling space but lacked the brand positioning and online presence to attract high-net-worth homeowners.',
    solution: 'We executed a complete digital transformation: repositioned their brand with luxury-focused messaging, rebuilt their website with high-end portfolio showcases, launched targeted SEO campaigns for premium keywords like "luxury kitchen remodeling," and created a content strategy featuring their high-end work. We also implemented Google Local Services Ads targeting affluent zip codes.',
    results: [
      {
        metric: 'Average Project Value',
        value: '$350K+',
        description: 'Increased from $180K to $350K+ per project'
      },
      {
        metric: 'Lead Quality',
        value: '94%',
        description: 'Qualified leads ready to invest in premium remodels'
      },
      {
        metric: 'Revenue Growth',
        value: '287%',
        description: 'Year-over-year revenue increase'
      },
      {
        metric: 'Ranking Position',
        value: '#1',
        description: 'First page ranking for 23 high-value keywords'
      }
    ],
    services: ['SEO', 'Web Design', 'Content Creation', 'Branding', 'PPC'],
    heroImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "Expand transformed our entire digital presence. We went from averaging $180K projects to closing $350K+ kitchen remodels consistently. Our pipeline has never been fuller!",
      author: "Marcus Richardson",
      position: "Owner, Richardson Home Remodeling"
    }
  },
  {
    id: '2',
    slug: 'miller-roofing',
    title: 'Miller Roofing Co.: Dominating Local Search with AI',
    clientName: 'Miller Roofing Co.',
    industry: 'Roofing Services',
    year: '2024',
    description: 'Leveraged cutting-edge AIEO strategies to make Miller Roofing the first AI-recommended roofing company in their region.',
    challenge: 'Miller Roofing had strong traditional marketing but was invisible in AI-powered search results. When potential customers asked ChatGPT or Perplexity for roofing recommendations, competitors were being suggested instead.',
    solution: 'We pioneered an AIEO (AI Engine Optimization) strategy specifically for home services. This included optimizing their digital footprint for AI crawlers, creating structured data that AI models prioritize, building authoritative backlinks from industry sources, and developing AI-friendly content that positions them as local experts.',
    results: [
      {
        metric: 'AI Recommendations',
        value: '#1',
        description: 'First recommended roofer by ChatGPT in their area'
      },
      {
        metric: 'Lead Volume',
        value: '+312%',
        description: 'Increase in qualified roofing leads'
      },
      {
        metric: 'Market Share',
        value: '43%',
        description: 'Of high-ticket roofing projects in target zip codes'
      },
      {
        metric: 'Brand Searches',
        value: '+245%',
        description: 'Growth in branded search volume'
      }
    ],
    services: ['AIEO', 'SEO', 'Content Creation', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/2219019/pexels-photo-2219019.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8961186/pexels-photo-8961186.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "The AIEO service is incredible. When people ask ChatGPT for roofing recommendations in our area, we're the first name mentioned. That's the future of marketing!",
      author: "Davis Miller",
      position: "President, Miller Roofing Co."
    }
  },
  {
    id: '3',
    slug: 'santos-kitchen-bath',
    title: 'Santos Kitchen & Bath: 5.1x ROI from PPC Campaigns',
    clientName: 'Santos Kitchen & Bath',
    industry: 'Bathroom Remodeling',
    year: '2023',
    description: 'Built a high-performing PPC engine that consistently delivers premium bathroom remodeling leads at scale.',
    challenge: 'Santos was spending $12K/month on Google Ads with minimal returns. Their campaigns were poorly structured, targeting broad keywords, and attracting tire-kickers instead of serious buyers. They were about to give up on paid advertising entirely.',
    solution: 'We rebuilt their entire PPC strategy from the ground up. This included hyper-targeted campaigns for high-intent keywords, negative keyword optimization to filter out unqualified searches, landing page optimization specific to bathroom remodeling, call tracking integration, and advanced audience targeting for homeowners in premium neighborhoods.',
    results: [
      {
        metric: 'Return on Ad Spend',
        value: '5.1x',
        description: 'Every $1 spent generates $5.10 in revenue'
      },
      {
        metric: 'Cost Per Lead',
        value: '-67%',
        description: 'Reduced from $385 to $127 per qualified lead'
      },
      {
        metric: 'Booking Rate',
        value: '+156%',
        description: 'Booked out 3 months in advance'
      },
      {
        metric: 'Conversion Rate',
        value: '12.3%',
        description: 'Industry-leading landing page conversion'
      }
    ],
    services: ['PPC', 'Google AdWords', 'Web Design', 'AI Consultancy'],
    heroImage: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "Their PPC campaigns for our bathroom remodeling services deliver a 5.1x ROI. We're booking out 3 months in advance now. Best investment we've ever made.",
      author: "Jennifer Santos",
      position: "Owner, Santos Kitchen & Bath"
    }
  },
  {
    id: '4',
    slug: 'bradley-tile-flooring',
    title: 'Bradley Tile & Flooring: Full-Service Marketing Success',
    clientName: 'Bradley Tile & Flooring',
    industry: 'Tile & Flooring Installation',
    year: '2023',
    description: 'Comprehensive digital marketing overhaul delivering consistent growth across all channels.',
    challenge: 'Bradley Tile was juggling five different marketing vendors - one for web design, another for SEO, a third for PPC, etc. The disjointed approach resulted in inconsistent messaging, wasted budget, and no one taking ownership of overall results.',
    solution: 'We consolidated all their marketing under one roof, providing a unified strategy. Our full-service approach included a new website optimized for conversions, local SEO to dominate "tile installer near me" searches, PPC campaigns for immediate leads, content marketing showcasing their craftsmanship, and social media management. Everything working together toward one goal: filling their pipeline.',
    results: [
      {
        metric: 'Booking Rate',
        value: '+67%',
        description: 'Increased project bookings year-over-year'
      },
      {
        metric: 'New Crews Hired',
        value: '3',
        description: 'Had to expand team to handle demand'
      },
      {
        metric: 'Marketing ROI',
        value: '4.2x',
        description: 'Across all channels combined'
      },
      {
        metric: 'Website Traffic',
        value: '+423%',
        description: 'Growth in qualified organic traffic'
      }
    ],
    services: ['SEO', 'PPC', 'Web Design', 'Content Creation', 'Branding', 'SEM'],
    heroImage: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "From website design to content creation to Google Ads, Expand handles it all. Our booking rate is up 67% and we've hired 3 new crews to keep up with demand!",
      author: "Tom Bradley",
      position: "Founder, Bradley Tile & Flooring"
    }
  },
  {
    id: '5',
    slug: 'chen-construction',
    title: 'Chen Construction: SEO Domination in 5 Months',
    clientName: 'Chen Construction & Remodeling',
    industry: 'General Contracting',
    year: '2024',
    description: 'Rapid SEO growth strategy that took Chen Construction from page 3 to #1 rankings in record time.',
    challenge: 'Chen Construction was virtually invisible online. Despite 15 years of quality work, they were buried on page 3 of Google for their key services. They relied entirely on referrals and wanted to build a scalable lead generation engine.',
    solution: 'We implemented an aggressive SEO campaign focused on local dominance. This included comprehensive on-page optimization, Google Business Profile mastery with daily posts and review generation, local citation building across 75+ directories, content marketing targeting "general contractor + [service area]" keywords, and strategic link building from local news sites and industry associations.',
    results: [
      {
        metric: 'Ranking Achievement',
        value: '#1',
        description: 'For "general contractor near me" in 5 months'
      },
      {
        metric: 'Monthly Leads',
        value: '95+',
        description: 'Increased from 12 to 95+ qualified leads monthly'
      },
      {
        metric: 'Organic Traffic',
        value: '+853%',
        description: 'Growth in website visitors from search'
      },
      {
        metric: 'Review Rating',
        value: '4.9',
        description: 'Stars on Google with 127 reviews'
      }
    ],
    services: ['SEO', 'Content Creation', 'Web Design', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "Expand's SEO strategy got us ranking #1 for 'general contractor near me' in just 5 months. We went from 12 leads per month to 95+. They understand the remodeling business!",
      author: "Sarah Chen",
      position: "CEO, Chen Construction & Remodeling"
    }
  },
  {
    id: '6',
    slug: 'premium-plumbing',
    title: 'Premium Plumbing: Website Redesign That Converts',
    clientName: 'Premium Plumbing Services',
    industry: 'Plumbing Services',
    year: '2024',
    description: 'Modern website redesign transformed their online presence into a 24/7 lead generation machine.',
    challenge: 'Premium Plumbing had an outdated website built in 2012 that looked unprofessional, loaded slowly, and had a terrible mobile experience. Visitors were bouncing within seconds, and the site generated zero leads despite decent traffic from their established brand.',
    solution: 'We designed and built a modern, conversion-optimized website from scratch. Key features included mobile-first responsive design, prominent click-to-call buttons, service area pages optimized for local SEO, trust signals (licenses, insurance, reviews), before/after project galleries, online booking integration, and fast 1.8-second load times.',
    results: [
      {
        metric: 'Conversion Rate',
        value: '8.7%',
        description: 'Visitors to qualified leads (was 0.8%)'
      },
      {
        metric: 'Bounce Rate',
        value: '-71%',
        description: 'Reduced from 84% to 24%'
      },
      {
        metric: 'Monthly Leads',
        value: '143',
        description: 'Generated from website forms and calls'
      },
      {
        metric: 'Page Speed',
        value: '1.8s',
        description: 'Average load time (was 9.2s)'
      }
    ],
    services: ['Web Design', 'SEO', 'Content Creation', 'AI Consultancy'],
    heroImage: 'https://images.pexels.com/photos/8961178/pexels-photo-8961178.jpeg?auto=compress&cs=tinysrgb&w=1200',
    images: [
      'https://images.pexels.com/photos/8961320/pexels-photo-8961320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6256004/pexels-photo-6256004.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8961305/pexels-photo-8961305.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    testimonial: {
      quote: "Our new website from Expand is a game-changer. It actually converts visitors into calls and booked jobs. We're generating 143 leads per month now, compared to basically zero before.",
      author: "Michael Torres",
      position: "Owner, Premium Plumbing Services"
    }
  }
];
