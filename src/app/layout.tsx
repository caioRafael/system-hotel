import { Hotel } from 'lucide-react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} w-screen min-h-screen flex flex-col`}>
        <header className='flex flex-row items-center justify-between px-5 h-14 border-b border-border bg-background'>
          <h1 className='flex flex-row gap-2 '><Hotel/> HotelManeger</h1>

          <div>
            <Avatar>
              <AvatarImage src=''/>
              <AvatarFallback>CR</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <h1>ola mundo</h1>
        {children}
      </body>
    </html>
  )
}
