import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'

export default function NewsForm() {
  return (
    <div
      className='margin-border-main'
    >
      <h4>newsletter do canal</h4>
      <Card
        className='mt-2'
      >
        <CardBody>
          <CardSubtitle
            className='mb-2'
          >
            Registre seu email na newsletter para ser avisado de novos vídeos
          </CardSubtitle>
          <div
            className='d-flex justify-content-center'
          >
            <span>
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
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
