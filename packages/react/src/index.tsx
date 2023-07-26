import { vars } from '../styles/index'

import { style } from '@vanilla-extract/css'

const button = style({
  backgroundColor: vars.colors.ignite500,
  fontFamily: vars.fonts.default,
})

export function App() {
  return <button className={button}>Hello World</button>
}
