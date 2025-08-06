import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Award, Target, Lightbulb, TrendingUp } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function IntelligentGraspingRobotPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> 返回项目集
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-blue-600">核心项目</Badge>
              <Badge variant="outline">2025年大学生创新大赛银奖</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              智能无损抓取机械臂
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              "触觉感知-柔性控制-特征迁移"三位一体系统，实现0.01N力控分辨率的精准无损抓取
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">0.01N</div>
                <div className="text-sm text-gray-600">力控分辨率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.5%</div>
                <div className="text-sm text-gray-600">无损抓取成功率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">银奖</div>
                <div className="text-sm text-gray-600">大学生创新大赛</div>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="智能无损抓取机械臂演示"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Overview */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  项目概述
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">我的角色</h4>
                    <p className="text-gray-600">项目负责人 (智能算法开发设计)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">项目周期</h4>
                    <p className="text-gray-600">2024年3月 - 2025年1月</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">项目背景</h4>
                  <p className="text-gray-600">
                    研发"触觉感知-柔性控制-特征迁移"三位一体系统，配合树莓派主控与舵机协同，
                    开发动态闭环力控算法实时感知物体，以0.01N的力控分辨率实现精准控制达到智能无损抓取。
                    该项目旨在解决传统工业机械臂在处理易损物体时的技术难题。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">力控算法</Badge>
                    <Badge variant="outline">原型网络</Badge>
                    <Badge variant="outline">零样本推理</Badge>
                    <Badge variant="outline">树莓派</Badge>
                    <Badge variant="outline">ROS</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">传感器融合</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Problem Definition */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-orange-600" />
                  问题定义
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    传统工业机械臂在面对水果等易损、形态不一的物体时，极易造成损伤，泛化能力差。
                    核心挑战在于如何让机械臂像人手一样，既"心中有数"（知道抓的是什么），
                    又"手下有谱"（知道用多大力），并能快速适应未知物体。
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">核心痛点</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• 传统机械臂力控精度不足，容易损坏易碎物品</li>
                      <li>• 对不同形状、硬度的物体适应性差</li>
                      <li>• 缺乏智能感知能力，无法实时调整抓取策略</li>
                      <li>• 泛化能力有限，面对新物体时表现不佳</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  解决方案与实现过程
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-800">感知层</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-700 text-sm">
                          搭建了包含力控传感器的硬件系统，配合树莓派主控，
                          开发动态闭环力控算法，实时感知物体形变。
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-800">决策层</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700 text-sm">
                          设计了创新的"层级化原型网络"，包含两级分类：
                          第一级进行"域分类"，第二级在域内进行"子域分类"。
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-800">泛化层</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-purple-700 text-sm">
                          结合"零样本推理"和"少样本微调"双模式，
                          对于新水果可直接进行零样本识别。
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">技术创新点</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">🔧 硬件创新</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 高精度力控传感器集成</li>
                          <li>• 树莓派主控系统优化</li>
                          <li>• 舵机协同控制算法</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">🧠 算法创新</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 层级化原型网络设计</li>
                          <li>• 零样本推理机制</li>
                          <li>• 动态闭环力控算法</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Results */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  成果与反思
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">量化成果</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-green-800">力控分辨率</span>
                          <span className="font-bold text-green-600">0.01N</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-blue-800">无损抓取成功率</span>
                          <span className="font-bold text-blue-600">99.5%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                          <span className="text-purple-800">获奖情况</span>
                          <span className="font-bold text-purple-600">校赛银奖</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">项目影响</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>实现了对多种水果的智能、无损抓取</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>相关技术已申请发明专利</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>为工业自动化提供了新的技术路径</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>验证了具身智能在实际应用中的可行性</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-3">我的反思</h4>
                    <p className="text-blue-700 leading-relaxed">
                      这次经历让我深刻体会到，一个成功的智能产品是算法、硬件和用户场景的深度耦合。
                      作为项目负责人，我不仅要设计算法，更要思考成本、可用性和未来的扩展性，
                      这正是我对AI产品经理角色的初步探索。从技术实现到产品思维的转变，
                      让我更加坚定了在具身智能领域深耕的决心。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关项目</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">风力发电机故障诊断</CardTitle>
                  <CardDescription>基于深度学习的设备健康监测</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    采用自注意力机制和LSTM算法对振动信号进行分析，
                    结合SARIMA模型预测故障时间。
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/wind-turbine-diagnosis">
                      查看详情 <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">深度残差学习故障诊断</CardTitle>
                  <CardDescription>旋转机械故障智能识别</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    使用1D-CNN残差网络处理轴承数据，
                    通过跳跃连接解决梯度消失问题。
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects/residual-fault-diagnosis">
                      查看详情 <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                想了解更多技术细节？
              </h3>
              <p className="text-gray-600">
                欢迎与我深入交流项目的技术实现和产品思考
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    联系我讨论 <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> 查看代码
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
