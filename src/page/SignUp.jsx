import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from '@mui/material';
import BackToHome from '../components/BackToHome';
const SignUp = () => {
    const [firstname, setFirstName] = useState();
    const [lastname, setlastName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassWord] = useState();
    
  return (
    
    <>
    <BackToHome />
        <div className="signup-wrap lg:w-1/3 md:w-1/2 w-[90%] mx-auto flex flex-col items-center bg-slate-200 rounded mt-20 md:px-16 px-2 py-5 gap-4 ">
            <p className='text-2xl mb-4'>Sign up</p>
            <div className="flex md:flex-row flex-col gap-4 w-full">
            <div className="item">
                <TextField
              id="firstname"
              label="First Name"
              value={firstname}
              onChange={(e)=> {setUsername(e.target.value)}}
              size='small'
              required
              fullWidth
            />
            </div>
            <div className="item">
                <TextField
              id="lastname"
              label="Last Name"
              value={lastname}
              onChange={(e)=> {setUsername(e.target.value)}}
              size='small'
              required
              fullWidth
            />
            </div>
            </div>
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={(e)=> {setPassword(e.target.value)}}
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
              Sign Up
            </Button>
            <Link href="/login" variant="body2">
                  {"Already have an account? Login Here"}
            </Link>
        </div>
    </>
  )
}

export default SignUp