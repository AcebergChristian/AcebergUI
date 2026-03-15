import React from 'react'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string
  hint?: string
  error?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  inputSize?: 'sm' | 'md' | 'lg'
}

export function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  inputSize = 'md',
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 flex items-center text-gray-400 dark:text-gray-500 pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          className={[
            'w-full rounded-lg border bg-white dark:bg-gray-800 transition-colors duration-150',
            'placeholder:text-gray-400 dark:placeholder:text-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            error
              ? 'border-red-400 dark:border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500',
            'text-gray-900 dark:text-gray-100',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-gray-900',
            prefix ? 'pl-9' : '',
            suffix ? 'pr-9' : '',
            sizeClasses[inputSize],
            className,
          ].join(' ')}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 flex items-center text-gray-400 dark:text-gray-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}
      {hint && !error && <p className="text-xs text-gray-500 dark:text-gray-400">{hint}</p>}
    </div>
  )
}

export default Input
