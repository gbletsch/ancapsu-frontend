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
  InputGroup,
  InputGroupAddon,
  Row
} from 'reactstrap'

export default function NewsForm() {
  return (
    <div>
      <h4>newsletter do canal</h4>
      <Card className='mt-2' style={{border: 0}} >
        {/* <CardTitle>newsletter do canal</CardTitle> */}
        <CardSubtitle
          className='mb-2'
        >Registre seu email na newsletter para ser avisado de novos vídeos</CardSubtitle>
        <InputGroup>
          <InputGroupAddon addonType='append'>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='seu@email.com'
            />
            <Button>Cadastrar</Button>
          </InputGroupAddon>
        </InputGroup>
      </Card>
    </div>
  )
}
