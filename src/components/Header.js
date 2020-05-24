import React from 'react'

import YoutubeLogo from '../assets/youtube-logo.png'
import BitchuteLogo from '../assets/bitchute-logo.png'
import FacebookLogo from '../assets/facebook-logo.png'
import MindsLogo from '../assets/minds-logo.png'
import TwitterLogo from '../assets/twitter-logo.png'
import GabLogo from '../assets/gab-logo.png'
import AncapsuLogo from '../assets/logo-ancapsu.png'
import { FaHome } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

function Header() {
  return (
    <header className='header-container'>
      <div className="header__first-row">
        <img src={YoutubeLogo} alt=""/>
        <img src={BitchuteLogo} alt=""/>
        <img src={FacebookLogo} alt=""/>
        <img src={MindsLogo} alt=""/>
        <img src={TwitterLogo} alt=""/>
        <img src={GabLogo} alt=""/>
      </div>
      <div className="header__second-row">
        <img src={AncapsuLogo} alt="AncapSu" />
        <section className="header__second-row__buttons">
          <a className='button' href="/login">Autenticar</a>
          <a className='button' href="/create-account">Criar conta</a>
        </section>
        <a href="/" className='button header__hamburger'>
          <FiMenu className='fi' size='20px' />
        </a>
      </div>
      <ul className='header__third-row'>
        <li><a href="/"><FaHome color='black' /></a></li>
        <li><a href="/">videos</a></li>
        <li><a href="/">matérias</a></li>
        <li><a href="/">pautas</a></li>
        <li><a href="/">minha conta</a></li>
      </ul>
    </header>
  )
}

export default Header
