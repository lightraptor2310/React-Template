import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getStudentSubject } from "../../utils/getData";


const ParentSubjectDetail = () => {
    const [ParentSubject, setParentSubject] = useState();
    const param = useParams();
    console.log(param);
    const fetchData = async () => {
        try {
          const studentData = await getStudentSubject(param.id2, param.id);
          setParentSubject(studentData);
        } catch (error) {
          // Handle error as needed
        }
      };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(ParentSubject);
    return (
        <>
      <div className="subject-wrapper w-90% mx-auto mt-3">
      <div className="title-subject bg-sky-100 shadow-xl rounded-xl p-2"><p className="md:text-3xl text-xl font-semibold my-5">{ParentSubject?.["Lop mon hoc"][0]?.TenLMH}</p></div>
      <div className="subject-info mt-4 flex md:flex-row flex-col justify-between gap-4">
        <div className="name-teacher md:text-lg text-base bg-sky-100 shadow-xl p-3 md:w-1/2 rounded-xl text-center flex justify-center items-center"><p>Giảng viên: <span className=" text-sky-600 font-medium">{ParentSubject?.["Giang vien"]}</span></p></div>
        <div className="sl md:text-lg text-base bg-sky-100 shadow-xl p-5 md:w-1/2 text-center rounded-xl flex justify-center items-center "><p>Số lượng: <span className=" text-sky-600 font-medium">{ParentSubject?.["Lop mon hoc"][0]?.SoSV}</span></p></div>
      </div>
      <div className="my-4 status-today bg-sky-100 shadow-xl p-5 rounded-xl">
        <p className="status-title font-semibold text-lg text-center">Điểm danh hôm nay</p>
        {ParentSubject?.Kiemtra == true ? <p className=" text-center">Đã điểm danh</p>:<p className=" text-center">Chưa điểm danh</p>}
      </div>
      <div className="my-4 date-learning bg-sky-100 shadow-xl p-5 rounded-xl">
        <p className="date-title font-semibold text-lg text-center">Lịch học lý thuyết</p>
        <div className="date-result flex flex-col gap-3 mt-4">
        {
            ParentSubject?.["Buoi hoc"]?.filter((item) => item?.LoaiBH === 'LT').map((item, index) => (
                
                <div className="item-date flex flex-row justify-around">
                    <div className="status-result" key={index}>{item?.NgayHoc.replace(/_/g, '/')}</div>
                    <div className={'text-emerald-600 font-semibold'}>Đã điểm danh</div>
                </div>
                
            ))
        }
        </div>
      </div>
      <div className="my-4 date-learning bg-sky-100 shadow-xl p-5 rounded-xl">
        <p className="date-title font-semibold text-lg text-center">Lịch học thực hành</p>
        <div className="date-result flex flex-col gap-3 mt-4">
        {
            ParentSubject?.["Buoi hoc"]?.filter((item) => item?.LoaiBH === 'TH').map((item, index) => (
                
                <div className="item-date flex flex-row justify-around">
                    <div className="status-result" key={index}>{item?.NgayHoc.replace(/_/g, '/')}</div>
                    <div className={'text-emerald-600 font-semibold'}>Đã điểm danh</div>
                </div>
                
            ))
        }
        </div>
      </div>
      <div className="my-4 date-learning bg-sky-100 shadow-xl p-5 rounded-xl flex flex-row justify-around items-center">
        <p className="date-title font-semibold text-lg text-center">Điểm số</p>
        <div className="date-result flex flex-col gap-3 font-medium text-blue-600">
        {
            ParentSubject?.Diem
        }
        </div>
      </div>
      </div>
    </>
    )
}

export default ParentSubjectDetail