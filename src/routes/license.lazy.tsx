/** @jsxImportSource @emotion/react */
import { componentTypes, createLazyFileRoute } from '@tanstack/react-router'
import { css } from '@emotion/react'
import { Title } from '../components/Title'

export const Route = createLazyFileRoute('/license')({
  component: License
})

function License() {
  return (
    <>
      <Title title='License' />
      <Item title='PixelMplus' content='https://github.com/itouhiro/PixelMplus/'></Item>
    </>
  )
}

type ItemProps = {
  title: string
  content: string
}

const item = css`
  margin: 10px;
  h2 {
    margin: 0 auto;
  }
`

function Item(props: ItemProps) {
  return (
    <div css={item}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}