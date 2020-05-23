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
    <div className='toolbar'>
        <section className="toolbar__first-row">
          <ul>
            <li><img src={YoutubeLogo} alt=""/></li>
            <li><img src={BitchuteLogo} alt=""/></li>
            <li><img src={FacebookLogo} alt=""/></li>
            <li><img src={MindsLogo} alt=""/></li>
            <li><img src={TwitterLogo} alt=""/></li>
            <li><img src={GabLogo} alt=""/></li>
          </ul>
        </section>
        <section className="toolbar__second-row">
          <a href="/"><img src={AncapsuLogo} alt="AncapSu" /></a>
        </section>
        <section className="toolbar__third-row">
          <ul>
            <li><a className='button' href="/login">Autenticar</a></li>
            <li><a className='button' href="/create-account">Criar conta</a></li>
          </ul>
          <div className="toolbar__right">
            <a href="#menu" className="button">
              <FiMenu size='25px' color='black' />            </a>
          </div>
        </section>
        <section className="toolbar__forth-row">
          
        </section>
    </div>
  )
}

export default Toolbar
