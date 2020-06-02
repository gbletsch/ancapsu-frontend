import
  React,
  { useState }
from 'react'

import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Collapse
} from 'reactstrap'

export default function Top() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => setisOpen(!isOpen)

  return (
    <div>
      <Navbar
        style={{
          background: 'linear-gradient(132deg, rgba(255,204,0,1) 52%, rgba(0,0,0,1) 100%)'

        }}
        // color='light'
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
            // color: '#fc0',
          }}
        />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Videos</NavLink>
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
