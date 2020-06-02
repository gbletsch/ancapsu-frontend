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
  // console.log(props.data);
  
  return (
    <Card>
      <CardImg
        src={`https://ancap.su/api/Article/Image?id=${Id}`}
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
                data: props.data
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
