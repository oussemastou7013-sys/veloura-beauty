import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  variable: '--font-heading',
  subsets: ['latin']
})

const lato = Lato({
  variable: '--font-body',
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Veloura Beauty Lounge | Salon de Beauté Premium',
  description: 'Veloura Beauty Lounge - Salon de beauté de luxe à Ariana. Extensions de cils, manucure, maquillage professionnel et bien-être. Expérience beauté haut de gamme.',
  generator: 'v0.app',
  keywords: 'salon beauté, extensions cils, manucure, maquillage, beauté, Ariana, luxe',
  openGraph: {
    title: 'Veloura Beauty Lounge',
    description: 'Expérience beauté de luxe',
    type: 'website',
    locale: 'fr_FR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7b1fa2' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lato.variable}`}>
      <body className="bg-white text-dark-text antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
