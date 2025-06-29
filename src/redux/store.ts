import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./slices/authSlice.ts";
import {userInfoReducer} from "./slices/userInfoSlice.ts";


export const store = configureStore({
    reducer: {
        "auth": authReducer,
        "userInfo": userInfoReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch