import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'CodeZeni - IT Services & Solutions',
  description: 'CodeZeni provides expert IT services including Staff Augmentation, Web Development, Mobile App Development, UI/UX Design, and MVP Development. Transform your business with our cutting-edge solutions.',
  keywords: 'IT services, staff augmentation, web development, mobile app development, UI/UX Design, MVP development, software development, IT solutions',
  authors: [{ name: 'CodeZeni' }],
  creator: 'CodeZeni',
  publisher: 'CodeZeni',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codezeni.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CodeZeni - IT Services & Solutions',
    description: 'Transform your business with CodeZeni\'s expert IT services. We offer Staff Augmentation, Web Development, Mobile App Development, UI/UX Design, and MVP Development solutions.',
    url: 'https://codezeni.com',
    siteName: 'CodeZeni',
    images: [
      {
        url: '/images/logo/logo.svg',
        width: 140,
        height: 30,
        alt: 'CodeZeni Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeZeni - IT Services & Solutions',
    description: 'Transform your business with CodeZeni\'s expert IT services. We offer Staff Augmentation, Web Development, Mobile App Development, UI/UX Design, and MVP Development solutions.',
    images: ['/images/logo/logo.svg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default metadata; 