import React, { useState } from 'react'
import { DemoBlock, DemoPage, PropsTable } from './DemoUtils'
import { Table, TableColumn } from '../components/Table'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Tag } from '../components/Tag'

interface User {
  id: number
  name: string
  role: string
  status: 'online' | 'offline' | 'busy'
  joinDate: string
}

const data: User[] = [
  { id: 1, name: '张三', role: '管理员', status: 'online', joinDate: '2024-01-15' },
  { id: 2, name: '李四', role: '开发者', status: 'busy', joinDate: '2024-03-22' },
  { id: 3, name: '王五', role: '设计师', status: 'offline', joinDate: '2023-11-08' },
  { id: 4, name: '赵六', role: '产品经理', status: 'online', joinDate: '2024-06-01' },
]

const statusMap: Record<User['status'], { variant: 'success' | 'warning' | 'default'; label: string }> = {
  online: { variant: 'success', label: '在线' },
  busy: { variant: 'warning', label: '繁忙' },
  offline: { variant: 'default', label: '离线' },
}

const columns: TableColumn<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', width: 60 },
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'role', title: '角色', dataIndex: 'role', render: (val) => <Tag variant="primary">{String(val)}</Tag> },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    render: (val) => {
      const s = statusMap[val as User['status']]
      return <Badge variant={s.variant} dot>{s.label}</Badge>
    },
  },
  { key: 'joinDate', title: '加入日期', dataIndex: 'joinDate' },
  {
    key: 'action',
    title: '操作',
    align: 'right',
    render: (_val, _record) => (
      <div className="flex gap-2 justify-end">
        <Button size="sm" variant="ghost">编辑</Button>
        <Button size="sm" variant="ghost">删除</Button>
      </div>
    ),
  },
]

export function TableDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <DemoPage
      title="Table"
      subtitle="表格"
      description="用于展示多行结构化数据，支持自定义渲染、对齐方式、加载状态和斑马纹。"
    >
      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">代码演示</h2>

      <DemoBlock
        title="基础用法"
        preview={<Table columns={columns} dataSource={data} rowKey="id" />}
        code={`interface User { id: number; name: string; role: string; status: string }

const columns: TableColumn<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id' },
  { key: 'name', title: '姓名', dataIndex: 'name' },
  { key: 'role', title: '角色', dataIndex: 'role',
    render: (val) => <Tag variant="primary">{val}</Tag> },
  { key: 'status', title: '状态', dataIndex: 'status',
    render: (val) => <Badge variant="success" dot>{val}</Badge> },
]

<Table columns={columns} dataSource={data} rowKey="id" />`}
      />

      <DemoBlock
        title="斑马纹"
        description="设置 striped 开启交替行背景色"
        preview={<Table columns={columns} dataSource={data} rowKey="id" striped />}
        code={`<Table columns={columns} dataSource={data} striped />`}
      />

      <DemoBlock
        title="加载状态"
        preview={
          <div className="space-y-3 w-full">
            <Button
              size="sm"
              onClick={() => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
              }}
            >
              模拟加载
            </Button>
            <Table columns={columns} dataSource={loading ? [] : data} rowKey="id" loading={loading} />
          </div>
        }
        code={`<Table columns={columns} dataSource={data} loading={isLoading} />`}
      />

      <DemoBlock
        title="空状态"
        preview={<Table columns={columns} dataSource={[]} rowKey="id" />}
        code={`<Table columns={columns} dataSource={[]} emptyText="暂无数据" />`}
      />

      <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">API</h2>
      <PropsTable
        rows={[
          { prop: 'columns', type: 'TableColumn<T>[]', default: '-', description: '列配置' },
          { prop: 'dataSource', type: 'T[]', default: '-', description: '数据源' },
          { prop: 'rowKey', type: 'keyof T | (record: T) => string', default: "'id'", description: '行唯一键' },
          { prop: 'loading', type: 'boolean', default: 'false', description: '加载状态' },
          { prop: 'striped', type: 'boolean', default: 'false', description: '斑马纹' },
          { prop: 'emptyText', type: 'ReactNode', default: "'暂无数据'", description: '空状态文本' },
        ]}
      />
    </DemoPage>
  )
}

export default TableDemo
