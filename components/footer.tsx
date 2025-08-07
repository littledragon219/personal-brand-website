import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-teal-500/30 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-teal-400">曾德荣</h3>
            <p className="text-gray-400 text-sm">
              物理世界与数字智能的连接者
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-teal-400">导航</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-gray-400 hover:text-teal-400 transition-colors">关于我</Link>
              <Link href="/projects" className="block text-gray-400 hover:text-teal-400 transition-colors">项目集</Link>
              <Link href="/explorations" className="block text-gray-400 hover:text-teal-400 transition-colors">我的探索</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-teal-400 transition-colors">联系我</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-teal-400">专业领域</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>具身智能</p>
              <p>AI产品设计</p>
              <p>机器人技术</p>
              <p>智能制造</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-teal-400">联系方式</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>邮箱: contact@example.com</p>
              <p>微信: available upon request</p>
              <p>位置: 西安, 中国</p>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-500/30 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 曾德荣. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
