/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { License } from './license.lazy'
import { Skills } from './skills.lazy'
import face from '/img/face.jpg'
import { css } from '@emotion/react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

const img = css`
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 1.0);
  @media (min-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`

const prof_container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
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
`
function Profile() {
  return (
    <div css={prof_container}>
      <div>
        <img src={face} css={img} alt="" />
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

function Index() {
  return (
    <div className="p-2 flex gap-2">
      <Header />
      <Profile />
      <Skills />
      <License />
    </div>
  )
}