import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import axios from "axios";
const Course =  ({id}) => {
  const [data,setData] = useState();

    useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
    const response = await axios.get(`https://flask-database.vercel.app/monhoc/${id}`)
    console.log(response.data);
    setData(response.data);
    }
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default Course;
