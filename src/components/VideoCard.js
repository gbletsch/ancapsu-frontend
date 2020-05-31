import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
} from 'reactstrap'

export default function VideoCard(props) {
  // const [id, setId] = useState('')

  // useEffect(() => setId(props.id), [props.id])
  
  // const video = props
  // const id = video.Id
  console.log('VIDEO', props.id);
  
  return (
    <Card className='mt-2' >
      <CardImg
        top
        width='100%'
        src={props.photo}
        alt='Card Image'
      />
      {/* <a
        href="/video"
        id={id}
        style={{
          textAlign: 'center',
          textDecoration: 'none',
          color: '#000',
          fontWeight: '500',
          transition: 'opacity 0.2s'
        }}
      >
        {props.title}
      </a> */}
      <Link
        to={{
          pathname: `video/${props.id}`,
          id: props.id
          // aboutProps: {
          //   id: video.id
          // }
        }}
        // to='/video'
        // params={{ teste: 'puta' }}
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
