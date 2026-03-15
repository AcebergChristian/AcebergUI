import React from 'react'

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

interface TagProps {
  variant?: TagVariant
  closable?: boolean
  onClose?: () => void
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

const variantClasses: Record<TagVariant, string> = {
  default: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/60 dark:text-gray-300 dark:border-gray-600',
  primary: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
  success: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
  warning: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
  danger: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
  info: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700',
}

export function Tag({ variant = 'default', closable = false, onClose, children, className = '', icon }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-md border',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {closable && (
        <button
          onClick={onClose}
          className="ml-0.5 -mr-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity focus:outline-none"
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Tag
