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


export default function Funnel(props) {
  return (
    <div>
        <h4>funil de produção</h4>
        <Row>
          <Col>
            <Card body className='text-center'>
              <CardTitle>{props.numTargets}</CardTitle>
              <CardSubtitle>Pautas</CardSubtitle>
            </Card>
          </Col>
          <Col>
            <Card body className='text-center'>
              <CardTitle>{props.numApproval}</CardTitle>
              <CardSubtitle>Aprovação</CardSubtitle>
            </Card>
          </Col>
        </Row>
    </div>
  )
}
