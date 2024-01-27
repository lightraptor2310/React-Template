import axios from 'axios'
export const address = 'http://192.168.131.74:5000'
export const getStudentData = async (userId) => {
    try {
      const response = await axios.get(`${address}/home/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  };

export const getStudentSubject = async (userId,subjectId) => {
    try {
      const response = await axios.get(`${address}/monhoc/${userId}/${subjectId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }

export const getStudentInfo = async (id) => {
  try {
    const response = await axios.get(`${address}/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
}

export const getTeacherInfo = async (id) => {
  try {
    const response = await axios.get(`${address}/giangvien/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
}

export const getTeacherSubject = async (id) => {
  try {
    const response = await axios.get(`${address}/giangvien/${id}`);
    const res = await axios.get(`${address}/lopmonhoc/${response?.data?.MaLMH[0]?.MaLMH}`);
    return res?.data
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
}
export const getTeacherSubjectDetail = async (maLMH) => {
  try {
    const res = await axios.get(`${address}/lopmonhoc/${maLMH}`);
    return res?.data
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; 
  }
}

export const getDanhSachDiemDanh = async() => {
  try {
    const res = await axios.get(`${address}/dsdiemdanh`);
    return res;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; 
  }
}

export const getDiemDanh = async(mssv) => {
  try {
    const id =  mssv.toString()
    console.log("mssv "+ typeof(id));
    const res = await axios.get(`${address}/kiemtra/${id}`);

    return res?.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; 
  }
}

export const getDateTime = (date) => {
  var dateTime = new Date(date);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export const getParent = async (id) => {
  try {
    const response = await axios.get(`${address}/phuhuynh/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
}