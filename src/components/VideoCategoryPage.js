import React, {
  useEffect, useState
} from 'react'

import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

import api from "../services/api"

export default function VideoCategoryPage(props) {
  const [dataset, setdataset] = useState([])
  const [pagesCount, setpagesCount] = useState(0)
  const [currentPage, setcurrentPage] = useState(0)
  const pageSize = 10

  const cat = props.match.params.cat

  useEffect(() => {
    const url = `/video/bycategory/${cat}&ini=0&max=10000`
    api.get(url)
      .then(response => {
        setdataset(response.data.Videos);
        setpagesCount(Math.ceil(dataset.length / pageSize))
      })
      .catch(error => console.log(error))
  })

  function handleClick(e, index) {
    e.preventDefault()
    setcurrentPage(index)
  }
  
  return (
    <React.Fragment>
    <div
      className='mt-5'
      style={{
        borderTop: '2px #000 solid'
      }}
    >
      <h1>constructing</h1>
      <h1>{pagesCount}</h1>
        <Pagination aria-label='Page navigation example' >
          <PaginationItem disabled={currentPage <= 0} >
            <PaginationLink
              onClick={e => handleClick(e, currentPage -1)}
              previous
              href='#'
            />
          </PaginationItem>

          {[...Array(pagesCount)].map((page, i) => {
            return (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink
                  onClick={e => handleClick(e, i)}
                  href='#'
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem disabled={currentPage >= currentPage - 1}>
            <PaginationLink
              onClick={e => handleClick(e, currentPage + 1)}
              next
              href='#'
            />
          </PaginationItem>

        </Pagination>
    </div>

      {dataset.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      )
      .map((data, i) => {
        console.log(data);
        
        //TODO: Fazer um novo map usando os cards de video do latest

        // return (
        //   <div className="data-slice" key={i}>
        //     {data}
        //   </div>
        // )
      })}

    </React.Fragment>
  )
}
