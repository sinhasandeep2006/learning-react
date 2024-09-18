import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoslice'

export const store = configureStore({
    reducer:todoReducer
})

//           work on the Redux Toolkit
//
// step 1 : make a app 
// step 2 : in app make a File store.js that conatine the code
//         import {configureStore} from '@reduxjs/toolkit'
//
// give the know of the reduces to the store
// //         export const store = configureStore({})
//
// step 3 : make a folder reducers or slices both are same
// mathod to  make a slice 
//
// import { createSlice } from "@reduxjs/toolkit";
// after import make a store form where you initals the data
// const initialState =( can be object and the array)
//
// way to create the slice
// const todoSlice = createSlice({
//     name:' todo',   the todo is the name that we show in the browswr
//     initialState,    insiatla state
//     reducers:{
    // addTodo: sayhellp,
    // removeTodo:(state,action)=>{},
//
    // here we got the excess of the two things 1 STATE and 2 Action
//
    // State give the all the present data in the store
//}
// export  const { addTodo,removeTodo,updateTodo,delteTodo}=todoSlice.actions

// export default todoSlice.reducer
// // })

