import React, { useEffect, useState } from 'react'
import ListCourse from './ListCourse'
import axios from 'axios';
const StudentHome = () => {
    const id = 20520467
    const [data, setData] = useState();
    const getStudent = async ()=> {
      const response = await axios.get(`https://flask-database.vercel.app/home/${id}`);
      setData(response.data);
    }
    useEffect(() => {
      getStudent();
    }, []);
  return (
    <ListCourse list={data?.MonHoc}/>
  )
}

export default StudentHome