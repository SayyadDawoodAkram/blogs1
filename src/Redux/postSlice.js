import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {id: 1,title:'some posts title will come here',description: 'some post descreption will come here'},
        {id: 2,title:'HTML Online Training',description: 'HTML is used to create the structure of a web page'},
        {id: 3,title:'hello guys GoodMorning',description:'Hello guys will completed react course'}
    ]
}
 const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

        deletepost: (state,action) => {
            const remainingItems = state.items.filter((item) =>{
                return item.id !== action.payload
            })
            return {
                items: remainingItems
            }
        },
        addTodo: (state,action) => {
            state.items.push(action.payload)
        }
    }
 })

 export const { deletepost,addTodo } = postSlice.actions

 export default postSlice.reducer