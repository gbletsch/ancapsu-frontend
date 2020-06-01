import React, {
  useState
} from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardImg,
} from 'reactstrap'
 
export default function VideoCard(props) {
  const {
    // id,
    // categories,
    // reference,
    // title,
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
    <Card className='mt-2' >
      <CardImg
        top
        width='100%'
        src={photo}
        alt='Card Image'
      />
      <Link
        className='styled-a'
        to={{
          pathname: `/video/${id}`,
          state: {
            categories: categories,
            reference: ref,
            photo: photo
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
        {title}
      </Link>
    </Card>
  )
}
