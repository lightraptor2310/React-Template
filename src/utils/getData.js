
import axios from 'axios'
export const getStudentData = async (userId) => {
    try {
      const response = await axios.get(`https://flask-database.vercel.app/home/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  };

export const getStudentSubject = async (userId,subjectId) => {
    try {
      const response = await axios.get(`https://flask-database.vercel.app/monhoc/${userId}/${subjectId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  }

export const getStudentInfo = async (id) => {
  try {
    const response = await axios.get(`https://flask-database.vercel.app/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
}