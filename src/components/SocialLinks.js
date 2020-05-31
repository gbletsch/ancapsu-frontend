import React from 'react'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'

import {
  BitchuteLogo,
  FacebookLogo,
  GabLogo,
  MindsLogo,
  TwitterLogo,
  YoutubeLogo
} from '../assets/logos.json'

export default function SocialLinks(props) {
  
  return (
    <Row
      className='justify-content-center'
      style={{
        backgroundColor: 'green',
        // justifyContent: 'center',
        // width: '80%',
        // margin: '40px',
      }}
    >
      {/* <Col
        style={{
          // backgroundColor: 'green',
        }}
        className='col-8 d-flex justify-content-around'
      > */}
        <a href="https://youtube.com/ancapsu">
          <img src={YoutubeLogo} alt="Youtube"/>
        </a>
        <a href="https://bitchute.com/ancapsu">
          <img src={`data:image/png;base64,${BitchuteLogo}`} alt="Bitchute"/>
        </a>
        <a href="https://www.facebook.com/pageancapsu/">
          <img src={FacebookLogo} alt="Facebook" />
        </a>
        <a href="https://minds.com/ancapsu">
          <img src={MindsLogo} alt="Minds" />
        </a>
        <a href="https://twitter.com/ancapsu">
          <img src={TwitterLogo} alt="Twitter"/>
        </a>
        <a href="https://gab.ai/ancapsu">
          <img src={GabLogo} alt="Gab"/>
        </a>      
      {/* </Col> */}
    </Row>
  )
}
