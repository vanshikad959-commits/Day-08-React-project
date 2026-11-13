// Central content store for the whole SPA.
// Every section receives its data from here through props,
// so content can change without touching component logic.

import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiPenTool,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiLayers,
  FiUsers,
  FiClock,
  FiHeadphones,
  FiDatabase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from 'react-icons/fi';

export const company = {
  name: 'Skyloom Labs',
  tagline: 'Digital product studio for ambitious startups',
  email: 'hello@skyloomlabs.dev',
  phone: '+91 98765 43210',
  address: 'Koramangala, Bengaluru, India',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'features', label: 'Features' },
  { id: 'team', label: 'Team' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Now migrating static sites to React',
  titleStart: 'We build',
  rotatingWords: ['web apps', 'mobile apps', 'cloud platforms', 'design systems'],
  titleEnd: 'that scale with you.',
  subtitle:
    'Skyloom Labs turns slow, static websites into fast, maintainable single page applications built from reusable components.',
  primaryCta: { label: 'Explore Services', target: 'services' },
  secondaryCta: { label: 'Talk to Us', target: 'contact' },
};

export const about = {
  title: 'Who we are',
  description:
    'Founded in 2021, Skyloom Labs is a team of engineers and designers who help startups move from idea to production. We favour clean architecture, reusable components and honest timelines.',
  points: [
    'Component-driven development with React',
    'Mobile-first, accessible and responsive UI',
    'Agile sprints with weekly demos',
    'Long-term maintenance and support',
  ],
  highlight: { value: '5+', label: 'Years building products' },
};

export const stats = [
  { id: 1, value: 120, suffix: '+', label: 'Projects Delivered' },
  { id: 2, value: 85, suffix: '+', label: 'Happy Clients' },
  { id: 3, value: 24, suffix: '', label: 'Team Members' },
  { id: 4, value: 99, suffix: '%', label: 'Client Retention' },
];

export const serviceCategories = ['All', 'Development', 'Design', 'Cloud'];

export const services = [
  {
    id: 1,
    icon: FiCode,
    category: 'Development',
    title: 'Web Development',
    summary: 'Fast, SEO-friendly React applications built from reusable components.',
    details: [
      'React + Vite single page applications',
      'REST / GraphQL API integration',
      'Performance and Lighthouse optimisation',
    ],
    price: 'From ₹45,000',
    popular: true,
  },
  {
    id: 2,
    icon: FiSmartphone,
    category: 'Development',
    title: 'Mobile Apps',
    summary: 'Cross-platform Android and iOS apps from a single codebase.',
    details: [
      'React Native development',
      'Push notifications and offline mode',
      'Play Store and App Store release',
    ],
    price: 'From ₹80,000',
    popular: false,
  },
  {
    id: 3,
    icon: FiPenTool,
    category: 'Design',
    title: 'UI / UX Design',
    summary: 'Research-driven interfaces that are simple, accessible and on-brand.',
    details: [
      'Wireframes and interactive prototypes',
      'Design systems and component libraries',
      'Usability testing with real users',
    ],
    price: 'From ₹30,000',
    popular: false,
  },
  {
    id: 4,
    icon: FiCloud,
    category: 'Cloud',
    title: 'Cloud & DevOps',
    summary: 'Reliable deployments, CI/CD pipelines and auto-scaling infrastructure.',
    details: [
      'Docker and container orchestration',
      'CI/CD with GitHub Actions',
      'Monitoring, logging and alerts',
    ],
    price: 'From ₹35,000',
    popular: true,
  },
  {
    id: 5,
    icon: FiDatabase,
    category: 'Cloud',
    title: 'Backend & APIs',
    summary: 'Secure Node.js services and databases designed for growth.',
    details: [
      'Node.js / Express REST APIs',
      'MongoDB and PostgreSQL data modelling',
      'Authentication and role-based access',
    ],
    price: 'From ₹50,000',
    popular: false,
  },
  {
    id: 6,
    icon: FiTrendingUp,
    category: 'Design',
    title: 'Brand & Growth',
    summary: 'Landing pages, analytics and conversion-focused experiments.',
    details: [
      'High-converting landing pages',
      'Analytics and funnel tracking',
      'A/B testing and growth reports',
    ],
    price: 'From ₹25,000',
    popular: false,
  },
];

