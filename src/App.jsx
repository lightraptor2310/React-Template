import {Link, Route, Routes} from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Button from '@mui/material/Button'
const App = () => {
  const [value, setValue] = useState(new Date());
  return (
    <><p>Trang chủ của nhóm kinh khủng</p>
    <p>Bấm vào nút đăng nhập phía dưới</p>
    <Button variant="contained" color="primary">
    <Link to="/login">Đăng nhập</Link>
    </Button>
  
    </>
  )
}
export default App