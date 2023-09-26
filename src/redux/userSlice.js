import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roleId: 0,
    fullname: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { roleId, fullname } = action.payload
            state.roleId = roleId
            state.fullname = fullname
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer