"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Bookmark, ThumbsUp, Brain, Lightbulb, Target, Zap, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import Link from "next/link"

export default function NotebookLMReviewPage() {
  const [comment, setComment] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(178)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <div className="min-h-screen py-16 bg-[#1A1A2E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 text-white hover:bg-[#00FFC2]/20 hover:text-[#00FFC2]" asChild>
            <Link href="/explorations">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回探索页面
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-[#00FFC2] text-black">AI工具评测</Badge>
            <h1 className="text-4xl font-bold text-white mb-6">
              对Google NotebookLM深度体验的报告
            </h1>
            
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#00FFC2]" />
                2024年1月20日
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#00FFC2]" />
                15分钟阅读
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-[#00FFC2]" />
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
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                在AI 2.0时代，我们正经历一个关键的范式转型：从追求模型的"无限创造力"转向追求应用的"绝对可靠性"。
                作为深度AI使用用户，我正寻找能有效解决"信息过载"和"知识孤岛"两大痛点的解决方案。
                Google NotebookLM的出现，正是为了应对这一挑战。
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-[#00FFC2]" />
              一、引言
            </h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">1.1 背景与目标</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              在AI 2.0时代，我们正经历一个关键的范式转型：从追求模型的"无限创造力"转向追求应用的"绝对可靠性"。
              通用型AI（如ChatGPT）在开放域对话中表现出色，但其"幻觉"问题使其在专业的知识工作中屡屡碰壁。
              我在我的专业学习中也是深度AI使用用户，正寻找能有效解决"信息过载"和"知识孤岛"两大痛点的解决方案。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              国内推出了秘塔，而谷歌推出了NotebookLM。Google NotebookLM的出现，正是为了应对这一挑战——
              它承诺将用户个人拥有的、可信的、杂乱无章的信息，转化为一个结构化、可对话的专属知识大脑。
              本文将尝试把个人体验视角与背后实现技术相结合。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">1.2 报告核心问题</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              本报告旨在回答以下几个关键体验问题：
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-[#00FFC2]/30 bg-black/60">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#00FFC2] mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    核心价值验证
                  </h4>
                  <p className="text-gray-300 text-sm">
                    "源于个人信息"的模式，是否真的能有效杜绝信息幻觉，建立用户信任？
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#00FFC2]/30 bg-black/60">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#00FFC2] mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    创新功能评估
                  </h4>
                  <p className="text-gray-300 text-sm">
                    "音频总览"、"思维导图"等特色功能，是噱头还是能切实提升效率的"游戏规则改变者"？
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#00FFC2]/30 bg-black/60">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#00FFC2] mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    技术瓶颈探查
                  </h4>
                  <p className="text-gray-300 text-sm">
                    宣传的百万级Token上下文窗口，在真实使用场景中的表现如何？是否存在未被提及的限制？
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#00FFC2]/30 bg-black/60">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-[#00FFC2] mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    生态定位分析
                  </h4>
                  <p className="text-gray-300 text-sm">
                    NotebookLM在现有的笔记软件（Notion, Obsidian）和AI工具（Perplexity）生态中，应该扮演何种角色？
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6 text-[#00FFC2]" />
              二、产品概览
            </h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">2.1 功能模块</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              NotebookLM的核心功能可归纳为四大模块：
            </p>

            <div className="space-y-6 mb-8">
              <Card className="border-l-4 border-l-[#00FFC2] bg-black/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">📁 信源管理 (Source Management)</h4>
                  <p className="text-gray-300">
                    支持多种格式（PDF, Docs, Slides, URL, YouTube, Audio, Text）的信息输入，构建项目专属的知识库。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00FFC2] bg-black/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">💬 对话式问答 (Conversational Q&A)</h4>
                  <p className="text-gray-300 mb-3">
                    基于RAG（检索增强生成）的核心交互界面，允许用户与自己的信源进行自然语言对话。
                    核心优势在于他的跨文档信息合成能力。但要注意的是问答的输出质量与提问问题的准确与具体性直接相关。
                  </p>
                  <p className="text-gray-300">
                    为了帮助用户入门，系统会根据上传的文档内容自动生成建议性问题。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00FFC2] bg-black/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">🧠 知识合成 (Knowledge Synthesis)</h4>
                  <p className="text-gray-300 mb-3">
                    "笔记本指南"(Notebook Guide) 中的一键式分析工具，能将原始信息转化为结构化洞察，
                    如摘要、FAQ、时间轴、思维导图。
                  </p>
                  <div className="bg-[#00FFC2]/10 border border-[#00FFC2]/30 rounded-lg p-4 mt-4">
                    <h5 className="font-semibold text-[#00FFC2] mb-2">🎧 音频总览亮点功能</h5>
                    <p className="text-gray-300 text-sm">
                      值得惊喜的是NotebookLM提供了音频总览（Audio Overview）的功能，这个功能的核心在于将信源的内容转换成一场由两个AI主播进行播客式的深度讨论。
                      他们的创新点在于这个播客不是简单的文本转语音，而是一场动态互动的材料解读。
                      例如在AI主播之间会互相提问、补充和总结，尽可能模拟真实播客的环境。
                      此外我们作为用户也能加入他们的对话中，形成3人的播客。
                      这个功能在通勤等多任务场景下极大满足了听觉型学习者的需求。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#00FFC2] bg-black/60">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-3">🤝 分享与协作 (Sharing & Collaboration)</h4>
                  <p className="text-gray-300">
                    支持将笔记本以公开链接或邮件形式分享给他人。
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 技术架构简述</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              从产品体验反推，其技术架构清晰地围绕RAG展开：
            </p>

            <div className="bg-black/60 border border-[#00FFC2]/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-white mb-4">核心工作流图示：</h4>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">用户上传信源</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded">系统进行向量化索引</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">用户提问</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded">系统检索相关文本片段</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded">发送给Gemini模型</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">生成答案+引用</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded">呈现给用户</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-red-500" />
              三、笔记体验的缺失劣势
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              虽然这款AI应用产品带有Notebook的字眼，但和我们普遍认知的笔记应用有些差别。
              对于习惯了Notion、Evernote等工具的用户来说，NotebookLM在笔记的功能上远比不上：
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-red-500/30 bg-red-900/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-900 mb-2">❌ 无"白板"式编辑器</h4>
                  <p className="text-red-800 text-sm">
                    用户无法像在其他笔记软件中那样，直接打开应用开始记录一个全新的、空白的笔记。
                    其工作流是严格以"信源"为中心的。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-red-500/30 bg-red-900/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-900 mb-2">❌ 格式化功能简陋</h4>
                  <p className="text-red-800 text-sm">
                    内置的笔记编辑器功能非常基础，缺乏富文本或强大的Markdown支持。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-red-500/30 bg-red-900/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-900 mb-2">❌ 无网页剪藏器</h4>
                  <p className="text-red-800 text-sm">
                    作为现代笔记工具标配的浏览器扩展，NotebookLM并未提供。
                    用户需要手动复制网址或文本才能将其作为信源。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-red-500/30 bg-red-900/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-900 mb-2">❌ 组织能力有限</h4>
                  <p className="text-red-800 text-sm">
                    它缺乏Notion或Obsidian等工具中常见的复杂层级结构、强大的标签系统或数据库视图等高级组织功能。
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ThumbsUp className="h-6 w-6 text-green-500" />
              四、优点与局限
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-500/30 bg-green-900/20">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    主要优点
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <div>
                        <strong>范式创新，建立信任：</strong> "源于个人信息"+"内联引文"的设计，从根本上解决了AI的信任问题
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <div>
                        <strong>信息消费方式的革命：</strong> 将枯燥的文档转化为生动的播客式讨论，是本次体验中最大的"惊喜时刻"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <div>
                        <strong>无缝的信息聚合体验：</strong> 支持极其广泛的信源格式，并与Google Drive深度集成
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <div>
                        <strong>强大的结构化洞察生成器：</strong> 一键生成的思维导图、时间轴、FAQ等功能，是极其实用的"效率倍增器"
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/30 bg-red-900/20">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    主要局限与不足
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <div>
                        <strong>【致命缺陷】上下文窗口悖论：</strong> 对于超长内容，会出现假装在读，实际跳读的问题
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <div>
                        <strong>"笔记本"名不副实：</strong> 它是一个强大的"研究分析工具"或"精加工厂"，而不是一个"笔记记录工具"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <div>
                        <strong>黑箱操作，缺乏控制：</strong> 用户无法对AI的行为进行任何干预或定制
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              五、应用建议与改进方向
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 最佳实践指南</h3>
            
            <div className="space-y-4 mb-8">
              <Card className="border-purple-500/30 bg-slate-700/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 定位为"精加工工具"</h4>
                  <p className="text-blue-800 text-sm">
                    不要用它进行开放式的信息搜集。最佳工作流是：使用Gemini Deep Research进行初步研究，
                    筛选出高质量、可信的信源，然后将其导入NotebookLM进行深度的、闭环的合成与分析。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-500/30 bg-green-900/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-900 mb-2">🍽️ "少食多餐"原则</h4>
                  <p className="text-green-800 text-sm">
                    为规避上下文窗口问题，应为每个具体项目创建一个独立的笔记本，并保持信源的高度相关和精简。
                    避免将一本几百页的书和几十篇不相关的文章混在一个笔记本里。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">📌 善用"固定为笔记"</h4>
                  <p className="text-purple-800 text-sm">
                    AI的回答是"易逝"的。对于任何有价值的洞察，必须立刻点击"固定到笔记"，
                    将其沉淀下来，否则刷新后即消失。
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 产品改进建议</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">短期</span>
                  急需解决的问题
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>修复上下文窗口悖论：</strong>必须确保AI能够处理用户上传的全部内容</li>
                  <li><strong>增加透明度：</strong>为用户提供一个清晰的可视化提示，告知他们当前AI的"注意力"集中在文档的哪些部分</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">中期</span>
                  功能完善
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>推出浏览器插件：</strong>这是现代知识管理工具的标配，能极大提升信息收集效率</li>
                  <li><strong>增强笔记编辑器：</strong>引入基础的Markdown支持和更丰富的格式化选项</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">长期</span>
                  生态整合
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>与Google Workspace深度集成：</strong>在Google Docs的侧边栏直接唤起NotebookLM，对当前文档进行分析</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-purple-500" />
              六、结论
            </h2>
            
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 mb-8">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  经过长时间的深度体验后，我的结论是：Google NotebookLM的想法很有前瞻性，
                  但是为了竞争只好在仅完成核心功能的情况下便投入到市场上的产品。
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  其"源于个人信息"的理念和"音频总览"等创新功能，为我们展示了个性化知识工作的未来工作情景。
                  它将用户从被动接受信息转变成对知识主动提出疑问。与通用型AI工具如ChatGPT相比的话，
                  ChatGPT可以提供宽泛、创意但可能有"幻觉"的回答，而NotebookLM提供的是可靠且可验证的垂直领域的回答。
                </p>
                
                <div className="bg-slate-700/70 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">💡 使用建议</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>如果是学生、研究员或内容创作者，</strong>需要对少量、高度聚焦的文献进行深度分析，
                    NotebookLM是目前市面上最好的工具之一。可以先用当前强大的大模型进行前期筛选后，再用这款工具进行深度分析。</p>
                    
                    <p><strong>从战略上看，</strong>NotebookLM是Google AI能力嵌入专业工作流的重要一步。
                    我认为它的终极目标是与Workspace和Cloud生态深度绑定，组成属于Google自己的生态系统。</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["NotebookLM", "Google", "知识管理", "RAG", "音频总览", "AI工具评测", "产品分析"].map((tag) => (
                <Badge key={tag} variant="outline" className="border-purple-400/50 text-purple-600 hover:bg-purple-50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold mb-6">评论 (45)</h3>
            
            <div className="mb-6">
              <Textarea
                placeholder="分享你的想法..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mb-4"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                发表评论
              </Button>
            </div>

            {/* Sample Comments */}
            <div className="space-y-4">
              <div className="border-l-4 border-l-blue-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">张同学</span>
                  <span className="text-sm text-gray-500">2小时前</span>
                </div>
                <p className="text-gray-700">
                  音频总览功能确实很惊艳！我用它来处理学术论文，通勤路上听播客式的总结，效率提升很明显。
                  不过上下文窗口的问题确实存在，希望Google能尽快修复。
                </p>
              </div>
              
              <div className="border-l-4 border-l-green-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">李研究员</span>
                  <span className="text-sm text-gray-500">5小时前</span>
                </div>
                <p className="text-gray-700">
                  作为一个重度Notion用户，我觉得NotebookLM更适合作为研究分析的补充工具，而不是替代品。
                  它的RAG能力确实强大，但笔记功能太弱了。
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Button variant="outline" asChild>
              <Link href="/explorations/gpt4o-robot-planning">
                <ArrowLeft className="mr-2 h-4 w-4" />
                上一篇：GPT-4o在机器人任务规划中的应用
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/explorations/embodied-ai-design-principles">
                下一篇：具身智能产品设计的三个原则
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}