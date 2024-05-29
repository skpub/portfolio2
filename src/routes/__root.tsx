/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Profile } from './index.lazy'
import { Title } from '../components/Title'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Profile />
      <Links />
      <div className='basecontainer'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
})

// 以下はルーティングのテンプレート部分
// どこのページに遷移しようと共通のテンプレとして以下のコンポーネントは描画されたままで、
// 部分的に(目次の下に)そのページのコンテンツが表示されるようになっている。

const links_style = css`
  // margin: 24px;
  h2 {
    margin-left: 24px;
  }
`

function Links() {
  return (
    <div css={links_style}>
      <Title title='もくじ' />
      <Link to='/skills'><h2>できること1(言語関係)</h2></Link>
      <Link to='/skills2'><h2>できること2(システム関係)</h2></Link>
      <Link to='/works'><h2>成果物たち</h2></Link>
      <Link to='/principles'><h2>チーム開発で大事にしていること</h2></Link>
      <Link to='/timeline'><h2>詳細な経歴</h2></Link>
      <Link to='/server'><h2>自宅サーバ(おまけ)</h2></Link>
      <Link to='/license'><h2>ライセンス表記</h2></Link>
      <Link to='/'><h2>閉じる</h2></Link>
    </div>
  )
}
