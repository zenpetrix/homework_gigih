import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        user:null,
        token:null
    },
    reducers:{
        setUser(state,action){
            state.user = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

export const userAction = userSlice.actions

export default userSlice.reducer