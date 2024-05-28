/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'

export const Route = createLazyFileRoute('/skills')({
  component: Skills
})

type langProps = {
  lang: string
  contents: string[]
}

const lang_style = css`
  margin: 10px;
  display: flex;
  flex-flow: row;
  th, td {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const table_style = css`
  margin: 20px;
  text-align: left;
  display: table;
  table-layout: fixed;
  width: 100%;
  th {
    word-break: break-all;
    width: 10vw;
  }
  td {
    word-break: break-all;
  }
  @media (max-width: 600px) {
    th {
      width: 20vw;
    }
  }
`

function Lang(props: langProps) {
  return (
    <tr css={lang_style}>
      <th>{props.lang} </th>
      <td>{props.contents.join(', ')}</td>
    </tr>
  )
}

export function Skills() {
  return (
    <div className='basecontainer'>
      <Title title='できること' />
      <h2>使える言語・フレームワーク</h2>
      <table css={table_style}>
        <tr>
          <th>Go</th>
          <td>gin(API設計と実装), golang-jwt(APIのJWT認証・認可), sqlc</td>
        </tr>
        <tr>
          <th>Python</th>
          <td>Flask(API設計と実装), </td>
        </tr>
        <tr>
          <th>Java</th>
          <td>Webのバックエンドとして何かフレームワークを使った経験はないが、crontabの設定ファイルを解釈するライブラリや差分バックアップライブラリなどをを作ったことがある。</td>
        </tr>
        <tr>
          <th>JS/TS</th>
          <td>React(Vite), これ作るくらいは出来る。</td>
        </tr>
        <tr>
          <th>SQL</th>
          <td>正規化や外部キー云々など、基本的なことは分かる。あと少し書ける。</td>
        </tr>
      </table>

      <h2>業務で使えるかどうかは別として、趣味や授業で使ったことがある言語</h2>
      <table css={table_style}>
        <tr>
          <th>Rust</th>
          <td>仕様がリッチでありつつ現実的でいいと思うんだ。</td>
        </tr>
        <tr>
          <th>Haskell</th>
          <td>コンピュータ的に嬉しい言語かは別として、書く側としては良いと思うんだ。</td>
        </tr>
        <tr>
          <th>C/C++</th>
          <td>を使うくらいならRustを使いたい。Cはまぁ好き。だが仕事で使いたくはない。</td>
        </tr>
        <tr>
          <th>C#</th>
          <td>高専でフォームアプリケーションを作らされた。今どきならReact Nativeの方が良いと思う。</td>
        </tr>
      </table>

      <h2>ドキュメント関係</h2>
      <table css={table_style}>
        <tr>
          <th>Markdown</th>
          <td>流石によく書く。</td>
        </tr>
        <tr>
          <th>TeX</th>
          <td>高専&数学科&大学院でよく書いてい (た|る)。</td>
        </tr>

      </table>

      <h2>使っている開発支援ツール・開発環境</h2>
      <table css={table_style}>
        <tr>
          <th>Git</th>
          <td>流石によく使う。GitHubも使う。</td>
        </tr>
        <tr>
          <th>VSCode</th>
          <td>メインのエディタ。ただしVim拡張を入れないと使えない。</td>
        </tr>
        <tr>
          <th>IntelliJ IDEA</th>
          <td>Javaは基本これで書く。ただしVim拡張を入れないと使えない。</td>
        </tr>
      </table>

      <h2>使っている仮想化関係の技術やソフトウェア</h2>

      <table css={table_style}>
        <tr>
          <th>Docker</th>
          <td>マイグレーションやデプロイに使う。</td>
        </tr>
        <tr>
          <th>Proxmox VE</th>
          <td>自宅サーバで使っている。</td>
        </tr>
      </table>

      <h2>システム関係</h2>
      <table css={table_style}>
        <tr>
          <th>OS</th>
          <td>Arch Linux, CentOS Stream, Ubuntuなどをよく使う。特にCentOS Streamは現在自宅サーバでこのポートフォリオとマイクラサーバ(JE)をホストするのに使っている。</td>
        </tr>
      </table>
    </div>
  )
}
