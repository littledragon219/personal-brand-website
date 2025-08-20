'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  Download,
  Coffee,
  Store,
  DollarSign,
  BarChart3,
  Target,
  Zap,
  Award,
  ChevronRight,
  ExternalLink,
  FileText
} from 'lucide-react'

export default function GQTeaAnalysisPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const tableOfContents = [
    { id: 'overview', title: '企业概述', icon: Building2 },
    { id: 'culture', title: '品牌文化', icon: Award },
    { id: 'products', title: '产品矩阵', icon: Coffee },
    { id: 'advantages', title: '核心优势', icon: Zap },
    { id: 'franchise', title: '加盟体系', icon: Store },
    { id: 'financial', title: '财务表现', icon: BarChart3 },
    { id: 'future', title: '未来展望', icon: Target }
  ]

  const keyMetrics = [
    { label: '全球门店', value: '46,479+', unit: '家', icon: Store },
    { label: '覆盖市场', value: '11+', unit: '国家和地区', icon: Globe },
    { label: '年净利润', value: '44.5', unit: '亿元', icon: DollarSign },
    { label: 'IP全网曝光', value: '220+', unit: '亿次', icon: TrendingUp }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-[#00FFC2]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                光启茶韵 (GQTea) 企业分析报告
              </h1>
              <p className="text-lg text-gray-300">
                全球现制饮品行业领军者的商业模式深度解析
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Card className="bg-black/60 border-[#00FFC2]/20">
                 <CardHeader>
                   <CardTitle className="text-lg text-white">目录导航</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-2">
                   {tableOfContents.map((item) => {
                     const IconComponent = item.icon
                     return (
                       <button
                         key={item.id}
                         onClick={() => scrollToSection(item.id)}
                         className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                           activeSection === item.id
                             ? 'bg-[#00FFC2]/20 text-[#00FFC2] border border-[#00FFC2] shadow-[0_0_10px_rgba(0,255,194,0.3)]'
                             : 'hover:bg-white/10 text-gray-300'
                         }`}
                       >
                         <IconComponent className="h-4 w-4" />
                         <span className="text-sm font-medium">{item.title}</span>
                       </button>
                     )
                   })}
                 </CardContent>
               </Card>
              
              {/* Additional PPT Downloads */}
               <Card className="mt-4 bg-black/60 border-[#00FFC2]/20">
                 <CardHeader>
                   <CardTitle className="text-lg text-white">相关资料下载</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-3">
                   <Button variant="outline" className="w-full justify-between bg-transparent border-[#00FFC2]/40 text-white hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] hover:shadow-[0_0_10px_rgba(0,255,194,0.3)]" asChild>
                     <a href="/光启茶韵市场需求分析.pptx" download>
                       光启茶韵市场需求分析PPT
                       <Download className="h-4 w-4" />
                     </a>
                   </Button>
                   <Button variant="outline" className="w-full justify-between bg-transparent border-[#00FFC2]/40 text-white hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] hover:shadow-[0_0_10px_rgba(0,255,194,0.3)]" asChild>
                     <a href="/光启茶韵战略选择.pptx" download>
                       光启茶韵战略选择PPT
                       <Download className="h-4 w-4" />
                     </a>
                   </Button>
                   <Button variant="outline" className="w-full justify-between bg-transparent border-[#00FFC2]/40 text-white hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] hover:shadow-[0_0_10px_rgba(0,255,194,0.3)]" asChild>
                     <a href="/C 生产排程和物流.pptx" download>
                       生产排程和物流PPT
                       <Download className="h-4 w-4" />
                     </a>
                   </Button>
                   <Button variant="outline" className="w-full justify-between bg-transparent border-[#00FFC2]/40 text-white hover:bg-[#00FFC2]/20 hover:border-[#00FFC2] hover:shadow-[0_0_10px_rgba(0,255,194,0.3)]" asChild>
                     <a href="/产量决策优化.pptx" download>
                       产量决策优化PPT
                       <Download className="h-4 w-4" />
                     </a>
                   </Button>
                 </CardContent>
               </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
            {/* Key Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {keyMetrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <Card key={index} className="text-center bg-black/60 border-[#00FFC2]/20">
                      <CardContent className="pt-6">
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-[#00FFC2]" />
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-sm text-gray-300">{metric.unit}</div>
                        <div className="text-xs text-gray-400 mt-1">{metric.label}</div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </motion.section>

            {/* Company Overview Section */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Building2 className="h-6 w-6 text-[#00FFC2]" />
                    企业概述
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      光启茶韵股份有限公司，是全球现制饮品行业的领军者。我们的核心竞争力源于庞大的全球门店网络、极致的成本效益经营策略以及垂直整合的强大供应链体系。通过独特的加盟体系，我们实现了爆发式增长，并以始终如一的"高质平价"产品赢得了全球消费者的广泛青睐。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="font-semibold text-[#00FFC2] mb-2">核心业务</h4>
                      <p className="text-gray-300 text-sm">现制饮品与冰淇淋的连锁经营</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="font-semibold text-[#00FFC2] mb-2">企业使命</h4>
                      <p className="text-gray-300 text-sm">以茶为媒，启明未来</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="font-semibold text-[#00FFC2] mb-2">战略定位</h4>
                      <p className="text-gray-300 text-sm">做现制饮品行业的"成本领导者"</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">发展历程与里程碑</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FFC2] rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-semibold text-white">门店规模</h5>
                          <p className="text-gray-300 text-sm">超越星巴克，成为全球门店数量最多的现制饮品品牌</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FFC2] rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-semibold text-white">全球化</h5>
                          <p className="text-gray-300 text-sm">成功覆盖11个国家和地区，海外门店超4800家，尤其在东南亚市场表现卓越</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FFC2] rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-semibold text-white">资本市场</h5>
                          <p className="text-gray-300 text-sm">2025年3月3日成功于港交所上市，市值已达1894.3亿港元（截至2025年4月23日）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Brand Culture Section */}
            <motion.section
              id="culture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Award className="h-6 w-6 text-[#00FFC2]" />
                    品牌文化
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">品牌释义</h4>
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-[#00FFC2] mb-2">光启</h5>
                          <p className="text-gray-300 text-sm">取自交通大学校歌《为世界之光》的核心意象，象征着"为世界之光"的使命传承</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#00FFC2] mb-2">茶韵</h5>
                          <p className="text-gray-300 text-sm">体现品牌茶的本质，暗合"精勤求学"的校训精神</p>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <h5 className="font-semibold text-white mb-2">品牌寓意</h5>
                        <p className="text-gray-300">以茶为媒，启明未来。展现科技创新与文化传承的双重属性</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-white">品牌IP</h4>
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <div className="text-center mb-4">
                        <h5 className="font-semibold text-[#00FFC2] mb-2">核心IP："光启茶君"</h5>
                        <p className="text-gray-300 text-sm">结合传统茶人形象与现代设计，亲切而富有文化底蕴</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-gray-300 text-sm">推出联名茶具、文创周边</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-gray-300 text-sm">与大雁塔、兵马俑等合作推出国风礼盒</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-gray-300 text-sm">增强品牌文化渗透力</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Product Matrix Section */}
            <motion.section
              id="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Coffee className="h-6 w-6 text-[#00FFC2]" />
                    产品矩阵
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">经典茶饮系列</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-white mb-1">冰鲜柠檬水</h5>
                          <p className="text-gray-300 text-sm">年销量11亿杯的冠军产品，引流爆款</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">奶茶类</h5>
                          <p className="text-gray-300 text-sm">珍珠奶茶、四季春等，强调标准化与高性价比</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">果茶类</h5>
                          <p className="text-gray-300 text-sm">满杯百香果等，平衡成本与风味</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">冰淇淋与圣代</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-white mb-1">摩天脆脆冰淇淋</h5>
                          <p className="text-gray-300 text-sm">年销量14亿支的招牌产品，极具辨识度</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">圣代系列</h5>
                          <p className="text-gray-300 text-sm">搭配丰富小料，提升客单价</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">咖啡与创新品类</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-white mb-1">平价咖啡</h5>
                          <p className="text-gray-300 text-sm">美式、拿铁，切入大众咖啡市场</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">季节限定</h5>
                          <p className="text-gray-300 text-sm">杨枝甘露、芝士奶盖茶等，紧跟市场趋势</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#00FFC2]">产品策略</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-white mb-2">定位：高质平价</h5>
                        <p className="text-gray-300 text-sm">持续推出"光启牧场"鲜牛乳系列、东南亚特色果茶等新品，新品收入占比约15%</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-white mb-2">健康化趋势</h5>
                        <p className="text-gray-300 text-sm">规划推出0卡糖奶茶、益生菌果茶，吸引养生客群</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Core Advantages Section */}
            <motion.section
              id="advantages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Zap className="h-6 w-6 text-[#00FFC2]" />
                    核心优势
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">全产业垂直整合供应链</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">核心原料100%自产，总食材自产超60%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">拥有河南、安徽等5大生产基地</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">全球采购网络覆盖6大洲38国</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">27个国内仓库+4个海外仓，97%门店冷链覆盖</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">极致下沉市场覆盖</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">全国超2.2万家门店</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">三线及以下城市门店占比57.4%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">严格加盟筛选，通过率低于5%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">标准化运营培训体系</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                      <h4 className="text-lg font-semibold text-[#00FFC2] mb-4">全链路数字化能力</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">数字化系统覆盖超95%核心业务流程</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">ERP、SCM、CMS、BI全链路系统</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">开店流程从30天缩短至7天</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00FFC2] rounded-full"></div>
                          <span className="text-white">会员App日活超500万，复购率提升18%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Franchise Section */}
            <motion.section
              id="franchise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Store className="h-6 w-6 text-[#00FFC2]" />
                    加盟体系
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-[#00FFC2]">为何选择光启茶韵</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-[#00FFC2] mt-1" />
                          <div>
                            <h5 className="font-semibold text-white">强大的品牌力</h5>
                            <p className="text-gray-300 text-sm">全网超220亿次曝光，为您带来源源不断的客流</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-[#00FFC2] mt-1" />
                          <div>
                            <h5 className="font-semibold text-white">供应链优势</h5>
                            <p className="text-gray-300 text-sm">自建生产基地，提供低成本、高品质的原料支持</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-[#00FFC2] mt-1" />
                          <div>
                            <h5 className="font-semibold text-white">标准化运营</h5>
                            <p className="text-gray-300 text-sm">全面的线上线下培训体系，让您轻松上手</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-[#00FFC2]">加盟流程</h4>
                      <div className="space-y-2">
                        {[
                          '在线申请',
                          '资质审核', 
                          '面试洽谈',
                          '签订合同',
                          '选址评估',
                          '门店设计与装修',
                          '技术与运营培训',
                          '盛大开业'
                        ].map((step, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#00FFC2]/20 text-[#00FFC2] rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <span className="text-white">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Financial Performance Section */}
            <motion.section
              id="financial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <BarChart3 className="h-6 w-6 text-[#00FFC2]" />
                    财务表现 (2024年)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#00FFC2]/30">
                          <th className="text-left py-3 px-4 text-[#00FFC2]">指标</th>
                          <th className="text-left py-3 px-4 text-[#00FFC2]">2024年数据</th>
                          <th className="text-left py-3 px-4 text-[#00FFC2]">同比增幅</th>
                          <th className="text-left py-3 px-4 text-[#00FFC2]">行业地位</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#00FFC2]/20 hover:bg-black/40">
                          <td className="py-3 px-4 font-semibold text-white">营业收入</td>
                          <td className="py-3 px-4 text-white">248.3 亿元</td>
                          <td className="py-3 px-4 text-[#00FFC2]">+22.3%</td>
                          <td className="py-3 px-4 text-white">全球现制饮品企业第一</td>
                        </tr>
                        <tr className="border-b border-[#00FFC2]/20 hover:bg-black/40">
                          <td className="py-3 px-4 font-semibold text-white">净利润</td>
                          <td className="py-3 px-4 text-white">44.5 亿元</td>
                          <td className="py-3 px-4 text-[#00FFC2]">+39.8%</td>
                          <td className="py-3 px-4 text-white">行业利润规模第一</td>
                        </tr>
                        <tr className="border-b border-[#00FFC2]/20 hover:bg-black/40">
                          <td className="py-3 px-4 font-semibold text-white">毛利率</td>
                          <td className="py-3 px-4 text-white">32.5%</td>
                          <td className="py-3 px-4 text-[#00FFC2]">+3.0pct</td>
                          <td className="py-3 px-4 text-white">高于行业平均5-8pct</td>
                        </tr>
                        <tr className="border-b border-[#00FFC2]/20 hover:bg-black/40">
                          <td className="py-3 px-4 font-semibold text-white">净利率</td>
                          <td className="py-3 px-4 text-white">17.9%</td>
                          <td className="py-3 px-4 text-[#00FFC2]">+2.2pct</td>
                          <td className="py-3 px-4 text-white">行业领先</td>
                        </tr>
                        <tr className="hover:bg-black/40">
                          <td className="py-3 px-4 font-semibold text-white">经营活动现金流</td>
                          <td className="py-3 px-4 text-white">62.1 亿元</td>
                          <td className="py-3 px-4 text-[#00FFC2]">+41.2%</td>
                          <td className="py-3 px-4 text-white">现金储备111.1亿元，无有息负债</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4 text-[#00FFC2]">增长驱动力</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-[#00FFC2] mb-2">下沉市场红利</h5>
                        <p className="text-gray-300 text-sm">乡镇市场仍有30%渗透空间，是核心增长引擎</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-[#00FFC2] mb-2">海外扩张</h5>
                        <p className="text-gray-300 text-sm">东南亚市场年增速达25%，目标3年内海外收入占比达20%</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-[#00FFC2] mb-2">供应链壁垒</h5>
                        <p className="text-gray-300 text-sm">持续的供应链提效和成本优化，巩固"高质平价"护城河</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-[#00FFC2]/30">
                        <h5 className="font-semibold text-[#00FFC2] mb-2">多品牌战略</h5>
                        <p className="text-gray-300 text-sm">旗下"幸运咖"品牌门店数已跃居国内第四，开辟第二增长曲线</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Future Outlook Section */}
            <motion.section
              id="future"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <Target className="h-6 w-6 text-[#00FFC2]" />
                    未来展望
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/40 p-6 rounded-lg border border-[#00FFC2]/30">
                    <p className="text-lg text-white leading-relaxed">
                      光启茶韵将继续秉持"高质平价"的经营原则，在巩固下沉市场领导地位的同时，深化全球化布局，并通过产品创新与数字化运营，打开新的增长天花板。
                    </p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-black/40 border border-[#00FFC2]/30 rounded-lg">
                      <Globe className="h-8 w-8 mx-auto mb-2 text-[#00FFC2]" />
                      <h5 className="font-semibold text-white mb-1">全球化战略</h5>
                      <p className="text-sm text-gray-300">深化海外市场布局</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 border border-[#00FFC2]/30 rounded-lg">
                      <Coffee className="h-8 w-8 mx-auto mb-2 text-[#00FFC2]" />
                      <h5 className="font-semibold text-white mb-1">产品创新</h5>
                      <p className="text-sm text-gray-300">持续推出健康化新品</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 border border-[#00FFC2]/30 rounded-lg">
                      <Zap className="h-8 w-8 mx-auto mb-2 text-[#00FFC2]" />
                      <h5 className="font-semibold text-white mb-1">数字化运营</h5>
                      <p className="text-sm text-gray-300">提升运营效率和用户体验</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Personal Insights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-xl text-[#00FFC2]">个人思考与洞察</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-white leading-relaxed">
                      光启茶韵的成功模式值得深入研究。其"高质平价"的定位、垂直整合的供应链体系以及数字化驱动的运营模式，为现制饮品行业树立了新的标杆。特别是在下沉市场的深度渗透和海外扩张方面，展现了中国品牌的全球化潜力。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Related Tags */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card className="bg-black/60 border-[#00FFC2]/20">
                <CardHeader>
                  <CardTitle className="text-lg text-[#00FFC2]">相关标签</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '现制饮品', '连锁经营', '供应链管理', '数字化转型',
                      '下沉市场', '全球化', '品牌建设', '加盟模式'
                    ].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#00FFC2]/20 text-[#00FFC2] border border-[#00FFC2]/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}