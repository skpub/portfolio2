/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type TitleProps = {
  title: string
}

const title = css`
  margin: 0 auto;
  margin-left: 10px;
`

export function Title(props: TitleProps) {
  return (
    <div>
      <h1 css={title}>{props.title}</h1>
      <hr />
    </div>
  )
}