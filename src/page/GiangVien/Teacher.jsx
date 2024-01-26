import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Rightbar from '../../components/Rightbar';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import { getStudentData, getTeacherInfo } from '../../utils/getData';
import { reactLocalStorage } from 'reactjs-localstorage';


const Teacher = () => {
  const [loggedInUserId, setLoggedInUserId] = useState(reactLocalStorage.get('user'));
  const type = reactLocalStorage.get('type');
  const [correct, setCorrect] = useState(!!loggedInUserId);
  // const [data, setData] = useState();

  console.log(loggedInUserId);
  console.log(type);
  // const fetchData = async () => {
  //   try {
  //     const TeacherData = await getTeacherInfo(loggedInUserId);
  //     setData(TeacherData);
  //   } catch (error) {
  //     // Handle error as needed
  //   }
  // };

  useEffect(() => {
    // Ensure that correct is updated before calling fetchData
    if (correct) {
      //fetchData();
      
    }
  }, [correct]);

  useEffect(() => {
    // Additional useEffect to update correct when loggedInUserId changes
    setCorrect(!!loggedInUserId);
  }, [loggedInUserId]);
  // console.log(data)
  if (!correct) {
    return <Navigate to={'/login'} />;
  }

  if (correct && type === 'gv') {
    return (
      <>
        {/* <Box>
          <Navbar name={data?.['Thong tin giang vien'][0]?.TenGV} type={type} id={loggedInUserId}/>
          <Stack direction={`row`} spacing={2}>
            <Sidebar type={type} id={reactLocalStorage.get('user')}/>
            <div className="flex flex-col lg:w-[50%]  w-full items-center h-screen bg-slate-100">
              <Outlet />
            </div>
            <Rightbar />
          </Stack>
        </Box> */}
        <Box>
          <Navbar name={'Nguyễn Minh Sơn'} type={"gv"} id={"111118"}/>
          <Stack direction={`row`} spacing={2}>
            <Sidebar type={"gv"} id={"111118"}/>
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

export default Teacher
