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
  openGraph: {
    type: 'website',
    siteName: 'CyberCats Robotics - Team 2872',
    title: 'CyberCats Robotics - FIRST Team 2872',
    description: 'Elite FIRST Robotics Competition team from Old Westbury, NY. Engineering excellence in competitive robotics since 2009. Regional Champions 2022.',
    url: 'https://cybercatsrobotics.com',
    locale: 'en_US',
    images: [
      {
        url: '/robot/IMG_4367.jpeg',
        width: 1200,
        height: 800,
        alt: 'CyberCats Team 2872 Competition Robot - FIRST Robotics Competition',
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
        url: '/robot/IMG_4367.jpeg',
        alt: 'CyberCats Team 2872 Competition Robot',
        width: 1200,
        height: 800,
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
