import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">关于我</h1>
            <p className="text-xl text-gray-600">
              从传统文化到前沿科技，从团队协作到技术创新的探索之旅
            </p>
          </div>

          {/* My Journey */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我的旅程</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🐉</span>
                    </div>
                    <div>
                      <CardTitle>传统文化的具身体验</CardTitle>
                      <CardDescription>2024年第十六届中国大学生舞龙舞狮锦标赛全国季军</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    作为部长/学生教练/龙珠，我带领团队坚持每周三天早上6点30分训练，将传统文化与现代体育竞技精神结合。
                    在全国42支参赛队伍中脱颖而出，勇夺季军。这体现了理论与实践、身体与心智结合的"具身"精神。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">团队协作</Badge>
                    <Badge variant="outline">传统文化</Badge>
                    <Badge variant="outline">领导力</Badge>
                    <Badge variant="outline">体育竞技</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <CardTitle>技术创新的突破</CardTitle>
                      <CardDescription>智能无损抓取机械臂项目负责人</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    研发"触觉感知-柔性控制-特征迁移"三位一体系统，实现0.01N力控分辨率的精准控制。
                    这个项目让我真正理解了什么是"具身智能"——不仅仅是算法的胜利，
                    更是物理世界与数字智能完美融合的艺术。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">力控算法</Badge>
                    <Badge variant="outline">原型网络</Badge>
                    <Badge variant="outline">零样本推理</Badge>
                    <Badge variant="outline">产品思维</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <CardTitle>多元化实践经历</CardTitle>
                      <CardDescription>从人力资源到跨境电商的全方位探索</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    在CED Organic&Food担任人力资源部业务助理，在美珍香从事食品销售，
                    在上海恒数科技担任项目经理助理。这些多元化的实习经历让我深入理解用户需求，
                    学会了如何将技术与商业价值结合。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">人力资源</Badge>
                    <Badge variant="outline">销售经验</Badge>
                    <Badge variant="outline">项目管理</Badge>
                    <Badge variant="outline">跨境电商</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <CardTitle>竞赛中的成长</CardTitle>
                      <CardDescription>从机器人竞赛到工创大赛的全面发展</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    在第六届探索者杯机器人竞赛中负责电路搭建与Arduino算法开发，获得校赛二等奖。
                    在2025年工创大赛中作为决策手，与金融、工商管理专业同学组成跨专业团队，
                    在42队中脱颖而出进入校赛决赛。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Arduino开发</Badge>
                    <Badge variant="outline">电路设计</Badge>
                    <Badge variant="outline">商业决策</Badge>
                    <Badge variant="outline">跨专业合作</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* My Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我的理念</h2>
            
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none">
              <CardContent className="p-8">
                <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                  "我相信，下一个时代的伟大产品将诞生于物理与数字的交汇处。从舞龙舞狮的团队协作到智能机械臂的算法开发，
                  我始终在探索'具身智能'的无限可能。我的热情在于深入理解'物'的本质，并为其注入'智'的灵魂。
                  我痴迷于探索前沿的AI工具，并动手将它们应用于真实的物理场景，去解决具体而有挑战性的问题。
                  我的目标是：创造出真正理解并赋能于人的智能体。"
                </blockquote>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle>团队协作精神</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    从舞龙舞狮的默契配合到跨专业团队的协作，我深知团队力量的重要性。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>技术与商业结合</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    技术应该服务于实际需求，每一个功能都应该有明确的用户价值和商业意义。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌉</span>
                  </div>
                  <CardTitle>具身智能理念</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    真正的智能不仅存在于算法中，更体现在与物理世界的深度交互和融合。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">技能清单</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    产品与管理
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">需求分析</Badge>
                    <Badge variant="outline">用户研究</Badge>
                    <Badge variant="outline">项目管理</Badge>
                    <Badge variant="outline">团队协作</Badge>
                    <Badge variant="outline">商业决策</Badge>
                    <Badge variant="outline">跨部门合作</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">⚙️</span>
                    技术与工程
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">深度学习</Badge>
                    <Badge variant="outline">ROS</Badge>
                    <Badge variant="outline">Arduino</Badge>
                    <Badge variant="outline">传感器融合</Badge>
                    <Badge variant="outline">力控算法</Badge>
                    <Badge variant="outline">电路设计</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🤖</span>
                    AI与机器学习
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">CNN/LSTM</Badge>
                    <Badge variant="outline">自注意力机制</Badge>
                    <Badge variant="outline">原型网络</Badge>
                    <Badge variant="outline">零样本学习</Badge>
                    <Badge variant="outline">域适应</Badge>
                    <Badge variant="outline">故障诊断</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">主要成就</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800">🏆 竞赛获奖</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• 2024年第十六届中国大学生舞龙舞狮锦标赛全国季军</li>
                    <li>• 2025年大学生创新大赛校赛银奖</li>
                    <li>• 第六届探索者杯机器人竞赛校赛二等奖</li>
                    <li>• 2025年工创大赛虚拟仿真企业运营大赛校赛决赛</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">💡 技术创新</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-700">
                    <li>• 智能无损抓取机械臂：0.01N力控分辨率</li>
                    <li>• 层级化原型网络设计与实现</li>
                    <li>• 零样本推理在机器人抓取中的应用</li>
                    <li>• 多种深度学习故障诊断算法开发</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                想了解更多？
              </h3>
              <p className="text-gray-600">
                查看我的项目作品，或者直接与我开始对话
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/projects">
                    查看我的项目 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    联系我
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
