import { TooltipContainer, TooltipContent } from './styles'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root {...props}>
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipContent>
              {content}
              <TooltipPrimitive.Arrow />
            </TooltipContent>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </TooltipContainer>
  )
}

Tooltip.displayNames = 'Tooltip'
