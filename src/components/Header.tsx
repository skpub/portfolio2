/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import kusa from '/img/kusa.png'
import kusa_under from '/img/kusa_under.png'

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

const background_under = css`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 50px;
  background-image: url(${kusa_under});
  background-size:50px;
  image-rendering: pixelated;
  background-repeat: repeat;
`

export function Header() {
  return (
    <div>
      <div css={background}></div>
      <div css={background_under}></div>
    </div>
  )
}
