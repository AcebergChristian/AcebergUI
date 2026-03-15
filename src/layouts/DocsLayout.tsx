import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Navbar } from '../components/Navbar'

interface NavItem {
  key: string
  label: string
  to: string
}

interface NavGroup {
  group: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    group: '通用',
    items: [
      { key: 'button', label: 'Button 按钮', to: '/components/button' },
      { key: 'avatar', label: 'Avatar 头像', to: '/components/avatar' },
      { key: 'tag', label: 'Tag 标签', to: '/components/tag' },
    ],
  },
  {
    group: '表单',
    items: [
      { key: 'input', label: 'Input 输入框', to: '/components/input' },
      { key: 'badge', label: 'Badge 徽章', to: '/components/badge' },
    ],
  },
  {
    group: '数据展示',
    items: [
      { key: 'card', label: 'Card 卡片', to: '/components/card' },
      { key: 'table', label: 'Table 表格', to: '/components/table' },
      { key: 'tabs', label: 'Tabs 标签页', to: '/components/tabs' },
    ],
  },
  {
    group: '反馈',
    items: [
      { key: 'alert', label: 'Alert 提示', to: '/components/alert' },
      { key: 'modal', label: 'Modal 弹窗', to: '/components/modal' },
    ],
  },
]

function SidebarGroup({ group, items }: NavGroup) {
  const location = useLocation()
  const hasActive = items.some(item => location.pathname === item.to)
  const [open, setOpen] = useState(true || hasActive)

  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
      >
        {group}
        {open
          ? <ChevronDownIcon className="w-3.5 h-3.5" />
          : <ChevronRightIcon className="w-3.5 h-3.5" />}
      </button>
      {open && (
        <div className="mt-0.5 space-y-0.5">
          {items.map(item => {
            const isActive = location.pathname === item.to
            return (
              <Link
                key={item.key}
                to={item.to}
                className={[
                  'block px-3 py-2 text-sm rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-medium dark:bg-blue-950 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function DocsLayout() {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar showSearch />
      <div className="flex flex-1 max-w-[1600px] w-full mx-auto">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r border-gray-200 dark:border-gray-800 overflow-y-auto py-5 px-3">
          {/* Overview link */}
          <Link
            to="/components"
            className={[
              'block px-3 py-2 text-sm rounded-lg mb-3 font-medium transition-colors',
              location.pathname === '/components'
                ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
            ].join(' ')}
          >
            组件总览
          </Link>
          <div className="space-y-4">
            {navGroups.map(group => (
              <SidebarGroup key={group.group} {...group} />
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 py-10 px-8 xl:px-12">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DocsLayout
