import { styled } from '../styles'
import { ComponentProps } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  rezie: 'vertical',
  minHeight: 80,

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>
