/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import kusa from '/img/kusa.png'

const background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-image: url(${kusa});
  background-size: 50px;
  image-rendering: pixelated;
  background-repeat: repeat;
`

export function Header() {
  return (
    <div css={background}>
    </div>
  )
}
