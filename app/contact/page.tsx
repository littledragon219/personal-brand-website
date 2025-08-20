import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react'
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackgroundEffects } from "@/components/background-effects"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-[#1A1A2E]">
      <BackgroundEffects />
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-block p-1 rounded-full bg-[#00FFC2]/20 mb-6">
                  <div className="bg-black/60 rounded-full px-6 py-2">
                    <span className="text-[#00FFC2] text-sm font-medium">让我们开始对话</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  联系我
                </h1>
                <p className="text-xl text-gray-300">
                  对具身智能、AI产品或机器人技术感兴趣？期待与你交流
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal delay={200}>
                <Card className="bg-black/60 backdrop-blur-sm border border-[#00FFC2]/30 hover:border-[#00FFC2]/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">发送消息</CardTitle>
                    <CardDescription className="text-gray-300">
                      填写下面的表单，我会尽快回复你
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">姓名</Label>
                          <Input 
                            id="name" 
                            placeholder="你的姓名" 
                            className="bg-black/60 border-[#00FFC2]/30 text-white placeholder:text-gray-500 focus:border-[#00FFC2]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">邮箱</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-black/60 border-[#00FFC2]/30 text-white placeholder:text-gray-500 focus:border-[#00FFC2]"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">公司/组织 (可选)</Label>
                        <Input 
                          id="company" 
                          placeholder="你的公司或组织" 
                          className="bg-black/60 border-[#00FFC2]/30 text-white placeholder:text-gray-500 focus:border-[#00FFC2]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">主题</Label>
                        <Input 
                          id="subject" 
                          placeholder="想聊什么？" 
                          className="bg-black/60 border-[#00FFC2]/30 text-white placeholder:text-gray-500 focus:border-[#00FFC2]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">消息</Label>
                        <Textarea 
                          id="message" 
                          placeholder="详细描述你的想法或问题..."
                          rows={6}
                          className="bg-black/60 border-[#00FFC2]/30 text-white placeholder:text-gray-500 focus:border-[#00FFC2]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/80 transform hover:scale-105 transition-all duration-200">
                        发送消息
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Info */}
              <div className="space-y-8">
                <ScrollReveal delay={400}>
                  <Card className="bg-black/60 backdrop-blur-sm border border-[#00FFC2]/30 hover:border-[#00FFC2]/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">联系方式</CardTitle>
                      <CardDescription className="text-gray-300">
                        多种方式与我取得联系
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        { icon: Mail, title: "邮箱", content: ".", colorClasses: "from-[#00FFC2]/20 to-cyan-500/20" },
                        { icon: MessageCircle, title: "微信", content: ".", colorClasses: "from-[#00FFC2]/20 to-emerald-500/20" },
                        { icon: MapPin, title: "位置", content: "中国", colorClasses: "from-[#00FFC2]/20 to-teal-500/20" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group cursor-pointer">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.colorClasses} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-[#00FFC2] transition-colors">{item.title}</h3>
                            <p className="text-gray-300">{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <Card className="bg-black/60 backdrop-blur-sm border border-[#00FFC2]/30 hover:border-[#00FFC2]/50 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">社交媒体</CardTitle>
                      <CardDescription className="text-gray-300">
                        在这些平台上关注我的最新动态
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="border-[#00FFC2]/50 text-[#00FFC2] hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] transition-colors" asChild>
                          <Link href="https://linkedin.com" target="_blank">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-[#00FFC2]/50 text-[#00FFC2] hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] transition-colors" asChild>
                          <Link href="https://github.com" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                  <Card className="bg-gradient-to-br from-[#00FFC2]/10 to-teal-500/10 border border-[#00FFC2]/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-3">
                        💡 特别欢迎讨论
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 具身智能产品设计思路</li>
                        <li>• AI工具在机器人开发中的应用</li>
                        <li>• 从技术到产品的转化经验</li>
                        <li>• 职业发展和学习心得</li>
                        <li>• 合作机会和项目想法</li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={1000}>
                  <Card className="bg-black/60 backdrop-blur-sm border border-[#00FFC2]/30">
                    <CardHeader>
                      <CardTitle className="text-white">响应时间</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        {[
                          { type: "邮件回复", time: "24小时内" },
                          { type: "微信回复", time: "2-4小时内" },
                          { type: "电话/视频", time: "预约安排" }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                            <span className="text-gray-300">{item.type}</span>
                            <span className="font-semibold text-[#00FFC2]">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>

            {/* FAQ */}
            <ScrollReveal delay={1200}>
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  常见问题
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "🤝",
                      title: "合作机会",
                      content: "我对具身智能、机器人技术相关的项目合作非常感兴趣。无论是技术交流、项目合作还是产品咨询，都欢迎联系。",
                      colorClasses: "from-blue-500/20 to-cyan-500/20"
                    },
                    {
                      icon: "💼",
                      title: "工作机会",
                      content: "我正在寻找AI产品经理相关的工作机会，特别是具身智能、机器人产品方向。如果有合适的职位，欢迎联系。",
                      colorClasses: "from-green-500/20 to-emerald-500/20"
                    },
                    {
                      icon: "📚",
                      title: "学习交流",
                      content: "很乐意与同行交流学习心得，分享项目经验。如果你也在探索AI与硬件结合的领域，期待与你交流。",
                      colorClasses: "from-purple-500/20 to-pink-500/20"
                    },
                    {
                      icon: "🎯",
                      title: "咨询服务",
                      content: "可以提供机器人产品设计、AI工具应用等方面的咨询服务。具体合作方式可以详细讨论。",
                      colorClasses: "from-orange-500/20 to-red-500/20"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="bg-black/60 backdrop-blur-sm border border-[#00FFC2]/20 hover:border-[#00FFC2]/40 transition-all duration-300 group">
                      <CardHeader>
                        <CardTitle className="text-lg text-white group-hover:text-[#00FFC2] transition-colors flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.colorClasses} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-xl">{item.icon}</span>
                          </div>
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
