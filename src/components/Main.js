import React, { useState, useEffect } from 'react'

import NewsForm from './NewsForm'
import Funnel from './Funnel'
import Videos from './Videos'
import LastNews from './LastNews'
import Help from './Help'

import api from '../services/api'

export default function Main() {
  const [numTargets, setNumTargets] =  useState(0)
  const [numApproval, setNumApproval] =  useState(0)
  const [videos, setVideos] = useState([])
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    api.get('news/homepage')
      .then(response => {
        setNumTargets(response.data.NumTargets)
        setNumApproval(response.data.NumApproval)
        setVideos(response.data.Videos)
        setarticles(response.data.Articles)
        setloading(false)
      })
      .catch(error => {
        console.log(error);
      })
    
  }, [])
  console.log(videos);
  

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (

    <main>
      <NewsForm />
      <Funnel
        numTargets={numTargets}
        numApproval={numApproval}
      />
      <Videos data={videos} />
      <LastNews data={articles} />
      <Help />

    </main>
  )
}
