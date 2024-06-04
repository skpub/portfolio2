/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import face from '/img/face.webp'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

const index_style = css`
  h2 {
    margin: 24px;
  }
`

function Index() {
  return (
    <div css={index_style}>
      <h2>
        目次をクリックすると色々出てくるよ
      </h2>
    </div>
  )
}

const prof_container = css`
  min-height: 100dvh;
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
  @media (max-width: 667px and min-height: 500px) {
    div {
      padding: 0;
      padding-left: 15px;
      padding-right: 15px;
      margin: 0;
    }
    flex-direction: column;
    img {
      width: 60vw;
      height: 60vw;
    }
  }
  @media (max-width: 400px) {
    transform: scale(0.8);
    .prof_container_img {
      padding-right: 15px;
    }
    .prof_container_text {
      padding: 0;
      padding-left: 15px;
      margin: 0;
    }
  }
  @media (max-height: 500px) {
    transform: scale(0.8);
    img {
      width: 40vw;
      height: 40vw;
    }
    .prof_container_img {
      padding-right: 15px;
    }
    .prof_container_text {
      h2 {
        font-size: 1.5rem;
      }
      padding: 0;
      padding-left: 15px;
      margin: 0;
    }
  }
`


export function Profile() {
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollTop === 0)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const mokujidayo = css`
    color: var(--fore2);
    position: absolute;
    top: 90vh;
    top: 90dvh;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${visible ? 1 : 0};
    transition: opacity 0.5s;
  `
  return (
    <div>
      <div css={prof_container}>
        <div className="prof_container_img">
          <img src={face} alt="" />
        </div>
        <div className="prof_container_text">
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
            <tr>
              <th>Email</th>
              <td>f24a059h☆mail.cc.niigata-u.ac.jp</td>
            </tr>
          </table>
        </div>
      </div>
      <h3 css={mokujidayo}>下にコンテンツがある...</h3>
    </div>
  )
}
