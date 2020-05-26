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


export default function Funnel() {
  return (
    <div>
        <h4>funil de produção</h4>
        <Row>
          <Col>
            <Card body className='text-center'>
              <CardTitle>120</CardTitle>
              <CardSubtitle>Pautas</CardSubtitle>
            </Card>
          </Col>
          <Col>
            <Card body className='text-center'>
              <CardTitle>120</CardTitle>
              <CardSubtitle>Pautas</CardSubtitle>
            </Card>
          </Col>
        </Row>
    </div>
  )
}
