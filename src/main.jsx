import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './page/Login.jsx'
import Home from './page/Home.jsx'
import Student from './page/student/Student.jsx'
import Teacher from './page/GiangVien/Teacher.jsx'
import Parent from './page/PhuHuynh/Parent.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './page/SignUp.jsx'
import StudentHome from './page/student/StudentHome.jsx'
import StudentSubject from './page/student/StudentSubject.jsx'
import DetailSubject from './page/student/DetailSubject.jsx'
import Person from './page/student/Person.jsx'
import TeacherHome from './page/GiangVien/TeacherHome.jsx'
import TeacherInfo from './page/GiangVien/TeacherInfo.jsx'
import StudentSetting from './page/student/StudentSetting.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
  ,
  {
    path: "/student",
    element: <Student />,
    children: [
      {
        path: "/student",
        element: <StudentHome/>,
      }
      , 
      {
        path: "/student/subject/:id",
        element: <StudentSubject/>,
      }
      ,
      {
        path: "/student/subject/:id/:id2",
        element: <DetailSubject/>,
      }
      ,
      {
        path: "/student/:id",
        element: <Person/>,
      }
      ,
      {
        path: "/student/setting",
        element: <StudentSetting/>,
      }
    ]
  }
  ,
  {
    path: "/teacher",
    element: <Teacher />,
    children: [
      {
        path: "/teacher",
        element: <TeacherHome/>,
      }
      , 
      {
        path: "/teacher/:id",
        element: <TeacherInfo/>,
      }
    ]
  }
  ,
  {
    path: "/parent",
    element: <Parent />,
    children: [
      {
        path: "/parent",
        element: <TeacherHome/>,
      }
      , 
      {
        path: "/parent/:id",
        element: <TeacherInfo/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
)
