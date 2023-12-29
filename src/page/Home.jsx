import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ListCourse from './student/ListCourse'
import axios from 'axios'
import Rightbar from '../components/Rightbar'
const Home = ({type,id}) => {
  const [data, setData] = useState();
  const getStudent = async ()=> {
    const response = await axios.get(`https://flask-database.vercel.app/home/${id}`)
    console.log(response.data);
    setData(response.data);
  }
  useEffect(() => {
    getStudent();
  }, []);
  return (
    <>
    <Box>
    <Navbar id={data?.TenSV[0]}/>
    <Stack direction={`row`} spacing={2}>
      <Sidebar/>
      <ListCourse list={data?.MonHoc}/>
      <Rightbar/>
    </Stack>
    </Box>
   </>
  )
}

export default Home