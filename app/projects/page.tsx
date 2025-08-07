import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackgroundEffects } from "@/components/background-effects"

export default function ProjectsPage() {
  const projects = [
    {
      id: "intelligent-grasping-robot",
      title: "智能无损抓取机械臂",
      description: '"触觉感知-柔性控制-特征迁移"三位一体系统',
      image: "/placeholder.svg?height=300&width=400",
      tags: ["力控算法", "原型网络", "零样本推理", "树莓派", "ROS"],
      status: "核心项目",
      achievements: ["0.01N力控分辨率", "99.5%无损抓取率", "大学生创新大赛银奖"],
      role: "项目负责人 (智能算法开发设计)",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "wind-turbine-diagnosis",
      title: "风力发电机故障诊断",
      description: "基于深度学习的设备健康监测与寿命预测",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["自注意力机制", "LSTM", "SARIMA", "MLE", "大数据"],
      status: "技术项目",
      achievements: ["多模型融合", "高精度预测", "工业应用验证"],
      role: "算法开发设计",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "residual-fault-diagnosis",
      title: "深度残差学习故障诊断",
      description: "基于1D-CNN的旋转机械故障智能识别",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["1D-CNN", "残差网络", "轴承数据", "故障分类"],
      status: "学习项目",
      achievements: ["梯度问题解决", "高分类精度", "算法复现验证"],
      role: "算法设计与实现",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "domain-adaptation",
      title: "多层域适应故障诊断",
      description: "基于MMD的跨域故障诊断算法",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MMD", "域适应", "1D-CNN", "跨域泛化"],
      status: "研究项目",
      achievements: ["跨域泛化能力", "多内核MMD", "论文级精度"],
      role: "算法设计与实现",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ]

  const experiences = [
    {
      id: "dragon-dance",
      title: "舞龙舞狮锦标赛",
      description: "2024年第十六届中国大学生舞龙舞狮锦标赛全国季军",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["团队协作", "传统文化", "体育竞技", "领导力"],
      status: "文体活动",
      achievements: ["全国季军", "42支队伍竞争", "团队默契配合"],
      role: "部长/学生教练/龙珠",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      id: "robot-competition",
      title: "探索者杯机器人竞赛",
      description: "第六届探索者杯机器人竞赛校园行校赛二等奖",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Arduino", "传感器融合", "智能避障", "电路设计"],
      status: "技术竞赛",
      achievements: ["校赛二等奖", "智能避障算法", "多传感器融合"],
      role: "电路搭建与Arduino算法开发设计",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: "business-competition",
      title: "工创大赛",
      description: "2025年工创大赛虚拟仿真企业运营大赛入围校赛决赛",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["商业决策", "跨专业合作", "数据分析", "战略规划"],
      status: "商业竞赛",
      achievements: ["42队中入围决赛", "跨专业团队", "综合决策能力"],
      role: "决策手",
      gradient: "from-green-500/20 to-cyan-500/20"
    }
  ]

  const workExperiences = [
    {
      id: "hr-intern",
      title: "CED Organic&Food",
      description: "人力资源部业务助理实习经历",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["货物管理", "跨部门合作", "多语言交流", "业务流程"],
      status: "实习经历",
      achievements: ["日处理千件货品", "多部门协作", "分销商对接"],
      role: "人力资源部业务助理",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "sales-intern",
      title: "Bee Cheng Hiang 美珍香",
      description: "食品销售与原材料订购助理",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["食品采购", "销售技巧", "客户服务", "供应链管理"],
      status: "实习经历",
      achievements: ["原材料采购管理", "客户推销经验", "门店运营"],
      role: "食品销售与原材料订购助理",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: "pm-intern",
      title: "上海恒数科技",
      description: "项目经理助理兼系统开发实习",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["ERP系统", "项目管理", "跨境电商", "系统开发"],
      status: "实习经历",
      achievements: ["跨境电商方案调研", "ERP系统开发", "运营优化"],
      role: "项目经理助理兼系统开发实习",
      gradient: "from-teal-500/20 to-blue-500/20"
    }
  ]

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
                  <div className="bg-slate-900 rounded-full px-6 py-2">
                    <span className="text-purple-400 text-sm font-medium">我的作品集</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                  项目集
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  从技术创新到团队协作，从学术研究到商业实践的全方位探索
                </p>
              </div>
            </ScrollReveal>

            {/* Featured Project */}
            <ScrollReveal delay={200}>
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-white">核心项目</h2>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">重点推荐</Badge>
                </div>
                
                <Card className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group shadow-2xl">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="智能无损抓取机械臂"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                          智能无损抓取机械臂
                        </CardTitle>
                        <CardDescription className="text-base text-purple-300">
                          我的代表作品 - "触觉感知-柔性控制-特征迁移"三位一体系统
                        </CardDescription>
                      </CardHeader>
                      
                      <div className="space-y-4 mb-6">
                        <p className="text-gray-300">
                          研发"触觉感知-柔性控制-特征迁移"三位一体系统，配合树莓派主控与舵机协同，
                          开发动态闭环力控算法实时感知物体，以0.01N的力控分辨率实现精准控制达到智能无损抓取。
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-white">核心成果：</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• 0.01N的力控分辨率，92.5%无损抓取成功率</li>
                            <li>• 获得2025年大学生创新大赛校赛银奖</li>
                            <li>• 获得学院科研训练项目92分高分</li>
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {["力控算法", "原型网络", "零样本推理", "树莓派"].map((tag, index) => (
                            <Badge key={index} variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-200" asChild>
                          <Link href="/projects/intelligent-grasping-robot">
                            详细案例分析 <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-colors" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> 代码
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </section>
            </ScrollReveal>

            {/* Technical Projects */}
            <ScrollReveal delay={400}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">技术项目</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(1).map((project, index) => (
                    <ScrollReveal key={project.id} delay={600 + index * 100}>
                      <Card className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:shadow-xl">
                        <div className="relative h-48">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-slate-900/80 text-purple-300 border border-purple-400/50">
                              {project.status}
                            </Badge>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60`} />
                        </div>
                        
                        <CardContent className="p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-400">
                              {project.description}
                            </CardDescription>
                            <p className="text-xs text-purple-400 font-medium">{project.role}</p>
                          </CardHeader>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm text-white mb-2">主要成果：</h4>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {project.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex}>• {achievement}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex gap-2 pt-2">
                              <Button size="sm" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-colors" asChild>
                                <Link href={`/projects/${project.id}`}>
                                  查看详情 <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Competition Experiences */}
            <ScrollReveal delay={800}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">竞赛经历</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experiences.map((experience, index) => (
                    <ScrollReveal key={experience.id} delay={1000 + index * 100}>
                      <Card className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:shadow-xl">
                        <div className="relative h-48">
                          <Image
                            src={experience.image || "/placeholder.svg"}
                            alt={experience.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-slate-900/80 text-purple-300 border border-purple-400/50">
                              {experience.status}
                            </Badge>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${experience.gradient} to-transparent opacity-60`} />
                        </div>
                        
                        <CardContent className="p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                              {experience.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-400">
                              {experience.description}
                            </CardDescription>
                            <p className="text-xs text-purple-400 font-medium">{experience.role}</p>
                          </CardHeader>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {experience.tags.slice(0, 4).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm text-white mb-2">主要成果：</h4>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {experience.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex}>• {achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Work Experiences */}
            <ScrollReveal delay={1200}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">实习经历</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workExperiences.map((work, index) => (
                    <ScrollReveal key={work.id} delay={1400 + index * 100}>
                      <Card className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:shadow-xl">
                        <div className="relative h-48">
                          <Image
                            src={work.image || "/placeholder.svg"}
                            alt={work.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-slate-900/80 text-purple-300 border border-purple-400/50">
                              {work.status}
                            </Badge>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${work.gradient} to-transparent opacity-60`} />
                        </div>
                        
                        <CardContent className="p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                              {work.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-400">
                              {work.description}
                            </CardDescription>
                            <p className="text-xs text-purple-400 font-medium">{work.role}</p>
                          </CardHeader>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {work.tags.slice(0, 4).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm text-white mb-2">主要成果：</h4>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {work.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex}>• {achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Skills Showcase */}
            <ScrollReveal delay={1600}>
              <section className="mt-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  项目中体现的核心能力
                </h3>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: "🎯", title: "技术创新", desc: "从算法设计到系统集成的全栈能力", color: "from-blue-500/20 to-cyan-500/20" },
                    { icon: "🤝", title: "团队协作", desc: "跨专业团队合作与领导经验", color: "from-green-500/20 to-emerald-500/20" },
                    { icon: "💼", title: "商业思维", desc: "从技术到产品的商业化思考", color: "from-purple-500/20 to-pink-500/20" },
                    { icon: "🏆", title: "执行力", desc: "从想法到成果的完整实现能力", color: "from-orange-500/20 to-red-500/20" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} border border-purple-400/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={1800}>
              <div className="text-center mt-16">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    想了解更多项目细节？
                  </h3>
                  <p className="text-gray-300">
                    每个项目背后都有完整的思考过程和实现细节
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-200" asChild>
                      <Link href="/contact">
                        与我深入交流 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transform hover:scale-105 transition-all duration-200" asChild>
                      <Link href="/explorations">
                        阅读我的思考
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
