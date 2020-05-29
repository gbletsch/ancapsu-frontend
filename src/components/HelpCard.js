import React from 'react'

import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap'

export default function HelpCard(props) {
  return (
    <Card style={{ width: '110px' }}>
      <CardImg
        width='100%'
        src={props.src}
        alt={props.alt}
      />
      <CardImgOverlay>
        <CardTitle
          style={{
            fontWeight: 'bold',
            fontSize: '12px',
            color: '#fc0',
          }}
        >
          {props.title}
        </CardTitle>
      </CardImgOverlay>
    </Card>
  )
}
