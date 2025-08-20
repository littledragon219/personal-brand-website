"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight, TrendingUp, Zap, Cpu, Factory, Network, Shield, BarChart3, Cog, Download, FileText, Users, Target, CheckCircle, AlertTriangle, BookOpen, Lightbulb } from 'lucide-react'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Industry4AnalysisPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const tableOfContents = [
    { id: 'overview', title: '概述', icon: BookOpen },
    { id: 'architecture', title: '系统架构', icon: Network },
    { id: 'functions', title: '功能分类', icon: Cog },
    { id: 'technologies', title: '关键技术', icon: Cpu },
    { id: 'cases', title: '运行案例', icon: Target },
    { id: 'challenges', title: '主要挑战', icon: AlertTriangle },
    { id: 'trends', title: '发展趋势', icon: TrendingUp },
    { id: 'conclusion', title: '分析结论', icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="hover:bg-purple-500/20 text-purple-300">
              <Link href="/explorations" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回探索页面
              </Link>
            </Button>
          </div>

          {/* 文章头部 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                行业分析
              </Badge>
              <div className="flex items-center gap-4 text-sm text-purple-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2024.01.25
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  12分钟阅读
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  1,234 次浏览
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              面向工业4.0的西门子Opcenter系统分析报告
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              随着工业4.0浪潮的普及，制造执行系统(MES)已成为实现车间数字化、智能化的核心平台。
              本文以Siemens Opcenter MES为研究对象，从系统集成、模块化设计、低代码定制与智能预测维护等方面展开分析。
            </p>

            {/* PDF下载按钮 */}
            <div className="flex items-center gap-4 mb-6">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                <a href="/面向工业4.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  下载完整PDF报告
                </a>
              </Button>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-purple-300 hover:text-red-400 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>156</span>
                </button>
                <button className="flex items-center gap-2 text-purple-300 hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>23</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* 目录导航 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-400" />
              报告目录
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tableOfContents.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      const element = document.getElementById(item.id)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                        setActiveSection(item.id)
                      }
                    }}
                    className={`flex items-center gap-2 p-3 rounded-lg text-left transition-all ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' 
                        : 'bg-slate-700/50 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* 文章内容 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="prose prose-lg max-w-none">
              {/* 概述 */}
              <section id="overview" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                  概述
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  制造执行系统(MES)是连接ERP与车间的核心平台，解决生产透明化、柔性制造、质量追溯、
                  资源优化与数据驱动决策等问题。本文分析对象为Siemens Opcenter（前身SIMATIC IT），
                  涵盖MES、APS、QMS、EAM模块，应用于汽车、半导体、制药等行业。
                </p>

                <div className="bg-slate-700/30 p-6 rounded-lg mb-8 border border-purple-500/20">
                  <h3 className="font-semibold text-white mb-4">企业需求分析</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-purple-500/30">
                          <th className="text-left py-3 px-4 font-semibold text-white">需求</th>
                          <th className="text-left py-3 px-4 font-semibold text-white">备注</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-purple-500/20">
                          <td className="py-3 px-4 font-medium text-purple-200">生产透明化</td>
                          <td className="py-3 px-4 text-gray-300">实时采集与监控设备和工艺数据，消除信息孤岛</td>
                        </tr>
                        <tr className="border-b border-purple-500/20">
                          <td className="py-3 px-4 font-medium text-purple-200">柔性生产</td>
                          <td className="py-3 px-4 text-gray-300">支持多品种、小批量的快速切换与追踪</td>
                        </tr>
                        <tr className="border-b border-purple-500/20">
                          <td className="py-3 px-4 font-medium text-purple-200">质量可追溯</td>
                          <td className="py-3 px-4 text-gray-300">原材料、生产工艺、检验结果闭环管理</td>
                        </tr>
                        <tr className="border-b border-purple-500/20">
                          <td className="py-3 px-4 font-medium text-purple-200">资源优化</td>
                          <td className="py-3 px-4 text-gray-300">提高设备利用率、物料周转率与人力效率</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-purple-200">数据驱动决策</td>
                          <td className="py-3 px-4 text-gray-300">提供可视化报表与分析工具</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 系统架构 */}
              <section id="architecture" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Network className="h-6 w-6 text-purple-400" />
                  Siemens Opcenter系统架构
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Opcenter采用多层架构设计，支持边缘计算、Docker容器化、OPC UA/REST API集成，
                  兼容多工厂与多租户部署模式。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <Network className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-blue-800">企业层</h3>
                    </div>
                    <p className="text-blue-700 text-sm">
                      ERP/PLM交互，实现企业级数据集成
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-500 rounded-lg">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-green-800">MES平台层</h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      Execution / Quality / Intelligence核心模块
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-purple-800">车间层</h3>
                    </div>
                    <p className="text-purple-700 text-sm">
                      SCADA、IIoT、CNC、机器人、传感器设备
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-500 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-orange-800">数据存储层</h3>
                    </div>
                    <p className="text-orange-700 text-sm">
                      SQL数据库、历史数据库存储管理
                    </p>
                  </Card>
                </div>
              </section>

              {/* MES系统功能分类 */}
              <section id="functions" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Cog className="h-6 w-6 text-blue-600" />
                  MES系统功能分类
                </h2>
                
                <div className="bg-slate-700/30 p-6 rounded-lg mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">模块</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">功能描述</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-800">生产执行与调度</td>
                          <td className="py-3 px-4 text-gray-600">订单分解、资源分配、作业排程、瓶颈分析</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-800">质量管理与追溯</td>
                          <td className="py-3 px-4 text-gray-600">在线检验、异常报警、SPC分析、批次追溯</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-800">物料与库存管理</td>
                          <td className="py-3 px-4 text-gray-600">原料投料、在制品跟踪、成品入库管理</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-800">数据分析</td>
                          <td className="py-3 px-4 text-gray-600">KPI监控、报表、绩效分析、移动看板</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* MES关键技术 */}
              <section id="technologies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-blue-600" />
                  MES关键技术
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">分层架构与标准化</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      基于ISA-95标准，低代码平台（Mendix）支持定制化开发，
                      实现快速部署和灵活配置。
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">工业物联网(IIoT)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      采用OPC UA、MQTT协议，支持与PLC/传感器实时通信，
                      实现设备数据的无缝集成和实时监控。
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">机器学习与高级分析</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      集成预测性维护、质量预测、产能优化算法，
                      通过AI技术提升生产效率和设备可靠性。
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">数字孪生技术</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      结合仿真与实时数据，实现预测调度和虚拟验证，
                      优化生产流程和资源配置。
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">云计算协同</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      支持AWS、Azure部署，实现跨地域数据集中化管理，
                      提供弹性扩展和高可用性保障。
                    </p>
                  </Card>
                </div>
              </section>

              {/* 运行案例 */}
              <section id="cases" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  运行案例
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">The Absolut Company（食品饮料）</h3>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">应用：</span>
                      <span className="text-gray-700">Opcenter APS + Execution</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">成果：</span>
                      <span className="text-gray-700">订单处理效率提升、自动化率接近100%、查询时间从4小时缩短至分钟级</span>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">BASF Coatings（汽车涂料）</h3>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">应用：</span>
                      <span className="text-gray-700">Opcenter MES + SIMATIC PCS7</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">成果：</span>
                      <span className="text-gray-700">实现无纸化生产、30cm高精度定位、工艺透明度提升</span>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Danfoss（工业机械）</h3>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">应用：</span>
                      <span className="text-gray-700">Opcenter Execution Foundation</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">成果：</span>
                      <span className="text-gray-700">多工厂统一管控、混线生产、快速切换，缩短新产品导入时间</span>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Egicon（电子制造）</h3>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">应用：</span>
                      <span className="text-gray-700">Opcenter Execution Electronics IoT + Valor</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">成果：</span>
                      <span className="text-gray-700">返修率降低80%，实现无纸化车间与实时OEE看板</span>
                    </div>
                  </Card>
                </div>
              </section>

              {/* 主要挑战 */}
              <section id="challenges" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  主要挑战
                </h2>
                
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>高成本投入：</strong>硬件采购、人员培训、系统搭建</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>行业个性化需求：</strong>需二次开发，增加复杂度</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>系统升级与兼容性问题：</strong>协议适配、硬件更新</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>安全威胁：</strong>数据泄露、恶意攻击、生产中断风险</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>人才短缺：</strong>MES架构师、数据分析师供不应求</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 未来发展趋势 */}
              <section id="trends" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  未来发展趋势
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      容器化与微服务化
                    </h4>
                    <p className="text-blue-700 text-sm">
                      SaaS模式降低管理成本，提供更灵活的部署选项
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      低代码平台普及
                    </h4>
                    <p className="text-green-700 text-sm">
                      Mendix等工具缩短开发周期，降低定制化门槛
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                      <Network className="h-5 w-5" />
                      数字孪生与AI
                    </h4>
                    <p className="text-purple-700 text-sm">
                      实现预测性维护与智能调度，提升决策精度
                    </p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      开放生态平台
                    </h4>
                    <p className="text-orange-700 text-sm">
                      第三方应用可集成，形成"平台+生态"闭环
                    </p>
                  </Card>
                </div>
              </section>

              {/* 分析与结论 */}
              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  分析与结论
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <h3 className="font-semibold text-green-800 mb-3">优势</h3>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• 实现生产可视化与闭环控制</li>
                      <li>• ERP到设备的端到端集成</li>
                      <li>• 高效生产排程与质量追溯</li>
                      <li>• 案例验证柔性生产、质量提升、透明度增强</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-3">挑战</h3>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li>• 高投入与维护成本</li>
                      <li>• 行业定制难度大</li>
                      <li>• 适用于高附加值与高可靠性行业</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-3">趋势</h3>
                    <p className="text-blue-700 text-sm">
                      借助AI、云计算、低代码平台，Opcenter将朝着更智能、模块化、开放方向发展。
                    </p>
                  </Card>
                </div>
              </section>
            </div>
          </motion.div>

          {/* 个人思考 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8"
          >
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              个人思考与洞察
            </h3>
            <p className="text-gray-700 leading-relaxed">
              作为AI产品经理，我认为Siemens Opcenter代表了MES系统的发展方向。
              其成功在于平衡了标准化与定制化的需求，通过低代码平台降低了实施门槛。
              未来的制造执行系统将更加智能化、平台化，关键是要在技术先进性和商业可行性之间找到最佳平衡点。
            </p>
          </motion.div>

          {/* 标签和推荐 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-slate-800/50 rounded-2xl shadow-lg p-8"
          >
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">相关标签</h3>
              <div className="flex flex-wrap gap-2">
                {["MES系统", "Siemens Opcenter", "工业4.0", "制造执行系统", "数字化转型", "智能制造"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="hover:bg-gray-200 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">相关文章推荐</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">产品思考</Badge>
                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                      具身智能产品设计的三个原则
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      基于项目经验总结的产品设计核心原则...
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/explorations/embodied-ai-design-principles">
                        阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">行业分析</Badge>
                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                      拆解特斯拉Optimus的产品迭代路径
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      从产品经理角度分析特斯拉机器人策略...
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/explorations/tesla-optimus-analysis">
                        阅读更多 <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}