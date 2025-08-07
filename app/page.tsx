"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Play, ExternalLink, Zap, Cpu, Brain, Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

// 粒子系统组件
function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      connections: number[]
    }> = []
    
    // 创建粒子
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        connections: []
      })
    }
    
    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // 更新和绘制粒子
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        
        // 绘制粒子
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(20, 184, 166, ${particle.opacity})`
        ctx.fill()
        
        // 绘制连接线
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(20, 184, 166, ${0.1 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    />
  )
}

// 浮动元素组件
function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* 大型装饰圆环 */}
      <div className="absolute top-20 right-20 w-96 h-96 border border-teal-500/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-64 h-64 border border-teal-400/30 rounded-full animate-pulse" />
      
      {/* 小型发光点 */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* 网格线条 */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-teal-500/20" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
      {/* 粒子背景系统 */}
      <ParticleSystem />
      
      {/* 浮动装饰元素 */}
      <FloatingElements />
      
      {/* 鼠标跟随光效 */}
      <div 
        className="fixed w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* 个人信息卡片 */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center border border-teal-400/50">
                    <Brain className="w-8 h-8 text-teal-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">曾德荣 / ZENGDERONG</h1>
                    <p className="text-teal-400">具身智能探索者与构建者</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    具身智能的
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 animate-pulse block">
                      实践者与创新者
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    通过严谨的执行力将前沿AI技术变为现实
                  </p>
                  
                  <p className="text-gray-400">
                    西安交通大学数字媒体技术专业2026届毕业生，专注于将创意思维与AI技术相结合，创造有温度的智能产品。
                  </p>
                </div>

                {/* 技能标签 */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-400/50 hover:bg-teal-500/30 transition-colors">
                    <Cpu className="w-3 h-3 mr-1" />
                    AI产品
                  </Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/50 hover:bg-cyan-500/30 transition-colors">
                    <Zap className="w-3 h-3 mr-1" />
                    交互设计
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/50 hover:bg-blue-500/30 transition-colors">
                    <Brain className="w-3 h-3 mr-1" />
                    创意研发
                  </Badge>
                </div>

                {/* 统计数据 */}
                <div className="grid grid-cols-3 gap-6 mt-8 p-6 bg-slate-900/50 rounded-xl border border-teal-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-1">50+</div>
                    <div className="text-sm text-gray-400">服务用户(万)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">92</div>
                    <div className="text-sm text-gray-400">准确率(%)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">70</div>
                    <div className="text-sm text-gray-400">效率提升(%)</div>
                  </div>
                </div>

                {/* 行动按钮 */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
                    asChild
                  >
                    <Link href="/projects">
                      浏览我的项目 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-teal-400/50 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400 transform hover:scale-105 transition-all duration-200" 
                    asChild
                  >
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" /> 下载PDF简历
                    </Link>
                  </Button>
                </div>

                {/* 社交链接 */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-teal-500/20">
                  <span className="text-sm text-gray-400">联系方式:</span>
                  <div className="flex gap-3">
                    <Link href="https://github.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="mailto:contact@example.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                {/* 成就标签 */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <div className="flex items-center gap-2 text-sm text-yellow-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    东方设计奖团一等奖
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    校大学生艺术团部长
                  </div>
                </div>

                {/* 探索提示 */}
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-400/30">
                  <div className="flex items-center gap-2 text-teal-300 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping" />
                    探索右侧的漂浮元素，发现我的专业世界
                  </div>
                  <p className="text-sm text-gray-400">点击任意元素深入了解</p>
                </div>
              </div>
            </div>

            {/* 右侧交互区域 */}
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative h-96 lg:h-[600px]">
                {/* 中心演示区域 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30 shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=智能无损抓取机器人演示"
                      alt="智能无损抓取机器人演示"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-teal-500/90 hover:bg-teal-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200">
                        <Play className="mr-2 h-5 w-5" /> 观看演示
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 浮动的技能卡片 */}
                <div className="absolute top-10 right-10 transform hover:scale-110 transition-all duration-300">
                  <Card 
                    className="w-32 h-32 bg-slate-800/50 backdrop-blur-sm border-teal-500/30 hover:border-teal-400/50 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                      <Cpu className={`h-8 w-8 mb-2 transition-colors duration-300 ${hoveredCard === 1 ? 'text-teal-400' : 'text-teal-500'}`} />
                      <span className="text-sm text-white font-medium">AI算法</span>
                      <span className="text-xs text-gray-400">深度学习</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute bottom-20 left-10 transform hover:scale-110 transition-all duration-300">
                  <Card 
                    className="w-32 h-32 bg-slate-800/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-400/50 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                      <Zap className={`h-8 w-8 mb-2 transition-colors duration-300 ${hoveredCard === 2 ? 'text-cyan-400' : 'text-cyan-500'}`} />
                      <span className="text-sm text-white font-medium">产品设计</span>
                      <span className="text-xs text-gray-400">用户体验</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
                  <Card 
                    className="w-32 h-32 bg-slate-800/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                      <Brain className={`h-8 w-8 mb-2 transition-colors duration-300 ${hoveredCard === 3 ? 'text-blue-400' : 'text-blue-500'}`} />
                      <span className="text-sm text-white font-medium">创新思维</span>
                      <span className="text-xs text-gray-400">解决方案</span>
                    </CardContent>
                  </Card>
                </div>

                {/* 连接线动画 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 100 100 Q 200 150 300 200 T 400 300"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 其余内容保持原有结构，但添加深色主题 */}
      <div className="relative z-20 bg-slate-900/50 backdrop-blur-sm">
        {/* Who I Am Section */}
        <section className="py-16 border-t border-teal-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">我是谁</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                你好，我是<strong className="text-teal-400">曾德荣</strong>。一名来自马来西亚，现就读西安交通大学大三本科机械工程（智能制造），也是一位热情的AI产品探索者。
                我着迷于将前沿AI技术融入物理实体，创造真正有用的智能工具。从机械故障诊断的深度学习到智能无损抓取机械臂的算法开发，
                我始终在探索"具身智能"的无限可能。
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                  { icon: "🔬", title: "探索者", desc: "持续探索AI前沿工具与技术", color: "teal" },
                  { icon: "🛠️", title: "实干家", desc: "将想法转化为可行的产品原型", color: "cyan" },
                  { icon: "🌉", title: "连接者", desc: "连接物理世界与数字智能", color: "blue" }
                ].map((item, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`w-16 h-16 bg-${item.color}-500/20 border border-${item.color}-400/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-${item.color}-500/30 transition-all duration-300`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-16 border-t border-teal-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">核心项目</h2>
                <p className="text-lg text-gray-400">深度案例分析：从概念到实现的完整产品开发过程</p>
              </div>

              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-500/30 bg-slate-800/50 backdrop-blur-sm">
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
                      <CardTitle className="text-2xl text-white hover:text-teal-400 transition-colors">
                        智能无损抓取机械臂
                      </CardTitle>
                      <CardDescription className="text-base text-gray-400">
                        "触觉感知-柔性控制-特征迁移"三位一体系统
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-300">
                        研发"触觉感知-柔性控制-特征迁移"三位一体系统，配合树莓派主控与舵机协同，
                        开发动态闭环力控算法实时感知物体，以<strong className="text-teal-400 animate-pulse">0.01N的力控分辨率</strong>实现精准控制达到智能无损抓取。
                        在2025年大学生创新大赛西交大校赛中荣获银奖。
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {["力控算法", "原型网络", "零样本推理", "树莓派", "领域泛化", "Python"].map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-teal-400/50 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400 transition-colors cursor-pointer">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-fit bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-all duration-200" asChild>
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
        <section className="py-16 border-t border-teal-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">我的探索与思考</h2>
                <p className="text-lg text-gray-400">持续学习，深度思考，分享见解</p>
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
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border border-teal-500/30 bg-slate-800/50 backdrop-blur-sm shadow-md">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors bg-slate-700 text-gray-300">{item.badge}</Badge>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-teal-400 transition-colors text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-gray-400">
                        {item.desc}
                      </CardDescription>
                      <Button variant="ghost" size="sm" className="group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors text-gray-400" asChild>
                        <Link href={item.link}>
                          阅读全文 <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="border-teal-400/50 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400 transform hover:scale-105 transition-all duration-200" asChild>
                  <Link href="/explorations">
                    阅读更多思考 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-blue-600/20 border-t border-teal-500/20 relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-teal-400/30 rounded-full animate-ping"
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
              <p className="text-xl text-gray-300">
                如果你对具身智能、AI产品或机器人技术感兴趣，期待与你交流。
                如果有合适的工作或实习机会，也欢迎随时联系我。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white transform hover:scale-105 transition-all duration-200 shadow-lg" asChild>
                  <Link href="/contact">
                    联系我 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-teal-400/50 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400 transform hover:scale-105 transition-all duration-200" asChild>
                  <Link href="/about">
                    了解更多关于我
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
