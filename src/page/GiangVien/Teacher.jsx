import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import { getStudentData } from '../../utils/getData';
import { reactLocalStorage } from 'reactjs-localstorage';
const Teacher = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(reactLocalStorage.get('user'));
  const type = reactLocalStorage.get('type');
  const [correct, setCorrect] = useState(!!loggedInUserId);
  const [data, setData] = useState();

  console.log(loggedInUserId);
  console.log(type);
  const fetchData = async () => {
    try {
      const TeacherData = await getStudentData(loggedInUserId);
      setData(TeacherData);
    } catch (error) {
      // Handle error as needed
    }
  };

  useEffect(() => {
    // Ensure that correct is updated before calling fetchData
    if (correct) {
      fetchData();
      
    }
  }, [correct]);

  useEffect(() => {
    // Additional useEffect to update correct when loggedInUserId changes
    setCorrect(!!loggedInUserId);
  }, [loggedInUserId]);

  if (!correct) {
    return <Navigate to={'/login'} />;
  }

  if (correct && type === 'gv') {
    return (
      <>
        <Box>
          <Navbar id={data?.TenSV?.[0]} />
          <Stack direction={`row`} spacing={2}>
            <Sidebar type={type} id={reactLocalStorage.get('user')}/>
            <div className="flex flex-col lg:w-[50%]  w-full items-center h-screen bg-slate-100">
              <Outlet />
            </div>
            <Rightbar />
          </Stack>
        </Box>
      </>
    );
  }
};

export default Teacher;
