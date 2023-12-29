import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Rightbar = () => {

  return (
    <div className='lg:w-[25%] lg:flex hidden flex-row justify-center'>
      <div className='p-3 fixed mt-5 lg:block hidden'>
      <Calendar/>
      </div>
    </div>
  )
}

export default Rightbar