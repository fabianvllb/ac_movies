import { Inter } from 'next/font/google'
import './globals.css'
import style from './page.module.css'
import Header from './ui/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies',
  description: 'Made by group 04',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
