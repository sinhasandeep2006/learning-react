import { createContext ,useContext } from "react";
export const ToDocontext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
],addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}
})
export const Todoprovider =ToDocontext.Provider

export const useTodo =()=>{
    return useContext(ToDocontext)
}