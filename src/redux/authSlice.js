import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roleId: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            const { roleId } = action.payload
            state.roleId = roleId
        }
    }
})

export const { addAuth } = authSlice.actions
export default authSlice.reducer