import React from 'react'

import YoutubeLogo from '../assets/youtube-logo.png'
import BitchuteLogo from '../assets/bitchute-logo.png'
import FacebookLogo from '../assets/facebook-logo.png'
import MindsLogo from '../assets/minds-logo.png'
import TwitterLogo from '../assets/twitter-logo.png'
import GabLogo from '../assets/gab-logo.png'
import AncapsuLogo from '../assets/logo-ancapsu.png'
import { FiMenu } from 'react-icons/fi'

function Toolbar() {
  return (
    <header className='toolbar'>
        <ul className='toolbar__icons'>
          <li><img src={YoutubeLogo} alt=""/></li>
          <li><img src={BitchuteLogo} alt=""/></li>
          <li><img src={FacebookLogo} alt=""/></li>
          <li><img src={MindsLogo} alt=""/></li>
          <li><img src={TwitterLogo} alt=""/></li>
          <li><img src={GabLogo} alt=""/></li>
        </ul>
        <section className="toolbar__second-row">
          <a href="/"><img src={AncapsuLogo} alt="AncapSu" /></a>
          <ul>
            <li><a className='button' href="/login">Autenticar</a></li>
            <li><a className='button' href="/create-account">Criar conta</a></li>
          </ul>
        </section>
        <input type="checkbox" id='menu-btn' className="menu-btn"/>
        <label htmlFor="menu-btn" className="menu-icon">
          <FiMenu size='25px' color='black' />
        </label>
        <ul className='toolbar__menu'>
            <li><a href="/">Home</a></li>
            <li><a href="/">videos</a></li>
            <li><a href="/">matérias</a></li>
            <li><a href="/">pautas</a></li>
            <li><a href="/">minha conta</a></li>
        </ul>




        {/* <section className="toolbar__third-row">
          <div className="toolbar__right">
            <a href="#menu" className="button">
              </a>
          </div>
        </section>
        <section className="toolbar__forth-row">
        </section> */}
    </header>
  )
}

export default Toolbar
