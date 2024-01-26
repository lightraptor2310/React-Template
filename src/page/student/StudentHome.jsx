import React, { useEffect, useState } from 'react'
import ListCourse from './ListCourse'
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { address } from '../../utils/getData';
const StudentHome = () => {
    const [id, setId] = useState(reactLocalStorage.get('user'));
    const [data, setData] = useState();
    const getStudent = async ()=> {
      const response = await axios.get(`${address}/home/${id}`);
      setData(response.data);
    }
    useEffect(() => {
      getStudent();
    }, []);
    console.log(data?.MonHoc);
    return (
      <>
        <ListCourse list={data?.MonHoc} id={id}/>
      </>
  )
}

export default StudentHome