import { styled } from '../styles/index'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  border: 0,
  padding: '$4',
  borderRadius: 8,
  color: '$gray100',
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export function App() {
  return <Button>Hello World!</Button>
}

export type ButtonProps = ComponentProps<typeof Button>
