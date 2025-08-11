import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | CyberCats Robotics',
    default: 'CyberCats Robotics - FIRST Team 2872'
  },
  description: "CyberCats Robotics Team 2872 from Old Westbury, NY. Elite FIRST Robotics Competition team specializing in autonomous systems, competitive strategy, and engineering excellence since 2009.",
  keywords: [
    "FIRST Robotics",
    "FRC",
    "Team 2872", 
    "CyberCats",
    "Old Westbury",
    "New York",
    "Robotics Competition",
    "STEM Education",
    "Engineering",
    "Autonomous Systems",
    "Swerve Drive",
    "Autonomous Navigation"
  ],
  authors: [{ name: "CyberCats Robotics Team 2872" }],
  creator: "CyberCats Robotics Team 2872",
  publisher: "CyberCats Robotics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cybercatsrobotics.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    siteName: 'CyberCats Robotics - Team 2872',
    title: 'CyberCats Robotics - FIRST Team 2872',
    description: 'Elite FIRST Robotics Competition team from Old Westbury, NY. Engineering excellence in competitive robotics since 2009. Regional Champions 2022.',
    url: 'https://cybercatsrobotics.com',
    locale: 'en_US',
    images: [
      {
        url: '/team/team_1.JPG',
        width: 1200,
        height: 630,
        alt: 'CyberCats Robotics Team 2872 - FIRST Robotics Competition',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CyberCats2872',
    creator: '@CyberCats2872',
    title: 'CyberCats Robotics - FIRST Team 2872',
    description: 'Elite FIRST Robotics Competition team from Old Westbury, NY. Regional Champions 2022. Engineering excellence since 2009.',
    images: [
      {
        url: '/team/team_1.JPG',
        alt: 'CyberCats Robotics Team 2872',
        width: 1200,
        height: 630,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
