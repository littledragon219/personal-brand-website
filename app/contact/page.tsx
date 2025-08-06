import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">联系我</h1>
            <p className="text-xl text-gray-600">
              对具身智能、AI产品或机器人技术感兴趣？期待与你交流
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>发送消息</CardTitle>
                <CardDescription>
                  填写下面的表单，我会尽快回复你
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" placeholder="你的姓名" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">公司/组织 (可选)</Label>
                    <Input id="company" placeholder="你的公司或组织" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">主题</Label>
                    <Input id="subject" placeholder="想聊什么？" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">消息</Label>
                    <Textarea 
                      id="message" 
                      placeholder="详细描述你的想法或问题..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    发送消息
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                  <CardDescription>
                    多种方式与我取得联系
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">邮箱</h3>
                      <p className="text-gray-600">contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">微信</h3>
                      <p className="text-gray-600">请邮件联系获取</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">位置</h3>
                      <p className="text-gray-600">西安, 中国</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>社交媒体</CardTitle>
                  <CardDescription>
                    在这些平台上关注我的最新动态
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    💡 特别欢迎讨论
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 具身智能产品设计思路</li>
                    <li>• AI工具在机器人开发中的应用</li>
                    <li>• 从技术到产品的转化经验</li>
                    <li>• 职业发展和学习心得</li>
                    <li>• 合作机会和项目想法</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>响应时间</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">邮件回复</span>
                      <span className="font-semibold">24小时内</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">微信回复</span>
                      <span className="font-semibold">2-4小时内</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">电话/视频</span>
                      <span className="font-semibold">预约安排</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              常见问题
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🤝 合作机会</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    我对具身智能、机器人技术相关的项目合作非常感兴趣。
                    无论是技术交流、项目合作还是产品咨询，都欢迎联系。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">💼 工作机会</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    我正在寻找AI产品经理相关的工作机会，特别是具身智能、
                    机器人产品方向。如果有合适的职位，欢迎联系。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">📚 学习交流</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    很乐意与同行交流学习心得，分享项目经验。
                    如果你也在探索AI与硬件结合的领域，期待与你交流。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🎯 咨询服务</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    可以提供机器人产品设计、AI工具应用等方面的咨询服务。
                    具体合作方式可以详细讨论。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
