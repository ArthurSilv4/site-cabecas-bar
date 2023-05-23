import './globals.css'

import { NavBar } from './components/layout/navBar'

import { Inter } from 'next/font/google'

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
      className="scroll-smooth text-white"
    >
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
