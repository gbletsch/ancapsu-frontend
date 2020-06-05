import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import VideoCard from './VideoCard'

export default function Videos(props) {
  const { data } = props

  return (
    <div
      className='margin-border-main'
    >
      <h4>últimos videos do canal</h4>
      <Row
        className='d-flex justify-content-center'
      >
        {
          data.map(item => {
            return (
              <Col
                className='d-flex justify-content-center'
                sm='6'
                key={item.Id}
              >
                <VideoCard allData={item} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
