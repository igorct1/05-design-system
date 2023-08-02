import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastRoot {...props}>
        <ToastTitle>
          <span>{title}</span>
          <ToastClose asChild>
            <button>
              <X size={20} weight="light" />
            </button>
          </ToastClose>
        </ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
