import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Hellow world"
    }]
}
export const todoSlice = createSlice({
    name:' todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo ={
                id:nanoid(),
               text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.id);
            if (todo) {
                todo.text = action.text;
            }
        },
        
        delteTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !== action.id)
        }
    } 
})

export  const { addTodo,removeTodo,updateTodo,delteTodo}=todoSlice.actions

export default todoSlice.reducer