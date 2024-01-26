import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentInfo } from '../../utils/getData';

const Person = () => {
    const [StudentInfo, setStudentInfo] = useState();
    const param = useParams();
    console.log(param);
    const fetchData = async () => {
        try {
          const studentData = await getStudentInfo(param?.id);
          setStudentInfo(studentData);
        } catch (error) {
          // Handle error as needed
        }
      };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(StudentInfo);
  return (
    <>
        <div className="person-wrapper flex flex-col gap-2 w-[90%] mx-auto my-3">
        <div className='text-3xl text-center font-semibold bg-white shadow-md p-3 rounded-md w-full'><p>Thông tin học sinh</p></div>
        <div className="fullName  bg-white shadow-md p-3 rounded-md w-full text-lg text-center"><p> <span className='font-semibold'>Họ và tên: </span>{StudentInfo?.["Thong tin sinh vien"][0].TenSV}</p></div>
        <div className="student-info flex md:flex-row flex-col gap-2">
            <div className="student-id bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Mã sinh viên: </span>{StudentInfo?.["Thong tin sinh vien"][0].MaSV}</p></div>
            <div className="student-class bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Giới tính: </span>{StudentInfo?.["Thong tin sinh vien"][0].GioiTinh}</p></div>
        </div>
        <div className="student-info flex md:flex-row flex-col gap-2">
            <div className="student-id bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Quê quán: </span>{StudentInfo?.["Thong tin sinh vien"][0].NoiSinh}</p></div>
            <div className="student-class bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Địa chỉ: </span>{StudentInfo?.["Thong tin sinh vien"][0].DiaChi}</p></div>
        </div>
        <div className="phuhuynh text-center text-xl font-semibold bg-white shadow-md p-3 rounded-md w-full">
            <p>Thông tin phụ huynh</p>
        </div>
        {
            StudentInfo?.["Thong tin phu huynh"]?.map((item,index) => (
                <div className='flex flex-col gap-2'>
                    <div className="student-id bg-white shadow-md p-3 rounded-md  w-full text-lg text-center"><p><span className='font-semibold'>Họ và tên: </span>{item?.TenPH}</p></div>
                    <div className="student-class bg-white shadow-md p-3 rounded-md w-full text-lg text-center"><p><span className='font-semibold'>Sđt: </span>{item?.SDT}</p></div>
                    <div className="student-info flex md:flex-row flex-col gap-2">
            <div className="student-id bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Địa chỉ: </span>{item?.DiaChi}</p></div>
            <div className="student-class bg-white shadow-md p-3 rounded-md md:w-1/2 w-full text-lg text-center"><p><span className='font-semibold'>Quan hệ: </span>{item?.QuanHe}</p></div>
        </div>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default Person