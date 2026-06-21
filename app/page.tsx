import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github, Mail, ArrowUpRight, Code2, Palette, Smartphone } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "1",
    category: "Web 开发",
    description: "为零售品牌打造的高性能电商前端，提升转化率 40%。",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "2",
    category: "数据可视化",
    description: "面向运营团队的实时数据看板，支持多维度交互分析。",
    tags: ["React", "D3.js", "WebSocket"],
  },
  {
    title: "3",
    category: "UI / UX 设计",
    description: "从零搭建的设计系统与组件库，统一跨平台视觉语言。",
    tags: ["Figma", "Design System", "Motion"],
  },
  {
    title: "4",
    category: "移动开发",
    description: "聚焦兴趣社群的轻量级社交 App，月活突破 10 万。",
    tags: ["React Native", "Expo", "GraphQL"],
  },
]

const skills = [
  {
    icon: Code2,
    title: "前端开发",
    description: "精通 React、Next.js 与 TypeScript，构建高性能可维护的现代 Web 应用。",
  },
  {
    icon: Palette,
    title: "界面设计",
    description: "擅长视觉设计与交互设计，注重细节与用户体验，打造美观且易用的产品。",
  },
  {
    icon: Smartphone,
    title: "移动开发",
    description: "使用 React Native 跨平台开发，交付流畅一致的移动端体验。",
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#5B4B8A] via-[#7B5B8A] to-[#8B6B9A]">
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://my.spline.design/motiontrails-mQJiWP02BoJRJj7QScWZ8Yil/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
          title="背景动画"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
        <span className="text-lg font-bold tracking-widest text-white">ALEX.DEV</span>
        <ul className="hidden gap-10 text-sm font-bold tracking-wide text-white md:flex">
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <a href="#about">关于</a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <a href="#projects">作品</a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <a href="#skills">技能</a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <a href="#contact">联系</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-between gap-12 px-8 pt-12 md:flex-row md:px-16"
      >
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-200/90">你好，我是</p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            创意设计师
            <br />
            与前端开发者
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/90">
            我热衷于将创意与代码结合，打造兼具美感与性能的数字产品。拥有 6 年以上的设计与开发经验，专注于
            Web 与移动端体验。
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
              asChild
            >
              <a href="#projects">查看作品</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-red-400 hover:bg-white/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
              asChild
            >
              <a href="#contact">联系我</a>
            </Button>
          </div>

          <div className="flex gap-8 text-white">
            <div>
              <p className="text-3xl font-bold">6+</p>
              <p className="text-sm text-white/70">年经验</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-white/70">项目交付</p>
            </div>
            <div>
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm text-white/70">合作客户</p>
            </div>
          </div>
        </div>

        <div className="relative animate-pulse-scale transition-transform duration-500 hover:scale-105">
          <div className="relative h-[420px] w-[320px] md:h-[600px] md:w-[460px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2812%29-AUzcUJl45XueiOf0D1t9cvkzHg1wce.png"
              alt="个人作品集主视觉"
              fill
              className="object-contain transition-all duration-500"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 150px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-8 py-24 md:px-16">
        <h2 className="mb-3 text-center text-4xl font-bold text-white">我的技能</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/80">从设计到开发，我提供端到端的产品落地能力。</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-red-400/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <skill.icon className="mb-5 h-10 w-10 text-red-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              <h3 className="mb-3 text-xl font-bold text-white">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-8 py-24 md:px-16">
        <h2 className="mb-3 text-center text-4xl font-bold text-white">精选作品</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/80">部分代表性项目，涵盖设计、开发与产品落地。</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-red-400/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-200/90">
                  {project.category}
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/60 transition-all duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/80">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-8 pb-32 pt-12 text-center md:px-16">
        <h2 className="mb-3 text-4xl font-bold text-white">让我们一起合作</h2>
        <p className="mx-auto mb-8 max-w-xl text-white/80">有想法或项目需求？欢迎随时与我取得联系。</p>
        <Button
          size="lg"
          className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
          asChild
        >
          <a href="mailto:hello@alex.dev">
            <Mail className="mr-2 h-4 w-4" />
            发送邮件
          </a>
        </Button>

        <div className="mt-12 flex justify-center gap-6">
          <Github className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          <Twitter className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          <Linkedin className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          <Mail className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        </div>
      </section>
    </div>
  )
}
