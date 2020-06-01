import React, { useState, useEffect } from 'react'
import api from '../services/api'

import {
  Link
} from 'react-router-dom'

import {
  Badge,
  Card,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'

export default function VideoPage(props) {
  const id = props.match.params.id
  const categories = props.location.state.categories
  const reference = props.location.state.reference
  const photo = props.location.state.photo

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState([])
  const [script, setScript] = useState([])
  const [ytLink, setYtLink] = useState([])
  const [bitchuteLink, setBitchuteLink] = useState([])
  
  useEffect(() => {
    api.get(`video/get/${id}`)
      .then(response => {
        setTitle(response.data.Title)
        setDescription(response.data.DescriptionPars)
        setScript(response.data.ScriptPars)
        setYtLink(response.data.YoutubeLink)
        setBitchuteLink(response.data.BitchuteLink)
      })
      .catch(error => console.log('ERROR', error))
  }, [id]) 

  return (
    <Card>
      <CardHeader className='text-center'>
        {/* <Row
          style={{
            justifyContent: 'center'
          }}
        > */}
          {
            categories.map(item => {
              return (
                <Link
                  to={{
                    pathname: `video-category/${item.Label}`,
                    // state: {

                    // }
                  }}>
                    <Badge className='badge-dark'>
                      {item.Category}
                    </Badge>
                  </Link>
                // <a
                //   className='font-small'
                //   cat={item.Label}
                //   href={`video-category/${item.Label}`}
                // >
                //   <Badge className='badge-dark'>
                //     {item.Category}
                //   </Badge>
                // </a>
              )
            })
          }
        {/* </Row> */}
      </CardHeader>
      {/* <CardBody> */}
        <CardTitle
          style={{
            textAlign: 'center'
          }}
          tag='h3'
        >
          {title}
        </CardTitle>
        <CardHeader
          className='text-center font-small'
        >
          {reference}
        </CardHeader>
        {/* <CardBody
          style={{
            fontSize: '0.75rem'
          }}
        > */}
        <CardSubtitle className='mt-2 text-center small'>
          <CardLink href={ytLink}>Assitir no Youtube</CardLink>
          <CardLink href={bitchuteLink}>Assitir no Bitchute</CardLink>
        </CardSubtitle>
        {/* </CardBody> */}
        <CardImg className='mt-2'
          src={photo}
          alt='Image'
        />
        <CardSubtitle className='mt-5'>
          <CardText>{description[14]}</CardText>
          {description.slice(0, 13).map(paragraph => {
            return (
              <CardText>{paragraph}</CardText>
            )
          })}
        </CardSubtitle>
        <CardText className='mt-5'
          style={{
            borderTop: '2px #000 solid'
          }}
        >
          <h3>script</h3>
          {script.map(paragraph => {
            return (
            <p>{paragraph}</p>
            )
          })}
        </CardText>
      {/* </CardBody> */}
    </Card>
  )
}
