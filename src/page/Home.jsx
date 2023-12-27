import React from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Course from '../components/Course'
const Home = () => {
  return (
    <>
    <Box>
    <Navbar/>
    <Stack direction={`row`} spacing={2}>
      <Sidebar/>
      <Course/>
    </Stack>
    </Box>
      {/* <p>Hello</p> */}
   </>
  )
}

export default Home