import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  lineHeight: 0,

  width: '$6',
  height: '$6',

  backgroundColor: '$gray900',
  borderRadius: '$xs',
  border: '2px solid $ignite900',

  cursor: 'pointer',
  overflow: 'hidden',

  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },

  "&[data-state='checked']": {
    backgroundColor: '$ignite300',
  },
})

export const SlideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

export const SlideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  "&[data-state='checked']": {
    animation: `${SlideIn} 200ms ease-in-out`,
  },
  "&[data-state='unchecked']": {
    animation: `${SlideOut} 200ms ease-in-out`,
  },
})
