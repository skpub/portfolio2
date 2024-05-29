/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'

import dirbackup from '/img/dirbackup.png'
import tongking from '/img/TONGKING2.png'
import cronparser from '/img/cronparser.png'
import meigens from '/img/meigens.png'
import face from '/img/pv1.png'

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
    display: flex;
    padding: 10px;
    flex: 1;
    img {
      width: 90%;
      height: 90%;
    }
    img:hover {
      filter: brightness(0.8);
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
        padding-right: 12px;
        width: 100px;
      }
    }
  `
  return (
    <div css={work_style}>
      <div>
        <a href={props.link}>
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
      </div>
    </>
  )
}