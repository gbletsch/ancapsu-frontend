import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

import Help from './Help'

export default function HelpAndNews() {
  return (
    <Row>
      <Col lg='4'>
        <Help />
      </Col>
      <Col>
        NEWS
      </Col>
    </Row>
  )
}
