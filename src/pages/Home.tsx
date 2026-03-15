import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BoltIcon,
  SwatchIcon,
  CodeBracketIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { Avatar } from '../components/Avatar'
import { Card } from '../components/Card'

const features = [
  {
    icon: BoltIcon,
    title: '轻量高效',
    desc: '基于 Tailwind CSS 构建，无多余运行时依赖，极致的包体积与性能表现。',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: SwatchIcon,
    title: 'Tailwind 驱动',
    desc: '原生 Tailwind 类名，完全可定制，轻松融入你的设计系统，无需额外配置。',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: MoonIcon,
    title: '明暗双主题',
    desc: '内置明色 / 暗色模式切换，主题状态持久化，适配系统偏好设置。',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    icon: CodeBracketIcon,
    title: 'TypeScript 优先',
    desc: '全组件完整类型定义，强类型 Props 提示，让开发更安全更高效。',
    color: 'text-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
  },
]

const componentPreviews = [
  {
    title: 'Button 按钮',
    desc: '通用 / 通用',
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="outline" size="sm">Outline</Button>
        <Button variant="danger" size="sm">Danger</Button>
      </div>
    ),
  },
  {
    title: 'Badge 徽章',
    desc: '表单 / 状态',
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge variant="success" dot>在线</Badge>
        <Badge variant="warning" dot>繁忙</Badge>
        <Badge variant="danger" dot>离线</Badge>
      </div>
    ),
  },
  {
    title: 'Tag 标签',
    desc: '通用 / 分类',
    preview: (
      <div className="flex flex-wrap gap-2 justify-center">
        <Tag variant="primary">React</Tag>
        <Tag variant="success">Tailwind</Tag>
        <Tag variant="info">TypeScript</Tag>
      </div>
    ),
  },
  {
    title: 'Avatar 头像',
    desc: '通用 / 展示',
    preview: (
      <div className="flex items-center gap-2 justify-center">
        <Avatar name="Alice Wang" size="md" status="online" />
        <Avatar name="Bob Lee" size="md" status="busy" />
        <Avatar size="md" />
      </div>
    ),
  },
  {
    title: 'Card 卡片',
    desc: '数据展示 / 容器',
    preview: (
      <Card title="卡片标题" extra={<span className="text-blue-500 text-xs">更多</span>} className="text-xs shadow-none">
        <p className="text-gray-500 dark:text-gray-400 text-xs">这是卡片的内容区域，可以放任何内容。</p>
      </Card>
    ),
  },
  {
    title: 'Alert 提示',
    desc: '反馈 / 状态',
    preview: (
      <div className="space-y-2 w-full">
        <div className="flex gap-2 items-center rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-3 py-2 text-xs text-green-700 dark:text-green-300">
          ✓ 操作成功完成
        </div>
        <div className="flex gap-2 items-center rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-3 py-2 text-xs text-red-700 dark:text-red-300">
          ✕ 请求发生错误
        </div>
      </div>
    ),
  },
]

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            v0.1.0 现已发布 · 基于 Tailwind CSS
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-5">
            优雅、快速的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400"> React</span>
            {' '}组件库
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            AcebergUI 是基于 Tailwind CSS 构建的现代化 React 组件库。
            简洁的 API、完整的 TypeScript 支持、内置明暗主题。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/components">
              <Button size="lg" variant="primary" icon={<ArrowRightIcon className="w-4 h-4" />}>
                浏览组件
              </Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                GitHub
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center justify-center gap-12 text-center">
            {[
              { value: '10+', label: '基础组件' },
              { value: '100%', label: 'TypeScript' },
              { value: '2', label: '主题模式' },
              { value: '0', label: '运行时依赖' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component preview grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">开箱即用的组件</h2>
            <p className="text-gray-500 dark:text-gray-400">精心设计的每一个细节，覆盖常用的 UI 场景</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {componentPreviews.map(item => (
              <Link
                key={item.title}
                to="/components"
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-4 min-h-[80px] flex items-center justify-center">
                  {item.preview}
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">为什么选择 AcebergUI？</h2>
            <p className="text-gray-500 dark:text-gray-400">专注于开发体验与视觉品质</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-800/50 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                >
                  <div className={`inline-flex p-3 rounded-xl ${f.bg} mb-4`}>
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-violet-600 dark:from-blue-800 dark:to-violet-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">立即开始使用</h2>
          <p className="text-blue-100 mb-8">安装简单，上手即用，专注你的产品本身</p>
          <div className="bg-white/10 dark:bg-white/5 rounded-xl px-5 py-3 font-mono text-sm text-white/90 mb-8 inline-block">
            npm install aceberg-ui
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/components">
              <Button variant="secondary" size="lg">
                查看组件文档
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#3b82f6"/>
              <path d="M8 24 L16 8 L24 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M11 19 L21 19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="font-semibold text-gray-700 dark:text-gray-300">AcebergUI</span>
          </div>
          <p>© 2026 AcebergUI. Built with React + Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <Link to="/components" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">组件</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
