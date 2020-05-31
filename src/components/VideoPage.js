import React, { useState, useEffect } from 'react'
import api from '../services/api'

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Row
} from 'reactstrap'

export default function VideoPage(props) {
  // const [videoData, setvideoData] = useState({})
  // const id = props
  // console.log('ID', this.props.location.state);
  

  // useEffect(() => {
  //   api.get('Video/Get')
  //     .then(response => console.log('RESPONSE', response))
  //     .catch(error => console.log('ERROR', error))
  // })

  console.log('ID:', props.match.params.id);
  

  return (
    <Card>
      <Row
        style={{
          justifyContent: 'center'
        }}
      >
        <Badge className='badge-dark'>Video</Badge>
        <Badge className='badge-dark'>Novidades</Badge>
        <Badge className='badge-dark'>Socialismo</Badge>
        <Badge className='badge-dark'>Economia</Badge>
      </Row>
      <CardBody>
        <CardTitle
          style={{
            textAlign: 'center'
          }}
          tag='h3'
        >
          Título do video
        </CardTitle>
        <CardHeader>
          Produzido por Homer Simpson,
          rascunho em 12/12/2019.
        </CardHeader>
        <CardImg
          src={`https://ancap.su/api/Video/Image?id=520d5283-cd37-4d69-a3bd-5958dcd3dc0e`}
          alt='Image'
        />
        <CardSubtitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit blanditiis debitis ad modi ipsa earum eveniet nihil laudantium, voluptates accusantium voluptas corrupti, id qui ipsum placeat inventore dolores doloribus rem?
        </CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ut atque aliquid porro fugit illo quo placeat tenetur architecto quisquam doloribus, laudantium saepe nemo sapiente sed magni hic earum voluptates?
        </CardText>
      </CardBody>
    </Card>
  )
}
