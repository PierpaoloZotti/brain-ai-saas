import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI copilot',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {children}</body>
      </html>
    </ClerkProvider>
  )
}
