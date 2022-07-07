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
          代表社員 高野勝通<br/>
          オープンメタバースに関わっていく会社<br/>
          <a target="_blank" rel="noopener noreferrer" href="https://dwebxr.on.fleek.co/">dWebXR</a> Tester. CryptoArtist Support.<br/>
          Digital Creation @ </span>
          <a target="_blank" rel="noopener noreferrer" href={JOB_DATA.url}>{JOB_DATA.name}</a>
        </h3>
        <div className="separator"></div>
        <p>
          暗号資産入門：<a target="_blank" rel="noopener noreferrer" href="https://note.com/masia02/m/mfbd4966b3668">dWebXRマガジン</a><br/>
          CryptoARTs：<a target="_blank" rel="noopener noreferrer" href="https://opensea.io/accounts/CipherWeb-Arts/">OpenSea</a>,<a target="_blank" rel="noopener noreferrer" href="https://tofunft.com/user/0xe7C33E18a0324B7C7Db322EDae3Bdbc84Db3A83E/items/in-wallet">TOFUNFT</a><br/>
          Collections：<a target="_blank" rel="noopener noreferrer" href="https://polygonlow.xyz/">Polygonlow</a>,<a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/momomitsuki">Momo Mitsuki</a><br/>
          Contact：<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Cfywb3aNWg">Discord</a>,<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/cipherwebllc">Twitter</a>,<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/cipher_web">instagram</a>,<a target="_blank" rel="noopener noreferrer" href="https://line.me/R/ti/p/%40zkz7445k">LINE</a>
        </p>
        <button className="toggle-overlay-button" onClick={handleClick}>Explore →</button>
      </div>
    </>
  )
}

export default PersonalInfo
