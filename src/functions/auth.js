import axios from 'axios';

export const login = async (username, password) => {


  try {
    // Realizar la solicitud POST a tu API para iniciar sesión
    const response = await axios.post('http://localhost:4000/api/signin', { username, password });
    
    // Manejar la respuesta de la solicitud según tus necesidades
    // const { token } = response.data;
    // Realizar acciones adicionales con el token, como almacenarlo en el almacenamiento local (localStorage) o en un estado global (por ejemplo, Redux)
    
    // Retornar la respuesta o realizar alguna acción adicional si es necesario
    return response.data
  } catch (error) {
    // Manejar el error según tus necesidades
    throw error;
  }
};
