"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, Tag, Eye, Heart, MessageCircle } from 'lucide-react'
import Link from "next/link"

export default function ExplorationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")

  const categories = ["全部", "AI工具评测", "产品思考", "行业分析", "技术深度", "创业思考"]
  
  const articles = [
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
      featured: true
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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">我的探索与思考</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              在AI与机器人的交汇处，记录我的学习、思考与实践
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="搜索文章..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                精选文章
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-gray-900">{article.category}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {article.likes}
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 group-hover:bg-blue-600 transition-colors" asChild>
                        <Link href={`/explorations/${article.id}`}>
                          阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Regular Articles */}
          {regularArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-gray-600 rounded"></span>
                所有文章
              </h2>
              
              <div className="grid gap-6">
                {regularArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {article.date}
                            </span>
                            <span>{article.readTime}</span>
                            <div className="flex items-center gap-3 ml-auto">
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
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {article.tags.slice(0, 4).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 transition-colors" asChild>
                              <Link href={`/explorations/${article.id}`}>
                                阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">没有找到相关文章</h3>
              <p className="text-gray-600 mb-6">尝试调整搜索关键词或选择不同的分类</p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory("全部")}}>
                重置筛选条件
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              订阅我的思考
            </h3>
            <p className="text-gray-600 mb-6">
              获取最新的AI与机器人领域的深度思考和实践分享
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="输入你的邮箱地址" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                订阅更新
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
