import React, { useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import VideoCard from './VideoCard'
import db from '../database/data.json'

export default function Videos() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const newData = db.map(item => item)
    setData(newData)
    setLoading(false)
  }, [])
  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } 
  
  return (
    <div style={{marginTop: '20px'}} >
      <h4>últimnotícias veiculadas</h4>
      <Row>
        {
          data.map(item => {
            return (
              <Col id={item.id} sm='12' md='6' xl='3'>
                <VideoCard
                  photo={item.photo}
                  linkTo='#'
                  title={item.title}
                />            
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
