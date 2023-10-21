import ToastProvider from '@/providers/toast-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'codeVeegan Portfolio',
  description: 'codeVeegan displayed projects',
  icons: '/assets/logo.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <div className='bg-black text-white h-full max-h-full w-full'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
