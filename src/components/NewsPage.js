import React, { useState, useEffect } from 'react'
import api from '../services/api'

import {
  Link
} from 'react-router-dom'

import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

export default function NewsPage (props) {
  const [loading, setloading] = useState(true)
  const id = props.match.params.id
  
  const categories = props.location.state.data.Categories.Categories
  const photo = props.location.state.photo

  const [title, setTitle] = useState('')
  const [text, settext] = useState([])
  
  const [suggested, setsuggested] = useState({label: '', })
  const [wrote, setwrote] = useState({label: '', name: ''})
  const [revised, setrevised] = useState({label: '', name: ''})
  const [narrated, setnarrated] = useState({label: '', name: ''})
  const [produced, setproduced] = useState({label: '', name: ''})
  const [status, setstatus] = useState({label: '', name: ''})

  const [link, setlink] = useState('')

  const [actions, setactions] = useState([])
  
  useEffect(() => {
    const url = `article/get/${id}`
    
    api.get(url)
      .then(response => {
        
        setTitle(response.data.Title)
        setsuggested({
          label: response.data.Authors.SuggestedLabel,
          name: response.data.Authors.Suggested.Name
        })
        setwrote({
          label: response.data.Authors.AuthoredLabel,
          name: response.data.Authors.Authored.Name
        })
        setrevised({
          label: response.data.Authors.RevisedLabel,
          name: response.data.Authors.Revised.Name
        })
        setnarrated({
          label: response.data.Authors.NarratedLabel,
          name: response.data.Authors.Narrated.Name
        })
        setstatus({
          label: `${response.data.Authors.StatusText} ${response.data.Authors.DateLabel}`,
          name: response.data.Authors.Date
        })
        setproduced({
          label: response.data.Authors.ProducedLabel,
          name: response.data.Authors.Produced.Name
        })
        setlink(response.data.Target.Link)
        settext(response.data.Paragraphs)

        setactions(response.data.Actions)

        setloading(false)
      })
      .catch(error => console.log('ERROR', error))
  }, [id])

  if (loading) {
    return <h3>Loading...</h3>
  }
   
  return (
    <Card>
      <CardHeader className='text-center'>
          {
            categories.map(item => {
              return (
                <Link
                  to={{
                    pathname: `news-category/${item.Label}`,
                    state: {
                      nameCat: item.Category
                    }
                  }}
                >
                  <Badge className='badge-dark'>
                    {item.Category}
                  </Badge>
                </Link>
              )
            })
          }
      </CardHeader>
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
          {suggested.label} <b>{suggested.name}</b>&nbsp;
          {wrote.label} <b>{wrote.name}</b>&nbsp;
          {revised.label} <b>{revised.name}</b>&nbsp;
          {narrated.label} <b>{narrated.name}</b>&nbsp;
          {produced.label} <b>{produced.name}</b>&nbsp;
          -&nbsp;
          {status.label} <b>{status.name}</b>&nbsp;
        </CardHeader>
          <CardSubtitle className='mt-2 text-center small'>
            {
              link ? (
                <CardLink
                  className='styled-a'
                  href={link}
                >
                  {link}
                </CardLink>
              ) : ''
            }
          </CardSubtitle>
          <CardImg className='mt-2'
            src={photo}
            alt='Image'
          />
          <CardBody>
            <CardText className='mt-5'
              style={{
                borderTop: '2px #000 solid',
                paddingTop: '20px'
              }}
            >
              {text.map(paragraph => {
                return (
                <p>{paragraph}</p>
                )
              })}
            </CardText>
          </CardBody>

            <CardFooter>
              <ListGroup>
              {
                actions.map(item => {
                  return (
                    <ListGroupItem
                      key={item.Id}
                    >
                      {item.TypeName} por {item.UserName} em {item.Date}<br/>
                      {item.TypeName !== 'Sugerido' ? `(${item.BillableWords} palavras)`: ''}<br/>
                      {
                        item.Audios.length > 0 ? (
                          <div>
                            {/* <audio controls>
                              <source
                                src='https://ancap.su/api/Audio/3c04aa84-70db-4e14-b26d-eba5707ff0df/0'
                                type='audio/mp3'
                              />
                              Seu navegador não suporta audio.
                            </audio> */}
                            <a
                              className='styled-a'
                              href={`https://ancap.su/api/Audio/${item.Id}/0`}
                            >
                              Escute o audio
                            </a>
                          </div>
                        ): ''
                      }
                    </ListGroupItem>
                  )
                })
              }
              </ListGroup>
            </CardFooter>
    </Card>
  )
}
