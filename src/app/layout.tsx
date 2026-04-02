import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Clean Energy Local Currency Fund',
  description: 'Providing local currency funding to climate-aligned, sustainable, and inclusive clean energy infrastructure across Nigeria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent)] selection:text-[var(--color-background)] ">
        <NextTopLoader
          color="var(--color-accent-green)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--color-accent-green),0 0 5px var(--color-accent-green)"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
