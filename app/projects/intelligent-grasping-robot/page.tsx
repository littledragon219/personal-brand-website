"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Award, Target, Lightbulb, TrendingUp, Users, Calendar, MapPin, Briefcase } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { BackgroundEffects } from "@/components/background-effects"

export default function IntelligentGraspingRobotPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8 text-purple-300 hover:text-white hover:bg-purple-500/20" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> 返回项目集
              </Link>
            </Button>

            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                智能无损抓取机械臂
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                融合深度学习、机器视觉与精密控制的下一代工业自动化解决方案——实现92.5%抓取成功率，引领智能制造新时代
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">JOIN</div>
                <div className="text-gray-300 text-sm">方案设计负责人</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">92.5%</div>
                <div className="text-gray-300 text-sm">抓取成功率提升</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">提效</div>
                <div className="text-gray-300 text-sm">大幅生产效率提升</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">创新</div>
                <div className="text-gray-300 text-sm">技术突破与应用</div>
              </div>
            </div>

            {/* Project Image */}
            <div className="mb-16">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-1">
                <Image
                  src="/intelligent-grasping-robot.png"
                  alt="智能无损抓取机械臂"
                  width={1200}
                  height={600}
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Project Info Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* 项目信息 */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-purple-400" />
                    项目信息
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300">项目周期</span>
                    <span className="text-white ml-auto">2022年3月 - 2022年8月</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">团队规模</span>
                    <span className="text-white ml-auto">JOIN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">项目角色</span>
                    <span className="text-white ml-auto">方案设计负责人</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-orange-400" />
                    <span className="text-gray-300">成果指标</span>
                    <span className="text-white ml-auto">92.5%抓取成功率</span>
                  </div>
                </CardContent>
              </Card>

              {/* 项目背景 */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">项目背景</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <p className="text-sm leading-relaxed">
                    传统工业机械臂在面对复杂、易碎物体时存在抓取成功率低、易损坏等问题，严重制约了自动化生产线的效率和可靠性。
                  </p>
                  <p className="text-sm leading-relaxed">
                    市场急需一种能够智能识别物体特性、精确控制抓取力度的无损抓取解决方案，以满足精密制造和高价值产品生产的需求。
                  </p>
                  <p className="text-sm leading-relaxed">
                    本项目旨在通过深度学习和多模态感知技术，开发新一代智能无损抓取机械臂系统。
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 核心亮点 */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-16">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-purple-400" />
                  核心亮点
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="text-white font-semibold">精准识别</h4>
                    </div>
                    <p className="text-gray-300 text-sm text-center">
                      基于深度学习的物体识别算法，能够准确识别不同形状、材质的物体，识别准确率达98%以上
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <h4 className="text-white font-semibold">智能控制</h4>
                    </div>
                    <p className="text-gray-300 text-sm text-center">
                      多模态感知融合技术，结合视觉和力觉信息，实现自适应抓取策略调整
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h4 className="text-white font-semibold">无损操作</h4>
                    </div>
                    <p className="text-gray-300 text-sm text-center">
                      精密力控制算法确保对易碎物体的安全操作，物体损坏率降低至0.1%以下
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 技术方案 */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-16">
              <CardHeader>
                <CardTitle className="text-white">技术方案</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* 方案架构 */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">整体架构设计</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                        <div className="text-center mb-3">
                          <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <span className="text-xl">👁️</span>
                          </div>
                          <h5 className="text-white font-medium">感知层</h5>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• RGB-D相机视觉感知</li>
                          <li>• 六维力传感器</li>
                          <li>• 多模态数据融合</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                        <div className="text-center mb-3">
                          <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <span className="text-xl">🧠</span>
                          </div>
                          <h5 className="text-white font-medium">决策层</h5>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• 深度学习算法</li>
                          <li>• 强化学习策略</li>
                          <li>• 抓取规划优化</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                        <div className="text-center mb-3">
                          <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <span className="text-xl">🦾</span>
                          </div>
                          <h5 className="text-white font-medium">执行层</h5>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• 精密力控制</li>
                          <li>• 轨迹跟踪控制</li>
                          <li>• 安全保护机制</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* 关键技术 */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">关键技术突破</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-purple-400 font-medium mb-2">深度学习物体识别</h5>
                        <p className="text-gray-300 text-sm">基于改进的YOLO算法，实现复杂环境下的高精度物体检测与分类</p>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-blue-400 font-medium mb-2">多模态感知融合</h5>
                        <p className="text-gray-300 text-sm">融合RGB-D视觉和力觉信息，构建完整的环境感知体系</p>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-green-400 font-medium mb-2">自适应控制算法</h5>
                        <p className="text-gray-300 text-sm">基于强化学习的控制策略，适应不同物体的材质和形状特性</p>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-orange-400 font-medium mb-2">精密力控制</h5>
                        <p className="text-gray-300 text-sm">毫牛级力控制精度，确保对易碎物体的安全无损操作</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* 实施过程 */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-16">
              <CardHeader>
                <CardTitle className="text-white">实施过程</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-purple-400">1</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">需求分析</h4>
                      <p className="text-gray-400 text-sm">深入调研工业现场需求，明确技术指标和性能要求</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-blue-400">2</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">方案设计</h4>
                      <p className="text-gray-400 text-sm">设计多模态感知融合架构，制定技术实现路线</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-green-400">3</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">算法开发</h4>
                      <p className="text-gray-400 text-sm">开发深度学习算法，训练模型并优化控制策略</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-orange-400">4</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">系统集成</h4>
                      <p className="text-gray-400 text-sm">硬件集成与软件部署，系统调试与性能优化</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 成果展示 */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-16">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  成果展示
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* 核心指标 */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">核心性能指标</h4>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center bg-purple-900/20 rounded-lg p-4">
                        <div className="text-4xl font-bold text-purple-400 mb-2">92.5%</div>
                        <div className="text-gray-300 text-sm">抓取成功率</div>
                        <div className="text-gray-400 text-xs mt-1">较传统方案提升35%</div>
                      </div>
                      <div className="text-center bg-blue-900/20 rounded-lg p-4">
                        <div className="text-4xl font-bold text-blue-400 mb-2">1.8s</div>
                        <div className="text-gray-300 text-sm">平均决策时间</div>
                        <div className="text-gray-400 text-xs mt-1">实时响应能力</div>
                      </div>
                      <div className="text-center bg-green-900/20 rounded-lg p-4">
                        <div className="text-4xl font-bold text-green-400 mb-2">0.05N</div>
                        <div className="text-gray-300 text-sm">力控制精度</div>
                        <div className="text-gray-400 text-xs mt-1">毫牛级精密控制</div>
                      </div>
                      <div className="text-center bg-orange-900/20 rounded-lg p-4">
                        <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
                        <div className="text-gray-300 text-sm">物体识别准确率</div>
                        <div className="text-gray-400 text-xs mt-1">复杂环境适应</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 应用效果 */}
                  <div>
                    <h4 className="text-white font-semibold mb-4">实际应用效果</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-purple-400 font-medium mb-2">生产效率提升</h5>
                        <p className="text-gray-300 text-sm mb-2">相比传统人工操作，生产效率提升40%，24小时连续作业能力</p>
                        <div className="text-2xl font-bold text-purple-400">+40%</div>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-blue-400 font-medium mb-2">质量稳定性</h5>
                        <p className="text-gray-300 text-sm mb-2">产品损坏率降低至0.1%以下，质量一致性显著提升</p>
                        <div className="text-2xl font-bold text-blue-400">-99%</div>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h5 className="text-green-400 font-medium mb-2">成本节约</h5>
                        <p className="text-gray-300 text-sm mb-2">减少人工成本和产品损耗，年节约成本超过200万元</p>
                        <div className="text-2xl font-bold text-green-400">200万+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 技术栈与硬件配置 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">技术栈</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Python + PyTorch</span>
                      <span className="text-gray-500 text-sm ml-auto">深度学习框架</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">OpenCV + PCL</span>
                      <span className="text-gray-500 text-sm ml-auto">计算机视觉</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">ROS + Gazebo</span>
                      <span className="text-gray-500 text-sm ml-auto">机器人仿真</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">MATLAB Simulink</span>
                      <span className="text-gray-500 text-sm ml-auto">控制算法</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">硬件平台</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">UR5e机械臂</span>
                      <span className="text-gray-500 text-sm ml-auto">6自由度</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">RealSense D435i</span>
                      <span className="text-gray-500 text-sm ml-auto">RGB-D相机</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">ATI力传感器</span>
                      <span className="text-gray-500 text-sm ml-auto">六维力觉</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">NVIDIA RTX 3080</span>
                      <span className="text-gray-500 text-sm ml-auto">GPU计算</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 项目总结 */}
            <Card className="bg-slate-800/50 border-purple-500/30 mb-16">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  项目总结
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/30">
                  <h4 className="text-white font-semibold mb-3">核心贡献</h4>
                  <p className="text-gray-300 leading-relaxed">
                    本项目成功开发了基于深度学习的智能无损抓取机械臂系统，实现了92.5%的抓取成功率，
                    相比传统方案提升35%。通过多模态感知融合技术，系统能够适应复杂工业环境，
                    为智能制造提供了可靠的自动化解决方案。
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                    <div className="text-purple-400 font-semibold mb-1">技术创新</div>
                    <div className="text-gray-300 text-sm">多模态感知融合算法</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                    <div className="text-blue-400 font-semibold mb-1">产业价值</div>
                    <div className="text-gray-300 text-sm">年节约成本200万+</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                    <div className="text-green-400 font-semibold mb-1">社会影响</div>
                    <div className="text-gray-300 text-sm">推动智能制造发展</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 联系方式 */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-slate-800/50 rounded-full px-8 py-4 border border-purple-500/30">
                <span className="text-gray-300">了解更多项目详情</span>
                <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  联系我
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
