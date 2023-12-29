import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ListCourse from './ListCourse'
import { reactLocalStorage } from 'reactjs-localstorage'
import Rightbar from '../../components/Rightbar'
import axios from 'axios'
import StudentHome from './StudentHome'
import { Navigate } from 'react-router-dom'
const Student = () => {
  
  const [correct,setCorrect] = useState(reactLocalStorage.get('id') ? true : false);
  const login = reactLocalStorage.get('id')
  const id = 20520467
  const [data, setData] = useState();
  const getStudent = async ()=> {
    const response = await axios.get(`https://flask-database.vercel.app/home/${login}`)
    console.log(response.data);
    setData(response.data);
  }
  useEffect(() => {
    
      getStudent();
  },[]);
  if(!correct) {
    return <Navigate to={'/login'}/>
  }
  return (
    <>
    <Box>
    <Navbar id={data?.TenSV[0]}/>
    <Stack direction={`row`} spacing={2}>
      <Sidebar/>
      <StudentHome list={data?.MonHoc}/>
      <Rightbar/>
    </Stack>
    </Box>
   </>
  )
}

export default Student