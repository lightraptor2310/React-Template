import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material';

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
  return (
    <>
        <div className="signin-wrap md:w-1/3 w-full mx-auto flex flex-col items-center bg-slate-200 rounded mt-20 px-20 py-5 gap-2">
            <p className='text-2xl'>Login</p>
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
            <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
            </Link>
        </div>
    </>
  )
}

export default Login