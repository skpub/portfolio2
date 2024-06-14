/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import { css } from '@emotion/react'
import { Title } from '../components/Title'

export const Route = createLazyFileRoute('/license')({
  component: License
})

function License() {
  return (
    <>
      <Title title='License' />
      <Item title='PixelMplus' content={['https://github.com/itouhiro/PixelMplus/']}></Item>
      <Item title='BIZ UDPGothic' content={['https://fonts.google.com/specimen/BIZ+UDPGothic/about', 'https://www.morisawa.co.jp/about/news/6706']}></Item>
    </>
  )
}

type ItemProps = {
  title: string
  content: string[]
}

const item = css`
  margin: 10px;
  h2 {
    margin-bottom: 0 auto;
  }
  p {
    margin-left: 24px;
  }
`

function Item(props: ItemProps) {
  return (
    <div css={item}>
      <h2>{props.title}</h2>
      {props.content.map((content) => <p><a target='__blank' href={content}>{content}</a></p>)}
    </div>
  )
}