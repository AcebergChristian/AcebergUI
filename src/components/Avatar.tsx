import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'

interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  className?: string
  status?: 'online' | 'offline' | 'busy' | 'away'
}

const sizeClasses: Record<AvatarSize, { container: string; text: string; icon: string }> = {
  xs: { container: 'w-6 h-6', text: 'text-xs', icon: 'w-3 h-3' },
  sm: { container: 'w-8 h-8', text: 'text-xs', icon: 'w-4 h-4' },
  md: { container: 'w-10 h-10', text: 'text-sm', icon: 'w-5 h-5' },
  lg: { container: 'w-12 h-12', text: 'text-base', icon: 'w-6 h-6' },
  xl: { container: 'w-16 h-16', text: 'text-xl', icon: 'w-8 h-8' },
}

const statusClasses = {
  online: 'bg-green-400',
  offline: 'bg-gray-400',
  busy: 'bg-red-400',
  away: 'bg-amber-400',
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function stringToColor(str: string) {
  const colors = [
    'bg-blue-500', 'bg-violet-500', 'bg-pink-500', 'bg-teal-500',
    'bg-orange-500', 'bg-cyan-500', 'bg-rose-500', 'bg-indigo-500',
  ]
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

export function Avatar({ src, alt, name, size = 'md', shape = 'circle', className = '', status }: AvatarProps) {
  const sc = sizeClasses[size]
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-xl'

  return (
    <span className={`relative inline-flex shrink-0 ${sc.container} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || name || 'avatar'}
          className={`${sc.container} ${shapeClass} object-cover`}
        />
      ) : name ? (
        <span
          className={[
            'flex items-center justify-center font-medium text-white',
            sc.container, sc.text, shapeClass,
            stringToColor(name),
          ].join(' ')}
        >
          {getInitials(name)}
        </span>
      ) : (
        <span
          className={[
            'flex items-center justify-center bg-gray-200 dark:bg-gray-700',
            sc.container, shapeClass,
          ].join(' ')}
        >
          <UserIcon className={`${sc.icon} text-gray-500 dark:text-gray-400`} />
        </span>
      )}
      {status && (
        <span
          className={[
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-gray-800',
            statusClasses[status],
            size === 'xs' || size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5',
          ].join(' ')}
        />
      )}
    </span>
  )
}

export default Avatar
