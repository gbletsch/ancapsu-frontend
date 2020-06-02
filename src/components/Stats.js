import React from 'react'

import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

export default function Stats(props) {
  console.log('props', props.data)

  const { data } = props

  return (
    <Card>
      <CardBody>
        <ListGroup
        >
          {
            data.map(item => {

              return (
                <ListGroupItem 
                  key={item.Realm}
                  className='d-flex align-items-center'
                >
                  <img
                    style={{
                      marginRight: '10px'
                    }}
                    src={`https://ancap.su/${item.ImageLink}`}
                    alt="logo"
                  />
                  
                  <a
                    className='styled-a'
                    href={item.Link}
                  >
                    {item.Realm} - {item.Value} {item.Parameter}
                  </a>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </CardBody>      
    </Card>
  )
}
