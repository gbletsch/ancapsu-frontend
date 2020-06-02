import React, {
  useEffect, useState
} from 'react'

import {
  CardColumns,
} from 'reactstrap'

import NewsCard from './NewsCard'

import api from "../services/api"

export default function VideoCategoryPage(props) {
  const [loading, setloading] = useState(true)

  // console.log('props', props.match);
  const nameCat = props.location.state.nameCat

  const cat = props.match.params.cat
  const pageSize = 10  
  const [offset, setoffset] = useState(0)

  const [url, seturl] = useState(`/article/bycategory/${cat}&ini=${offset}&max=${pageSize}`)

  const [dataset, setdataset] = useState([])
  const [totalArticles, settotalArticles] = useState(0)


  useEffect(() => {
    api.get(url)
      .then(response => {
        console.log('response', response);
        
        settotalArticles(response.data.Total)
        setdataset(response.data.Articles);
        setloading(false)
      })
      .catch(error => console.log(error))
  }, [loading, url])

  




  // function handleClick(e) {
  //   e.preventDefault()
  //   setoffset(offset + pageSize)
  //   seturl(`/article/bycategory/${cat}&ini=${offset + pageSize}&max=${pageSize}`)
  //   setloading(true)
  // }

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
        artigos com categoria {nameCat}
      </h3>
      <p>Número de artigos: {totalArticles}</p>
      <CardColumns>
        {
          dataset.map(item => {
            console.log('item', item)

            return (
              <div>
                <NewsCard data={item} />              </div>
            )
          })
        }
        {console.log(dataset)}
        
      </CardColumns>

    </div>
  )
    // <div>
  //     <Button onClick={e => handleClick(e)}>Mais videos</Button>
    // </div>

  // )
}
