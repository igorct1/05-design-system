import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@reason-ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}

export const Big: StoryObj = {
  args: {
    size: 'big',
  },
}
