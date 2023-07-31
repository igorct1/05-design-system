import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@reason-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Text your name...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
