import {Route, Routes} from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(new Date());
  return (
    <><h1>Hello</h1>
    <Calendar value={value}/></>
  )
}
export default App