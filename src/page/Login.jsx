import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material';
import BackToHome from '../components/BackToHome';

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
  return (
    <>
    <BackToHome />
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
            <Button type='submit' variant="contained" color="primary" fullWidth>
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