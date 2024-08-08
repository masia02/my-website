import React from "react"
import "./personalInfo.scss"

import ProfileImage from './profileImage'

import { JOB_DATA } from '../constants'

const handleClick = () => {
  const wrapper = document.getElementById('personal-info-wrapper')
  wrapper.classList.toggle('personal-info-hidden')
  const icon = document.getElementById('menu-icon')
  icon.classList.toggle('menu-icon-collapsed')
}

const PersonalInfo = () => {
  return (
    <>
      <div
        id="menu-icon"
        className="menu-icon"
        onClick={handleClick}
      />
      <div id="personal-info-wrapper" className="personal-info">
        <ProfileImage />
        <h1>CipherWeb LLC</h1>
        <h3>
          <span>社名　　<a target="_blank" rel="noopener noreferrer" href="https://linktr.ee/cipherweb">サイファーウェブ合同会社</a><br/>
          代表社員 <a target="_blank" rel="noopener noreferrer" href="https://masia02.eth.limo">高野勝通</a><br/>
          ＩＴソフトウェアの導入、活用支援<br/>
          <a target="_blank" rel="noopener noreferrer" href="https://hyperfy.io/cipherweb">Web3メタバース</a>.AIに関わっていく会社<br/>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dwebxr_lab">dWebXR</a> CryptoArtist & Support.</span><br/>
          <a target="_blank" rel="noopener noreferrer" href="https://dwebxr.online">dWebXR Lab</a> ⇒ <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/85JVzJaatT">DAO</a>へ
        </h3>
        <div className="separator"></div>
        <p>
          Media：<a target="_blank" rel="noopener noreferrer" href="https://medium.com/cipher-web">Medium</a>,<a target="_blank" rel="noopener noreferrer" href="https://mora.app/planet/vk6gi-nqaaa-aaaan-qdgwq-cai">Mora</a>,<a target="_blank" rel="noopener noreferrer" href="https://appfav.net">Appfav</a><br/>
          NFT Project：<a target="_blank" rel="noopener noreferrer" href="https://polygonlow.xyz/">PolygonLow</a>,<a target="_blank" rel="noopener noreferrer" href="https://momomitsuki.on.fleek.co/">MomoMitsuki</a><br/>
          Contact：<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Cfywb3aNWg">Discord</a>,<a target="_blank" rel="noopener noreferrer" href="https://x.com/cipherwebllc">X</a>,<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cipher_web">instagram</a>,<a target="_blank" rel="noopener noreferrer" href="https://line.me/R/ti/p/%40zkz7445k">LINE</a>,<a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/cipher-web.com">bsky</a>
        </p>
        <button className="toggle-overlay-button" onClick={handleClick}>Explore →</button>
      </div>
    </>
  )
}

export default PersonalInfo
