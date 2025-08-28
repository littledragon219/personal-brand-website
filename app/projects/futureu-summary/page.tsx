'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Code, Users, Target, Zap, Brain } from 'lucide-react'
import Image from 'next/image'

export default function FutureUSummaryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardHoverEffect = {
    y: -5,
    boxShadow: '0 10px 20px rgba(0, 255, 255, 0.1)',
    transition: { duration: 0.3 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-900 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-500/20" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </Button>
        </motion.div>

        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI 助力下的产品开发之旅
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            是一个集 练习、评估、分析、提升 于一体的综合性职业发展平台，为用户提供沉浸式面试体验以及生成深度、多维度的能力评估报告和个性化的提升建议，从而帮助用户在求职过程中脱颖而出。
          </p>
        </motion.div>

        {/* 团队照片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <Image 
                src="/groupphoto.jpg" 
                alt="团队合影" 
                width={1200} 
                height={600} 
                className="w-full h-auto md:h-[500px] object-cover object-center"
              />
              <div className="p-6">
                <p className="text-gray-300 text-center italic">
                  与团队一起探索AI产品开发的无限可能
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 文章内容 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* 目标用户 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Users className="w-6 h-6" />
                  </div>
                  目标用户
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  主要面向对求职结果有较高期望、愿意投入时间进行系统性准备的 高校学生、应届毕业生和处于职业转型期的专业人士 。他们不仅需要面试练习的机会，更看重通过练习获得专业的、数据驱动的、个性化的指导，以实现能力的实质性提升。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 核心价值主张 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  核心价值主张
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  “您的专属 AI 求职教练，通过数据洞察，精准提升您的面试竞争力。”
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  这个定位强调了产品超越“工具”属性的“教练”角色。核心价值不在于“练习”，而在于练习后的 “诊断” 和 “处方” 。我们帮助用户“知其然，更知其所以然”，明确知道自己哪里做得好，哪里需要改进，以及如何改进。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 工具选用篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  工具选用：精准指令是激活价值的关键
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  在开发FutureU项目的过程中，我深刻体会到了工具选择的重要性。每一个AI工具都有其独特的优势和适用场景，关键在于如何根据具体需求进行精准匹配。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Cursor、ChatGPT-5、Gemini 2.5 Pro这些工具为代码编写提供了强大的支持，但我发现它们各有所长。Cursor在代码编写和错误调试方面表现出色，其针对性的建议往往能够快速解决技术难题。而Chiree虽然价格亲民且能够实时预览效果，但更适合作为基础辅助工具使用。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  最让我印象深刻的是Group16和Gemini 2.5 Pro的推理能力。当面对复杂需求时，它们能够先进行需求拆解和架构设计，然后再由Cursor进行具体的代码实现。这种分工协作的模式，让我意识到AI工具的价值不仅在于执行，更在于思考和规划。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 前端设计与代码管理篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Code className="w-6 h-6" />
                  </div>
                  前端设计与代码管理：工具适配场景的逻辑
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  V0作为快速原型工具，在项目初期发挥了重要作用。它能够快速搭建视觉框架，在保证设计感的同时提供了足够的灵活性。这让我能够在短时间内将想法转化为可视化的界面，为后续的开发工作奠定了坚实的基础。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  在代码管理方面，GitHub的协作机制让我深刻理解了现代软件开发的工作流程。通过fork模式和协作者权限的合理运用，团队成员能够高效地进行代码协作，同时保证了代码质量和版本控制的规范性。这种经历让我认识到，技术工具的选择不仅要考虑功能性，更要考虑团队协作的便利性。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 项目部署篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Target className="w-6 h-6" />
                  </div>
                  项目部署：细节把控决定产品能否稳定落地
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  项目部署阶段让我深刻体会到了细节的重要性。部署前的环境变量配置、API信息的正确设置，每一个看似微小的环节都可能影响整个产品的稳定性。通过购买专属网址并配置DNS，我将代码真正转化为了"属于自己的产品"，这种从技术实现到产品交付的完整体验，让我对产品开发有了更深层的理解。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  在这个过程中，我学会了如何系统性地检查每一个部署环节，从依赖版本的兼容性到服务器配置的正确性。这种细致入微的把控能力，正是产品经理在技术管理中需要具备的核心素养。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 人机决策边界篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  人机决策边界：在与AI深度协作中的困惑与思考
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  与AI的深度协作让我重新审视了人机关系的边界。AI并非万能，它需要明确的指令才能避免偏离预期。在项目开发过程中，我发现关键的逻辑梳理、项目审查环节，依然需要人工的深度介入和判断。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  通过不断的实践，我摸索出了一种高效的协作模式：先让AI理解需求和背景，人进行确认和调整后，再让AI执行具体的实现工作。这种模式既发挥了AI的执行效率，又保证了人的决策主导权。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  这个过程让我思考，在AI时代，产品经理的价值不在于替代AI，而在于更好地引导和管理AI，让技术真正服务于产品目标和用户需求。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 快速验证篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  快速验证：迭代思维贯穿始终
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  在FutureU的开发过程中，我深刻体会到了快速验证的重要性。通过用户研究和原型开发来快速验证想法，比编写复杂的PRD文档更加高效和实用。这种敏捷的开发思维让我能够快速响应市场需求，及时调整产品方向。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  根据种子用户的反馈，我迅速加入了便利性功能，如跳过选项和语音输入。这些看似简单的功能改进，却显著提升了用户体验。同时，我也学会了借鉴市面上成熟的解决方案，在保持产品独特性的同时，优化整体的设计逻辑。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  这种迭代思维不仅体现在功能开发上，更体现在整个产品策略的制定过程中。快速试错、快速学习、快速调整，成为了我在产品开发中的核心方法论。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI幻觉问题篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                    <Target className="w-6 h-6" />
                  </div>
                  AI"幻觉"问题：对数据真实性的警醒
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  在开发过程中，我遇到了一个令人深思的问题：AI为了快速实现MVP，有时会捏造模拟数据来填充功能演示。这个发现让我对AI工具的使用产生了更深层的思考。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  我为此建立了一个铁律：所有定性分析都必须从用户的真实数据库中调用资料，绝不允许凭空创造。这不仅是对用户的负责，更是对产品真实性和可信度的坚持。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  这个经历让我意识到，在享受AI带来的便利的同时，我们必须时刻保持对数据真实性的敬畏和警觉。作为产品经理，确保产品的真实性和可靠性，是我们不可推卸的责任。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* DDL与质量平衡篇 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Users className="w-6 h-6" />
                  </div>
                  DDL与产品质量的抉择
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  在项目推进过程中，我经常面临时间压力与产品质量之间的平衡选择。通过实践，我学会了在赶进度时优先确保核心功能的稳定运行，但在发布给外部用户前，必须完成完整的用户场景测试。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  这种平衡并不容易把握，但我逐渐明白，用户留存的关键在于产品能够提供"能用、好用"且真实可靠的价值。短期的功能缺失可以通过迭代来补充，但用户信任一旦失去，就很难重新建立。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  因此，我学会了在项目管理中设置合理的质量底线，既保证了交付效率，又维护了产品的长期价值。这种平衡能力，将是我在未来产品管理工作中的重要资产。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 总结与展望 */}
          <motion.div variants={itemVariants} whileHover={cardHoverEffect}>
            <Card className="bg-teal-900/30 backdrop-blur-sm border border-teal-500/50 rounded-2xl shadow-lg overflow-hidden h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  学习收获与未来展望
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  这段开发历程，既是工具与技术的实践，也是对"人如何与AI共生、如何平衡效率与质量"的深度思考。通过FutureU项目，我不仅掌握了AI工具的使用技巧，更重要的是形成了系统性的产品开发思维。
                </p>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  未来，我会继续带着这些经验，在产品开发的路上不断调整节奏：既善用AI提升效率，也守住人工决策与数据验证的核心底线；既保持快速验证的灵活性，也不放松对产品质量与真实性的敬畏。
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  相信这样的平衡，能让每一个产品都既"跑得起来"，又"走得长远"。在AI时代，产品经理的价值不在于被技术替代，而在于更好地驾驭技术，让技术真正服务于用户价值的创造。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}