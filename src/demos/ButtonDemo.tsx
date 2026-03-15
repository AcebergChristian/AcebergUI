import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Button } from '../components/Button'
import { PlusIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export function ButtonDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <DemoPage
      title="Button"
      subtitle="按钮"
      description="触发操作或事件的交互元素。支持多种变体、尺寸、加载状态和图标。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="变体"
        description="按钮有 5 种变体：primary、secondary、outline、ghost、danger"
        preview={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </>
        }
        code={`import { Button } from 'aceberg-ui'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
      />

      <DemoBlock
        title="尺寸"
        description="支持 sm、md（默认）、lg 三种尺寸"
        preview={
          <>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </>
        }
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      />

      <DemoBlock
        title="带图标"
        description="通过 icon prop 传入图标，图标位于文字左侧"
        preview={
          <>
            <Button icon={<PlusIcon className="w-4 h-4" />}>新建</Button>
            <Button variant="outline" icon={<ArrowDownTrayIcon className="w-4 h-4" />}>下载</Button>
            <Button variant="ghost" icon={<PlusIcon className="w-4 h-4" />} />
          </>
        }
        code={`import { PlusIcon } from '@heroicons/react/24/outline'

<Button icon={<PlusIcon className="w-4 h-4" />}>新建</Button>
<Button variant="outline" icon={<ArrowDownTrayIcon className="w-4 h-4" />}>下载</Button>
// 仅图标
<Button variant="ghost" icon={<PlusIcon className="w-4 h-4" />} />`}
      />

      <DemoBlock
        title="加载 & 禁用"
        description="loading 状态会显示 spinner 并禁用按钮，disabled 直接禁用"
        preview={
          <>
            <Button
              loading={loading}
              onClick={() => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
              }}
            >
              {loading ? '加载中...' : '点击加载'}
            </Button>
            <Button disabled>已禁用</Button>
            <Button variant="outline" disabled>已禁用</Button>
          </>
        }
        code={`const [loading, setLoading] = useState(false)

<Button
  loading={loading}
  onClick={() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }}
>
  {loading ? '加载中...' : '点击加载'}
</Button>
<Button disabled>已禁用</Button>`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", default: "'primary'", description: '按钮变体' },
          { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '按钮尺寸' },
          { prop: 'loading', type: 'boolean', default: 'false', description: '加载状态，显示 spinner 并禁用按钮' },
          { prop: 'icon', type: 'ReactNode', default: '-', description: '左侧图标' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: '禁用状态' },
          { prop: 'children', type: 'ReactNode', default: '-', description: '按钮文本内容' },
          { prop: 'className', type: 'string', default: '-', description: '自定义 CSS 类名' },
        ]}
      />
    </DemoPage>
  )
}

export default ButtonDemo