export const features = [
  {
    id: 1,
    icon: FiZap,
    title: 'Lightning Fast',
    text: 'Virtual DOM rendering and code splitting keep every page snappy.',
  },
  {
    id: 2,
    icon: FiLayers,
    title: 'Reusable Components',
    text: 'One card component, many sections — less code, fewer bugs.',
  },
  {
    id: 3,
    icon: FiShield,
    title: 'Secure by Default',
    text: 'Best-practice security reviews on every release we ship.',
  },
  {
    id: 4,
    icon: FiUsers,
    title: 'Dedicated Team',
    text: 'A project manager, designer and developers who know your product.',
  },
  {
    id: 5,
    icon: FiClock,
    title: 'On-time Delivery',
    text: 'Two-week sprints with clear milestones and weekly demos.',
  },
  {
    id: 6,
    icon: FiHeadphones,
    title: '24/7 Support',
    text: 'Post-launch maintenance and support whenever you need it.',
  },
];

export const team = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Founder & CEO',
    initials: 'AM',
    color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    bio: 'Aarav has 10 years of experience leading product teams and has helped over 40 startups launch their first product.',
    skills: ['Product Strategy', 'Leadership', 'Fundraising'],
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Lead Frontend Engineer',
    initials: 'PN',
    color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    bio: 'Priya builds component libraries and design systems in React. She cares deeply about accessibility and performance.',
    skills: ['React', 'TypeScript', 'Accessibility'],
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 3,
    name: 'Rohan Iyer',
    role: 'Backend & Cloud Architect',
    initials: 'RI',
    color: 'linear-gradient(135deg, #10b981, #14b8a6)',
    bio: 'Rohan designs scalable APIs and cloud infrastructure, from database schemas to CI/CD pipelines.',
    skills: ['Node.js', 'AWS', 'Docker'],
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 4,
    name: 'Sneha Kapoor',
    role: 'UI / UX Designer',
    initials: 'SK',
    color: 'linear-gradient(135deg, #f43f5e, #f97316)',
    bio: 'Sneha turns user research into clean, friendly interfaces and runs usability tests for every major release.',
    skills: ['Figma', 'User Research', 'Prototyping'],
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
];

export const faqs = [
  {
    id: 1,
    question: 'How long does a typical project take?',
    answer:
      'A marketing website usually takes 2–4 weeks. A full web or mobile application typically takes 8–16 weeks depending on scope.',
  },
  {
    id: 2,
    question: 'Why do you recommend React for our website?',
    answer:
      'React lets us build reusable components, render updates quickly with the virtual DOM, and keep the codebase easy to maintain as your product grows.',
  },
  {
    id: 3,
    question: 'Can you migrate our existing static website?',
    answer:
      'Yes. We audit your current pages, break them into reusable React components and keep your SEO, URLs and content intact.',
  },
  {
    id: 4,
    question: 'Do you offer support after launch?',
    answer:
      'Every project includes 30 days of free support. After that we offer flexible monthly maintenance plans.',
  },
  {
    id: 5,
    question: 'How do payments work?',
    answer:
      'We work in milestones: 30% to start, 40% at the beta release and 30% on final delivery.',
  },
];

export const contactInfo = [
  { id: 1, icon: FiMail, label: 'Email us', value: company.email, href: `mailto:${company.email}` },
  { id: 2, icon: FiPhone, label: 'Call us', value: company.phone, href: 'tel:+919876543210' },
  { id: 3, icon: FiMapPin, label: 'Visit us', value: company.address, href: null },
];

export const socialLinks = [
  { id: 1, icon: FiGithub, label: 'GitHub', href: '#' },
  { id: 2, icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  { id: 3, icon: FiTwitter, label: 'Twitter', href: '#' },
  { id: 4, icon: FiInstagram, label: 'Instagram', href: '#' },
];

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', target: 'about' },
      { label: 'Team', target: 'team' },
      { label: 'FAQ', target: 'faq' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', target: 'services' },
      { label: 'Mobile Apps', target: 'services' },
      { label: 'Cloud & DevOps', target: 'services' },
    ],
  },
];
