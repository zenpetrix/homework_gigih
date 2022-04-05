import { createSlice } from "@reduxjs/toolkit";


const tokenSlice = createSlice({
    name: 'token',
    initialState: { value: null },
    reducers: {
        setToken(state, action) {
            state.value = action.payload
        }
    }
})

export const tokenAction = tokenSlice.actions

export default tokenSlice