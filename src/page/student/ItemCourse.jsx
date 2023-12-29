import React from 'react'

const ItemCourse = ({item}) => {
  return (
   <>
    <div className=' border-sky-600 border-2 flex md:w-[90%]  w-full gap-2 rounded overflow-hidden hover:shadow-xl duration-100'>
        <div className='w-2/5 '>
            <img src="/chip.jpg" alt="" width={300} height={300} className='object-fit'/>
        </div>
        <div className='w-3/5 p-1'>
          <p className=' md:text-lg text-base font-semibold'>{item.TenMonHoc}</p>
          <p className='text-sm mt-2 text-sky-600 font-medium'>{item.TenGiangVien}</p>
        </div>
    </div>
   </>
  )
}

export default ItemCourse