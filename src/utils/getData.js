
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