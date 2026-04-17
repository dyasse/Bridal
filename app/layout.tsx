import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pearl Cloud Clutch Masterclass | dyasse shop',
  description: 'Master architectural bead weaving. Build your own luxury Pearl Cloud Clutch with dyasse shop.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
