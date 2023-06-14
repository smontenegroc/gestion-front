import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    roleId: 0
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        addToken: (state, action) => {
            const { token, roleId } = action.payload
            state.token = token
            state.roleId = roleId
        }
    }
})

export const { addToken } = tokenSlice.actions
export default tokenSlice.reducer