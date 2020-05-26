import React from 'react'
import { Col, Row, Card, CardTitle, CardSubtitle,
  Form, FormGroup, Input, Button
} from 'reactstrap'
import MainCard from './MainCard'
import MainTop from './MainTop'
import Videos from './Videos'

export default function Main() {
  return (
    <main>
      <MainTop />
      <Videos />
    </main>
  )
}
