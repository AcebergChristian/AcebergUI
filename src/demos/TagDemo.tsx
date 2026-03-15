import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Tag } from '../components/Tag'

export function TagDemo() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])

  return (
    <DemoPage
      title="Tag"
      subtitle="标签"
      description="用于标记和分类的小型标签，支持多种颜色变体、图标和可关闭功能。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="变体"
        preview={
          <>
            <Tag variant="default">默认</Tag>
            <Tag variant="primary">主要</Tag>
            <Tag variant="success">成功</Tag>
            <Tag variant="warning">警告</Tag>
            <Tag variant="danger">危险</Tag>
            <Tag variant="info">信息</Tag>
          </>
        }
        code={`<Tag variant="default">默认</Tag>
<Tag variant="primary">主要</Tag>
<Tag variant="success">成功</Tag>
<Tag variant="warning">警告</Tag>
<Tag variant="danger">危险</Tag>
<Tag variant="info">信息</Tag>`}
      />

      <DemoBlock
        title="可关闭"
        description="设置 closable 后显示关闭按钮，通过 onClose 回调处理"
        preview={
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Tag
                key={tag}
                variant="primary"
                closable
                onClose={() => setTags(prev => prev.filter(t => t !== tag))}
              >
                {tag}
              </Tag>
            ))}
            {tags.length === 0 && (
              <button
                className="text-xs text-blue-500 underline"
                onClick={() => setTags(['React', 'TypeScript', 'Tailwind'])}
              >
                重置
              </button>
            )}
          </div>
        }
        code={`const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])

{tags.map(tag => (
  <Tag
    key={tag}
    variant="primary"
    closable
    onClose={() => setTags(prev => prev.filter(t => t !== tag))}
  >
    {tag}
  </Tag>
))}`}
      />

      <DemoBlock
        title="技术栈标签组"
        preview={
          <div className="flex flex-wrap gap-1.5">
            {['React', 'Vue', 'Angular', 'Svelte', 'SolidJS'].map((t, i) => (
              <Tag key={t} variant={(['primary', 'success', 'info', 'warning', 'danger'] as const)[i % 5]}>
                {t}
              </Tag>
            ))}
          </div>
        }
        code={`const techs = ['React', 'Vue', 'Angular', 'Svelte', 'SolidJS']
const variants = ['primary', 'success', 'info', 'warning', 'danger']

{techs.map((t, i) => (
  <Tag key={t} variant={variants[i % variants.length]}>
    {t}
  </Tag>
))}`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: '颜色变体' },
          { prop: 'closable', type: 'boolean', default: 'false', description: '是否显示关闭按钮' },
          { prop: 'onClose', type: '() => void', default: '-', description: '关闭回调' },
          { prop: 'icon', type: 'ReactNode', default: '-', description: '前置图标' },
          { prop: 'children', type: 'ReactNode', default: '-', description: '标签内容' },
        ]}
      />
    </DemoPage>
  )
}

export default TagDemo
