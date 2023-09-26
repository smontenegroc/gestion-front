import axios from "axios";

export const getFiles = async(state, token) => {
    try{
        const request = await axios.get(`http://localhost:4000/api/files`, {
            headers: {
                "x-access-token": token
            }
        })
        state(request.data)
    } catch(error){
        console.log('Hubo un error:', error.message)
    }
}
