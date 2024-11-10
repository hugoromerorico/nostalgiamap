import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'inmy10s - Nostalgia Trends',
  description: 'Explore nostalgic trends from your childhood years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen">
        {children}
      </body>
    </html>
  )
}
