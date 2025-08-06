import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

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
      role: "项目负责人 (智能算法开发设计)"
    },
    {
      id: "wind-turbine-diagnosis",
      title: "风力发电机故障诊断",
      description: "基于深度学习的设备健康监测与寿命预测",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["自注意力机制", "LSTM", "SARIMA", "MLE", "大数据"],
      status: "技术项目",
      achievements: ["多模型融合", "高精度预测", "工业应用验证"],
      role: "算法开发设计"
    },
    {
      id: "residual-fault-diagnosis",
      title: "深度残差学习故障诊断",
      description: "基于1D-CNN的旋转机械故障智能识别",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["1D-CNN", "残差网络", "轴承数据", "故障分类"],
      status: "学习项目",
      achievements: ["梯度问题解决", "高分类精度", "算法复现验证"],
      role: "算法设计与实现"
    },
    {
      id: "domain-adaptation",
      title: "多层域适应故障诊断",
      description: "基于MMD的跨域故障诊断算法",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MMD", "域适应", "1D-CNN", "跨域泛化"],
      status: "研究项目",
      achievements: ["跨域泛化能力", "多内核MMD", "论文级精度"],
      role: "算法设计与实现"
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
      role: "部长/学生教练/龙珠"
    },
    {
      id: "robot-competition",
      title: "探索者杯机器人竞赛",
      description: "第六届探索者杯机器人竞赛校园行校赛二等奖",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Arduino", "传感器融合", "智能避障", "电路设计"],
      status: "技术竞赛",
      achievements: ["校赛二等奖", "智能避障算法", "多传感器融合"],
      role: "电路搭建与Arduino算法开发设计"
    },
    {
      id: "business-competition",
      title: "工创大赛",
      description: "2025年工创大赛虚拟仿真企业运营大赛入围校赛决赛",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["商业决策", "跨专业合作", "数据分析", "战略规划"],
      status: "商业竞赛",
      achievements: ["42队中入围决赛", "跨专业团队", "综合决策能力"],
      role: "决策手"
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
      role: "人力资源部业务助理"
    },
    {
      id: "sales-intern",
      title: "Bee Cheng Hiang 美珍香",
      description: "食品销售与原材料订购助理",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["食品采购", "销售技巧", "客户服务", "供应链管理"],
      status: "实习经历",
      achievements: ["原材料采购管理", "客户推销经验", "门店运营"],
      role: "食品销售与原材料订购助理"
    },
    {
      id: "pm-intern",
      title: "上海恒数科技",
      description: "项目经理助理兼系统开发实习",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["ERP系统", "项目管理", "跨境电商", "系统开发"],
      status: "实习经历",
      achievements: ["跨境电商方案调研", "ERP系统开发", "运营优化"],
      role: "项目经理助理兼系统开发实习"
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">项目集</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从技术创新到团队协作，从学术研究到商业实践的全方位探索
            </p>
          </div>

          {/* Featured Project */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">核心项目</h2>
              <Badge className="bg-blue-600">重点推荐</Badge>
            </div>
            
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="智能无损抓取机械臂"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900">
                      智能无损抓取机械臂
                    </CardTitle>
                    <CardDescription className="text-base">
                      我的代表作品 - "触觉感知-柔性控制-特征迁移"三位一体系统
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600">
                      研发"触觉感知-柔性控制-特征迁移"三位一体系统，配合树莓派主控与舵机协同，
                      开发动态闭环力控算法实时感知物体，以0.01N的力控分辨率实现精准控制达到智能无损抓取。
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">核心成果：</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 0.01N的力控分辨率，99.5%无损抓取成功率</li>
                        <li>• 获得2025年大学生创新大赛校赛银奖</li>
                        <li>• 相关技术已申请发明专利</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">力控算法</Badge>
                      <Badge variant="outline">原型网络</Badge>
                      <Badge variant="outline">零样本推理</Badge>
                      <Badge variant="outline">树莓派</Badge>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild>
                      <Link href="/projects/intelligent-grasping-robot">
                        详细案例分析 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" /> 代码
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* Technical Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">技术项目</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(1).map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                      <p className="text-xs text-blue-600 font-medium">{project.role}</p>
                    </CardHeader>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">主要成果：</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {project.achievements.map((achievement, index) => (
                            <li key={index}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/projects/${project.id}`}>
                            查看详情 <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competition Experiences */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">竞赛经历</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{experience.status}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg">{experience.title}</CardTitle>
                      <CardDescription className="text-sm">{experience.description}</CardDescription>
                      <p className="text-xs text-purple-600 font-medium">{experience.role}</p>
                    </CardHeader>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {experience.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">主要成果：</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Work Experiences */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">实习经历</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workExperiences.map((work) => (
                <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{work.status}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg">{work.title}</CardTitle>
                      <CardDescription className="text-sm">{work.description}</CardDescription>
                      <p className="text-xs text-green-600 font-medium">{work.role}</p>
                    </CardHeader>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {work.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">主要成果：</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {work.achievements.map((achievement, index) => (
                            <li key={index}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Showcase */}
          <section className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              项目中体现的核心能力
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">技术创新</h4>
                <p className="text-sm text-gray-600">从算法设计到系统集成的全栈能力</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">团队协作</h4>
                <p className="text-sm text-gray-600">跨专业团队合作与领导经验</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">商业思维</h4>
                <p className="text-sm text-gray-600">从技术到产品的商业化思考</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">执行力</h4>
                <p className="text-sm text-gray-600">从想法到成果的完整实现能力</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                想了解更多项目细节？
              </h3>
              <p className="text-gray-600">
                每个项目背后都有完整的思考过程和实现细节
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    与我深入交流 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/explorations">
                    阅读我的思考
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
