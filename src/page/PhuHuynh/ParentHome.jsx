import React, { useEffect, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage';
import { getParent } from '../../utils/getData';
import ListSubjectParent from './ListSubjectParent';

const ParentHome = () => {
  const [id, setId] = useState(reactLocalStorage.get('user'));
    const [data, setData] = useState();
    const getParenthome = async ()=> {
      const response = await getParent(id);
      setData(response);
    }
    useEffect(() => {
      getParenthome();
    }, []);
    console.log(data)

  return (
    <>
    <ListSubjectParent list={data?.['Danh sach mon hoc']}/>
    </>
  )
}

export default ParentHome