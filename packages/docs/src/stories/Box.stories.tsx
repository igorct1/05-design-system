import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@reason-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <span>Box Element</span>
      </>
    ),
  },

  argTypes: {
    src: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
