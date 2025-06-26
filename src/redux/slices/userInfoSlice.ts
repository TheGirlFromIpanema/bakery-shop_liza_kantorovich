import {createSlice} from "@reduxjs/toolkit";


const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        name: "Anonym",
        avatar: "./public/baseProfile.png"
    },
    reducers: {
        currentName(state, action) {
            state.name = action.payload || "";
        },
        currentAvatar(state, action) {
            state.avatar = action.payload || "./public/baseProfile.png";
        }
    }
})

export const {currentName, currentAvatar} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;