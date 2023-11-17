import React from "react";
import ListCard from "./ListCard";

const Course = () => {
  return (
    <>
      <div className="flex flex-col md:w-[75%] w-full items-center h-screen">
        <div className="md:w-[99%] w-[99%] h-[86%] rounded-lg bg-sky-700 m-3 text-white p-10 flex flex-col justify-start items-start bg-[url('/public/vlsi.jpg')]">
          <div className="flex flex-col hero-panel rounded-lg md:w-fit w-full">
            <h1 className="md:text-5xl text-2xl font-base mt-3 ml-2 ">Hello, Kinh khung</h1>
            <h1 className="md:text-5xl text-2xl font-base m-3 ml-2">Welcome to E-learning</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
