import React, { useState } from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return <div className={s.paginator}>
    {portionNumber > 1 &&
      <button onClick={() => { setPortionNumber(portionNumber - 1) }} className={s.prev}>PREV</button>}

    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <div 
          className={cn( s.pageNumber, { [s.selectedPage]: currentPage === p } )}
          key={p}
          onClick={(e) => { onPageChanged(p) }}>{p}</div>
      })
    }

    {portionCount > portionNumber &&
      <button onClick={() => { setPortionNumber(portionNumber + 1) }} className={s.next}>NEXT</button>}
  </div>
}

export default Paginator