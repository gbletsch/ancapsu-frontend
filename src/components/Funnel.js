import React from 'react'
import {
  Card,
  CardSubtitle,
  CardTitle,
  Col,
  Row
} from 'reactstrap'


export default function Funnel(props) {
  const {
    numApproval,
    numTargets
  } = props

  return (
    <div
      className='margin-border-main'
    >
        <h4>funil de produção</h4>
        <Row>
          <Col>
            <Card body className='text-center'>
              <CardTitle>{numTargets}</CardTitle>
              <CardSubtitle>Pautas</CardSubtitle>
            </Card>
          </Col>
          <Col>
            <Card body className='text-center'>
              <CardTitle>{numApproval}</CardTitle>
              <CardSubtitle>Aprovação</CardSubtitle>
            </Card>
          </Col>
        </Row>
    </div>
  )
}
