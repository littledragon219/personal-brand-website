"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于我' },
    { href: '/projects', label: '项目集' },
    { href: '/explorations', label: '我的探索' },
    { href: '/contact', label: '联系我' },
  ]

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-teal-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-teal-400 hover:text-teal-300 transition-colors">
            曾德荣
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
              <Link href="/contact">开始对话</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-teal-400 hover:text-teal-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-teal-500/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-fit bg-teal-500 hover:bg-teal-600 text-white" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  开始对话
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
