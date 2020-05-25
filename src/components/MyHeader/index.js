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
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a
        href={void(0)}
        class="icon"
        onClick={e => handleClick(e)}
      >
        <img src={FaBars} alt=""/>
      </a>
    </div>

  );
}

export default MyHeader;