import React, { useEffect, useState } from 'react'
import ListCourse from './ListCourse'
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
const StudentHome = () => {
    const [id, setId] = useState(reactLocalStorage.get('user'));
    const [data, setData] = useState();
    const getStudent = async ()=> {
      const response = await axios.get(`https://flask-database.vercel.app/home/${id}`);
      setData(response.data);
    }
    useEffect(() => {
      getStudent();
    }, []);
  return (
    <ListCourse list={data?.MonHoc} id={id}/>
  )
}

export default StudentHome