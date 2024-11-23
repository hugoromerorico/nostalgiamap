import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'inmy10s - Nostalgia a la española',
  description: 'Explora las tendencias de tu infancia en España',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
