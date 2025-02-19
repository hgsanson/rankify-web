import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-between w-full px-5 h-12 bg-gray-500 text-blue rounded-xl font-semibold cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
