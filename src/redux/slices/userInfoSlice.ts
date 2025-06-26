import {createSlice} from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        name: "Anonym"
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload || "";
        }
    }
})

export const {changeName} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;