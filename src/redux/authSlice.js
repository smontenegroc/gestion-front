import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            const { token } = action.payload
            state.token = token
        }
    }
})

export const { addAuth } = authSlice.actions
export default authSlice.reducer