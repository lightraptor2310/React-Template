import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await axios.post('https://flask-database.vercel.app/login', {
        id: username,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(res.data);

      if (res.data.isCorrect === true) {
        reactLocalStorage.set('type',res?.data?.typeAccount );
        reactLocalStorage.set('user',username)
        setSuccess(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error as needed
    }
  };

  return (
    <>
      {success && <Navigate to="/student" />}
      <div className="signin-wrap lg:w-1/3 md:w-1/2 w-[90%] mx-auto flex flex-col items-center bg-slate-200 rounded mt-20 md:px-16 px-2 py-5 gap-4">
        <form onSubmit={handleLogin} className='flex flex-col gap-5 w-full'>
          <p className="text-2xl mb-4 text-center">Login</p>
          <TextField
            id="username"
            label="Account name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="small"
            fullWidths
            required
            aria-label="Username"
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            fullWidth
            required
            type="password"
            aria-label="Password"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Link href="/signup" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </div>
    </>
  );
};

export default Login;
