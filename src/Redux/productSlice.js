import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    errorMsg: '',
    status: 'idle'
}

export const fetchProducts = createAsyncThunk("products",async(id = null,rejectWithValue)=>{
    let url = 'https://fakestoreapi.com/products'

    try{

        const res = await axios.get(url);
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending,(state,action) => {
            state.status = "loading";
        }).addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status = "success";
            state.items = action.payload
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.status = 'fail';
            state.errorMsg = action.payload
        })
    }
})

export default productSlice.reducer