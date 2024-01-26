import React, { useEffect, useState } from 'react'
import { getDanhSachDiemDanh, getTeacherSubjectDetail,getDateTime } from '../../utils/getData';
import { useParams } from 'react-router-dom';


const TeacherSubjectDetail = () => {
    const [TeacherSubject, setTeacherSubject] = useState();
  const param = useParams();
  console.log(param);

  const fetchData = async () => {
    try {
      const teacherData = await getTeacherSubjectDetail(param.id);
      setTeacherSubject(teacherData);
    } catch (error) {
      //Handle error as needed
    }
  };
  useEffect(() => {
    fetchData();
    // fetchdiemdanh();
  }, []);
  console.log(TeacherSubject);
  return (
    <>
    <div className="subject-wrapper w-90% mx-auto mt-3">
      <div className="title-subject bg-white shadow-xl rounded-xl p-2"><p className="md:text-3xl text-xl font-semibold my-5">{TeacherSubject?.["Thong tin lop hoc"][0].TenLMH}</p></div>
      <div className="subject-info mt-4 flex md:flex-row flex-col justify-between gap-4">
        <div className="name-teacher md:text-lg text-base bg-white shadow-xl p-3 md:w-1/2 rounded-xl text-center flex justify-center items-center"><p>Giảng viên: <span className=" text-sky-600 font-medium">Nguyễn Minh Sơn</span></p></div>
        <div className="sl md:text-lg text-base bg-white shadow-xl p-5 md:w-1/2 text-center rounded-xl flex justify-center items-center "><p>Số lượng: <span className=" text-sky-600 font-medium">{TeacherSubject?.["Thong tin lop hoc"][0].SoSV}</span></p></div>
      </div>
      <div className="my-4 status-today bg-white shadow-xl p-5 rounded-xl">
        <p className="status-title font-semibold text-lg text-center mb-3">Danh sách sinh viên điểm danh</p>
        <div className="status-resultn text-center flex flex-row justify-left md:ml-7 ml-0 mb-2 mt-4">
                <div className=" font-semibold text-left w-2/4">Đã điểm danh</div>
                <div className="text-sky-600 font-semibold w-1/4 text-left">{TeacherSubject?.["Danh sach sv diem danh"]?.length}</div>
              </div>
        <div className="status-resultn text-center flex flex-row justify-around mb-2">
                <div className=" font-semibold md:w-1/5 w-2/4 text-left">Mã sinh viên</div>
                <div className=" font-semibold md:w-3/5 w-2/4 text-left">Họ và tên</div>
                {/* <div className="text-sky-600 font-semibold w-1/4">{getDateTime(item?.["Thoi gian diem danh"]?.$date)}</div> */}
              </div>
              
        {
          TeacherSubject?.["Danh sach sv diem danh"]?.map((item,index)=> {
            return (
              <div className="status-resultn text-center flex flex-row justify-around" key={index}>
                <div className="text-emerald-600 font-semibold w-1/4">{item?.MaSV}</div>
                <div className="text-sky-600 font-semibold w-3/4 md:text-left text-center">{item?.TenSV}</div>
                {/* <div className="text-sky-600 font-semibold w-1/4">{getDateTime(item?.["Thoi gian diem danh"]?.$date)}</div> */}
              </div>
            )
          })
        }
        
      </div>
      <div className="my-4 date-learning bg-white shadow-xl p-5 rounded-xl">
        <p className="date-title font-semibold text-lg text-center">Lịch học lý thuyết</p>
        <div className="date-result flex flex-col gap-3 mt-4">
        {
            TeacherSubject?.["Thong tin buoi hoc"]?.filter((item) => item?.LoaiBH === 'LT').map((item, index) => (
                <div className="item-date flex flex-row justify-around">
                    <div className="status-result" key={index}>{item?.NgayHoc.replace(/_/g, '/')}</div>
                    {/* <div className={'text-emerald-600 font-semibold'}>Đã điểm danh</div> */}
                </div>
                
            ))
        }
        </div>
      </div>
      <div className="my-4 date-learning bg-white shadow-xl p-5 rounded-xl">
        <p className="date-title font-semibold text-lg text-center">Lịch học thực hành</p>
        <div className="date-result flex flex-col gap-3 mt-4">
        {
            TeacherSubject?.["Thong tin buoi hoc"]?.filter((item) => item?.LoaiBH === 'TH').map((item, index) => (
                
                <div className="item-date flex flex-row justify-around">
                    <div className="status-result" key={index}>{item?.NgayHoc.replace(/_/g, '/')}</div>
                    {/* <div className={'text-emerald-600 font-semibold'}>Đã điểm danh</div> */}
                </div>
                
            ))
        }
        </div>
      </div>
      <div className="my-4 status-today bg-white shadow-xl p-5 rounded-xl">
        <p className="status-title font-semibold text-lg text-center mb-3">Danh sách sinh viên</p>
        <div className="status-resultn text-center flex flex-row justify-around mb-2">
                <div className=" font-semibold w-1/5">Mã sinh viên</div>
                <div className=" font-semibold w-3/5 text-left">Họ và tên</div>
                {/* <div className="text-sky-600 font-semibold w-1/4">{getDateTime(item?.["Thoi gian diem danh"]?.$date)}</div> */}
              </div>
        {
          TeacherSubject?.["Thong tin sinh vien"]?.map((item,index)=> {
            return (
              <div className="status-resultn text-center flex flex-row justify-around" key={index}>
                <div className="text-emerald-600 font-semibold w-1/5">{item?.MaSV}</div>
                <div className="text-sky-600 font-semibold w-3/5 text-left">{item?.TenSV}</div>
                {/* <div className="text-sky-600 font-semibold w-1/4">{getDateTime(item?.["Thoi gian diem danh"]?.$date)}</div> */}
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

// const TeacherSubjectDetail = () => {
//   const [TeacherSubject, setTeacherSubject] = useState();
// const param = useParams();
// // console.log(param);
// // const fetchData = async () => {
// //   try {
// //     const teacherData = await getTeacherSubjectDetail(param.id);
// //     setTeacherSubject(teacherData);
// //   } catch (error) {
// //     // Handle error as needed
// //   }
// // };
// // useEffect(() => {
// //   fetchData();
// // }, []);
// console.log(TeacherSubject);
// return (
//   <>
//   <div className="subject-wrapper w-90% mx-auto mt-3">
//     <div className="title-subject bg-white shadow-xl rounded-xl p-2"><p className="md:text-3xl text-xl font-semibold my-5">Hệ thống kỹ thuật máy tính - CE410.O11</p></div>
//     <div className="subject-info mt-4 flex md:flex-row flex-col justify-between gap-4">
//       <div className="name-teacher md:text-lg text-base bg-white shadow-xl p-3 md:w-1/2 rounded-xl text-center flex justify-center items-center"><p>Giảng viên: <span className=" text-sky-600 font-medium">Nguyễn Minh Sơn</span></p></div>
//       <div className="sl md:text-lg text-base bg-white shadow-xl p-5 md:w-1/2 text-center rounded-xl flex justify-center items-center "><p>Số lượng: <span className=" text-sky-600 font-medium">40</span></p></div>
//     </div>
//     <div className="my-4 status-today bg-white shadow-xl p-5 rounded-xl">
//       <p className="status-title font-semibold text-lg text-center">Danh sách điểm danh hôm nay</p>
//       <div className="flex flex-col gap-3 mt-4">
//       {
//         ListSV?.map((item, index) => (
//           <div className="status-resultn text-center" key={index}>{item?.["Thong tin diem danh"]?.['Mssv']}</div>
//         ))
//       }
//       </div>
//     </div>
//     <div className="my-4 date-learning bg-white shadow-xl p-5 rounded-xl">
//       <p className="date-title font-semibold text-lg text-center">Lịch học lý thuyết</p>
//       <div className="date-result flex flex-col gap-3 mt-4">
//       {
//           Ngayhoc.map((item,index)=> {
//             return (
//               <div className="item-date flex flex-row justify-around">
//                   <div className="status-result" key={index}>{item?.day}</div>
//               </div>
//             )
//           })
//       }
//       </div>
//     </div>
//     <div className="my-4 date-learning bg-white shadow-xl p-5 rounded-xl">
//       <p className="date-title font-semibold text-lg text-center">Lịch học thực hành</p>
//       <div className="date-result flex flex-col gap-3 mt-4">
//       {Ngayhoc1.map((item,index)=> {
//             return (
//               <div className="item-date flex flex-row justify-around">
//                   <div className="status-result" key={index}>{item?.day}</div>
//               </div>
//             )
//           })}
//       </div>
//     </div>
//     </div>
//   </>
// )
// }

export default TeacherSubjectDetail