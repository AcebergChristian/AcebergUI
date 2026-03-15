import React, { useState } from 'react'
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'

interface DemoBlockProps {
  title: string
  description?: React.ReactNode
  preview: React.ReactNode
  code: string
}

export function DemoBlock({ title, description, preview, code }: DemoBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
      {/* Title */}
      <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{title}</p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</p>
        )}
      </div>

      {/* Preview */}
      <div className="p-8 bg-white dark:bg-gray-900/20 flex flex-wrap items-center gap-4">
        {preview}
      </div>

      {/* Code */}
      <div className="relative border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <><CheckIcon className="w-3.5 h-3.5 text-green-500" /> 已复制</>
          ) : (
            <><ClipboardDocumentIcon className="w-3.5 h-3.5" /> 复制</>
          )}
        </button>
        <pre className="px-5 py-4 overflow-x-auto text-xs font-mono leading-relaxed text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

interface PropsTableRow {
  prop: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  rows: PropsTableRow[]
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
            {['属性', '类型', '默认值', '说明'].map(h => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
            >
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                  {row.prop}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-violet-600 dark:text-violet-400">{row.type}</code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-gray-500 dark:text-gray-400">{row.default || '-'}</code>
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface DemoPageProps {
  title: string
  subtitle: string
  description: string
  children: React.ReactNode
}

export function DemoPage({ title, subtitle, description, children }: DemoPageProps) {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-2">
          <span>组件</span>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300">{title}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          {title} <span className="text-gray-400 dark:text-gray-500 font-normal text-xl">{subtitle}</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">{description}</p>
      </div>

      {/* Demo sections */}
      {children}
    </div>
  )
}
