"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Bookmark, Lightbulb, Target, Zap } from 'lucide-react'
import Link from "next/link"

export default function EmbodiedAIDesignPrinciplesPage() {
  const [comment, setComment] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(156)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-[#00FFC2]" asChild>
            <Link href="/explorations">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回探索页面
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">产品思考</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">
              具身智能产品设计的三个原则
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2024年1月8日
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                12分钟阅读
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                2,156 次阅读
              </span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={isLiked ? "bg-red-500/20 border-red-400 text-red-400" : "border-gray-600 text-gray-400 hover:bg-red-500/20 hover:text-red-400"}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              <Button
                variant={isBookmarked ? "default" : "outline"}
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "bg-blue-500/20 border-blue-400 text-blue-400" : "border-gray-600 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400"}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                收藏
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-[#00FFC2]/20 hover:text-[#00FFC2]">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                在开发智能无损抓取机械臂的过程中，我深刻体会到具身智能产品设计的复杂性。
                它不仅要求技术的精湛，更需要对用户体验、系统可靠性和环境适应性的深度思考。
                基于这次项目经验，我总结出了具身智能产品设计的三个核心原则。
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">什么是具身智能产品？</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              具身智能产品是指那些将AI算法与物理实体深度融合的智能系统。
              与纯软件产品不同，它们需要在真实的物理世界中感知、决策和行动。
              这种"具身性"带来了独特的设计挑战：如何让数字智能在物理约束下发挥最大价值？
            </p>

            <Card className="my-8 bg-slate-700/30 border-purple-500/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  核心洞察
                </h3>
                <p className="text-purple-200">
                  具身智能产品的成功不仅取决于算法的先进性，更在于如何让这些算法在物理世界中"优雅地工作"。
                  这需要我们重新思考产品设计的方法论。
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-white mb-6">三个核心设计原则</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Principle 1 */}
              <Card className="bg-slate-800/50 border-blue-500/50 transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-300 flex items-center gap-3">
                    <Zap className="h-6 w-6" />
                    直观性
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">让复杂技术变得简单易懂，用户无需了解底层算法就能直观操作。</p>
                </CardContent>
              </Card>

              {/* Principle 2 */}
              <Card className="bg-slate-800/50 border-green-500/50 transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-green-300 flex items-center gap-3">
                    <Target className="h-6 w-6" />
                    可靠性
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">在充满不确定性的物理世界中保持稳定性能，建立用户信任。</p>
                </CardContent>
              </Card>

              {/* Principle 3 */}
              <Card className="bg-slate-800/50 border-purple-500/50 transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-purple-300 flex items-center gap-3">
                    <Lightbulb className="h-6 w-6" />
                    适应性
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">产品应能学习和适应新环境、新任务，与用户共同进化。</p>
                </CardContent>
              </Card>
            </div>


            <h2 className="text-2xl font-bold text-white mb-4">原则间的协同效应</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              这三个原则不是孤立存在的，而是相互支撑、协同作用的。
              直观性让用户容易上手，可靠性建立用户信任，适应性提供长期价值。
              只有三者并重，才能创造出真正优秀的具身智能产品。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="text-center p-4 bg-slate-700/30 border-blue-500/30">
                <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-300">直观性</h4>
                <p className="text-sm text-blue-200">降低使用门槛</p>
              </Card>
              <Card className="text-center p-4 bg-slate-700/30 border-green-500/30">
                <Zap className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-green-300">可靠性</h4>
                <p className="text-sm text-green-200">建立用户信任</p>
              </Card>
              <Card className="text-center p-4 bg-slate-700/30 border-purple-500/30">
                <Lightbulb className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-300">适应性</h4>
                <p className="text-sm text-purple-200">提供长期价值</p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">对AI产品经理的启示</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              作为一名准AI产品经理，这次项目让我深刻理解了具身智能产品的特殊性：
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300">
              <li className="mb-2"><strong className="text-white">跨界思维：</strong>需要同时考虑软件逻辑和物理约束</li>
              <li className="mb-2"><strong className="text-white">用户共情：</strong>理解用户在物理交互中的心理状态</li>
              <li className="mb-2"><strong className="text-white">系统思维：</strong>统筹考虑技术、成本、体验的平衡</li>
              <li className="mb-2"><strong className="text-white">迭代意识：</strong>在物理产品中实现快速迭代的挑战</li>
            </ul>

            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">💭 个人反思</h3>
                <p className="text-gray-300">
                  这三个原则不仅适用于机械臂，我相信它们对所有具身智能产品都有指导意义。
                  无论是服务机器人、自动驾驶汽车，还是智能家居设备，
                  都需要在直观性、可靠性和适应性之间找到最佳平衡。
                  作为未来的AI产品经理，我会继续在实践中完善和验证这些原则。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-white mb-3">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["产品设计", "具身智能", "用户体验", "设计原则", "AI产品", "机器人"].map((tag) => (
                <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300 hover:bg-[#00FFC2]/20 hover:text-[#00FFC2] cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <Card className="bg-slate-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <MessageCircle className="h-5 w-5" />
                评论区 (34)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <Textarea
                  placeholder="分享你的想法..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="bg-slate-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/80">发表评论</Button>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-300">张</span>
                    </div>
                    <span className="font-semibold text-white">张产品</span>
                    <span className="text-sm text-gray-400">3天前</span>
                  </div>
                  <p className="text-gray-300">
                    这三个原则总结得很到位！我在做智能家居产品时也遇到了类似的挑战，
                    特别是可靠性这一点，用户对物理产品的容错率确实比软件低很多。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                    <button className="hover:text-[#00FFC2]">👍 18</button>
                    <button className="hover:text-[#00FFC2]">回复</button>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-green-300">刘</span>
                    </div>
                    <span className="font-semibold text-white">刘工程师</span>
                    <span className="text-sm text-gray-400">2天前</span>
                  </div>
                  <p className="text-gray-300">
                    作为技术人员，我觉得适应性原则特别有启发性。
                    我们往往专注于算法优化，但忽略了产品在实际使用中的学习和进化能力。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                    <button className="hover:text-[#00FFC2]">👍 15</button>
                    <button className="hover:text-[#00FFC2]">回复</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">相关文章</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-gray-700 hover:border-[#00FFC2]/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/30">AI工具评测</Badge>
                  <h3 className="font-semibold text-lg mb-2 text-white hover:text-[#00FFC2] transition-colors">
                    GPT-4o在机器人任务规划中的应用
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    深度评测GPT-4o在复杂机器人任务规划中的表现...
                  </p>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#00FFC2]" asChild>
                    <Link href="/explorations/gpt4o-robot-planning">
                      阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-gray-700 hover:border-[#00FFC2]/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">AI工具评测</Badge>
                  <h3 className="font-semibold text-lg mb-2 text-white hover:text-[#00FFC2] transition-colors">
                    Google NotebookLM全面评测：AI驱动的个性化学习体验
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    深入探索NotebookLM如何变革我们的学习与研究范式...
                  </p>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#00FFC2]" asChild>
                    <Link href="/explorations/google-notebooklm-review">
                      阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
