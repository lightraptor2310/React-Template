import React from 'react'
import ItemCourse from './ItemCourse';
import ClickableBlock from '../../components/ClickableBlock';
const ListCourse = ({list,id}) => {
  return (
    
        <div className="w-full grid grid-cols-1 gap-4 mt-7 mx-auto">
            {list?.map((item,index) => (
              <ClickableBlock to={`/student/subject/${id}/${item.LopMonHoc}`}>
                <ItemCourse key={index} item={item}/>
              </ClickableBlock>
            ))}
            </div>
  )
}

export default ListCourse