import React from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export type AlertType = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  type?: AlertType
  title?: string
  children?: React.ReactNode
  closable?: boolean
  onClose?: () => void
  className?: string
}

const alertConfig: Record<AlertType, { icon: React.ElementType; classes: string; iconClass: string }> = {
  success: {
    icon: CheckCircleIcon,
    classes: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    iconClass: 'text-green-500 dark:text-green-400',
  },
  error: {
    icon: ExclamationCircleIcon,
    classes: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    iconClass: 'text-red-500 dark:text-red-400',
  },
  warning: {
    icon: ExclamationTriangleIcon,
    classes: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800',
    iconClass: 'text-amber-500 dark:text-amber-400',
  },
  info: {
    icon: InformationCircleIcon,
    classes: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    iconClass: 'text-blue-500 dark:text-blue-400',
  },
}

const titleColors: Record<AlertType, string> = {
  success: 'text-green-800 dark:text-green-300',
  error: 'text-red-800 dark:text-red-300',
  warning: 'text-amber-800 dark:text-amber-300',
  info: 'text-blue-800 dark:text-blue-300',
}

const bodyColors: Record<AlertType, string> = {
  success: 'text-green-700 dark:text-green-400',
  error: 'text-red-700 dark:text-red-400',
  warning: 'text-amber-700 dark:text-amber-400',
  info: 'text-blue-700 dark:text-blue-400',
}

export function Alert({ type = 'info', title, children, closable = false, onClose, className = '' }: AlertProps) {
  const config = alertConfig[type]
  const Icon = config.icon

  return (
    <div
      className={[
        'flex gap-3 rounded-xl border p-4',
        config.classes,
        className,
      ].join(' ')}
      role="alert"
    >
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${config.iconClass}`} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className={`text-sm font-semibold mb-0.5 ${titleColors[type]}`}>{title}</p>
        )}
        {children && (
          <div className={`text-sm ${bodyColors[type]}`}>{children}</div>
        )}
      </div>
      {closable && (
        <button
          onClick={onClose}
          className={`p-0.5 rounded-md shrink-0 transition-colors ${config.iconClass} hover:bg-black/10 dark:hover:bg-white/10`}
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export default Alert
