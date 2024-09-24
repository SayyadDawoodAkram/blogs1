import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterOne: 20,
    counterTwo: 30
}

const counterObjectSlice = createSlice({
    name: "dawood",
    initialState,
    reducers: {
        incrementCounterOne: (state,action) => {
            return{
                ...state,
                counterOne: state.counterOne + 2
            }
        },
        decrementCounterOne: (state,action) => {
            return{
                ...state,
                counterOne: state.counterOne - 4
            }
        },
        incrementCounterTwo: (state,action) => {
            return{
                ...state,
                counterTwo: state.counterTwo + 3
            }
        },
        decrementCounterTwo: (state,action) => {
            return{
                ...state,
                counterTwo: state.counterTwo - 1
            }
        }

    }
});

export const { incrementCounterOne, decrementCounterOne, incrementCounterTwo, decrementCounterTwo} = counterObjectSlice.actions
export default counterObjectSlice.reducer