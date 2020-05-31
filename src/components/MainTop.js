import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import Funnel from './Funnel'
import NewsForm from './NewsForm'

export default function MainTop(props) {
  return (
    <Row>
      <Col
        lg='6'
        className='mt-4' 
        style={{
          paddingBottom: '20px',
          borderBottom: '2px #000 solid'
        }} 
      >
        <NewsForm />
      </Col>
      <Col
        className='mt-4'
        style={{
          paddingBottom: '20px',
          borderBottom: '2px #000 solid'
        }}
      >
        <Funnel
          numTargets={props.numTargets}
          numApproval={props.numApproval}
        />
      </Col>
    </Row>
  )
}
