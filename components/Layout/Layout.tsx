import React from 'react'
import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

export const Layout = ({ children, title }: LayoutProps) => (
  <div className="min-w-full min-h-full pt-20 pb-40 bg-black text-white">
    <Header title={title} />
    <h1 className="text-5xl font-rubik mb-10 text-center">Artist DB</h1>
    <main className="container mx-auto pt-10">{children}</main>
  </div>
)
