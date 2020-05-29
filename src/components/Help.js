import React from 'react'
import { Row } from 'reactstrap'

import SuggestPhoto from '../assets/help-suggest.png'
import WritePhoto from '../assets/help-write.png'
import NarratePhoto from '../assets/help-narrate.png'

import HelpCard from './HelpCard'

export default function Help() {
  return (
    <div style={{ marginTop: '20px', height: '200px' }}>
      <h4>quer ajudar?</h4>
      <Row className='justify-content-center' style={{height: '100px'}}>
          <HelpCard
            src={SuggestPhoto}
            title='Sugerir notícia'
          />
          <HelpCard
            src={WritePhoto}
            title='Escrever uma matéria'
          />
          <HelpCard
            src={NarratePhoto}
            title='Narrar uma matéria'
          /> 
      </Row>
    </div>
  )
}
