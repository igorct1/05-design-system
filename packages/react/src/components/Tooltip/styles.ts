import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled('div', {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  color: '$gray100',
  fontWeight: '$medium',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: 1.4,

  borderRadius: '$md',
})
