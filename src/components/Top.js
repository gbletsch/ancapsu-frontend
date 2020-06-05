import
  React,
  { useState }
from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap'

export default function Top() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => setisOpen(!isOpen)

  return (
    <div
      className='no-margin'
    >
      <Navbar
        style={{
          background: 'linear-gradient(132deg, rgba(255,204,0,1) 52%, rgba(0,0,0,1) 100%)'

        }}
        light
        expand='md'
      >
        <NavbarBrand
          href='/'
        >
          Ancap.su
        </NavbarBrand>
        <NavbarToggler 
          onClick={toggle}
          style={{
            backgroundColor: '#fc0',
          }}
        />
        <Collapse
          isOpen={isOpen}
          navbar
        > 
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link
                className='nav-link'
                to={{
                  pathname: `/video/video-category/video`,
                  state: {
                    nameCat: 'Vídeo'
                  }
                }}
              >
                Vídeos
              </Link>
              {/* <NavLink
                href= '/video/video-category/video'
              >
                Videos
              </NavLink> */}
            </NavItem>
            <NavItem>
              <a
                className='nav-link'
                href={'/article/news-category/article'}
              >
                Matérias
              </a>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Pautas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Minha conta</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
