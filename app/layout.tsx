import './globals.css'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Diwali Wish Generator',
  description: 'Create personalized Diwali wishes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-9WSZNQ8BMZ" />
    </html>
  )
} 