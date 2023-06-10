import './globals.css'

import { NavBar } from './components/layout/navBar'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import { Footer } from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cabeças bar',
  description: 'Bar e restaurante cabeças bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br"
      className="text-white"
    >
      <body className={inter.className}>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
