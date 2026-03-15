import React from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Avatar } from '../components/Avatar'

export function AvatarDemo() {
  return (
    <DemoPage
      title="Avatar"
      subtitle="头像"
      description="用于展示用户或事物的图像，支持图片、姓名首字母、图标占位，可显示在线状态。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="类型"
        description="支持图片、姓名（自动生成首字母和颜色）、空占位三种类型"
        preview={
          <>
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="用户头像" />
            <Avatar name="Alice Wang" />
            <Avatar name="Bob Lee" />
            <Avatar name="Carol Johnson" />
            <Avatar />
          </>
        }
        code={`// 图片头像
<Avatar src="https://i.pravatar.cc/150?img=1" alt="用户头像" />

// 姓名头像（自动生成颜色和首字母）
<Avatar name="Alice Wang" />
<Avatar name="Bob Lee" />

// 空占位
<Avatar />`}
      />

      <DemoBlock
        title="尺寸"
        description="支持 xs、sm、md、lg、xl 五种尺寸"
        preview={
          <div className="flex items-end gap-3">
            <Avatar name="A" size="xs" />
            <Avatar name="B" size="sm" />
            <Avatar name="C" size="md" />
            <Avatar name="D" size="lg" />
            <Avatar name="E" size="xl" />
          </div>
        }
        code={`<Avatar name="A" size="xs" />
<Avatar name="B" size="sm" />
<Avatar name="C" size="md" />
<Avatar name="D" size="lg" />
<Avatar name="E" size="xl" />`}
      />

      <DemoBlock
        title="形状"
        description="支持 circle（圆形）和 square（方形）"
        preview={
          <>
            <Avatar name="Alice Wang" shape="circle" size="lg" />
            <Avatar name="Bob Lee" shape="square" size="lg" />
            <Avatar src="https://i.pravatar.cc/150?img=5" shape="square" size="lg" />
          </>
        }
        code={`<Avatar name="Alice" shape="circle" size="lg" />
<Avatar name="Bob" shape="square" size="lg" />`}
      />

      <DemoBlock
        title="在线状态"
        description="通过 status 属性显示用户状态徽标"
        preview={
          <>
            <Avatar name="Alice" size="lg" status="online" />
            <Avatar name="Bob" size="lg" status="busy" />
            <Avatar name="Carol" size="lg" status="away" />
            <Avatar size="lg" status="offline" />
          </>
        }
        code={`<Avatar name="Alice" size="lg" status="online" />
<Avatar name="Bob" size="lg" status="busy" />
<Avatar name="Carol" size="lg" status="away" />
<Avatar size="lg" status="offline" />`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'src', type: 'string', default: '-', description: '图片地址' },
          { prop: 'alt', type: 'string', default: '-', description: '图片 alt 文本' },
          { prop: 'name', type: 'string', default: '-', description: '用户姓名，自动生成首字母和颜色' },
          { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: '尺寸' },
          { prop: 'shape', type: "'circle' | 'square'", default: "'circle'", description: '形状' },
          { prop: 'status', type: "'online' | 'offline' | 'busy' | 'away'", default: '-', description: '状态徽标' },
        ]}
      />
    </DemoPage>
  )
}

export default AvatarDemo
