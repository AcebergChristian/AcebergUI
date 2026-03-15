import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Tabs } from '../components/Tabs'

export function TabsDemo() {
  const [active, setActive] = useState('1')

  return (
    <DemoPage
      title="Tabs"
      subtitle="标签页"
      description="选项卡切换组件，用于在同一区域内切换不同内容，支持受控和非受控模式。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="基础用法"
        preview={
          <Tabs
            className="w-full"
            items={[
              { key: '1', label: '概览', children: <p className="text-gray-600 dark:text-gray-400">这是概览标签页的内容，可以放置图表或统计数据。</p> },
              { key: '2', label: '详情', children: <p className="text-gray-600 dark:text-gray-400">这是详情标签页的内容，展示具体信息。</p> },
              { key: '3', label: '设置', children: <p className="text-gray-600 dark:text-gray-400">这是设置标签页，可以放置表单配置项。</p> },
            ]}
          />
        }
        code={`<Tabs
  items={[
    { key: '1', label: '概览', children: <p>概览内容</p> },
    { key: '2', label: '详情', children: <p>详情内容</p> },
    { key: '3', label: '设置', children: <p>设置内容</p> },
  ]}
/>`}
      />

      <DemoBlock
        title="受控模式"
        description="通过 activeKey 和 onChange 控制当前激活的标签"
        preview={
          <Tabs
            className="w-full"
            activeKey={active}
            onChange={setActive}
            items={[
              { key: '1', label: `全部`, children: <p className="text-gray-600 dark:text-gray-400">显示所有内容</p> },
              { key: '2', label: '进行中', children: <p className="text-gray-600 dark:text-gray-400">显示进行中的内容</p> },
              { key: '3', label: '已完成', children: <p className="text-gray-600 dark:text-gray-400">显示已完成的内容</p> },
            ]}
          />
        }
        code={`const [active, setActive] = useState('1')

<Tabs
  activeKey={active}
  onChange={setActive}
  items={[
    { key: '1', label: '全部', children: <p>显示所有内容</p> },
    { key: '2', label: '进行中', children: <p>进行中的内容</p> },
    { key: '3', label: '已完成', children: <p>已完成的内容</p> },
  ]}
/>`}
      />

      <DemoBlock
        title="禁用标签"
        description="设置 disabled 禁用某个标签"
        preview={
          <Tabs
            className="w-full"
            items={[
              { key: '1', label: '可用', children: <p className="text-gray-600 dark:text-gray-400">正常可用的标签页内容。</p> },
              { key: '2', label: '禁用', disabled: true, children: <p>不可见</p> },
              { key: '3', label: '可用', children: <p className="text-gray-600 dark:text-gray-400">另一个可用标签页。</p> },
            ]}
          />
        }
        code={`<Tabs
  items={[
    { key: '1', label: '可用', children: <p>正常可用的标签页内容。</p> },
    { key: '2', label: '禁用', disabled: true, children: <p>...</p> },
    { key: '3', label: '可用', children: <p>另一个可用标签页。</p> },
  ]}
/>`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'items', type: 'TabItem[]', default: '-', description: '标签项配置数组' },
          { prop: 'defaultActiveKey', type: 'string', default: '第一项', description: '非受控模式下的默认激活 key' },
          { prop: 'activeKey', type: 'string', default: '-', description: '受控模式下当前激活的 key' },
          { prop: 'onChange', type: '(key: string) => void', default: '-', description: '切换标签时的回调' },
        ]}
      />
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">TabItem</h3>
        <PropsTable
          rows={[
            { prop: 'key', type: 'string', default: '-', description: '唯一标识' },
            { prop: 'label', type: 'ReactNode', default: '-', description: '标签标题' },
            { prop: 'children', type: 'ReactNode', default: '-', description: '标签内容' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
          ]}
        />
      </div>
    </DemoPage>
  )
}

export default TabsDemo
