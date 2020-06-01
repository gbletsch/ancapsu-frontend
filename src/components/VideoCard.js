import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardImg,
} from 'reactstrap'

export default function VideoCard(props) {
  
  return (
    <Card className='mt-2' >
      <CardImg
        top
        width='100%'
        src={props.photo}
        alt='Card Image'
      />
      <Link
        className='styled-a'
        to={{
          pathname: `video/${props.id}`,
          // id: props.id,
          state: {
            categories: props.categories,
            reference: props.reference,
            photo: props.photo
          }
        }}
        style={{
          textAlign: 'center',
          textDecoration: 'none',
          color: '#000',
          fontWeight: '500',
          transition: 'opacity 0.2s'
        }}
      >
        {props.title}
      </Link>
    </Card>
  )
}
