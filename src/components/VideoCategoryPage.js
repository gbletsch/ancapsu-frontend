import React, {
  useEffect, useState
} from 'react'

import {
  Button,
  CardColumns,
  CardLink
} from 'reactstrap'

import VideoCard from './VideoCard'

import api from "../services/api"

export default function VideoCategoryPage(props) {
  const cat = props.match.params.cat
  const nameCat = props.location.state.nameCat
  const pageSize = 10
  
  const [offset, setoffset] = useState(0)
  const [dataset, setdataset] = useState([])
  const [totalVideos, settotalVideos] = useState(0)

  const [loading, setloading] = useState(true)
  const [pagesCount, setpagesCount] = useState(0)
  const [currentPage, setcurrentPage] = useState(0)
  const [url, seturl] = useState(`/video/bycategory/${cat}&ini=${offset}&max=${pageSize}`)


  useEffect(() => {
    console.log(url);
    
    api.get(url)
      .then(response => {
        settotalVideos(response.data.Total)
        setdataset(response.data.Videos);
        // setpagesCount(Math.ceil(dataset.length / pageSize))
        setloading(false)
      })
      .catch(error => console.log(error))
  }, [loading, url])

  function handleClick(e) {
    // e.preventDefault()
    setoffset(offset + pageSize)
    seturl(`/video/bycategory/${cat}&ini=${offset + pageSize}&max=${pageSize}`)
    setloading(true)
    // setcurrentPage(index)
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h3
        style={{
          marginTop: '20px',
          borderTop: '2px black solid',
        }}
      >
        vídeos com categoria {nameCat}
      </h3>
      <p>Número de videos: {totalVideos}</p>
      <CardColumns>
        {
          dataset.map(item => {
            return (
              <VideoCard allData={item} />
            )
          })
        }
        {console.log(dataset)}
        
      </CardColumns>
      <Button onClick={e => handleClick(e)}>Mais videos</Button>
    </div>

  )
}
