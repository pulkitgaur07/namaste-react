import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loaderReducer from "./loaderSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        loader: loaderReducer,
    }
});

export default appStore;