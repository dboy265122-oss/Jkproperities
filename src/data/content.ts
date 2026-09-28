export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  possession: string;
  type: string;
  bhk: string;
  image: string;
  tag: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: 'The Imperial Residences',
    location: 'Worli, Mumbai',
    price: '₹12.5 Cr',
    bedrooms: 4,
    bathrooms: 5,
    area: '3,200 sq.ft',
    possession: 'Ready to Move',
    type: 'Apartment',
    bhk: '4 BHK',
    image: 'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Premium',
  },
  {
    id: 2,
    name: 'Skyline Towers',
    location: 'Bandra West, Mumbai',
    price: '₹8.75 Cr',
    bedrooms: 3,
    bathrooms: 4,
    area: '2,450 sq.ft',
    possession: 'Ready to Move',
    type: 'Apartment',
    bhk: '3 BHK',
    image: 'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Featured',
  },
  {
    id: 3,
    name: 'The Garden Estates',
    location: 'Powai, Mumbai',
    price: '₹6.2 Cr',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,100 sq.ft',
    possession: 'Dec 2025',
    type: 'Apartment',
    bhk: '3 BHK',
    image: 'https://images.pexels.com/photos/31656168/pexels-photo-31656168.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'New Launch',
  },
  {
    id: 4,
    name: 'Palms Villa Estate',
    location: 'Lonavala, Maharashtra',
    price: '₹15.0 Cr',
    bedrooms: 5,
    bathrooms: 6,
    area: '5,500 sq.ft',
    possession: 'Ready to Move',
    type: 'Villa',
    bhk: '5 BHK',
    image: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Luxury',
  },
  {
    id: 5,
    name: 'Ocean View Penthouse',
    location: 'Malabar Hill, Mumbai',
    price: '₹22.0 Cr',
    bedrooms: 4,
    bathrooms: 5,
    area: '4,000 sq.ft',
    possession: 'Ready to Move',
    type: 'Penthouse',
    bhk: '4 BHK',
    image: 'https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Exclusive',
  },
  {
    id: 6,
    name: 'The White House',
    location: 'Juhu, Mumbai',
    price: '₹9.5 Cr',
    bedrooms: 4,
    bathrooms: 4,
    area: '2,800 sq.ft',
    possession: 'Mar 2026',
    type: 'Apartment',
    bhk: '4 BHK',
    image: 'https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tag: 'Premium',
  },
];

