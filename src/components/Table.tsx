import React from 'react'

export interface TableColumn<T> {
  key: string
  title: React.ReactNode
  dataIndex?: keyof T
  render?: (value: unknown, record: T, index: number) => React.ReactNode
  width?: string | number
  align?: 'left' | 'center' | 'right'
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: keyof T | ((record: T) => string)
  loading?: boolean
  emptyText?: React.ReactNode
  className?: string
  striped?: boolean
}

export function Table<T extends object>({
  columns,
  dataSource,
  rowKey = 'id' as keyof T,
  loading = false,
  emptyText = '暂无数据',
  className = '',
  striped = false,
}: TableProps<T>) {
  const getKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') return rowKey(record)
    const val = record[rowKey]
    return val !== undefined ? String(val) : String(index)
  }

  const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' }

  return (
    <div className={`w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
            {columns.map(col => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={[
                  'px-4 py-3 font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap',
                  alignClass[col.align || 'left'],
                ].join(' ')}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-gray-400 dark:text-gray-500">
                <svg className="animate-spin h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </td>
            </tr>
          ) : dataSource.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-gray-400 dark:text-gray-500">
                {emptyText}
              </td>
            </tr>
          ) : (
            dataSource.map((record, rowIndex) => (
              <tr
                key={getKey(record, rowIndex)}
                className={[
                  'border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors',
                  striped && rowIndex % 2 === 1
                    ? 'bg-gray-50/50 dark:bg-gray-800/30'
                    : 'bg-white dark:bg-transparent',
                  'hover:bg-blue-50/40 dark:hover:bg-blue-900/10',
                ].join(' ')}
              >
                {columns.map(col => {
                  const rawValue = col.dataIndex ? record[col.dataIndex] : undefined
                  return (
                    <td
                      key={col.key}
                      className={[
                        'px-4 py-3 text-gray-700 dark:text-gray-300',
                        alignClass[col.align || 'left'],
                      ].join(' ')}
                    >
                      {col.render ? col.render(rawValue, record, rowIndex) : (rawValue as React.ReactNode)}
                    </td>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
