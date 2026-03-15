import React, { useState } from 'react'

interface TabItem {
  key: string
  label: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  items: TabItem[]
  defaultActiveKey?: string
  activeKey?: string
  onChange?: (key: string) => void
  className?: string
}

export function Tabs({ items, defaultActiveKey, activeKey: controlledKey, onChange, className = '' }: TabsProps) {
  const [internalKey, setInternalKey] = useState(defaultActiveKey || items[0]?.key || '')
  const activeKey = controlledKey !== undefined ? controlledKey : internalKey

  const handleChange = (key: string) => {
    if (controlledKey === undefined) setInternalKey(key)
    onChange?.(key)
  }

  const activeItem = items.find(item => item.key === activeKey)

  return (
    <div className={className}>
      {/* Tab Bar */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        {items.map(item => (
          <button
            key={item.key}
            disabled={item.disabled}
            onClick={() => !item.disabled && handleChange(item.key)}
            className={[
              'px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150',
              'focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed',
              activeKey === item.key
                ? 'border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600',
            ].join(' ')}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="pt-5 text-sm text-gray-700 dark:text-gray-300">
        {activeItem?.children}
      </div>
    </div>
  )
}

export default Tabs