export interface Project {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Aurelia Heights',
    category: 'Luxury Apartments',
    location: 'Lower Parel, Mumbai',
    description: 'A collection of 3 & 4 BHK sky residences with panoramic city views, private decks, and world-class amenities.',
    image: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    name: 'The Hillside Villas',
    category: 'Private Villas',
    location: 'Khandala, Maharashtra',
    description: 'Sprawling 5 BHK villas nestled in nature with infinity pools, home theatres, and private gardens.',
    image: 'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    name: 'Meridian Business Park',
    category: 'Commercial',
    location: 'BKC, Mumbai',
    description: 'Grade-A office spaces designed for global enterprises with smart building systems and premium lobbies.',
    image: 'https://images.pexels.com/photos/19335810/pexels-photo-19335810.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    name: 'The Continental',
    category: 'Luxury Apartments',
    location: 'Prabhadevi, Mumbai',
    description: 'Iconic twin towers offering limited edition sea-facing residences with hotel-style concierge services.',
    image: 'https://images.pexels.com/photos/16048055/pexels-photo-16048055.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Investor, Mumbai',
    image: 'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'Jai and his team helped me find the perfect investment property in Worli. Their market knowledge and transparency saved me from a bad deal. I trust JK Properties completely for all my real estate decisions.',
  },
  {
    id: 2,
    name: 'Priya & Aditya Mehta',
    role: 'Homebuyers, Bandra',
    image: 'https://images.pexels.com/photos/38624436/pexels-photo-38624436.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'From the first site visit to the final documentation, JK Properties made our home-buying journey effortless. They understood exactly what we wanted and found us a home that exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Vikram Agarwal',
    role: 'Business Owner, Pune',
    image: 'https://images.pexels.com/photos/10657877/pexels-photo-10657877.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'I was looking for a commercial space in BKC and JK Properties delivered beyond what I imagined. Their negotiation skills alone saved me nearly 8% on the purchase price. Highly recommended.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'NRI Investor, Dubai',
    image: 'https://images.pexels.com/photos/3890576/pexels-photo-3890576.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'Being an NRI, I was worried about managing property purchases in India. Jai handled everything remotely — site visits, documentation, legal checks. I never felt more confident about investing back home.',
  },
  {
    id: 5,
    name: 'Anil Kapoor',
    role: 'First-time Buyer, Powai',
    image: 'https://images.pexels.com/photos/12311567/pexels-photo-12311567.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    quote: 'As a first-time homebuyer, I had hundreds of questions. Jai patiently answered every single one. No pressure, no pushy sales — just honest guidance. That is rare in real estate and I value it deeply.',
  },
];

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  { icon: 'Home', title: 'Buying Property', description: 'Curated listings matched to your budget, lifestyle, and long-term goals.' },
  { icon: 'TrendingUp', title: 'Selling Property', description: 'Strategic pricing and marketing to get you the best value, fast.' },
  { icon: 'LineChart', title: 'Investment Advice', description: 'Data-driven insights on high-growth corridors and emerging micro-markets.' },
  { icon: 'Landmark', title: 'Home Loan Assistance', description: 'End-to-end support with banks, paperwork, and the best interest rates.' },
  { icon: 'MapPin', title: 'Property Visits', description: 'Accompanied site visits with detailed inspection reports and honest feedback.' },
  { icon: 'FileText', title: 'Documentation Support', description: 'Complete legal and documentation assistance for a stress-free transaction.' },
  { icon: 'Building2', title: 'Commercial Spaces', description: 'Grade-A office and retail spaces tailored to your business requirements.' },
  { icon: 'Crown', title: 'Luxury Homes', description: 'Exclusive access to premium and ultra-luxury residences across top cities.' },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 100, suffix: '+', label: 'Investment Deals' },
  { value: 10, suffix: '+', label: 'Cities Served' },
];

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  { icon: 'Award', title: 'Experience', description: 'Years of deep market expertise across Mumbai and Maharashtra.' },
  { icon: 'BadgeCheck', title: 'Verified Projects', description: 'Every listing is legally verified and physically inspected.' },
  { icon: 'HandshakeIcon', title: 'Trusted Consultation', description: 'Honest, no-pressure guidance focused on your best outcome.' },
  { icon: 'Eye', title: 'Transparent Process', description: 'Full visibility into pricing, legal status, and deal terms.' },
  { icon: 'Tags', title: 'Best Deals', description: 'Strong developer relationships that unlock exclusive pricing.' },
  { icon: 'TrendingUp', title: 'Investment Guidance', description: 'ROI-focused recommendations backed by real market data.' },
];

export const heroImages = [
  'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sky Residences Tour' },
  { src: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Interior Walkthrough' },
  { src: 'https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Penthouse Reveal' },
  { src: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Villa Estate Tour' },
  { src: 'https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Living Spaces' },
  { src: 'https://images.pexels.com/photos/39829283/pexels-photo-39829283.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Designer Interiors' },
];

export const instagramPosts = [
  { src: 'https://images.pexels.com/photos/2771935/pexels-photo-2771935.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '2.4k' },
  { src: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '1.8k' },
  { src: 'https://images.pexels.com/photos/7031594/pexels-photo-7031594.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '3.1k' },
  { src: 'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '2.7k' },
  { src: 'https://images.pexels.com/photos/19335810/pexels-photo-19335810.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '1.5k' },
  { src: 'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=600', likes: '3.8k' },
];
