import React from 'react'
import { Col, Row } from 'reactstrap'
import VideoCard from './VideoCard'
// import { Link } from 'react-router-dom'

export default function Videos(props) {

  return (
    <div
      className='margin-border-main'
    >
      <h4>últimos videos do canal</h4>
      <Row>
        {
          props.data.map(item => {            
            return (
              <Col id={item.Id} sm='12' md='6' xl='3'>
                <VideoCard
                  allData={item}
                />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
