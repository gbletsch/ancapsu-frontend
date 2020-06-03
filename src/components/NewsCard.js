import React from 'react'

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardImg,
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
        maxWidth: '20rem'
      }}
    >
      <CardImg
        src={photo}
        alt='image'
      />
      <CardHeader>
        <Badge color='warning'>artigo</Badge>
      </CardHeader>

      <CardBody>
        <CardTitle
          className='text-center'
        >
          <Link
            className='styled-a'
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
