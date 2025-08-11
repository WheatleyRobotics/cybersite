export interface Sponsor {
  name: string
  tier: 'diamond' | 'gold' | 'silver' | 'bronze'
  website: string
  contribution: string
  description: string
  since: number
  sponsorType: 'Corporate Sponsor' | 'Business Sponsor' | 'Family Sponsor' | 'Partner'
}

export const sponsors: Sponsor[] = [
  {
    name: 'Gene Haas Foundation',
    tier: 'diamond',
    website: 'https://www.haascnc.com/index.html#gsc.tab=0',
    contribution: 'Engineering Mentorship & Funding',
    description: 'Provides professional engineers as mentors, funding for competition travel, and access to aerospace industry expertise and best practices.',
    since: 2022,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'ORICS Industries',
    tier: 'diamond',
    website: 'https://oricsindustries.com',
    contribution: 'Manufacturing & Materials',
    description: 'Supplies precision-machined components, raw materials, and access to advanced manufacturing equipment including CNC machines.',
    since: 2020,
    sponsorType: 'Corporate Sponsor'
  },
  {
    name: 'The Wheatley School',
    tier: 'gold',
    website: 'https://www.ewsdonline.org',
    contribution: 'Facilities & Transportation',
    description: 'Provides workshop space, tools, meeting rooms, and transportation to competitions. Home base for team operations and storage.',
    since: 2009,
    sponsorType: 'Partner'
  },
  {
    name: 'Team Parent Network',
    tier: 'bronze',
    website: '#',
    contribution: 'Fundraising & Logistics',
    description: 'Parent volunteers organize fundraisers, coordinate meals during build season, and provide transportation support for competitions.',
    since: 2009,
    sponsorType: 'Family Sponsor'
  }
]

export const tierConfig = {
  diamond: {
    color: 'from-teal-400 to-teal-300',
    textColor: 'text-teal-400',
    borderColor: 'border-teal-400/40',
    bgColor: 'bg-teal-400/10',
    title: 'Diamond Partners'
  },
  gold: {
    color: 'from-yellow-400 to-yellow-500',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-400/40',
    bgColor: 'bg-yellow-400/10',
    title: 'Gold Partners'
  },
  silver: {
    color: 'from-gray-400 to-gray-500',
    textColor: 'text-gray-400',
    borderColor: 'border-gray-400/40',
    bgColor: 'bg-gray-400/10',
    title: 'Silver Partners'
  },
  bronze: {
    color: 'from-orange-600 to-orange-700',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-600/40',
    bgColor: 'bg-orange-600/10',
    title: 'Bronze Partners'
  }
}

export const tierColors = {
  diamond: 'text-teal-400 border-teal-400/20 bg-teal-400/5',
  gold: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  silver: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
  bronze: 'text-orange-500 border-orange-500/20 bg-orange-500/5'
}

export const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
  if (!acc[sponsor.tier]) acc[sponsor.tier] = []
  acc[sponsor.tier].push(sponsor)
  return acc
}, {} as Record<string, Sponsor[]>)