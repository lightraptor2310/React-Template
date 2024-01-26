import React, { useEffect, useState } from 'react'
import ListCourse from './ListCourse'
import { useParams } from 'react-router-dom'
import { getStudentData } from '../../utils/getData';

const StudentSubject = () => {
    let param = useParams();
    console.log(param);
    const [listSubject, setListSubject] = useState();
    const fetchData = async () => {
        try {
          const studentData = await getStudentData(param.id);
          setListSubject(studentData.MonHoc);
        } catch (error) {
          // Handle error as needed
        }
      };
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <>
        <p className='text-3xl p-3 bg-white rounded-md shadow-md mt-3'>Danh sách môn học</p>
        <ListCourse list={listSubject} id={param.id}/>
    </>
  )
}

export default StudentSubject