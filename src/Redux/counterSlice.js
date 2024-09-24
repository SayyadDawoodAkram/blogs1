import { createSlice } from "@reduxjs/toolkit";

const initialState = 10;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state,action) =>{
            return state = state + 1
        },
        decrementCounter: (state,action) =>{
            return state = state -1
        }
    }
});

export const { incrementCounter, decrementCounter } = counterSlice.actions
export default counterSlice.reducer
