/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import kusa from '/img/kusa.png'
import kusa_upper from '/img/kusa_upper.png'

const container = css`
  filter: saturate(0.5);
  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 0;
  justify-content: center;
`

const background_upper = css`
  height: 50px;
  background-image: url(${kusa_upper});
  background-size:50px;
  image-rendering: pixelated;
  background-repeat: repeat;
`

const background = css`
  text-align: center;
  height: 100px;
  background-image: url(${kusa});
  background-size: 50px;
  image-rendering: pixelated;
  background-repeat: repeat;
  p {
    padding: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8));
    display: inline-block;
    color: white;
  }
`


export function Footer() {
  return (
    <div css={container}>
      <div css={background_upper}></div>
      <div css={background}>
        <p>©2024 佐藤海音 (Sato Kaito)</p>
      </div>
    </div>
  )
}
