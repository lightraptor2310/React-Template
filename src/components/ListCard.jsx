import React from 'react'
import CardCourse from './CardCourse'

const ListCard = () => {
  return (
    <div className='m-2 mt-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <CardCourse/>
    </div>
  )
}

export default ListCard