import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './page/Login.jsx'
import Home from './page/Home.jsx'
import Student from './page/student/Student.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './page/SignUp.jsx'

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
  

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
)
