import React from 'react'
import ItemCourse from './ItemCourse';
import ClickableBlock from '../../components/ClickableBlock';
const ListCourse = ({list}) => {
    console.log('monhoc')
    console.log(list);
  return (
    <div className="flex flex-col lg:w-[50%]  w-full items-center h-screen">
        <div className="w-full grid grid-cols-1 gap-4 mt-7 mx-auto">
            {list?.map((item,index) => (
              <ClickableBlock>
                <ItemCourse key={index} item={item}/>
              </ClickableBlock>
            ))}
            </div>
    </div>
  )
}

export default ListCourse