/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'
import { skills_table_style } from './skills.lazy'

export const Route = createLazyFileRoute('/skills2')({
  component: Skills2
})

export function Skills2() {
  return (
    <div className='basecontainer'>
      <Title title='できること2' />
      <h2>使っている開発支援ツール・開発環境</h2>
      <table css={skills_table_style}>
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

      <table css={skills_table_style}>
        <tr>
          <th>Docker</th>
          <td>マイグレーションやデプロイに使う。</td>
        </tr>
        <tr>
          <th>Proxmox VE</th>
          <td>自宅サーバのハイパバイザとして使っている。</td>
        </tr>
      </table>

      <h2>システム関係</h2>
      <table css={skills_table_style}>
        <tr>
          <th>OS</th>
          <td>Arch Linux, CentOS Stream, Ubuntuなどをよく使う。特にCentOS Streamは現在自宅サーバでこのポートフォリオとマイクラサーバ(JE)をホストするのに使っている。</td>
        </tr>
      </table>

      <h2>ネットワーク関係</h2>
      <table css={skills_table_style}>
        <tr>
          <th>ルータ</th>
          <td>Yamaha RTX ルータを設定できる。具体的には、ポートフォワーディングの設定をしたり公開サービス用にDMZを構築したりできる。</td>
        </tr>
        <tr>
          <th>SSH</th>
          <td>遠隔で自宅サーバにログインするのはもちろん、SSHポートフォワーディングによって外部からルータ管理画面への疎通を確立するなどの基本的な使い方が出来る。</td>
        </tr>
      </table>
    </div>
  )
}
