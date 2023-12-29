
import axios from 'axios'
export const getStudent = async (id)=> {
    const response = await axios.get(`https://flask-database.vercel.app/home/${id}`);
    return response.data;
  }