import { createThemeContract } from '@vanilla-extract/css'

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@reason-ignite-ui/tokens'

export const vars = createThemeContract({
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
})
