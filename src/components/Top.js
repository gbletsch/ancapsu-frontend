import
  React,
  { useState }
from 'react'

import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  Collapse
} from 'reactstrap'

export default function Top() {
  const [isOpen, setIsOpen] = useState(false)
  const [openVideo, setOpenVideo] = useState(false)
  const [openNews, setOpenNews] = useState(false)
  const [openAccount, setOpenAccount] = useState(false)

  function handleClick (e) {
    e.preventDefault()
    setOpenVideo(false)
    setOpenNews(false)
    setOpenAccount(false)
    switch (e.target.id) {
      case 'openVideo':
        setOpenVideo(true)
        break;
      case 'openNews':
        setOpenNews(true)
        break;
      case 'openAccount':
        setOpenAccount(true)
        break;
      default:
        break;
    }
    console.log(e.target.id);
  }

  return (
    <div>
      <Navbar
        style={{ backgroundColor:'#fc0' }}
        // color="#ffcc00"
        light
        expand='md'
      >
        <NavbarBrand>
          ancap.su
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret
                id='openVideo'
                onClick={e => handleClick(e)}
              >
                videos
              </DropdownToggle>
                <Collapse isOpen={openVideo}>
                  <DropdownMenu>
                    <DropdownItem>
                      Teoria libertária              </DropdownItem>
                    <DropdownItem>
                      Visão libertária
                    </DropdownItem>
                    <DropdownItem>
                      Cômicos
                    </DropdownItem>
                    <DropdownItem>
                      Procurar
                    </DropdownItem>
                  </DropdownMenu>
                </Collapse>
              <DropdownToggle nav caret
                id='openNews'
                onClick={e => handleClick(e)}
              >
                matérias
              </DropdownToggle>
              <Collapse isOpen={openNews}>
                <DropdownMenu>
                  <DropdownItem>
                    Artigos
                  </DropdownItem>
                  <DropdownItem>
                    Tapas
                  </DropdownItem>
                  <DropdownItem>
                    Crônicas
                  </DropdownItem>
                  <DropdownItem>
                    Procurar
                  </DropdownItem>
                </DropdownMenu>
              </Collapse>
              <DropdownToggle nav caret
                id='openAccount'
                onClick={e => handleClick(e)}
              >
                minha conta
              </DropdownToggle>
              <Collapse isOpen={openAccount}>
                <DropdownMenu>
                  <DropdownItem>
                    Autenticar
                  </DropdownItem>
                  <DropdownItem>
                    Criar conta
                  </DropdownItem>
                  <DropdownItem>
                    Esqueci a senha
                  </DropdownItem>
                  <DropdownItem>
                    Confirmar email
                  </DropdownItem>
                  <DropdownItem>
                    Ajuda
                  </DropdownItem>
                </DropdownMenu>
              </Collapse>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
