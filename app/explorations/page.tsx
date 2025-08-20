"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, Tag, Eye, Heart, MessageCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackgroundEffects } from "@/components/background-effects"

export default function ExplorationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")

  const categories = ["全部", "AI工具评测", "产品思考", "行业分析", "技术深度", "创业思考"]
  
  const articles = [
    {
      id: "google-notebooklm-review",
      title: "对Google NotebookLM深度体验的报告",
      excerpt: "在AI 2.0时代，从追求模型的'无限创造力'转向追求应用的'绝对可靠性'。深度体验Google NotebookLM后，我发现它的'源于个人信息'模式能有效杜绝信息幻觉，音频总览功能更是知识消费方式的革命...",
      category: "AI工具评测",
      date: "2024.01.20",
      readTime: "15分钟",
      views: 2156,
      likes: 178,
      comments: 45,
      tags: ["NotebookLM", "Google", "知识管理", "RAG", "音频总览"],
      featured: true,
      image: "/notebooklm.png",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "gpt4o-robot-planning",
      title: "GPT-4o在机器人任务规划中的应用",
      excerpt: "深度评测GPT-4o在复杂机器人任务规划中的表现，探讨大语言模型如何赋能具身智能。通过实际案例分析，我发现GPT-4o在理解复杂空间关系和多步骤任务分解方面表现出色...",
      category: "AI工具评测",
      date: "2024.01.15",
      readTime: "8分钟",
      views: 1234,
      likes: 89,
      comments: 23,
      tags: ["GPT-4o", "机器人", "任务规划", "大语言模型"],
      featured: true,
      image: "/gpt4-0.png",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "embodied-ai-design-principles",
      title: "具身智能产品设计的三个原则",
      excerpt: "基于我的项目经验，总结出具身智能产品设计中最重要的三个原则：直观性、可靠性、适应性。每个原则都有其深层的技术和用户体验考量...",
      category: "产品思考",
      date: "2024.01.08",
      readTime: "12分钟",
      views: 2156,
      likes: 156,
      comments: 34,
      tags: ["产品设计", "具身智能", "用户体验", "设计原则"],
      featured: true,
      image: "/具身智能.png",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "industry-4-analysis",
      title: "面向工业4.0的西门子Opcenter系统分析报告",
      excerpt: "深度分析Siemens Opcenter MES系统架构、功能模块与实际运行案例，验证其在生产绩效提升上的价值。从系统集成到数据分析，全面解析这一制造执行系统的核心能力...",
      category: "行业分析",
      date: "2024.01.25",
      readTime: "12分钟",
      views: 1856,
      likes: 156,
      comments: 23,
      tags: ["MES系统", "Siemens Opcenter", "工业4.0", "制造执行系统"],
      featured: true,
      image: "/opcenter.jpg",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: "gqtea-analysis",
      title: "光启茶韵(GQTea)企业分析报告",
      excerpt: "深度分析光启茶韵的商业模式、核心竞争力与发展战略。从供应链垂直整合到下沉市场布局，全面解析这家现制饮品行业领军企业的成功密码与未来展望...",
      category: "行业分析",
      date: "2024.01.30",
      readTime: "18分钟",
      views: 2134,
      likes: 189,
      comments: 34,
      tags: ["现制饮品", "连锁经营", "供应链管理", "商业模式", "下沉市场"],
      featured: true,
      image: "/GQTEA.png",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "tesla-optimus-analysis",
      title: "拆解特斯拉Optimus的产品迭代路径",
      excerpt: "从产品经理的角度分析特斯拉人形机器人的设计理念、技术选型和商业化策略。马斯克的产品思维如何在机器人领域得到体现？",
      category: "行业分析",
      date: "2024.01.01",
      readTime: "15分钟",
      views: 3421,
      likes: 234,
      comments: 67,
      tags: ["特斯拉", "Optimus", "产品分析", "商业策略"],
      featured: false,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "ai-tools-comparison-2024",
      title: "2024年AI开发工具横向对比",
      excerpt: "对比分析了当前主流的AI开发工具，包括OpenAI API、Anthropic Claude、Google Gemini等，从开发者角度评估各工具的优劣势...",
      category: "AI工具评测",
      date: "2023.12.25",
      readTime: "10分钟",
      views: 1876,
      likes: 123,
      comments: 45,
      tags: ["AI工具", "开发", "对比分析", "API"],
      featured: false,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "robotics-startup-insights",
      title: "机器人创业的三个关键洞察",
      excerpt: "通过观察和分析多家机器人创业公司，我总结出了三个关键洞察：技术壁垒、市场时机、团队配置。每一个都可能决定创业的成败...",
      category: "创业思考",
      date: "2023.12.18",
      readTime: "7分钟",
      views: 987,
      likes: 67,
      comments: 12,
      tags: ["创业", "机器人", "商业洞察", "团队"],
      featured: false,
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: "deep-learning-fault-diagnosis",
      title: "深度学习在故障诊断中的技术演进",
      excerpt: "从传统的信号处理方法到现代的深度学习技术，故障诊断领域经历了怎样的技术演进？我将分享在这个领域的技术实践和思考...",
      category: "技术深度",
      date: "2023.12.10",
      readTime: "20分钟",
      views: 1543,
      likes: 198,
      comments: 56,
      tags: ["深度学习", "故障诊断", "信号处理", "技术演进"],
      featured: false,
      gradient: "from-teal-500/20 to-blue-500/20"
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "全部" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
                  <div className="bg-slate-900 rounded-full px-6 py-2">
                    <span className="text-purple-400 text-sm font-medium">思考与洞察</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                  我的探索与思考
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  在AI与机器人的交汇处，记录我的学习、思考与实践
                </p>
              </div>
            </ScrollReveal>





            {/* Featured Articles */}
            <ScrollReveal delay={600}>
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8">精选文章</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Link key={article.id} href={`/explorations/${article.id}`}>
                      <Card className="bg-slate-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group h-full">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg">
                            {article.image && (
                              <Image
                                src={article.image}
                                alt={article.title}
                                width={400}
                                height={240}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                                {article.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400 mb-4 line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {article.date}
                              </span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {article.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                {article.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" />
                                {article.comments}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {article.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs border-purple-400/30 text-purple-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Newsletter Signup */}
            <ScrollReveal delay={1200}>
              <section className="mt-16 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 text-center border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  订阅我的思考
                </h3>
                <p className="text-gray-300 mb-6">
                  获取最新的AI与机器人领域的深度思考和实践分享
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="输入你的邮箱地址" 
                    className="flex-1 bg-slate-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400" 
                  />
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    订阅更新
                  </Button>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
