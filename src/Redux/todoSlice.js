import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        items: [
            {
                id:1,
                title: ' i start to go hyderabad',
                description: ' some desctiption about the todos',
                completed: false
            },
            {
                id:2,
                title: 'Book a ticket',
                description: ' i start to book a ticket tomorrow at 6:00pm',
                completed: false
            },
            {
                id:3,
                title: 'attend react classes',
                description: ' start  the online classes tomorrow at 6:00pm',
                completed: true
            }
        ]
    }
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        removeTodo: (state,action) => {
            const remainingItems = state.items.filter((item)=>{
                return item.id !== action.payload
            })
            return{
                items: remainingItems
            }
        },
        toggleTodo: (state,action) => {
            const updateItem = state.items.map((item,index) => {
                if(item.id === action.payload)
                {
                    return{...item,completed: !item.completed}
                }
                return item
            });

            return{
                items:updateItem
            }
        },
        addTodo: (state,action) => {
            state.items.push(action.payload)
        },
        updateTodo: ( state,action) => {
            const updatedItems = state.items.map((item) => {
                if(action.payload.id === item.id)
                {
                    return{...item,...action.payload}
                }
                return item
            })
            return{
                items:updatedItems
            }
        }
    }

})

export const { removeTodo,toggleTodo,addTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer