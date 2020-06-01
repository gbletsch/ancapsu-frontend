import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
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
    <Card className='mt-2 text-right' >
      <CardImg
        top
        width='100%'
        src={photo}
        alt='Card Image'
      />
      <CardImgOverlay
        className='d-flex align-items-end'
      >
        <CardTitle
          style={{
            color: 'white'
            
          }}
        >
          <Link
            className='styled-a'// text-center'
            style={{
              backgroundColor: 'lightgray'
            }}
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
      </CardImgOverlay>
    </Card>
  )
}
