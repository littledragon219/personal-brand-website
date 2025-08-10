import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from 'lucide-react'
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackgroundEffects } from "@/components/background-effects"

const journeyItems = [
    {
    icon: "💼",
    title: "AI2.0产品经理课程",
    subtitle: "Thoughtworks x 电子科技大学联合打造AI2.0产品经理实战培养计划",
    description: "通过这个AI2.0产品经理课程，我基本掌握了作为这个岗位所要面对的问题与工作的内容，包括一开始的创意点子的冒起，到十大原则、PRD文档书写、开始使用AI工具打磨赋能，一步步优化成我们想要的成品。另外也学习到了如何建立自己的个人网页，来总结我们的经历，以此增强别人对我们的第一印象。后面我们还学习到了supabase和配置api keys来调用大模型，为我们的产品实现智能化与自动化。在学习的当儿，我总是需要使用更多的课外时间去实践，哪怕我是工科专业。这是因为学习机械工程和这个与AI和前后端代码和数据库等处理都是平日里上课不会接触到的东西，所以往往需要很多时间去学习。但是现在回过头来看，我也发现我学习到了很多，至少了解了AI产品从0-1的流程开发，知道要到哪些网站或渠道找到我想要的资料。现在想想，过程有点辛苦，但是能摸到AI产品的门道和体验AI产品经理的一部分工作日常，感觉还是挺值的。",
    tags: ["团队协作", "AI工具", "产品需求文档", "产品设计与打造"],
    colorClasses: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: "🐉",
    title: "中国传统文化的具身体验",
    subtitle: "2024年第十六届中国大学生舞龙舞狮锦标赛全国季军",
    description: "作为部长/学生教练/龙珠，我带领团队坚持每周三次早上6点30分训练，将传统文化与现代体育竞技精神结合。在全国大学生参赛队伍中脱颖而出，勇夺季军。这体现了理论与实践、身体与心智结合的\"具身\"精神。",
    tags: ["团队协作", "传统文化", "领导力", "体育竞技"],
    colorClasses: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: "🤖",
    title: "技术创新的突破",
    subtitle: "智能无损抓取机械臂项目负责人",
    description: "研发\"触觉感知-柔性控制-特征迁移\"三位一体系统，实现0.01N力控分辨率的精准控制。这个项目让我真正理解了什么是\"具身智能\"——不仅仅是算法的胜利，更是物理世界与数字智能完美融合的艺术。",
    tags: ["力控算法", "原型网络", "零样本推理", "产品思维"],
    colorClasses: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: "💼",
    title: "多元化实践经历",
    subtitle: "从人力资源到跨境电商的全方位探索",
    description: "在CED Organic&Food担任人力资源部业务助理，在美珍香从事食品销售，在上海恒数科技担任项目经理助理。这些多元化的实习经历让我深入理解用户需求，学会了如何将技术与商业价值结合。",
    tags: ["人力资源", "销售经验", "项目管理", "跨境电商"],
    colorClasses: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: "🏆",
    title: "竞赛中的成长",
    subtitle: "从机器人竞赛到工创大赛的全面发展",
    description: "在第六届探索者杯机器人竞赛中负责电路搭建与Arduino算法开发，获得校赛二等奖。在2025年工创大赛中作为决策手，与金融、工商管理专业同学组成跨专业团队，在42队中脱颖而出进入校赛决赛。",
    tags: ["Arduino算法开发", "电路设计", "商业决策", "跨专业合作"],
    colorClasses: "from-purple-500/20 to-pink-500/20"
  }
];

const philosophyItems = [
  {
    icon: "🤝",
    title: "团队协作精神",
    description: "从舞龙舞狮的默契配合到跨专业团队的协作，我深知团队力量的重要性。",
    colorClasses: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: "⚡",
    title: "技术与商业结合",
    description: "技术应该服务于实际需求，每一个功能都应有明确的用户价值和商业意义。",
    colorClasses: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: "🌉",
    title: "具身智能理念",
    description: "真正的智能不仅存在于算法中，更体现在与物理世界的深度交互和融合。",
    colorClasses: "from-purple-500/20 to-pink-500/20"
  }
];

const skillCategories = [
  {
    icon: "📋",
    title: "产品与管理",
    skills: ["需求分析", "用户研究", "项目管理", "团队协作", "商业决策", "跨部门合作"],
    colorClasses: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: "⚙️",
    title: "技术与工程",
    skills: ["Python", "深度学习", "ROS", "Arduino", "传感器融合", "力控算法", "电路设计"],
    colorClasses: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: "🤖",
    title: "AI与机器学习",
    skills: ["CNN/LSTM", "自注意力机制", "原型网络", "零样本学习", "域适应", "故障诊断"],
    colorClasses: "from-purple-500/20 to-pink-500/20"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
                  <div className="bg-slate-900 rounded-full px-6 py-2">
                    <span className="text-purple-400 text-sm font-medium">关于我的故事</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                  关于我
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  从中国传统文化到前沿科技，从团队协作到技术创新的探索之旅
                </p>
              </div>
            </ScrollReveal>

            {/* My Journey */}
            <ScrollReveal delay={200}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">我的旅程</h2>
                
                <div className="space-y-8">
                  {journeyItems.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <Card className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${item.colorClasses} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-purple-300">
                                {item.subtitle}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* My Philosophy */}
            <ScrollReveal delay={400}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">我的理念</h2>
                
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <blockquote className="text-lg text-gray-200 leading-relaxed italic text-center">
                      "我相信，下一个时代的伟大产品将诞生于物理与数字的交汇处。从舞龙舞狮的团队协作到智能机械臂的算法开发，
                      我始终在探索'具身智能'的无限可能。我的热情在于深入理解'物'的本质，并为其注入'智'的灵魂。
                      我痴迷于探索前沿的AI工具，并动手将它们应用于真实的物理场景，去解决具体而有挑战性的问题。
                      我的目标是：创造出真正理解并赋能于人的智能体。"
                    </blockquote>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {philosophyItems.map((item, index) => (
                    <ScrollReveal key={index} delay={600 + index * 100}>
                      <Card className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group text-center">
                        <CardHeader>
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.colorClasses} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                          <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={800}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">技能清单</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {skillCategories.map((category, index) => (
                    <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white group-hover:text-purple-300 transition-colors">
                          <div className={`w-12 h-12 bg-gradient-to-br ${category.colorClasses} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-xl">{category.icon}</span>
                          </div>
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal delay={1000}>
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">主要成就</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-yellow-300 flex items-center gap-2">
                        🏆 竞赛获奖
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-yellow-200">
                        <li>• 2024年第十六届中国大学生舞龙舞狮锦标赛全国季军</li>
                        <li>• 2025年大学生创新大赛校赛银奖</li>
                        <li>• 第六届探索者杯机器人竞赛校赛二等奖</li>
                        <li>• 2025年工创大赛虚拟仿真企业运营大赛校赛决赛</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-300 flex items-center gap-2">
                        💡 技术创新
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-blue-200">
                        <li>• 智能无损抓取机械臂：0.01N力控分辨率</li>
                        <li>• 层级化原型网络设计与实现</li>
                        <li>• 零样本推理在机器人抓取中的应用</li>
                        <li>• 多种深度学习故障诊断算法开发</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={1200}>
              <div className="text-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    想了解更多？
                  </h3>
                  <p className="text-gray-300">
                    查看我的项目作品，或者直接与我开始对话
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-200" asChild>
                      <Link href="/projects">
                        查看我的项目 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transform hover:scale-105 transition-all duration-200" asChild>
                      <Link href="/contact">
                        联系我
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
