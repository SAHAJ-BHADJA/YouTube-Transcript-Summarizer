import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'
// import "tailwind-scrollbar/dist/tailwind-scrollbar.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube Transcript Summarizer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Toaster /></body>
    </html>
  )
}
