import React from 'react'
import ClickableBlock from '../../components/ClickableBlock';

const ListSubjectParent = ({ list }) => {
    console.log(list);
    return (
        <>
            <div className='p-5 font-bold md:text-4xl text-xl'>Con bạn hôm nay học gì ?</div>
            <div className='grid grid-cols-1 gap-5 w-[90%]'>
            {list?.map((item, index) => (
                <ClickableBlock to={`/parent/subject/${item?.MaLMH}`} key={index} >
                    <div className="w-full item-subject bg-white shadow-xl p-5 rounded-xl text-center font-semibold text-lg" key={index} >
                        <p>{item?.TenLMH}</p>
                    </div>
                </ClickableBlock>
            ))}
            </div>
        </>
    )
}

export default ListSubjectParent