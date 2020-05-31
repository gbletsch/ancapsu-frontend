import React from 'react'
import {
  Card,
  CardImg,
  CardLink,
  CardText,
  Row
} from 'reactstrap'

import SocialLinks from './SocialLinks'
import LogoAncapsu from '../assets/logo-ancapsu-yellow.png'

export default function MyFooter() {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        marginTop: '50px',
        paddingTop: '50px'
      }}  
    >
      <Row
        className='justify-content-center'
      >
        <Card
          style={{
            backgroundColor: 'black',
            width: '70%'
          }}
        >
          <CardImg top
            src={LogoAncapsu}
            style={{
              width: '70%'
            }}
          />
          <CardText
            style={{
              color:'white',
              marginTop: '30px',
              fontSize: '.9rem',
              textAlign: 'center'
            }}
          >
          <p>
          Ancap.su é um canal no youtube com o 
          objetivo de divulgar o libertarianismo 
          e o anarcocapitalismo. O canal é composto 
          de vários quadros, vídeos teóricos, 
          quadros cômicos ocasionais e notícias 
          comentadas sempre apresentando uma 
          visão libertária.
          </p>
          <p>Entre em contato:</p>
          </CardText>
          <CardLink
            href="mailto:ancapsu@gmail.com"
            style={{
              color: '#fc0',
              textAlign: 'center'
            }}
          >
            ancapsu@gmail.com
          </CardLink>
        </Card>
      </Row>
      <Row>
        <SocialLinks color='white' />
      </Row>
    </footer>
  )
}
