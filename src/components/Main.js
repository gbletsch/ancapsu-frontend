import React, { useState, useEffect } from 'react'

import NewsForm from './NewsForm'
import Funnel from './Funnel'
import Videos from './Videos'
import LastNews from './LastNews'
import Help from './Help'
import Stats from './Stats'

import api from '../services/api'

export default function Main() {
  const [loading, setloading] = useState(true)

  const [numTargets, setNumTargets] =  useState(0)
  const [numApproval, setNumApproval] =  useState(0)
  const [videos, setVideos] = useState([])
  const [articles, setarticles] = useState([])
  const [stats, setstats] = useState([])
  useEffect(() => {
    api.get('news/homepage')
      .then(response => {
        console.log('response', response.data.Statistics);
        
        setNumTargets(response.data.NumTargets)
        setNumApproval(response.data.NumApproval)
        setVideos(response.data.Videos)
        setarticles(response.data.Articles)
        setstats(response.data.Statistics)

        setloading(false)
      })
      .catch(error => {
        console.log(error);
      })
    
  }, [])
  

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
      <Stats data={stats} />
    </main>
  )
}
