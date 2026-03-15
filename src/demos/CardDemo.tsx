import React from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'

export function CardDemo() {
  return (
    <DemoPage
      title="Card"
      subtitle="卡片"
      description="通用卡片容器，支持标题、额外操作、内容区域和底部插槽，可选悬停效果。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="基础用法"
        preview={
          <Card title="卡片标题" className="w-80">
            <p className="text-sm text-gray-600 dark:text-gray-400">这是卡片的内容区域，可以放置任意内容。</p>
          </Card>
        }
        code={`<Card title="卡片标题">
  <p>这是卡片的内容区域，可以放置任意内容。</p>
</Card>`}
      />

      <DemoBlock
        title="带操作和底部"
        description="通过 extra 和 footer 插槽添加额外内容"
        preview={
          <Card
            title="用户信息"
            extra={<Badge variant="success" dot>在线</Badge>}
            footer={
              <div className="flex gap-2">
                <Button size="sm" variant="outline">取消</Button>
                <Button size="sm">保存</Button>
              </div>
            }
            className="w-80"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">这里展示用户的详细信息。</p>
          </Card>
        }
        code={`<Card
  title="用户信息"
  extra={<Badge variant="success" dot>在线</Badge>}
  footer={
    <div className="flex gap-2">
      <Button size="sm" variant="outline">取消</Button>
      <Button size="sm">保存</Button>
    </div>
  }
>
  <p>这里展示用户的详细信息。</p>
</Card>`}
      />

      <DemoBlock
        title="悬停效果"
        description="设置 hoverable 属性开启悬停阴影"
        preview={
          <div className="flex gap-4 flex-wrap">
            <Card title="悬停卡片 1" hoverable className="w-44">
              <p className="text-xs text-gray-500">悬停可见阴影效果</p>
            </Card>
            <Card title="悬停卡片 2" hoverable className="w-44">
              <p className="text-xs text-gray-500">悬停可见阴影效果</p>
            </Card>
          </div>
        }
        code={`<Card title="悬停卡片" hoverable>
  <p>悬停可见阴影效果</p>
</Card>`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'title', type: 'ReactNode', default: '-', description: '卡片标题' },
          { prop: 'extra', type: 'ReactNode', default: '-', description: '标题右侧额外内容' },
          { prop: 'footer', type: 'ReactNode', default: '-', description: '底部内容' },
          { prop: 'hoverable', type: 'boolean', default: 'false', description: '悬停时显示阴影' },
          { prop: 'bodyClassName', type: 'string', default: '-', description: '内容区自定义类名' },
          { prop: 'className', type: 'string', default: '-', description: '自定义类名' },
        ]}
      />
    </DemoPage>
  )
}

export default CardDemo
