import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@reason-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],

  args: {
    children: <Button>Display Tooltip</Button>,
    content: '01 de Agosto - Disponível',
  },

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$gray500',
            padding: '$20',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Open: StoryObj<TooltipProps> = {
  args: {
    open: true,
  },
}
