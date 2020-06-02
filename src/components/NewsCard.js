import React from 'react'

import {
  Card,
  CardBody,
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
  // console.log(props.data);
  
  return (
    <Card>
      <CardImg
        src={photo}
        alt='image'
      />
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
