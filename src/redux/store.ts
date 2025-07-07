import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./slices/authSlice.ts";
import {userInfoReducer} from "./slices/userInfoSlice.ts";
import {prodsReducer} from "./slices/productSlice.ts";
import {cartReducer} from "./slices/cartSlice.ts";


export const store = configureStore({
    reducer: {
        "auth": authReducer,
        "userInfo": userInfoReducer,
        "products": prodsReducer,
        "cart": cartReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch