import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Home",
  description: "Abdul's Portfolio",
}

export default function RootLayout({ children }) {
  console.log(children);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
