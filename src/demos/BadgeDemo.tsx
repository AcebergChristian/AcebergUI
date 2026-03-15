import React from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Badge } from '../components/Badge'

export function BadgeDemo() {
  return (
    <DemoPage
      title="Badge"
      subtitle="徽章"
      description="用于标识状态、计数或分类的小型标签，支持多种颜色变体和点状指示。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="变体"
        description="支持 default、primary、success、warning、danger、info 六种颜色"
        preview={
          <>
            <Badge variant="default">默认</Badge>
            <Badge variant="primary">主要</Badge>
            <Badge variant="success">成功</Badge>
            <Badge variant="warning">警告</Badge>
            <Badge variant="danger">危险</Badge>
            <Badge variant="info">信息</Badge>
          </>
        }
        code={`<Badge variant="default">默认</Badge>
<Badge variant="primary">主要</Badge>
<Badge variant="success">成功</Badge>
<Badge variant="warning">警告</Badge>
<Badge variant="danger">危险</Badge>
<Badge variant="info">信息</Badge>`}
      />

      <DemoBlock
        title="点状指示"
        description="添加 dot 属性显示状态指示圆点"
        preview={
          <>
            <Badge variant="success" dot>在线</Badge>
            <Badge variant="warning" dot>繁忙</Badge>
            <Badge variant="danger" dot>离线</Badge>
            <Badge variant="info" dot>等待</Badge>
          </>
        }
        code={`<Badge variant="success" dot>在线</Badge>
<Badge variant="warning" dot>繁忙</Badge>
<Badge variant="danger" dot>离线</Badge>`}
      />

      <DemoBlock
        title="尺寸"
        description="支持 sm 和 md 两种尺寸"
        preview={
          <>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge variant="primary" size="sm">Primary SM</Badge>
            <Badge variant="primary" size="md">Primary MD</Badge>
          </>
        }
        code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: '颜色变体' },
          { prop: 'size', type: "'sm' | 'md'", default: "'md'", description: '尺寸' },
          { prop: 'dot', type: 'boolean', default: 'false', description: '是否显示状态圆点' },
          { prop: 'children', type: 'ReactNode', default: '-', description: '内容' },
        ]}
      />
    </DemoPage>
  )
}

export default BadgeDemo
