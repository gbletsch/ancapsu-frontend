import React from 'react'
import { Link } from 'react-router-dom'

import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap'
 
export default function VideoCard(props) {
  const {
    allData
  } = props

  let authors = ''
  let id = ''
  let ref = ''
  let photo = ''
  let title = ''
  let categories = ''

  if (allData) {
    authors = allData.Authors
    id = allData.Id
    ref = `${authors.ProducedLabel} ${authors.Authored.Name} - ${authors.StatusText} ${authors.DateLabel} ${authors.Date}`
    photo = `https://ancap.su/api/Video/Image?id=${id}`
    title = allData.Title
    categories = allData.Categories.Categories  
  }
  
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
      <CardImgOverlay
        style={{
          justifyContent: 'start'
        }}
      >
        <Badge
          className='card-badge'
          color='warning'
          style={{
          }}
        >
          Video
        </Badge>
      </CardImgOverlay>
      <CardBody>
        <CardTitle
          // className='text-center'
        >
          <Link
            className='styled-a stretched-link'
            to={{
              pathname: `/video/${id}`,
              state: {
                categories: categories,
                reference: ref,
                photo: photo
              }
            }}
          >
            {title}
          </Link>
        </CardTitle>
      </CardBody>
    </Card>
  )
}
