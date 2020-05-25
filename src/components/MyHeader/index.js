import React from 'react';
import { FaBars } from 'react-icons/fa'
import AncapsuLogo from '../../assets/logo-ancapsu.png'
import './Style.css'

function MyHeader() {
  function handleClick (e) {
    var x = document.getElementById('mobile-menu')   
    
    if (x.className === 'mobile-menu-body') {
      x.className += ' active'
    } else {
      x.className = 'mobile-menu-body'
    }
    console.log(x.className);

  }

  return (
    <header className='navbar' id='myNav'>
      <a href="/">
        <img className='logo' src={AncapsuLogo} alt="Ancap.su"/>
      </a>
      <a href="/">videos</a>
      <a href="/">materias</a>
      <a href="/">pautas</a>
      <a href="/">minha conta</a>
      <button
        className='hamburger'
        onClick={e => handleClick(e)}
      >
        <FaBars size='20px' color='#fc0' />
      </button>
      <div
        className="mobile-menu-body"
        id='mobile-menu'
      >
        <a href="/">videos</a>
        <a href="/">materias</a>
        <a href="/">pautas</a>
        <a href="/">minha conta</a>
      </div>
    </header>
  );
}

export default MyHeader;