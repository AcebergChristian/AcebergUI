import React from 'react'

interface CardProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
  bodyClassName?: string
  hoverable?: boolean
}

export function Card({
  title,
  extra,
  footer,
  children,
  className = '',
  bodyClassName = '',
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden',
        hoverable
          ? 'transition-all duration-200 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer'
          : '',
        className,
      ].join(' ')}
    >
      {(title || extra) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          {title && (
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</div>
          )}
          {extra && (
            <div className="text-sm text-gray-500 dark:text-gray-400">{extra}</div>
          )}
        </div>
      )}
      <div className={['p-5', bodyClassName].join(' ')}>{children}</div>
      {footer && (
        <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card
