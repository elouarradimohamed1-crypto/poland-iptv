import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'IPTV Polska - Otwórz Drzwi do Świata Nieskończonej Rozrywki',
  description: 'Ciesz się dostępem do ponad 55 000 kanałów oraz 90 000 filmów na żądanie. Gwarancja 100% dostępności z darmową zmianą serwera i szybką aktywacją.',
  keywords: 'IPTV Polska, kanały TV, filmy on demand, streaming, 55000 kanałów',
  generator: 'v0.app',
  openGraph: {
    title: 'IPTV Polska - Otwórz Drzwi do Świata Nieskończonej Rozrywki',
    description: 'Ciesz się dostępem do ponad 55 000 kanałów oraz 90 000 filmów na żądanie.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#38bdf8',
  userScalable: true,
  initialScale: 1,
  width: 'device-width',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={geist.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
