import React from 'react'
import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

export const Layout = ({ children, title }: LayoutProps) => (
  <div className="w-screen h-screen bg-black text-white">
    <Header title={title} />
    <h1 className="text-5xl font-rubik pt-10 mb-10 text-center">Artist DB</h1>
    <main className="container mx-auto pt-10">{children}</main>
  </div>
)
