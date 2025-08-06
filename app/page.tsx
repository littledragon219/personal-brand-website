"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Play, ExternalLink, Zap, Cpu, Brain } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 科技感背景粒子 */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 transition-colors">
                  <Cpu className="w-3 h-3 mr-1" />
                  物理世界与数字智能的连接者
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  将复杂的机器人技术，转化为
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"> 智能产品</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  我致力于在物理世界和数字智能之间架起桥梁，将复杂的机器人技术，转化为流畅、高效、对人友好的具身智能产品。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" asChild>
                  <Link href="/projects">
                    <Brain className="mr-2 h-4 w-4" />
                    深入了解我的项目 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" /> 下载简历
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="hover:bg-blue-100 transition-colors">
                    <Zap className="w-3 h-3 mr-1" />
                    探索者
                  </Badge>
                  <span className="text-gray-400">|</span>
                  <Badge variant="secondary" className="hover:bg-green-100 transition-colors">实干家</Badge>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl animate-pulse" />
                <Image
                  src="/placeholder.svg?height=400&width=600&text=智能无损抓取机器人演示"
                  alt="智能无损抓取机器人演示"
                  width={600}
                  height={400}
                  className="rounded-lg w-full relative z-10"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200">
                    <Play className="mr-2 h-5 w-5" /> 观看演示
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我是谁</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              你好，我是<strong className="text-blue-600">曾德荣</strong>。一名来自马来西亚，现就读西安交通大学大三本科机械工程（智能制造），也是一位热情的AI产品探索者。
              我着迷于将前沿AI技术融入物理实体，创造真正有用的智能工具。从机械故障诊断的深度学习到智能无损抓取机械臂的算法开发，
              我始终在探索"具身智能"的无限可能。
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                { icon: "🔬", title: "探索者", desc: "持续探索AI前沿工具与技术", color: "blue" },
                { icon: "🛠️", title: "实干家", desc: "将想法转化为可行的产品原型", color: "green" },
                { icon: "🌉", title: "连接者", desc: "连接物理世界与数字智能", color: "purple" }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-${item.color}-200 transition-all duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心项目</h2>
              <p className="text-lg text-gray-600">深度案例分析：从概念到实现的完整产品开发过程</p>
            </div>

            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-r from-white to-blue-50">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=智能无损抓取机械臂"
                    alt="智能无损抓取机器人"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900 hover:text-blue-600 transition-colors">
                      智能无损抓取机械臂
                    </CardTitle>
                    <CardDescription className="text-base">
                      "触觉感知-柔性控制-特征迁移"三位一体系统
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600">
                      研发"触觉感知-柔性控制-特征迁移"三位一体系统，配合树莓派主控与舵机协同，
                      开发动态闭环力控算法实时感知物体，以<strong className="text-green-600 animate-pulse">0.01N的力控分辨率</strong>实现精准控制达到智能无损抓取。
                      在2025年大学生创新大赛西交大校赛中荣获银奖。
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {["力控算法", "原型网络", "零样本推理", "树莓派", "领域泛化", "Python"].map((tag, index) => (
                        <Badge key={index} variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200" asChild>
                    <Link href="/projects/intelligent-grasping-robot">
                      查看完整案例分析 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* My Thoughts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">我的探索与思考</h2>
              <p className="text-lg text-gray-600">持续学习，深度思考，分享见解</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  badge: "AI工具评测",
                  date: "2024.01.15",
                  title: "GPT-4o在机器人任务规划中的应用",
                  desc: "深度评测GPT-4o在复杂机器人任务规划中的表现，探讨大语言模型如何赋能具身智能...",
                  link: "/explorations/gpt4o-robot-planning"
                },
                {
                  badge: "产品思考",
                  date: "2024.01.08",
                  title: "具身智能产品设计的三个原则",
                  desc: "基于我的项目经验，总结出具身智能产品设计中最重要的三个原则：直观性、可靠性、适应性...",
                  link: "/explorations/embodied-ai-design-principles"
                },
                {
                  badge: "行业分析",
                  date: "2024.01.01",
                  title: "拆解特斯拉Optimus的产品迭代路径",
                  desc: "从产品经理的角度分析特斯拉人形机器人的设计理念、技术选型和商业化策略...",
                  link: "/explorations/tesla-optimus-analysis"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="group-hover:bg-blue-100 transition-colors">{item.badge}</Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {item.desc}
                    </CardDescription>
                    <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 transition-colors" asChild>
                      <Link href={item.link}>
                        阅读全文 <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-2 hover:bg-blue-50 hover:border-blue-300 transform hover:scale-105 transition-all duration-200" asChild>
                <Link href="/explorations">
                  阅读更多思考 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              让我们一起探索具身智能的未来
            </h2>
            <p className="text-xl text-blue-100">
              如果你对具身智能、AI产品或机器人技术感兴趣，期待与你交流。
              如果有合适的工作或实习机会，也欢迎随时联系我。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg" asChild>
                <Link href="/contact">
                  联系我 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200" asChild>
                <Link href="/about">
                  了解更多关于我
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
