import { styled, keyframes } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: 10,
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 100,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${16}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${16}px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  padding: '$3 $5',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  fontFamily: '$default',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$gray100',
  fontWeight: '$bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    lineHeight: 0,
  },

  button: {
    lineHeight: 0,
  },
})

export const ToastClose = styled(ToastPrimitive.Close, {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastDescription = styled(ToastPrimitive.Title, {
  color: '$gray200',
  fontWeight: '$regular',
  lineHeight: '140%',
})
