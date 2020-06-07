import React, {
  useEffect,
  useState
} from 'react'

import LittleCard from './LittleCard'
import api from '../services/api'

export default function ListOfLittleCards(props) {
  const {
    title,
    subtitle
  } = props.location.state
  
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)
  const [ini, setini] = useState(0)
  const max = 10
  const baseUrl = props.match.url
  console.log("base", baseUrl);

  const [url, seturl] = useState(`${baseUrl}?token=&ini=${ini}&max=${max}`)
  // console.log('url', url)

  useEffect(() => {
    api.get(url)
      .then(response => {
        // console.log('response', response.data.Targets);
        switch (baseUrl) {
          case '/target-list':
            setdata(response.data.Targets)
            break;
          default:
            break;
        }
        setloading(false)
      })

  }, [baseUrl, ini, url])

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div
      className='margin-border-main'
    >
      <h4>{title}</h4>
      <h5 className='mt-10' >{subtitle}</h5>
      {
        
        data.map(item => {
          let authors, id, link, mainCategory, title, photo, reference, startingText = ''
          let categories = []
          
          switch (baseUrl) {
            case '/target-list':
              console.log('ITEM', item)
              authors = item.Authors
              categories = item.Categories.Categories
              id = item.Id
              link = `/target/${id}`
              mainCategory = item.Categories.MainCategory
              photo = `https://ancap.su/api/Target/Image?id=${id}`
              reference = `${authors.AuthoredLabel} ${authors.Authored.Name} - ${authors.DateLabel} ${authors.Date}`

              startingText = item.StartingText
              title = item.Title
              break;
          
            default:
              break;
          }
 

          return (
            <LittleCard
              key={id}

              baseUrl={baseUrl}
              categories={categories}
              id={id}
              link={link}
              mainCategory={mainCategory}
              photo={photo}
              reference={reference}
              startingText={startingText}
              title={title}
            />  
          )
        })
      }
    </div>
  )
}
