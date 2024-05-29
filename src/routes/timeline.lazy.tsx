/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'

export const Route = createLazyFileRoute('/timeline')({
  component: Timeline
})

const gakunen_container = css`
  display: flex;
`

const line = css`
  border-right: 1px solid white;
  margin-left: 20px;
  margin-right: 20px;
`
const top_margin_0 = css`
  margin-top: 0;
`


function Timeline() {
  return (
    <>
      <Title title='詳細な経歴' />
      <h2>2017年4月 一関工業高等専門学校(一関高専) 未来創造工学科 入学 (改組後 一期生)</h2>
      <div css={gakunen_container}>
        <div css={line}> {/* 左側の線のやつ */}
        </div>
        <div>
          <p>１年次: {`
            教員の名言を管理するアプリ CppMeigens を作った。
            謎にC++で作られている。なお、当時はデータベースを知らなかったため、
            JSON パーサライブラリ picojson を使って名言を管理する方式を取っていた。
          `}</p>
          <p>2年次(情報・ソフトウェア系 配属): {`
            授業にて、企業などで提供されている何かしらの API を選んでそれをなんか叩くアプリを Python で作ろうと言われた。
            なので、自分で API から作ることにした。ちょうど昨年 CppMeigens を作っていたので、
            自宅サーバ上で Flask を使って API 化し、これを叩くアプリを作り、CppMeigens をサーバクライアントシステムに改良した。
            なお、この後友人がデータベースを用いて再設計し、
            Discord API を用いてより素晴らしい名言管理サービスを作ってくれたので、すぐに役目を終えた。
          `}</p>
          <p>3年次: {`
            基本情報から取って次に応用情報というありきたりなレールの上を走るのはなんかムカつくので、はじめに応用情報を取った。当時17歳。令和元年度秋試験のことである。
            また、Web アプリを作ろうというグループワークがあった。Markdown 記事をメンバに書いてもらって、
            それを一覧表示するアプリを私が作るということになった。当時 SPA の概念や React, Angular, Vue などのフレームワークは知らなかったが、
            「どうやら DOM というので html の構造ができていて、それは JS で操作できるらしい。じゃあページ遷移を JS でやりたかったら DOM 操作で切り替えるのが普通か～。」
            なんてやっていたら自前で SPA を実装していた。
          `}</p>
          <p>4年次: 画像処理の授業でPNM形式の画像に対して微分フィルタはじめ色々なものを実装したりしていた。うつ状態になりはじめる。</p>
          <p>
            5年次: {`
            席次2位(35人中)で卒業した。この年に CG の授業で東京タワーを作った。
            また、blenderから出力したオブジェクトファイルをオブジェクトごとに分割するプログラム、
            及び OpenGL で読み込んでくるくる回すコードを書いた。ゲームなどを作る上で基礎的に重要なものを実装したと思う。
            `}
          </p>
        </div>
      </div>
      <h2 css={top_margin_0}>2022年3月 一関高専 卒業</h2>

      <h2>2022年4月 新潟大学理学部理学科数学プログラム 3年次編入学</h2>
      <div css={gakunen_container}>
        <div css={line}> {/* 左側の線のやつ */}
        </div> 
        <div>
          <p>3年次: {`
            物質反応化学の試験で私だけ満点だったことはイキろう。
            関数解析学のバケモンみたいな院生に出会う。
            うつ状態になり、何もできない。試験前日に焦りはじめ、
            鬼のように資料を眺めまくり、大量の証明を暗記し、複素解析学の試験に合格する。
             ただし代償としてうつ状態が急性期に陥り、大学のリフレッシュルームで眠りながら叫び、複素解析学の知識を失い、寝込み続ける。ADHD/ASDと診断される。
            `}
          </p>
          <p>4年次: {`
            音声処理関連で興味があったため、ゼミでフーリエ解析の本を読み始める。また、唐突にプログラムを書きたくなりはじめ、
            ポートフォリオを準備したり(これの以前に作った第一世代のもの)、マイクラの全自動バックアッププラグインを開発し始める。
            マイクラの自動バックアップに必要な小さなライブラリとして 
            CronParser(crontabのようなもの)、DIrBackup(ファイル削除を考慮する差分・増分バックアップライブラリ)を作り上げる。
          `}
          </p>
        </div>
      </div>
      <h2 css={top_margin_0}>2024年3月 新潟大学理学部卒業</h2>
      <h2>2024年4月 新潟大学大学院自然科学研究科数理物質科学専攻数理科学コース修士課程 入学</h2>
      <div css={gakunen_container}>
        <div css={line}> {/* 左側の線のやつ */}
        </div>
        <div>
          <p>今に至る</p>
        </div>
      </div>
    </>
  )
}