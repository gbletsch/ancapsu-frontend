import React from 'react'
import {
  CardColumns,
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
      <CardColumns
        style={{
          marginTop: '20px'
        }}        
      >
        {
          data.map(item => {            
            return (
              <VideoCard allData={item} />
            )
          })
        }
      </CardColumns>
    </div>
  )
}
