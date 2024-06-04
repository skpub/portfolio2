/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'

import dirbackup from '/img/dirbackup.webp'
import tongking from '/img/TONGKING2.webp'
import cronparser from '/img/cronparser.webp'
import meigens from '/img/meigens.webp'
import face from '/img/pv1.webp'
import portfolio2 from '/img/pf2.webp'

export const Route = createLazyFileRoute('/works')({
  component: works
})

type work_content = {
  path: string,
  link: string,
  lang: string,
  content: string,
}

function WorkElem(props: work_content) {
  const work_style = css`
    @media (min-width: 768px) {
      width: calc(50% - 20px);
    }
    @media (min-width: 900px) {
      width: calc(100%/3 - 20px);
    }
    @media (min-width: 1200px) {
      width: calc(25% - 20px);
    }
    @media (min-width: 1600px) {
      width: calc(20% - 20px)
    }
    @media (min-width: 2000px) {
      width: 300px;
    }
    display: flex;
    padding: 10px;
    img {
      width: 90%;
      height: 90%;
      box-shadow: 4px 4px 0px #099;
    }
    img:hover {
      filter: brightness(0.8);
      transform: translate(2px, 2px);
      box-shadow: none;
    }
    p {
      margin-top: 0;
    }
    .lang_style {
      color: var(--fore2);
    }
    flex-direction: column;
    @media (max-width: 768px) {
      flex-direction: row;
      img {
        margin-right: 20px;
        width: 100px;
      }
    }
  `
  return (
    <div css={work_style}>
      <div>
        <a href={props.link} target='_blank'>
          <img src={props.path} alt="" />
        </a>
      </div>
      <div>
        <p>{props.content}</p>
        <p className='lang_style'>言語: {props.lang}</p>
      </div>
    </div>
  )
}

const works_style = css`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`


function works() {
  return (
    <>
      <Title title='成果物たち(抜粋)' />
      <p>画像はリポジトリへのリンクになっている</p>
      <div css={works_style}>
        <WorkElem path={dirbackup} lang='Java' link='https://github.com/skpub/DIrBackup' content='DIrBackup: 差分バックアップしてくれる' />
        <WorkElem path={cronparser} lang='Java' link='https://github.com/skpub/CronParser' content='CronParser: Crontabの設定を解釈して次の実行時刻を教えてくれます.' />
        <WorkElem path={tongking} lang='C' link='https://github.com/skpub/gl_kadai' content='gl_kadai: 3DオブジェクトファイルをOpenGLで描画するやつ' />
        <WorkElem path={meigens} lang='Go, SQL' link='https://github.com/skpub/meigens-api' content='meigens-api: 名言管理API' />
        <WorkElem path={face} lang='TS(React)' link='https://github.com/skpub/portfolio_sato_kaito' content='portfolio(v1): 先代のポートフォリオです' />
        <WorkElem path={portfolio2} lang='TS(React)' link='https://github.com/skpub/portfolio2' content='portfolio(v2): このポートフォリオです' />
      </div>
    </>
  )
}
