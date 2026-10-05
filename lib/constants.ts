export const siteName = 'Paws Pannai Retreat';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/organic-farm', label: 'Organic Farm' },
  { href: '/pet-friendly', label: 'Pet-Friendly' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/contact', label: 'Contact' },
];

export const headerLinks = [
  { href: '/experiences', label: 'Play Areas' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];



// Main contact number — phone + WhatsApp enquiries (country code, no +)
export const contactNumber = '917795207779';
export const contactNumberDisplay = '+91 77952 07779';

// Invite page RSVPs only (country code, no +)
export const rsvpWhatsappNumber = '919717334639';

export const whatsappLink = (message: string, number: string = contactNumber) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

// Introductory pricing — all rates are per hour
export const dogPricing = [
  {
    id: 'park-access',
    name: 'Park Access',
    price: 500,
    unit: 'per dog / hour',
    description: 'Shared access to the full pet park alongside other dogs and their families.',
    highlight: false,
  },
  {
    id: 'private-park',
    name: 'Private Park',
    price: 1000,
    unit: 'per dog / hour',
    description: 'Block the entire pet park for your pack — no other dogs, just yours.',
    highlight: true,
  },
];

export const visitorPricing = [
  { id: 'under-5', label: 'Children below 5 years', price: 0 },
  { id: '5-12', label: 'Children 5 – 12 years', price: 300 },
  { id: 'above-12', label: 'Above 12 years', price: 500 },
];
