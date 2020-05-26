import React from 'react'

import {
  Card,
  CardBody,
  CardImg,
  CardLink,
} from 'reactstrap'

export default function MainCard(props) {
  return (
    <Card className='mt-2' >
      <CardImg
        top
        width='100%'
        src={props.photo}
        alt='Card Image'
      />
      <CardBody>
        <CardLink
          href={props.linkTo}
          style={{
              textDecoration: 'none',
              color: '#000',
              fontWeight: '500',
              transition: 'opacity 0.2s'
          }}
        >{props.title}</CardLink>
      </CardBody>
    </Card>
  )
}
