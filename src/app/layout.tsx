import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'

const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Website Bank| React & Next  ',
  description: 'Follow me for more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
