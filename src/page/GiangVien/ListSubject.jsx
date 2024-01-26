import React from 'react'
import ClickableBlock from '../../components/ClickableBlock';

const ListSubject = ({list}) => {
    console.log(list);
  return (
    <>
        <div className='p-5 font-bold md:text-4xl text-xl'>Danh sách môn học của bạn</div>
    {list?.map((item,index) => (
      <ClickableBlock to={`/teacher/${item?.MaLMH}`} key={index}>
        <div className="item-subject bg-white shadow-xl p-5 rounded-xl text-center font-semibold text-lg" key={index} >
        <p>{item?.TenLMH}</p>
      </div>
      </ClickableBlock>
    ))}
    </>
  )
}

export default ListSubject