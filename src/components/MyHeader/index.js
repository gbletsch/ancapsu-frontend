import React from 'react';
import { FaBars } from 'react-icons/fa'
import AncapsuLogo from '../../assets/logo-ancapsu.png'
import './Style.css'

function MyHeader() {
  function handleClick (e) {
    var x = document.getElementById('myNav')
    if (x.className === 'navbar') {
      x.className += ' responsive'
    } else {
      x.className = 'navbar'
    }
  }
  return (
  <header>
    <nav className="navbar" id='myNav'>
      <a href="/" className="active">
        <AncapsuLogo />
      </a>
      <a href="/">videos</a>
      <a href="/">materias</a>
      <a href="/">pautas</a>
      <a href="/">minha conta</a>
      <button
        className='hamburger'
        onClick={e => handleClick(e)}
      >
        <FaBars size='20px' />
      </button>
    </nav>
  </header>
  );
}

export default MyHeader;