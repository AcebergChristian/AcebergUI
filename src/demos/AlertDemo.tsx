import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Alert } from '../components/Alert'

export function AlertDemo() {
  const [visible, setVisible] = useState(true)

  return (
    <DemoPage
      title="Alert"
      subtitle="提示"
      description="用于页面中展示重要的提示信息，支持成功、错误、警告、信息四种类型，可关闭。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="四种类型"
        preview={
          <div className="space-y-3 w-full">
            <Alert type="success" title="操作成功">数据已保存，即将跳转到详情页面。</Alert>
            <Alert type="error" title="请求失败">网络连接超时，请检查网络后重试。</Alert>
            <Alert type="warning" title="权限不足">您没有访问该资源的权限，请联系管理员。</Alert>
            <Alert type="info" title="系统通知">系统将于今晚 22:00 进行维护，请提前保存数据。</Alert>
          </div>
        }
        code={`<Alert type="success" title="操作成功">数据已保存，即将跳转到详情页面。</Alert>
<Alert type="error" title="请求失败">网络连接超时，请检查网络后重试。</Alert>
<Alert type="warning" title="权限不足">您没有访问该资源的权限，请联系管理员。</Alert>
<Alert type="info" title="系统通知">系统将于今晚 22:00 进行维护，请提前保存数据。</Alert>`}
      />

      <DemoBlock
        title="仅描述"
        description="不设置 title 时只显示描述文字"
        preview={
          <div className="space-y-3 w-full">
            <Alert type="success">操作已成功完成。</Alert>
            <Alert type="info">这是一条普通信息提示。</Alert>
          </div>
        }
        code={`<Alert type="success">操作已成功完成。</Alert>
<Alert type="info">这是一条普通信息提示。</Alert>`}
      />

      <DemoBlock
        title="可关闭"
        description="设置 closable 后显示关闭按钮"
        preview={
          visible ? (
            <Alert
              type="warning"
              title="注意"
              closable
              onClose={() => setVisible(false)}
            >
              这条提示可以被关闭。
            </Alert>
          ) : (
            <button
              className="text-sm text-blue-500 underline"
              onClick={() => setVisible(true)}
            >
              重新显示
            </button>
          )
        }
        code={`const [visible, setVisible] = useState(true)

{visible && (
  <Alert type="warning" title="注意" closable onClose={() => setVisible(false)}>
    这条提示可以被关闭。
  </Alert>
)}`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'type', type: "'success' | 'error' | 'warning' | 'info'", default: "'info'", description: '提示类型' },
          { prop: 'title', type: 'string', default: '-', description: '标题' },
          { prop: 'children', type: 'ReactNode', default: '-', description: '描述内容' },
          { prop: 'closable', type: 'boolean', default: 'false', description: '是否显示关闭按钮' },
          { prop: 'onClose', type: '() => void', default: '-', description: '关闭回调' },
        ]}
      />
    </DemoPage>
  )
}

export default AlertDemo
