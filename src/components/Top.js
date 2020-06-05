import
  React,
  { useState }
from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse
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
              {/* <Link
                  to={{
                    pathname: `video-category/video`,
                    state: {
                      nameCat: 'Video'
                    }
                  }}
                >
                  Videos
                </Link> */}
              <NavLink
                href= '/video/video-category/video'
                nameCat='Video'
              >
                Videos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Matérias</NavLink>
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
