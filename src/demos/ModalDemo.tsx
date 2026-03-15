import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'

export function ModalDemo() {
  const [basic, setBasic] = useState(false)
  const [confirm, setConfirm] = useState(false)

  return (
    <DemoPage
      title="Modal"
      subtitle="弹窗"
      description="浮层对话框，用于需要用户处理事务又不希望跳转页面的场景。支持 Esc 关闭、点击遮罩关闭。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <Modal open={basic} onClose={() => setBasic(false)} title="基础弹窗">
        <p>这是弹窗内容区域，可以放置任意 React 内容。</p>
        <p className="mt-2 text-gray-400 dark:text-gray-500">按 Esc 键或点击遮罩可关闭弹窗。</p>
      </Modal>

      <Modal
        open={confirm}
        onClose={() => setConfirm(false)}
        title="确认操作"
        footer={
          <>
            <Button variant="outline" onClick={() => setConfirm(false)}>取消</Button>
            <Button variant="danger" onClick={() => setConfirm(false)}>删除</Button>
          </>
        }
      >
        <p>确定要删除该条目吗？此操作不可撤销。</p>
      </Modal>

      <DemoBlock
        title="基础用法"
        preview={<Button onClick={() => setBasic(true)}>打开弹窗</Button>}
        code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>打开弹窗</Button>

<Modal open={open} onClose={() => setOpen(false)} title="基础弹窗">
  <p>这是弹窗内容区域。</p>
</Modal>`}
      />

      <DemoBlock
        title="确认对话框"
        description="通过 footer 插槽自定义底部按钮"
        preview={<Button variant="danger" onClick={() => setConfirm(true)}>删除确认</Button>}
        code={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="确认操作"
  footer={
    <>
      <Button variant="outline" onClick={() => setOpen(false)}>取消</Button>
      <Button variant="danger" onClick={() => setOpen(false)}>删除</Button>
    </>
  }
>
  <p>确定要删除该条目吗？此操作不可撤销。</p>
</Modal>`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'open', type: 'boolean', default: '-', description: '是否显示弹窗（受控）' },
          { prop: 'onClose', type: '() => void', default: '-', description: '关闭回调' },
          { prop: 'title', type: 'ReactNode', default: '-', description: '弹窗标题' },
          { prop: 'footer', type: 'ReactNode', default: '-', description: '底部内容，通常为操作按钮' },
          { prop: 'width', type: 'string', default: "'max-w-lg'", description: '弹窗宽度（Tailwind 类名）' },
          { prop: 'closeOnOverlay', type: 'boolean', default: 'true', description: '点击遮罩是否关闭' },
        ]}
      />
    </DemoPage>
  )
}

export default ModalDemo
