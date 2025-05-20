import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'CodeZeni - Modern Software Development Platform',
  description: 'CodeZeni is a modern software development platform built with Next.js and Tailwind CSS, designed to help developers and teams build better software faster.',
  keywords: [
    'software development',
    'coding platform',
    'developer tools',
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
  ],
  authors: [{ name: 'CodeZeni Team' }],
  creator: 'CodeZeni',
  publisher: 'CodeZeni',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CodeZeni - Modern Software Development Platform',
    description: 'Build better software faster with CodeZeni',
    url: 'https://codezeni.com',
    siteName: 'CodeZeni',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeZeni - Modern Software Development Platform',
    description: 'Build better software faster with CodeZeni',
    creator: '@codezeni',
    site: '@codezeni',
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