import axios from "axios";

export const getUsers = async(state, token) => {

    try {
        const response = await axios.get('http://localhost:4000/api/users', {
            headers: {
                "x-access-token": token
            }
        })
        state(response.data)  
    } catch (error) {
        console.log('Hubo un error:', error.message)
    }
}

export const getUser = async(username, state, token) => {
    try {
        const request = await axios.get(`http://localhost:4000/api/users/${username}`, {
            headers: {
                "x-access-token": token
            }
        })
        state(request.data)        
    } catch (error) {
        console.log('Hubo un error:', error.message)
    }
}

export const getRoles = async(state) => {
    try {
        const request = await axios.get(`http://localhost:4000/api/roles`)
        state(request.data)        
    } catch (error) {
        console.log('Hubo un error:', error.message)
    }
}

