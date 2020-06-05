import React from 'react'

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap'

import {
  Link
} from 'react-router-dom'

function NewsCard(props) {
  const {
    Id,
    Title
  } = props.data
  const photo = `https://ancap.su/api/Article/Image?id=${Id}`
  
  return (
    <Card
      style={{
        border: '1px black solid'
      }}
    >
      <CardImg
        src={photo}
        alt='image'
      />
      <CardImgOverlay>
        <Badge
          className='card-badge'
          color='warning'
        >
          artigo
        </Badge>
      </CardImgOverlay>

      <CardBody>
        <CardTitle
          className='text-center'
        >
          <Link
            className='styled-a stretched-link'
            to={{
              pathname: `/article/${Id}`,
              state: {
                data: props.data,
                photo: photo
              }
            }}
          >
            {Title}
          </Link>
        </CardTitle>
      </CardBody>
    </Card>
  )
}

export default NewsCard
