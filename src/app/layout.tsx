import { Metadata } from 'next';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'Best ATS for Startups',
    'Best ATS for Staffing',
    'ATS',
    'Hiring',
    'Recruitment',
    'Interview',
    'Scheduling',
  ],
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
    // creator: '@th_clarence',
  },
  authors: [
    {
      name: 'Wayne Foster',
      url: 'https://cloud-way.dev',
    },
    {
      name: 'Abhishek De',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
