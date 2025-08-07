"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Bookmark, Lightbulb, Target, Zap } from 'lucide-react'
import Link from "next/link"

export default function GPT4oRobotPlanningPage() {
  const [comment, setComment] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(89)

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
            <Badge className="mb-4">AI工具评测</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              GPT-4o在机器人任务规划中的应用
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2024年1月15日
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8分钟阅读
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                1,234 次阅读
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
                随着大语言模型技术的快速发展，GPT-4o作为OpenAI的最新力作，在多模态理解和推理能力上有了显著提升。
                本文将深入探讨GPT-4o在机器人任务规划领域的实际应用效果，通过具体案例分析其优势与局限性。
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">背景与动机</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              在我的智能无损抓取机械臂项目中，任务规划一直是一个核心挑战。传统的规划算法虽然精确，
              但在面对复杂、动态的环境时往往显得僵化。而GPT-4o的出现，为我们提供了一种全新的思路：
              能否利用大语言模型的推理能力，让机器人具备更灵活的任务规划能力？
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">实验设计</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我设计了三个典型的机器人任务场景来测试GPT-4o的表现：
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>场景一：</strong>多物体分拣任务 - 需要根据物体属性进行分类抓取</li>
              <li className="mb-2"><strong>场景二：</strong>障碍物规避路径规划 - 在复杂环境中找到最优路径</li>
              <li className="mb-2"><strong>场景三：</strong>协作任务执行 - 多机器人协同完成复杂任务</li>
            </ul>

            <Card className="my-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-3">💡 关键发现</h3>
                <p className="text-blue-800">
                  GPT-4o在理解复杂空间关系和多步骤任务分解方面表现出色，
                  特别是在需要常识推理的场景中，其表现远超传统算法。
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">实验结果分析</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. 多物体分拣任务</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              在这个任务中，GPT-4o展现了令人印象深刻的物体识别和分类能力。
              通过自然语言描述，它能够准确理解"将红色的易碎物品轻柔地放入软垫箱中"这样的复杂指令，
              并生成相应的执行步骤。
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">示例对话：</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>用户：</strong>桌面上有红色玻璃杯、蓝色塑料瓶、绿色苹果，请规划抓取顺序
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-green-500">
                  <strong>GPT-4o：</strong>建议抓取顺序：1) 绿色苹果（易损但相对安全）2) 红色玻璃杯（最易碎，需要特别小心）3) 蓝色塑料瓶（最稳定）。
                  每次抓取前都要调整力控参数...
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. 路径规划能力</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              在障碍物规避测试中，GPT-4o虽然不能直接计算最优路径，
              但它能够提供高层次的策略指导，比如"优先选择宽敞通道"、"避免尖锐转角"等，
              这些建议对于实际的路径规划算法具有很好的指导意义。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">优势与局限性</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5" />
                    主要优势
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-green-700">
                    <li>• 出色的自然语言理解能力</li>
                    <li>• 强大的常识推理能力</li>
                    <li>• 灵活的任务分解策略</li>
                    <li>• 良好的多模态信息整合</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800">主要局限</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-orange-700">
                    <li>• 缺乏精确的数值计算能力</li>
                    <li>• 无法处理实时动态变化</li>
                    <li>• 对物理约束理解有限</li>
                    <li>• 响应时间相对较长</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">实践建议</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              基于这次评测，我认为GPT-4o在机器人任务规划中的最佳应用方式是作为"高级顾问"：
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-2">用于任务的高层次分解和策略制定</li>
              <li className="mb-2">提供基于常识的决策支持</li>
              <li className="mb-2">处理异常情况的应急响应</li>
              <li className="mb-2">与传统算法结合，形成混合规划系统</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">未来展望</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              随着多模态大模型技术的不断发展，我相信未来的机器人任务规划将更加智能化。
              GPT-4o只是一个开始，真正的突破可能来自于专门针对机器人领域训练的大模型，
              以及更好的人机协作机制。
            </p>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">💭 个人思考</h3>
                <p className="text-gray-700">
                  这次评测让我更加坚信，未来的AI产品经理需要具备跨领域的知识整合能力。
                  我们不仅要懂技术，更要理解技术的边界，知道在什么场景下使用什么工具。
                  GPT-4o给了我们新的可能性，但如何将这种可能性转化为实际的产品价值，
                  这正是AI产品经理的核心价值所在。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {["GPT-4o", "机器人", "任务规划", "大语言模型", "AI评测", "产品思考"].map((tag) => (
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
                评论区 (23)
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
                      <span className="text-sm font-semibold">李</span>
                    </div>
                    <span className="font-semibold">李明</span>
                    <span className="text-sm text-gray-500">2天前</span>
                  </div>
                  <p className="text-gray-700">
                    很有深度的分析！我也在做类似的研究，GPT-4o确实在常识推理方面表现出色，
                    但在实时性要求高的场景下还是有挑战。期待看到更多实际应用案例。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 12</button>
                    <button className="hover:text-blue-600">回复</button>
                  </div>
                </div>

                <div className="border-l-4 border-green-200 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">王</span>
                    </div>
                    <span className="font-semibold">王研究员</span>
                    <span className="text-sm text-gray-500">1天前</span>
                  </div>
                  <p className="text-gray-700">
                    作为一名机器人工程师，我觉得这个评测角度很新颖。
                    传统的规划算法确实在灵活性上有局限，大模型的引入可能是一个很好的补充。
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 8</button>
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
