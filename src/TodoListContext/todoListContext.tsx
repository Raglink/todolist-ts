import React, {createContext, FC, useState} from "react"
import {TodoListContextState} from "./types"

const contextDefaultValues: TodoListContextState = { 
    todoList:["test1","test2"],
    addTodo:()=>{}
}

export const TodoListContext = createContext<TodoListContextState>(contextDefaultValues)
 

const TodoListProvider: FC = ({children})=>{
    const [todoList, setTodoList] = useState<string[]>(contextDefaultValues.todoList)
    const addTodo = (newTask: string)=> setTodoList((todoList) => [...todoList, newTask])
    return(
        <TodoListContext.Provider
            value={{
                todoList,
                addTodo
            }}>
                {children}
        </TodoListContext.Provider>
    )
}
export default TodoListProvider