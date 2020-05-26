import React from 'react';
import { FaBars } from 'react-icons/fa'
import AncapsuLogo from '../../assets/logo-ancapsu.png'
import './Style.css'

function MyHeader() {
  function handleClick (e) {
    var x = document.getElementById('myTopnav')   
    
    if (x.className === 'topnav') {
      x.className += ' responsive'
    } else {
      x.className = 'topnav'
    }
    console.log(x.className);

  }

  return (
    <div class="topnav" id="myTopnav">
      <a
        href="#home"
        // class="active"
      >
        <img
          className='logo'
          src={AncapsuLogo}
          alt="home"
        />
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a
        href={void(0)}
        className="icon"
        onClick={e => handleClick(e)}
      >
        <FaBars size='20px' color='#fc0' />
      </a>
    </div>

  );
}

export default MyHeader;