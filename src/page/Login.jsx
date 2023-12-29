import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import { Navigate, redirect } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [success, setSuccess] = useState(false);
    const handleLogin = async ()=> {
      const res = await axios.post('https://flask-database.vercel.app/login', {
        id: username,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.data);
      if(res.data.isCorrect === true) {
        reactLocalStorage.set('id',username);
        reactLocalStorage.set('type','sv');
        setSuccess(true);
      }
    }
    
  return (
   <>
     {success && <Navigate to="/student"/>}
     <div className="signin-wrap lg:w-1/3 md:w-1/2 w-[90%] mx-auto flex flex-col items-center bg-slate-200 rounded mt-20 md:px-16 px-2 py-5 gap-4 ">
            <p className='text-2xl mb-4'>Login</p>
            <TextField
              id="username"
              label="Acount name"
              value={username}
              onChange={(e)=> {setUsername(e.target.value)}}
              size='small'
              fullWidth
              required
            />
            <TextField
              id="username"
              label="Password"
              value={password}
              onChange={(e)=> {setPassword(e.target.value)}}
              size='small'
              fullWidth
              required
            />
            <Button type='submit' onClick={handleLogin} variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
            </Link>
        </div>
   </>
  )
}

export default Login