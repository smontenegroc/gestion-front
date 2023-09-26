import axios from 'axios';

export const login = async (username, password) => {


  try {
    // Realizar la solicitud POST a tu API para iniciar sesión
    const response = await axios.post('http://localhost:4000/api/signin', { username, password });

    return response.data
  } catch (error) {
    // Manejar el error según tus necesidades
    throw error;
  }
};
