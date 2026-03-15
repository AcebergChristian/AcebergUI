import React from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Input } from '../components/Input'
import { MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export function InputDemo() {
  return (
    <DemoPage
      title="Input"
      subtitle="输入框"
      description="基础表单控件，支持 label、hint、error、prefix/suffix、禁用状态等。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="基础用法"
        preview={
          <div className="w-full max-w-xs space-y-3">
            <Input placeholder="请输入内容..." />
            <Input label="用户名" placeholder="请输入用户名" />
            <Input label="邮箱" placeholder="name@example.com" hint="请填写有效的邮箱地址" />
          </div>
        }
        code={`<Input placeholder="请输入内容..." />
<Input label="用户名" placeholder="请输入用户名" />
<Input label="邮箱" placeholder="name@example.com" hint="请填写有效的邮箱地址" />`}
      />

      <DemoBlock
        title="状态"
        description="支持 error 错误状态和 disabled 禁用状态"
        preview={
          <div className="w-full max-w-xs space-y-3">
            <Input label="密码" placeholder="请输入密码" error="密码长度至少 8 位" />
            <Input label="用户名" placeholder="已禁用" disabled />
          </div>
        }
        code={`<Input label="密码" placeholder="请输入密码" error="密码长度至少 8 位" />
<Input label="用户名" placeholder="已禁用" disabled />`}
      />

      <DemoBlock
        title="前缀 & 后缀图标"
        description="通过 prefix / suffix prop 传入图标"
        preview={
          <div className="w-full max-w-xs space-y-3">
            <Input
              prefix={<MagnifyingGlassIcon className="w-4 h-4" />}
              placeholder="搜索..."
            />
            <Input
              label="邮箱"
              prefix={<EnvelopeIcon className="w-4 h-4" />}
              placeholder="name@example.com"
            />
          </div>
        }
        code={`import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

<Input prefix={<MagnifyingGlassIcon className="w-4 h-4" />} placeholder="搜索..." />
<Input label="邮箱" prefix={<EnvelopeIcon className="w-4 h-4" />} placeholder="name@example.com" />`}
      />

      <DemoBlock
        title="尺寸"
        preview={
          <div className="w-full max-w-xs space-y-3">
            <Input inputSize="sm" placeholder="Small" />
            <Input inputSize="md" placeholder="Medium（默认）" />
            <Input inputSize="lg" placeholder="Large" />
          </div>
        }
        code={`<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium（默认）" />
<Input inputSize="lg" placeholder="Large" />`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'label', type: 'string', default: '-', description: '输入框标签' },
          { prop: 'hint', type: 'string', default: '-', description: '提示文本，error 存在时不显示' },
          { prop: 'error', type: 'string', default: '-', description: '错误提示文本，会改变边框颜色' },
          { prop: 'prefix', type: 'ReactNode', default: '-', description: '前缀图标' },
          { prop: 'suffix', type: 'ReactNode', default: '-', description: '后缀图标' },
          { prop: 'inputSize', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '输入框尺寸' },
          { prop: 'disabled', type: 'boolean', default: 'false', description: '禁用状态' },
        ]}
      />
    </DemoPage>
  )
}

export default InputDemo
