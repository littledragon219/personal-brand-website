import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '张明 - 物理世界与数字智能的连接者',
  description: '西安交通大学机械工程专业，专注具身智能AI产品开发，致力于将复杂的机器人技术转化为智能产品',
  keywords: '具身智能,AI产品经理,机器人技术,智能制造,产品设计',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
