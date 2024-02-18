import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export function ActionButton({ className, children, ...props }: ActionButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'px-10 py-2 rounded-full bg-emerald-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 transition-colors duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}
