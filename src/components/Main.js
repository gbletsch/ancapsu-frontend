import React, { useState, useEffect } from 'react'

import MainTop from './MainTop'
import Videos from './Videos'
import LastNews from './LastNews'
import Help from './Help'

import api from '../services/api'
import homepageData from '../services/homepage-data.json'

export default function Main() {
  const [numTargets, setNumTargets] =  useState(0)
  const [numApproval, setNumApproval] =  useState(0)
  const [videos, setVideos] = useState([])
  const [loading, setloading] = useState(true)

  // useEffect(() => {
  //   // console.log(homepageData);
  //   setNumTargets(homepageData.NumTargets)
  //   setNumApproval(homepageData.NumApproval)
  //   setVideos(homepageData.Videos)
  // }, [])


  useEffect(() => {
    api.get('news/homepage', { crossdomain: true })
      .then(response => {
        // console.log(response.data)
        
        setNumTargets(response.data.NumTargets)
        setNumApproval(response.data.NumApproval)
        setVideos(response.data.Videos)
        setloading(false) 
      })
      .catch(error => {
        console.log(error);
      })
    
  }, [loading])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (

    <main>
      <MainTop
        numTargets={numTargets}
        numApproval={numApproval}
      />
      <Videos data={videos} />
      <LastNews />
      <Help />

    </main>
  )
}
