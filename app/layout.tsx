import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdul-afeez Hassan - DevOps Engineer & Cloud Solutions Architect',
  description: 'Experienced DevOps engineer and cloud solutions architect specializing in AWS, Terraform, Kubernetes, Docker, and CI/CD pipelines. Based in London, UK.',
  keywords: [
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'AWS',
    'Terraform',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'Infrastructure as Code',
    'London',
    'Abdul-afeez Hassan'
  ],
  authors: [{ name: 'Abdul-afeez Hassan' }],
  creator: 'Abdul-afeez Hassan',
  publisher: 'Abdul-afeez Hassan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://abdul-afeez-hassan.netlify.app',
    title: 'Abdul-afeez Hassan - DevOps Engineer & Cloud Solutions Architect',
    description: 'Experienced DevOps engineer and cloud solutions architect specializing in AWS, Terraform, Kubernetes, Docker, and CI/CD pipelines.',
    siteName: 'Abdul-afeez Hassan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul-afeez Hassan - DevOps Engineer & Cloud Solutions Architect',
    description: 'Experienced DevOps engineer and cloud solutions architect specializing in AWS, Terraform, Kubernetes, Docker, and CI/CD pipelines.',
    creator: '@yinkxdevops',
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-hero-gradient">
          {children}
        </div>
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdul-afeez Hassan",
              "jobTitle": "DevOps Engineer & Cloud Solutions Architect",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "email": "yinkxdevops@gmail.com",
              "telephone": "+447760944935",
              "url": "https://abdul-afeez-hassan.netlify.app",
              "sameAs": [
                "https://linkedin.com/in/abdul-afeez-hassan-327882108"
              ],
              "knowsAbout": [
                "AWS",
                "DevOps",
                "Terraform",
                "Kubernetes",
                "Docker",
                "CI/CD",
                "Infrastructure as Code",
                "Cloud Computing"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}