import React from 'react'
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row
} from 'reactstrap'

import Funnel from './Funnel'
import NewsForm from './NewsForm'

export default function MainTop() {
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
        <Funnel />
      </Col>
    </Row>
  )
}
