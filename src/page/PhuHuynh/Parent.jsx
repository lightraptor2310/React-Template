import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import { getParent } from '../../utils/getData';
import { reactLocalStorage } from 'reactjs-localstorage';

const Parent = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(reactLocalStorage.get('user'));
  const type = reactLocalStorage.get('type');
  const [correct, setCorrect] = useState(!!loggedInUserId);
  const [data, setData] = useState();

  console.log(loggedInUserId);
  console.log(type);
  const fetchData = async () => {
    try {
      const ParentData = await getParent(loggedInUserId);
      setData(ParentData);
    } catch (error) {
      // Handle error as needed
    }
  };
  console.log(data);
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

  if (correct && type === 'ph') {
    return (
      <>
        <Box>
          <Navbar name={data?.["Ten phu huynh"]} type={type} id={loggedInUserId}/>
          <Stack direction={`row`} spacing={2}>
            <Sidebar type={type} id={reactLocalStorage.get('user')}/>
            <div className="flex flex-col lg:w-[50%]  w-full items-center h-screen">
              <Outlet />
            </div>
            <Rightbar />
          </Stack>
        </Box>
      </>
    );
  }
};

export default Parent;