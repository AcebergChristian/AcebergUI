import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { Tag } from '../components/Tag'
import { Avatar } from '../components/Avatar'
import { Card } from '../components/Card'
import { Input } from '../components/Input'

interface ComponentCard {
  key: string
  title: string
  to: string
  preview: React.ReactNode
}

const groups: { title: string; count: number; items: ComponentCard[] }[] = [
  {
    title: '通用',
    count: 3,
    items: [
      {
        key: 'button',
        title: 'Button 按钮',
        to: '/components/button',
        preview: (
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Button variant="primary" size="sm">主要</Button>
            <Button variant="secondary" size="sm">次要</Button>
            <Button variant="danger" size="sm">危险</Button>
          </div>
        ),
      },
      {
        key: 'avatar',
        title: 'Avatar 头像',
        to: '/components/avatar',
        preview: (
          <div className="flex items-end gap-2 justify-center pt-2">
            <Avatar name="Alice Wang" size="xl" status="online" />
            <Avatar name="Bob Lee" size="lg" />
            <Avatar size="md" />
          </div>
        ),
      },
      {
        key: 'tag',
        title: 'Tag 标签',
        to: '/components/tag',
        preview: (
          <div className="flex flex-wrap gap-1.5 justify-center pt-2">
            <Tag variant="primary">React</Tag>
            <Tag variant="success">Tailwind</Tag>
            <Tag variant="warning">Beta</Tag>
            <Tag variant="info">v1.0</Tag>
          </div>
        ),
      },
    ],
  },
  {
    title: '表单',
    count: 2,
    items: [
      {
        key: 'input',
        title: 'Input 输入框',
        to: '/components/input',
        preview: (
          <div className="space-y-2 pt-2 w-full">
            <Input placeholder="请输入内容..." inputSize="sm" />
            <Input placeholder="带错误状态" error="输入有误" inputSize="sm" />
          </div>
        ),
      },
      {
        key: 'badge',
        title: 'Badge 徽章',
        to: '/components/badge',
        preview: (
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Badge variant="primary" dot>进行中</Badge>
            <Badge variant="success" dot>已完成</Badge>
            <Badge variant="danger" dot>失败</Badge>
            <Badge variant="warning" dot>警告</Badge>
          </div>
        ),
      },
    ],
  },
  {
    title: '数据展示',
    count: 3,
    items: [
      {
        key: 'card',
        title: 'Card 卡片',
        to: '/components/card',
        preview: (
          <Card title="卡片标题" extra={<span className="text-blue-500 text-xs cursor-pointer">更多</span>} className="w-full mt-2 shadow-none text-xs">
            <p className="text-gray-500 dark:text-gray-400 text-xs">卡片内容区域，支持 title、extra、footer 插槽。</p>
          </Card>
        ),
      },
      {
        key: 'table',
        title: 'Table 表格',
        to: '/components/table',
        preview: (
          <div className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-xs">
            <div className="bg-gray-50 dark:bg-gray-800/60 grid grid-cols-3 px-3 py-2 font-semibold text-gray-500 dark:text-gray-400">
              <span>姓名</span><span>角色</span><span>状态</span>
            </div>
            <div className="grid grid-cols-3 px-3 py-2 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
              <span>张三</span><span>管理员</span><span className="text-green-500">在线</span>
            </div>
            <div className="grid grid-cols-3 px-3 py-2 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
              <span>李四</span><span>用户</span><span className="text-gray-400">离线</span>
            </div>
          </div>
        ),
      },
      {
        key: 'tabs',
        title: 'Tabs 标签页',
        to: '/components/tabs',
        preview: (
          <div className="w-full mt-2">
            <div className="flex border-b border-gray-200 dark:border-gray-700 text-xs">
              <span className="px-3 py-2 font-medium text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400">概览</span>
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">详情</span>
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">设置</span>
            </div>
            <p className="pt-3 text-xs text-gray-500 dark:text-gray-400">标签页内容区域</p>
          </div>
        ),
      },
    ],
  },
  {
    title: '反馈',
    count: 2,
    items: [
      {
        key: 'alert',
        title: 'Alert 提示',
        to: '/components/alert',
        preview: (
          <div className="space-y-2 w-full mt-2">
            <div className="flex gap-2 items-start rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-3 py-2 text-xs text-green-700 dark:text-green-300">
              <span className="shrink-0 mt-0.5">✓</span><span>操作成功完成</span>
            </div>
            <div className="flex gap-2 items-start rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-2 text-xs text-blue-700 dark:text-blue-300">
              <span className="shrink-0 mt-0.5">ℹ</span><span>这是一条信息提示</span>
            </div>
          </div>
        ),
      },
      {
        key: 'modal',
        title: 'Modal 弹窗',
        to: '/components/modal',
        preview: (
          <div className="mt-2 w-full rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm text-xs">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
              <span className="font-semibold text-gray-800 dark:text-gray-200">确认操作</span>
              <span className="text-gray-400 cursor-pointer">✕</span>
            </div>
            <div className="px-3 py-3 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">确定要执行此操作吗？</div>
            <div className="flex justify-end gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-pointer">取消</span>
              <span className="px-2 py-1 rounded-md bg-blue-600 text-white cursor-pointer">确定</span>
            </div>
          </div>
        ),
      },
    ],
  },
]

export function ComponentsPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">组件总览</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
          AcebergUI 提供了一套完整的基础 UI 组件，基于 Tailwind CSS 构建，支持明暗双主题，
          全量 TypeScript 类型定义，满足现代 Web 应用的常见 UI 需求。
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-10">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="搜索组件..."
          className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Groups */}
      {groups.map(group => (
        <section key={group.title} className="mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{group.title}</h2>
            <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {group.count}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.items.map(item => (
              <Link
                key={item.key}
                to={item.to}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Preview area */}
                <div className="p-5 min-h-[130px] flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/30">
                  {item.preview}
                </div>
                {/* Label */}
                <div className="px-5 py-3.5 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ComponentsPage
