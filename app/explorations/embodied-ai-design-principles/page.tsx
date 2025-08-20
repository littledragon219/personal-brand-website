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
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/explorations">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回探索页面
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">产品思考</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              具身智能产品设计的三个原则
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
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
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              <Button
                variant={isBookmarked ? "default" : "outline"}
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                收藏
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                在开发智能无损抓取机械臂的过程中，我深刻体会到具身智能产品设计的复杂性。
                它不仅要求技术的精湛，更需要对用户体验、系统可靠性和环境适应性的深度思考。
                基于这次项目经验，我总结出了具身智能产品设计的三个核心原则。
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">什么是具身智能产品？</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              具身智能产品是指那些将AI算法与物理实体深度融合的智能系统。
              与纯软件产品不同，它们需要在真实的物理世界中感知、决策和行动。
              这种"具身性"带来了独特的设计挑战：如何让数字智能在物理约束下发挥最大价值？
            </p>

            <Card className="my-8 bg-slate-700/30 border-purple-500/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  核心洞察
                </h3>
                <p className="text-blue-800">
                  具身智能产品的成功不仅取决于算法的先进性，更在于如何让这些算法在物理世界中"优雅地工作"。
                  这需要我们重新思考产品设计的方法论。
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">三个核心设计原则</h2>

            {/* Principle 1 */}
            <Card className="mb-8 border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  直观性原则：让复杂技术变得简单易懂
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  具身智能产品往往涉及复杂的算法和传感器，但用户不应该感受到这种复杂性。
                  好的设计应该让用户能够直观地理解产品的工作原理和操作方式。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">实践案例：机械臂的力反馈设计</h4>
                  <p className="text-sm text-gray-700">
                    在我的项目中，我设计了一个简单的LED指示系统：绿色表示安全抓取，
                    黄色表示需要调整，红色表示停止。这种视觉反馈让操作者能够立即理解机械臂的状态，
                    无需了解复杂的力控算法。
                  </p>
                </div>

                <h4 className="font-semibold mb-2">设计要点：</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>使用熟悉的交互模式</li>
                  <li>提供清晰的状态反馈</li>
                  <li>隐藏技术复杂性</li>
                  <li>建立用户心理模型</li>
                </ul>
              </CardContent>
            </Card>

            {/* Principle 2 */}
            <Card className="mb-8 border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  可靠性原则：在不确定中保持稳定
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  物理世界充满了不确定性：传感器噪声、环境变化、机械磨损等。
                  具身智能产品必须在这些不确定性中保持稳定可靠的性能。
                  这不仅是技术问题，更是用户信任的基础。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">实践案例：多层容错机制</h4>
                  <p className="text-sm text-gray-700">
                    我在机械臂中设计了三层容错机制：传感器层面的数据融合、
                    算法层面的异常检测、系统层面的安全停机。当任何一层检测到异常时，
                    系统都能优雅地降级或停止，而不是突然失效。
                  </p>
                </div>

                <h4 className="font-semibold mb-2">设计要点：</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>建立多层容错机制</li>
                  <li>设计优雅的降级策略</li>
                  <li>实现预测性维护</li>
                  <li>提供透明的错误信息</li>
                </ul>
              </CardContent>
            </Card>

            {/* Principle 3 */}
            <Card className="mb-8 border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-purple-600">3</span>
                  </div>
                  适应性原则：与环境共同进化
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  优秀的具身智能产品不应该是静态的，而应该能够学习和适应。
                  它们需要在使用过程中不断优化性能，适应新的环境和任务需求。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">实践案例：自适应力控参数</h4>
                  <p className="text-sm text-gray-700">
                    机械臂在处理不同物体时会自动调整力控参数，并记录成功的参数组合。
                    通过这种方式，系统在处理相似物体时会变得越来越精准，
                    真正实现了"越用越聪明"的效果。
                  </p>
                </div>

                <h4 className="font-semibold mb-2">设计要点：</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>实现在线学习能力</li>
                  <li>建立用户行为模型</li>
                  <li>支持个性化定制</li>
                  <li>保持系统开放性</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">原则间的协同效应</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              这三个原则不是孤立存在的，而是相互支撑、协同作用的。
              直观性让用户容易上手，可靠性建立用户信任，适应性提供长期价值。
              只有三者并重，才能创造出真正优秀的具身智能产品。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="text-center p-4 bg-slate-700/30 border-purple-500/30">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800">直观性</h4>
                <p className="text-sm text-blue-700">降低使用门槛</p>
              </Card>
              <Card className="text-center p-4 bg-green-900/20 border-green-500/30">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-800">可靠性</h4>
                <p className="text-sm text-green-700">建立用户信任</p>
              </Card>
              <Card className="text-center p-4 bg-purple-50 border-purple-200">
                <Lightbulb className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-800">适应性</h4>
                <p className="text-sm text-purple-700">提供长期价值</p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">对AI产品经理的启示</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              作为一名准AI产品经理，这次项目让我深刻理解了具身智能产品的特殊性：
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>跨界思维：</strong>需要同时考虑软件逻辑和物理约束</li>
              <li className="mb-2"><strong>用户共情：</strong>理解用户在物理交互中的心理状态</li>
              <li className="mb-2"><strong>系统思维：</strong>统筹考虑技术、成本、体验的平衡</li>
              <li className="mb-2"><strong>迭代意识：</strong>在物理产品中实现快速迭代的挑战</li>
            </ul>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">💭 个人反思</h3>
                <p className="text-gray-700">
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
            <h3 className="font-semibold text-gray-900 mb-3">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["产品设计", "具身智能", "用户体验", "设计原则", "AI产品", "机器人"].map((tag) => (
                <Badge key={tag} variant="outline" className="hover:bg-blue-50 cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
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
                />
                <Button className="w-full">发表评论</Button>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-200 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">张</span>
                    </div>
                    <span className="font-semibold">张产品</span>
                    <span className="text-sm text-gray-500">3天前</span>
                  </div>
                  <p className="text-gray-700">
                    这三个原则总结得很到位！我在做智能家居产品时也遇到了类似的挑战，
                    特别是可靠性这一点，用户对物理产品的容错率确实比软件低很多。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 18</button>
                    <button className="hover:text-blue-600">回复</button>
                  </div>
                </div>

                <div className="border-l-4 border-green-200 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">刘</span>
                    </div>
                    <span className="font-semibold">刘工程师</span>
                    <span className="text-sm text-gray-500">2天前</span>
                  </div>
                  <p className="text-gray-700">
                    作为技术人员，我觉得适应性原则特别有启发性。
                    我们往往专注于算法优化，但忽略了产品在实际使用中的学习和进化能力。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 15</button>
                    <button className="hover:text-blue-600">回复</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">相关文章</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">AI工具评测</Badge>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                    GPT-4o在机器人任务规划中的应用
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    深度评测GPT-4o在复杂机器人任务规划中的表现...
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/explorations/gpt4o-robot-planning">
                      阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">行业分析</Badge>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                    拆解特斯拉Optimus的产品迭代路径
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    从产品经理角度分析特斯拉机器人策略...
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/explorations/tesla-optimus-analysis">
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
