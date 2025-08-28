"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Zap, Users, IterationCcw, Lightbulb } from "lucide-react";

const sections = [
  {
    title: "工具选用：精准指令是激活价值的关键",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    points: [
      "Cursor、ChatGPT-5、Gemini 2.5 Pro 等工具为代码编写提供了强大支持。",
      "Chiree 价格亲民且能预览画面，适合基础辅助。",
      "Cursor 在写代码和解决报错问题上针对性更强。",
      "Group16 或 Gemini 2.5 Pro 凭借出色的推理能力，能先拆解复杂需求，再由 Cursor 落地实现。",
    ],
  },
  {
    title: "前端设计与代码管理：工具适配场景的逻辑",
    icon: <Users className="w-8 h-8 text-blue-400" />,
    points: [
      "V0 能快速搭建视觉框架，兼顾设计感与灵活性。",
      "代码同步到 GitHub，通过协作者或 fork 模式进行团队协作。",
    ],
  },
  {
    title: "项目部署：细节把控决定产品能否稳定落地",
    icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    points: [
      "部署前需在环境变量中配置好 API 等信息。",
      "通过购买专属网址并配置 DNS，将代码转化为 “属于自己的产品”。",
    ],
  },
  {
    title: "人机决策边界：在与 AI 深度协作中的困惑",
    icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
    points: [
      "AI 并非万能，需要明确指令才能避免偏离预期。",
      "关键的逻辑梳理、项目审查环节，依然需要人工介入。",
      "高效模式：先让 AI 理解需求，人确认后再让其执行。",
    ],
  },
  {
    title: "快速验证：迭代思维贯穿始终",
    icon: <IterationCcw className="w-8 h-8 text-indigo-400" />,
    points: [
      "通过用户研究、原型开发快速验证想法，比写复杂的 PRD 文档更高效。",
      "根据种子用户的反馈，迅速加入便利性功能，如跳过和语音输入。",
      "借鉴市面上成熟的方案，优化产品设计。",
    ],
  },
  {
    title: "AI “幻觉” 问题：对数据真实性的警醒",
    icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
    points: [
      "AI 为了快速实现 MVP，可能会捏造模拟数据。",
      "铁律：所有定性分析都必须从用户的真实数据库中调用资料，绝不允许凭空创造。",
    ],
  },
  {
    title: "DDL 与产品质量的抉择",
    icon: <CheckCircle className="w-8 h-8 text-teal-400" />,
    points: [
      "赶进度时，可优先确保核心功能跑通。",
      "发布给外部用户前，必须完成完整的用户场景测试。",
      "用户留存的关键是 “能用、好用” 且真实可靠的产品价值。",
    ],
  },
];

export default function FutureUSummaryPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
            AI 助力下的产品开发之旅
          </h1>
          <p className="mt-4 text-lg text-gray-300">从工具实践到深层思考</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4">
                  {section.icon}
                  <CardTitle className="text-2xl font-semibold text-gray-100">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: sections.length * 0.1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-100">未来展望</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            这段开发历程，既是工具与技术的实践，也是对 “人如何与 AI 共生、如何平衡效率与质量” 的思考。未来，我会继续带着这些经验，在产品开发的路上不断调整节奏：既善用 AI 提升效率，也守住人工决策与数据验证的核心底线；既保持快速验证的灵活，也不放松对产品质量与真实性的敬畏。相信这样的平衡，能让每一个产品都既 “跑得起来”，又 “走得长远”。
          </p>
        </motion.div>
      </div>
    </div>
  );
}