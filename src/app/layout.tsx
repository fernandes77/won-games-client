import { Children } from '@/types/children'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'The best game store in the world!'
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className="h-screen bg-blue-dark">
        <div className="max-w-container mx-auto px-half-gutter">{children}</div>
      </body>
    </html>
  )
}
