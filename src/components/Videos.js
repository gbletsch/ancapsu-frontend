import React from 'react'
import { Col, Row } from 'reactstrap'
import VideoCard from './VideoCard'
// import { Link } from 'react-router-dom'

export default function Videos(props) {

  return (
    <div style={{marginTop: '20px'}} >
      <h4>últimos videos do canal</h4>
      <Row>
        {
          props.data.map(item => {
            // const authors = item.Authors
            // const ref = `${authors.ProducedLabel} ${authors.Authored.Name} - ${authors.StatusText} ${authors.DateLabel} ${authors.Date}`
            
            return (
              <Col id={item.Id} sm='12' md='6' xl='3'>
                <VideoCard
                  // photo={`https://ancap.su/api/Video/Image?id=${item.Id}`}
                  // title={item.Title}
                  // id={item.Id}
                  // categories={item.Categories.Categories}
                  // reference={ref}
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
