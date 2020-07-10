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
        <h1>CipherWebLLC</h1>
        <h3>
          <span>社名　サイファーウェブ合同会社<br/>
          代表社員 高野勝通<br/>
          創立年月日 平成30年10月15日<br/>
          Digital Creation @ </span>
          <a target="_blank" rel="noopener noreferrer" href={JOB_DATA.url}>{JOB_DATA.name}</a>
        </h3>
        <div className="separator"></div>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://note.mu/masia02/n/n6e2dada5a2dc">Webコンサルティング</a><br/>
          WebAppStore：<a target="_blank" rel="noopener noreferrer" href="https://appfav.net">Appfav</a><br/>
          デジタル通貨入門：<a target="_blank" rel="noopener noreferrer" href="https://getbits.net">Getbits</a><br/>
          CryptoArt：<a target="_blank" rel="noopener noreferrer" href="https://mintbase.io/my-market/0x4d38eea6619b4159498b31df9623000f2e6ef25e">mintbase</a>　<a target="_blank" rel="noopener noreferrer" href="https://opensea.io/category/cipherweb-arts/">OpenSea</a><br/>
          グッズ販売：<a target="_blank" rel="noopener noreferrer" href="https://cipherweb.base.ec/">base</a><br/>
          <b>Contact</b>.<a target="_blank" rel="noopener noreferrer" href="https://line.me/R/ti/p/%40zkz7445k">Line</a> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/cipherwebllc">Twitter</a> info@cipher-web.com
        </p>
        <button className="toggle-overlay-button" onClick={handleClick}>Explore →</button>
      </div>
    </>
  )
}

export default PersonalInfo
