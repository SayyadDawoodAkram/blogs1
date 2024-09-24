import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import counterObjectSlice from "./counterObjectSlice";
import postSlice from "./postSlice";
import todoSlice from "./todoSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const storee = configureStore({
    reducer:{
        counter: counterSlice,
        name: counterObjectSlice,
        posts: postSlice,
        todos: todoSlice,
        products: productSlice,
        cart:cartSlice          //slice or reducer
    }
});

export default storee;