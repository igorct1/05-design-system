import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@reason-ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your comments...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
