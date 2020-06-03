import React from 'react'
import {
  CardColumns,
} from 'reactstrap'

import NewsCard from './NewsCard'

export default function Videos(props) {
  const {
    data,
    title
  } = props

  return (
    <div
      className='margin-border-main'
    >
      <h4>{title}</h4>
      <CardColumns
        style={{
          marginTop: '20px'
        }}
      >
        {
          data.map(firstItem => {
            return firstItem.Articles.map(item => {
              return (
                <NewsCard id={item.Id} data={item} />
              )
            })
          })
        }
      </CardColumns>
    </div>
  ) 
}