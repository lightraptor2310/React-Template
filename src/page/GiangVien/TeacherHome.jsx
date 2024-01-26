import React, { useEffect, useState } from 'react'
import { getTeacherSubject } from '../../utils/getData';
import { reactLocalStorage } from 'reactjs-localstorage';
import ListSubject from './ListSubject';

const dataSubject = [
  {
    MaLMH: "CE410.O11",
    TenLMH: 'Hệ thống kỹ thuật máy tính - CE410.O11',
  },
];
const TeacherHome = () => {
  const [id, setId] = useState(reactLocalStorage.get('user'));
    const [data, setData] = useState();
    const getStudent = async ()=> {
      const response = await getTeacherSubject(id);
      setData(response);
    }
    useEffect(() => {
      getStudent();
    }, []);
    console.log(data)
  return (
    <>
    {/* <ListSubject list={data?.['Thong tin lop hoc']}/> */}
    <ListSubject list={dataSubject}/>
    </>
  )
}

export default TeacherHome