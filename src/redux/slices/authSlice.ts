import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        authUser: ""
    },
    reducers: {
        loginAction: (state, action) => {
            state.authUser = action.payload
        },
        logoutAction: (state) => {
            state.authUser = "";
        }
    }
})

export const {loginAction, logoutAction} = authSlice.actions;
export const authReducer = authSlice.reducer;