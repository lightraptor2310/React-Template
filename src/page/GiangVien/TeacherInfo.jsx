import React, { useEffect, useState } from 'react'
import { getTeacherInfo } from '../../utils/getData';
import { useParams } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

const TeacherInfo = () => {
  const [user, setUser] =  useState(reactLocalStorage.get('user'));
  const [TeacherInfo, setTeacherInfo] = useState();
    const fetchData = async () => {
        try {
          const TeacherData = await getTeacherInfo(user);
          setTeacherInfo(TeacherData);
        } catch (error) {
          // Handle error as needed
        }
      };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(TeacherInfo);
  return (
    <>
        <div className="person-wrapper flex flex-col gap-2 w-[90%] mx-auto my-3">
        <div className='text-3xl text-center font-semibold bg-white shadow-md p-3 rounded-md w-full'><p>Thông tin giảng viên</p></div>
        <div className="fullName  bg-white shadow-md p-3 rounded-md w-full text-lg text-center"><p> <span className='font-semibold'>Họ và tên: </span>{TeacherInfo?.["Thong tin giang vien"][0].TenGV}</p></div>
        <div className="student-info flex md:flex-row flex-col gap-2">
            <div className="student-id bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Mã giảng viên: </span>{TeacherInfo?.["Thong tin giang vien"][0].MaGv}</p></div>
            {/* <div className="student-class bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Giới tính: </span></p></div> */}
            <div className="student-class bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Địa chỉ: </span>{TeacherInfo?.["Thong tin giang vien"][0]?.["Dia Chi"]}</p></div>

        </div>
        
        </div>
    </>
  )
}

export default TeacherInfo