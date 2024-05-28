/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { License } from './license.lazy'
import { Skills } from './skills.lazy'
import { Principles } from './principles.lazy'
import face from '/img/face.jpg'
import { css } from '@emotion/react'
import { Skills2 } from './skills2.lazy'
import { Timeline } from './timeline.lazy'

export const Route = createLazyFileRoute('/')({
  component: Index
})

const prof_container = css`
  height: 100vh;
  width: 100vw;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 1.0);
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    margin: 30px;
    h2 {
      font-size: 2.0rem;
    }
    th, td {
      font-size: 1.2rem;
      text-align: left;
      margin: 0;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 60vw;
      height: 60vw;
    }
  }
`
function Profile() {
  return (
    <div css={prof_container}>
      <div>
        <img src={face} alt="" />
      </div>
      <div>
        <h2>
          佐藤 海音 (Sato Kaito)
        </h2>
        <hr />
        <table>
          <tr>
            <th>所属</th>
            <td>新潟大学大学院自然科学研究科数理物質科学専攻 M1</td>
          </tr>
          <tr>
            <th>略歴</th>
            <td>一関高専(情報・ソフトウェア系)→新潟大学理学部</td>
          </tr>
          <tr>
            <th>資格</th>
            <td>応用情報技術者試験(R1年度秋試験)</td>
          </tr>
          <tr>
            <th>性別</th>
            <td>男性</td>
          </tr>
          <tr>
            <th>現住所</th>
            <td>新潟市</td>
          </tr>
          <tr>
            <th>趣味</th>
            <td>猫アカウントいいねめぐり</td>
          </tr>
          <tr>
            <th>GitHub</th>
            <td><a href='https://github.com/skpub'>https://github.com/skpub</a></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export function Index() {
  return (
    <div>
      {/* <Header /> */}
      <Profile />
      <Skills />
      <Skills2 />
      <Principles />
      <Timeline />
      <License />
    </div>
  )
}