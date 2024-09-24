import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {

            const itemExits = state.items.findIndex((item) => item.id === action.payload.id);

            if(itemExits === -1)
            {
                state.items.push(action.payload);
                toast.success('product added to cart', {position:"top-right"})
            
            }
            else
            {
                state.items[itemExits].quantity++;
                toast.info('product quantity increment', {position:"top-right"})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.items))
            
        },
        removeItem : (state,action) => {
            const remainingItem = state.items.filter((item) => {
                return item.id !== action.payload.id
            })

            localStorage.setItem("cartItem",JSON.stringify(remainingItem))
            toast.error('product deleted from cart ', {position:"top-right"})
            state.items = remainingItem;
        },
        decrementQuantity: (state,action) => {
            const itemExits = state.items.findIndex((item) => item.id === action.payload.id);
            if(state.items[itemExits].quantity === 1)
            {
                const remainingItem = state.items.filter((item) => {
                    return item.id !== action.payload.id
                })
                state.items = remainingItem;
                toast.error('product deleted from cart ', {position:"top-right"})
                localStorage.setItem("cartItem",JSON.stringify(remainingItem));
                
            }
            else
            {
                state.items[itemExits].quantity--;
                toast.info('product quantity decrement ', {position:"top-right"})
                localStorage.setItem("cartItem",JSON.stringify(state.items));
            }
            
        },
        clearCart: (state) => {
            state.items = [];
            toast.info('All products remove from cart ', {position:"top-right"})
            localStorage.setItem("cartItem",JSON.stringify(state.items));
           
        },
        getTotalItems: (state,action) => {
            const totalProducts = state.items.reduce((total,item) =>{
               return total += item.quantity
            },0);
            state.cartTotalQuantity = totalProducts
        },
        getTotalAmount: (state,action) => {
            const totalAmount = state.items.reduce((total,item) =>{
               return total += item.quantity * item.price
            },0);
            state.cartTotalAmount = totalAmount
        }
    }
 });

 export const { addToCart, removeItem , decrementQuantity ,clearCart,getTotalItems,getTotalAmount} = cartSlice.actions

 export default cartSlice.reducer