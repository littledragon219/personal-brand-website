import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Target, Lightbulb, Rocket, Award } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 bg-[#1A1A2E]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 text-white hover:bg-[#00FFC2]/20 hover:text-[#00FFC2]" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回首页
            </Link>
          </Button>

          {/* Blog Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-[#00FFC2] text-black">博客</Badge>
              <Badge variant="outline" className="border-[#00FFC2]/40 text-[#00FFC2]">职业转型</Badge>
              <Badge variant="outline" className="border-[#00FFC2]/40 text-[#00FFC2]">AI产品经理</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              AI2.0产品经理课程：从机械蓝图到AI产品路线图的跨越
            </h1>
            
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#00FFC2]" />
                <span>littledragon</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#00FFC2]" />
                <span>2025年1月</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#00FFC2]" />
                <span>8分钟阅读</span>
              </div>
            </div>

            <p className="text-xl text-white leading-relaxed">
              这次课程是我走向职业路径上的一个关键锚点，它系统性地将我从熟悉的机械工程领域，引入了充满挑战与机遇的AI产品世界。这不仅仅是一次知识的学习，更是一次思维模式的彻底转变与迭代——从严谨的物理系统，到构建满足复杂人性需求的数字产品。
            </p>
          </div>

          {/* Course Overview */}
          <section className="mb-12">
            <Card className="bg-black/60 border-[#00FFC2]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-[#00FFC2]" />
                  课程核心价值
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4">
                  课程的学习并非纸上谈兵，我将所学理论投入到两个与自身息息相关的实战项目中，形成了理论到实践的闭环。
                </p>
                <div className="bg-black/40 border border-[#00FFC2]/30 rounded-lg p-6">
                  <h4 className="font-semibold text-[#00FFC2] mb-3">转型亮点</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00FFC2] rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-medium text-white">思维模式转变</h5>
                        <p className="text-gray-300 text-sm">从物理系统设计到数字产品构建</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00FFC2] rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-medium text-white">理论实践闭环</h5>
                        <p className="text-gray-300 text-sm">两大实战项目验证学习成果</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Unique Perspective */}
          <section className="mb-12">
            <Card className="bg-black/60 border-[#00FFC2]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5 text-[#00FFC2]" />
                  ⚙️ 理工思维的转译：我的独特视角
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-6">
                  作为一名工科生，我习惯于用系统化、可量化的方式去拆解问题。这段经历让我发现，机械工程的底层逻辑在AI产品设计中同样适用，并能形成独特的优势。
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#00FFC2] pl-6">
                    <h4 className="font-semibold text-white mb-2">系统思维与架构能力</h4>
                    <p className="text-gray-300 leading-relaxed">
                      机械设计中对整体结构、部件协同和公差配合的重视，让我能更快地理解AI产品的技术架构、数据流和模块间的依赖关系，从而绘制出更严谨的用户流程和产品架构图。
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[#00FFC2] pl-6">
                    <h4 className="font-semibold text-white mb-2">结构化解决问题</h4>
                    <p className="text-gray-300 leading-relaxed">
                      面对模糊的用户需求，我运用类似"SWOT分析"的逻辑，层层分析，定位核心痛点，确保PRD中的每一个功能点都服务于最终目标。
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[#00FFC2] pl-6">
                    <h4 className="font-semibold text-white mb-2">对"约束条件"的敬畏</h4>
                    <p className="text-gray-300 leading-relaxed">
                      机械世界里的一切都建立在物理定律和材料性能的约束之上。这种思维让我能更深刻地理解AI大模型的"能力边界"和"技术局限性"，在产品设计时能更务实地平衡用户需求与技术可行性。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <Card className="bg-black/60 border-[#00FFC2]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Rocket className="h-5 w-5 text-[#00FFC2]" />
                  🚀 实践产出：两大项目落地我的产品思考
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-6">
                  我将课程所学，分别在"解决实际痛点"和"探索个人品牌"两个维度上进行了深度实践，完成了两个定位清晰的AI产品。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-[#00FFC2]/30 bg-black/40">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#00FFC2]">项目一：FutureU</CardTitle>
                      <CardDescription className="text-gray-300">问题驱动型产品</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        这是一个典型的问题驱动型产品。我将在课程中学到的用户研究、痛点分析和PRD撰写能力应用其中，精准定位了AI产品经理求职者在面试准备中的核心困难。最终，我主导设计了一个提供高效、个性化模拟面试服务的解决方案。
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#00FFC2]/30 bg-black/40">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#00FFC2]">项目二：个人品牌网站</CardTitle>
                      <CardDescription className="text-gray-300">愿景驱动型产品</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        这是一个愿景驱动型产品，是我个人产品理念的集中表达。我将课程中学到的技术栈作为基础，并进一步探索了React、Next.js、Tailwind CSS等技术，旨在打造从静态简历转变成动态的、有沉浸感的交互体验。
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Insights */}
          <section className="mb-12">
            <Card className="bg-black/60 border-[#00FFC2]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Award className="h-5 w-5 text-[#00FFC2]" />
                  💡 核心收获与展望
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    通过 <strong className="text-[#00FFC2]">AI2.0课程</strong> 的理论输入，并结合 <strong className="text-[#00FFC2]">FutureU</strong> 和 <strong className="text-[#00FFC2]">个人网站</strong> 这两个项目的实践输出，我真正完成了从0到1的闭环。我不仅掌握了AI产品的开发全流程，更重要的是，我证明了自己有能力：
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-[#00FFC2]/30 rounded-lg p-4">
                      <h4 className="font-semibold text-[#00FFC2] mb-2">系统性解决问题</h4>
                      <p className="text-gray-300 text-sm">通过FutureU项目体现的真实用户问题解决能力</p>
                    </div>
                    
                    <div className="bg-black/40 border border-[#00FFC2]/30 rounded-lg p-4">
                      <h4 className="font-semibold text-[#00FFC2] mb-2">创造性表达理念</h4>
                      <p className="text-gray-300 text-sm">通过个人网站展现的抽象产品理念表达能力</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-[#00FFC2]/30 rounded-lg p-6">
                    <h4 className="font-semibold text-[#00FFC2] mb-3">未来展望</h4>
                    <p className="text-gray-300 leading-relaxed">
                      这段经历让我坚信，我的机械工程背景并非单一赛道，而是可以让我跨行时拥有洞察和解决问题的能力。它让我能够更稳健地走在通往优秀AI产品经理的道路上，用结构化的理性思维，去打造富有人文温度的智能产品。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                想了解更多我的产品思考？
              </h3>
              <p className="text-gray-300">
                欢迎查看我的项目作品或与我深入交流
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#00FFC2] text-black hover:bg-[#00FFC2]/80" asChild>
                  <Link href="/projects">
                    查看我的项目
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#00FFC2] text-[#00FFC2] hover:bg-[#00FFC2]/20" asChild>
                  <Link href="/contact">
                    联系我交流
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}