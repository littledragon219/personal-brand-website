"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Bookmark, TrendingUp, Target, Zap, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function TeslaOptimusAnalysisPage() {
  const [comment, setComment] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(234)

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
            <Badge className="mb-4 bg-purple-100 text-purple-800">行业分析</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              拆解特斯拉Optimus的产品迭代路径
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2024年1月1日
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                15分钟阅读
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                3,421 次阅读
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
                特斯拉Optimus人形机器人项目自发布以来就备受关注。作为一名AI产品探索者，
                我试图从产品经理的角度分析马斯克的产品思维如何在机器人领域得到体现，
                以及这对整个行业意味着什么。
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">马斯克的产品哲学在Optimus中的体现</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              从Model S到SpaceX，马斯克的产品都有一个共同特点：
              <strong>从第一性原理出发，重新定义问题</strong>。
              在Optimus项目中，这种思维方式同样清晰可见。
            </p>

            <Card className="my-8 bg-red-900/20 border-red-500/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  核心洞察
                </h3>
                <p className="text-red-800">
                  马斯克没有把Optimus定位为"更好的工业机器人"，
                  而是"人类的通用替代品"。这种定位决定了产品的整个设计思路。
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">三个关键的产品决策</h2>

            {/* Decision 1 */}
            <Card className="mb-8 border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  人形设计：不是为了炫酷，而是为了兼容性
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  很多人质疑为什么要做人形机器人，认为专用机器人效率更高。
                  但马斯克的逻辑很清晰：人类世界的基础设施都是为人类设计的，
                  人形机器人可以直接使用现有的工具、设备和环境，无需重新改造。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">产品思维分析：</h4>
                  <p className="text-sm text-gray-700">
                    这是典型的"兼容性优先"策略。虽然在特定任务上可能不是最优解，
                    但在通用性和部署成本上有巨大优势。这种思路在软件产品中很常见，
                    但在硬件产品中需要更大的勇气。
                  </p>
                </div>

                <h4 className="font-semibold mb-2">商业价值：</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>降低部署成本（无需改造环境）</li>
                  <li>扩大应用场景（任何人类能做的工作）</li>
                  <li>简化用户培训（直观的交互方式）</li>
                  <li>建立心理认同（更容易被接受）</li>
                </ul>
              </CardContent>
            </Card>

            {/* Decision 2 */}
            <Card className="mb-8 border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  AI优先：软件定义机器人
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  传统机器人公司往往从机械结构开始设计，然后添加控制系统。
                  特斯拉的方法相反：先有AI大脑，再设计匹配的身体。
                  这种"AI优先"的思路体现了软件公司的基因。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">技术路径对比：</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">传统路径：</h5>
                      <p className="text-gray-700">机械设计 → 控制系统 → 应用软件</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">特斯拉路径：</h5>
                      <p className="text-gray-700">AI算法 → 硬件需求 → 机械实现</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-2">战略优势：</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>快速迭代能力（软件更新）</li>
                  <li>规模化优势（AI训练数据）</li>
                  <li>差异化竞争（算法护城河）</li>
                  <li>成本控制（标准化硬件）</li>
                </ul>
              </CardContent>
            </Card>

            {/* Decision 3 */}
            <Card className="mb-8 border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-purple-600">3</span>
                  </div>
                  垂直整合：从芯片到应用的全栈控制
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  特斯拉选择自研芯片、自建工厂、自主开发AI算法。
                  这种垂直整合策略在机器人行业并不常见，但对于追求极致性能和成本控制的产品来说，
                  可能是必要的选择。
                </p>
                
                <div className="bg-slate-700/30 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">整合层级：</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>芯片层：</span>
                      <span>自研AI芯片（FSD芯片技术延伸）</span>
                    </div>
                    <div className="flex justify-between">
                      <span>算法层：</span>
                      <span>自主开发的神经网络架构</span>
                    </div>
                    <div className="flex justify-between">
                      <span>硬件层：</span>
                      <span>自主设计的机械结构和传感器</span>
                    </div>
                    <div className="flex justify-between">
                      <span>制造层：</span>
                      <span>自建生产线和质量控制</span>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-2">风险与收益：</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">收益：</h5>
                    <ul className="list-disc pl-4 text-sm text-gray-700">
                      <li>极致的性能优化</li>
                      <li>更好的成本控制</li>
                      <li>快速的产品迭代</li>
                      <li>独特的竞争优势</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-800 mb-2">风险：</h5>
                    <ul className="list-disc pl-4 text-sm text-gray-700">
                      <li>巨大的资金投入</li>
                      <li>技术风险集中</li>
                      <li>开发周期延长</li>
                      <li>供应链复杂性</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">迭代策略分析</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              从AI Day的演示到最新的工厂测试，Optimus的迭代路径体现了典型的"MVP → 快速迭代"思路：
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-4 border-l-4 border-gray-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <h4 className="font-semibold">概念验证阶段（2021-2022）</h4>
                </div>
                <p className="text-sm text-gray-600 ml-9">
                  通过AI Day展示愿景，吸引人才和资金，建立市场预期
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-blue-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <h4 className="font-semibold">原型开发阶段（2022-2023）</h4>
                </div>
                <p className="text-sm text-gray-600 ml-9">
                  快速构建可工作的原型，验证核心技术假设
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-green-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <h4 className="font-semibold">工厂测试阶段（2023-2024）</h4>
                </div>
                <p className="text-sm text-gray-600 ml-9">
                  在真实工作环境中测试，收集数据，优化算法
                </p>
              </Card>

              <Card className="p-4 border-l-4 border-purple-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <h4 className="font-semibold">商业化准备阶段（2024-2025）</h4>
                </div>
                <p className="text-sm text-gray-600 ml-9">
                  规模化生产准备，建立商业模式，拓展应用场景
                </p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">对行业的启示</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimus项目对整个机器人行业产生了深远影响：
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-slate-700/30 border-purple-500/30">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  技术趋势
                </h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• AI优先的设计理念成为主流</li>
                  <li>• 端到端学习替代传统控制方法</li>
                  <li>• 大模型在机器人领域的应用加速</li>
                  <li>• 仿真训练技术快速发展</li>
                </ul>
              </Card>

              <Card className="p-6 bg-green-900/20 border-green-500/30">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  商业模式
                </h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• 从卖产品到卖服务的转变</li>
                  <li>• 数据驱动的商业价值挖掘</li>
                  <li>• 平台化生态的构建</li>
                  <li>• 订阅制收费模式的探索</li>
                </ul>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">我的思考与预测</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              作为一名AI产品探索者，我认为Optimus项目最大的价值不在于技术本身，
              而在于它重新定义了机器人产品的思考框架。
              这种"软件定义硬件"的思路将深刻影响整个行业的发展方向。
            </p>

            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">🔮 未来预测</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>短期（1-2年）：</strong>更多公司将采用AI优先的设计理念，人形机器人赛道竞争加剧</p>
                  <p><strong>中期（3-5年）：</strong>通用人形机器人开始在特定场景商业化，成本快速下降</p>
                  <p><strong>长期（5-10年）：</strong>机器人成为新的计算平台，催生全新的商业生态</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["特斯拉", "Optimus", "产品分析", "商业策略", "人形机器人", "AI", "马斯克"].map((tag) => (
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
                评论区 (67)
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
                <div className="border-l-4 border-purple-200 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">陈</span>
                    </div>
                    <span className="font-semibold">陈投资人</span>
                    <span className="text-sm text-gray-500">1天前</span>
                  </div>
                  <p className="text-gray-700">
                    分析得很深入！特斯拉的垂直整合策略确实有风险，但如果成功了，
                    护城河会非常深。这种all-in的打法很符合马斯克的风格。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 25</button>
                    <button className="hover:text-blue-600">回复</button>
                  </div>
                </div>

                <div className="border-l-4 border-blue-200 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">赵</span>
                    </div>
                    <span className="font-semibold">赵机器人工程师</span>
                    <span className="text-sm text-gray-500">6小时前</span>
                  </div>
                  <p className="text-gray-700">
                    从技术角度看，人形设计确实有其合理性。但我觉得成本控制会是最大的挑战，
                    毕竟工业场景对价格敏感度很高。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 19</button>
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
                  <Badge variant="secondary" className="mb-3">产品思考</Badge>
                  <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                    具身智能产品设计的三个原则
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    基于项目经验总结的产品设计核心原则...
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/explorations/embodied-ai-design-principles">
                      阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
