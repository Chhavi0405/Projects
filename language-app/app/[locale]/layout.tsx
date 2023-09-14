import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,params
}: {
  children: React.ReactNode
  params:{locale:string}
}) {
  const locale = useLocale()

  if(params.locale !== locale){
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar/>
        <br/>
        {children}
        <br/>
        <Footer/>
        </body>
    </html>
  )
}
