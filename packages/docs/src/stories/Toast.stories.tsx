import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@reason-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'

function DemoToast(props: ToastProps) {
  const [open, setOpen] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    const current = timeRef.current
    return () => clearTimeout(current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: DemoToast,
  tags: ['autodocs'],

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 02 de Agosto às 12h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
