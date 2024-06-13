/** @jsxImportSource @emotion/react */
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components/Title'
import { css } from '@emotion/react'

import homesrv from '/img/homeNW.svg'
import srv from '/img/server.webp'
import rtr from '/img/router.webp'

export const Route = createLazyFileRoute('/server')({
  component: Server
})

const style = css`
  img {
    max-width: 90vw;
    margin: auto;
    display: block
  }
  .imgs {
    display: flex;
    div {
      flex: 1;
    }
    p {
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
    }
    img {
      width: 90%;
      height: 90%;
    }
  }
`

function Server() {
  return (
    <>
      <Title title='自宅サーバ(おまけ)' />
      <div css={style}>
        <p>
          {`自宅サーバの構成は以下の通りである。
          この自宅サーバにホストされているサービスはこのポートフォリオとマイクラサーバ。
          基本的な構成として、Yamaha RTX1210がよしなにやってくれている感じであり、
          RTX1210にWAN(LAN2), LAN(LAN1-vlan1), DMZ(LAN1-vlan2) Storage NW(LAN3)
          のセグメントを作らせてルーティングしている。
          また、外からDMZにだけアクセス出来るようにNATを設定している。
          (仮にDMZに侵入されたとして、SSHポートフォワーディング等によって
          LANやProxmox VEの管理画面に侵入されることはないようにしている)
          なお、近いうちに名言APIと短歌共有サービスも生やす予定である。`}
        </p>
        <a href={homesrv}><p>もちろんSVG版もあるよ</p></a>
        <img src={homesrv} alt="" />
        <h2>ぎゃらり</h2>
        <div className='imgs'>
          <div>
            <img src={srv} alt="" />
            <p>サーバ</p>
          </div>
          <div>
            <img src={rtr} alt="" />
            <p>よく見るとケーブルがインチキケーブルである。あと上にいるRock64は死んだ。</p>
          </div>
        </div>
      </div>
    </>
  )
}
